"use client";

import { motion } from "motion/react";

const accept = [
  "Stellar",
  "USDC",
  "EURC",
  "XLM",
  "Soroban",
  "Circle CCTP",
  "Solana",
  "Polygon",
  "Ethereum",
];

const settle = [
  "Bank · ACH",
  "SWIFT",
  "SEPA",
  "Visa Direct",
  "Mastercard Send",
  "MoneyGram",
  "M-Pesa",
  "Wise",
  "Stripe Treasury",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function TrustStrip() {
  const acceptTrack = [...accept, ...accept];
  const settleTrack = [...settle, ...settle];

  return (
    <section className="relative border-t border-rule pt-20 pb-20 md:pt-28 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="container-x"
      >
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="text-[28px] leading-[1.05] tracking-[-0.035em] text-ink md:text-[42px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Accept <span className="editorial-italic text-ink-2">anything</span>
            . Settle <span className="editorial-italic text-ink-2">anywhere</span>
            .
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-ink-2">
            Take payments in dozens of currencies and networks. Deliver to the
            rail your business already runs on.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className="mt-14 space-y-8 md:mt-20 md:space-y-12"
      >
        <Row label="Accept in" items={acceptTrack} />

        <div className="container-x">
          <div className="mx-auto flex max-w-[360px] items-center gap-3">
            <span className="h-px flex-1 bg-rule" />
            <span className="eyebrow whitespace-nowrap text-ink-3">
              Bridged in 2–4 seconds
            </span>
            <span className="h-px flex-1 bg-rule" />
          </div>
        </div>

        <Row label="Settle to" items={settleTrack} reverse />
      </motion.div>
    </section>
  );
}

function Row({
  label,
  items,
  reverse,
}: {
  label: string;
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div>
      <div className="container-x mb-3">
        <span className="eyebrow">{label}</span>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div
          className="marquee-track"
          style={{ animationDirection: reverse ? "reverse" : "normal" }}
        >
          {items.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="shrink-0 text-[22px] tracking-[-0.025em] text-ink-3 md:text-[30px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              <span className="mr-12 inline-flex items-center gap-3 md:mr-16">
                {p}
                <span aria-hidden className="text-ink-4">
                  ·
                </span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
