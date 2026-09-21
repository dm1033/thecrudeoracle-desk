import { Badge } from "@/components/ui/badge";
import { isStale, timeAgo } from "@/lib/format";

export function DataMeta({
  source,
  updated,
  type,
  staleHours = 48,
}: {
  source: string;
  updated: string;
  type: string;
  staleHours?: number;
}) {
  const stale = isStale(updated, staleHours);
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-subtle">
      <span className="font-mono uppercase tracking-wider">{source}</span>
      <span aria-hidden="true">·</span>
      <span className="font-mono">{timeAgo(updated)}</span>
      <Badge tone={stale ? "warn" : "muted"}>{stale ? `stale · ${type}` : type}</Badge>
    </div>
  );
}
