import { EyeOff, CircuitBoard, Layers, Clock } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  {
    Icon: EyeOff,
    title: "Limited Visibility",
    body: "Most stakeholders have little to no view of groundwater conditions until problems emerge.",
  },
  {
    Icon: CircuitBoard,
    title: "Expensive Infrastructure",
    body: "Traditional monitoring requires physical sensors, deep installation and ongoing maintenance.",
  },
  {
    Icon: Layers,
    title: "Fragmented Data",
    body: "Critical signals sit across utilities, agencies and environmental sources without integration.",
  },
  {
    Icon: Clock,
    title: "Delayed Decisions",
    body: "By the time data reaches decision makers, the window to act has often already closed.",
  },
];

export function Problem() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="container-mx">
        <SectionHeader
          eyebrow="The Problem"
          title="Groundwater Monitoring Remains a Major Challenge"
          description="Despite its importance to communities, agriculture and industry, groundwater is one of the least observed natural systems. The cost of staying blind keeps rising."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
