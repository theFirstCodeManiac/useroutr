"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

interface FinalCTAProps {
  onWaitlistClick: () => void;
}

export function FinalCTA({ onWaitlistClick }: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-accent text-white">
      {/* Soft radial wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 size-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-[400px] -translate-x-1/3 translate-y-1/2 rounded-full bg-black/20 blur-3xl" />
      </div>

      <div className="container-x relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-[840px] text-center"
        >
          <h2
            className="text-[40px] leading-[1.02] tracking-[-0.04em] text-white md:text-[72px] lg:text-[88px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Start accepting payments{" "}
            <span
              className="text-white/85"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
              }}
            >
              today
            </span>
            .
          </h2>
          <p className="mx-auto mt-6 max-w-[540px] text-[16px] leading-relaxed text-white/85 md:text-[18px]">
            Open a Useroutr account in 60 seconds. No setup fees. Cancel anytime
            — and your funds are always yours.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-5">
            <button type="button" onClick={onWaitlistClick} className="magnet">
              <span
                className="pill"
                style={{ background: "#ffffff", color: "var(--accent)" }}
              >
                Open an account
                <ArrowRight className="size-4" strokeWidth={1.7} />
              </span>
            </button>
            <Link
              href="https://docs.useroutr.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 px-3 text-[14px] text-white/85 transition-colors hover:text-white"
            >
              <span className="link-underline">Read the docs</span>
              <ArrowUpRight
                className="size-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.6}
              />
            </Link>
          </div>

          <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11.5px] text-white/75 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-emerald-300 pulse-soft" />
            <span
              className="uppercase tracking-[0.14em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Live on Stellar mainnet
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
