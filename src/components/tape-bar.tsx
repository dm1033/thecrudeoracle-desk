import { formatPct, formatPrice } from "@/lib/format";
import type { Quote } from "@/lib/tape";
import { cn } from "@/lib/cn";

export function TapeBar({ quotes, note }: { quotes: Quote[]; note: string }) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center px-2 sm:px-4">
        {quotes.map((q) => {
          const up = q.change > 0;
          const down = q.change < 0;
          return (
            <div
              key={q.symbol}
              className="flex min-w-[7.5rem] items-baseline gap-2 px-2 py-2 sm:min-w-32 sm:px-3"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{q.label}</span>
              <span className="font-mono text-sm tabular-nums">{formatPrice(q.price)}</span>
              <span
                className={cn(
                  "font-mono text-[11px] tabular-nums",
                  up && "text-up",
                  down && "text-down",
                  !up && !down && "text-muted",
                )}
              >
                {formatPct(q.changePct)}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-2 font-mono text-[10px] uppercase tracking-wider text-subtle">
        {note}
      </p>
    </div>
  );
}
