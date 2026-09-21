import { createFileRoute } from "@tanstack/react-router";
import { renderDispatchRss } from "@/lib/rss";

export const Route = createFileRoute("/feed.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        return new Response(renderDispatchRss(origin), {
          headers: {
            "content-type": "application/rss+xml; charset=utf-8",
            "cache-control": "public, max-age=300",
          },
        });
      },
    },
  },
});
