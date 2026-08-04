import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HtmlLang } from "@/components/HtmlLang";
import { Footer, Header } from "@/components/SiteChrome";
import { site } from "@/content/site";
import {
  defaultLocale,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const name = locale === "ja" ? site.nameJa : site.nameEn;
  const description = locale === "ja" ? site.taglineJa : site.taglineEn;

  return {
    title: {
      default: name,
      template: `%s · ${name}`,
    },
    description,
    openGraph: {
      title: name,
      description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <>
      <HtmlLang locale={locale} />
      <div aria-hidden className="paper-texture-bg" />
      <div className="relative z-10">
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </div>
    </>
  );
}
