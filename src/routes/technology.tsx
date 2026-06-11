import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CoreInsight } from "@/components/site/CoreInsight";
import { Technology } from "@/components/site/TechnologySection";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — MLONIX" },
      { name: "description", content: "Built on science and designed for scale: AI, machine learning and environmental data integration powering groundwater intelligence." },
      { property: "og:title", content: "Technology — MLONIX" },
      { property: "og:description", content: "Our approach to building dependable environmental intelligence at scale." },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: () => (
    <SiteLayout>
      <CoreInsight />
      <Technology />
    </SiteLayout>
  ),
});
