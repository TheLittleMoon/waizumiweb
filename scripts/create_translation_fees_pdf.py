from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Image, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "translation-fees.pdf"
LOGO = ROOT / "public" / "waizumi-logofinal.png"

pdfmetrics.registerFont(UnicodeCIDFont("HeiseiKakuGo-W5"))
pdfmetrics.registerFont(TTFont("Trebuchet", "/System/Library/Fonts/Supplemental/Trebuchet MS.ttf"))

rose = colors.HexColor("#92647f")
ink = colors.HexColor("#443b43")
paper = colors.HexColor("#faf7f8")
line = colors.HexColor("#dfd2da")

ja_rows = [
    ("戸籍 全部事項証明書・一部事項証明書", "7,000円/枚"),
    ("戸籍謄本・戸籍抄本（縦書き・手書き） 1ページ", "12,000円〜"),
    ("除籍謄本", "7,000円〜"),
    ("住民票", "6,000円〜"),
    ("運転免許証 表のみ / 両面", "4,000円 / 6,000円"),
    ("学生証 表のみ", "4,000円"),
    ("預金通帳 見開きページ", "5,000円"),
    ("預金通帳 取引明細ページ 1ページ", "5,000円"),
    ("残高証明書", "5,000円"),
    ("卒業証明書", "5,000円"),
    ("成績証明書", "9,000円〜"),
    ("婚姻要件具備証明書", "7,000円"),
    ("婚姻/離婚/出生 受理証明書", "5,000円"),
    ("出生届/出生証明書", "5,000円"),
    ("死亡届", "7,000円"),
    ("死亡診断書/検案書", "9,000円〜"),
    ("源泉徴収票 1枚", "6,000円"),
    ("納税証明書", "6,000円〜"),
    ("確定申告書 1枚", "10,000円"),
    ("公共料金の請求書や明細書", "6,000円〜8,000円"),
    ("在職証明書", "5,000円"),
    ("雇用契約書 1枚", "8,000円"),
    ("会社の登記簿・履歴事項証明", "10,000円〜"),
    ("不動産登記簿 1ページ", "8,000円"),
    ("会社定款 1ページ", "8,000円"),
    ("翻訳証明書/行政書士証明書", "3,000円"),
]

en_rows = [
    ("Family register — all/partial matters certificate", "7,000 yen/sheet"),
    ("Family register extract — vertical/handwritten, 1 page", "12,000 yen+"),
    ("Removed family register extract", "7,000 yen+"),
    ("Residence certificate", "6,000 yen+"),
    ("Driver's license — front / both sides", "4,000 / 6,000 yen"),
    ("Student ID — front only", "4,000 yen"),
    ("Bank passbook — facing page", "5,000 yen"),
    ("Bank passbook — transaction detail page, 1 page", "5,000 yen"),
    ("Balance certificate", "5,000 yen"),
    ("Graduation certificate", "5,000 yen"),
    ("Academic transcript", "9,000 yen+"),
    ("Certificate of legal capacity to marry", "7,000 yen"),
    ("Certificate of acceptance of marriage/divorce/birth", "5,000 yen"),
    ("Birth notification/birth certificate", "5,000 yen"),
    ("Death notification", "7,000 yen"),
    ("Death certificate/postmortem certificate", "9,000 yen+"),
    ("Withholding tax slip, 1 sheet", "6,000 yen"),
    ("Tax payment certificate", "6,000 yen+"),
    ("Final tax return, 1 sheet", "10,000 yen"),
    ("Utility bills and statements", "6,000–8,000 yen"),
    ("Certificate of employment", "5,000 yen"),
    ("Employment contract, 1 page", "8,000 yen"),
    ("Company registry/historical matters certificate", "10,000 yen+"),
    ("Real estate registry, 1 page", "8,000 yen"),
    ("Company articles of incorporation, 1 page", "8,000 yen"),
    ("Translation certificate/administrative scrivener certificate", "3,000 yen"),
]


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(line)
    canvas.line(18 * mm, 15 * mm, 192 * mm, 15 * mm)
    canvas.setFillColor(colors.HexColor("#786d75"))
    canvas.setFont("HeiseiKakuGo-W5", 7.5)
    canvas.drawString(18 * mm, 10 * mm, "WAIZUMI Immigration Consulting Office")
    canvas.drawRightString(192 * mm, 10 * mm, f"{doc.page}")
    canvas.restoreState()


def make_table(rows, header, font_name):
    data = [[header, "Fee"]] + [list(row) for row in rows]
    table = Table(data, colWidths=[124 * mm, 50 * mm], repeatRows=1)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), rose),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, -1), font_name),
        ("FONTSIZE", (0, 0), (-1, -1), 7.8),
        ("LEADING", (0, 0), (-1, -1), 10),
        ("BACKGROUND", (0, 1), (-1, -1), paper),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [paper, colors.white]),
        ("GRID", (0, 0), (-1, -1), 0.35, line),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return table


styles = getSampleStyleSheet()
title = ParagraphStyle("title", parent=styles["Title"], fontName="HeiseiKakuGo-W5", fontSize=20, leading=25, textColor=ink, alignment=TA_CENTER, spaceAfter=5)
subtitle = ParagraphStyle("subtitle", parent=styles["Normal"], fontName="HeiseiKakuGo-W5", fontSize=10, leading=14, textColor=rose, alignment=TA_CENTER, spaceAfter=15)
section = ParagraphStyle("section", parent=styles["Heading2"], fontName="HeiseiKakuGo-W5", fontSize=13, leading=17, textColor=ink, spaceBefore=12, spaceAfter=7)
note = ParagraphStyle("note", parent=styles["Normal"], fontName="HeiseiKakuGo-W5", fontSize=9, leading=13, textColor=ink, spaceBefore=9)
en_title = ParagraphStyle("en_title", parent=title, fontName="Trebuchet")
en_subtitle = ParagraphStyle("en_subtitle", parent=subtitle, fontName="Trebuchet")
en_section = ParagraphStyle("en_section", parent=section, fontName="Trebuchet")
en_note = ParagraphStyle("en_note", parent=note, fontName="Trebuchet")

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm, topMargin=17 * mm, bottomMargin=22 * mm, title="Translation & Certification Fees")
story = []
logo = Image(str(LOGO), width=29 * mm, height=19.5 * mm)
logo.hAlign = "CENTER"
story += [logo, Spacer(1, 2 * mm), Paragraph("翻訳・認証 料金表", title), Paragraph("Translation & Certification Fees", subtitle)]
story += [Paragraph("日本語・英語・中国語の翻訳 / Japanese, English & Chinese translation", note)]
story += [make_table(ja_rows, "内容", "HeiseiKakuGo-W5"), Spacer(1, 7 * mm), Paragraph("外国文認証・アポスティーユ取得の代行サービス　15,000円（税別）", section), Paragraph("※全て税別料金です。上記以外の文書の翻訳も承ります。ファミリー割引についてはお問い合わせください。", note)]
story += [PageBreak(), logo, Spacer(1, 2 * mm), Paragraph("Translation & Certification Fees", en_title), Paragraph("English summary", en_subtitle), make_table(en_rows, "Document / service", "Trebuchet"), Spacer(1, 7 * mm), Paragraph("Foreign-document certification and Apostille agency service — 15,000 yen (before tax)", en_section), Paragraph("All fees are before tax. We also accept translation of other documents. Please inquire about family discounts.", en_note)]
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
