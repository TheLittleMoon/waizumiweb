import type { Locale } from "@/lib/i18n";

export type { Locale };

export const site = {
  nameEn: "WAIZUMI Immigration Consulting Office",
  nameJa: "行政書士わいずみともみ事務所",
  taglineEn: "Visa and international matters, handled with care in Sapporo.",
  taglineJa: "北海道札幌市にあるVISA・国際業務中心の事務所です",
  phone: "011-206-1025",
  mobile: "090-9753-6555",
  fax: "011-200-0785",
  email: "chitose@waizumi.com",
  hoursEn: "9:00–18:00 · Closed Sat, Sun & holidays",
  hoursJa: "AM9:00 ～ PM6:00 土日祝休",
  addressEn:
    "GMS Bldg. 3F, 1-25 Minami 10-jo Nishi 14-chome, Chuo-ku, Sapporo 064-0810",
  addressJa: "〒064-0810 札幌市中央区南10条西14丁目1番25号 GMSビル3F",
  registration: {
    japanFederation: "日本行政書士会連合会 登録番号 第17010276号",
    hokkaido: "北海道行政書士会札幌支部所属",
    immigration: "札幌出入国在留管理局届出済申請取次行政書士 札（行）第17-26号",
  },
  social: {
    facebook: "https://www.facebook.com/waizumi.gyousei/",
    instagram: "https://www.instagram.com/waizumiimmigrationconsulting/",
  },
};

export const nav = [
  { href: "/", labelEn: "Home", labelJa: "ホーム" },
  { href: "/services", labelEn: "Services", labelJa: "取扱業務" },
  { href: "/fees", labelEn: "Fees", labelJa: "料金表" },
  { href: "/process", labelEn: "Process", labelJa: "手続きの流れ" },
  { href: "/about", labelEn: "About", labelJa: "プロフィール" },
  { href: "/contact", labelEn: "Contact", labelJa: "お問い合わせ" },
] as const;

export const concerns = [
  {
    id: "hiring",
    titleEn: "I want to hire a foreign national, but the procedures are unclear",
    titleJa: "外国人を採用したいけど手続きがわからない",
    bodyEn:
      "Immigration procedures in Japan are complex. Depending on the nationality, Immigration Bureau filings alone may not be enough. Applications also require knowledge of immigration law and labor regulations. We explain each step carefully and support you through to the end.",
    bodyJa:
      "日本の出入国在留管理局の手続きは分かりにくく複雑です。その上、国によっては外国人を採用するときに出入国在留管理局の手続きだけでは済まない場合もあります。また、出入国在留管理局に提出する書類については、入管法（出入国管理及び難民認定法）のみならず、労働関係諸法令の知識が必要となるものもあり、書き方にもポイントがあります。このような複雑な手続きの流れを丁寧に説明し、最後までサポートいたします。",
  },
  {
    id: "time",
    titleEn: "I don’t have time to prepare or gather documents",
    titleJa: "書類を作成したり集めたりする時間がない",
    bodyEn:
      "The Immigration Bureau website lists only the minimum documents. In practice, substantial supporting evidence about the applicant and the employer is required, often including overseas documents that must be checked. As a registered application agent (申請取次行政書士), we prepare and submit applications on your behalf so you can focus on your work.",
    bodyJa:
      "出入国在留管理局のホームページには必要最低限の書類しか書かれていません。実際には、外国人本人や雇用する会社に関する様々な書類を立証資料として添付する必要があります。外国から書類を送ってもらい、外国語で書かれた書類の内容をチェックする必要もあります。書類の準備、作成には膨大な時間と労力がかかるのです。出入国在留管理局に登録済みの申請取次行政書士に依頼すれば、お客様に代わって申請書類の作成と入国管理局への提出を行ないますので、面倒な書類作成のお悩みから解放され、大切な時間を本業に充てることができます。",
  },
  {
    id: "refusal",
    titleEn: "My self-filed application was refused",
    titleJa: "自分で申請して不許可になってしまった",
    bodyEn:
      "A refusal after a self-filed application can feel like the end of the road. Before you give up, talk with us. Supporting evidence may have been incomplete. We listen carefully and explore whether a re-application is possible.",
    bodyJa:
      "自己申請で不許可になってしまい、帰国しなければならなくなってしまった・・・。あきらめる前にご相談ください。立証資料が不十分だったのかもしれません。お話をじっくり伺い、再申請の可能性を探ります。",
  },
] as const;

/** Glanceable reasons — closer to the original five points, kept short for boxes. */
export const highlights = [
  {
    id: "approval",
    titleEn: "Stronger chance of approval",
    titleJa: "許可の可能性がUP！",
    bodyEn:
      "Immigration pages list only the minimum. Specialist knowledge helps turn an acceptable filing into a stronger application—and a better chance of approval.",
    bodyJa:
      "入管の案内は必要最低限です。専門知識で、受理されるだけでなく許可につながりやすい申請を目指します。",
    icon: "check" as const,
  },
  {
    id: "time",
    titleEn: "Your time stays with your work",
    titleJa: "本業に集中",
    bodyEn:
      "Visa applications mean heavy paperwork and Immigration Bureau visits. As a registered application agent, we prepare and submit for you so your time stays with your business.",
    bodyJa:
      "申請には大量の書類と入管への提出が必要です。申請取次行政書士として、書類作成・提出を代行し、本業の時間を守ります。",
    icon: "clock" as const,
  },
  {
    id: "care",
    titleEn: "Kind, careful support",
    titleJa: "親切・丁寧なサポート",
    bodyEn:
      "We aim for an easy place to talk. We listen to each person’s story, explain in plain language, and support you courteously through to the end.",
    bodyJa:
      "相談しやすい雰囲気を大切に、お一人お一人のお話を伺い、わかりやすく丁寧に最後までサポートします。",
    icon: "heart" as const,
  },
  {
    id: "english",
    titleEn: "English & Chinese available",
    titleJa: "英語・中国語対応OK！",
    bodyEn:
      "Foreign clients less confident in Japanese, and employers dealing with English or Chinese documents, can rely on bilingual support.",
    bodyJa:
      "日本語に不安のある外国人の方や、英語・中国語の書類でお困りの雇用主の方も、英語・中国語でご相談いただけます。",
    icon: "chat" as const,
  },
  {
    id: "network",
    titleEn: "A wider professional network",
    titleJa: "他士業との豊富なネットワーク",
    bodyEn:
      "Some matters need more than an administrative scrivener alone. Through lawyers, judicial scriveners, tax accountants, and labor specialists, we offer one-stop support—including foreign employment questions.",
    bodyJa:
      "行政書士だけでは解決できないことも。弁護士・司法書士・税理士・社労士などと連携し、ワンストップでサポートします。",
    icon: "nodes" as const,
  },
] as const;

/** @deprecated Full five-point copy retained for JP detail later */
export const points = [
  {
    n: "01",
    titleEn: "Stronger chance of approval",
    titleJa: "許可の可能性がUP！",
    bodyEn:
      "Official pages only cover the minimum. Acceptance of documents is not the same as a strong application. Specialist immigration knowledge helps raise the likelihood of approval.",
    bodyJa:
      "出入国在留管理局のホームページには必要最低限のことしか書かれていません。提出書類についても、受理はする、という最低限のレベルです。入管業務の専門的な知識を持った当事務所にお任せいただければ、許可の可能性がUPします。",
  },
  {
    n: "02",
    titleEn: "Your time stays with your work",
    titleJa: "書類作成や入国管理局に行く時間を本業に充てられます！",
    bodyEn:
      "Status-of-residence applications require large volumes of paperwork and Immigration Bureau submissions. A registered application agent can file on your behalf so you are not drained by document prep and office visits.",
    bodyJa:
      "外国人の在留資格の申請には、大量の書類を準備し、出入国在留管理局に提出しなければなりません。申請取次行政書士は、お客様の代わりに申請書類を提出することが認められていますので、膨大な書類の作成や提出に悩まされることなく、大切な時間を本業に充てることができます。",
  },
  {
    n: "03",
    titleEn: "Kind, careful support",
    titleJa: "親切・丁寧なサポート",
    bodyEn:
      "We aim for an atmosphere where it is easy to talk. We listen to each person’s story, explain in plain language, and support you courteously through to the end.",
    bodyJa:
      "お客様が相談しやすい雰囲気を心がけていますので、リラックスしてお話いただけます。お一人お一人のお話をじっくり伺い、わかりやすい言葉で説明し、最後まで親切・丁寧にサポートします。",
  },
  {
    n: "04",
    titleEn: "English & Chinese available",
    titleJa: "英語・中国語対応OK！",
    bodyEn:
      "Foreign clients who are less confident in Japanese, and employers dealing with English or Chinese documents, can rely on bilingual support.",
    bodyJa:
      "日本語に自信のない外国人の方や、英語・中国語で作成された書類の対応にお困りの雇用主の方もご安心ください。英語・中国語対応いたします。",
  },
  {
    n: "05",
    titleEn: "A wider professional network",
    titleJa: "他士業との豊富なネットワーク",
    bodyEn:
      "Some matters need more than an administrative scrivener alone. Through lawyers, judicial scriveners, accountants, tax accountants, and labor & social security attorneys, we offer one-stop support—including foreign employment and labor questions.",
    bodyJa:
      "お客様の困りごとは行政書士だけでは解決できないこともあります。弁護士、司法書士、会計士、税理士、社会保険労務士等、他士業とのネットワークを生かし、ワンストップサービスでお客様をサポートします。外国人の労務、雇用に関することなど、何でもお気軽にご相談ください。",
  },
] as const;

export const services = [
  {
    slug: "working-visa",
    titleEn: "Working Visa",
    titleJa: "就労ビザ",
    blurbEn: "Hire foreign talent and manage work-related status of residence.",
    blurbJa: "外国人を雇用する",
  },
  {
    slug: "business-manager",
    titleEn: "Business Manager Visa",
    titleJa: "経営・管理ビザ",
    blurbEn: "Start or manage a business in Japan.",
    blurbJa: "日本で起業する",
  },
  {
    slug: "permanent-residence",
    titleEn: "Permanent & Long-term Residence",
    titleJa: "永住・定住",
    blurbEn: "Build a lasting life in Japan.",
    blurbJa: "日本にずっと住む",
  },
  {
    slug: "naturalization",
    titleEn: "Naturalization",
    titleJa: "帰化",
    blurbEn: "Acquire Japanese nationality.",
    blurbJa: "日本国籍を取得する",
  },
  {
    slug: "international-marriage",
    titleEn: "International Marriage",
    titleJa: "国際結婚",
    blurbEn: "Marriage procedures and related status matters.",
    blurbJa: "外国人と結婚する",
  },
  {
    slug: "dependent",
    titleEn: "Dependent Visa",
    titleJa: "家族滞在ビザ",
    blurbEn: "Bring family to live with you in Japan.",
    blurbJa: "日本に家族を呼ぶ",
  },
  {
    slug: "special-permission",
    titleEn: "Special Permission to Stay",
    titleJa: "在留特別許可",
    blurbEn: "Support for overstay and related situations.",
    blurbJa: "オーバーステイ",
  },
  {
    slug: "employee-management",
    titleEn: "Foreign Employee Status Management",
    titleJa: "在留管理代行",
    blurbEn: "Ongoing residence management for foreign staff.",
    blurbJa: "外国人従業員の在留を管理する",
  },
  {
    slug: "translation",
    titleEn: "Translation & Certification",
    titleJa: "翻訳・認証",
    blurbEn: "Japanese, English, and Chinese translation and certification support.",
    blurbJa: "日本語・英語・中国語の翻訳",
  },
  {
    slug: "minpaku",
    titleEn: "Minpaku and Accommodation Permits",
    titleJa: "住宅宿泊事業・宿泊施設の許認可",
    blurbEn: "Support for minpaku notifications and lodging-facility permits.",
    blurbJa: "民泊・宿泊施設の届出・許可をサポートする",
  },
  {
    slug: "specified-skilled-worker",
    titleEn: "Specified Skilled Worker No. 1",
    titleJa: "特定技能1号",
    blurbEn: "From hiring consultation through status-of-residence application.",
    blurbJa: "特定技能外国人の雇用を申請までサポートする",
  },
] as const;

export const processSteps = [
  {
    n: 1,
    titleEn: "Inquiry",
    titleJa: "お問い合わせ",
    bodyEn:
      "Tell us about your situation by phone or contact form. Feel free to reach out.",
    bodyJa:
      "お電話やお問い合わせフォームより、ご相談内容をお知らせください。ご相談はお気軽にどうぞ。",
  },
  {
    n: 2,
    titleEn: "Schedule a consultation",
    titleJa: "ご相談の打ち合わせ日時・場所の決定",
    bodyEn:
      "After an initial hearing, we set a time and place for a detailed consultation. Consultations are available in person or by web meeting (such as Zoom), by appointment.",
    bodyJa:
      "ヒアリング後、詳しいご相談が必要な場合は、日時と場所を決定いたします。対面又はWEB会議（ZOOM等）によるご相談を承っております（要予約）。",
  },
  {
    n: 3,
    titleEn: "Meeting",
    titleJa: "面談",
    bodyEn:
      "We meet in person or by web meeting, review materials, discuss details, and talk through the likelihood of approval. Afterward we prepare an estimate.",
    bodyJa:
      "対面又はWEB会議で、資料等を拝見しながら詳しい内容をお聞きします。また、許可の可能性についてお話しします。面談後にお見積書を作成しお知らせいたします。",
  },
  {
    n: 4,
    titleEn: "Contract & retainer",
    titleJa: "契約・着手金のお支払",
    bodyEn:
      "If you are satisfied with the proposal, we enter into a contract. A retainer of half the professional fee is due to begin.",
    bodyJa:
      "提案内容にご満足いただけましたら契約となります。着手金として、報酬額の半額をお支払いいただきます。",
  },
  {
    n: 5,
    titleEn: "Document collection & drafting",
    titleJa: "書類収集や申請書類などの作成",
    bodyEn:
      "After the retainer is confirmed, we guide you on required documents, collect materials, and prepare the application.",
    bodyJa:
      "着手金のご入金確認後、必要書類のご案内をいたします。必要書類の収集を行い、申請書類を作成いたします。",
  },
  {
    n: 6,
    titleEn: "Review, signature & seal",
    titleJa: "書類のご確認と署名、押印",
    bodyEn:
      "You review the prepared documents and provide signatures and seals where required.",
    bodyJa:
      "作成いたしました書類をご確認のうえ、必要箇所に署名や押印をいただきます。",
  },
  {
    n: 7,
    titleEn: "Filing",
    titleJa: "申請",
    bodyEn:
      "We submit the application to Immigration (or the Legal Affairs Bureau for naturalization). You do not need to visit the office yourself. If additional documents are requested, we contact you promptly and prepare them.",
    bodyJa:
      "出入国在留管理局（帰化申請の場合は法務局）に申請書類を提出いたします。お客様は役所に足を運ぶ必要はありません。追加書類などを要求された場合は、すぐお客様にご連絡し、追加書類の作成・提出をいたします。",
  },
  {
    n: 8,
    titleEn: "Approval",
    titleJa: "許可の取得",
    bodyEn: "When the notice of permission arrives at our office, we report it to you immediately.",
    bodyJa: "弊事務所宛に許可の通知が届いたら、すぐにご報告いたします。",
  },
  {
    n: 9,
    titleEn: "Success-fee payment",
    titleJa: "成功報酬のお支払",
    bodyEn: "Please pay the success fee (half of the professional fee).",
    bodyJa: "成功報酬（報酬額の半額）をお支払いください。",
  },
] as const;

export const profile = {
  nameEn: "Tomomi Waizumi",
  nameJa: "和泉 知美",
  roleEn: "Principal, WAIZUMI Immigration Consulting Office",
  roleJa: "行政書士わいずみともみ事務所 代表",
  credentials: [
    "日本行政書士会連合会（登録番号 第１７０１０２７６号）",
    "北海道行政書士会札幌支部所属",
    "札幌出入国在留管理局届出済申請取次行政書士 札（行）第17-26号",
    "英検準１級",
  ],
  bioEn:
    "Originally from Obihiro. At 24, determined to speak English more confidently, she left office work for a short study period in the UK. There she formed friendships with students from around the world, discovered the richness of cross-cultural communication, and also felt how unsettling it can be to live abroad when language alone is not enough. She became an administrative scrivener to support foreign nationals with visa and residence matters—and continues that work today.",
  bioJa:
    "帯広市出身。２４歳のときに、もっと英語を話せるようになりたい！と一念発起し、OLを辞めてイギリスに短期留学。そこで世界各国の学生と親しくなり、異文化コミュニケーションの面白さを知ると同時に、言葉が万能ではない外国で暮らすことの心細さも経験。外国人のビザ手続き、在留のサポートをするために行政書士を目指し開業、現在に至る。",
};

/** Fees from the client's updated fee sheet (all amounts before tax). */
export const fees = {
  notesJa: [
    "表示金額はすべて税別です。",
    "ご来所、WEB会議（ZOOM等）によるご相談を承っております（要予約）。",
    "ご相談後に正式に業務をご依頼いただいた場合は、お支払いいただいた相談料を報酬額から差し引きます。",
    "万一、不許可の場合は無料で1回まで再申請いたします（不許可時点から6か月以内の申請に限る）。",
    "着手金（2分の1）、成功報酬金（2分の1）にてご請求いたします。",
    "帰化許可申請及び永住許可申請は着手金（2分の1）、申請完了時（2分の1）にてご請求いたします。",
    "印紙代及び実費（郵便代等）は手続き終了後にご請求いたします。",
    "ボリュームによるディスカウント可能なため、お気軽にお見積りをご依頼ください。",
    "業務量が多い場合など、上記報酬表とは異なる料金となる場合、必ず事前にご提示をいたします。",
    "英語及び中国語対応の追加料金は頂戴しません。",
  ],
  notesEn: [
    "All amounts are before tax.",
    "Consultations are available in person or by web meeting (such as Zoom) by appointment.",
    "If you retain the office after a consultation, the consultation fee is deducted from the professional fee.",
    "If permission is refused, one re-application is free (provided it is filed within six months of the refusal).",
    "Fees are billed in two halves: an initial retainer and a success fee.",
    "Naturalization and permanent residence are billed half at engagement and half when the application is completed.",
    "Stamp duty and actual expenses (such as postage) are billed after the procedure.",
    "Volume discounts may be available; please request a quote.",
    "If the matter requires a different fee because of its volume, the amount will be presented in advance.",
    "There is no additional charge for English or Chinese support.",
  ],
  consulting: [
    { labelEn: "Consultation (30 minutes)", labelJa: "相談（30分）", fee: "¥5,000 (before tax)" },
    {
      labelEn: "Consultation format",
      labelJa: "相談方法",
      fee: "In person / Web meeting (Zoom, etc.)",
    },
  ],
  sections: [
    {
      titleEn: "Work status, Skilled Labor, and Spouse of Japanese National",
      titleJa: "基本報酬（技人国、技能、日本人の配偶者等）",
      rows: [
        { labelEn: "Certificate of Eligibility (invite from overseas)", labelJa: "在留資格認定証明書交付申請（海外から外国人を招へいする）", fee: "¥150,000" },
        { labelEn: "Change of status", labelJa: "在留資格変更許可申請（現在とは異なるビザに変更する）", fee: "¥150,000" },
        { labelEn: "Extension of period of stay", labelJa: "在留期間更新許可申請（現在のビザを延長する）", fee: "¥50,000 (after job change: ¥130,000)" },
      ],
    },
    {
      titleEn: "Specified Skilled Worker (No. 1 and No. 2)",
      titleJa: "特定技能1号（※2号も同一料金）",
      rows: [
        { labelEn: "Certificate of Eligibility (invite from overseas)", labelJa: "在留資格認定証明書交付申請（海外から外国人を招へいする）", fee: "¥100,000 (construction: ¥200,000)" },
        { labelEn: "Change of status", labelJa: "在留資格変更許可申請（現在とは異なるビザに変更する）", fee: "¥100,000 (construction: ¥200,000)" },
        { labelEn: "Extension of period of stay", labelJa: "在留期間更新許可申請（現在のビザを延長する）", fee: "¥50,000" },
        { labelEn: "First specified-skilled-worker hire, one person", labelJa: "特定技能を初めて1名のみ受け入れる場合", fee: "¥150,000 (construction: ¥250,000)" },
        { labelEn: "Cancellation policy after work begins", labelJa: "キャンセルポリシー（業務着手後）", fee: "Company: full fee / Applicant before filing: half / Applicant after filing: full fee" },
      ],
    },
    {
      titleEn: "Registered Support Organization",
      titleJa: "登録支援機関",
      rows: [
        { labelEn: "New registration application", labelJa: "登録支援機関申請（新規）", fee: "¥150,000 or ¥200,000 (depending on requirements)" },
        { labelEn: "Renewal application", labelJa: "登録支援機関申請（更新）", fee: "¥100,000" },
      ],
    },
    {
      titleEn: "Business Manager",
      titleJa: "経営・管理",
      rows: [
        { labelEn: "Certificate of Eligibility", labelJa: "在留資格認定証明書交付申請", fee: "¥250,000+ (quote based on workload)" },
        { labelEn: "Change of status", labelJa: "在留資格変更許可申請", fee: "¥250,000+ (quote based on workload)" },
        { labelEn: "Extension of period of stay", labelJa: "在留期間更新許可申請", fee: "¥100,000+ (quote based on workload)" },
      ],
    },
    {
      titleEn: "Permanent Residence",
      titleJa: "永住者",
      rows: [
        { labelEn: "Permanent residence visa", labelJa: "永住者ビザ", fee: "¥200,000" },
        { labelEn: "Additional cohabiting family member", labelJa: "同居家族1名追加（同時に永住申請）", fee: "+¥50,000" },
        { labelEn: "Highly skilled professional deemed status", labelJa: "みなし高度専門職", fee: "+¥50,000" },
      ],
    },
    {
      titleEn: "Naturalization",
      titleJa: "帰化",
      rows: [
        { labelEn: "Employee / salaried worker", labelJa: "会社員（給与所得者）", fee: "¥280,000" },
        { labelEn: "Company director / business income", labelJa: "社長・役員（事業所得者）", fee: "¥330,000" },
        { labelEn: "Additional cohabiting family member", labelJa: "同居家族1名追加（同時に帰化申請）", fee: "+¥60,000" },
        { labelEn: "Each additional company managed", labelJa: "経営する法人1社追加", fee: "+¥70,000" },
      ],
    },
    {
      titleEn: "Other services",
      titleJa: "その他",
      rows: [
        { labelEn: "Dependent visa (COE / change)", labelJa: "家族滞在ビザ（認定・変更）", fee: "¥80,000+" },
        { labelEn: "Dependent visa (extension)", labelJa: "家族滞在ビザ（更新）", fee: "¥40,000" },
        { labelEn: "Temporary visitor visa", labelJa: "短期滞在ビザ（親族訪問・短期商用）", fee: "¥70,000+ (quote based on workload)" },
        { labelEn: "Certificate of Authorized Employment (after job change)", labelJa: "就労資格証明書交付申請（転職あり）", fee: "¥80,000+" },
        { labelEn: "Company establishment", labelJa: "会社設立", fee: "¥100,000 (quote based on workload)" },
        { labelEn: "Judicial scrivener registration fee", labelJa: "登記申請を行う司法書士報酬", fee: "Charged separately" },
      ],
    },
    {
      titleEn: "Options",
      titleJa: "オプション料金",
      rows: [
        { labelEn: "Urgent matter (less than 14 days before expiry)", labelJa: "特急案件（在留期限までに14日を切っている場合）", fee: "+¥50,000" },
        { labelEn: "Recovery after refusal (re-application)", labelJa: "自己申請・他社申請で不許可からのリカバリー（再申請）", fee: "+¥50,000" },
        { labelEn: "Previous overstay", labelJa: "オーバーステイ歴あり", fee: "+¥100,000" },
        { labelEn: "Criminal record", labelJa: "犯罪歴あり", fee: "+¥100,000" },
        { labelEn: "Previous refugee application", labelJa: "難民申請歴あり", fee: "+¥50,000" },
        { labelEn: "Statement document", labelJa: "説明文書作成", fee: "+¥50,000" },
        { labelEn: "Business plan", labelJa: "事業計画書作成", fee: "+¥100,000" },
        { labelEn: "Proxy collection of documents", labelJa: "書類の代理収集", fee: "¥3,000 per document" },
      ],
    },
  ],
} as const;
