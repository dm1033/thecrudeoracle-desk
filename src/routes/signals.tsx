import { createFileRoute } from "@tanstack/react-router";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { DESK_VIEW, SIGNALS } from "@/data/signals";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/signals")({
  loader: () => getTape(),
  component: SignalsPage,
});

function SignalsPage() {
  const tape = Route.useLoaderData();
  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Signals</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl tracking-tight">The Crude Oracle view</h1>
        <div className="mt-6 rounded-xl border border-border bg-surface p-5">
          <p className="text-lg leading-relaxed">{DESK_VIEW.stance}</p>
          <p className="mt-3 font-mono text-sm text-muted">{DESK_VIEW.band}</p>
          <p className="mt-2 text-sm text-muted">Invalidation: {DESK_VIEW.invalidation}</p>
        </div>
        <div className="mt-6 grid gap-4">
          {SIGNALS.map((s) => (
            <article key={s.id} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-2xl">{s.title}</h2>
                <div className="flex gap-2">
                  <Badge tone={s.stance === "bull" ? "up" : s.stance === "bear" ? "down" : s.stance === "risk" ? "warn" : "muted"}>
                    {s.stance}
                  </Badge>
                  <Badge tone="muted">{s.confidence}</Badge>
                </div>
              </div>
              <dl className="mt-4 grid gap-4 text-sm leading-relaxed md:grid-cols-3">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Evidence</dt>
                  <dd className="mt-1">{s.evidence}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Contrary</dt>
                  <dd className="mt-1">{s.contrary}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Next print</dt>
                  <dd className="mt-1">{s.next}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
