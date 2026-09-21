import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AskOracle } from "@/components/ask-oracle";
import { PriceChart } from "@/components/price-chart";
import { PrintsBoard } from "@/components/prints-board";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { TODAY } from "@/data/briefings";
import { EARN_ROWS } from "@/data/careers";
import { DISPATCH_ISSUES } from "@/data/dispatch";
import { CALENDAR } from "@/data/calendar";
import { REGIONS, WORLD_PROD_KBPD, WORLD_RESERVES_BN } from "@/data/continents";
import { DESK_AS_OF } from "@/data/prints";
import { DESK_VIEW, SIGNALS } from "@/data/signals";
import { DESK_SOURCES } from "@/data/sources";
import { formatKbpd, formatPct, formatPrice } from "@/lib/format";
import { getTape } from "@/lib/get-tape";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/")({
  loader: () => getTape(),
  component: Home,
});

function Home() {
  const tape = Route.useLoaderData();
  const wti = tape.quotes.find((q) => q.label === "WTI");
  const brent = tape.quotes.find((q) => q.label === "Brent");
  const spread = wti && brent ? brent.price - wti.price : null;

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <section className="mx-auto max-w-6xl px-4 py-10 lg:py-12">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Desk · {TODAY.date} · {tape.dataType} tape
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight sm:text-5xl">
          {TODAY.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{DESK_VIEW.stance}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge tone="neutral">{DESK_VIEW.band}</Badge>
          <Badge tone="muted">{DESK_VIEW.horizon}</Badge>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/briefing"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
          >
            Today's briefing <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/flows"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm"
          >
            Industry book
          </Link>
          <Link
            to="/continents"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm"
          >
            Continent atlas
          </Link>
          <Link
            to="/producers"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm"
          >
            Country books
          </Link>
          <Link
            to="/jobs"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm"
          >
            Jobs · Earn $$$
          </Link>
          <Link
            to="/dispatch"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm"
          >
            Dispatch
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <Stat label="WTI" value={wti ? `$${formatPrice(wti.price)}` : "—"} delta={wti?.changePct} />
          <Stat label="Brent" value={brent ? `$${formatPrice(brent.price)}` : "—"} delta={brent?.changePct} />
          <Stat label="Brent–WTI" value={spread != null ? `$${formatPrice(spread)}` : "—"} />
          <Stat label="World proved" value={`${WORLD_RESERVES_BN.toFixed(0)} bn`} hint="OPEC ASB 2026" />
          <Stat label="Production" value={formatKbpd(WORLD_PROD_KBPD)} hint="EIA Jan 2026" />
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Today's books · {DESK_AS_OF}</p>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl">What the canonical sources actually printed.</h2>
            </div>
            <Link to="/sources" className="hidden text-sm text-muted hover:text-fg sm:inline">
              Register
            </Link>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            EIA, IEA, OPEC, Baker Hughes, Dallas Fed — last print, next window. Delayed tape is delayed. I do not
            paste Bloomberg.
          </p>
          <div className="mt-6">
            <PrintsBoard compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-3 flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl">WTI and Brent, six months</h2>
          <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">Bone Brent · Sage WTI</p>
        </div>
        <PriceChart series={tape.series} />
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Atlas</p>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl">Every continent. The stock and the cash.</h2>
            </div>
            <Link to="/continents" className="hidden text-sm text-muted hover:text-fg sm:inline">
              Open atlas
            </Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {REGIONS.map((r) => (
              <Link
                key={r.slug}
                to="/continents/$slug"
                params={{ slug: r.slug }}
                className="rounded-xl border border-border bg-bg p-4 transition-colors duration-150 hover:border-primary/40"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{r.net} · {r.cycle}</p>
                <h3 className="mt-2 font-display text-xl">{r.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{r.kicker}</p>
                <p className="mt-4 font-mono text-xs tabular-nums text-subtle">
                  {r.reservesBn.toFixed(0)} bn · {formatKbpd(r.productionKbpd)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Industry</p>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl">Spare is not spare if it cannot load.</h2>
          </div>
          <Link to="/flows" className="hidden text-sm text-muted hover:text-fg sm:inline">
            Open the book
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Effective OPEC+ spare 0.22 mb/d. Dallas Fed new-well $66. Natural decline 8% if the cheque stops. Two
          breakevens on every barrel — the well and the budget. Built for the people who actually move oil.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Link to="/flows" className="rounded-xl border border-border bg-surface p-4 hover:border-primary/40">
            <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">Capacity</p>
            <p className="mt-1 font-display text-xl">IEA spare table</p>
            <p className="mt-2 text-sm text-muted">Saudi 5.97 vs 12.11. The gap is stranded, not spare.</p>
          </Link>
          <Link to="/flows" className="rounded-xl border border-border bg-surface p-4 hover:border-primary/40">
            <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">Breakeven</p>
            <p className="mt-1 font-display text-xl">Well vs ministry</p>
            <p className="mt-2 text-sm text-muted">Guyana $22 lifting. Permian new-well $67. Saudi fiscal ~$90.</p>
          </Link>
          <Link to="/flows" className="rounded-xl border border-border bg-surface p-4 hover:border-primary/40">
            <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">Decline</p>
            <p className="mt-1 font-display text-xl">5.5 mb/d a year</p>
            <p className="mt-2 text-sm text-muted">Europe 9.7%. Middle East 1.8%. Shale 35% in year one without pads.</p>
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">For the floor</p>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl">Built for people who move oil.</h2>
          <div className="mt-6 grid gap-3 lg:grid-cols-4">
            <Link to="/trade" className="rounded-xl border border-border bg-bg p-5 hover:border-primary/40">
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">Traders</p>
              <h3 className="mt-1 font-display text-xl">Tape, crack, grades, chokes</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                3-2-1 and HO crack on delayed marks. Export assays. Hormuz throughput vs bypass. Wednesday EIA.
              </p>
            </Link>
            <Link to="/flows" className="rounded-xl border border-border bg-bg p-5 hover:border-primary/40">
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">Operators / NOCs</p>
              <h3 className="mt-1 font-display text-xl">Spare, decline, capex, fiscal</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Effective spare 0.22. Natural decline 8%. $570bn upstream, 90% of it the decline tax. Two breakevens.
              </p>
            </Link>
            <Link to="/invest" className="rounded-xl border border-border bg-bg p-5 hover:border-primary/40">
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">Investors</p>
              <h3 className="mt-1 font-display text-xl">Streams, not slogans</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Watchlist mapped to barrels and cash. Continent revenue. No buy tickets. Name the stream or leave.
              </p>
            </Link>
            <Link to="/jobs" className="rounded-xl border border-border bg-bg p-5 hover:border-primary/40">
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">People · Earn $$$</p>
              <h3 className="mt-1 font-display text-xl">Jobs, transfer, CV review</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                TW and civils already do this work. Rewrite the nouns. Search Rigzone in their language.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Earn $$$</p>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl">How the skill transfers. Then the cheque.</h2>
          </div>
          <Link to="/jobs" className="hidden text-sm text-muted hover:text-fg sm:inline">
            Open jobs
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Public pay books. Not offers. Pick a background, rewrite the nouns, search the boards.
          CV review on Construct CV.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {EARN_ROWS.map((row) => (
            <Link
              key={row.transferId}
              to="/jobs"
              search={{ from: row.transferId, basin: row.basin, q: row.to }}
              className="rounded-xl border border-border bg-surface p-4 hover:border-primary/40"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{row.from}</p>
              <h3 className="mt-2 font-display text-xl">{row.to}</h3>
              <p className="mt-2 font-mono text-xs tabular-nums">{row.cheque}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{row.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Crude Oracle view</p>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl">Eight tells. One desk.</h2>
          <div className="mt-6 grid gap-3">
            {SIGNALS.slice(0, 4).map((s) => (
              <Link key={s.id} to="/signals" className="rounded-xl border border-border bg-surface p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg">{s.title}</h3>
                  <Badge tone={s.stance === "bull" ? "up" : s.stance === "bear" ? "down" : s.stance === "risk" ? "warn" : "muted"}>
                    {s.stance}
                  </Badge>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{s.evidence}</p>
              </Link>
            ))}
          </div>
          <Link to="/signals" className="mt-4 inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
            Full signal board <ArrowRight className="size-4" />
          </Link>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Cadence</p>
          <h2 className="mt-1 font-display text-2xl">What prints this week</h2>
          <ul className="mt-6 divide-y divide-border rounded-xl border border-border bg-surface">
            {CALENDAR.slice(0, 5).map((e) => (
              <li key={e.name} className="px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{e.when}</p>
                <p className="mt-1 text-sm">{e.name}</p>
                <p className="text-sm text-muted">{e.why}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-subtle">
            {DESK_SOURCES.length} canonical sources on the register. Public first. Delayed quotes labelled delayed.
          </p>
        </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-10 grid gap-3 lg:grid-cols-2">
          <Link to="/dispatch" className="rounded-xl border border-border bg-surface p-5 hover:border-primary/40">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">The Crude Oracle Substack</p>
            <h2 className="mt-2 font-display text-2xl">{DISPATCH_ISSUES[0]?.title ?? "Dispatch."}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {DISPATCH_ISSUES[0]?.dek ?? "First-person issues on this desk."}
            </p>
          </Link>
          <a
            href="https://linkedinconstructioncvprofile.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border bg-surface p-5 hover:border-primary/40"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">CV review · Construct CV</p>
            <h2 className="mt-2 font-display text-2xl">Get the page read properly.</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Construction and energy CVs against the advert you are actually chasing. Then search the boards in their nouns.
            </p>
          </a>
        </div>
        <AskOracle />
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  delta,
  hint,
}: {
  label: string;
  value: string;
  delta?: number;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{label}</p>
      {hint ? <p className="text-[11px] text-subtle">{hint}</p> : null}
      <p className="mt-1 font-mono text-lg tabular-nums">{value}</p>
      {typeof delta === "number" ? (
        <p className={cn("font-mono text-xs tabular-nums", delta > 0 ? "text-up" : delta < 0 ? "text-down" : "text-muted")}>
          {formatPct(delta)}
        </p>
      ) : null}
    </div>
  );
}
