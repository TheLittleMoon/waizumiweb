import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { t } from "@/content/ui";
import { fees } from "@/content/site";
import { isLocale, pickLocalized, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return { title: t(raw, "feesEyebrow") };
}

export default async function FeesPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const notes = locale === "ja" ? fees.notesJa : fees.notesEn;

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-paper-warm to-paper px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t(locale, "feesEyebrow")}
            title={t(locale, "feesTitle")}
            body={t(locale, "feesBody")}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="font-display text-2xl text-ink">
          {t(locale, "consulting")}
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs tracking-[0.14em] text-mute uppercase">
                <th className="py-3 pr-4 font-medium">
                  {t(locale, "serviceCol")}
                </th>
                <th className="py-3 font-medium">{t(locale, "feeCol")}</th>
              </tr>
            </thead>
            <tbody>
              {fees.consulting.map((row) => (
                <tr key={row.labelEn} className="border-b border-line/70">
                  <td className="py-4 pr-4 text-ink">
                    {pickLocalized(row, locale, "label")}
                  </td>
                  <td className="py-4 whitespace-nowrap text-ink">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {fees.sections.map((section) => (
        <section
          key={section.titleEn}
          className="mx-auto max-w-6xl border-t border-line px-5 py-14 md:px-8"
        >
          <h2 className="font-display text-2xl text-ink">
            {pickLocalized(section, locale, "title")}
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs tracking-[0.14em] text-mute uppercase">
                  <th className="py-3 pr-4 font-medium">
                    {t(locale, "matterCol")}
                  </th>
                  <th className="py-3 pr-4 font-medium">
                    {t(locale, "feeCol")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr key={row.labelEn} className="border-b border-line/70">
                    <td className="py-4 pr-4 text-ink">
                      {pickLocalized(row, locale, "label")}
                    </td>
                    <td className="whitespace-pre-line py-4 pr-4 text-ink">
                      {locale === "ja" && "feeJa" in row && row.feeJa
                        ? row.feeJa
                        : row.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {"downloadHref" in section && section.downloadHref ? (
            <p className="mt-5">
              <a
                href={section.downloadHref}
                download
                className="font-logo text-sm tracking-wide text-rose-deep underline decoration-rose/40 underline-offset-4 transition hover:decoration-rose"
              >
                → {locale === "ja" ? section.downloadLabelJa : section.downloadLabelEn}
              </a>
            </p>
          ) : null}
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <h2 className="font-display text-xl text-ink">{t(locale, "notes")}</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft">
          {notes.map((note) => (
            <li key={note}>· {note}</li>
          ))}
        </ul>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
