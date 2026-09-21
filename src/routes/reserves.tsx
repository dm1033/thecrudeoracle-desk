import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { OPEC_MEMBERS_SHARE_NOTE, OPEC_RESERVES, SOURCE_SPLIT, WORLD_RESERVES_OPEC, rOverPYears } from "@/data/reserves";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/reserves")({
  loader: () => getTape(),
  component: ReservesPage,
});

function ReservesPage() {
  const tape = Route.useLoaderData();
  const top = OPEC_RESERVES.slice(0, 12).map((r) => ({
    name: r.country.replace("United Arab Emirates", "UAE").replace("United States", "US"),
    bn: r.bn,
  }));

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Stock</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl tracking-tight">
          {WORLD_RESERVES_OPEC.toFixed(1)} billion barrels. Official. End-2025.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {OPEC_MEMBERS_SHARE_NOTE} Venezuela is a museum. Saudi Arabia is a tap. The US is a
          machine. Canada's real number is the oil sands — OPEC leaves them out on purpose.
        </p>

        <div className="mt-8 h-72 rounded-xl border border-border bg-surface p-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={top} layout="vertical" margin={{ top: 8, right: 16, left: 8, bottom: 0 }}>
              <XAxis type="number" tick={{ fill: "#9a9186", fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis type="category" dataKey="name" width={88} tick={{ fill: "#f2ebe3", fontSize: 11 }} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ background: "#141210", border: "1px solid #2c2722", borderRadius: 10, color: "#f2ebe3" }}
                formatter={(v) => [`${v} bn bbl`, "Proved"]}
              />
              <Bar dataKey="bn" fill="#d8d0c4" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <h2 className="mt-12 font-display text-2xl">Where the books disagree</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {SOURCE_SPLIT.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
              <h3 className="font-display text-lg">{s.label}</h3>
              <p className="mt-2 font-mono text-sm tabular-nums">
                OPEC {s.opec} · broader {s.broader}
              </p>
              <p className="mt-2 text-xs text-subtle">{s.source}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl">Top 25 proved crude — OPEC ASB 2026</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">Country</th>
                <th className="px-4 py-3 font-medium">Bn bbl</th>
                <th className="px-4 py-3 font-medium">kb/d</th>
                <th className="px-4 py-3 font-medium">R/P years</th>
                <th className="px-4 py-3 font-medium">Book</th>
              </tr>
            </thead>
            <tbody>
              {OPEC_RESERVES.map((r) => {
                const rp = rOverPYears(r.bn, r.productionKbpd);
                return (
                  <tr key={r.country} className="border-t border-border">
                    <td className="px-4 py-3 font-mono text-subtle">{r.rank}</td>
                    <td className="px-4 py-3">
                      {r.country} {r.opec ? <Badge tone="muted">OPEC</Badge> : null}
                      {r.note ? <p className="mt-1 text-xs text-subtle">{r.note}</p> : null}
                    </td>
                    <td className="px-4 py-3 font-mono tabular-nums">{r.bn.toFixed(2)}</td>
                    <td className="px-4 py-3 font-mono tabular-nums">{r.productionKbpd.toLocaleString()}</td>
                    <td className="px-4 py-3 font-mono tabular-nums">{rp ? rp.toFixed(0) : "—"}</td>
                    <td className="px-4 py-3 text-muted">{r.region}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-subtle">
          R/P uses EIA January 2026 production against OPEC end-2025 reserves. It is a ratio, not a
          forecast. Venezuela's centuries are a warning, not an endowment.
        </p>
      </section>
    </div>
  );
}
