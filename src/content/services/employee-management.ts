import type { ServiceDetail } from "./types";

export const employeeManagement: ServiceDetail = {
  slug: "employee-management",
  titleEn: "Foreign Employee Status Management",
  titleJa: "在留管理代行",
  blurbEn: "Ongoing residence management for foreign staff.",
  blurbJa: "外国人従業員の在留を管理する",
  blocks: [
    {
      type: "lead",
      text: "Foreign employee status management service (retainer contract).",
    },

    {
      type: "h2",
      text: "Are you leaving status management entirely to the employees themselves?",
    },
    {
      type: "p",
      text: "There are many points that require care when employing foreign nationals.",
    },
    {
      type: "p",
      text: "First, when hiring a foreign job-changer, you must check their residence card and confirm that they hold a status of residence (working visa) under which your company may employ them.",
    },
    {
      type: "p",
      text: "During employment, if the period of stay expires, you must also apply to extend the period of stay.",
    },
    {
      type: "p",
      text: "If left entirely to the foreign national, the expiry date can be overlooked — and the stay may already have expired.",
    },
    {
      type: "p",
      text: "In 2012, a new residence management system started. Notifications became obligatory not only for the foreign national but also for the affiliated organization (company) accepting them.",
    },
    {
      type: "p",
      text: "When acceptance of a foreign national begins or ends, notification to Immigration within 14 days became required, and proper employment of foreign nationals is increasingly demanded.",
    },
    {
      type: "p",
      text: "In addition, notifications to the municipality regarding place of residence (or changes thereto), and notifications other than place of residence when surname or nationality changes due to marriage, etc., are also required.",
    },
    {
      type: "p",
      text: "Our office comprehensively manages the residence status of your valued foreign employees and supports applications, notifications, and related procedures.",
    },

    {
      type: "h2",
      text: "What the status management service includes",
    },
    {
      type: "ul",
      items: [
        "Free consultation and advice by phone and email",
        "Notice of period-of-stay renewal (we notify you three months before the expiry date)",
        "Agency for place-of-residence (change) notifications at the municipal office (travel expenses charged separately for remote locations)",
        "Filing of notifications other than place of residence at Immigration",
        "Support for notifications regarding the affiliated organization",
        "Accompanying service for administrative procedures (travel expenses charged separately for remote locations)",
        "Monthly visit (once per month)",
        "Extension of period of stay for foreign employees → half price",
        "Re-entry permission applications for foreign employees → free",
      ],
    },

    {
      type: "h2",
      text: "Retainer fees",
    },
    {
      type: "ul",
      items: [
        "1–5 foreign employees: 15,000 yen + tax / month",
        "6–10 foreign employees: 30,000 yen + tax / month",
        "11–30 foreign employees: 60,000 yen + tax / month",
      ],
    },
  ],
};
