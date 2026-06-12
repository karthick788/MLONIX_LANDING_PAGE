import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SectionHeader } from "./Section-C6O3MsTN.mjs";
const milestones = [
  { phase: "Phase 01", title: "Product Development", body: "Core platform architecture and intelligence pipeline." },
  { phase: "Phase 02", title: "Validation Activities", body: "Structured validation with domain experts and institutional reviewers." },
  { phase: "Phase 03", title: "Pilot Programs", body: "Targeted pilots with municipal and enterprise partners." },
  { phase: "Phase 04", title: "Strategic Partnerships", body: "Expanding the partner network for nationwide deployment." }
];
function Progress() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-[color:var(--surface)] py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mx", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Progress",
        title: "Building the Future of Groundwater Intelligence",
        description: "Our roadmap is grounded in disciplined execution, scientific validation and meaningful partnerships."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4", children: milestones.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative bg-card p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-primary", children: m.phase }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-base font-semibold text-foreground", children: m.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: m.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 block font-mono text-xs text-muted-foreground", children: [
        "0",
        i + 1,
        " / 04"
      ] })
    ] }, m.phase)) })
  ] }) });
}
export {
  Progress as P
};
