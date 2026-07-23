import Link from "next/link";
import { services } from "@/content/site";

type Service = (typeof services)[number];

function ServiceTile({ service }: { service: Service }) {
  return (
    <Link
      id={service.slug}
      href={`/services/${service.slug}`}
      className="group flex scroll-mt-28 flex-col items-center rounded-2xl bg-rose/25 px-4 py-7 text-center ring-1 ring-rose/20 transition duration-300 hover:-translate-y-1 hover:bg-rose/35 hover:ring-rose/40"
    >
      <p className="font-logo text-sm font-semibold tracking-wide text-ink md:text-base">
        {service.titleEn}
      </p>
      <p className="mt-3 line-clamp-2 max-w-[14rem] text-xs leading-relaxed text-ink-soft md:text-sm">
        {service.blurbEn}
      </p>
      <span className="font-logo mt-5 text-[0.65rem] tracking-[0.22em] text-ink uppercase underline decoration-ink/30 decoration-1 underline-offset-6 transition group-hover:text-rose-deep group-hover:decoration-rose">
        More
      </span>
    </Link>
  );
}

export function ServiceGrid({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-5 md:gap-5 ${className}`}
    >
      {services.map((service) => (
        <ServiceTile key={service.slug} service={service} />
      ))}
    </div>
  );
}
