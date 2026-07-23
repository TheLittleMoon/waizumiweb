import type { ServiceDetail } from "./types";

export const workingVisa: ServiceDetail = {
  slug: "working-visa",
  titleEn: "Working Visa",
  titleJa: "就労ビザ",
  blurbEn: "Hire foreign talent and manage work-related status of residence.",
  blurbJa: "外国人を雇う",
  references: [
    {
      label: "Ministry of Justice — Certificate of Authorized Employment",
      href: "https://www.moj.go.jp/isa/applications/procedures/nyukan_procedure_16.html",
    },
    {
      label: "Immigration Services Agency of Japan",
      href: "https://www.moj.go.jp/isa/",
    },
  ],
  blocks: [
    {
      type: "lead",
      text: "If you want to work in Japan, you need a working visa.",
    },

    {
      type: "h2",
      text: "Hiring a foreign job-changer",
    },
    {
      type: "p",
      text: "When hiring a foreign national who is changing employers, the following procedures apply:",
    },
    {
      type: "ol",
      items: [
        "Application for a Certificate of Authorized Employment",
        "Notification regarding the organization of activity",
        "Notification regarding the contracting organization",
      ],
    },

    {
      type: "h3",
      text: "① Application for a Certificate of Authorized Employment",
    },
    {
      type: "link",
      label: "Ministry of Justice — Certificate of Authorized Employment (online guide)",
      href: "http://www.moj.go.jp/ONLINE/IMMIGRATION/16-9.html",
      external: true,
    },
    {
      type: "p",
      text: "When you hire a foreign job-changer, applying to Immigration for a Certificate of Authorized Employment allows Immigration to review the duties at the new company. Obtaining that certificate makes the later application to extend the period of stay at expiry much simpler.",
    },
    {
      type: "p",
      text: "If you do not apply for a Certificate of Authorized Employment, the next extension will typically require more supporting evidence — including a certificate of resignation from the previous employer. Review also takes longer, and in the worst case the extension may be refused.",
    },
    {
      type: "p",
      text: "However, if the period of stay is already close to expiry at the time of the job change, it is often better to wait for the extension procedure and prepare solid documents for permission within that extension application.",
    },

    {
      type: "h3",
      text: "② Notification regarding the organization of activity / ③ Notification regarding the contracting organization",
    },
    {
      type: "p",
      text: "When hiring a job-changer, you must notify Immigration Services Agency that the affiliated organization (organization of activity / contracting organization) has changed. This must be done within 14 days from the day the grounds arose.",
    },

    {
      type: "h2",
      text: "What is a working visa?",
    },
    {
      type: "p",
      text: "“Working visa” is the common name for a status of residence that a foreign national must hold in order to work in Japan.",
    },
    {
      type: "p",
      text: "To apply for a working visa at Immigration, you must first determine which status of residence matches the intended activities in Japan. The requirements for each status are detailed and complex. Please consult an immigration administrative scrivener (gyoseishoshi) who handles applications first.",
    },

    {
      type: "h2",
      text: "Statuses of residence related to work",
    },

    {
      type: "h3",
      text: "① Statuses that allow only the work activities defined for that status",
    },
    {
      type: "p",
      text: "Work is limited to the permitted activities. When someone changes jobs, you must check carefully whether the new duties fall within the activities allowed under the status they hold.",
    },
    {
      type: "p",
      text: "Includes (among others): Diplomat; Official; Professor; Artist; Religious Activities; Journalist; Highly Skilled Professional; Business Manager; Legal/Accounting Services; Medical Services; Researcher; Instructor; Engineer/Specialist in Humanities/International Services; Intra-company Transferee; Nursing Care; Entertainer; Skilled Labor; Technical Intern Training; Specified Skilled Worker; and part of Designated Activities.",
    },

    {
      type: "h3",
      text: "② Statuses with no restriction on work activities",
    },
    {
      type: "p",
      text: "These statuses place no restriction on work activities. Unskilled labor is also possible.",
    },
    {
      type: "p",
      text: "Permanent Resident; Spouse or Child of Japanese National; Spouse or Child of Permanent Resident; Long-Term Resident; Special Permanent Resident.",
    },

    {
      type: "h3",
      text: "③ Statuses under which work activities are not permitted",
    },
    {
      type: "p",
      text: "In principle, work activities are not allowed. With permission for activities outside the status of residence, work may be possible.",
    },
    {
      type: "p",
      text: "Cultural Activities; Temporary Visitor; Student; Trainee; Dependent; and part of Designated Activities.",
    },

    {
      type: "h2",
      text: "Inviting a foreign national from abroad to employ them → Certificate of Eligibility (COE)",
    },
    {
      type: "p",
      text: "When inviting a foreign national to Japan for employment, you must apply to Immigration for a Certificate of Eligibility and obtain issuance of that certificate.",
    },
    {
      type: "p",
      text: "Once issued, the certificate is sent to the foreign national. They present it at a Japanese embassy or consulate abroad, obtain a visa, and then enter Japan.",
    },

    {
      type: "h2",
      text: "Continuing to employ a foreign employee after the period of stay expires → Extension of period of stay",
    },
    {
      type: "p",
      text: "Except for Permanent Resident, every status of residence has a period of stay. For the foreign national to continue residing under that status after expiry, they must apply to extend the period of stay (visa extension) before it expires and obtain permission.",
    },
    {
      type: "p",
      text: "Extension applications are accepted from three months before the expiry date. It is important to prepare with enough time so that the deadline is not overlooked.",
    },
    {
      type: "p",
      text: "If you retain our office for foreign employee status management, we manage renewal schedules for your foreign employees on your behalf and prepare applications with adequate lead time.",
    },
    {
      type: "p",
      text: "The fee payable to Immigration for extension permission is 4,000 yen.",
    },
    {
      type: "link",
      label: "Foreign employee status management",
      href: "/services/employee-management",
    },

    {
      type: "h2",
      text: "Hiring an international student after graduation → Change of status of residence",
    },
    {
      type: "p",
      text: "When a foreign national already in Japan changes from their current status to another, a “change of status of residence” application is required.",
    },
    {
      type: "p",
      text: "A common case is an international student graduating from a Japanese university (or similar) and taking employment at a Japanese company without leaving Japan.",
    },
    {
      type: "p",
      text: "A change of status can be applied for at any time when the change is desired. The fee for change of status permission is 4,000 yen.",
    },

    {
      type: "h2",
      text: "When a foreign employee temporarily returns to their home country → Re-entry permission",
    },
    {
      type: "p",
      text: "When an employed foreign national temporarily returns home for business, to see family, or similar reasons, they can re-enter Japan more easily by appearing at Immigration and applying for re-entry permission.",
    },
    {
      type: "p",
      text: "The fee is 3,000 yen for a single-entry permit and 6,000 yen for a multiple-entry permit.",
    },
    {
      type: "p",
      text: "From 9 July 2012, the “deemed re-entry permission” system was introduced. In principle, a foreign national who holds a valid passport and residence card and will re-enter Japan within one year of departure no longer needs to obtain re-entry permission. Deemed re-entry permission is free of charge.",
    },
    {
      type: "ul",
      items: [
        "Plan to re-enter within one year of departure (within two years for Special Permanent Residents) → deemed re-entry permission",
        "Plan to stay abroad for more than one year after departure → re-entry permission",
      ],
    },

    {
      type: "h2",
      text: "Hiring an international student part-time → Permission for activities outside the status of residence",
    },
    {
      type: "p",
      text: "When hiring an international student part-time, you must confirm whether they already hold permission for activities outside their status of residence.",
    },
    {
      type: "p",
      text: "First check whether the student’s residence card states that such permission has been granted. If it has not been granted, they cannot be employed until permission is applied for and obtained. Our office can handle the procedure — please consult us.",
    },
    {
      type: "p",
      text: "Part-time work hours for international students are fixed by regulation (as set out in the Immigration guidelines table). You must not employ them beyond those hours. Violations carry penalties for both the employer and the student. Employers may be charged with the offense of promoting illegal employment, so careful attention is required.",
    },

    {
      type: "h2",
      text: "Skilled Labor visa",
    },
    {
      type: "p",
      text: "Want to hire a foreign jockey for racehorses? A foreign cook? A foreign sommelier?",
    },
    {
      type: "h3",
      text: "What is the Skilled Labor visa?",
    },
    {
      type: "p",
      text: "From the standpoint of contributing to Japan’s economy, society, and industrial development, this status was established to accept foreign nationals with skilled expertise in specialized industrial fields that cannot readily be filled by Japanese nationals.",
    },
    {
      type: "p",
      text: "Examples include: cooks of foreign cuisine; construction technicians; animal trainers; processors of jewels, precious metals, or fur; aircraft pilots; sports instructors; makers or repairers of products unique to a foreign country such as glassware or carpets; wine appraisal (sommeliers); and similar fields.",
    },
    {
      type: "p",
      text: "For farm owners who want to hire foreign jockeys but find preparing application documents burdensome, or who lack time for repeated trips to Immigration — our office also accepts requests from racehorse breeding and training farms in towns such as Abira, Hidaka, Niikappu, Shizunai, and Erimo. Please feel free to consult us.",
    },
    {
      type: "p",
      text: "To obtain a Skilled Labor visa, proof of practical experience is critical. The burden of proof rests on the applicant. We carefully establish that the required years of experience are met through certificates of employment, graduation certificates, and similar documents. If even a shortfall of years exists, an application cannot be filed.",
    },

    {
      type: "h3",
      text: "Landing criteria for Skilled Labor",
    },
    {
      type: "p",
      text: "The foreign national applicant must fall under one of the following. They must also receive remuneration equal to or greater than what a Japanese national would receive for engaging in the same work.",
    },

    {
      type: "h3",
      text: "① Cook",
    },
    {
      type: "p",
      text: "A person engaged in work requiring skill in cooking or manufacturing food products that was devised abroad and is special in Japan, who falls under either of the following:",
    },
    {
      type: "ul",
      items: [
        "(a) At least 10 years of practical experience in the relevant skill (including periods majoring in subjects related to cooking or food manufacturing at a foreign educational institution), and engaged in work requiring that skill.",
        "(b) A person to whom the provisions of Annex 7, Part 1, Section 5, 1(c) of the Agreement between Japan and the Kingdom of Thailand for an Economic Partnership apply.",
      ],
    },

    {
      type: "h3",
      text: "② Construction technician",
    },
    {
      type: "p",
      text: "A person with at least 10 years of practical experience (5 years if working under the direction and supervision of a foreign national who has at least 10 years of practical experience in work requiring that skill) in skill related to architecture or civil engineering unique to a foreign country (including periods majoring in related subjects at a foreign educational institution), engaged in work requiring that skill.",
    },

    {
      type: "h3",
      text: "③ Manufacture / repair of foreign products",
    },
    {
      type: "p",
      text: "A person with at least 10 years of practical experience in skill related to manufacturing or repairing products unique to a foreign country (including periods majoring in related subjects at a foreign educational institution), engaged in work requiring that skill.",
    },

    {
      type: "h3",
      text: "④ Processing of jewels, precious metals, or fur",
    },
    {
      type: "p",
      text: "A person with at least 10 years of practical experience in skill related to processing jewels, precious metals, or fur (including periods majoring in related subjects at a foreign educational institution), engaged in work requiring that skill.",
    },

    {
      type: "h3",
      text: "⑤ Animal training",
    },
    {
      type: "p",
      text: "A person with at least 10 years of practical experience in skill related to animal training (including periods majoring in related subjects at a foreign educational institution), engaged in work requiring that skill.",
    },

    {
      type: "h3",
      text: "⑥ Oil / geothermal drilling and related surveys",
    },
    {
      type: "p",
      text: "A person with at least 10 years of practical experience in skill related to seabed drilling for oil exploration, drilling for geothermal development, or seabed geological surveys for seabed mineral exploration (including periods majoring in related subjects at a foreign educational institution), engaged in work requiring that skill.",
    },

    {
      type: "h3",
      text: "⑦ Aircraft pilot",
    },
    {
      type: "p",
      text: "A person with at least 250 hours of flight experience in skill related to piloting aircraft, who boards and works as a pilot on aircraft used for air transport business as defined in Article 2, paragraph 18 of the Civil Aeronautics Act.",
    },

    {
      type: "h3",
      text: "⑧ Sports instructor",
    },
    {
      type: "p",
      text: "A person with at least 3 years of practical experience in skill related to sports instruction (including periods majoring in related subjects at a foreign educational institution and periods engaging in that sport for remuneration), or a person designated by public notice of the Minister of Justice as equivalent thereto, engaged in work requiring that skill; or a person who has competed as an athlete in the Olympic Games, a world championship, or another international competition, engaged in work requiring skill in instructing that sport.",
    },

    {
      type: "h3",
      text: "⑨ Wine appraisal, etc.",
    },
    {
      type: "p",
      text: "A person with at least 5 years of practical experience in skill related to appraisal, evaluation, and preservation of wine quality and the serving of wine (including periods majoring in related subjects at a foreign educational institution), who falls under any of the following and is engaged in work requiring that skill:",
    },
    {
      type: "ol",
      items: [
        "A person who has achieved excellent results in an internationally held competition related to wine appraisal skill (hereinafter “international sommelier competition”).",
        "A person who has competed in an international sommelier competition in which participation is limited to one person per country.",
        "A person who holds a qualification related to wine appraisal skill certified by a national or local public body (including foreign ones) or a public or private body equivalent thereto, as designated by public notice of the Minister of Justice.",
      ],
    },
    {
      type: "note",
      text: "Supporting documents list for Skilled Labor 1 (cook) — please inquire.",
    },
    {
      type: "note",
      text: "Supporting documents list for Skilled Labor 2 (other than cook) — please inquire.",
    },

    {
      type: "h2",
      text: "Engineer / Specialist in Humanities / International Services visa",
    },
    {
      type: "p",
      text: "With inbound tourism rising sharply in Hokkaido, many employers want to hire foreign interpreting and translation staff for inbound response.",
    },
    {
      type: "h3",
      text: "What is Engineer / Specialist in Humanities / International Services?",
    },
    {
      type: "p",
      text: "Among working visas, this is a common status held by many foreign nationals. It broadly divides into liberal arts and sciences tracks.",
    },
    {
      type: "h3",
      text: "Liberal arts",
    },
    {
      type: "p",
      text: "Specialist in Humanities (fields of the humanities): accounting, finance, generalist roles, consultants, etc.",
    },
    {
      type: "p",
      text: "International Services (work requiring thinking or sensitivity grounded in foreign culture): translation, interpretation, language instruction, public relations, advertising, overseas trade, design, product development, etc.",
    },
    {
      type: "h3",
      text: "Sciences",
    },
    {
      type: "p",
      text: "Engineer (fields of the natural sciences): systems engineer, programmer, aircraft maintenance, design and development of civil engineering / construction machinery, and other specialized technical roles, etc.",
    },
    {
      type: "p",
      text: "To obtain this status, academic background or practical experience related to the technology or knowledge needed for the work is required. The foreign national applicant must satisfy all of the following that apply.",
    },

    {
      type: "h3",
      text: "① When engaging in work requiring technology or knowledge in the natural sciences or humanities",
    },
    {
      type: "p",
      text: "The applicant must fall under any of the following and require that technology or knowledge for the intended work. However, this does not apply when the applicant will engage in work requiring information-processing technology or knowledge and has passed an information-processing technology examination designated by public notice of the Minister of Justice, or holds an information-processing technology qualification designated by public notice of the Minister of Justice.",
    },
    {
      type: "ul",
      items: [
        "(a) Graduated from a university having majored in subjects related to that technology or knowledge, or received education equivalent or higher thereto.",
        "(b) Completed a specialized course at a Japanese professional training college having majored in subjects related to that technology or knowledge (limited to cases meeting requirements designated by public notice of the Minister of Justice regarding completion).",
        "(c) At least 10 years of practical experience (including periods majoring in subjects related to that technology or knowledge at a university, college of technology, high school, latter course of secondary education school, or specialized course of a professional training college).",
      ],
    },

    {
      type: "h3",
      text: "② When engaging in work requiring thinking or sensitivity grounded in foreign culture",
    },
    {
      type: "p",
      text: "The applicant must satisfy all of the following:",
    },
    {
      type: "ul",
      items: [
        "(a) Engaging in translation, interpretation, language instruction, public relations, advertising, overseas trade, design related to apparel or interior decoration, product development, or other similar work.",
        "(b) At least 3 years of practical experience in work related to the intended duties. However, this does not apply when a university graduate engages in translation, interpretation, or language instruction.",
      ],
    },

    {
      type: "h3",
      text: "③ Remuneration",
    },
    {
      type: "p",
      text: "Receive remuneration equal to or greater than what a Japanese national would receive for engaging in the same work.",
    },
    {
      type: "note",
      text: "Supporting documents list for Engineer / Specialist in Humanities / International Services — please inquire.",
    },

    {
      type: "h2",
      text: "Related services",
    },
    {
      type: "link",
      label: "Special Permission to Stay",
      href: "/services/special-permission",
    },
    {
      type: "link",
      label: "Overseas Account Opening Support",
      href: "/services/overseas-accounts",
    },
    {
      type: "link",
      label: "Permanent & Long-term Residence",
      href: "/services/permanent-residence",
    },
    {
      type: "link",
      label: "Business Manager Visa",
      href: "/services/business-manager",
    },
    {
      type: "link",
      label: "International Marriage",
      href: "/services/international-marriage",
    },
    {
      type: "link",
      label: "Naturalization",
      href: "/services/naturalization",
    },
    {
      type: "link",
      label: "Translation & Certification",
      href: "/services/translation",
    },
    {
      type: "link",
      label: "Foreign Employee Status Management",
      href: "/services/employee-management",
    },
  ],
};
