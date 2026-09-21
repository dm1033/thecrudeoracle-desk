import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { AGENCY_BOOKS, AGENCY_NOTE, QUINTET } from "@/data/agencies";
import { CAPEX_KPIS, CAPEX_REGIONS, CAPEX_THESIS } from "@/data/capex";
import { CHOKEPOINTS } from "@/data/chokepoints";
import {
  CAPITAL_RULES,
  DECLINE,
  DECLINE_NOTE,
  FISCAL,
  FISCAL_NOTE,
  INDUSTRY_AS_OF,
  INDUSTRY_KPIS,
  INDUSTRY_SOURCES,
  INDUSTRY_THESIS,
  OTHER_CONTINENTS,
  REGION_PATHS,
  SHALE_DECLINE,
  SPARE,
  SPARE_NOTE,
  SPARE_TOTALS,
  STEO_BALANCE,
  STEO_NOTE,
  TECHNICAL_BREAKEVENS,
  TECH_BE_NOTE,
  fiscalGapBn,
  type FiscalRow,
  type SpareRow,
} from "@/data/industry";
import { cn } from "@/lib/cn";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/flows")({
  loader: () => getTape(),
  component: FlowsPage,
});

const JUMP = [
  { href: "#balance", label: "Balance" },
  { href: "#spare", label: "Spare" },
  { href: "#chokes", label: "Chokes" },
  { href: "#wells", label: "Wells" },
  { href: "#fiscal", label: "Fiscal" },
  { href: "#decline", label: "Decline" },
  { href: "#capital", label: "Capital" },
];

function FlowsPage() {
  const tape = Route.useLoaderData();
  const [bloc, setBloc] = useState<"all" | SpareRow["bloc"]>("all");
  const [brent, setBrent] = useState(100);
  const [war, setWar] = useState(false);
  const spareRows = useMemo(
    () => (bloc === "all" ? SPARE : SPARE.filter((r) => r.bloc === bloc)),
    [bloc],
  );
  const stack = useMemo(
    () => [...TECHNICAL_BREAKEVENS].sort((a, b) => a.mid - b.mid),
    [],
  );

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <article className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Industry book · {INDUSTRY_AS_OF} · public IEA / EIA / Dallas Fed / OPEC
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
          Spare, breakeven, decline. The four numbers the industry actually runs on.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">{INDUSTRY_THESIS}</p>

        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-6">
          {INDUSTRY_KPIS.map((k) => (
            <div key={k.k} className="rounded-xl border border-border bg-surface px-4 py-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{k.k}</p>
              <p className="mt-1 font-mono text-lg tabular-nums">{k.v}</p>
              <p className="text-xs text-subtle">{k.s}</p>
            </div>
          ))}
        </div>

        <nav className="mt-8 flex gap-2 overflow-x-auto pb-1" aria-label="Industry sections">
          {JUMP.map((j) => (
            <a
              key={j.href}
              href={j.href}
              className="inline-flex h-11 shrink-0 items-center rounded-md border border-border px-3 text-sm text-muted hover:text-fg"
            >
              {j.label}
            </a>
          ))}
        </nav>

        <section id="balance" className="mt-14 scroll-mt-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Balance</p>
          <h2 className="mt-1 font-display text-3xl">2026 is a shortage year. 2027 is a recovery bet.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{STEO_NOTE}</p>
          <div className="mt-6 h-72 rounded-xl border border-border bg-surface p-3 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={STEO_BALANCE} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="rgba(242,235,227,0.06)" vertical={false} />
                <XAxis dataKey="year" tick={{ fill: "#9a9186", fontSize: 11 }} tickLine={false} axisLine={false} />
                <YAxis
                  domain={[98, 112]}
                  tick={{ fill: "#9a9186", fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  width={36}
                />
                <Tooltip
                  contentStyle={{
                    background: "#141210",
                    border: "1px solid #2c2722",
                    borderRadius: 10,
                    color: "#f2ebe3",
                  }}
                  formatter={(v, n) => [`${v} mb/d`, n === "production" ? "Production" : "Consumption"]}
                />
                <Legend />
                <Line type="monotone" dataKey="production" name="Production" stroke="#d8d0c4" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="consumption" name="Consumption" stroke="#7dba9a" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Year</th>
                  <th className="px-4 py-3 font-medium">Liquids prod</th>
                  <th className="px-4 py-3 font-medium">Consumption</th>
                  <th className="px-4 py-3 font-medium">Balance</th>
                  <th className="px-4 py-3 font-medium">OPEC</th>
                  <th className="px-4 py-3 font-medium">Non-OPEC</th>
                  <th className="px-4 py-3 font-medium">Brent STEO</th>
                </tr>
              </thead>
              <tbody>
                {STEO_BALANCE.map((r) => {
                  const bal = +(r.production - r.consumption).toFixed(1);
                  return (
                    <tr key={r.year} className="border-t border-border">
                      <td className="px-4 py-3">{r.year}</td>
                      <td className="px-4 py-3 font-mono tabular-nums">{r.production.toFixed(1)}</td>
                      <td className="px-4 py-3 font-mono tabular-nums">{r.consumption.toFixed(1)}</td>
                      <td className={cn("px-4 py-3 font-mono tabular-nums", bal < 0 ? "text-down" : "text-up")}>
                        {bal > 0 ? "+" : ""}
                        {bal}
                      </td>
                      <td className="px-4 py-3 font-mono tabular-nums">{r.opec.toFixed(1)}</td>
                      <td className="px-4 py-3 font-mono tabular-nums">{r.nonOpec.toFixed(1)}</td>
                      <td className="px-4 py-3 font-mono tabular-nums">${r.brent}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-subtle">
            IEA OMR Sep: world supply 100.7 mb/d in 2026 (−5.7), rebound +8 mb/d in 2027. Demand −2.5 then
            +2.6. Americas Quintet {QUINTET.y2026} then {QUINTET.y2027}. Stocks −507 mb since February.
          </p>

          <h3 className="mt-10 font-display text-2xl">IEA. EIA. OPEC. Three books.</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{AGENCY_NOTE}</p>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            {AGENCY_BOOKS.map((a) => (
              <article key={a.book} className="rounded-xl border border-border bg-surface p-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{a.report}</p>
                <h4 className="mt-1 font-display text-2xl">{a.book}</h4>
                <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <dt className="text-subtle">2026 supply</dt>
                    <dd className="mt-1 font-mono text-xs">{a.y2026Supply}</dd>
                  </div>
                  <div>
                    <dt className="text-subtle">2026 demand</dt>
                    <dd className="mt-1 font-mono text-xs">{a.y2026Demand}</dd>
                  </div>
                  <div>
                    <dt className="text-subtle">2027 supply</dt>
                    <dd className="mt-1 font-mono text-xs">{a.y2027Supply}</dd>
                  </div>
                  <div>
                    <dt className="text-subtle">2027 demand</dt>
                    <dd className="mt-1 font-mono text-xs">{a.y2027Demand}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-sm text-muted">{a.brent2026}</p>
                <p className="mt-1 text-sm text-muted">{a.brent2027}</p>
                <p className="mt-3 text-sm leading-relaxed">{a.tell}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 rounded-xl border border-border px-4 py-3 text-sm leading-relaxed text-muted">
            <span className="text-fg">{QUINTET.name}.</span> {QUINTET.members}. {QUINTET.y2026} in 2026,{" "}
            {QUINTET.y2027} in 2027. {QUINTET.note}
          </p>
        </section>

        <section id="spare" className="mt-16 scroll-mt-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Spare capacity</p>
          <h2 className="mt-1 font-display text-3xl">Nameplate gap is not spare. Effective spare is 0.22 mb/d.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{SPARE_NOTE}</p>
          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Mini k="OPEC+ Aug crude" v={`${SPARE_TOTALS.opecPlusAug}`} s="mb/d IEA" />
            <Mini k="OPEC+ capacity" v={`${SPARE_TOTALS.opecPlusCapacity}`} s="90-day sustainable" />
            <Mini k="Effective spare" v={`${SPARE_TOTALS.opecPlusEffSpare}`} s="the usable number" />
            <Mini k="Saudi Aug / capacity" v="5.97 / 12.11" s="not 6 mb/d of spare" />
          </dl>
          <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
            {(["all", "OPEC-8", "exempt", "non-OPEC"] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBloc(b)}
                className={
                  bloc === b
                    ? "h-11 shrink-0 rounded-md bg-primary px-3 text-sm text-primary-fg"
                    : "h-11 shrink-0 rounded-md border border-border px-3 text-sm text-muted"
                }
              >
                {b === "all" ? "All OPEC+" : b}
              </button>
            ))}
          </div>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Country</th>
                  <th className="px-4 py-3 font-medium">Jul</th>
                  <th className="px-4 py-3 font-medium">Aug</th>
                  <th className="px-4 py-3 font-medium">vs target</th>
                  <th className="px-4 py-3 font-medium">Capacity</th>
                  <th className="px-4 py-3 font-medium">Nameplate gap</th>
                  <th className="px-4 py-3 font-medium">Eff. spare</th>
                </tr>
              </thead>
              <tbody>
                {spareRows.map((r) => {
                  const gap = r.capacity != null ? +(r.capacity - r.aug).toFixed(2) : null;
                  return (
                    <tr key={r.country} className="border-t border-border">
                      <td className="px-4 py-3">
                        {r.country} <Badge tone="muted">{r.bloc}</Badge>
                      </td>
                      <td className="px-4 py-3 font-mono tabular-nums">{r.jul.toFixed(2)}</td>
                      <td className="px-4 py-3 font-mono tabular-nums">{r.aug.toFixed(2)}</td>
                      <td className="px-4 py-3 font-mono tabular-nums">
                        {r.vsTarget == null ? "—" : r.vsTarget.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 font-mono tabular-nums">
                        {r.capacity == null ? "—" : r.capacity.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 font-mono tabular-nums text-muted">
                        {gap == null ? "—" : gap.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 font-mono tabular-nums">
                        {r.effSpare == null ? "—" : r.effSpare.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section id="chokes" className="mt-16 scroll-mt-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Chokepoints</p>
          <h2 className="mt-1 font-display text-3xl">A headline is not a choke. Throughput is.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            Hormuz is 20 mb/d in peacetime and the market in 2026. Malacca is the quiet door into Asia. CPC
            is a single pipe. Cushing is a tank farm that prices WTI. I print the typical volume, the 2026
            loading, and the bypass that does not actually replace it.
          </p>
          <div className="mt-6 grid gap-3">
            {CHOKEPOINTS.map((c) => (
              <article key={c.slug} className="rounded-xl border border-border bg-surface p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl">{c.name}</h3>
                  <p className="font-mono text-sm tabular-nums text-muted">
                    {c.typicalMbd > 0 ? `${c.typicalMbd} ${c.unit}` : c.unit}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted">{c.share}</p>
                <p className="mt-3 text-sm leading-relaxed">{c.now}</p>
                <p className="mt-2 text-sm text-muted">
                  <span className="text-subtle">Bypass · </span>
                  {c.bypass}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-subtle">
                  {c.who} · {c.source}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="wells" className="mt-16 scroll-mt-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Technical breakevens</p>
          <h2 className="mt-1 font-display text-3xl">The well. Not the ministry. Cost of supply, stacked.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{TECH_BE_NOTE}</p>
          <ul className="mt-6 grid gap-2">
            {stack.map((b) => (
              <li key={b.name} className="rounded-xl border border-border bg-surface px-4 py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-lg">{b.name}</p>
                  <p className="font-mono text-sm tabular-nums">
                    ${b.low}–{b.high}
                    <span className="text-muted"> · mid ${b.mid}</span>
                  </p>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-elevated">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${Math.min(100, (b.mid / 90) * 100)}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-muted">{b.note}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-subtle">
                  {b.kind} · {b.region} · {b.source}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="fiscal" className="mt-16 scroll-mt-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Fiscal breakevens</p>
          <h2 className="mt-1 font-display text-3xl">The budget. This is the number that starts wars of words at OPEC.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{FISCAL_NOTE}</p>

          <div className="mt-6 rounded-xl border border-border bg-surface p-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <label htmlFor="brent" className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  Brent assumption
                </label>
                <p className="font-mono text-3xl tabular-nums">${brent}</p>
              </div>
              <button
                type="button"
                onClick={() => setWar((v) => !v)}
                className={
                  war
                    ? "h-11 rounded-md bg-primary px-4 text-sm text-primary-fg"
                    : "h-11 rounded-md border border-border px-4 text-sm"
                }
              >
                {war ? "Aug 2026 volumes" : "Nameplate volumes"}
              </button>
            </div>
            <input
              id="brent"
              type="range"
              min={40}
              max={150}
              step={1}
              value={brent}
              onChange={(e) => setBrent(Number(e.target.value))}
              className="mt-4 w-full accent-primary caret-transparent"
              style={{ caretColor: "transparent" }}
            />
            <div className="mt-2 flex justify-between font-mono text-[11px] uppercase tracking-wider text-subtle">
              <span>$40</span>
              <span>$90 Saudi mid</span>
              <span>$150</span>
            </div>
            <p className="mt-3 text-xs text-subtle">
              {war
                ? "War volumes: Saudi scaled from 9.0 to 5.97 mb/d. The same budget now needs a much higher price. That is the 2026 Gulf print."
                : "Nameplate: a 2025 export world. Do not run 2024 budgets on 2026 loadings."}
            </p>
          </div>

          <div className="mt-4 grid gap-3">
            {FISCAL.map((row) => (
              <FiscalCard key={row.country} row={row} price={brent} war={war} />
            ))}
          </div>
        </section>

        <section id="decline" className="mt-16 scroll-mt-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Decline</p>
          <h2 className="mt-1 font-display text-3xl">Stop writing cheques and the world loses 5.5 mb/d a year.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{DECLINE_NOTE}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {SHALE_DECLINE.map((s) => (
              <div key={s.year} className="rounded-xl border border-border bg-surface px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{s.year}</p>
                <p className="mt-1 font-mono text-2xl tabular-nums">{s.pct}%</p>
                <p className="text-xs text-subtle">Shale, no new drilling · IEA</p>
              </div>
            ))}
          </div>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Book</th>
                  <th className="px-4 py-3 font-medium">Observed % / yr</th>
                  <th className="px-4 py-3 font-medium">Read it as</th>
                </tr>
              </thead>
              <tbody>
                {DECLINE.map((d) => (
                  <tr key={d.name} className="border-t border-border">
                    <td className="px-4 py-3">{d.name}</td>
                    <td className="px-4 py-3 font-mono tabular-nums">{d.observedPct.toFixed(1)}</td>
                    <td className="px-4 py-3 text-muted">{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="capital" className="mt-16 scroll-mt-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Capital & continents</p>
          <h2 className="mt-1 font-display text-3xl">Where the money is going. And where it is not.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{CAPEX_THESIS}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {CAPEX_KPIS.map((k) => (
              <div key={k.k} className="rounded-xl border border-border bg-surface px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{k.k}</p>
                <p className="mt-1 font-mono text-lg tabular-nums">{k.v}</p>
                <p className="text-xs text-subtle">{k.s}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {CAPITAL_RULES.map((r) => (
              <div key={r.title} className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-display text-xl">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {CAPEX_REGIONS.map((r) => (
              <Link
                key={r.slug}
                to="/continents/$slug"
                params={{ slug: r.slug }}
                className="rounded-xl border border-border bg-surface p-5 transition-colors duration-150 hover:border-primary/40"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {r.cycle} cycle · {r.direction}
                </p>
                <h3 className="mt-1 font-display text-2xl">{r.name}</h3>
                <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-subtle">Capital going</dt>
                    <dd className="mt-1 leading-relaxed">{r.going}</dd>
                  </div>
                  <div>
                    <dt className="text-subtle">Not going</dt>
                    <dd className="mt-1 leading-relaxed">{r.notGoing}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-sm text-muted">{r.rp}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {REGION_PATHS.map((r) => (
              <Link
                key={r.slug}
                to="/continents/$slug"
                params={{ slug: r.slug }}
                className="rounded-xl border border-border p-5 transition-colors duration-150 hover:border-primary/40"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">2026–27 path</p>
                <h3 className="mt-1 font-display text-2xl">{r.name}</h3>
                <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-subtle">2026</dt>
                    <dd className="mt-1 leading-relaxed">{r.y2026}</dd>
                  </div>
                  <div>
                    <dt className="text-subtle">2027</dt>
                    <dd className="mt-1 leading-relaxed">{r.y2027}</dd>
                  </div>
                </dl>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {OTHER_CONTINENTS.map((c) => (
              <div key={c.name} className="rounded-xl border border-border p-5">
                <h3 className="font-display text-xl">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-12 text-xs leading-relaxed text-subtle">
          Sources: {INDUSTRY_SOURCES.map((s) => s.name).join(" · ")}. Public pages only. I do not paste paid
          IEA PDF tables or wire copy. Linear fiscal gaps are a desk model, not an MoF. Capacity that cannot
          load is stranded.
        </p>
      </article>
    </div>
  );
}

function Mini({ k, v, s }: { k: string; v: string; s: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">{k}</dt>
      <dd className="mt-1 font-mono text-lg tabular-nums">{v}</dd>
      <dd className="text-xs text-subtle">{s}</dd>
    </div>
  );
}

function FiscalCard({ row, price, war }: { row: FiscalRow; price: number; war: boolean }) {
  const gap = fiscalGapBn(price, row, war);
  const scale = war ? row.augProd / row.typicalProd : 1;
  const net = row.netNameplate * scale;
  return (
    <article className="rounded-xl border border-border bg-surface p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-xl">{row.country}</h3>
        <p className={cn("font-mono text-lg tabular-nums", gap >= 0 ? "text-up" : "text-down")}>
          {gap >= 0 ? "+" : ""}${gap.toFixed(0)}bn
        </p>
      </div>
      <p className="mt-1 font-mono text-xs text-muted">
        BE ${row.beLow}–{row.beHigh} (mid ${row.beMid}) · net {net.toFixed(2)} mb/d
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{row.note}</p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-subtle">{row.source}</p>
    </article>
  );
}
