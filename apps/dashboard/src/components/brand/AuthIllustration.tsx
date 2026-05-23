"use client";

import { motion } from "framer-motion";

type Variant =
  | "login"
  | "register"
  | "forgot-password"
  | "reset-password"
  | "verify";

interface Props {
  variant: Variant;
  className?: string;
}

/**
 * Editorial illustration for the auth split panel. Each auth context gets
 * its own scene built from the same line-art vocabulary as the marketing
 * site (cream/off-white block, deep ink line work, indigo accent).
 *
 *  - login           → dashboard preview with a balance card landing
 *  - register        → multi-step ladder of forms being completed
 *  - forgot-password → key + envelope on a desk
 *  - reset-password  → padlock with reassembled keys
 *  - verify          → envelope opening with checkmarks
 */
export function AuthIllustration({ variant, className }: Props) {
  return (
    <svg
      viewBox="0 0 480 600"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${variant} illustration`}
    >
      <rect width="480" height="600" fill="var(--bg-soft)" />

      {/* Faint grid */}
      <g stroke="var(--rule)" strokeWidth="0.6" opacity="0.45">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="600" />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 40} x2="480" y2={i * 40} />
        ))}
      </g>

      {/* Soft indigo wash, top */}
      <rect x="0" y="0" width="480" height="240" fill="var(--accent-soft)" opacity="0.6" />

      {variant === "login" && <Login />}
      {variant === "register" && <Register />}
      {variant === "forgot-password" && <ForgotPassword />}
      {variant === "reset-password" && <ResetPassword />}
      {variant === "verify" && <Verify />}

      {/* Editorial corner caption */}
      <text
        x="32"
        y="568"
        fontSize="11"
        fontFamily="var(--font-mono)"
        fill="var(--faint)"
      >
        ↘ {variant.replace("-", " ")} · useroutr
      </text>
      <text
        x="448"
        y="568"
        textAnchor="end"
        fontSize="11"
        fontFamily="var(--font-mono)"
        fill="var(--faint)"
      >
        v1.1
      </text>
    </svg>
  );
}

/* ── login: floating dashboard card with a balance landing ─────────── */
function Login() {
  return (
    <g>
      {/* Big editorial copy */}
      <text
        x="40"
        y="120"
        fontSize="11"
        fontFamily="var(--font-mono)"
        fill="var(--faint)"
        letterSpacing="1.4"
      >
        WELCOME BACK
      </text>
      <text
        x="40"
        y="178"
        fontSize="44"
        fontFamily="var(--font-display)"
        fontWeight="600"
        fill="var(--lead)"
      >
        Pay anything.
      </text>
      <text
        x="40"
        y="222"
        fontSize="44"
        fontFamily="var(--font-fraunces)"
        fontStyle="italic"
        fill="var(--body)"
      >
        Settle everywhere.
      </text>

      {/* Floating dashboard card */}
      <motion.g
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <rect
          x="40"
          y="290"
          width="400"
          height="220"
          rx="14"
          fill="var(--bg-card)"
          stroke="var(--rule2)"
          strokeWidth="1"
        />
        {/* Top bar */}
        <rect x="40" y="290" width="400" height="40" fill="var(--bg-soft)" />
        <rect x="56" y="304" width="14" height="14" rx="3" fill="var(--lead)" />
        <text
          x="78"
          y="316"
          fontSize="11"
          fontFamily="var(--font-display)"
          fontWeight="500"
          fill="var(--lead)"
        >
          My Useroutr
        </text>
        <text
          x="424"
          y="316"
          textAnchor="end"
          fontSize="10"
          fontFamily="var(--font-mono)"
          fill="var(--faint)"
        >
          $3,842,100.00
        </text>

        {/* Big balance */}
        <text
          x="60"
          y="380"
          fontSize="11"
          fontFamily="var(--font-mono)"
          fill="var(--faint)"
          letterSpacing="1.2"
        >
          BALANCE · USDC · STELLAR
        </text>
        <text
          x="60"
          y="430"
          fontSize="42"
          fontFamily="var(--font-display)"
          fontWeight="600"
          fill="var(--lead)"
        >
          $284,500.00
        </text>

        {/* Bar gauge */}
        <g>
          {Array.from({ length: 36 }).map((_, i) => (
            <motion.rect
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.018 }}
              x={60 + i * 9}
              y="448"
              width="2.5"
              height="20"
              rx="1.25"
              fill={i < 17 ? "var(--accent)" : "var(--rule)"}
              style={{ transformOrigin: `${60 + i * 9}px 468px` }}
            />
          ))}
        </g>
        <text
          x="420"
          y="463"
          textAnchor="end"
          fontSize="11"
          fontFamily="var(--font-mono)"
          fill="var(--faint)"
        >
          47%
        </text>

        {/* Quick actions row */}
        <g>
          {["Send", "Request", "Convert"].map((label, i) => (
            <g key={label}>
              <rect
                x={60 + i * 122}
                y="488"
                width="110"
                height="14"
                rx="7"
                fill={i === 0 ? "var(--accent)" : "var(--bg-soft)"}
                stroke={i === 0 ? "none" : "var(--rule)"}
                strokeWidth="0.8"
              />
              <text
                x={60 + i * 122 + 55}
                y="497.5"
                textAnchor="middle"
                fontSize="9"
                fontFamily="var(--font-mono)"
                fill={i === 0 ? "#fff" : "var(--faint)"}
              >
                {label.toUpperCase()}
              </text>
            </g>
          ))}
        </g>
      </motion.g>
    </g>
  );
}

/* ── register: numbered onboarding steps ─────────────────────────────── */
function Register() {
  const steps = [
    { n: "01", label: "Account", done: true },
    { n: "02", label: "Business verification", done: true },
    { n: "03", label: "API keys", done: false, current: true },
    { n: "04", label: "First payment", done: false },
  ];
  return (
    <g>
      <text x="40" y="120" fontSize="11" fontFamily="var(--font-mono)" fill="var(--faint)" letterSpacing="1.4">
        START BUILDING
      </text>
      <text x="40" y="178" fontSize="40" fontFamily="var(--font-display)" fontWeight="600" fill="var(--lead)">
        Open an account.
      </text>
      <text x="40" y="222" fontSize="40" fontFamily="var(--font-fraunces)" fontStyle="italic" fill="var(--body)">
        Ship in a sprint.
      </text>

      {steps.map((s, i) => (
        <motion.g
          key={s.n}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
        >
          <rect
            x="40"
            y={300 + i * 56}
            width="400"
            height="48"
            rx="10"
            fill={s.current ? "var(--bg-card)" : "var(--bg-card)"}
            stroke={s.current ? "var(--accent)" : "var(--rule)"}
            strokeWidth={s.current ? "1.5" : "1"}
          />
          {/* Step number */}
          <text x="58" y={328 + i * 56} fontSize="12" fontFamily="var(--font-mono)" fill="var(--faint)">
            {s.n}
          </text>
          {/* Label */}
          <text x="92" y={328 + i * 56} fontSize="14" fontFamily="var(--font-display)" fontWeight="500" fill="var(--lead)">
            {s.label}
          </text>
          {/* Status pill */}
          {s.done && (
            <g transform={`translate(396 ${314 + i * 56})`}>
              <circle cx="10" cy="10" r="10" fill="var(--accent)" />
              <path d="M5 10.5 L9 14 L15 7" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          )}
          {s.current && (
            <g transform={`translate(396 ${314 + i * 56})`}>
              <circle cx="10" cy="10" r="9" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="3.5" fill="var(--accent)">
                <animate attributeName="r" values="3.5;5;3.5" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
          )}
          {!s.done && !s.current && (
            <g transform={`translate(396 ${314 + i * 56})`}>
              <circle cx="10" cy="10" r="9" fill="none" stroke="var(--rule2)" strokeWidth="1" strokeDasharray="2 2" />
            </g>
          )}
        </motion.g>
      ))}

      <text x="40" y="554" fontSize="11" fontFamily="var(--font-mono)" fill="var(--faint)">
        ↘ AVERAGE TIME · 4 MIN 32 SEC
      </text>
    </g>
  );
}

/* ── forgot-password: key + envelope ─────────────────────────────────── */
function ForgotPassword() {
  return (
    <g>
      <text x="40" y="120" fontSize="11" fontFamily="var(--font-mono)" fill="var(--faint)" letterSpacing="1.4">
        RECOVER ACCESS
      </text>
      <text x="40" y="178" fontSize="40" fontFamily="var(--font-display)" fontWeight="600" fill="var(--lead)">
        We&apos;ll mail
      </text>
      <text x="40" y="222" fontSize="40" fontFamily="var(--font-fraunces)" fontStyle="italic" fill="var(--body)">
        you a key.
      </text>

      {/* Envelope */}
      <motion.g
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <rect x="100" y="320" width="280" height="180" rx="6" fill="var(--bg-card)" stroke="var(--lead)" strokeWidth="1.4" />
        <path d="M100 320 L240 410 L380 320" fill="none" stroke="var(--lead)" strokeWidth="1.4" />
        <path d="M100 500 L210 410" fill="none" stroke="var(--rule2)" strokeWidth="1.2" />
        <path d="M380 500 L270 410" fill="none" stroke="var(--rule2)" strokeWidth="1.2" />

        {/* Wax seal */}
        <circle cx="240" cy="430" r="20" fill="var(--accent)" />
        <text x="240" y="436" textAnchor="middle" fontSize="14" fontFamily="var(--font-display)" fontWeight="700" fill="#fff">
          U
        </text>
      </motion.g>

      {/* Key */}
      <motion.g
        initial={{ rotate: -8, opacity: 0 }}
        animate={{ rotate: 4, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{ transformOrigin: "240px 230px" }}
      >
        <circle cx="180" cy="240" r="22" fill="none" stroke="var(--lead)" strokeWidth="2" />
        <circle cx="180" cy="240" r="8" fill="var(--bg-card)" stroke="var(--lead)" strokeWidth="1.4" />
        <line x1="200" y1="240" x2="300" y2="240" stroke="var(--lead)" strokeWidth="2" />
        <line x1="280" y1="240" x2="280" y2="252" stroke="var(--lead)" strokeWidth="2" />
        <line x1="290" y1="240" x2="290" y2="248" stroke="var(--lead)" strokeWidth="2" />
      </motion.g>
    </g>
  );
}

/* ── reset-password: padlock with three reassembled keys ─────────────── */
function ResetPassword() {
  return (
    <g>
      <text x="40" y="120" fontSize="11" fontFamily="var(--font-mono)" fill="var(--faint)" letterSpacing="1.4">
        SET A NEW PASSWORD
      </text>
      <text x="40" y="178" fontSize="40" fontFamily="var(--font-display)" fontWeight="600" fill="var(--lead)">
        Lock it in.
      </text>
      <text x="40" y="222" fontSize="40" fontFamily="var(--font-fraunces)" fontStyle="italic" fill="var(--body)">
        Pick something good.
      </text>

      {/* Padlock */}
      <motion.g
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <path
          d="M180 320 L180 290 A60 60 0 0 1 300 290 L300 320"
          fill="none"
          stroke="var(--lead)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect x="160" y="320" width="160" height="120" rx="12" fill="var(--accent)" />
        <circle cx="240" cy="370" r="14" fill="var(--bg-card)" />
        <rect x="237" y="378" width="6" height="22" fill="var(--bg-card)" />
      </motion.g>

      {/* Three password strength meters */}
      <g transform="translate(40 470)">
        {["weak", "ok", "strong"].map((label, i) => (
          <motion.g
            key={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          >
            <rect
              x={i * 140}
              y="0"
              width="120"
              height="6"
              rx="3"
              fill={i === 2 ? "var(--accent)" : i === 1 ? "var(--amber)" : "var(--rule2)"}
            />
            <text
              x={i * 140}
              y="26"
              fontSize="10"
              fontFamily="var(--font-mono)"
              fill="var(--faint)"
              letterSpacing="1.2"
            >
              {label.toUpperCase()}
            </text>
          </motion.g>
        ))}
      </g>
    </g>
  );
}

/* ── verify: envelope opening with checkmarks ─────────────────────────── */
function Verify() {
  return (
    <g>
      <text x="40" y="120" fontSize="11" fontFamily="var(--font-mono)" fill="var(--faint)" letterSpacing="1.4">
        ALMOST THERE
      </text>
      <text x="40" y="178" fontSize="40" fontFamily="var(--font-display)" fontWeight="600" fill="var(--lead)">
        Check your
      </text>
      <text x="40" y="222" fontSize="40" fontFamily="var(--font-fraunces)" fontStyle="italic" fill="var(--body)">
        inbox.
      </text>

      <motion.g
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Envelope back */}
        <rect x="100" y="320" width="280" height="180" rx="6" fill="var(--bg-card)" stroke="var(--lead)" strokeWidth="1.4" />
        {/* Letter peeking out */}
        <rect x="120" y="288" width="240" height="160" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.2" />
        <line x1="140" y1="320" x2="320" y2="320" stroke="var(--lead)" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="140" y1="340" x2="280" y2="340" stroke="var(--lead)" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="140" y1="360" x2="300" y2="360" stroke="var(--lead)" strokeWidth="0.8" strokeOpacity="0.4" />
        <text
          x="140"
          y="388"
          fontSize="13"
          fontFamily="var(--font-mono)"
          fill="var(--accent)"
        >
          ↘ verify-here.useroutr.io
        </text>
        {/* Envelope flap (opened) */}
        <path d="M100 320 L240 220 L380 320" fill="var(--bg-soft)" stroke="var(--lead)" strokeWidth="1.4" />
      </motion.g>

      {/* Floating checks */}
      {[
        { x: 100, y: 250, delay: 0.5 },
        { x: 360, y: 270, delay: 0.65 },
        { x: 80, y: 480, delay: 0.8 },
      ].map((c, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: c.delay }}
        >
          <circle cx={c.x} cy={c.y} r="14" fill="var(--accent)" />
          <path
            d={`M${c.x - 5} ${c.y + 0.5} L${c.x - 1} ${c.y + 4} L${c.x + 6} ${c.y - 3}`}
            stroke="#fff"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      ))}
    </g>
  );
}
