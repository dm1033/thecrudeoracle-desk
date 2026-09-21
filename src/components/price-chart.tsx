import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Tape } from "@/lib/tape";

export function PriceChart({ series }: { series: Tape["series"] }) {
  const data = series
    .filter((p) => p.wti != null || p.brent != null)
    .map((p) => ({
      ...p,
      label: new Date(p.t).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }),
    }));

  if (data.length < 2) {
    return (
      <p className="border border-border bg-surface px-4 py-10 text-center text-sm text-muted">
        Chart series unavailable. The tape still stands.
      </p>
    );
  }

  return (
    <div className="h-64 w-full rounded-xl border border-border bg-surface p-3 sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="rgba(242,235,227,0.06)" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: "#9a9186", fontSize: 11, fontFamily: "IBM Plex Mono" }}
            tickLine={false}
            axisLine={false}
            minTickGap={28}
          />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fill: "#9a9186", fontSize: 11, fontFamily: "IBM Plex Mono" }}
            tickLine={false}
            axisLine={false}
            width={42}
          />
          <Tooltip
            contentStyle={{
              background: "#141210",
              border: "1px solid #2c2722",
              borderRadius: 10,
              color: "#f2ebe3",
              fontFamily: "IBM Plex Sans",
              fontSize: 12,
            }}
            formatter={(value, name) => [
              typeof value === "number" ? `$${value.toFixed(2)}` : "—",
              name === "wti" ? "WTI" : "Brent",
            ]}
          />
          <Line type="monotone" dataKey="brent" stroke="#d8d0c4" strokeWidth={1.6} dot={false} />
          <Line type="monotone" dataKey="wti" stroke="#7dba9a" strokeWidth={1.6} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
