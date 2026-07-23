import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/content/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={site.nameEn}
            width={44}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="hidden text-[0.7rem] tracking-[0.18em] text-ink uppercase sm:block">
            Waizumi
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-rose-deep"
            >
              {item.labelEn}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${site.phone.replaceAll("-", "")}`}
          className="rounded-full border border-rose/30 bg-white/50 px-4 py-2 text-sm text-rose-deep backdrop-blur transition hover:border-rose hover:bg-white"
        >
          {site.phone}
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={48}
              height={36}
              className="h-9 w-auto brightness-110"
            />
            <div>
              <p className="font-display text-lg tracking-wide">WAIZUMI</p>
              <p className="text-xs text-rose-soft">
                Immigration Consulting Office
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
            {site.taglineEn}
          </p>
          <p className="mt-2 text-sm text-paper/50">{site.nameJa}</p>
        </div>
        <div className="text-sm leading-relaxed text-paper/75">
          <p className="mb-3 text-xs tracking-[0.2em] text-rose-soft uppercase">
            Visit
          </p>
          <p>{site.addressEn}</p>
          <p className="mt-1 text-paper/50">{site.addressJa}</p>
          <p className="mt-4">{site.hoursEn}</p>
        </div>
        <div className="text-sm leading-relaxed text-paper/75">
          <p className="mb-3 text-xs tracking-[0.2em] text-rose-soft uppercase">
            Contact
          </p>
          <p>
            TEL{" "}
            <a className="hover:text-white" href={`tel:0112061025`}>
              {site.phone}
            </a>
          </p>
          <p>
            Mobile{" "}
            <a className="hover:text-white" href={`tel:09097536555`}>
              {site.mobile}
            </a>
          </p>
          <p>
            <a className="hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-paper/40 md:px-8">
        © {new Date().getFullYear()} {site.nameEn}. All rights reserved.
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs tracking-[0.22em] text-rose uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{body}</p>
      ) : null}
    </div>
  );
}

export function CtaBand() {
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
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
        <div>
          <p className="font-display text-2xl text-ink md:text-3xl">
            Ready to talk through your situation?
          </p>
          <p className="mt-2 text-ink-soft">
            Kind, careful guidance for visa and international matters in
            Sapporo.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-rose px-6 py-3 text-sm font-medium text-white transition hover:bg-rose-deep"
        >
          Contact the office
        </Link>
      </div>
    </section>
  );
}
