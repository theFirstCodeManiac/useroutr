import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { ThemeToggle } from "./ThemeToggle";
import { AuthIllustration } from "./AuthIllustration";

type Variant =
  | "login"
  | "register"
  | "forgot-password"
  | "reset-password"
  | "verify";

interface Props {
  illustration: Variant;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  /** Footer area below the form — typically a Sign in / Sign up link */
  footnote?: ReactNode;
}

/**
 * Editorial split-pane auth scaffold. Form left, illustration right on
 * desktop. Mobile collapses to a single column with the illustration hidden
 * to keep the conversion path tight.
 */
export function AuthScaffold({
  illustration,
  eyebrow,
  title,
  description,
  children,
  footnote,
}: Props) {
  return (
    <div className="grid min-h-svh grid-cols-1 bg-background lg:grid-cols-[minmax(420px,560px)_minmax(0,1fr)]">
      {/* LEFT — form column */}
      <main className="relative flex min-h-svh flex-col">
        <header className="flex items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="https://useroutr.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Useroutr — home"
          >
            <Wordmark />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle size="sm" />
            <Link
              href="https://docs.useroutr.com"
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              <span className="link-underline">Docs</span>
              <ArrowUpRight className="size-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </Link>
          </div>
        </header>

        <div className="flex flex-1 items-center justify-center px-6 pb-10 md:px-10">
          <div className="page-enter w-full max-w-md">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1
              className="mt-3 text-[36px] leading-[1.05] tracking-[-0.035em] text-foreground md:text-[44px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              {title}
            </h1>
            {description && (
              <p className="mt-3 text-[15px] text-muted-foreground">
                {description}
              </p>
            )}
            <div className="mt-8">{children}</div>
            {footnote && (
              <div className="mt-8 text-[14px] text-muted-foreground">
                {footnote}
              </div>
            )}
          </div>
        </div>

        <footer className="px-6 pb-6 md:px-10">
          <div className="flex items-center justify-between text-[12px] text-muted-foreground">
            <span style={{ fontFamily: "var(--font-mono)" }}>
              © 2026 Useroutr · thirtn.com
            </span>
            <div className="hidden items-center gap-4 md:flex">
              <Link
                href="https://useroutr.com/terms"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                href="https://useroutr.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="https://status.useroutr.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Status
              </Link>
            </div>
          </div>
        </footer>
      </main>

      {/* RIGHT — illustration column on desktop only */}
      <aside className="relative hidden overflow-hidden border-l border-border bg-muted lg:block">
        <AuthIllustration
          variant={illustration}
          className="h-full w-full object-cover"
        />
      </aside>
    </div>
  );
}
