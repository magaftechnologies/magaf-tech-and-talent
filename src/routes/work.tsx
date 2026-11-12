import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Work, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Project — MAGAF Technologies" },
      { name: "description", content: "A professional digital solution designed and delivered for a MAGAF Technologies client." },
      { property: "og:title", content: "Project — MAGAF Technologies" },
      { property: "og:description", content: "A professional digital solution designed and delivered for a MAGAF Technologies client." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Our Project" title="Client Project Delivered." text="A professional digital solution designed and delivered for our client." />
      <Work />
      <CTA />
    </>
  );
}
