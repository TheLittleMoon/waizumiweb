import type { Metadata } from "next";
import { SectionHeading } from "@/components/SiteChrome";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-paper-warm to-paper px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="お問い合わせ · Contact"
            title="Let’s start with a conversation"
            body="Call, email, or send a short message. We’ll help you understand the next step."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="space-y-8 text-sm leading-relaxed text-ink-soft">
          <div>
            <p className="text-xs tracking-[0.2em] text-rose uppercase">Phone</p>
            <p className="mt-2 font-display text-2xl text-ink">
              <a href="tel:0112061025">{site.phone}</a>
            </p>
            <p className="mt-1">
              Mobile{" "}
              <a className="text-ink" href="tel:09097536555">
                {site.mobile}
              </a>
            </p>
            <p className="mt-1">FAX {site.fax}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-rose uppercase">Email</p>
            <p className="mt-2">
              <a className="text-ink hover:text-rose-deep" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-rose uppercase">Visit</p>
            <p className="mt-2 text-ink">{site.addressEn}</p>
            <p className="mt-1 text-mute">{site.addressJa}</p>
            <p className="mt-3">{site.hoursEn}</p>
          </div>
        </div>

        <form
          className="space-y-5"
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
        >
          <label className="block text-sm">
            <span className="text-mute">Name</span>
            <input
              name="name"
              required
              className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none transition focus:border-rose"
            />
          </label>
          <label className="block text-sm">
            <span className="text-mute">Email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none transition focus:border-rose"
            />
          </label>
          <label className="block text-sm">
            <span className="text-mute">How can we help?</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y border-b border-line bg-transparent py-3 text-ink outline-none transition focus:border-rose"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-rose px-6 py-3 text-sm font-medium text-white transition hover:bg-rose-deep"
          >
            Send message
          </button>
          <p className="text-xs text-mute">
            This opens your email client for now. A hosted form can be wired up
            next.
          </p>
        </form>
      </section>
    </>
  );
}
