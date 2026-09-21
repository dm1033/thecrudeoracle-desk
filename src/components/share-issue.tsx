import { useEffect, useState } from "react";

export function ShareIssue({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = useState(false);
  const [href, setHref] = useState(path);

  useEffect(() => {
    const url = new URL(path, window.location.origin).toString();
    setHref(url);
  }, [path]);

  const tweet = `https://x.com/intent/tweet?text=${encodeURIComponent(`${title} — The Crude Oracle`)}&url=${encodeURIComponent(href)}`;

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={tweet}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-11 items-center rounded-md border border-border px-3 text-sm text-muted hover:text-fg"
      >
        Share on X
      </a>
      <button
        type="button"
        className="inline-flex h-11 items-center rounded-md border border-border px-3 text-sm text-muted hover:text-fg"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(href);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          } catch {
            setCopied(false);
          }
        }}
      >
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
