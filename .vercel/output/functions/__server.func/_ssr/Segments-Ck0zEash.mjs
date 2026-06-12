import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SectionHeader } from "./Section-C6O3MsTN.mjs";
import { U as Upload, d as Cpu, M as Map, i as ListChecks, c as Activity, S as ShieldCheck, T as TrendingUp, j as User, k as Landmark, l as Building2 } from "../_libs/lucide-react.mjs";
const steps = [
  { Icon: Upload, t: "Submit Data", d: "Securely share supported data inputs through the platform." },
  { Icon: Cpu, t: "Automated Analysis", d: "Inputs are processed through our analytics pipeline." },
  { Icon: Map, t: "Environmental Context", d: "Results are aligned with regional environmental conditions." },
  { Icon: ListChecks, t: "Actionable Recommendations", d: "Receive clear, decision-ready guidance." }
];
const outputs = [
  {
    Icon: Activity,
    title: "Groundwater Health Score",
    value: "72/100",
    note: "Composite indicator at regional scale"
  },
  {
    Icon: ShieldCheck,
    title: "Risk Indicators",
    value: "Low – Moderate",
    note: "Stress signals tracked over time"
  },
  {
    Icon: TrendingUp,
    title: "Resource Optimization",
    value: "Recommended",
    note: "Allocation and drawdown guidance"
  }
];
function Product() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-[color:var(--surface)] py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mx", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "The Product",
        title: "Intelligence Delivered Simply",
        description: "A clear, end-to-end workflow that turns existing data into the groundwater insights your teams can act on."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-xl border border-border bg-background p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
          "0",
          i + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold text-foreground", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.d })
    ] }, s.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 rounded-2xl border border-border bg-background p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-wider text-muted-foreground", children: "Sample Output" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-semibold text-foreground", children: "Region Overview" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "Illustrative example" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-3", children: outputs.map(({ Icon, title, value, note }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-2xl font-semibold text-foreground", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: note })
      ] }, title)) })
    ] })
  ] }) });
}
const segments = [
  {
    Icon: User,
    tag: "Individuals",
    title: "Personal groundwater awareness",
    body: "Understand the groundwater conditions in your area and make informed decisions about everyday water use."
  },
  {
    Icon: Landmark,
    tag: "Government & Municipal",
    title: "Regional planning and resource management",
    body: "Equip agencies and municipal bodies with intelligence for sustainable water planning, allocation and response."
  },
  {
    Icon: Building2,
    tag: "Enterprises & Institutions",
    title: "Risk and sustainability intelligence",
    body: "Strengthen operational risk assessment, ESG reporting and environmental compliance with reliable insights."
  }
];
function Segments() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-background py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mx", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Who It Serves",
        title: "Built For Every Stakeholder",
        description: "From individual households to national agencies, MLONIX adapts to the scale and needs of each audience."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-3", children: segments.map(({ Icon, tag, title, body }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_rgba(11,17,32,0.25)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-semibold text-foreground", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: body })
        ]
      },
      tag
    )) })
  ] }) });
}
export {
  Product as P,
  Segments as S
};
