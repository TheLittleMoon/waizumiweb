import Link from "next/link";
import Image from "next/image";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { ServiceGrid } from "@/components/ServiceGrid";
import { HighlightGrid } from "@/components/HighlightGrid";
import { concerns, profile, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/SaporoSunset.jpeg"
          alt="Odori Park and central Sapporo at sunset, with mountains on the horizon"
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
              Sapporo · Since 2017
            </p>
            <h1 className="animate-rise-delay-1 mt-5 font-logo text-5xl leading-[1.02] tracking-tight md:text-7xl">
              WAIZUMI
            </h1>
            <p className="animate-rise-delay-1 mt-2 font-logo text-lg text-white/90 md:text-2xl">
              Immigration Consulting Office
            </p>
            <p className="animate-rise-delay-2 mt-6 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
              {site.taglineEn}
            </p>
            <div className="animate-rise-delay-2 mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-white/90"
              >
                Book a consultation
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/45 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="When you need help"
          title="Common situations we hear every week"
          body="If any of these feel familiar, you are in the right place. We listen first, then map a clear path."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {concerns.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-rose/15 px-6 py-7 ring-1 ring-rose/20 transition hover:-translate-y-0.5 hover:bg-rose/25"
            >
              <h3 className="font-logo text-xl leading-snug text-ink">
                {item.titleEn}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {item.bodyEn}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Tell us your situation"
        body="A short conversation is often enough to see the next clear step."
        cta="Start a consultation"
      />

      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading
            eyebrow="Client services"
            title="An overview of what we handle"
            body="Choose a matter to open the full details."
          />
          <ServiceGrid className="mt-12" />
        </div>
      </section>

      <CtaBand
        title="Not sure which visa fits?"
        body="We’ll help you sort the options in plain language — in Japanese or English."
        cta="Ask the office"
      />

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12">
            <SectionHeading
              align="center"
              title="Why clients choose this office"
            />
          </div>
          <HighlightGrid />
        </div>
      </section>

      <section className="border-y border-line bg-paper-warm/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-14 md:px-8 md:py-24">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden md:mx-0">
            <Image
              src="/TomomiWaizumi.avif"
              alt={`${profile.nameEn}`}
              fill
              sizes="(max-width: 768px) 80vw, 320px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-rose-deep uppercase">
              Meet the principal
            </p>
            <h2 className="font-logo mt-3 text-3xl text-ink md:text-4xl">
              {profile.nameEn}
            </h2>
            <p className="mt-2 text-sm text-mute">
              {profile.nameJa} · {profile.roleEn}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              {profile.bioEn}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-rose-deep px-6 py-3 text-sm font-medium text-white transition hover:bg-rose"
              >
                Read her story
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-ink/15 px-6 py-3 text-sm text-ink transition hover:border-rose/40"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
