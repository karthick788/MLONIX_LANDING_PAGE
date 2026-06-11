import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { CoreInsight } from "@/components/site/CoreInsight";
import { Product } from "@/components/site/ProductSection";
import { Segments } from "@/components/site/Segments";
import { Technology } from "@/components/site/TechnologySection";
import { Team } from "@/components/site/TeamSection";
import { Progress } from "@/components/site/Progress";
import { Contact } from "@/components/site/Contact";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MLONIX — Groundwater Intelligence. Zero Hardware Required." },
      { name: "description", content: "MLONIX transforms utility and environmental data into actionable groundwater intelligence for individuals, enterprises and governments." },
      { property: "og:title", content: "MLONIX — Groundwater Intelligence" },
      { property: "og:description", content: "Environmental intelligence for groundwater, with zero hardware required." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Problem />
      <CoreInsight />
      <Product />
      <Segments />
      <Technology />
      <Team />
      <Progress />
      <CtaBand />
      <Contact />
    </SiteLayout>
  );
}

function CtaBand() {
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="container-mx flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-[color:var(--navy)] p-8 text-[color:var(--navy-foreground)] sm:p-12 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to see what your data reveals?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            Request a tailored demo for your municipality, enterprise or institution.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-[color:var(--navy)] transition-colors hover:bg-white/90"
        >
          Request Demo <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
