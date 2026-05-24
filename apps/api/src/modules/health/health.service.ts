import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRedis } from '@nestjs-modules/ioredis';
import type Redis from 'ioredis';
import { PrismaService } from '../prisma/prisma.service.js';

/** Single check result — included in the /readyz response per dependency. */
export interface CheckResult {
  ok: boolean;
  latency_ms?: number;
  /** Set when ok === false. Short reason, not a full stack. */
  error?: string;
  /** Free-form per-check extras (e.g. last_ledger for stellar). */
  meta?: Record<string, unknown>;
}

export interface ReadinessReport {
  ok: boolean;
  checks: {
    postgres: CheckResult;
    redis: CheckResult;
    stellar: CheckResult;
  };
}

const STELLAR_TIMEOUT_MS = 3_000;

/**
 * Inspects every external dependency the API needs to actually do work
 * (Postgres for state, Redis for queues + idempotency, Stellar Horizon for
 * settlement). Powers /readyz, which Better Stack pings to decide if the
 * status page should turn red.
 *
 * Each check is wrapped in Promise.allSettled so one slow dependency
 * doesn't masquerade as "everything is down" — the response reports per-
 * check status, and the overall `ok` is the AND of all of them.
 */
@Injectable()
export class HealthService {
  private readonly logger = new Logger(HealthService.name);

  constructor(
    private readonly prisma: PrismaService,
    @InjectRedis() private readonly redis: Redis,
    private readonly config: ConfigService,
  ) {}

  async checkReadiness(): Promise<ReadinessReport> {
    const [pg, redis, stellar] = await Promise.allSettled([
      this.checkPostgres(),
      this.checkRedis(),
      this.checkStellar(),
    ]);

    const checks = {
      postgres: settle(pg),
      redis: settle(redis),
      stellar: settle(stellar),
    };

    const ok = Object.values(checks).every((c) => c.ok);
    return { ok, checks };
  }

  private async checkPostgres(): Promise<CheckResult> {
    const start = Date.now();
    // Lightweight round-trip; uses the connection pool, not the schema.
    await this.prisma.$queryRaw`SELECT 1`;
    return { ok: true, latency_ms: Date.now() - start };
  }

  private async checkRedis(): Promise<CheckResult> {
    const start = Date.now();
    const reply = await this.redis.ping();
    return {
      ok: reply === 'PONG',
      latency_ms: Date.now() - start,
      ...(reply !== 'PONG' ? { error: `unexpected reply: ${reply}` } : {}),
    };
  }

  private async checkStellar(): Promise<CheckResult> {
    const horizonUrl =
      this.config.get<string>('STELLAR_HORIZON_URL') ??
      'https://horizon.stellar.org';

    const start = Date.now();
    const res = await fetch(`${horizonUrl}/`, {
      signal: AbortSignal.timeout(STELLAR_TIMEOUT_MS),
      headers: { Accept: 'application/json' },
    });
    const latency_ms = Date.now() - start;

    if (!res.ok) {
      return {
        ok: false,
        latency_ms,
        error: `horizon returned ${res.status}`,
      };
    }

    // Horizon's root returns a HAL document — extract `core_latest_ledger`
    // for useful debugging context, but a 200 is enough for "ready".
    try {
      const body = (await res.json()) as { core_latest_ledger?: number };
      return {
        ok: true,
        latency_ms,
        meta: { latest_ledger: body.core_latest_ledger },
      };
    } catch {
      // Body parse failure shouldn't fail the readiness check.
      return { ok: true, latency_ms };
    }
  }
}

/**
 * Promise.allSettled returns a result per task. Map it into our
 * uniform `CheckResult` shape and stringify rejection reasons.
 */
function settle(
  result: PromiseSettledResult<CheckResult>,
): CheckResult {
  if (result.status === 'fulfilled') return result.value;
  const reason = result.reason;
  const error =
    reason instanceof Error ? reason.message : String(reason ?? 'unknown error');
  return { ok: false, error };
}
