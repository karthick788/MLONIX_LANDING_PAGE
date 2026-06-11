import { Upload, Cpu, Map, ListChecks, ShieldCheck, TrendingUp, Activity } from "lucide-react";
import { SectionHeader } from "./Section";

const steps = [
  { Icon: Upload, t: "Submit Data", d: "Securely share supported data inputs through the platform." },
  { Icon: Cpu, t: "Automated Analysis", d: "Inputs are processed through our analytics pipeline." },
  { Icon: Map, t: "Environmental Context", d: "Results are aligned with regional environmental conditions." },
  { Icon: ListChecks, t: "Actionable Recommendations", d: "Receive clear, decision-ready guidance." },
];

const outputs = [
  {
    Icon: Activity,
    title: "Groundwater Health Score",
    value: "72/100",
    note: "Composite indicator at regional scale",
  },
  {
    Icon: ShieldCheck,
    title: "Risk Indicators",
    value: "Low – Moderate",
    note: "Stress signals tracked over time",
  },
  {
    Icon: TrendingUp,
    title: "Resource Optimization",
    value: "Recommended",
    note: "Allocation and drawdown guidance",
  },
];

export function Product() {
  return (
    <section className="border-b border-border bg-[color:var(--surface)] py-20 sm:py-24">
      <div className="container-mx">
        <SectionHeader
          eyebrow="The Product"
          title="Intelligence Delivered Simply"
          description="A clear, end-to-end workflow that turns existing data into the groundwater insights your teams can act on."
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-2xl border border-border bg-background p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Sample Output</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">Region Overview</h3>
            </div>
            <span className="font-mono text-xs text-muted-foreground">Illustrative example</span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {outputs.map(({ Icon, title, value, note }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5">
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{title}</p>
                <p className="mt-1 font-display text-2xl font-semibold text-foreground">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
