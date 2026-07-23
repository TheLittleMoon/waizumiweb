import type { Metadata } from "next";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { profile, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-paper-warm to-paper px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="プロフィール · Profile"
            title={profile.nameEn}
            body={profile.roleEn}
          />
          <p className="mt-2 text-sm text-mute">
            {profile.nameJa} · {profile.roleJa}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-2xl text-ink">Her story</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              {profile.bioEn}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-mute">
              {profile.bioJa}
            </p>
          </div>
          <aside className="border-t border-line pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            <h2 className="text-xs tracking-[0.2em] text-rose uppercase">
              Credentials
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
              {profile.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-10">
              <h2 className="text-xs tracking-[0.2em] text-rose uppercase">
                Office
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {site.addressEn}
              </p>
              <p className="mt-2 text-sm text-mute">{site.addressJa}</p>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
