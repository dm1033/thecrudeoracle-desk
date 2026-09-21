import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { SUBSTACK_TITLE } from "@/data/dispatch";

const KEY = "crude-oracle-dispatch";

export function DispatchSubscribe() {
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState<string | null>(null);

  useEffect(() => {
    try {
      setSaved(localStorage.getItem(KEY));
    } catch {
      setSaved(null);
    }
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = email.trim().toLowerCase();
    if (!next.includes("@") || next.length < 6) return;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private mode — still confirm */
    }
    setSaved(next);
    setEmail("");
  }

  if (saved) {
    return (
      <div className="rounded-xl border border-border bg-surface p-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{SUBSTACK_TITLE} Substack</p>
        <p className="mt-2 font-display text-xl">You are on the desk list.</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {saved} — issues live on this desk. Same voice as the briefing. RSS at{" "}
          <a href="/feed.xml" className="underline decoration-border underline-offset-2 hover:text-fg">
            /feed.xml
          </a>
          . No buy tickets.
        </p>
        <button
          type="button"
          className="mt-4 text-sm text-muted hover:text-fg"
          onClick={() => {
            try {
              localStorage.removeItem(KEY);
            } catch {
              /* ignore */
            }
            setSaved(null);
          }}
        >
          Use a different address
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-border bg-surface p-5">
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{SUBSTACK_TITLE} Substack</p>
      <h2 className="mt-2 font-display text-2xl">Spare, cash, jobs. In your inbox when we wire it.</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Issues run on this desk now. Leave an address and you are on the list. Public sources only.
        RSS if you read in a reader.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="dispatch-email">
          Email
        </label>
        <input
          id="dispatch-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@desk.com"
          className="h-11 flex-1 rounded-md border border-border bg-bg px-3 text-sm outline-none placeholder:text-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  );
}
