import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo } from "react";
import { CvReviewCta } from "@/components/cv-review-cta";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import {
  CAREER_AS_OF,
  EARN_ROWS,
  JOB_BOARDS,
  JOB_REGIONS,
  PAY_BANDS,
  ROLE_BOOK,
  TRANSFERS,
  payFor,
  searchRoles,
} from "@/data/careers";
import { getTape } from "@/lib/get-tape";

export type JobsSearch = {
  q?: string;
  basin?: string;
  from?: string;
};

export const Route = createFileRoute("/jobs")({
  validateSearch: (raw: Record<string, unknown>): JobsSearch => ({
    q: typeof raw.q === "string" ? raw.q : undefined,
    basin: typeof raw.basin === "string" ? raw.basin : undefined,
    from: typeof raw.from === "string" ? raw.from : undefined,
  }),
  loader: () => getTape(),
  component: JobsPage,
});

function JobsPage() {
  const tape = Route.useLoaderData();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/jobs" });
  const q = search.q ?? "";
  const regionId = search.basin ?? "all";
  const transferId = search.from ?? "all";

  function patch(next: JobsSearch) {
    void navigate({
      search: (prev) => {
        const merged = { ...prev, ...next };
        return {
          q: merged.q || undefined,
          basin: !merged.basin || merged.basin === "all" ? undefined : merged.basin,
          from: !merged.from || merged.from === "all" ? undefined : merged.from,
        };
      },
      replace: true,
    });
  }

  const region = JOB_REGIONS.find((r) => r.id === regionId);
  const transfer = TRANSFERS.find((t) => t.id === transferId);
  const roles = useMemo(() => searchRoles(q, regionId, transferId), [q, regionId, transferId]);
  const query = (
    q.trim() ||
    transfer?.targets[0] ||
    roles[0]?.query ||
    "brownfield construction manager SIMOPS"
  ).trim();
  const where = region?.where ?? "Houston, TX";

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Jobs · {CAREER_AS_OF} · Earn $$$
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight sm:text-5xl">
          The barrels decide the jobs. Rewrite the nouns. Take the cheque.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Oil-industry search in their language, not yours. Temporary works, civils, HV and HSE
          already do this work. Rigzone, Oil and Gas Job Search, Energy Jobline, NES, LinkedIn,
          Indeed — opened on the translated query. Pay from public books. CV review on Construct CV.
        </p>
        <div className="mt-6">
          <CvReviewCta compact />
        </div>

        <form
          className="mt-8 rounded-xl border border-border bg-surface p-4 sm:p-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="sr-only" htmlFor="job-q">
            Role or skill
          </label>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex min-h-11 flex-1 items-center gap-2 rounded-md border border-border bg-bg px-3">
              <Search className="size-4 shrink-0 text-muted" />
              <input
                id="job-q"
                value={q}
                onChange={(e) => patch({ q: e.target.value })}
                placeholder="Brownfield, HUC, drilling, SIMOPS, petroleum…"
                className="h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-subtle"
                suppressHydrationWarning
              />
            </div>
            <select
              aria-label="Basin"
              value={regionId}
              onChange={(e) => patch({ basin: e.target.value })}
              className="h-11 rounded-md border border-border bg-bg px-3 text-sm"
            >
              <option value="all">All basins</option>
              {JOB_REGIONS.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
            <select
              aria-label="Your background"
              value={transferId}
              onChange={(e) => patch({ from: e.target.value })}
              className="h-11 rounded-md border border-border bg-bg px-3 text-sm"
            >
              <option value="all">Your background</option>
              {TRANSFERS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.from}
                </option>
              ))}
            </select>
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-subtle">
            Search launches · {query}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {JOB_BOARDS.map((b) => (
              <a
                key={b.id}
                href={b.search(query, where)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-1.5 rounded-md border border-border px-3 text-sm hover:border-primary/40"
              >
                {b.name}
                <ArrowUpRight className="size-3.5 text-muted" />
              </a>
            ))}
          </div>
        </form>

        {transfer ? (
          <article className="mt-8 rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Transfer</p>
            <h2 className="mt-2 font-display text-2xl">{transfer.from}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{transfer.blurb}</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed">{transfer.why}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {transfer.rewrite.map((line) => (
                <li key={line} className="rounded-md border border-border bg-bg px-3 py-2 font-mono text-xs leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {transfer.targets.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => patch({ q: t })}
                  className="h-10 rounded-sm border border-border px-3 text-sm text-muted hover:text-fg"
                >
                  {t}
                </button>
              ))}
            </div>
          </article>
        ) : (
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {TRANSFERS.slice(0, 6).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => patch({ from: t.id })}
                className="rounded-xl border border-border bg-surface p-4 text-left hover:border-primary/40"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">Transfer</p>
                <h2 className="mt-2 font-display text-xl">{t.from}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{t.blurb}</p>
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Earn $$$ · skill transfer</p>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl">You already do the work. They advertise it in another language.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Public pay books, not offers. Pick your background. The search rewrites the query. Then
            open the boards.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-bg">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                <tr className="border-b border-border">
                  <th className="px-4 py-3 font-medium">You wrote</th>
                  <th className="px-4 py-3 font-medium">They advertise</th>
                  <th className="px-4 py-3 font-medium">Cheque</th>
                  <th className="px-4 py-3 font-medium"> </th>
                </tr>
              </thead>
              <tbody>
                {EARN_ROWS.map((row) => (
                  <tr key={row.transferId} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 align-top">{row.from}</td>
                    <td className="px-4 py-3 align-top">{row.to}</td>
                    <td className="px-4 py-3 align-top font-mono text-xs tabular-nums">{row.cheque}</td>
                    <td className="px-4 py-3 align-top">
                      <button
                        type="button"
                        className="text-sm text-muted hover:text-fg"
                        onClick={() => patch({ from: row.transferId, basin: row.basin, q: row.to })}
                      >
                        Search
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Role book</p>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl">
              {roles.length} roles · search the boards, do not wait on a feed.
            </h2>
          </div>
          <p className="hidden font-mono text-[11px] uppercase tracking-wider text-subtle sm:block">
            {ROLE_BOOK.length} on the desk
          </p>
        </div>
        <div className="mt-6 grid gap-3">
          {roles.length === 0 ? (
            <p className="rounded-xl border border-border bg-surface p-5 text-sm text-muted">
              Nothing on that cut. Clear the basin or the background, or search a noun they actually
              advertise — brownfield, HUC, SIMOPS, drilling.
            </p>
          ) : (
            roles.map((r) => {
              const pay = payFor(r.payId);
              return (
                <article key={r.id} className="rounded-xl border border-border bg-surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl">{r.title}</h3>
                    <Badge tone="muted">{r.discipline}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{r.why}</p>
                  {pay ? (
                    <p className="mt-3 font-mono text-sm tabular-nums">
                      {pay.band}{" "}
                      <span className="text-subtle">
                        · {pay.region} · {pay.source}
                      </span>
                    </p>
                  ) : null}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {JOB_BOARDS.slice(0, 4).map((b) => (
                      <a
                        key={b.id}
                        href={b.search(r.query, where)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center gap-1 rounded-sm border border-border px-3 text-sm text-muted hover:text-fg"
                      >
                        {b.name}
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Earn $$$</p>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl">Public pay books. Not an offer.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            BLS, Rigzone, Robert Half 2026, OneSource 2026, ARAM Gulf Aug 2026. Ranges, not tickets.
            Basin premiums and tax treatment sit on top. I do not invent a day-rate.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {PAY_BANDS.map((p) => (
              <article key={p.id} className="rounded-xl border border-border bg-bg p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg">{p.role}</h3>
                  <Badge tone="muted">{p.region}</Badge>
                </div>
                <p className="mt-2 font-mono text-sm tabular-nums">{p.band}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.note}</p>
                <a
                  href={p.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
                >
                  {p.source}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Hiring map</p>
        <h2 className="mt-1 font-display text-2xl sm:text-3xl">Follow the capital, then the board.</h2>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {JOB_REGIONS.map((r) => (
            <article key={r.id} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-display text-xl">{r.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.hiring}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.hubs.map((h) => (
                  <a
                    key={h.url}
                    href={h.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center rounded-sm border border-border px-3 text-sm text-muted hover:text-fg"
                  >
                    {h.name}
                  </a>
                ))}
              </div>
              <button
                type="button"
                className="mt-4 text-sm text-muted hover:text-fg"
                onClick={() => patch({ basin: r.id })}
              >
                Search this basin
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <CvReviewCta />
          <p className="mt-6 text-xs leading-relaxed text-subtle">
            Not a recruitment agency. Board links leave this desk. Pay bands are public ranges, not
            offers. Construct CV is a separate review service. Read the{" "}
            <Link to="/about" className="underline decoration-border underline-offset-2 hover:text-fg">
              method
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
