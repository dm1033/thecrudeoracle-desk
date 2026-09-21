import { AGENCY_BOOKS } from "@/data/agencies";
import { CAPEX_REGIONS, CAPEX_RULES } from "@/data/capex";
import { JOB_REGIONS, ROLE_BOOK, TRANSFERS, CV_REVIEW_URL } from "@/data/careers";
import { CHOKEPOINTS } from "@/data/chokepoints";
import { REGIONS } from "@/data/continents";
import { DISPATCH_ISSUES } from "@/data/dispatch";
import { GRADES } from "@/data/grades";
import { FISCAL, TECHNICAL_BREAKEVENS } from "@/data/industry";
import { PRINTS } from "@/data/prints";
import { DESK_SOURCES } from "@/data/sources";
import { SIGNALS } from "@/data/signals";
import { WATCHLIST } from "@/data/watchlist";
import { producerSlug } from "@/lib/slug";

export type DeskHit = {
  id: string;
  kind: "region" | "producer" | "grade" | "choke" | "breakeven" | "source" | "signal" | "name" | "book" | "job" | "dispatch";
  title: string;
  blurb: string;
  href: string;
};

export const DESK_INDEX: DeskHit[] = [
  ...REGIONS.map((r) => ({
    id: `region-${r.slug}`,
    kind: "region" as const,
    title: r.name,
    blurb: `${r.kicker} ${r.reservesBn.toFixed(0)} bn · ${(r.productionKbpd / 1000).toFixed(1)} mb/d`,
    href: `/continents/${r.slug}`,
  })),
  ...REGIONS.flatMap((r) =>
    r.producers.map((p) => ({
      id: `prod-${r.slug}-${p.name}`,
      kind: "producer" as const,
      title: p.name,
      blurb: `${r.name} · ${p.reservesBn.toFixed(1)} bn · ${p.productionKbpd.toLocaleString()} kb/d · ${p.noc ?? "independents"}`,
      href: `/producers/${producerSlug(p.name)}`,
    })),
  ),
  ...GRADES.map((g) => ({
    id: `grade-${g.name}`,
    kind: "grade" as const,
    title: g.name,
    blurb: `${g.country} · ${g.api}° API · ${g.sulphurPct}% S · ${g.marker}`,
    href: "/trade",
  })),
  ...CHOKEPOINTS.map((c) => ({
    id: `choke-${c.slug}`,
    kind: "choke" as const,
    title: c.name,
    blurb: `${c.typicalMbd ? `${c.typicalMbd} ${c.unit}` : c.unit} · ${c.share}`,
    href: "/flows#chokes",
  })),
  ...TECHNICAL_BREAKEVENS.map((b) => ({
    id: `be-${b.name}`,
    kind: "breakeven" as const,
    title: b.name,
    blurb: `Technical ${b.kind} · $${b.low}–${b.high} (mid $${b.mid}) · ${b.source}`,
    href: "/flows#wells",
  })),
  ...FISCAL.map((f) => ({
    id: `fiscal-${f.country}`,
    kind: "breakeven" as const,
    title: `${f.country} fiscal`,
    blurb: `Budget BE $${f.beLow}–${f.beHigh} (mid $${f.beMid}) · ${f.note}`,
    href: "/flows#fiscal",
  })),
  ...CAPEX_REGIONS.map((c) => ({
    id: `capex-${c.slug}`,
    kind: "book" as const,
    title: `${c.name} capital`,
    blurb: c.going,
    href: `/continents/${c.slug}`,
  })),
  ...CAPEX_RULES.map((r) => ({
    id: `rule-${r.title}`,
    kind: "book" as const,
    title: r.title,
    blurb: r.body,
    href: "/flows#capital",
  })),
  ...AGENCY_BOOKS.map((a) => ({
    id: `agency-${a.book}`,
    kind: "book" as const,
    title: `${a.book} ${a.report}`,
    blurb: `2026 supply ${a.y2026Supply} · demand ${a.y2026Demand} · ${a.tell}`,
    href: "/flows#balance",
  })),
  ...PRINTS.map((p) => ({
    id: `print-${p.id}`,
    kind: "source" as const,
    title: `${p.source} last print`,
    blurb: `${p.headline} ${p.body}`,
    href: "/sources",
  })),
  ...DESK_SOURCES.map((s) => ({
    id: `src-${s.id}`,
    kind: "source" as const,
    title: s.short,
    blurb: `${s.name} · ${s.why}`,
    href: "/sources",
  })),
  ...SIGNALS.map((s) => ({
    id: `sig-${s.id}`,
    kind: "signal" as const,
    title: s.title,
    blurb: s.evidence,
    href: "/signals",
  })),
  ...WATCHLIST.map((n) => ({
    id: `name-${n.ticker}`,
    kind: "name" as const,
    title: `${n.name} ${n.ticker}`,
    blurb: `${n.book} · ${n.stream} · ${n.theme}`,
    href: "/invest",
  })),
  {
    id: "tool-crack",
    kind: "book",
    title: "3-2-1 crack",
    blurb: "Two gasoline, one distillate, three crude. The refiner book.",
    href: "/trade",
  },
  {
    id: "tool-spare",
    kind: "book",
    title: "Effective spare capacity",
    blurb: "OPEC+ 0.22 mb/d vs Aug. Nameplate gap is not spare if it cannot load.",
    href: "/flows#spare",
  },
  ...ROLE_BOOK.map((r) => ({
    id: `job-${r.id}`,
    kind: "job" as const,
    title: r.title,
    blurb: `${r.discipline} · ${r.why}`,
    href: "/jobs",
  })),
  ...TRANSFERS.map((t) => ({
    id: `xfer-${t.id}`,
    kind: "job" as const,
    title: t.from,
    blurb: t.blurb,
    href: `/jobs?from=${t.id}`,
  })),
  ...JOB_REGIONS.map((r) => ({
    id: `hire-${r.id}`,
    kind: "job" as const,
    title: `${r.name} hiring`,
    blurb: r.hiring,
    href: `/jobs?basin=${r.id}`,
  })),
  {
    id: "cv-review",
    kind: "job" as const,
    title: "CV review",
    blurb: "Construct CV — construction and energy CVs that get read properly.",
    href: CV_REVIEW_URL,
  },
  ...DISPATCH_ISSUES.map((i) => ({
    id: `disp-${i.slug}`,
    kind: "dispatch" as const,
    title: i.title,
    blurb: i.dek,
    href: `/dispatch/${i.slug}`,
  })),
];

export function searchDesk(q: string, limit = 12): DeskHit[] {
  const needle = q.trim().toLowerCase();
  if (needle.length < 2) return [];
  const scored = DESK_INDEX.map((hit) => {
    const hay = `${hit.title} ${hit.blurb} ${hit.kind}`.toLowerCase();
    let score = 0;
    if (hit.title.toLowerCase().startsWith(needle)) score += 8;
    else if (hit.title.toLowerCase().includes(needle)) score += 5;
    if (hay.includes(needle)) score += 2;
    needle.split(/\s+/).forEach((w) => {
      if (w.length > 1 && hay.includes(w)) score += 1;
    });
    return { hit, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((x) => x.hit);
}
