import { User, Building2, Landmark } from "lucide-react";
import { SectionHeader } from "./Section";

const segments = [
  {
    Icon: User,
    tag: "Individuals",
    title: "Personal groundwater awareness",
    body: "Understand the groundwater conditions in your area and make informed decisions about everyday water use.",
  },
  {
    Icon: Landmark,
    tag: "Government & Municipal",
    title: "Regional planning and resource management",
    body: "Equip agencies and municipal bodies with intelligence for sustainable water planning, allocation and response.",
  },
  {
    Icon: Building2,
    tag: "Enterprises & Institutions",
    title: "Risk and sustainability intelligence",
    body: "Strengthen operational risk assessment, ESG reporting and environmental compliance with reliable insights.",
  },
];

export function Segments() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="container-mx">
        <SectionHeader
          eyebrow="Who It Serves"
          title="Built For Every Stakeholder"
          description="From individual households to national agencies, MLONIX adapts to the scale and needs of each audience."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {segments.map(({ Icon, tag, title, body }) => (
            <article
              key={tag}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_rgba(11,17,32,0.25)]"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{tag}</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
