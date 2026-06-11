import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/Section";
import { Progress } from "@/components/site/Progress";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MLONIX" },
      { name: "description", content: "MLONIX is on a mission to make groundwater intelligence accessible, affordable and actionable for everyone." },
      { property: "og:title", content: "About — MLONIX" },
      { property: "og:description", content: "Our mission, vision and approach to groundwater intelligence." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border py-20 sm:py-24">
        <div className="container-mx grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="About MLONIX"
              title={<>Your electricity bill knows your water level.<br />We just learned to read it.</>}
              description="MLONIX transforms everyday utility and environmental data into groundwater intelligence, helping individuals, enterprises and governments make better water management decisions."
            />
          </div>
          <div className="space-y-6 lg:col-span-5">
            <Card title="Mission" body="To make groundwater intelligence accessible, affordable and actionable for everyone." />
            <Card title="Vision" body="A future where groundwater resources are monitored and protected before crises occur." />
            <Card title="Location" body="Headquartered in India, working with partners across the country." />
          </div>
        </div>
      </section>
      <Progress />
    </SiteLayout>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <p className="font-mono text-[10px] uppercase tracking-wider text-primary">{title}</p>
      <p className="mt-2 text-base leading-relaxed text-foreground">{body}</p>
    </div>
  );
}
