import type { Metadata } from "next";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { fees } from "@/content/site";

export const metadata: Metadata = {
  title: "Fees",
};

export default function FeesPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-paper-warm to-paper px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="報酬額一覧 · Fees"
            title="Transparent fee schedule"
            body="All amounts include tax. An English-support surcharge applies where noted. Final quotes follow consultation."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="font-display text-2xl text-ink">Consulting</h2>
        <p className="mt-1 text-sm text-mute">相談</p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs tracking-[0.14em] text-mute uppercase">
                <th className="py-3 pr-4 font-medium">Service</th>
                <th className="py-3 font-medium">Fee</th>
              </tr>
            </thead>
            <tbody>
              {fees.consulting.map((row) => (
                <tr key={row.labelEn} className="border-b border-line/70">
                  <td className="py-4 pr-4">
                    <span className="text-ink">{row.labelEn}</span>
                    <span className="mt-0.5 block text-xs text-mute">
                      {row.labelJa}
                    </span>
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
          <h2 className="font-display text-2xl text-ink">{section.titleEn}</h2>
          <p className="mt-1 text-sm text-mute">{section.titleJa}</p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs tracking-[0.14em] text-mute uppercase">
                  <th className="py-3 pr-4 font-medium">Matter</th>
                  <th className="py-3 pr-4 font-medium">Fee</th>
                  <th className="py-3 font-medium">English support</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr key={row.labelEn} className="border-b border-line/70">
                    <td className="py-4 pr-4">
                      <span className="text-ink">{row.labelEn}</span>
                      <span className="mt-0.5 block text-xs text-mute">
                        {row.labelJa}
                      </span>
                    </td>
                    <td className="py-4 pr-4 whitespace-nowrap text-ink">
                      {row.fee}
                    </td>
                    <td className="py-4 whitespace-nowrap text-ink-soft">
                      {row.english}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <h2 className="font-display text-xl text-ink">Notes</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft">
          {fees.notesEn.map((note) => (
            <li key={note}>· {note}</li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
