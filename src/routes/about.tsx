import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Intro, Why, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MAGAF Technologies" },
      { name: "description", content: "Discover how MAGAF Technologies combines technology, creativity and practical innovation to build useful digital experiences." },
      { property: "og:title", content: "About — MAGAF Technologies" },
      { property: "og:description", content: "Discover how MAGAF Technologies combines technology, creativity and practical innovation to build useful digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About" title="Technology. Creativity. Practical Innovation." text="MAGAF Technologies combines development, automation and creative services to help businesses, brands and individuals grow digitally." />
      <Intro />
      <Why />
      <CTA />
    </>
  );
}
