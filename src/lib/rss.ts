import { DISPATCH_ISSUES, DISPATCH_PITCH, SUBSTACK_TITLE } from "@/data/dispatch";

function xml(s: string) {
  return s
    .replaceAll("&", "\u0026amp;")
    .replaceAll("<", "\u0026lt;")
    .replaceAll(">", "\u0026gt;")
    .replaceAll('"', "\u0026quot;");
}

export function renderDispatchRss(origin: string) {
  const items = DISPATCH_ISSUES.map((issue) => {
    const url = `${origin}/dispatch/${issue.slug}`;
    const body = [...issue.sections.map((s) => `${s.h}: ${s.p}`), issue.closer].join(" ");
    return `    <item>
      <title>${xml(issue.title)}</title>
      <link>${xml(url)}</link>
      <guid isPermaLink="true">${xml(url)}</guid>
      <pubDate>${new Date(`${issue.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${xml(issue.dek)}</description>
    </item>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(SUBSTACK_TITLE)}</title>
    <link>${xml(`${origin}/dispatch`)}</link>
    <description>${xml(DISPATCH_PITCH)}</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${xml(`${origin}/feed.xml`)}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;
}
