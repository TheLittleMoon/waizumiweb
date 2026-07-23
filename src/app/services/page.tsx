import type { Metadata } from "next";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { ServiceGrid } from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="取扱業務 · Client services"
            title="Services at a glance"
            body="Tap a box for full details on each matter."
          />
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ServiceGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
