import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MLONIX" },
      { name: "description", content: "Get in touch with MLONIX. We work with municipal organizations, research institutions, enterprises, partners and investors." },
      { property: "og:title", content: "Contact — MLONIX" },
      { property: "og:description", content: "Request a demo or get in touch with our team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <SiteLayout>
      <Contact />
    </SiteLayout>
  ),
});
