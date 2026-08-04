import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { ServiceGrid } from "@/components/ServiceGrid";
import { t } from "@/content/ui";
import { isLocale, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return { title: t(raw, "servicesEyebrow") };
}

export default async function ServicesPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <section className="border-b border-line px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t(locale, "servicesEyebrow")}
            title={t(locale, "servicesIndexTitle")}
            body={t(locale, "servicesIndexBody")}
          />
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ServiceGrid locale={locale} />
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
