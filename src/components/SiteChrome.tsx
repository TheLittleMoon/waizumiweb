import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";
import { t } from "@/content/ui";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";

export { Header } from "@/components/Header";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="relative overflow-hidden border-t border-line text-ink">
      <img
        aria-hidden
        src="/texture/handmadepaper.webp"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-45"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/waizumi-logofinal.png"
              alt=""
              width={48}
              height={32}
              className="h-9 w-auto"
            />
            <div>
              <p className="font-logo text-lg tracking-wide text-ink">
                WAIZUMI
              </p>
              <p className="font-logo text-xs tracking-wide text-rose">
                {t(locale, "officeSubtitle")}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
            {locale === "ja" ? site.taglineJa : site.taglineEn}
          </p>
          <p className="mt-2 text-sm text-mute">
            {locale === "ja" ? site.nameJa : site.nameEn}
          </p>
          <div className="mt-6">
            <p className="mb-3 text-xs tracking-[0.2em] text-rose uppercase">
              {t(locale, "follow")}
            </p>
            <SocialLinks locale={locale} />
          </div>
        </div>
        <div className="text-sm leading-relaxed text-ink-soft">
          <p className="mb-3 text-xs tracking-[0.2em] text-rose uppercase">
            {t(locale, "visit")}
          </p>
          <p>{locale === "ja" ? site.addressJa : site.addressEn}</p>
          <p className="mt-4">
            {locale === "ja" ? site.hoursJa : site.hoursEn}
          </p>
        </div>
        <div className="text-sm leading-relaxed text-ink-soft">
          <p className="mb-3 text-xs tracking-[0.2em] text-rose uppercase">
            {t(locale, "contact")}
          </p>
          <p>
            TEL{" "}
            <a
              className="transition hover:text-rose-deep"
              href={`tel:0112061025`}
            >
              {site.phone}
            </a>
          </p>
          <p>
            {t(locale, "mobile")}{" "}
            <a
              className="transition hover:text-rose-deep"
              href={`tel:09097536555`}
            >
              {site.mobile}
            </a>
          </p>
          <p>
            <a
              className="transition hover:text-rose-deep"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <div className="relative border-t border-line px-5 py-5 text-center text-xs text-mute md:px-8">
        <p>
          © {new Date().getFullYear()}{" "}
          {locale === "ja" ? site.nameJa : site.nameEn}. {t(locale, "rights")}
        </p>
        <p className="mt-2">
          <Link
            href={localePath(locale, "/privacy")}
            className="transition hover:text-rose-deep"
          >
            {t(locale, "privacy")}
          </Link>
        </p>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "default",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: "default" | "onRose";
  align?: "left" | "center";
}) {
  const onRose = tone === "onRose";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs tracking-[0.22em] uppercase ${
            onRose ? "text-white/80" : "text-rose-deep"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl leading-tight md:text-4xl ${
          onRose ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            onRose ? "text-white/85" : "text-ink-soft"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function CtaBand({
  locale,
  title,
  body,
  cta,
  href = "/contact",
}: {
  locale: Locale;
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-paper-warm">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 20%, color-mix(in oklab, var(--color-rose) 18%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8 md:py-16">
        <div>
          <p className="font-logo text-2xl text-ink md:text-3xl">
            {title ?? t(locale, "ctaDefaultTitle")}
          </p>
          <p className="mt-2 text-ink-soft">
            {body ?? t(locale, "ctaDefaultBody")}
          </p>
        </div>
        <Link
          href={localePath(locale, href)}
          className="inline-flex rounded-full bg-rose-deep px-6 py-3 text-sm font-medium text-white transition hover:bg-rose"
        >
          {cta ?? t(locale, "ctaDefaultCta")}
        </Link>
      </div>
    </section>
  );
}
