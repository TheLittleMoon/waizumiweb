import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export { Header } from "@/components/Header";

export function Footer() {
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
              src="/logo.png"
              alt=""
              width={48}
              height={36}
              className="h-9 w-auto"
            />
            <div>
              <p className="font-logo text-lg tracking-wide text-ink">
                WAIZUMI
              </p>
              <p className="font-logo text-xs tracking-wide text-rose">
                Immigration Consulting Office
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
            {site.taglineEn}
          </p>
          <p className="mt-2 text-sm text-mute">{site.nameJa}</p>
        </div>
        <div className="text-sm leading-relaxed text-ink-soft">
          <p className="mb-3 text-xs tracking-[0.2em] text-rose uppercase">
            Visit
          </p>
          <p>{site.addressEn}</p>
          <p className="mt-1 text-mute">{site.addressJa}</p>
          <p className="mt-4">{site.hoursEn}</p>
        </div>
        <div className="text-sm leading-relaxed text-ink-soft">
          <p className="mb-3 text-xs tracking-[0.2em] text-rose uppercase">
            Contact
          </p>
          <p>
            TEL{" "}
            <a className="transition hover:text-rose-deep" href={`tel:0112061025`}>
              {site.phone}
            </a>
          </p>
          <p>
            Mobile{" "}
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
        © {new Date().getFullYear()} {site.nameEn}. All rights reserved.
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
  title = "Ready to talk through your situation?",
  body = "Kind, careful guidance for visa and international matters in Sapporo.",
  cta = "Contact the office",
  href = "/contact",
}: {
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
          <p className="font-logo text-2xl text-ink md:text-3xl">{title}</p>
          <p className="mt-2 text-ink-soft">{body}</p>
        </div>
        <Link
          href={href}
          className="inline-flex rounded-full bg-rose-deep px-6 py-3 text-sm font-medium text-white transition hover:bg-rose"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
