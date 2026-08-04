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
    titleEn: "English available",
    titleJa: "英語対応OK！",
    bodyEn:
      "Foreign clients less confident in Japanese, and employers dealing with English documents, can rely on English support.",
    bodyJa:
      "日本語に不安のある外国人の方や、英語の書類でお困りの雇用主の方も、英語でご相談いただけます。",
    icon: "chat" as const,
  },
  {
    id: "network",
    titleEn: "A wider professional network",
    titleJa: "他士業との豊富なネットワーク",
    bodyEn:
      "Some matters need more than a gyoseishoshi alone. Through lawyers, judicial scriveners, tax accountants, and labor specialists, we offer one-stop support—including foreign employment questions.",
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
    titleEn: "English available",
    titleJa: "英語対応OK！",
    bodyEn:
      "Foreign clients who are less confident in Japanese, and employers dealing with English documents, can rely on English support.",
    bodyJa:
      "日本語に自信のない外国人の方や、英語で作成された書類の対応にお困りの雇用主の方もご安心ください。英語対応いたします。",
  },
  {
    n: "05",
    titleEn: "A wider professional network",
    titleJa: "他士業との豊富なネットワーク",
    bodyEn:
      "Some matters need more than a gyoseishoshi alone. Through lawyers, judicial scriveners, accountants, tax accountants, and labor & social security attorneys, we offer one-stop support—including foreign employment and labor questions.",
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
    blurbJa: "外国人を雇う",
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
    blurbEn: "Japanese ↔ English translation and certification support.",
    blurbJa: "日本語・英語の翻訳",
  },
  {
    slug: "overseas-accounts",
    titleEn: "Overseas Account Opening Support",
    titleJa: "海外口座開設サポート",
    blurbEn: "Help opening bank accounts abroad.",
    blurbJa: "海外に銀行口座を持ちたい",
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
      "After an initial hearing, we set a time and place for a detailed consultation. If coming to the office is difficult, we visit you when possible (travel fees may apply for distant locations).",
    bodyJa:
      "ヒアリング後、詳しいご相談が必要な場合は、日時と場所を決定いたします。当事務所にお越しいただくことが難しい場合は、可能な限り、お客様のところに伺います。（遠方の場合は出張料をいただくことがございます。）",
  },
  {
    n: 3,
    titleEn: "Meeting",
    titleJa: "面談",
    bodyEn:
      "We meet in person, review materials, discuss details, and talk through the likelihood of approval. Afterward we prepare an estimate.",
    bodyJa:
      "実際にお客様とお会いして、資料等を拝見しながら詳しい内容をお聞きします。また、許可の可能性についてお話しします。面談後にお見積書を作成しお知らせいたします。",
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
    titleEn: "Balance payment",
    titleJa: "残金のお支払",
    bodyEn: "After filing, the remaining half of the fee is due.",
    bodyJa: "申請書類提出後、残金（報酬額の半額）をお支払いください。",
  },
  {
    n: 9,
    titleEn: "Approval",
    titleJa: "許可の取得",
    bodyEn:
      "Notice is sent to our office. We deliver your residence card by your preferred method.",
    bodyJa:
      "申請後、当事務所宛に通知が届きます。ご希望の方法で在留カードをお渡しします。",
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
    "Originally from Obihiro. At 24, determined to speak English more confidently, she left office work for a short study period in the UK. There she formed friendships with students from around the world, discovered the richness of cross-cultural communication, and also felt how unsettling it can be to live abroad when language alone is not enough. She became a gyoseishoshi to support foreign nationals with visa and residence matters—and continues that work today.",
  bioJa:
    "帯広市出身。２４歳のときに、もっと英語を話せるようになりたい！と一念発起し、OLを辞めてイギリスに短期留学。そこで世界各国の学生と親しくなり、異文化コミュニケーションの面白さを知ると同時に、言葉が万能ではない外国で暮らすことの心細さも経験。外国人のビザ手続き、在留のサポートをするために行政書士を目指し開業、現在に至る。",
};

/** Fees reconstructed from client fee sheet PDF (税込み). English column = 英語対応加算. */
export const fees = {
  notesJa: [
    "上記はすべて税込み料金です。",
    "ご入金（全額もしくは着手金）が確認できた日から業務着手になります。",
    "依頼事項に着手した後に、その取消または撤回があった場合、既に着手した部分の料金は請求いたします。",
    "印紙代・証紙代・証明書代・通信費・交通費等について、特に記載のないものについては実費を請求いたします。",
    "相談により発生した各種調査については、事前に依頼者と協議し、調査内容に応じた額の料金とします。",
    "予定外・例外・依頼業務外の対応については、追加料金を請求することがあります。",
    "事案によって、専門家をご紹介します。",
    "予告なく料金を変更することがありますのでご了承ください。",
  ],
  notesEn: [
    "All fees above include tax.",
    "Work begins once full payment or the retainer is confirmed.",
    "If an engagement is cancelled after work has started, fees for work already performed are charged.",
    "Government stamps, certificates, postage, travel, and similar costs are charged at actual expense unless otherwise noted.",
    "Research arising from consultations is quoted separately after discussion.",
    "Unexpected or out-of-scope work may incur additional fees.",
    "We may introduce other specialists when appropriate.",
    "Fees may change without prior notice.",
  ],
  consulting: [
    { labelEn: "In person", labelJa: "対面", fee: "¥5,500 / 30 min" },
    {
      labelEn: "Phone / Zoom",
      labelJa: "電話・Zoomによる相談",
      fee: "¥5,500 / 30 min",
    },
  ],
  sections: [
    {
      titleEn: "Certificate of Eligibility",
      titleJa: "在留資格認定証明書交付申請",
      rows: [
        {
          labelEn: "Business Manager",
          labelJa: "経営・管理",
          fee: "¥220,000",
          english: "¥44,000",
        },
        {
          labelEn: "Work status",
          labelJa: "就労資格",
          fee: "¥132,000",
          english: "¥44,000",
        },
        {
          labelEn: "Status based on personal relationship",
          labelJa: "身分関係",
          fee: "¥132,000",
          english: "¥44,000",
        },
        {
          labelEn: "Dependent",
          labelJa: "家族滞在",
          fee: "¥110,000",
          english: "¥44,000",
        },
      ],
    },
    {
      titleEn: "Extension of period of stay",
      titleJa: "在留期間更新許可申請",
      rows: [
        {
          labelEn: "Business Manager",
          labelJa: "経営・管理",
          fee: "¥88,000～",
          english: "¥44,000",
        },
        {
          labelEn: "No change of spouse / no job change",
          labelJa: "配偶者の変更や転職がない場合",
          fee: "¥55,000",
          english: "¥44,000",
        },
        {
          labelEn: "With change of spouse",
          labelJa: "配偶者の変更がある場合",
          fee: "¥110,000",
          english: "¥44,000",
        },
        {
          labelEn: "After job change",
          labelJa: "転職した場合",
          fee: "¥110,000",
          english: "¥44,000",
        },
      ],
    },
    {
      titleEn: "Change of status of residence",
      titleJa: "在留資格変更許可申請",
      rows: [
        {
          labelEn: "Business Manager",
          labelJa: "経営・管理",
          fee: "¥220,000",
          english: "¥44,000",
        },
        {
          labelEn: "Work status",
          labelJa: "就労資格",
          fee: "¥132,000",
          english: "¥44,000",
        },
        {
          labelEn: "Status based on personal relationship",
          labelJa: "身分関係",
          fee: "¥132,000",
          english: "¥44,000",
        },
      ],
    },
    {
      titleEn: "Other visa matters",
      titleJa: "その他の在留資格関連",
      rows: [
        {
          labelEn: "Certificate of Authorized Employment",
          labelJa: "就労資格証明書交付申請",
          fee: "¥44,000～",
          english: "¥22,000",
        },
        {
          labelEn: "Permission to engage in other activities",
          labelJa: "資格外活動許可申請",
          fee: "¥13,200～",
          english: "¥11,000",
        },
        {
          labelEn: "Re-entry permit",
          labelJa: "再入国許可申請",
          fee: "¥11,000",
          english: "¥11,000",
        },
        {
          labelEn: "Permanent residence",
          labelJa: "永住許可申請",
          fee: "¥176,000",
          english: "¥44,000",
        },
        {
          labelEn: "Naturalization",
          labelJa: "帰化許可申請",
          fee: "¥220,000～¥253,000",
          english: "¥44,000",
        },
        {
          labelEn: "Special permission to stay",
          labelJa: "在留特別許可申請",
          fee: "¥330,000～",
          english: "¥44,000",
        },
        {
          labelEn: "Short-term / tourist visa",
          labelJa: "短期滞在・観光ビザ申請",
          fee: "¥55,000",
          english: "¥22,000",
        },
        {
          labelEn: "Reason / employment statement drafting & review",
          labelJa: "申請理由書・雇用理由書の作成・チェック",
          fee: "¥22,000～",
          english: "¥22,000",
        },
        {
          labelEn: "International marriage",
          labelJa: "国際結婚",
          fee: "¥33,000",
          english: "¥22,000",
        },
        {
          labelEn: "International marriage procedure research package",
          labelJa: "国際結婚の手続きの調査一式",
          fee: "¥22,000",
          english: "—",
        },
      ],
    },
  ],
} as const;
