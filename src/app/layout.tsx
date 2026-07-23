import type { Metadata } from "next";
import { Jost, Lora } from "next/font/google";
import { Footer, Header } from "@/components/SiteChrome";
import { site } from "@/content/site";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

/** Geometric sans close to Futura when system Futura is unavailable */
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.nameEn,
    template: `%s · ${site.nameEn}`,
  },
  description: site.taglineEn,
  openGraph: {
    title: site.nameEn,
    description: site.taglineEn,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${jost.variable}`}>
      <body className="relative min-h-screen bg-paper font-sans antialiased">
        <div aria-hidden className="paper-texture-bg" />
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
