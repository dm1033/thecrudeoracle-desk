import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { CAPEX_REGIONS } from "@/data/capex";
import { FISCAL, fiscalGapBn, REGION_INDUSTRY } from "@/data/industry";
import { countryBySlug } from "@/data/producers";
import { GRADES } from "@/data/grades";
import { rOverPYears } from "@/data/reserves";
import { WATCHLIST } from "@/data/watchlist";
import { formatKbpd, formatPrice } from "@/lib/format";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/producers/$slug")({
  loader: async ({ params }) => {
    const book = countryBySlug(params.slug);
    if (!book) throw notFound();
    const tape = await getTape();
    return { book, tape };
  },
  component: ProducerPage,
});

function ProducerPage() {
  const { book, tape } = Route.useLoaderData();
  const { producer, region } = book;
  const rp = rOverPYears(producer.reservesBn, producer.productionKbpd);
  const industry = REGION_INDUSTRY[region.slug];
  const capex = CAPEX_REGIONS.find((p) => p.slug === region.slug);
  const fiscal = FISCAL.find((f) => f.country === producer.name || (producer.name === "UAE" && f.country === "UAE"));
  const brent = tape.quotes.find((q) => q.label === "Brent")?.price ?? 104;
  const gap = fiscal ? fiscalGapBn(brent, fiscal, true) : null;
  const grades = GRADES.filter(
    (g) =>
      g.country === producer.name ||
      producer.grades.some((pg) => g.name === pg || g.name.startsWith(pg) || pg.startsWith(g.name)),
  );
  const country = producer.name.toLowerCase();
  const nocBits = (producer.noc ?? "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 3 && !["independents", "majors", "producers", "listed"].includes(w));
  const names = WATCHLIST.filter((n) => {
    const blob = `${n.name} ${n.theme} ${n.stream}`.toLowerCase();
    if (blob.includes(country)) return true;
    return nocBits.some((w) => n.name.toLowerCase().includes(w));
  }).slice(0, 5);

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <article className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted">
          <Link to="/producers" className="hover:text-fg">
            Producers
          </Link>
          <span aria-hidden="true">/</span>
          <Link to="/continents/$slug" params={{ slug: region.slug }} className="hover:text-fg">
            {region.name}
          </Link>
        </div>
        <h1 className="mt-3 font-display text-4xl tracking-tight">{producer.name}</h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {producer.opec ? <Badge tone="muted">OPEC</Badge> : producer.opecPlus ? <Badge tone="muted">OPEC+</Badge> : <Badge tone="muted">non-OPEC</Badge>}
          <Badge tone="neutral">{region.cycle}</Badge>
          <Badge tone="muted">{region.net}</Badge>
        </div>
        <p className="mt-5 max-w-3xl text-base leading-relaxed">{book.thesis}</p>

        <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Kpi k="Reserves" v={`${producer.reservesBn.toFixed(2)} bn`} s={producer.reservesNote ?? "OPEC ASB 2026"} />
          <Kpi k="Production" v={formatKbpd(producer.productionKbpd)} s="EIA Jan 2026 C+C" />
          <Kpi k="R/P" v={rp ? `${rp.toFixed(0)} yr` : "—"} s="Against this book's flow" />
          <Kpi k="NOC / book" v={producer.noc ?? "Independents"} s={producer.grades.join(" · ")} />
        </dl>

        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          <Block title="Where the cheque goes" body={book.capital} extra={capex?.going} />
          <Block title="Revenue stream" body={book.revenue} extra={producer.streams.join(" · ")} />
          <Block title="How I trade it" body={book.trade} />
          <Block title="What breaks it" body={book.risk} extra={industry?.spare} />
        </div>

        {fiscal ? (
          <div className="mt-10 rounded-xl border border-border bg-surface p-5">
            <h2 className="font-display text-2xl">Fiscal at the tape</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{fiscal.note}</p>
            <dl className="mt-4 grid gap-3 sm:grid-cols-4">
              <Kpi k="Budget BE" v={`$${fiscal.beLow}–${fiscal.beHigh}`} s={`mid $${fiscal.beMid}`} />
              <Kpi k="Aug volumes" v={`${fiscal.augProd} mb/d`} s="IEA Aug 2026" />
              <Kpi k="Nameplate net" v={`${fiscal.netNameplate} mb/d`} s="Export-style" />
              <Kpi
                k={`Gap @ $${formatPrice(brent, 0)} Brent`}
                v={gap == null ? "—" : `${gap >= 0 ? "+" : ""}$${formatPrice(gap, 0)}bn`}
                s="War volumes · crude-only linear"
              />
            </dl>
            <p className="mt-3 text-xs text-subtle">
              Linear, crude-only. Not a ministry model. Toggle lives on the industry book.
            </p>
          </div>
        ) : (
          <p className="mt-10 text-sm text-muted">
            No IMF-style oil fiscal cell for this name. {industry?.fiscalBe ?? "Read the region book."}
          </p>
        )}

        {grades.length ? (
          <>
            <h2 className="mt-12 font-display text-2xl">Export grades</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {grades.map((g) => (
                <li key={g.name} className="rounded-xl border border-border bg-surface p-4">
                  <p className="font-display text-lg">{g.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {g.api.toFixed(1)}° API · {g.sulphurPct.toFixed(2)}% S · {g.marker}
                  </p>
                  <p className="mt-2 text-sm text-muted">{g.note}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {names.length ? (
          <>
            <h2 className="mt-12 font-display text-2xl">Listed expressions</h2>
            <p className="mt-1 text-sm text-muted">Watchlist, not a recommendation.</p>
            <ul className="mt-4 grid gap-3">
              {names.map((n) => (
                <li key={n.ticker} className="rounded-xl border border-border bg-surface p-4">
                  <p className="font-display text-lg">
                    {n.name} <span className="font-mono text-sm text-muted">{n.ticker}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">{n.stream}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <p className="mt-10 text-xs text-subtle">
          Region {region.name} · cycle {region.cycle} · {region.sources.map((s) => s.name).join(" · ")}
        </p>
      </article>
    </div>
  );
}

function Kpi({ k, v, s }: { k: string; v: string; s: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">{k}</dt>
      <dd className="mt-1 font-mono text-lg tabular-nums">{v}</dd>
      <dd className="text-xs text-subtle">{s}</dd>
    </div>
  );
}

function Block({ title, body, extra }: { title: string; body: string; extra?: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <h2 className="font-display text-xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed">{body}</p>
      {extra ? <p className="mt-3 text-sm text-muted">{extra}</p> : null}
    </div>
  );
}
