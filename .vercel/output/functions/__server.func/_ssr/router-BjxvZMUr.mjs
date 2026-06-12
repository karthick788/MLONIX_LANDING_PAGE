import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-BUrt3Ots.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MLONIX — Groundwater Intelligence" },
      { name: "description", content: "MLONIX transforms utility and environmental data into actionable groundwater intelligence." },
      { name: "author", content: "MLONIX" },
      { name: "theme-color", content: "#0B1120" },
      { property: "og:site_name", content: "MLONIX" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MLONIX",
          url: "/",
          slogan: "Your electricity bill knows your water level. We just learned to read it.",
          description: "MLONIX delivers groundwater intelligence by transforming utility and environmental data into actionable insights.",
          areaServed: "IN"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$5 = () => import("./technology-Bfq48e_O.mjs");
const Route$6 = createFileRoute("/technology")({
  head: () => ({
    meta: [{
      title: "Technology — MLONIX"
    }, {
      name: "description",
      content: "Built on science and designed for scale: AI, machine learning and environmental data integration powering groundwater intelligence."
    }, {
      property: "og:title",
      content: "Technology — MLONIX"
    }, {
      property: "og:description",
      content: "Our approach to building dependable environmental intelligence at scale."
    }, {
      property: "og:url",
      content: "/technology"
    }],
    links: [{
      rel: "canonical",
      href: "/technology"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./team-Ai3cdcmT.mjs");
const Route$5 = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Team — MLONIX"
    }, {
      name: "description",
      content: "Engineers, researchers and partners building the future of groundwater intelligence at MLONIX."
    }, {
      property: "og:title",
      content: "Team — MLONIX"
    }, {
      property: "og:description",
      content: "The people behind MLONIX."
    }, {
      property: "og:url",
      content: "/team"
    }],
    links: [{
      rel: "canonical",
      href: "/team"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const BASE_URL = "";
const Route$4 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/product", changefreq: "monthly", priority: "0.9" },
          { path: "/technology", changefreq: "monthly", priority: "0.8" },
          { path: "/team", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$3 = () => import("./product-BeWKUnRL.mjs");
const Route$3 = createFileRoute("/product")({
  head: () => ({
    meta: [{
      title: "Product — MLONIX"
    }, {
      name: "description",
      content: "An end-to-end workflow that turns existing data into actionable groundwater insights for stakeholders of every scale."
    }, {
      property: "og:title",
      content: "Product — MLONIX"
    }, {
      property: "og:description",
      content: "Intelligence delivered simply, from data submission to actionable recommendations."
    }, {
      property: "og:url",
      content: "/product"
    }],
    links: [{
      rel: "canonical",
      href: "/product"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-DdwgIWCP.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — MLONIX"
    }, {
      name: "description",
      content: "Get in touch with MLONIX. We work with municipal organizations, research institutions, enterprises, partners and investors."
    }, {
      property: "og:title",
      content: "Contact — MLONIX"
    }, {
      property: "og:description",
      content: "Request a demo or get in touch with our team."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-kcg2eW_D.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — MLONIX"
    }, {
      name: "description",
      content: "MLONIX is on a mission to make groundwater intelligence accessible, affordable and actionable for everyone."
    }, {
      property: "og:title",
      content: "About — MLONIX"
    }, {
      property: "og:description",
      content: "Our mission, vision and approach to groundwater intelligence."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CjWzjPAM.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "MLONIX — Groundwater Intelligence. Zero Hardware Required."
    }, {
      name: "description",
      content: "MLONIX transforms utility and environmental data into actionable groundwater intelligence for individuals, enterprises and governments."
    }, {
      property: "og:title",
      content: "MLONIX — Groundwater Intelligence"
    }, {
      property: "og:description",
      content: "Environmental intelligence for groundwater, with zero hardware required."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TechnologyRoute = Route$6.update({
  id: "/technology",
  path: "/technology",
  getParentRoute: () => Route$7
});
const TeamRoute = Route$5.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$7
});
const SitemapDotxmlRoute = Route$4.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const ProductRoute = Route$3.update({
  id: "/product",
  path: "/product",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ProductRoute,
  SitemapDotxmlRoute,
  TeamRoute,
  TechnologyRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
