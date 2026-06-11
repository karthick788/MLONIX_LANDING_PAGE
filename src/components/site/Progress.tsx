import { SectionHeader } from "./Section";

const milestones = [
  { phase: "Phase 01", title: "Product Development", body: "Core platform architecture and intelligence pipeline." },
  { phase: "Phase 02", title: "Validation Activities", body: "Structured validation with domain experts and institutional reviewers." },
  { phase: "Phase 03", title: "Pilot Programs", body: "Targeted pilots with municipal and enterprise partners." },
  { phase: "Phase 04", title: "Strategic Partnerships", body: "Expanding the partner network for nationwide deployment." },
];

export function Progress() {
  return (
    <section className="border-b border-border bg-[color:var(--surface)] py-20 sm:py-24">
      <div className="container-mx">
        <SectionHeader
          eyebrow="Progress"
          title="Building the Future of Groundwater Intelligence"
          description="Our roadmap is grounded in disciplined execution, scientific validation and meaningful partnerships."
        />

        <ol className="relative mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {milestones.map((m, i) => (
            <li key={m.phase} className="relative bg-card p-7">
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">{m.phase}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              <span className="mt-5 block font-mono text-xs text-muted-foreground">0{i + 1} / 04</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
