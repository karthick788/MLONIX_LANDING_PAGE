import { ArrowRight } from "lucide-react";

const stages = [
  { k: "01", t: "Data Sources", d: "Utility, environmental and contextual signals already in circulation." },
  { k: "02", t: "Intelligence Engine", d: "Modern analytics translate raw inputs into structured indicators." },
  { k: "03", t: "Environmental Analysis", d: "Indicators are placed in geographic and climatic context." },
  { k: "04", t: "Actionable Insights", d: "Decision-ready outputs delivered to the right stakeholders." },
];

export function CoreInsight() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--navy)] py-20 text-[color:var(--navy-foreground)] sm:py-24">
      <div className="absolute inset-0 navy-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[520px] -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #1849A9, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-mx relative">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white/70">
            <span className="h-px w-6 bg-white/60" /> Core Insight
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            The Signals Already Exist
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Infrastructure systems generate valuable signals every day. With modern
            analytics and data science, those signals can be transformed into
            environmental intelligence — without installing new hardware.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <div
              key={s.k}
              className="relative rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <span className="font-mono text-xs text-white/50">{s.k}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.d}</p>
              {i < stages.length - 1 && (
                <ArrowRight
                  className="absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-white/30 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
