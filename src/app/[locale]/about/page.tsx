import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { t } from "@/content/ui";
import { profile, site } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return { title: t(raw, "aboutEyebrow") };
}

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-paper-warm to-paper px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t(locale, "aboutEyebrow")}
            title={locale === "ja" ? profile.nameJa : profile.nameEn}
            body={locale === "ja" ? profile.roleJa : profile.roleEn}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(14rem,0.85fr)_1.35fr] md:gap-14 lg:grid-cols-[minmax(16rem,0.75fr)_1.25fr_0.85fr]">
          <figure className="relative aspect-[3/4] overflow-hidden md:sticky md:top-28">
            <Image
              src="/TomomiWaizumi.avif"
              alt={locale === "ja" ? profile.nameJa : profile.nameEn}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover object-top"
              priority
            />
          </figure>

          <div>
            <h2 className="font-display text-2xl text-ink">
              {t(locale, "herStory")}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              {locale === "ja" ? profile.bioJa : profile.bioEn}
            </p>
          </div>

          <aside className="border-t border-line pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <h2 className="text-xs tracking-[0.2em] text-rose uppercase">
              {t(locale, "credentials")}
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
              {profile.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-10">
              <h2 className="text-xs tracking-[0.2em] text-rose uppercase">
                {t(locale, "office")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {locale === "ja" ? site.addressJa : site.addressEn}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
