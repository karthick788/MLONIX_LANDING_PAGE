import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, a as SectionHeader } from "./Section-C6O3MsTN.mjs";
import { P as Progress } from "./Progress-DPDF31iB.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lucide-react.mjs";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mx grid gap-12 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "About MLONIX", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Your electricity bill knows your water level.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "We just learned to read it."
      ] }), description: "MLONIX transforms everyday utility and environmental data into groundwater intelligence, helping individuals, enterprises and governments make better water management decisions." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Mission", body: "To make groundwater intelligence accessible, affordable and actionable for everyone." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Vision", body: "A future where groundwater resources are monitored and protected before crises occur." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Location", body: "Headquartered in India, working with partners across the country." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, {})
  ] });
}
function Card({
  title,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-wider text-primary", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-relaxed text-foreground", children: body })
  ] });
}
export {
  AboutPage as component
};
