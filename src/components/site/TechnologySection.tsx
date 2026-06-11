import { Brain, Cpu, Globe2, LineChart, Cloud, Lightbulb } from "lucide-react";
import { SectionHeader } from "./Section";

const capabilities = [
  { Icon: Brain, t: "Artificial Intelligence", d: "Adaptive intelligence that improves as more context becomes available." },
  { Icon: Cpu, t: "Machine Learning", d: "Pattern recognition that surfaces meaningful trends from complex data." },
  { Icon: Globe2, t: "Environmental Data Integration", d: "A unified view across multiple environmental data sources." },
  { Icon: LineChart, t: "Predictive Analytics", d: "Forward-looking indicators to support early decision making." },
  { Icon: Cloud, t: "Scalable Cloud Infrastructure", d: "Built to operate reliably from a single district to a nation." },
  { Icon: Lightbulb, t: "Explainable Insights", d: "Outputs designed to be interpreted and trusted by decision makers." },
];

export function Technology() {
  return (
    <section className="border-b border-border bg-[color:var(--surface)] py-20 sm:py-24">
      <div className="container-mx">
        <SectionHeader
          eyebrow="Technology"
          title="Built on Science. Designed for Scale."
          description="MLONIX is engineered to deliver dependable environmental intelligence — from data ingestion to insight — with the rigor required by institutional and government users."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ Icon, t, d }) => (
            <div key={t} className="bg-card p-7">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-5 text-base font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground">
          Note: Specific models, methodologies and proprietary techniques are not
          disclosed publicly to protect MLONIX intellectual property.
        </p>
      </div>
    </section>
  );
}
