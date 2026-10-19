import type { Locale } from "@/lib/i18n";

/**
 * UI chrome strings (nav extras, CTAs, form labels).
 * Japanese wording follows the tone of the existing Wix site where possible.
 */
const ui = {
  consultation: { ja: "ご相談", en: "Consultation" },
  bookConsultation: { ja: "ご相談予約", en: "Book a consultation" },
  viewServices: { ja: "取扱業務を見る", en: "View services" },
  allServices: { ja: "取扱業務一覧", en: "All services" },
  more: { ja: "詳しく", en: "More" },
  menu: { ja: "メニュー", en: "Menu" },
  openMenu: { ja: "メニューを開く", en: "Open menu" },
  visit: { ja: "アクセス", en: "Visit" },
  contact: { ja: "お問い合わせ", en: "Contact" },
  mobile: { ja: "携帯", en: "Mobile" },
  phone: { ja: "電話", en: "Phone" },
  email: { ja: "メール", en: "Email" },
  fax: { ja: "FAX", en: "FAX" },
  rights: {
    ja: "All rights reserved.",
    en: "All rights reserved.",
  },
  privacy: {
    ja: "個人情報保護規定",
    en: "Privacy Policy",
  },
  follow: {
    ja: "フォロー",
    en: "Follow",
  },
  otherChannels: {
    ja: "Facebook・Instagramでもお気軽にご連絡ください。",
    en: "You’re also welcome to reach us on Facebook or Instagram.",
  },
  officeSubtitle: {
    ja: "行政書士わいずみともみ事務所",
    en: "Immigration Consulting Office",
  },
  languageSupport: {
    ja: "英語・中国語でのご相談も可能です",
    en: "Support in English and Chinese is available",
  },
  heroEyebrow: { ja: "札幌 · 2017年開業", en: "Sapporo · Since 2017" },
  concernsEyebrow: { ja: "こんなお悩みはありませんか", en: "When you need help" },
  concernsTitle: {
    ja: "よくいただくご相談",
    en: "Common situations we hear every week",
  },
  concernsBody: {
    ja: "ひとつでも当てはまる方は、まずはご相談ください。お話を伺い、次の一歩を一緒に考えます。",
    en: "If any of these feel familiar, you are in the right place. We listen first, then map a clear path.",
  },
  ctaSituationTitle: { ja: "まずは状況をお聞かせください", en: "Tell us your situation" },
  ctaSituationBody: {
    ja: "短いお話でも、次に進む道筋が見えてくることがあります。英語・中国語でのご相談も可能です。",
    en: "A short conversation is often enough to see the next clear step. Support in English and Chinese is available.",
  },
  ctaSituationCta: { ja: "ご相談を始める", en: "Start a consultation" },
  servicesEyebrow: { ja: "取扱業務", en: "Client services" },
  servicesTitle: { ja: "取扱業務のご案内", en: "An overview of what we handle" },
  servicesBody: {
    ja: "各業務の詳細は、ボックスからご覧いただけます。",
    en: "Choose a matter to open the full details.",
  },
  servicesIndexTitle: { ja: "取扱業務一覧", en: "Services at a glance" },
  servicesIndexBody: {
    ja: "各ボックスから詳細ページへ進めます。",
    en: "Tap a box for full details on each matter.",
  },
  ctaVisaTitle: { ja: "どのビザが合うかわからない方へ", en: "Not sure which visa fits?" },
  ctaVisaBody: {
    ja: "わかりやすい言葉で、選択肢を整理してお伝えします。英語・中国語でのご相談も可能です。",
    en: "We’ll help you sort the options in plain language. Support in English and Chinese is available.",
  },
  ctaVisaCta: { ja: "事務所へ問い合わせる", en: "Ask the office" },
  highlightsTitle: {
    ja: "当事務所が選ばれる理由",
    en: "Why clients choose this office",
  },
  meetPrincipal: { ja: "代表紹介", en: "Meet the principal" },
  readStory: { ja: "プロフィールを読む", en: "Read her story" },
  getInTouch: { ja: "お問い合わせ", en: "Get in touch" },
  herStory: { ja: "ごあいさつ", en: "Her story" },
  credentials: { ja: "資格・登録", en: "Credentials" },
  office: { ja: "事務所", en: "Office" },
  aboutEyebrow: { ja: "プロフィール", en: "Profile" },
  processEyebrow: { ja: "各種手続きの流れ", en: "Process" },
  processTitle: { ja: "ご依頼から許可までの流れ", en: "How we work together" },
  processBody: {
    ja: "お問い合わせから在留カードのお渡しまで、九つのステップで進めます。",
    en: "Nine clear steps—from first inquiry to delivery of your residence card.",
  },
  feesEyebrow: { ja: "報酬額一覧", en: "Fees" },
  feesTitle: { ja: "料金のご案内", en: "Transparent fee schedule" },
  feesBody: {
    ja: "表示金額はすべて税別です。最終金額はご相談のうえご案内します。",
    en: "All amounts are before tax. Final quotes follow consultation.",
  },
  consulting: { ja: "相談", en: "Consulting" },
  serviceCol: { ja: "業務", en: "Service" },
  feeCol: { ja: "報酬額", en: "Fee" },
  matterCol: { ja: "申請内容", en: "Matter" },
  notes: { ja: "ご注意", en: "Notes" },
  contactEyebrow: { ja: "お問い合わせ", en: "Contact" },
  contactTitle: { ja: "まずはお気軽にご相談ください", en: "Let’s start with a conversation" },
  contactBody: {
    ja: "お電話・メール、または下記フォームからご連絡ください。次の一歩を一緒に考えます。",
    en: "Call, email, or send a short message. We’ll help you understand the next step.",
  },
  formName: { ja: "お名前", en: "Name" },
  formEmail: { ja: "メールアドレス", en: "Email" },
  formMessage: { ja: "ご相談内容", en: "How can we help?" },
  sendMessage: { ja: "送信する", en: "Send message" },
  formNote: {
    ja: "現在はメールアプリが開きます。今後、送信フォームを接続予定です。",
    en: "This opens your email client for now. A hosted form can be wired up next.",
  },
  ctaDefaultTitle: {
    ja: "まずは状況をお聞かせください",
    en: "Ready to talk through your situation?",
  },
  ctaDefaultBody: {
    ja: "札幌で、ビザ・国際業務を丁寧にサポートします。",
    en: "Kind, careful guidance for visa and international matters in Sapporo.",
  },
  ctaDefaultCta: { ja: "お問い合わせ", en: "Contact the office" },
  officialRefs: { ja: "参考リンク（公式情報）", en: "Official references" },
  refsDisclaimer: {
    ja: "入管要件や手数料は変更されることがあります。申請前に当事務所または出入国在留管理庁で最新情報をご確認ください。",
    en: "Immigration requirements and government fees change. Please confirm the latest rules with the office or the Immigration Services Agency before applying.",
  },
  otherServices: { ja: "その他の取扱業務", en: "Other services" },
  backToOverview: { ja: "一覧に戻る", en: "Back to overview" },
  languageJa: { ja: "日本語", en: "日本語" },
  languageEn: { ja: "English", en: "English" },
  languageLabel: { ja: "言語", en: "Language" },
} as const;

export type UiKey = keyof typeof ui;

export function t(locale: Locale, key: UiKey): string {
  return ui[key][locale];
}
