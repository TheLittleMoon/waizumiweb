"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/content/ui";
import {
  localeFromPathname,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  tone = "dark",
}: {
  locale: Locale;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname() || "/";
  const active = localeFromPathname(pathname) || locale;
  const light = tone === "light";

  const base =
    light
      ? "text-white/70 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]"
      : "text-mute hover:text-ink";
  const activeClass =
    light
      ? "text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]"
      : "text-ink";

  return (
    <div
      className="flex items-center gap-1.5 text-xs tracking-[0.14em]"
      role="navigation"
      aria-label={t(active, "languageLabel")}
    >
      <Link
        href={switchLocalePath(pathname, "ja")}
        hrefLang="ja"
        className={`transition ${active === "ja" ? activeClass : base}`}
        aria-current={active === "ja" ? "page" : undefined}
      >
        JA
      </Link>
      <span aria-hidden className={light ? "text-white/40" : "text-line"}>
        /
      </span>
      <Link
        href={switchLocalePath(pathname, "en")}
        hrefLang="en"
        className={`transition ${active === "en" ? activeClass : base}`}
        aria-current={active === "en" ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
