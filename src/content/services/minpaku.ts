import type { ServiceBlock, ServiceDetail } from "./types";

const blocksJa = [
  { type: "lead", text: "住宅宿泊事業（民泊）の届出、簡易宿所・ホテル営業許可の取得をサポート" },
  { type: "h2", text: "こんなお悩みはありませんか" },
  { type: "p", text: "民泊・簡易宿所・ホテルのどれに該当するかわからない、書類収集や消防署・保健所とのやり取りをする時間がない、日本語での行政対応に不安がある方はご相談ください。" },
  { type: "h2", text: "民泊・宿泊施設でサポートできること" },
  { type: "ol", items: ["事前調査（用途地域、建築基準法、消防法令、自治体条例、管理規約等）", "申請書類作成及び手続き", "消防法令適合の確認・通知書取得", "住宅宿泊事業者（民泊事業者）届出", "住宅宿泊管理業者（民泊管理業者）登録", "簡易宿所・ホテル営業許可"] },
  { type: "h2", text: "対応エリア" },
  { type: "p", text: "北海道内で幅広く対応しております。札幌市、ニセコエリア、小樽市、旭川市、富良野市・美瑛町、函館市、登別市・洞爺湖町、千歳市（新千歳空港周辺）など。その他の北海道内の地域もご相談ください。" },
  { type: "h2", text: "当事務所が選ばれる理由" },
  { type: "ul", items: ["経験に基づくサポート", "日本語・英語・中国語でのご相談", "書類収集・作成や行政窓口とのやり取りを代行"] },
  { type: "h2", text: "対応の流れ（一例）" },
  { type: "ol", items: ["ご相談・ヒアリング", "事前調査", "必要な届出・登録・許可のご案内", "必要書類の収集・作成", "消防法令適合の確認", "関係機関への申請", "完了のご報告"] },
  { type: "h2", text: "まずは状況をお聞かせください" },
] satisfies ServiceBlock[];

export const minpaku: ServiceDetail = {
  slug: "minpaku",
  titleEn: "Minpaku and Accommodation Permits",
  titleJa: "住宅宿泊事業（民泊）・宿泊施設の許認可",
  blurbEn: "Support for minpaku notifications and lodging-facility permits.",
  blurbJa: "住宅宿泊事業（民泊）の届出、簡易宿所・ホテル営業許可の取得をサポート",
  blocks: [
    { type: "lead", text: "Support from choosing the right lodging scheme through notification, registration, or permit." },
    { type: "h2", text: "What we can help with" },
    { type: "p", text: "We investigate the property and support applications for minpaku, simple lodging, hotels, and ryokan. We can coordinate with the health centre, municipality, fire department, and Ministry of Land, Infrastructure, Transport and Tourism." },
    { type: "ol", items: ["Preliminary investigation", "Application documents and procedures", "Fire-law compliance confirmation", "Minpaku notification", "Registration as a lodging-management operator", "Simple-lodging or hotel permit"] },
    { type: "h2", text: "Service area" },
    { type: "p", text: "We support clients throughout Hokkaido, including Sapporo, Niseko, Otaru, Asahikawa, Furano, Biei, Hakodate, Noboribetsu, Toyako, and Chitose. Please contact us about other areas in Hokkaido." },
    { type: "h2", text: "Why clients choose us" },
    { type: "ul", items: ["Experience-based support", "Consultations in Japanese, English, and Chinese", "We handle document collection and administrative coordination"] },
    { type: "h2", text: "Typical process" },
    { type: "ol", items: ["Consultation and hearing", "Property and regulatory investigation", "Advice on the required notification, registration, or permit", "Document preparation", "Fire-law consultation", "Applications to the relevant authorities", "Completion report"] },
  ],
  blocksJa,
};
