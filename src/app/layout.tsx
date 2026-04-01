import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | CTC Electrical Contracting",
    default: "CTC Electrical Contracting | Spokane Commercial Electrician",
  },
  description:
    "CTC Electrical Contracting provides commercial, industrial, and residential electrical services in Spokane, WA and across the Pacific Northwest. Licensed master electricians available 24/7.",
  keywords: [
    "commercial electrician Spokane",
    "industrial electrical contractor",
    "residential electrician Spokane",
    "emergency electrician",
    "CTC Electrical",
    "Washington electrician",
    "Idaho electrician",
    "master electrician",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
