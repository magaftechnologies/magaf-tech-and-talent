import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ContactForm } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MAGAF Technologies" },
      { name: "description", content: "Tell MAGAF Technologies what you want to build, improve or automate." },
      { property: "og:title", content: "Contact — MAGAF Technologies" },
      { property: "og:description", content: "Tell MAGAF Technologies what you want to build, improve or automate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Have an idea? Let's build it." text="Tell us what you want to build, improve or automate." />
      <ContactForm />
    </>
  );
}
