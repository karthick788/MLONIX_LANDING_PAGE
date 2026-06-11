import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, Droplets, Activity, Gauge } from "lucide-react";
import { Eyebrow } from "./Section";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 hairline-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--primary), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-mx relative grid gap-16 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <Eyebrow>Environmental Intelligence Platform</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Groundwater Intelligence.
            <br />
            <span className="text-primary">Zero Hardware Required.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Transform utility and environmental data into actionable groundwater
            insights using advanced analytics and environmental intelligence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <PlayCircle className="h-4 w-4" /> See How It Works
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "Zero", v: "Sensors required" },
              { k: "Nationwide", v: "Coverage potential" },
              { k: "Real-time", v: "Insight delivery" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dt>
                <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground">{s.k}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/15 to-transparent blur-2xl" aria-hidden="true" />
      <div className="relative rounded-xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(11,17,32,0.25)]">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            mlonix / region-overview
          </span>
        </div>

        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Groundwater Health Score</p>
              <p className="mt-1 font-display text-3xl font-semibold text-foreground">72<span className="text-base text-muted-foreground">/100</span></p>
            </div>
            <span className="rounded-full bg-teal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-teal">Stable</span>
          </div>

          <Sparkline />

          <div className="grid grid-cols-3 gap-2">
            {[
              { Icon: Droplets, label: "Reserve", value: "Adequate" },
              { Icon: Gauge, label: "Demand", value: "Moderate" },
              { Icon: Activity, label: "Trend", value: "+2.1%" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="rounded-lg border border-border bg-background p-3">
                <Icon className="h-4 w-4 text-primary" />
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-background p-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Recommendation</p>
            <p className="mt-1 text-sm text-foreground">
              Maintain current draw rates. Review allocation in Q3 ahead of seasonal demand peak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline() {
  const pts = [22, 28, 24, 32, 30, 38, 34, 42, 40, 48, 46, 52, 58, 56, 62];
  const w = 320, h = 80;
  const max = Math.max(...pts), min = Math.min(...pts);
  const step = w / (pts.length - 1);
  const path = pts
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / (max - min)) * (h - 8) - 4;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-20 w-full" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g)" />
      <path d={path} fill="none" stroke="var(--primary)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
