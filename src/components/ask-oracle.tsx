import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { askOracle } from "@/lib/ask-oracle";

export function AskOracle() {
  const [prompt, setPrompt] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onAsk(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setText("");
    try {
      const res = await askOracle({ data: { prompt } });
      if (res.ok) setText(res.text);
      else setError(res.error);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Desk is dark.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Ask the desk</p>
      <h2 className="mt-2 font-display text-2xl">The Oracle answers in the open.</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        One question. Public sources. No order tickets. I will not tell you to buy.
      </p>
      <form onSubmit={onAsk} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="oracle-q">
          Question
        </label>
        <input
          id="oracle-q"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Does the East-West repair kill the Hormuz premium?"
          className="h-12 flex-1 rounded-md border border-border bg-elevated px-3 text-sm text-fg placeholder:text-subtle"
        />
        <Button type="submit" disabled={busy || prompt.trim().length < 8} className="h-12 sm:w-36">
          {busy ? "Thinking" : "Ask"}
        </Button>
      </form>
      {error ? <p className="mt-3 text-sm text-down">{error}</p> : null}
      {text ? (
        <div className="mt-4 whitespace-pre-wrap border-t border-border pt-4 text-sm leading-relaxed text-fg">
          {text}
        </div>
      ) : null}
    </section>
  );
}
