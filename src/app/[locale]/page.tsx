import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { ServiceGrid } from "@/components/ServiceGrid";
import { HighlightGrid } from "@/components/HighlightGrid";
import { t } from "@/content/ui";
import { concerns, profile, site } from "@/content/site";
import {
  isLocale,
  localePath,
  pickLocalized,
  type Locale,
} from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/SaporoSunset.jpeg"
          alt={
            locale === "ja"
              ? "夕暮れの大通公園と札幌市街、遠景の山並み"
              : "Odori Park and central Sapporo at sunset, with mountains on the horizon"
          }
          fill
          priority
          sizes="100vw"
          quality={85}
          className="animate-drift object-cover object-[center_35%]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(28, 22, 24, 0.35) 0%, rgba(28, 22, 24, 0.15) 35%, rgba(28, 22, 24, 0.55) 100%),
              linear-gradient(90deg, rgba(28, 22, 24, 0.45) 0%, rgba(28, 22, 24, 0.1) 55%, transparent 100%)
            `,
          }}
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:justify-end md:px-8 md:pb-24">
          <div className="max-w-2xl text-white">
            <p className="animate-rise font-logo text-xs tracking-[0.28em] text-white/80 uppercase">
              {t(locale, "heroEyebrow")}
            </p>
            <h1 className="animate-rise-delay-1 mt-5 font-logo text-5xl leading-[1.02] tracking-tight md:text-7xl">
              WAIZUMI
            </h1>
            <p className="animate-rise-delay-1 mt-2 font-logo text-lg text-white/90 md:text-2xl">
              {t(locale, "officeSubtitle")}
            </p>
            <p className="animate-rise-delay-2 mt-6 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
              {locale === "ja" ? site.taglineJa : site.taglineEn}
            </p>
            <div className="animate-rise-delay-2 mt-10 flex flex-wrap gap-3">
              <Link
                href={localePath(locale, "/contact")}
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-white/90"
              >
                {t(locale, "bookConsultation")}
              </Link>
              <Link
                href={localePath(locale, "/services")}
                className="rounded-full border border-white/45 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {t(locale, "viewServices")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow={t(locale, "concernsEyebrow")}
          title={t(locale, "concernsTitle")}
          body={t(locale, "concernsBody")}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {concerns.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-rose/15 px-6 py-7 ring-1 ring-rose/20 transition hover:-translate-y-0.5 hover:bg-rose/25"
            >
              <h3 className="font-logo text-xl leading-snug text-ink">
                {pickLocalized(item, locale, "title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {pickLocalized(item, locale, "body")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={t(locale, "ctaSituationTitle")}
        body={t(locale, "ctaSituationBody")}
        cta={t(locale, "ctaSituationCta")}
      />

      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading
            eyebrow={t(locale, "servicesEyebrow")}
            title={t(locale, "servicesTitle")}
            body={t(locale, "servicesBody")}
          />
          <ServiceGrid locale={locale} className="mt-12" />
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={t(locale, "ctaVisaTitle")}
        body={t(locale, "ctaVisaBody")}
        cta={t(locale, "ctaVisaCta")}
      />

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12">
            <SectionHeading
              align="center"
              title={t(locale, "highlightsTitle")}
            />
          </div>
          <HighlightGrid locale={locale} />
        </div>
      </section>

      <section className="border-y border-line bg-paper-warm/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-14 md:px-8 md:py-24">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden md:mx-0">
            <Image
              src="/TomomiWaizumi.avif"
              alt={locale === "ja" ? profile.nameJa : profile.nameEn}
              fill
              sizes="(max-width: 768px) 80vw, 320px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-rose-deep uppercase">
              {t(locale, "meetPrincipal")}
            </p>
            <h2 className="font-logo mt-3 text-3xl text-ink md:text-4xl">
              {locale === "ja" ? profile.nameJa : profile.nameEn}
            </h2>
            <p className="mt-2 text-sm text-mute">
              {locale === "ja" ? profile.roleJa : profile.roleEn}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              {locale === "ja" ? profile.bioJa : profile.bioEn}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={localePath(locale, "/about")}
                className="rounded-full bg-rose-deep px-6 py-3 text-sm font-medium text-white transition hover:bg-rose"
              >
                {t(locale, "readStory")}
              </Link>
              <Link
                href={localePath(locale, "/contact")}
                className="rounded-full border border-ink/15 px-6 py-3 text-sm text-ink transition hover:border-rose/40"
              >
                {t(locale, "getInTouch")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
