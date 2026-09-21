import { createFileRoute, Link } from "@tanstack/react-router";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { BRIEFINGS } from "@/data/briefings";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/briefing")({
  loader: () => getTape(),
  component: BriefingPage,
});

const SECTIONS: { key: keyof (typeof BRIEFINGS)[0]; label: string }[] = [
  { key: "oil", label: "Oil" },
  { key: "gas", label: "Gas" },
  { key: "supply", label: "Supply" },
  { key: "demand", label: "Demand" },
  { key: "opec", label: "OPEC+" },
  { key: "inventory", label: "Inventories" },
  { key: "geo", label: "Geopolitics" },
  { key: "equities", label: "Equities" },
  { key: "uk", label: "UK / North Sea" },
  { key: "chart", label: "The chart" },
];

function BriefingPage() {
  const tape = Route.useLoaderData();
  const [today, ...rest] = BRIEFINGS;
  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Daily briefing · {today.date}</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight">{today.headline}</h1>
        <div className="mt-4 flex gap-2">
          <Badge tone="neutral">{today.call}</Badge>
          <Badge tone="muted">editorial on public sources</Badge>
        </div>
        <p className="mt-6 text-lg leading-relaxed">{today.bottom}</p>
        <div className="mt-10 grid gap-8">
          {SECTIONS.map((s) => (
            <section key={s.key}>
              <h2 className="font-display text-2xl">{s.label}</h2>
              <p className="mt-2 leading-relaxed text-muted">{today[s.key] as string}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-xs text-subtle">
          Sources: {today.sources.map((s) => s.name).join(" · ")}
        </p>
        <p className="mt-6 text-sm text-muted">
          Same voice on{" "}
          <Link to="/dispatch" className="text-fg underline decoration-border underline-offset-2">
            Dispatch
          </Link>
          , the Crude Oracle Substack on this desk.
        </p>
      </article>
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <h2 className="font-display text-2xl">Archive</h2>
          <ul className="mt-4 grid gap-4">
            {rest.map((b) => (
              <li key={b.date} className="rounded-xl border border-border bg-surface p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{b.date}</p>
                <p className="mt-1 font-display text-xl">{b.headline}</p>
                <p className="mt-2 text-sm text-muted">{b.bottom}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
