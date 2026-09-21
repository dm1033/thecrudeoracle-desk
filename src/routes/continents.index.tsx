import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TapeBar } from "@/components/tape-bar";
import { PROD_AS_OF, REGIONS, RESERVES_AS_OF, type Region } from "@/data/continents";
import { REGION_INDUSTRY } from "@/data/industry";
import { rOverPYears } from "@/data/reserves";
import { formatKbpd } from "@/lib/format";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/continents/")({
  loader: () => getTape(),
  component: ContinentsPage,
});

function ContinentsPage() {
  const tape = Route.useLoaderData();
  const chart = REGIONS.map((r) => ({
    name: r.name.replace("Asia-Pacific", "Asia-Pac"),
    production: Math.round(r.productionKbpd / 10) / 100,
    reserves: Math.round(r.reservesBn),
  }));
  const [left, setLeft] = useState(REGIONS[0].slug);
  const [right, setRight] = useState(REGIONS[1].slug);
  const a = useMemo(() => REGIONS.find((r) => r.slug === left) ?? REGIONS[0], [left]);
  const b = useMemo(() => REGIONS.find((r) => r.slug === right) ?? REGIONS[1], [right]);

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Atlas</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl tracking-tight">
          Knowledge of each continent. The reserves and the revenue streams.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Oil is not evenly poured. The Middle East holds the stock. North America holds the flow.
          South America holds a museum in Venezuela and a cash machine in the pre-salt. Europe holds
          the benchmark. Asia holds the bid. Oceania holds LNG. I split the Middle East and Eurasia out of “Asia”
          because putting Ghawar in a bucket with Daqing is how people get the market wrong.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Spare, technical breakeven, fiscal breakeven and decline sit on the{" "}
          <Link to="/flows" className="underline decoration-border underline-offset-4 hover:text-fg">
            industry book
          </Link>
          . Every country has a{" "}
          <Link to="/producers" className="underline decoration-border underline-offset-4 hover:text-fg">
            producer page
          </Link>
          . Antarctica is a treaty, not a barrel.
        </p>
        <p className="mt-3 text-xs text-subtle">
          Reserves: {RESERVES_AS_OF}. Production: {PROD_AS_OF}.
        </p>

        <div className="mt-8 h-64 rounded-xl border border-border bg-surface p-3 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chart} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fill: "#9a9186", fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fill: "#9a9186", fontSize: 11 }} tickLine={false} axisLine={false} width={36} />
              <Tooltip
                contentStyle={{ background: "#141210", border: "1px solid #2c2722", borderRadius: 10, color: "#f2ebe3" }}
                formatter={(v, n) => [n === "production" ? `${v} mb/d` : `${v} bn bbl`, n === "production" ? "Production" : "Reserves"]}
              />
              <Bar dataKey="production" fill="#d8d0c4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-subtle">
          Production mb/d by petroleum region — the flow, not the stock
        </p>

        <div className="mt-10 rounded-xl border border-border bg-surface p-5">
          <h2 className="font-display text-2xl">Compare two books</h2>
          <p className="mt-1 text-sm text-muted">The meeting question. Stock vs flow vs decline vs the well.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="text-sm">
              <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">Left</span>
              <select
                value={left}
                onChange={(e) => setLeft(e.target.value)}
                className="mt-1 h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm"
              >
                {REGIONS.map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">Right</span>
              <select
                value={right}
                onChange={(e) => setRight(e.target.value)}
                className="mt-1 h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm"
              >
                {REGIONS.map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <Compare a={a} b={b} />
        </div>

        <div className="mt-8 grid gap-4">
          {REGIONS.map((r) => (
            <Link
              key={r.slug}
              to="/continents/$slug"
              params={{ slug: r.slug }}
              className="grid gap-4 rounded-xl border border-border bg-surface p-5 transition-colors duration-150 hover:border-primary/40 sm:grid-cols-12"
            >
              <div className="sm:col-span-7">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {r.continent} · {r.net} · {r.cycle}
                </p>
                <h2 className="mt-1 font-display text-2xl">{r.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.kicker}</p>
              </div>
              <dl className="grid grid-cols-2 gap-3 sm:col-span-5">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Reserves</dt>
                  <dd className="font-mono text-lg tabular-nums">{r.reservesBn.toFixed(0)} bn</dd>
                  <dd className="text-xs text-subtle">{r.reservesShare.toFixed(1)}% of OPEC world</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Production</dt>
                  <dd className="font-mono text-lg tabular-nums">{formatKbpd(r.productionKbpd)}</dd>
                  <dd className="text-xs text-subtle">{r.productionShare.toFixed(1)}% of EIA world</dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Compare({ a, b }: { a: Region; b: Region }) {
  const ia = REGION_INDUSTRY[a.slug];
  const ib = REGION_INDUSTRY[b.slug];
  const rows: { k: string; av: string; bv: string }[] = [
    { k: "Reserves", av: `${a.reservesBn.toFixed(1)} bn`, bv: `${b.reservesBn.toFixed(1)} bn` },
    { k: "Production", av: formatKbpd(a.productionKbpd), bv: formatKbpd(b.productionKbpd) },
    {
      k: "R/P",
      av: rp(a),
      bv: rp(b),
    },
    { k: "Net", av: a.net, bv: b.net },
    { k: "Capital cycle", av: a.cycle, bv: b.cycle },
    {
      k: "Decline (IEA observed)",
      av: ia ? `${ia.observedDeclinePct}%` : "—",
      bv: ib ? `${ib.observedDeclinePct}%` : "—",
    },
    { k: "Technical BE", av: ia?.technicalBe ?? "—", bv: ib?.technicalBe ?? "—" },
    { k: "Fiscal BE", av: ia?.fiscalBe ?? "—", bv: ib?.fiscalBe ?? "—" },
    { k: "Spare", av: ia?.spare ?? "—", bv: ib?.spare ?? "—" },
  ];
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-elevated font-mono text-[11px] uppercase tracking-wider text-muted">
          <tr>
            <th className="px-4 py-3 font-medium"> </th>
            <th className="px-4 py-3 font-medium">{a.name}</th>
            <th className="px-4 py-3 font-medium">{b.name}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.k} className="border-t border-border align-top">
              <td className="px-4 py-3 text-subtle">{r.k}</td>
              <td className="px-4 py-3">{r.av}</td>
              <td className="px-4 py-3">{r.bv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function rp(r: Region) {
  const n = rOverPYears(r.reservesBn, r.productionKbpd);
  return n ? `${n.toFixed(0)} yr` : "—";
}
