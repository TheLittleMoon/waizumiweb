import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SiteChrome";
import { privacy } from "@/content/privacy";
import { t } from "@/content/ui";
import { isLocale, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return {
    title: raw === "ja" ? privacy.titleJa : privacy.titleEn,
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const title = locale === "ja" ? privacy.titleJa : privacy.titleEn;
  const intro = locale === "ja" ? privacy.introJa : privacy.introEn;
  const articleHeading =
    locale === "ja" ? privacy.articleHeadingJa : privacy.articleHeadingEn;
  const article = locale === "ja" ? privacy.articleJa : privacy.articleEn;
  const policyHeading =
    locale === "ja" ? privacy.policyHeadingJa : privacy.policyHeadingEn;
  const points = locale === "ja" ? privacy.pointsJa : privacy.pointsEn;

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-paper-warm to-paper px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={t(locale, "privacy")} title={title} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <div className="space-y-10 text-base leading-relaxed text-ink-soft">
          <p className="text-ink">{intro}</p>

          <div>
            <h2 className="font-logo text-lg tracking-wide text-ink">
              {articleHeading}
            </h2>
            <p className="mt-4">{article}</p>
          </div>

          <div>
            <h2 className="font-logo text-lg tracking-wide text-ink">
              {policyHeading}
            </h2>
            <ol className="mt-4 list-decimal space-y-4 pl-5">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
