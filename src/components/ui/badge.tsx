import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "up" | "down" | "warn" | "muted";
  className?: string;
}) {
  const tones = {
    neutral: "text-primary border-border",
    up: "text-up border-up/30",
    down: "text-down border-down/30",
    warn: "text-warn border-warn/30",
    muted: "text-muted border-border",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
