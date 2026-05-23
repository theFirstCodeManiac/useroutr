"use client";

import Link from "next/link";
import { Wordmark } from "@/components/site/Wordmark";

type LinkItem = { label: string; href: string; external?: boolean };

const columns: { title: string; links: LinkItem[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Hosted checkout", href: "/#product" },
      { label: "Pay by link", href: "/#product" },
      { label: "Invoices", href: "/#product" },
      { label: "Global payouts", href: "/#product" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API reference", href: "https://docs.useroutr.io", external: true },
      { label: "SDKs", href: "https://docs.useroutr.io/sdks", external: true },
      { label: "Webhooks", href: "https://docs.useroutr.io/webhooks", external: true },
      { label: "Status", href: "https://status.useroutr.io", external: true },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Customers", href: "/customers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "mailto:hello@useroutr.io" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Security", href: "/security" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/useroutr", glyph: "↗" },
  { label: "X", href: "https://x.com/useroutr", glyph: "𝕏" },
  { label: "LinkedIn", href: "https://linkedin.com/company/useroutr", glyph: "in" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-rule bg-bg pt-16 pb-10 md:pt-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-12 md:gap-x-12">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" aria-label="Useroutr — home" className="inline-block">
              <Wordmark className="h-7" />
            </Link>
            <p className="mt-5 max-w-[320px] text-[14px] leading-relaxed text-ink-2">
              Non-custodial cross-chain payment infrastructure. Built on
              Stellar.{" "}
              <span className="text-ink">
                We never hold the money in between.
              </span>
            </p>
            <a
              href="mailto:hello@useroutr.io"
              className="mt-5 inline-block text-[13px] text-ink-3 underline decoration-rule-2 decoration-from-font underline-offset-4 transition hover:text-ink"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              hello@useroutr.io
            </a>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <span
                className="text-[11px] uppercase tracking-[0.14em] text-ink-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {col.title}
              </span>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noreferrer" : undefined}
                      className="text-[13.5px] text-ink-2 transition-colors hover:text-ink"
                    >
                      {l.label}
                      {l.external && (
                        <span className="ml-1 text-ink-4" aria-hidden>
                          ↗
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-rule pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span
              className="text-[12px] text-ink-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              © {new Date().getFullYear()} Useroutr Labs, Inc.
            </span>
            <a
              href="https://status.useroutr.io"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rule px-3 py-1.5 text-[11.5px] text-ink-2 transition hover:border-ink hover:text-ink"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="size-1.5 rounded-full bg-[#1f6c43] pulse-soft" />
              All systems normal
            </a>
          </div>
          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-8 place-items-center rounded-full border border-rule text-[12px] text-ink-2 transition hover:border-ink hover:text-ink"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.glyph}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
