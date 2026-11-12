import { createFileRoute } from "@tanstack/react-router";
import { Intro, Services, Why, Work, Tech, Learning, CTA } from "@/components/site/sections";
import { Hero } from "@/components/site/hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAGAF Technologies | Web Development, Apps, Automation & Digital Solutions" },
      { name: "description", content: "Web development, app development, AI and business automation, advertising and video production, digital solutions and practical technology learning." },
      { property: "og:title", content: "MAGAF Technologies | Web Development, Apps, Automation & Digital Solutions" },
      { property: "og:description", content: "Web development, app development, AI and business automation, advertising and video production, digital solutions and practical technology learning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Why />
      <Work />
      <Tech />
      <Learning />
      <CTA />
    </>
  );
}
