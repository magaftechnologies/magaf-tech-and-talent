import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Services, Process, Tech, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MAGAF Technologies" },
      { name: "description", content: "Web development, apps, AI automation, video advertising, creative services and tech courses." },
      { property: "og:title", content: "Services — MAGAF Technologies" },
      { property: "og:description", content: "Web development, apps, AI automation, video advertising, creative services and tech courses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything you need to build and grow digitally." text="Six focused service areas — from code to creative to learning." />
      <Services />
      <Process />
      <Tech />
      <CTA />
    </>
  );
}
