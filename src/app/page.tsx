import Link from "next/link";
import Image from "next/image";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { concerns, points, services, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div
          aria-hidden
          className="animate-drift absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 15% 20%, color-mix(in oklab, var(--color-rose) 22%, transparent), transparent 55%),
              radial-gradient(ellipse 50% 45% at 90% 70%, color-mix(in oklab, var(--color-rose-soft) 35%, transparent), transparent 50%),
              linear-gradient(165deg, #fbf8f9 0%, var(--color-paper) 45%, var(--color-paper-warm) 100%)
            `,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
            backgroundSize: "180px",
          }}
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:justify-center md:px-8 md:pb-24 md:pt-28">
          <div className="max-w-3xl">
            <div className="animate-rise flex items-center gap-4">
              <Image
                src="/logo.png"
                alt=""
                width={96}
                height={70}
                className="h-14 w-auto md:h-16"
                priority
              />
              <p className="text-xs tracking-[0.28em] text-rose uppercase">
                Sapporo · Since 2017
              </p>
            </div>
            <h1 className="animate-rise-delay-1 mt-8 font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
              WAIZUMI
            </h1>
            <p className="animate-rise-delay-1 mt-2 font-display text-xl text-ink-soft md:text-2xl">
              Immigration Consulting Office
            </p>
            <p className="animate-rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              {site.taglineEn}
            </p>
            <div className="animate-rise-delay-2 mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-rose px-6 py-3 text-sm font-medium text-white transition hover:bg-rose-deep"
              >
                Book a consultation
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-ink/15 bg-white/40 px-6 py-3 text-sm text-ink transition hover:border-rose/40 hover:bg-white"
              >
                View services
              </Link>
            </div>
            <p className="mt-8 text-sm text-mute">{site.nameJa}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="When you need help"
          title="Common situations we hear every week"
          body="If any of these feel familiar, you are in the right place. We listen first, then map a clear path."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {concerns.map((item, i) => (
            <article
              key={item.id}
              className="border-t border-line pt-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="font-display text-xl leading-snug text-ink">
                {item.titleEn}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {item.bodyEn}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading
            eyebrow="Client services"
            title="An overview of what we handle"
          />
          <ul className="mt-12 grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {services.map((service) => (
              <li
                key={service.slug}
                className="border-t border-white/10 py-5 transition hover:border-rose-soft/40"
              >
                <Link href="/services" className="group block">
                  <p className="text-xs tracking-[0.16em] text-rose-soft uppercase">
                    {service.blurbEn}
                  </p>
                  <p className="mt-1 font-display text-2xl text-paper transition group-hover:text-rose-soft">
                    {service.titleEn}
                  </p>
                  <p className="mt-1 text-sm text-paper/45">{service.titleJa}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Five points"
          title="Why clients choose this office"
          body="Detail, clear communication, and genuine care—without the cold corporate edge."
        />
        <ol className="mt-14 space-y-10">
          {points.map((point) => (
            <li
              key={point.n}
              className="grid gap-4 border-t border-line pt-8 md:grid-cols-[5rem_1fr] md:gap-10"
            >
              <span className="font-display text-3xl text-rose">{point.n}</span>
              <div>
                <h3 className="font-display text-2xl text-ink">
                  {point.titleEn}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft md:text-base">
                  {point.bodyEn}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}
