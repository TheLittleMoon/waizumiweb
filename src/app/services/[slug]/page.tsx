import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/SiteChrome";
import { ServiceBody } from "@/components/ServiceBody";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  serviceDetails,
} from "@/content/services";
import type { ServiceReference } from "@/content/services/types";

type Props = {
  params: Promise<{ slug: string }>;
};

const DEFAULT_REFERENCES: ServiceReference[] = [
  {
    label: "Immigration Services Agency of Japan",
    href: "https://www.moj.go.jp/isa/",
  },
  {
    label: "Ministry of Foreign Affairs of Japan",
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
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.titleEn,
    description: service.blurbEn,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = serviceDetails.filter((s) => s.slug !== service.slug);
  const references = collectReferences(service);

  return (
    <>
      <section className="border-b border-line px-5 pb-12 pt-32 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs tracking-[0.2em] text-rose-deep uppercase">
            <Link href="/services" className="transition hover:text-ink">
              Client services
            </Link>
            <span className="mx-2 text-mute">/</span>
            {service.titleJa}
          </p>
          <h1 className="font-logo mt-4 text-4xl tracking-tight text-ink md:text-5xl">
            {service.titleEn}
          </h1>
          <p className="mt-3 text-lg text-ink-soft">{service.blurbEn}</p>
          <p className="mt-2 text-sm text-mute">{service.blurbJa}</p>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <ServiceBody blocks={service.blocks} />

          <aside className="mt-12 rounded-2xl border border-line bg-paper-warm/80 px-5 py-5 text-sm text-ink-soft">
            <p className="font-logo text-xs tracking-[0.16em] text-ink uppercase">
              Official references
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
              Immigration requirements and government fees change. Please
              confirm the latest rules with the office or the Immigration
              Services Agency before applying.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm/60 px-5 py-14 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-logo text-center text-sm tracking-[0.18em] text-ink uppercase">
            Other services
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {others.map((item) => (
              <li key={item.slug} className="min-h-[4.75rem]">
                <Link
                  href={`/services/${item.slug}`}
                  className="flex h-full items-center justify-center rounded-xl bg-rose/20 px-3 py-4 text-center text-sm leading-snug text-ink ring-1 ring-rose/15 transition hover:bg-rose/30"
                >
                  {item.titleEn}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link
              href="/services"
              className="font-logo text-xs tracking-[0.2em] text-rose-deep uppercase underline underline-offset-4"
            >
              Back to overview
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
