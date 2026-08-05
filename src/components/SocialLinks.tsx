import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M14 8.5h2.5V5.8c-.4-.1-1.5-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8V13H6.5v3h2.5v7h3.3v-7h2.7l.4-3h-3.1V10.5c0-.9.2-1.9 1.7-1.9z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const iconClass =
  "flex size-9 items-center justify-center rounded-full text-ink ring-1 ring-line transition hover:bg-rose/15 hover:text-rose-deep hover:ring-rose/30";

export function SocialLinks({
  className = "",
}: {
  locale?: Locale;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={site.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Facebook"
      >
        <FacebookIcon className="size-4" />
      </a>
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Instagram"
      >
        <InstagramIcon className="size-4" />
      </a>
    </div>
  );
}
