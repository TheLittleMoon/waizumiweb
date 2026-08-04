"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MainNav } from "@/components/MainNav";
import { t } from "@/content/ui";
import { site } from "@/content/site";
import {
  localePath,
  stripLocalePrefix,
  type Locale,
} from "@/lib/i18n";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const path = stripLocalePrefix(pathname);
  const isHome = path === "/";
  const overHero = isHome && !scrolled;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        overHero
          ? "bg-transparent"
          : "border-b border-line/80 bg-white/90 shadow-[0_8px_30px_-20px_rgba(63,52,56,0.35)] backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href={localePath(locale, "/")}
          className="group flex items-center gap-3"
        >
          <Image
            src={overHero ? "/waizumi-logo_white.png" : "/waizumi-logofinal.png"}
            alt={locale === "ja" ? site.nameJa : site.nameEn}
            width={48}
            height={32}
            className="h-8 w-auto sm:h-9"
            priority
          />
          <span
            className={`font-logo hidden text-[0.8rem] tracking-[0.22em] uppercase sm:block ${
              overHero
                ? "text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]"
                : "text-ink"
            }`}
          >
            WAIZUMI
          </span>
        </Link>

        <MainNav locale={locale} tone={overHero ? "light" : "dark"} />

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher
            locale={locale}
            tone={overHero ? "light" : "dark"}
          />
          <a
            href={`tel:${site.phone.replaceAll("-", "")}`}
            className={`hidden rounded-full px-3 py-2 text-sm transition lg:inline-flex ${
              overHero
                ? "text-white/90 hover:text-white"
                : "text-rose-deep hover:text-ink"
            }`}
          >
            {site.phone}
          </a>
          <Link
            href={localePath(locale, "/contact")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              overHero
                ? "bg-white text-ink hover:bg-white/90"
                : "bg-rose-deep text-white hover:bg-rose"
            }`}
          >
            {t(locale, "consultation")}
          </Link>
        </div>
      </div>
    </header>
  );
}
