import type { Metadata } from "next";
import { CtaBand, SectionHeading } from "@/components/SiteChrome";
import { processSteps } from "@/content/site";

export const metadata: Metadata = {
  title: "Process",
};

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-paper-warm to-paper px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="各種手続きの流れ · Process"
            title="How we work together"
            body="Nine clear steps—from first inquiry to delivery of your residence card."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <ol className="space-y-0">
          {processSteps.map((step) => (
            <li
              key={step.n}
              className="grid gap-4 border-t border-line py-8 md:grid-cols-[6rem_1fr] md:gap-10"
            >
              <span className="font-display text-3xl text-rose">
                {String(step.n).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-2xl text-ink">
                  {step.titleEn}
                </h2>
                <p className="mt-1 text-sm text-mute">{step.titleJa}</p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft md:text-base">
                  {step.bodyEn}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}
