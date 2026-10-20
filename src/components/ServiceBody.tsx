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
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl ring-1 ring-line">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-paper-warm text-ink">
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header} className="border-b border-line px-4 py-3 font-medium">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="align-top even:bg-paper-warm/50">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border-b border-line px-4 py-3 text-ink-soft last:border-b-0">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "flow":
            return (
                <div key={i} className="grid gap-3 md:grid-cols-4">
                {block.nodes.map((node, nodeIndex) => (
                  <div key={node.label} className="relative rounded-xl border border-line bg-paper-warm/70 px-4 py-4 text-center">
                    <p className="font-logo text-sm text-ink">{node.label}</p>
                    <p className="mt-2 text-sm text-ink-soft">{node.detail}</p>
                    {nodeIndex < block.nodes.length - 1 ? (
                      <span aria-hidden className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-xl text-rose-deep md:block">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
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
  const finalOrder = [
    "From consultation to starting work",
    "ご相談から就労開始までの流れ",
    "Why consult our office",
    "当事務所に相談するメリット",
    "Frequently asked questions",
    "よくあるご質問",
  ];
  const finalSections = sections.filter((section) =>
    finalOrder.includes(section.title),
  );
  const firstFinalIndex = sections.findIndex((section) =>
    finalOrder.includes(section.title),
  );
  const orderedSections =
    firstFinalIndex === -1
      ? sections
      : [
          ...sections.slice(0, firstFinalIndex).filter((section) => !finalOrder.includes(section.title)),
          ...finalOrder
            .map((title) => finalSections.find((section) => section.title === title))
            .filter((section): section is Section => Boolean(section)),
          ...sections.slice(firstFinalIndex).filter((section) => !finalOrder.includes(section.title)),
        ];
  const [open, setOpen] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(orderedSections.map((_, i) => [i, i === 0])),
  );

  return (
    <div className="space-y-6">
      {intro.length > 0 ? <BlockList blocks={intro} locale={locale} /> : null}

      <div className="space-y-3">
        {orderedSections.map((section, i) => {
          const isOpen = open[i] ?? false;
          const isFaq = section.title === "よくあるご質問" || section.title === "Frequently asked questions";
          return (
            <div key={section.title}>
              <div className="overflow-hidden rounded-2xl bg-rose/15 ring-1 ring-rose/20">
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
              {isFaq ? (
                <div className="mt-6 text-center">
                  <Link
                    href={localePath(locale, "/contact")}
                    className="inline-flex rounded-full bg-rose-deep px-7 py-3 text-base text-white transition hover:bg-rose"
                  >
                    {locale === "ja" ? "特定技能について相談する" : "Talk to us about specified-skilled-worker hiring"}
                  </Link>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
