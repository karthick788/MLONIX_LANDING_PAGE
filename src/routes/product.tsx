import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Product } from "@/components/site/ProductSection";
import { Segments } from "@/components/site/Segments";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — MLONIX" },
      { name: "description", content: "An end-to-end workflow that turns existing data into actionable groundwater insights for stakeholders of every scale." },
      { property: "og:title", content: "Product — MLONIX" },
      { property: "og:description", content: "Intelligence delivered simply, from data submission to actionable recommendations." },
      { property: "og:url", content: "/product" },
    ],
    links: [{ rel: "canonical", href: "/product" }],
  }),
  component: () => (
    <SiteLayout>
      <Product />
      <Segments />
    </SiteLayout>
  ),
});
