"use client";

import Link from "next/link";
import { useState } from "react";
import type { ServiceBlock } from "@/content/services/types";
import { localePath, type Locale } from "@/lib/i18n";

type Section = {
  title: string;
  blocks: ServiceBlock[];
};

function groupBlocks(blocks: ServiceBlock[]): {
  intro: ServiceBlock[];
  sections: Section[];
} {
  const intro: ServiceBlock[] = [];
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const block of blocks) {
    if (block.type === "h2") {
      current = { title: block.text, blocks: [] };
      sections.push(current);
      continue;
    }
    if (current) {
      current.blocks.push(block);
    } else {
      intro.push(block);
    }
  }

  return { intro, sections };
}

function BlockList({
  blocks,
  locale,
}: {
  blocks: ServiceBlock[];
  locale: Locale;
}) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-ink-soft">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "lead":
            return (
              <p key={i} className="text-lg text-ink">
                {block.text}
              </p>
            );
          case "h3":
            return (
              <h3 key={i} className="font-logo pt-1 text-lg text-ink">
                {block.text}
              </h3>
            );
          case "p":
            return <p key={i}>{block.text}</p>;
          case "note":
            return (
              <p key={i} className="text-sm text-mute">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "link": {
            const href = block.external
              ? block.href
              : localePath(locale, block.href);
            if (block.external) {
              return (
                <p key={i}>
                  <a
                    href={href}
                    className="font-logo text-sm tracking-wide text-rose-deep underline decoration-rose/40 underline-offset-4 transition hover:decoration-rose"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    → {block.label}
                  </a>
                </p>
              );
            }
            return (
              <p key={i}>
                <Link
                  href={href}
                  className="font-logo text-sm tracking-wide text-rose-deep underline decoration-rose/40 underline-offset-4 transition hover:decoration-rose"
                >
                  → {block.label}
                </Link>
              </p>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}

export function ServiceBody({
  blocks,
  locale,
}: {
  blocks: ServiceBlock[];
  locale: Locale;
}) {
  const { intro, sections } = groupBlocks(blocks);
  const [open, setOpen] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(sections.map((_, i) => [i, i === 0])),
  );

  return (
    <div className="space-y-6">
      {intro.length > 0 ? <BlockList blocks={intro} locale={locale} /> : null}

      <div className="space-y-3">
        {sections.map((section, i) => {
          const isOpen = open[i] ?? false;
          return (
            <div
              key={section.title}
              className="overflow-hidden rounded-2xl bg-rose/15 ring-1 ring-rose/20"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpen((prev) => ({ ...prev, [i]: !prev[i] }))
                }
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-rose/10"
              >
                <span className="font-logo text-base tracking-wide text-ink md:text-lg">
                  {section.title}
                </span>
                <span
                  aria-hidden
                  className={`font-logo text-rose-deep transition ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen ? (
                <div className="border-t border-rose/20 px-5 py-5">
                  <BlockList blocks={section.blocks} locale={locale} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
