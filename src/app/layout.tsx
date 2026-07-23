import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Footer, Header } from "@/components/SiteChrome";
import { site } from "@/content/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
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
    <html lang="en" className={`${figtree.variable} ${fraunces.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
