import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SectionHeader } from "./Section-C6O3MsTN.mjs";
const team = [
  { name: "Founding Team", role: "Engineering & Research", bio: "Cross-disciplinary engineers and researchers driving the platform forward." },
  { name: "Advisory Network", role: "Water & Environment", bio: "Domain experts contributing scientific and policy perspective." },
  { name: "Partners", role: "Institutional Collaborators", bio: "Working alongside agencies and institutions on validation programs." }
];
function Team() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-background py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mx", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Team",
        title: "Built by Engineers and Problem Solvers",
        description: "A team focused on building real, durable infrastructure for environmental intelligence."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-3", children: team.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-semibold text-primary", children: m.name.split(" ").map((w) => w[0]).slice(0, 2).join("") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold text-foreground", children: m.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: m.role }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: m.bio })
    ] }, m.name)) })
  ] }) });
}
export {
  Team as T
};
