export type ServiceBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "link";
      label: string;
      href: string;
      external?: boolean;
    }
  | { type: "note"; text: string };

export type ServiceReference = {
  label: string;
  href: string;
};

export type ServiceDetail = {
  slug: string;
  titleEn: string;
  titleJa: string;
  blurbEn: string;
  blurbJa: string;
  /** Official / government sources cited on the original pages — not the old Wix URL */
  references?: ServiceReference[];
  blocks: ServiceBlock[];
};
