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
      text: "The fee payable to Immigration for extension permission is 6,000 yen at the counter, or 5,500 yen for online applications (revised from 1 April 2025).",
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
      text: "A change of status can be applied for at any time when the change is desired. The fee for change of status permission is 6,000 yen at the counter, or 5,500 yen for online applications (revised from 1 April 2025).",
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
      text: "The fee is 4,000 yen for a single-entry permit and 7,000 yen for a multiple-entry permit at the counter (3,500 yen / 6,500 yen for online applications; revised from 1 April 2025).",
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
  blocksJa: [
    {
      type: "lead",
      text: "日本で働くなら就労ビザ",
    },

    {
      type: "h2",
      text: "外国人の転職者を雇用したい",
    },
    {
      type: "p",
      text: "次の手続きが関係します。",
    },
    {
      type: "ol",
      items: [
        "就労資格証明書交付申請",
        "活動機関に関する届出",
        "契約機関に関する届出",
      ],
    },

    {
      type: "h3",
      text: "①就労資格証明書交付申請について",
    },
    {
      type: "link",
      label: "法務省 — 就労資格証明書交付申請",
      href: "http://www.moj.go.jp/ONLINE/IMMIGRATION/16-9.html",
      external: true,
    },
    {
      type: "p",
      text: "外国人の転職者を採用する場合、入国管理局に就労資格証明書交付申請を行って転職先の会社の業務についての審査をしてもらい、就労資格証明書を得ておけば、その後の在留期間満了時の在留期間更新申請の手続きが簡単になります。",
    },
    {
      type: "p",
      text: "就労資格証明書交付申請をしないでいると、次の更新の手続きの際、前職の退職証明書を含めた、より多くの立証資料を要求されることとなります。",
    },
    {
      type: "p",
      text: "また、審査にも時間がかかる上、最悪の場合、更新が不許可となることもありえます。",
    },
    {
      type: "p",
      text: "ただし、転職の時点で在留期間満了日が迫っているような場合は、更新の手続きを待ち、更新の手続きの中で、許可される書類をしっかりと準備していくほうが良いでしょう。",
    },

    {
      type: "h3",
      text: "②活動機関に関する届出／③契約機関に関する届出",
    },
    {
      type: "p",
      text: "転職者を採用する場合、出入国在留管理局に所属機関（活動機関／契約機関）の変更があったことを届け出なければなりません。これは、事由の生じた日から14日以内にすることとされています。",
    },

    {
      type: "h2",
      text: "就労ビザとは",
    },
    {
      type: "p",
      text: "外国人が日本で働くために取らなければならない「在留資格」の通称のことです。",
    },
    {
      type: "p",
      text: "出入国在留管理局に「就労ビザ」の申請をするためには、まず、日本での活動内容がどの在留資格に該当するのかを見極めなければなりません。この在留資格の要件は細かく定められていて複雑です。まず、申請取次行政書士にご相談ください。",
    },

    {
      type: "h2",
      text: "就労可能な在留資格",
    },

    {
      type: "h3",
      text: "①在留資格に定められた就労活動のみ行える在留資格",
    },
    {
      type: "p",
      text: "許可された就労活動に限って行うことができます。転職のときは、外国人が許可を受けている在留資格で行える職務内容かどうか、注意が必要です。",
    },
    {
      type: "p",
      text: "「外交」「公用」「教授」「芸術」「宗教」「報道」「高度専門職」「経営・管理」「法律会計業務」「医療」「研究」「教育」「技術・人文知識・国際業務」「企業内転勤」「介護」「興行」「技能」「技能実習」「特定技能」「特定活動」の一部",
    },

    {
      type: "h3",
      text: "②就労活動に制限がない在留資格",
    },
    {
      type: "p",
      text: "就労活動に制限がない在留資格です。単純労働に就くこともできます。",
    },
    {
      type: "p",
      text: "「永住者」「日本人の配偶者等」「永住者の配偶者等」「定住者」「特別永住者」",
    },

    {
      type: "h3",
      text: "③就労活動を行うことができない在留資格",
    },
    {
      type: "p",
      text: "基本的に就労活動を行うことができません。資格外活動の許可を受けた場合には、就労活動をすることができます。",
    },
    {
      type: "p",
      text: "「文化活動」「短期滞在」「留学」「研修」「家族滞在」「特定活動」の一部",
    },

    {
      type: "h2",
      text: "外国人を日本に呼んで雇用したい → 在留資格認定証明書交付申請",
    },
    {
      type: "p",
      text: "外国人を日本に招へいして雇用する場合は、出入国在留管理局に在留資格認定証明書交付申請をして、在留資格認定証明書の交付を受けなければなりません。",
    },
    {
      type: "p",
      text: "交付を受けたら、この証明書を外国人本人に送り、本人が在外の日本国大使館や総領事館等に証明書を提示し、ビザの発給を受け、来日するという流れになります。",
    },

    {
      type: "h2",
      text: "外国人社員の在留期間満了後も雇用したい → 在留期間更新許可申請",
    },
    {
      type: "p",
      text: "「永住者」を除き、在留資格には在留期間が設けられています。在留期間満了後も外国人が引き続きその在留資格をもって在留するためには、在留期間が切れる前に在留期間の更新（ビザの延長）を申請し、許可を受けなければなりません。",
    },
    {
      type: "p",
      text: "更新手続きは在留期限が切れる日の３ヵ月前から申請が受付されます。うっかり忘れていた、ということのないよう余裕を持って準備することが大切です。",
    },
    {
      type: "p",
      text: "当事務所に「在留管理代行」をご依頼いただければ、企業様に代わって、雇用している外国人の更新のスケジュールを管理し、余裕を持って申請の準備をいたします。",
    },
    {
      type: "p",
      text: "尚、出入国在留管理局に支払う更新許可の手数料は、窓口申請6,000円、オンライン申請5,500円です（2025年4月1日改定）。",
    },
    {
      type: "link",
      label: "在留管理代行",
      href: "/services/employee-management",
    },

    {
      type: "h2",
      text: "外国人留学生を卒業後に雇用したい → 在留資格変更許可申請",
    },
    {
      type: "p",
      text: "在留中の外国人が、現在の在留資格から別の在留資格に変更する場合に必要となるのが「在留資格変更許可申請」です。",
    },
    {
      type: "p",
      text: "留学生が日本の大学等を卒業して、そのまま日本の会社に就職するケースが一般的です。",
    },
    {
      type: "p",
      text: "在留資格の変更は、変更を希望する時点でいつでも申請することができます。在留資格変更許可の手数料は、窓口申請6,000円、オンライン申請5,500円です（2025年4月1日改定）。",
    },

    {
      type: "h2",
      text: "外国人社員が一時本国に帰国する → 再入国許可申請",
    },
    {
      type: "p",
      text: "雇用している外国人が商用または家族に会うため等の理由で一時帰国するときには、本人が出入国在留管理局に出頭して「再入国許可申請」の手続きをすることにより、簡単に再び入国することができます。",
    },
    {
      type: "p",
      text: "手数料は、窓口申請の場合、1回限りの許可が4,000円、数次有効の許可が7,000円です（オンライン申請はそれぞれ3,500円・6,500円。2025年4月1日改定）。",
    },
    {
      type: "p",
      text: "また、平成24年7月9日からは「みなし再入国許可」の制度が導入されたため、有効な旅券と在留カードを持っている外国人が出国後1年以内に再入国する場合には、原則として再入国許可を受ける必要がなくなりました。みなし再入国許可は手数料はかかりません。",
    },
    {
      type: "ul",
      items: [
        "出国後1年以内に再入国する予定（特別永住者は出国後2年以内）⇒ みなし再入国許可",
        "出国後1年を超えて外国に滞在予定 ⇒ 再入国許可",
      ],
    },

    {
      type: "h2",
      text: "留学生をアルバイトで雇用したい → 資格外活動許可申請",
    },
    {
      type: "p",
      text: "留学生をアルバイトとして雇用する場合には、その留学生が「資格外活動許可」を既に得ているか確認する必要があります。",
    },
    {
      type: "p",
      text: "まず、留学生の在留カードに資格外活動の許可を受けている旨の記載があるかを確認します。許可を受けていない場合は、資格外活動許可を申請しなければ雇用することはできません。当事務所で手続きを行うこともできますので、ご相談ください。",
    },
    {
      type: "p",
      text: "尚、留学生のアルバイト時間は決められていますので、この時間を超えて雇用することはできません。違反すると、雇用主と留学生の双方に罰則があります。雇用主には不法就労助長罪が適用されますので十分に注意する必要があります。",
    },

    {
      type: "h2",
      text: "技能ビザ",
    },
    {
      type: "p",
      text: "外国人の競走馬の騎乗員を雇いたい！外国人のコックを雇いたい！外国人のソムリエを雇いたい！",
    },
    {
      type: "h3",
      text: "技能ビザとは",
    },
    {
      type: "p",
      text: "日本の経済社会や産業の発展に寄与するとの観点から、日本人で代替できない産業上の特殊な分野に属する熟練した技能を有する外国人を受け入れるために設けられたものです。",
    },
    {
      type: "p",
      text: "例えば・・・外国料理の調理師、建築技術者、動物の調教、宝石・貴金属・毛皮の加工、航空機操縦士、スポーツ指導者、外国特有のガラス製品、絨毯等の制作又は修理、ワイン鑑定（ソムリエ）等。",
    },
    {
      type: "p",
      text: "外国人の騎乗員を雇いたいけれど、申請書類を用意するのが面倒、入国管理局に何度も行く時間がない・・とお悩みのファームのオーナー様。当事務所は、安平町、日高町、新冠町、静内町、えりも町等の競走馬の生産牧場や育成牧場からのご依頼もお受けしています。お気軽にご相談ください。",
    },
    {
      type: "p",
      text: "技能ビザを取得するためには、実務経験の証明がとても重要です。立証責任は本人にあります。在職証明書や卒業証明書等で実務経験年数が足りていることをしっかりと立証します。年数が少しでも足りていないと申請することはできません。",
    },

    {
      type: "h3",
      text: "技能の上陸許可基準",
    },
    {
      type: "p",
      text: "申請人である外国人が、次のいずれかに該当していなければなりません。また、日本人が従事する場合に受ける報酬と同等額以上の報酬を受ける事が必要です。",
    },

    {
      type: "h3",
      text: "①調理師",
    },
    {
      type: "p",
      text: "料理の調理または食品の製造に係る技能で外国において考案され、日本において特殊なものを要する業務に従事する者で、次のいずれかに該当する者。",
    },
    {
      type: "ul",
      items: [
        "ア 当該技能について10年以上の実務経験（外国の教育機関において、当該料理の調理又は食品の製造に係る科目を専攻した期間を含む）を有する者。当該技能を要する業務に従事する者。",
        "イ 経済上の連携に関する日本国とタイ王国との間の協定付属書7第1部第5節1（ｃ）の規定の適用を受ける者。",
      ],
    },

    {
      type: "h3",
      text: "②建築技術者",
    },
    {
      type: "p",
      text: "外国に特有の建築または土木に係る技能について、10年（当該技能を要する業務に10年以上の実務経験を有する外国人の指揮監督を受けて従事する者の場合にあっては5年）以上の実務経験（外国の教育機関において当該建築または土木に係る科目を専攻した期間を含む。）を有する者で、当該技能を要する業務に従事する者。",
    },

    {
      type: "h3",
      text: "③外国製品の製造・修理",
    },
    {
      type: "p",
      text: "外国に特有の製品の製造または修理に係る技能について、10年以上の実務経験（外国の教育機関において当該製品の製造または修理に係る科目を専攻した期間を含む。）を有する者で、当該技能を要する業務に従事する者。",
    },

    {
      type: "h3",
      text: "④宝石・貴金属・毛皮加工",
    },
    {
      type: "p",
      text: "宝石、貴金属又は毛皮の加工に係る技能について10年以上の実務経験（外国の教育機関において当該加工に係る科目を専攻した期間を含む。）を有する者で、その技能を要する業務に従事する者。",
    },

    {
      type: "h3",
      text: "⑤動物の調教",
    },
    {
      type: "p",
      text: "動物の調教に係る技能について、10年以上の実務経験（外国の教育機関において動物の調教に係る科目を専攻した期間を含む）を有する者で、その技能を要する業務に従事する者。",
    },

    {
      type: "h3",
      text: "⑥石油・地熱等掘削調査",
    },
    {
      type: "p",
      text: "石油探査のための海底堀作、地熱開発のための堀作または海底鉱物探査のための海底地質調査に係る技能について10年以上の実務経験（外国の教育機関において当該技能に係る科目を専攻した期間を含む）を有する者で、その技能を要する業務に従事する者。",
    },

    {
      type: "h3",
      text: "⑦航空機操縦士",
    },
    {
      type: "p",
      text: "航空機の操縦に係る技能について、250時間以上の飛行経験を有する者で、航空法第2条第18項に規定する航空運送事業の用に供する航空機に乗り込んで操縦者としての業務に従事する者。",
    },

    {
      type: "h3",
      text: "⑧スポーツ指導者",
    },
    {
      type: "p",
      text: "スポーツの指導に係る技能について、3年以上の実務経験（外国の教育機関においてそのスポーツの指導に係る科目を専攻した期間及び報酬を受けて当該スポーツに従事していた期間を含む）を有する者で若しくはこれに準ずる者として法務大臣が告示をもって定める者で、当該技能を要する業務に従事する者またはスポーツ選手としてオリンピック大会、世界選手権大会その他の国際的な協議会に出場したことがある者で、当該スポーツの指導に係る技能を要する業務に従事する者。",
    },

    {
      type: "h3",
      text: "⑨ワイン鑑定等",
    },
    {
      type: "p",
      text: "ぶどう酒の品質の鑑定、評価及び保持ならびに葡萄酒の提供に係る技能について5年以上の実務経験（外国の教育機関においてワイン鑑定等に係る科目を専攻した期間を含む）を有する次のいずれかに該当する者で、当該技能を要する業務に従事する者。",
    },
    {
      type: "ol",
      items: [
        "ワイン鑑定等に係る技能に関する国際的な規模で開催される協議会（以下「国際ソムリエコンクール」という。）において優秀な成績を収めたことがある者。",
        "国際ソムリエコンクール（出場者が1国につき1名に制限されているものに限る。）に出場したことがある者。",
        "ワイン鑑定等に係る技能に関して国（外国を含む。）もしくは地方公共団体（外国の地方公共団体を含む。）またはこれらに準ずる公私の機関が認定する資格で、法務大臣が告示をもって定めるものを有する者。",
      ],
    },
    {
      type: "note",
      text: "技能1（調理師）の提出書類はお問い合わせください。",
    },
    {
      type: "note",
      text: "技能2（調理師以外）の提出書類はお問い合わせください。",
    },

    {
      type: "h2",
      text: "技術・人文知識・国際業務ビザ",
    },
    {
      type: "p",
      text: "北海道で急増している外国人観光客。インバウンド対応のための外国人通訳・翻訳スタッフを雇用したい！",
    },
    {
      type: "h3",
      text: "技術・人文知識・国際業務ビザとは",
    },
    {
      type: "p",
      text: "就労ビザの中では取得している外国人が多い、一般的な在留資格です。大きく文系・理系に分かれます。",
    },
    {
      type: "h3",
      text: "文系",
    },
    {
      type: "p",
      text: "●人文知識（人文化学の分野）　経理、金融、総合職、会計、コンサルタントetc..",
    },
    {
      type: "p",
      text: "●国際業務（外国の文化に基盤を有する思考若しくは感受性を必要とする業務）　翻訳、通訳、語学の指導、広報、宣伝、海外取引業務、デザイン、商品開発etc..",
    },
    {
      type: "h3",
      text: "理系",
    },
    {
      type: "p",
      text: "●技術（自然科学の分野）　システムエンジニア、プログラマー、航空機の整備、土木・建設機械等の設計・開発等の技術系の専門職 etc..",
    },
    {
      type: "p",
      text: "この在留資格を取得するには、従事する業務に必要な技術や知識に関する学歴または実務経験が求められます。申請人である外国人が次のいずれにも該当していなければなりません。",
    },

    {
      type: "h3",
      text: "①自然科学又は人文科学の分野に属する技術又は知識を必要とする業務に従事しようとする場合",
    },
    {
      type: "p",
      text: "従事しようとする業務について、次のいずれかに該当し、これに必要な技術又は知識を必要としていること。ただし、申請人が情報処理に関する技術又は知識を要する業務に従事しようとする場合で、法務大臣が告示をもって定める情報処理技術に関する試験に合格し又は法務大臣が告示をもって定める情報処理技術に関する資格を有しているときは、この限りではありません。",
    },
    {
      type: "ul",
      items: [
        "ア その技術若しくは知識に関連する科目を専攻して大学を卒業し、又はこれと同等以上の教育を受けたこと",
        "イ その技術又は知識に関連する科目を専攻して日本の専修学校の専門課程を修了（その修了に関し法務大臣が告示をもって定める要件に該当する場合に限る。）したこと",
        "ウ 10年以上の実務経験（大学、高等専門学校、高等学校、中等教育学校の後期課程又は専修学校の専門課程において当該技術又は知識に係る科目を専攻した期間を含める）",
      ],
    },

    {
      type: "h3",
      text: "②外国の文化に基盤を有する思考又は感受性を必要とする業務に従事しようとする場合",
    },
    {
      type: "p",
      text: "次のいずれにも該当していること。",
    },
    {
      type: "ul",
      items: [
        "ア 翻訳、通訳、語学の指導、広報、宣伝、又は海外取引業務、服飾若しくは室内装飾に係るデザイン、商品開発その他これらに類似する業務に従事すること",
        "イ 従事しようとする業務に関連する業務について3年以上の実務経験を有すること。ただし、大学を卒業した者が翻訳、通訳又は語学の指導に係る業務に従事する場合はこの限りではありません。",
      ],
    },

    {
      type: "h3",
      text: "③報酬",
    },
    {
      type: "p",
      text: "日本人が従事する場合に受ける報酬と同等額以上の報酬を受けること",
    },
    {
      type: "note",
      text: "技術・人文知識・国際業務の提出資料はお問い合わせください。",
    },

    {
      type: "h2",
      text: "関連する取扱業務",
    },
    {
      type: "link",
      label: "在留特別許可",
      href: "/services/special-permission",
    },
    {
      type: "link",
      label: "海外口座開設サポート",
      href: "/services/overseas-accounts",
    },
    {
      type: "link",
      label: "永住・定住",
      href: "/services/permanent-residence",
    },
    {
      type: "link",
      label: "経営・管理ビザ",
      href: "/services/business-manager",
    },
    {
      type: "link",
      label: "国際結婚",
      href: "/services/international-marriage",
    },
    {
      type: "link",
      label: "帰化",
      href: "/services/naturalization",
    },
    {
      type: "link",
      label: "翻訳・認証",
      href: "/services/translation",
    },
    {
      type: "link",
      label: "在留管理代行",
      href: "/services/employee-management",
    },
  ],
};
