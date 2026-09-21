import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Shell } from "@/components/shell";
import appCss from "../styles.css?url";

const APP_NAME = "The Crude Oracle";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Oil industry desk: spare capacity, well and fiscal breakevens, decline, continent reserves and revenue streams. Public EIA, OPEC, IEA, Dallas Fed.",
      },
      { name: "theme-color", content: "#0b0a09" },
    ],
    links: [
      { rel: "alternate", type: "application/rss+xml", title: "The Crude Oracle", href: "/feed.xml" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-20">
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">404</p>
      <h1 className="mt-2 font-display text-3xl">That page is dry.</h1>
      <p className="mt-3 text-muted">No barrels here. Back to the desk.</p>
      <Link to="/" className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm text-primary-fg">
        Desk
      </Link>
    </div>
  ),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Shell>
            <Outlet />
          </Shell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
