export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ja";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Prefix path for the active locale. Japanese (default) has no prefix. */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean || "/";
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

/** Detect locale from a browser pathname (`/en/...` → en, else ja). */
export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "ja";
}

/** Strip locale prefix to get the language-neutral path. */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return pathname.slice(3) || "/";
  }
  if (pathname === "/ja" || pathname.startsWith("/ja/")) {
    return pathname.slice(3) || "/";
  }
  return pathname || "/";
}

/** Same page in another locale. */
export function switchLocalePath(pathname: string, next: Locale): string {
  return localePath(next, stripLocalePrefix(pathname));
}

/** Pick En/Ja field from a bilingual content object. */
export function pickLocalized<T extends Record<string, unknown>>(
  item: T,
  locale: Locale,
  base: string,
): string {
  const key = `${base}${locale === "ja" ? "Ja" : "En"}`;
  const value = item[key];
  return typeof value === "string" ? value : "";
}
