import { highlights } from "@/content/site";
import { pickLocalized, type Locale } from "@/lib/i18n";

const icons = {
  check: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" d="M12 8v4l2.5 2.5" />
    </>
  ),
  heart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z"
    />
  ),
  chat: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 6.5A2.5 2.5 0 017.5 4h9A2.5 2.5 0 0119 6.5v6a2.5 2.5 0 01-2.5 2.5H11l-4 3v-3H7.5A2.5 2.5 0 015 12.5v-6z"
    />
  ),
  nodes: (
    <>
      <circle cx="7" cy="8" r="2.2" />
      <circle cx="17" cy="8" r="2.2" />
      <circle cx="12" cy="16" r="2.2" />
      <path strokeLinecap="round" d="M9 9.2l2.2 4.6M15 9.2l-2.2 4.6" />
    </>
  ),
} as const;

export function HighlightGrid({ locale }: { locale: Locale }) {
  const main = highlights.slice(0, 3);
  const last = highlights.slice(3);

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {main.map((item) => (
          <HighlightCard key={item.id} item={item} locale={locale} />
        ))}
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[66.666%]">
        {last.map((item) => (
          <HighlightCard key={item.id} item={item} locale={locale} />
        ))}
      </div>
    </div>
  );
}

function HighlightCard({
  item,
  locale,
}: {
  item: (typeof highlights)[number];
  locale: Locale;
}) {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl bg-rose/25 px-6 py-9 text-center ring-1 ring-rose/20">
      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-rose text-white">
        <svg
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden
        >
          {icons[item.icon]}
        </svg>
      </span>
      <h3 className="font-logo mt-5 text-sm tracking-[0.12em] text-ink uppercase">
        {pickLocalized(item, locale, "title")}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {pickLocalized(item, locale, "body")}
      </p>
    </article>
  );
}
