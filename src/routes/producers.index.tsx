import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { REGIONS } from "@/data/continents";
import { allCountryBooks } from "@/data/producers";
import { rOverPYears } from "@/data/reserves";
import { formatKbpd } from "@/lib/format";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/producers/")({
  loader: () => getTape(),
  component: ProducersIndex,
});

type SortKey = "reserves" | "production" | "name";

function ProducersIndex() {
  const tape = Route.useLoaderData();
  const [region, setRegion] = useState("all");
  const [sort, setSort] = useState<SortKey>("reserves");
  const books = useMemo(() => {
    const list = region === "all" ? allCountryBooks() : allCountryBooks().filter((c) => c.region.slug === region);
    return [...list].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "production") return b.producer.productionKbpd - a.producer.productionKbpd;
      return b.producer.reservesBn - a.producer.reservesBn;
    });
  }, [region, sort]);

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Producers</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl tracking-tight">
          Every country on the atlas. The stock, the flow, the cheque.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Continents are the map. Countries are the trade. Each book names the reserves, the barrels, the
          revenue stream and where the capital actually goes — or does not.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setRegion("all")}
            className={chip(region === "all")}
          >
            All
          </button>
          {REGIONS.map((r) => (
            <button key={r.slug} type="button" onClick={() => setRegion(r.slug)} className={chip(region === r.slug)}>
              {r.name}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {(["reserves", "production", "name"] as SortKey[]).map((k) => (
            <button key={k} type="button" onClick={() => setSort(k)} className={chip(sort === k)}>
              {k === "reserves" ? "Stock" : k === "production" ? "Flow" : "A–Z"}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Country</th>
                <th className="px-4 py-3 font-medium">Region</th>
                <th className="px-4 py-3 font-medium">Bn bbl</th>
                <th className="px-4 py-3 font-medium">kb/d</th>
                <th className="px-4 py-3 font-medium">R/P</th>
                <th className="px-4 py-3 font-medium">NOC / book</th>
              </tr>
            </thead>
            <tbody>
              {books.map((c) => {
                const rp = rOverPYears(c.producer.reservesBn, c.producer.productionKbpd);
                return (
                  <tr key={c.slug} className="border-t border-border">
                    <td className="px-4 py-3">
                      <Link
                        to="/producers/$slug"
                        params={{ slug: c.slug }}
                        className="font-medium hover:text-primary"
                      >
                        {c.name}
                      </Link>{" "}
                      {c.producer.opec ? (
                        <Badge tone="muted">OPEC</Badge>
                      ) : c.producer.opecPlus ? (
                        <Badge tone="muted">OPEC+</Badge>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-muted">{c.region.name}</td>
                    <td className="px-4 py-3 font-mono tabular-nums">{c.producer.reservesBn.toFixed(2)}</td>
                    <td className="px-4 py-3 font-mono tabular-nums">{c.producer.productionKbpd.toLocaleString()}</td>
                    <td className="px-4 py-3 font-mono tabular-nums">{rp ? `${rp.toFixed(0)} yr` : "—"}</td>
                    <td className="px-4 py-3 text-muted">{c.producer.noc ?? "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-subtle">
          {books.length} books. Reserves OPEC ASB 2026 (end-2025). Production EIA January 2026 crude + condensate.
          R/P against this book's flow. {formatKbpd(books.reduce((s, c) => s + c.producer.productionKbpd, 0))} shown.
        </p>
      </section>
    </div>
  );
}

function chip(on: boolean) {
  return on
    ? "h-10 shrink-0 rounded-sm bg-primary px-3 text-sm text-primary-fg"
    : "h-10 shrink-0 rounded-sm border border-border px-3 text-sm text-muted";
}
