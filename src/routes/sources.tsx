import { createFileRoute } from "@tanstack/react-router";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { PRINTS } from "@/data/prints";
import { DESK_SOURCES, SOURCE_RULE } from "@/data/sources";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/sources")({
  loader: () => getTape(),
  component: SourcesPage,
});

function SourcesPage() {
  const tape = Route.useLoaderData();
  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Sources</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl tracking-tight">
          Everyday, the best public books. Nothing labelled live that is not live.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{SOURCE_RULE}</p>
        <p className="mt-3 max-w-2xl text-sm text-subtle">
          Hierarchy: EIA · OPEC ASB/MOMR · IEA public pages · Energy Institute · Baker Hughes ·
          CFTC · CME/ICE delayed · NSTA · SEC/RNS. I do not paste Bloomberg, Argus or Platts. I
          summarise the public record in my own words.
        </p>

        <h2 className="mt-10 font-display text-2xl">Last print</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          What actually hit the tape. Next window underneath. Resourced every desk day.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {PRINTS.map((p) => (
            <article key={p.id} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl">{p.source}</h3>
                <Badge tone="muted">{p.cadence}</Badge>
              </div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-subtle">
                {p.last} · {p.asOf}
              </p>
              <p className="mt-3 font-display text-lg leading-snug">{p.headline}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-subtle">Next {p.next}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl">The register</h2>
        <div className="mt-8 grid gap-3">
          {DESK_SOURCES.map((s) => (
            <article key={s.id} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-xl">{s.name}</h2>
                <Badge tone="muted">{s.cadence}</Badge>
              </div>
              <p className="mt-1 text-sm text-muted">
                {s.owner} · {s.nextWindow}
              </p>
              <p className="mt-3 text-sm leading-relaxed">{s.why}</p>
              <p className="mt-2 text-xs text-subtle">Used for: {s.usedFor.join(", ")}</p>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline"
              >
                Open source
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
