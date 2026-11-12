import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Learning, Process, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/learning")({
  head: () => ({
    meta: [
      { title: "Learning — MAGAF Technologies" },
      { name: "description", content: "Python courses, practical projects, guided learning, career preparation and membership programs." },
      { property: "og:title", content: "Learning — MAGAF Technologies" },
      { property: "og:description", content: "Python courses, practical projects, guided learning, career preparation and membership programs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Learning" title="Learn. Build. Grow." text="Practical technology learning with guidance — designed around real projects." />
      <Learning />
      <Process />
      <CTA />
    </>
  );
}
