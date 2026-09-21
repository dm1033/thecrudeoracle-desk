import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { BOOKS, ETFS, WATCHLIST } from "@/data/watchlist";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/invest")({
  loader: () => getTape(),
  component: InvestPage,
});

function InvestPage() {
  const tape = Route.useLoaderData();
  const [book, setBook] = useState<string>("All");
  const names = useMemo(
    () => (book === "All" ? WATCHLIST : WATCHLIST.filter((n) => n.book === book)),
    [book],
  );

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Invest</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl tracking-tight">
          Watchlist, not a recommendation. Revenue streams, not slogans.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          I monitor names that map onto the barrels and the cash: shale FCF, pre-salt dividends,
          LNG tolls, midstream pipes, tanker tonne-miles, USGC cracks, UKCS tax. I do not tell you
          to buy them. If a house cannot name the stream, it does not belong on this desk.
        </p>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {["All", ...BOOKS].map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBook(b)}
              className={
                book === b
                  ? "h-10 shrink-0 rounded-sm bg-primary px-3 text-sm text-primary-fg"
                  : "h-10 shrink-0 rounded-sm border border-border px-3 text-sm text-muted"
              }
            >
              {b}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-3">
          {names.map((n) => (
            <article key={n.ticker} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-xl">
                  {n.name}{" "}
                  <span className="font-mono text-sm text-muted">
                    {n.ticker} · {n.venue}
                  </span>
                </h2>
                <Badge tone="muted">{n.book}</Badge>
              </div>
              <p className="mt-2 text-sm">{n.theme}</p>
              <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-subtle">Stream</dt>
                  <dd>{n.stream}</dd>
                </div>
                <div>
                  <dt className="text-subtle">Catalyst</dt>
                  <dd>{n.catalyst}</dd>
                </div>
                <div>
                  <dt className="text-subtle">Risk</dt>
                  <dd>{n.risk}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl">Wrappers</h2>
        <p className="mt-2 text-sm text-muted">
          ETFs are a roll yield in a suit. USO is not a barrel of Cushing crude.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {ETFS.map((e) => (
            <div key={e.ticker} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-mono text-sm">{e.ticker}</p>
              <h3 className="font-display text-lg">{e.name}</h3>
              <p className="mt-1 text-sm text-muted">{e.tracks}</p>
              <p className="mt-2 text-sm">{e.risk}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
