import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DOMAINS, FEEDS, STACK_RULE, STATUS_LABEL, type FeedDomain, type FeedStatus } from "@/data/stack";
import { formatPrice } from "@/lib/format";
import { getTape } from "@/lib/get-tape";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/stack")({
  loader: () => getTape(),
  component: StackPage,
});

const TONE: Record<FeedStatus, "up" | "warn" | "neutral" | "muted"> = {
  live: "up",
  pull: "warn",
  book: "neutral",
  dark: "muted",
};

function StackPage() {
  const tape = Route.useLoaderData();
  const [domain, setDomain] = useState<FeedDomain | "All">("All");
  const [status, setStatus] = useState<FeedStatus | "all">("all");
  const rows = useMemo(
    () =>
      FEEDS.filter((f) => (domain === "All" || f.domain === domain) && (status === "all" || f.status === status)),
    [domain, status],
  );
  const counts = useMemo(() => {
    const c = { live: 0, pull: 0, book: 0, dark: 0 };
    for (const f of FEEDS) c[f.status] += 1;
    return c;
  }, []);
  const wti = tape.quotes.find((q) => q.label === "WTI")?.price;
  const brent = tape.quotes.find((q) => q.label === "Brent")?.price;
  const spread = wti != null && brent != null ? brent - wti : null;

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <article className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">Data stack · not a warehouse tour</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
          Six books. One desk. A contract is not a feed.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">{STACK_RULE}</p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Count k="Live" n={counts.live} s="Delayed tape" />
          <Count k="On pull" n={counts.pull} s="AIS, if the key is on" />
          <Count k="On the book" n={counts.book} s="Cited public prints" />
          <Count k="Dark" n={counts.dark} s="Licensed, not connected" />
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          <Layer
            k="Ingest"
            body="Server functions. Delayed marks on load. AIS only when you pull, then a 15-minute cache. No Kafka. No silent scrape of a PRA."
          />
          <Layer
            k="Normalize"
            body="Physical VWAP stays deals. Futures stay a book. Agency balances stay monthly. AIS stays a position. I do not add them into one number."
          />
          <Layer
            k="Desk"
            body="This page, the industry book, the trade crack, the AIS plot. TanStack on Vercel. Not Snowflake, not a tick store."
          />
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1" aria-label="Domain">
          {(["All", ...DOMAINS] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDomain(d)}
              className={cn(
                "inline-flex h-11 shrink-0 items-center rounded-md border px-3 text-sm",
                domain === d ? "border-primary text-fg" : "border-border text-muted",
              )}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1" aria-label="Status">
          {(["all", "live", "pull", "book", "dark"] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatus(s)}
              className={cn(
                "inline-flex h-11 shrink-0 items-center rounded-md border px-3 text-sm",
                status === s ? "border-primary text-fg" : "border-border text-muted",
              )}
            >
              {s === "all" ? "Any status" : STATUS_LABEL[s]}
            </button>
          ))}
        </div>

        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[760px] text-left text-sm">
            <caption className="sr-only">Feed register</caption>
            <thead className="bg-elevated font-mono text-xs uppercase tracking-wider text-subtle">
              <tr>
                <th className="px-3 py-2 font-medium" scope="col">Feed</th>
                <th className="px-3 py-2 font-medium" scope="col">Method</th>
                <th className="px-3 py-2 font-medium" scope="col">Cadence</th>
                <th className="px-3 py-2 font-medium" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((f) => (
                <tr key={f.id} className="border-t border-border align-top">
                  <td className="px-3 py-3">
                    <Link to={f.href} className="font-medium hover:underline">
                      {f.name}
                    </Link>
                    <p className="text-xs text-subtle">
                      {f.domain} · {f.provider}
                    </p>
                    <p className="mt-1 max-w-md text-muted">{f.note}</p>
                  </td>
                  <td className="px-3 py-3 font-mono text-xs text-muted">{f.method}</td>
                  <td className="px-3 py-3 text-muted">{f.cadence}</td>
                  <td className="px-3 py-3">
                    <Badge tone={TONE[f.status]}>{STATUS_LABEL[f.status]}</Badge>
                    <p className="mt-2 max-w-48 text-xs text-subtle">{f.usedFor}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Vwap />
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Paper minus physical</p>
            <h2 className="mt-2 font-display text-2xl">The spread is not the arb.</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Delayed Brent minus delayed WTI is a paper gap. The physical window also needs a freight rate.
              Signal Ocean is dark, so I will not call it open.
            </p>
            <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
              <div>
                <dt className="text-subtle">WTI</dt>
                <dd className="font-mono text-lg tabular-nums">{wti != null ? `$${formatPrice(wti)}` : "—"}</dd>
              </div>
              <div>
                <dt className="text-subtle">Brent</dt>
                <dd className="font-mono text-lg tabular-nums">{brent != null ? `$${formatPrice(brent)}` : "—"}</dd>
              </div>
              <div>
                <dt className="text-subtle">Brent−WTI</dt>
                <dd className="font-mono text-lg tabular-nums">{spread != null ? `$${formatPrice(spread)}` : "—"}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-subtle">
              Argus Houston and Midland (PA0033586, PA0033587) are differentials to the NYMEX settle. They are not
              this print. ASCI is sour. Dated is the basket. None of those assessments are licensed here.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/trade" className="text-sm underline">
                Trade and crack
              </Link>
              <Link to="/flows" className="text-sm underline">
                Balances
              </Link>
              <Link to="/ais" className="text-sm underline">
                AIS pull
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function Count({ k, n, s }: { k: string; n: number; s: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <p className="font-mono text-xs uppercase tracking-wider text-subtle">{k}</p>
      <p className="mt-1 font-mono text-2xl tabular-nums">{n}</p>
      <p className="text-xs text-subtle">{s}</p>
    </div>
  );
}

function Layer({ k, body }: { k: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">{k}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function Vwap() {
  const [rows, setRows] = useState([
    { price: "", volume: "" },
    { price: "", volume: "" },
  ]);

  const parsed = rows
    .map((r) => ({ p: Number(r.price), v: Number(r.volume) }))
    .filter((r) => Number.isFinite(r.p) && Number.isFinite(r.v) && r.v > 0);
  const vol = parsed.reduce((s, r) => s + r.v, 0);
  const vwap = vol > 0 ? parsed.reduce((s, r) => s + r.p * r.v, 0) / vol : null;

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">Physical</p>
      <h2 className="mt-2 font-display text-2xl">VWAP is deals, not a futures settle.</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Σ price × barrels / Σ barrels. Type the deals. I will not fill Argus Houston for you.
      </p>
      <div className="mt-4 space-y-2">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-2 gap-2">
            <label className="sr-only" htmlFor={`px-${i}`}>
              Price {i + 1}
            </label>
            <input
              id={`px-${i}`}
              inputMode="decimal"
              placeholder="Price $/bbl"
              value={r.price}
              onChange={(e) =>
                setRows((prev) => prev.map((row, j) => (j === i ? { ...row, price: e.target.value } : row)))
              }
              className="h-11 rounded-md border border-border bg-elevated px-3 font-mono text-sm"
            />
            <label className="sr-only" htmlFor={`vol-${i}`}>
              Volume {i + 1}
            </label>
            <input
              id={`vol-${i}`}
              inputMode="decimal"
              placeholder="Barrels"
              value={r.volume}
              onChange={(e) =>
                setRows((prev) => prev.map((row, j) => (j === i ? { ...row, volume: e.target.value } : row)))
              }
              className="h-11 rounded-md border border-border bg-elevated px-3 font-mono text-sm"
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setRows((prev) => [...prev, { price: "", volume: "" }])}
        >
          Add deal
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={() => setRows([{ price: "", volume: "" }])}>
          Clear
        </Button>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-subtle">Barrels</dt>
          <dd className="font-mono text-lg tabular-nums">{vol ? vol.toLocaleString("en-US") : "—"}</dd>
        </div>
        <div>
          <dt className="text-subtle">VWAP</dt>
          <dd className="font-mono text-lg tabular-nums">{vwap != null ? `$${formatPrice(vwap)}` : "—"}</dd>
        </div>
      </dl>
    </div>
  );
}
