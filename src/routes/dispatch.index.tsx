import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Rss } from "lucide-react";
import { CvReviewCta } from "@/components/cv-review-cta";
import { DispatchSubscribe } from "@/components/dispatch-subscribe";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { DISPATCH_ISSUES, DISPATCH_PITCH, SUBSTACK_TITLE } from "@/data/dispatch";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/dispatch/")({
  loader: () => getTape(),
  component: DispatchIndex,
});

function DispatchIndex() {
  const tape = Route.useLoaderData();
  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{SUBSTACK_TITLE} · Substack</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Dispatch.</h1>
        <p className="mt-5 text-base leading-relaxed text-muted">{DISPATCH_PITCH}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href="/feed.xml"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-3 text-sm"
          >
            <Rss className="size-4" />
            RSS
          </a>
          <Link
            to="/jobs"
            className="inline-flex h-11 items-center rounded-md border border-border px-3 text-sm"
          >
            Jobs · Earn $$$
          </Link>
        </div>
        <div className="mt-8">
          <DispatchSubscribe />
        </div>
      </section>
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Issues</p>
          <div className="mt-5 grid gap-3">
            {DISPATCH_ISSUES.map((issue) => (
              <Link
                key={issue.slug}
                to="/dispatch/$slug"
                params={{ slug: issue.slug }}
                className="rounded-xl border border-border bg-bg p-5 hover:border-primary/40"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="muted">{issue.kicker}</Badge>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                    {issue.date} · {issue.minutes} min
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl">{issue.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{issue.dek}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                  Read the issue <ArrowRight className="size-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <CvReviewCta />
      </section>
    </div>
  );
}
