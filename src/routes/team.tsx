import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Team } from "@/components/site/TeamSection";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — MLONIX" },
      { name: "description", content: "Engineers, researchers and partners building the future of groundwater intelligence at MLONIX." },
      { property: "og:title", content: "Team — MLONIX" },
      { property: "og:description", content: "The people behind MLONIX." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: () => (
    <SiteLayout>
      <Team />
    </SiteLayout>
  ),
});
