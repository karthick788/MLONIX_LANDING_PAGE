import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SectionHeader } from "./Section-C6O3MsTN.mjs";
import { A as ArrowRight, B as Brain, d as Cpu, e as Earth, f as ChartLine, g as Cloud, h as Lightbulb } from "../_libs/lucide-react.mjs";
const stages = [
  { k: "01", t: "Data Sources", d: "Utility, environmental and contextual signals already in circulation." },
  { k: "02", t: "Intelligence Engine", d: "Modern analytics translate raw inputs into structured indicators." },
  { k: "03", t: "Environmental Analysis", d: "Indicators are placed in geographic and climatic context." },
  { k: "04", t: "Actionable Insights", d: "Decision-ready outputs delivered to the right stakeholders." }
];
function CoreInsight() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[color:var(--navy)] py-20 text-[color:var(--navy-foreground)] sm:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 navy-grid opacity-60", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[520px] -translate-y-1/2 rounded-full opacity-25 blur-3xl",
        style: { background: "radial-gradient(closest-side, #1849A9, transparent 70%)" },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mx relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-white/60" }),
          " Core Insight"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-semibold tracking-tight sm:text-4xl", children: "The Signals Already Exist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-white/70", children: "Infrastructure systems generate valuable signals every day. With modern analytics and data science, those signals can be transformed into environmental intelligence — without installing new hardware." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: stages.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-white/50", children: s.k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-semibold text-white", children: s.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white/70", children: s.d }),
            i < stages.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ArrowRight,
              {
                className: "absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-white/30 lg:block",
                "aria-hidden": "true"
              }
            )
          ]
        },
        s.k
      )) })
    ] })
  ] });
}
const capabilities = [
  { Icon: Brain, t: "Artificial Intelligence", d: "Adaptive intelligence that improves as more context becomes available." },
  { Icon: Cpu, t: "Machine Learning", d: "Pattern recognition that surfaces meaningful trends from complex data." },
  { Icon: Earth, t: "Environmental Data Integration", d: "A unified view across multiple environmental data sources." },
  { Icon: ChartLine, t: "Predictive Analytics", d: "Forward-looking indicators to support early decision making." },
  { Icon: Cloud, t: "Scalable Cloud Infrastructure", d: "Built to operate reliably from a single district to a nation." },
  { Icon: Lightbulb, t: "Explainable Insights", d: "Outputs designed to be interpreted and trusted by decision makers." }
];
function Technology() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-[color:var(--surface)] py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mx", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Technology",
        title: "Built on Science. Designed for Scale.",
        description: "MLONIX is engineered to deliver dependable environmental intelligence — from data ingestion to insight — with the rigor required by institutional and government users."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3", children: capabilities.map(({ Icon, t, d }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold text-foreground", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: d })
    ] }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground", children: "Note: Specific models, methodologies and proprietary techniques are not disclosed publicly to protect MLONIX intellectual property." })
  ] }) });
}
export {
  CoreInsight as C,
  Technology as T
};
