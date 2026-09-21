import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { CAPEX_REGIONS } from "@/data/capex";
import { CHOKEPOINTS } from "@/data/chokepoints";
import { regionBySlug } from "@/data/continents";
import { gradesByRegion } from "@/data/grades";
import { REGION_INDUSTRY, REGION_PATHS } from "@/data/industry";
import { rOverPYears } from "@/data/reserves";
import { formatKbpd } from "@/lib/format";
import { producerSlug } from "@/lib/slug";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/continents/$slug")({
  loader: async ({ params }) => {
    const region = regionBySlug(params.slug);
    if (!region) throw notFound();
    const tape = await getTape();
    return { region, tape };
  },
  component: RegionPage,
});

function RegionPage() {
  const { region, tape } = Route.useLoaderData();
  const industry = REGION_INDUSTRY[region.slug];
  const path = REGION_PATHS.find((p) => p.slug === region.slug);
  const capex = CAPEX_REGIONS.find((p) => p.slug === region.slug);
  const rp = rOverPYears(region.reservesBn, region.productionKbpd);
  const grades = gradesByRegion(region.name);
  const chokes = CHOKEPOINTS.filter(
    (c) => c.region === region.name || c.region.startsWith(region.name) || c.region.includes(region.name),
  );

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <article className="mx-auto max-w-6xl px-4 py-10">
        <Link to="/continents" className="font-mono text-[11px] uppercase tracking-wider text-muted hover:text-fg">
          Atlas
        </Link>
        <h1 className="mt-3 font-display text-4xl tracking-tight">{region.name}</h1>
        <p className="mt-2 text-lg text-muted">{region.kicker}</p>
        <p className="mt-5 max-w-3xl text-base leading-relaxed">{region.thesis}</p>

        <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Kpi k="Reserves" v={`${region.reservesBn.toFixed(1)} bn`} s={`${region.reservesShare}% of OPEC world`} />
          <Kpi k="Production" v={formatKbpd(region.productionKbpd)} s={`${region.productionShare}% of EIA world`} />
          <Kpi k="R/P" v={rp ? `${rp.toFixed(0)} yr` : "—"} s="Against this book's flow" />
          <Kpi k="Decline" v={industry ? `${industry.observedDeclinePct}%` : "—"} s="IEA observed post-peak" />
        </dl>

        {path ? (
          <div className="mt-10 rounded-xl border border-border bg-surface p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl">Industry book</h2>
              <Link to="/flows" className="text-sm text-muted hover:text-fg">
                Open spare / breakeven / decline
              </Link>
            </div>
            <dl className="mt-4 grid gap-4 text-sm lg:grid-cols-2">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">2026 path</dt>
                <dd className="mt-1 leading-relaxed">{path.y2026}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">2027 path</dt>
                <dd className="mt-1 leading-relaxed">{path.y2027}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Spare</dt>
                <dd className="mt-1 leading-relaxed">{industry?.spare}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Capital</dt>
                <dd className="mt-1 leading-relaxed">{capex?.going ?? path.capital}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Not going</dt>
                <dd className="mt-1 leading-relaxed">{capex?.notGoing ?? path.driver}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Technical breakeven</dt>
                <dd className="mt-1 leading-relaxed">{industry?.technicalBe}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Fiscal breakeven</dt>
                <dd className="mt-1 leading-relaxed">{industry?.fiscalBe}</dd>
              </div>
            </dl>
          </div>
        ) : null}

        <h2 className="mt-12 font-display text-2xl">Revenue streams</h2>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {region.streams.map((s) => (
            <div key={s.name} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-display text-xl">{s.name}</h3>
              <p className="mt-1 text-sm text-muted">{s.who}</p>
              <p className="mt-3 text-sm leading-relaxed">{s.how}</p>
              <p className="mt-3 text-sm text-muted">{s.scale}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl">Producers</h2>
        <p className="mt-2 text-sm text-muted">
          Open the country book.{" "}
          <Link to="/producers" className="underline decoration-border underline-offset-4 hover:text-fg">
            All producers
          </Link>
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Country</th>
                <th className="px-4 py-3 font-medium">Reserves bn</th>
                <th className="px-4 py-3 font-medium">kb/d</th>
                <th className="px-4 py-3 font-medium">NOC / book</th>
                <th className="px-4 py-3 font-medium">Grades</th>
              </tr>
            </thead>
            <tbody>
              {region.producers.map((p) => (
                <tr key={p.name} className="border-t border-border">
                  <td className="px-4 py-3">
                    <Link
                      to="/producers/$slug"
                      params={{ slug: producerSlug(p.name) }}
                      className="font-medium hover:text-primary"
                    >
                      {p.name}
                    </Link>{" "}
                    {p.opec ? <Badge tone="muted">OPEC</Badge> : p.opecPlus ? <Badge tone="muted">OPEC+</Badge> : null}
                    {p.reservesNote ? <p className="mt-1 text-xs text-subtle">{p.reservesNote}</p> : null}
                  </td>
                  <td className="px-4 py-3 font-mono tabular-nums">{p.reservesBn.toFixed(2)}</td>
                  <td className="px-4 py-3 font-mono tabular-nums">{p.productionKbpd.toLocaleString()}</td>
                  <td className="px-4 py-3 text-muted">{p.noc ?? "—"}</td>
                  <td className="px-4 py-3 text-muted">{p.grades.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {grades.length ? (
          <>
            <h2 className="mt-12 font-display text-2xl">Export grades</h2>
            <p className="mt-2 text-sm text-muted">Typical assays. Nomination quality varies by cargo.</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-surface font-mono text-[11px] uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-4 py-3 font-medium">Grade</th>
                    <th className="px-4 py-3 font-medium">API</th>
                    <th className="px-4 py-3 font-medium">S %</th>
                    <th className="px-4 py-3 font-medium">Marker</th>
                    <th className="px-4 py-3 font-medium">Home</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((g) => (
                    <tr key={g.name} className="border-t border-border">
                      <td className="px-4 py-3">
                        {g.name}
                        <p className="text-xs text-subtle">{g.note}</p>
                      </td>
                      <td className="px-4 py-3 font-mono tabular-nums">{g.api.toFixed(1)}</td>
                      <td className="px-4 py-3 font-mono tabular-nums">{g.sulphurPct.toFixed(2)}</td>
                      <td className="px-4 py-3 text-muted">{g.marker}</td>
                      <td className="px-4 py-3 text-muted">{g.home}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : null}

        {chokes.length ? (
          <>
            <h2 className="mt-12 font-display text-2xl">Chokepoints</h2>
            <ul className="mt-4 grid gap-3">
              {chokes.map((c) => (
                <li key={c.slug} className="rounded-xl border border-border bg-surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl">{c.name}</h3>
                    <p className="font-mono text-sm text-muted">
                      {c.typicalMbd > 0 ? `${c.typicalMbd} ${c.unit}` : c.unit}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">{c.now}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl">Chokepoints & grades</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {region.chokepoints.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm">{region.grades.join(" · ")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl">How I trade the region</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {region.trade.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-subtle">
          Sources: {region.sources.map((s) => s.name).join(" · ")} · IEA OMR Sep 2026 · IEA decline study · Dallas Fed
          Q1 2026
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
