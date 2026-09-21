import { TODAY_PRINTS, type SourcePrint } from "@/data/prints";

export function PrintsBoard({ prints = TODAY_PRINTS, compact = false }: { prints?: SourcePrint[]; compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-4" : "grid gap-3 md:grid-cols-2"}>
      {prints.map((p) => (
        <article key={p.id} className="rounded-xl border border-border bg-surface p-4">
          <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
            {p.source} · {p.last}
          </p>
          <h3 className="mt-2 font-display text-lg leading-snug">{p.headline}</h3>
          {compact ? null : <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>}
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-subtle">Next {p.next}</p>
        </article>
      ))}
    </div>
  );
}
