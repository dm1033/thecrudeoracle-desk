import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CvReviewCta } from "@/components/cv-review-cta";
import { DispatchSubscribe } from "@/components/dispatch-subscribe";
import { ShareIssue } from "@/components/share-issue";
import { TapeBar } from "@/components/tape-bar";
import { Badge } from "@/components/ui/badge";
import { SUBSTACK_TITLE, issueBySlug } from "@/data/dispatch";
import { getTape } from "@/lib/get-tape";

export const Route = createFileRoute("/dispatch/$slug")({
  loader: async ({ params }) => {
    const issue = issueBySlug(params.slug);
    if (!issue) throw notFound();
    const tape = await getTape();
    return { issue, tape };
  },
  component: DispatchIssuePage,
});

function DispatchIssuePage() {
  const { issue, tape } = Route.useLoaderData();
  const showCv = issue.tags.includes("jobs") || issue.tags.includes("transfer") || issue.tags.includes("substack");

  return (
    <div>
      <TapeBar quotes={tape.quotes} note={tape.note} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <Link to="/dispatch" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" />
          Substack
        </Link>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-muted">
          {SUBSTACK_TITLE} Substack · {issue.date} · {issue.minutes} min
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge tone="neutral">{issue.kicker}</Badge>
          {issue.tags.map((t) => (
            <Badge key={t} tone="muted">
              {t}
            </Badge>
          ))}
        </div>
        <h1 className="mt-4 font-display text-4xl tracking-tight">{issue.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{issue.dek}</p>
        <div className="mt-6">
          <ShareIssue title={issue.title} path={`/dispatch/${issue.slug}`} />
        </div>
        <div className="mt-10 grid gap-8">
          {issue.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-muted">{s.p}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-base leading-relaxed">{issue.closer}</p>
        {showCv ? (
          <div className="mt-10">
            <CvReviewCta />
          </div>
        ) : null}
        <div className="mt-8">
          <DispatchSubscribe />
        </div>
      </article>
    </div>
  );
}
