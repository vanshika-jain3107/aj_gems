import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ajgems.com"),
  title: "AJ Gems | Natural Gemstone Dealer in Jaipur, Rajasthan",
  description:
    "AJ Gems is a premier natural gemstone dealer in Jaipur, Rajasthan. Offering certified rubies, sapphires, emeralds, and fine precious gemstones with insured worldwide delivery.",
  keywords: [
    "gemstone dealer in Jaipur",
    "natural gemstones Jaipur",
    "Johri Bazar gemstone dealer",
    "certified ruby Jaipur",
    "blue sapphire dealer Jaipur",
    "emerald dealer India",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "AJ Gems | Natural Gemstone Dealer in Jaipur, Rajasthan",
    description:
      "AJ Gems is a premier natural gemstone dealer in Jaipur, Rajasthan. Offering certified rubies, sapphires, emeralds, and fine precious gemstones with insured worldwide delivery.",
    url: "https://ajgems.com",
    siteName: "AJ Gems",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-black text-ivory font-sans antialiased min-h-screen flex flex-col selection:bg-gold selection:text-black"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
