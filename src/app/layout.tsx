import { Jost, Lora } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${lora.variable} ${jost.variable}`}
    >
      <body className="relative min-h-screen bg-paper font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
