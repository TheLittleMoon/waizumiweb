"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { t } from "@/content/ui";
import { nav, services } from "@/content/site";
import { localePath, pickLocalized, type Locale } from "@/lib/i18n";

export function MainNav({
  locale,
  tone = "dark",
}: {
  locale: Locale;
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const light = tone === "light";

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkClass = light
    ? "text-sm text-white/90 transition-colors hover:text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]"
    : "text-sm text-ink-soft transition-colors hover:text-rose-deep";

  return (
    <>
      <nav className="hidden items-center gap-6 lg:flex">
        {nav.map((item) => {
          const label = pickLocalized(item, locale, "label");
          const href = localePath(locale, item.href);

          if (item.href === "/services") {
            return (
              <div key={item.href} className="relative" ref={menuRef}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="menu"
                  onClick={() => setOpen((value) => !value)}
                  onMouseEnter={() => setOpen(true)}
                  className={`inline-flex items-center gap-1.5 ${linkClass}`}
                >
                  {label}
                  <span
                    aria-hidden
                    className={`text-[0.6rem] transition ${open ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </button>
                {open ? (
                  <div
                    role="menu"
                    onMouseLeave={() => setOpen(false)}
                    className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-2xl bg-white py-2 shadow-[0_16px_40px_-18px_rgba(63,52,56,0.35)] ring-1 ring-line"
                  >
                    <Link
                      href={href}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      className="block border-b border-line px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-rose/10"
                    >
                      {t(locale, "allServices")}
                    </Link>
                    <ul className="max-h-[70vh] overflow-y-auto py-1">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={localePath(locale, `/services/${service.slug}`)}
                            role="menuitem"
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 text-sm text-ink-soft transition hover:bg-rose/10 hover:text-ink"
                          >
                            {pickLocalized(service, locale, "title")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          }

          return (
            <Link key={item.href} href={href} className={linkClass}>
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="lg:hidden">
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label={t(locale, "openMenu")}
          onClick={() => setMobileOpen((value) => !value)}
          className={`rounded-full px-3 py-2 text-xs tracking-[0.16em] uppercase transition ${
            light
              ? "border border-white/40 bg-white/15 text-white"
              : "border border-rose/30 bg-white/70 text-rose-deep"
          }`}
        >
          {t(locale, "menu")}
        </button>
        {mobileOpen ? (
          <div className="absolute inset-x-0 top-full z-50 border-b border-line bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localePath(locale, item.href)}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-ink"
                  >
                    {pickLocalized(item, locale, "label")}
                  </Link>
                  {item.href === "/services" ? (
                    <ul className="mb-2 ml-3 space-y-1 border-l border-line pl-3">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={localePath(
                              locale,
                              `/services/${service.slug}`,
                            )}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-sm text-ink-soft"
                          >
                            {pickLocalized(service, locale, "title")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
