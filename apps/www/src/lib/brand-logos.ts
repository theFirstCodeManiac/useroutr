/**
 * Single source of truth for every brand mark rendered across the site —
 * crypto assets, card networks, bank rails, mobile money, and integrations.
 *
 * When you add a new SVG to /public/currency-logo (or any other folder under
 * /public), register it here with `src`. If a brand doesn't have an official
 * SVG yet, set `glyph` + `tone` and the component renders a clean colored
 * badge as a fallback. The rest of the site (DemoWidget, Features card,
 * Developers integrations grid, etc.) reads from this file — never hardcode
 * a `<span>$</span>` in a feature component again.
 */

export type BrandCategory =
  | "crypto"
  | "card"
  | "bank"
  | "mobile"
  | "integration";

export interface BrandLogoEntry {
  /** Stable id — what you pass to <BrandLogo id="..." />. Lowercase, dash-free. */
  id: string;
  /** Display label shown when `withLabel` is true. */
  label: string;
  category: BrandCategory;
  /** Path to the SVG under /public. Preferred when available. */
  src?: string;
  /** Fallback character(s) rendered inside a colored badge when `src` is absent. */
  glyph?: string;
  /** Tailwind classes for the fallback badge background+text color. */
  tone?: string;
}

/**
 * Keyed by id. Names mirror what designers and PMs would type.
 */
export const BRAND_LOGOS: Record<string, BrandLogoEntry> = {
  /* -------------------- Crypto / stablecoins / chains -------------------- */
  usdc: {
    id: "usdc",
    label: "USDC",
    category: "crypto",
    src: "/currency-logo/usd-coin-usdc-logo.svg",
  },
  usdt: {
    id: "usdt",
    label: "USDT",
    category: "crypto",
    src: "/currency-logo/tether-usdt-logo.svg",
  },
  xlm: {
    id: "xlm",
    label: "XLM",
    category: "crypto",
    src: "/currency-logo/stellar-xlm-logo.svg",
  },
  stellar: {
    // Network alias — same mark as XLM
    id: "stellar",
    label: "Stellar",
    category: "crypto",
    src: "/currency-logo/stellar-xlm-logo.svg",
  },
  eth: {
    id: "eth",
    label: "Ethereum",
    category: "crypto",
    src: "/currency-logo/ethereum-eth-logo.svg",
  },
  sol: {
    id: "sol",
    label: "Solana",
    category: "crypto",
    src: "/currency-logo/solana-sol-logo.svg",
  },
  op: {
    id: "op",
    label: "Optimism",
    category: "crypto",
    src: "/currency-logo/optimism-ethereum-op-logo.svg",
  },

  /* Brands without SVGs yet — fallback to glyph + tone. Drop in a real
     SVG and add `src` to upgrade. */
  eurc: {
    id: "eurc",
    label: "EURC",
    category: "crypto",
    glyph: "€",
    tone: "bg-[#3b5af1] text-white",
  },
  polygon: {
    id: "polygon",
    label: "Polygon",
    category: "crypto",
    glyph: "◆",
    tone: "bg-[#8247e5] text-white",
  },
  soroban: {
    id: "soroban",
    label: "Soroban",
    category: "crypto",
    glyph: "◯",
    tone: "bg-black text-white",
  },
  circle: {
    id: "circle",
    label: "Circle",
    category: "crypto",
    glyph: "C",
    tone: "bg-[#0fbf95] text-white",
  },

  /* -------------------- Card networks -------------------- */
  visa: {
    id: "visa",
    label: "Visa",
    category: "card",
    glyph: "V",
    tone: "bg-[#1a1f71] text-white",
  },
  mastercard: {
    id: "mastercard",
    label: "Mastercard",
    category: "card",
    glyph: "M",
    tone: "bg-[#eb001b] text-white",
  },
  amex: {
    id: "amex",
    label: "Amex",
    category: "card",
    glyph: "A",
    tone: "bg-[#006fcf] text-white",
  },
  card: {
    // Generic card placeholder
    id: "card",
    label: "Card",
    category: "card",
    glyph: "■",
    tone: "bg-ink text-bg",
  },

  /* -------------------- Bank rails -------------------- */
  bank: {
    id: "bank",
    label: "Bank",
    category: "bank",
    glyph: "B",
    tone: "bg-ink text-bg",
  },
  ach: {
    id: "ach",
    label: "ACH",
    category: "bank",
    glyph: "A",
    tone: "bg-bg-soft text-ink border border-rule",
  },
  swift: {
    id: "swift",
    label: "SWIFT",
    category: "bank",
    glyph: "S",
    tone: "bg-bg-soft text-ink border border-rule",
  },
  sepa: {
    id: "sepa",
    label: "SEPA",
    category: "bank",
    glyph: "S",
    tone: "bg-bg-soft text-ink border border-rule",
  },

  /* -------------------- Mobile money / global payouts -------------------- */
  moneygram: {
    id: "moneygram",
    label: "MoneyGram",
    category: "mobile",
    glyph: "M",
    tone: "bg-[#d31837] text-white",
  },
  mpesa: {
    id: "mpesa",
    label: "M-Pesa",
    category: "mobile",
    glyph: "M",
    tone: "bg-[#1a8540] text-white",
  },
  wise: {
    id: "wise",
    label: "Wise",
    category: "mobile",
    glyph: "W",
    tone: "bg-[#9fe870] text-ink",
  },

  /* -------------------- Integrations / SaaS -------------------- */
  stripe: {
    id: "stripe",
    label: "Stripe",
    category: "integration",
    glyph: "S",
    tone: "bg-[#635bff] text-white",
  },
  "stripe-treasury": {
    id: "stripe-treasury",
    label: "Stripe Treasury",
    category: "integration",
    glyph: "S",
    tone: "bg-[#635bff] text-white",
  },
  quickbooks: {
    id: "quickbooks",
    label: "QuickBooks",
    category: "integration",
    glyph: "Q",
    tone: "bg-[#2ca01c] text-white",
  },
  xero: {
    id: "xero",
    label: "Xero",
    category: "integration",
    glyph: "X",
    tone: "bg-[#13b5ea] text-white",
  },
  netsuite: {
    id: "netsuite",
    label: "NetSuite",
    category: "integration",
    glyph: "N",
    tone: "bg-ink text-bg",
  },
  zapier: {
    id: "zapier",
    label: "Zapier",
    category: "integration",
    glyph: "Z",
    tone: "bg-[#ff4a00] text-white",
  },
  slack: {
    id: "slack",
    label: "Slack",
    category: "integration",
    glyph: "S",
    tone: "bg-[#4a154b] text-white",
  },
  notion: {
    id: "notion",
    label: "Notion",
    category: "integration",
    glyph: "N",
    tone: "bg-bg-card text-ink border border-rule",
  },
  webhooks: {
    id: "webhooks",
    label: "Webhooks",
    category: "integration",
    glyph: "{ }",
    tone: "bg-bg-soft text-ink border border-rule",
  },
};

/** Helpful for filtered selectors (e.g. "all integrations"). */
export function listByCategory(category: BrandCategory): BrandLogoEntry[] {
  return Object.values(BRAND_LOGOS).filter((b) => b.category === category);
}
