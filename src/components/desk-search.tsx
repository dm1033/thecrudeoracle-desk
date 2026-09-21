import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchDesk } from "@/lib/desk-index";

const KIND: Record<string, string> = {
  region: "Atlas",
  producer: "Producer",
  grade: "Grade",
  choke: "Choke",
  breakeven: "Breakeven",
  source: "Source",
  signal: "Signal",
  name: "Watch",
  book: "Book",
  job: "Jobs",
  dispatch: "Substack",
};

export function DeskSearch() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const hits = useMemo(() => searchDesk(q), [q]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-3 text-sm text-muted hover:text-fg"
        aria-label="Search the desk"
      >
        <Search className="size-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded-sm border border-border px-1.5 font-mono text-[11px] text-subtle lg:inline">
          ⌘K
        </kbd>
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search the desk"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto mt-[12vh] w-full max-w-xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
              <div className="flex items-center gap-2 border-b border-border px-3">
                <Search className="size-4 text-muted" />
                <input
                  ref={inputRef}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Grade, job, basin, choke, briefing…"
                  className="h-12 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-subtle"
                  aria-label="Query"
                />
                <button
                  type="button"
                  className="inline-flex size-11 items-center justify-center text-muted"
                  aria-label="Close search"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-4" />
                </button>
              </div>
              <ul className="max-h-[50vh] overflow-y-auto p-2">
                {q.trim().length < 2 ? (
                  <li className="px-3 py-4 text-sm text-muted">
                    Type two letters. Atlas, jobs, transfer, dispatch, grades, chokes.
                  </li>
                ) : hits.length === 0 ? (
                  <li className="px-3 py-4 text-sm text-muted">Nothing on the desk matches that.</li>
                ) : (
                  hits.map((h) => (
                    <li key={h.id}>
                      <a
                        href={h.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-3 hover:bg-elevated"
                      >
                        <p className="flex items-baseline justify-between gap-3">
                          <span className="text-sm text-fg">{h.title}</span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                            {KIND[h.kind] ?? h.kind}
                          </span>
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{h.blurb}</p>
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
