import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { TapeBar } from "@/components/tape-bar";
import { CALENDAR, INSTRUMENTS } from "@/data/calendar";
import { GRADE_NOTE, GRADES } from "@/data/grades";
import { formatPrice } from "@/lib/format";
import { getTape } from "@/lib/get-tape";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/trade")({
  loader: () => getTape(),
  component: TradePage,
});

function crack321(cl: number, rb: number, ho: number) {
  return 28 * rb + 14 * ho - cl;
}

function TradePage() {
  const tape = Route.useLoaderData();
  const wti = tape.quotes.find((q) => q.label === "WTI")?.price ?? 100.87;
  const rbMark = tape.quotes.find((q) => q.label === "RBOB")?.price ?? 3.44;
  const hoMark = tape.quotes.find((q) => q.label === "ULSD")?.price ?? 5.06;
  const [barrels, setBarrels] = useState(1000);
  const [px, setPx] = useState(wti);
  const [cl, setCl] = useState(wti);
  const [rb, setRb] = useState(rbMark);
  const [ho, setHo] = useState(hoMark);
  const notion = useMemo(() => barrels * px, [barrels, px]);
  const crack = useMemo(() => crack321(cl, rb, ho), [cl, rb, ho]);
  const dieselCrack = useMemo(() => ho * 42 - cl, [ho, cl]);
  const gasCrack = useMemo(() => rb * 42 - cl, [rb, cl]);

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Trade</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl tracking-tight">
          Own the contract you mean. Futures are not ETFs. ETFs are not barrels.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Six billion virtual barrels trade against a hundred million physical ones. I care about
          the physical. I use the virtual. Delayed marks on this desk are not for execution.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <h2 className="font-display text-2xl">Barrel calculator</h2>
            <p className="mt-1 text-sm text-muted">Notional at the mark. CL is $10 per $0.01 per 1,000 bbl.</p>
            <label className="mt-4 block text-xs uppercase tracking-wider text-subtle" htmlFor="bbl">
              Barrels
            </label>
            <input
              id="bbl"
              type="number"
              min={1}
              value={barrels}
              onChange={(e) => setBarrels(Number(e.target.value) || 0)}
              className="mt-1 h-11 w-full rounded-md border border-border bg-elevated px-3 font-mono"
            />
            <label className="mt-3 block text-xs uppercase tracking-wider text-subtle" htmlFor="px">
              $/bbl
            </label>
            <input
              id="px"
              type="number"
              step="0.01"
              value={px}
              onChange={(e) => setPx(Number(e.target.value) || 0)}
              className="mt-1 h-11 w-full rounded-md border border-border bg-elevated px-3 font-mono"
            />
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-subtle">Notional</dt>
                <dd className="font-mono text-lg tabular-nums">${formatPrice(notion, 0)}</dd>
              </div>
              <div>
                <dt className="text-subtle">$0.01 move</dt>
                <dd className="font-mono text-lg tabular-nums">${formatPrice(barrels * 0.01, 0)}</dd>
                <dd className="text-xs text-subtle">per $0.01 move · $10 per 1,000 bbl</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <h2 className="font-display text-2xl">3-2-1 crack</h2>
            <p className="mt-1 text-sm text-muted">
              Two gasoline, one distillate, three crude. 28×RBOB + 14×HO − CL. Delayed tape, not a screen.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <label className="text-xs uppercase tracking-wider text-subtle" htmlFor="cl">
                CL $/bbl
                <input
                  id="cl"
                  type="number"
                  step="0.01"
                  value={cl}
                  onChange={(e) => setCl(Number(e.target.value) || 0)}
                  className="mt-1 h-11 w-full rounded-md border border-border bg-elevated px-2 font-mono text-sm text-fg"
                />
              </label>
              <label className="text-xs uppercase tracking-wider text-subtle" htmlFor="rb">
                RB $/gal
                <input
                  id="rb"
                  type="number"
                  step="0.001"
                  value={rb}
                  onChange={(e) => setRb(Number(e.target.value) || 0)}
                  className="mt-1 h-11 w-full rounded-md border border-border bg-elevated px-2 font-mono text-sm text-fg"
                />
              </label>
              <label className="text-xs uppercase tracking-wider text-subtle" htmlFor="ho">
                HO $/gal
                <input
                  id="ho"
                  type="number"
                  step="0.001"
                  value={ho}
                  onChange={(e) => setHo(Number(e.target.value) || 0)}
                  className="mt-1 h-11 w-full rounded-md border border-border bg-elevated px-2 font-mono text-sm text-fg"
                />
              </label>
            </div>
            <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <div>
                <dt className="text-subtle">3-2-1</dt>
                <dd className={cn("font-mono text-lg tabular-nums", crack >= 0 ? "text-up" : "text-down")}>
                  ${formatPrice(crack)}
                </dd>
              </div>
              <div>
                <dt className="text-subtle">HO crack</dt>
                <dd className="font-mono text-lg tabular-nums">${formatPrice(dieselCrack)}</dd>
              </div>
              <div>
                <dt className="text-subtle">RB crack</dt>
                <dd className="font-mono text-lg tabular-nums">${formatPrice(gasCrack)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-subtle">
              HO × 42 − CL is the diesel scream in $/bbl. In 2026 that is the book, not the 3-2-1 average.
            </p>
          </div>
        </div>

        <h2 className="mt-12 font-display text-2xl">Calendar</h2>
        <ul className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface">
          {CALENDAR.map((e) => (
            <li key={e.name} className="grid gap-1 px-4 py-3 sm:grid-cols-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle sm:col-span-3">{e.when}</p>
              <div className="sm:col-span-9">
                <p className="text-sm">{e.name}</p>
                <p className="text-sm text-muted">{e.why}</p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-display text-2xl">Instruments</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Contract</th>
                <th className="px-4 py-3 font-medium">Home</th>
                <th className="px-4 py-3 font-medium">Unit</th>
                <th className="px-4 py-3 font-medium">Desk note</th>
              </tr>
            </thead>
            <tbody>
              {INSTRUMENTS.map((i) => (
                <tr key={i.name} className="border-t border-border">
                  <td className="px-4 py-3">{i.name}</td>
                  <td className="px-4 py-3 text-muted">{i.home}</td>
                  <td className="px-4 py-3 font-mono text-muted">{i.unit}</td>
                  <td className="px-4 py-3">{i.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 font-display text-2xl">Export grades</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted">{GRADE_NOTE}</p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Grade</th>
                <th className="px-4 py-3 font-medium">Region</th>
                <th className="px-4 py-3 font-medium">API</th>
                <th className="px-4 py-3 font-medium">S %</th>
                <th className="px-4 py-3 font-medium">Marker</th>
                <th className="px-4 py-3 font-medium">Home</th>
              </tr>
            </thead>
            <tbody>
              {GRADES.map((g) => (
                <tr key={g.name} className="border-t border-border">
                  <td className="px-4 py-3">{g.name}</td>
                  <td className="px-4 py-3 text-muted">{g.country}</td>
                  <td className="px-4 py-3 font-mono tabular-nums">{g.api.toFixed(1)}</td>
                  <td className="px-4 py-3 font-mono tabular-nums">{g.sulphurPct.toFixed(2)}</td>
                  <td className="px-4 py-3 text-muted">{g.marker}</td>
                  <td className="px-4 py-3 text-muted">{g.home}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
