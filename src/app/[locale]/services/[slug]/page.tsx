import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/SiteChrome";
import { ServiceBody } from "@/components/ServiceBody";
import { t } from "@/content/ui";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  serviceDetails,
} from "@/content/services";
import type { ServiceReference } from "@/content/services/types";
import {
  isLocale,
  localePath,
  locales,
  pickLocalized,
  type Locale,
} from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const DEFAULT_REFERENCES: ServiceReference[] = [
  {
    label: "出入国在留管理庁 / Immigration Services Agency of Japan",
    href: "https://www.moj.go.jp/isa/",
  },
  {
    label: "外務省 / Ministry of Foreign Affairs of Japan",
    href: "https://www.mofa.go.jp/",
  },
];

function collectReferences(
  service: NonNullable<ReturnType<typeof getServiceBySlug>>,
): ServiceReference[] {
  const fromContent =
    service.references ??
    service.blocks
      .filter(
        (b): b is Extract<typeof b, { type: "link" }> =>
          b.type === "link" && Boolean(b.external),
      )
      .map((b) => ({ label: b.label, href: b.href }));

  const seen = new Set<string>();
  const merged = [...fromContent, ...DEFAULT_REFERENCES].filter((ref) => {
    if (seen.has(ref.href)) return false;
    if (ref.href.includes("visa-waizumi.com")) return false;
    seen.add(ref.href);
    return true;
  });

  return merged;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllServiceSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title:
      raw === "ja"
        ? service.metaTitleJa ?? pickLocalized(service, raw, "title")
        : service.metaTitleEn ?? pickLocalized(service, raw, "title"),
    description:
      raw === "ja"
        ? service.metaDescriptionJa ?? pickLocalized(service, raw, "blurb")
        : service.metaDescriptionEn ?? pickLocalized(service, raw, "blurb"),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = serviceDetails.filter((s) => s.slug !== service.slug);
  const references = collectReferences(service);
  const structuredData =
    service.slug === "specified-skilled-worker"
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LegalService",
              name: locale === "ja" ? service.titleJa : service.titleEn,
              description:
                locale === "ja"
                  ? service.metaDescriptionJa
                  : service.metaDescriptionEn,
              telephone: "+81-11-206-1025",
              areaServed: "Sapporo, Hokkaido, Japan",
              url: `https://waizumiweb.vercel.app/${locale}/services/${service.slug}`,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: t(locale, "servicesEyebrow"), item: `https://waizumiweb.vercel.app/${locale}/services` },
                { "@type": "ListItem", position: 2, name: pickLocalized(service, locale, "title"), item: `https://waizumiweb.vercel.app/${locale}/services/${service.slug}` },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: (locale === "ja"
                ? [
                    ["採用する外国人がまだ決まっていなくても相談できますか", "はい。必要に応じて提携する有料職業紹介事業者へおつなぎします。"],
                    ["登録支援機関が決まっていません", "必要に応じて、提携する登録支援機関と連携できます。"],
                    ["外国人本人が海外にいても申請できますか", "はい。外国人本人が海外にいても申請できます。"],
                    ["技能実習から特定技能へ変更できますか", "技能実習の職種・作業と希望する特定技能分野などを確認し、個別に判断します。"],
                    ["会社側にはどのような条件がありますか", "適切な雇用契約、法令遵守、報酬額、支援体制などの基準があります。"],
                    ["申請すれば必ず許可されますか", "許可を保証することはできません。事実関係と要件を確認して申請します。"],
                    ["英語や中国語で外国人本人に説明できますか", "はい。中国語、英語、日本語でのコミュニケーションが可能です。"],
                  ]
                : [
                    ["Can we consult before choosing a candidate?", "Yes. We can connect you with a partner employment-placement business."],
                    ["Can we apply while the foreign national is overseas?", "Yes. The application is generally a Certificate of Eligibility application."],
                    ["Does filing guarantee permission?", "No. Permission cannot be guaranteed."],
                    ["Can you explain the process in English or Chinese?", "Yes. Our office communicates in Japanese, English, and Chinese."],
                  ]).map(([question, answer]) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: { "@type": "Answer", text: answer },
              })),
            },
          ],
        }
      : null;

  return (
    <>
      {structuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      ) : null}
      <section className="border-b border-line px-5 pb-12 pt-32 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs tracking-[0.2em] text-rose-deep uppercase">
            <Link
              href={localePath(locale, "/services")}
              className="transition hover:text-ink"
            >
              {t(locale, "servicesEyebrow")}
            </Link>
            <span className="mx-2 text-mute">/</span>
            {pickLocalized(service, locale, "title")}
          </p>
          <h1 className="font-logo mt-4 text-4xl tracking-tight text-ink md:text-5xl">
            {pickLocalized(service, locale, "title")}
          </h1>
          <p className="mt-3 text-lg text-ink-soft">
            {pickLocalized(service, locale, "blurb")}
          </p>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <ServiceBody
            blocks={locale === "ja" ? service.blocksJa : service.blocks}
            locale={locale}
          />

          <aside className="mt-12 rounded-2xl border border-line bg-paper-warm/80 px-5 py-5 text-sm text-ink-soft">
            <p className="font-logo text-xs tracking-[0.16em] text-ink uppercase">
              {t(locale, "officialRefs")}
            </p>
            <ul className="mt-3 space-y-2">
              {references.map((ref) => (
                <li key={ref.href}>
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-deep underline decoration-rose/30 underline-offset-2 transition hover:decoration-rose"
                  >
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-mute">
              {t(locale, "refsDisclaimer")}
            </p>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm/60 px-5 py-14 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-logo text-center text-sm tracking-[0.18em] text-ink uppercase">
            {t(locale, "otherServices")}
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {others.map((item) => (
              <li key={item.slug} className="min-h-[4.75rem]">
                <Link
                  href={localePath(locale, `/services/${item.slug}`)}
                  className="flex h-full items-center justify-center rounded-xl bg-rose/20 px-3 py-4 text-center text-sm leading-snug text-ink ring-1 ring-rose/15 transition hover:bg-rose/30"
                >
                  {pickLocalized(item, locale, "title")}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link
              href={localePath(locale, "/services")}
              className="font-logo text-xs tracking-[0.2em] text-rose-deep uppercase underline underline-offset-4"
            >
              {t(locale, "backToOverview")}
            </Link>
          </p>
        </div>
      </section>

      {service.slug === "specified-skilled-worker" ? (
        <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-line bg-paper/95 p-3 shadow-[0_-4px_20px_rgba(54,39,47,0.12)] backdrop-blur md:hidden">
          <Link
            href={localePath(locale, "/contact")}
            className="flex-1 rounded-full bg-rose-deep px-3 py-3 text-center text-sm font-medium text-white"
          >
            {locale === "ja" ? "相談する" : "Consult"}
          </Link>
          <a
            href="tel:0112061025"
            className="flex-1 rounded-full border border-rose-deep px-3 py-3 text-center text-sm font-medium text-rose-deep"
          >
            {locale === "ja" ? "電話する" : "Call"}
          </a>
        </div>
      ) : null}

      <CtaBand locale={locale} />
    </>
  );
}
