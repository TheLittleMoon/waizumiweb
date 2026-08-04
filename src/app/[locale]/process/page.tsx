import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { t } from "@/content/ui";
import { processSteps } from "@/content/site";
import { isLocale, pickLocalized, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return { title: t(raw, "processEyebrow") };
}

export default async function ProcessPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-paper-warm to-paper px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t(locale, "processEyebrow")}
            title={t(locale, "processTitle")}
            body={t(locale, "processBody")}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <ol className="space-y-0">
          {processSteps.map((step) => (
            <li
              key={step.n}
              className="grid gap-4 border-t border-line py-8 md:grid-cols-[6rem_1fr] md:gap-10"
            >
              <span className="font-display text-3xl text-rose">
                {String(step.n).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-2xl text-ink">
                  {pickLocalized(step, locale, "title")}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft md:text-base">
                  {pickLocalized(step, locale, "body")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
