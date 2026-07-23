import type { Metadata } from "next";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-paper-warm to-paper px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="取扱業務 · Client services"
            title="Services at a glance"
            body="A clear overview of the matters we handle. Japanese detail pages from the current practice are preserved in our content archive and will be woven in as we expand each service."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="border-t border-line pt-6"
              id={service.slug}
            >
              <p className="text-xs tracking-[0.18em] text-rose uppercase">
                {service.blurbEn}
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink">
                {service.titleEn}
              </h2>
              <p className="mt-1 text-sm text-mute">
                {service.blurbJa} · {service.titleJa}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
