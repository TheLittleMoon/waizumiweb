import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SiteChrome";
import { t } from "@/content/ui";
import { site } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return { title: t(raw, "contact") };
}

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-paper-warm to-paper px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t(locale, "contactEyebrow")}
            title={t(locale, "contactTitle")}
            body={t(locale, "contactBody")}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="space-y-8 text-sm leading-relaxed text-ink-soft">
          <div>
            <p className="text-xs tracking-[0.2em] text-rose uppercase">
              {t(locale, "phone")}
            </p>
            <p className="mt-2 font-display text-2xl text-ink">
              <a href="tel:0112061025">{site.phone}</a>
            </p>
            <p className="mt-1">
              {t(locale, "mobile")}{" "}
              <a className="text-ink" href="tel:09097536555">
                {site.mobile}
              </a>
            </p>
            <p className="mt-1">
              {t(locale, "fax")} {site.fax}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-rose uppercase">
              {t(locale, "email")}
            </p>
            <p className="mt-2">
              <a
                className="text-ink hover:text-rose-deep"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-rose uppercase">
              {t(locale, "visit")}
            </p>
            <p className="mt-2 text-ink">
              {locale === "ja" ? site.addressJa : site.addressEn}
            </p>
            <p className="mt-3">
              {locale === "ja" ? site.hoursJa : site.hoursEn}
            </p>
          </div>
        </div>

        <form
          className="space-y-5"
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
        >
          <label className="block text-sm">
            <span className="text-mute">{t(locale, "formName")}</span>
            <input
              name="name"
              required
              className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none transition focus:border-rose"
            />
          </label>
          <label className="block text-sm">
            <span className="text-mute">{t(locale, "formEmail")}</span>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none transition focus:border-rose"
            />
          </label>
          <label className="block text-sm">
            <span className="text-mute">{t(locale, "formMessage")}</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y border-b border-line bg-transparent py-3 text-ink outline-none transition focus:border-rose"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-rose-deep px-6 py-3 text-sm font-medium text-white transition hover:bg-rose"
          >
            {t(locale, "sendMessage")}
          </button>
          <p className="text-xs text-mute">{t(locale, "formNote")}</p>
        </form>
      </section>
    </>
  );
}
