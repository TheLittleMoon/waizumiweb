import Image from "next/image";
import Link from "next/link";
import { t } from "@/content/ui";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";

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

function WeChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M9.3 4.2c-3.9 0-7 2.6-7 5.9 0 1.9 1.1 3.6 2.8 4.7l-.7 2.1 2.4-1.2c.7.2 1.4.3 2.1.3.2 0 .4 0 .6-.1-.2-.5-.3-1.1-.3-1.7 0-3.2 3.1-5.8 6.8-5.8.2 0 .5 0 .7.1C15.8 5.7 12.8 4.2 9.3 4.2zm-2.3 3.2c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm4.5 0c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
      <path d="M20.8 14.3c0-2.7-2.7-4.9-5.9-4.9s-5.9 2.2-5.9 4.9 2.7 4.9 5.9 4.9c.5 0 1.1-.1 1.6-.2l2 .9-.5-1.7c1.7-.9 2.8-2.4 2.8-3.9zm-7.8-.9c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm4 0c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" />
    </svg>
  );
}

const iconClass =
  "flex size-9 items-center justify-center rounded-full text-ink ring-1 ring-line transition hover:bg-rose/15 hover:text-rose-deep hover:ring-rose/30";

export function SocialLinks({
  locale,
  className = "",
}: {
  locale: Locale;
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
      <Link
        href={`${localePath(locale, "/contact")}#wechat`}
        className={iconClass}
        aria-label="WeChat"
        title={t(locale, "wechat")}
      >
        <WeChatIcon className="size-4" />
      </Link>
    </div>
  );
}

export function WeChatCard({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  return (
    <div id="wechat" className="scroll-mt-28">
      <p className="text-xs tracking-[0.2em] text-rose uppercase">
        {t(locale, "wechat")}
      </p>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
        {t(locale, "wechatBody")}
      </p>
      {!compact ? (
        <p className="mt-1 max-w-sm text-sm leading-relaxed text-mute">
          {t(locale, "wechatBodyExtra")}
        </p>
      ) : null}
      <div className="mt-4 inline-block overflow-hidden rounded-xl bg-white p-2.5 ring-1 ring-line">
        <Image
          src={site.social.wechatQr}
          alt={t(locale, "wechatQrAlt")}
          width={172}
          height={220}
          className={compact ? "h-auto w-28" : "h-auto w-36"}
        />
      </div>
      {compact ? (
        <p className="mt-3 text-xs leading-relaxed text-mute">
          {t(locale, "wechatBodyExtra")}
        </p>
      ) : null}
    </div>
  );
}
