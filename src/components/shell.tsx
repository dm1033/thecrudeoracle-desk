import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { DeskSearch } from "@/components/desk-search";
import { cn } from "@/lib/cn";

const NAV = [
  { to: "/", label: "Desk" },
  { to: "/continents", label: "Continents" },
  { to: "/producers", label: "Producers" },
  { to: "/flows", label: "Industry" },
  { to: "/reserves", label: "Reserves" },
  { to: "/trade", label: "Trade" },
  { to: "/ais", label: "AIS" },
  { to: "/invest", label: "Invest" },
  { to: "/jobs", label: "Jobs" },
  { to: "/signals", label: "Signals" },
  { to: "/briefing", label: "Briefing" },
  { to: "/dispatch", label: "Substack" },
  { to: "/sources", label: "Sources" },
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg"
      >
        Skip to desk
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-14 items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-sm border border-border bg-surface">
                <svg viewBox="0 0 24 24" className="size-4 text-primary" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2c.6 4 4 7.2 4 11a4 4 0 1 1-8 0c0-3.8 3.4-7 4-11Z"
                  />
                </svg>
              </span>
              <span className="font-display text-lg leading-none tracking-tight">The Crude Oracle</span>
            </Link>
            <div className="flex items-center gap-2">
              <DeskSearch />
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-md border border-border lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
          <nav className="hidden flex-wrap items-center gap-1 border-t border-border py-1.5 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-sm px-2 py-1.5 text-[13px] transition-colors duration-150",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        {open ? (
          <nav className="border-t border-border px-4 py-3 lg:hidden" aria-label="Mobile">
            <div className="grid gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-11 items-center text-sm text-fg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>
      <main id="main">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-display text-base text-fg">The Crude Oracle</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link to="/jobs" className="hover:text-fg">
                Jobs
              </Link>
              <Link to="/dispatch" className="hover:text-fg">
                Substack
              </Link>
              <a
                href="https://linkedinconstructioncvprofile.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-fg"
              >
                CV review
              </a>
              <Link to="/about" className="hover:text-fg">
                Method
              </Link>
            </div>
          </div>
          <p className="max-w-3xl text-xs leading-relaxed text-subtle">
            Built for the oil industry. Market commentary for information only. Not investment
            advice. Capital at risk. Delayed quotes are delayed. OPEC reserves are OPEC reserves.
            Canada oil sands are not smuggled into the OPEC table. Every figure carries a source.
          </p>
        </div>
      </footer>
    </div>
  );
}
