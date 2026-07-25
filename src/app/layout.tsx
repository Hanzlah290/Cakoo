import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
  Bodoni_Moda,
} from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";

import { Italiana } from "next/font/google";
import StructuredData from "@/components/seo/StructuredData";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
});

import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cakoo.com"), // Change to your real domain later

  title: {
    default: siteConfig.name,
    template: "%s | Cakoo Bakery",
  },

  description: siteConfig.description,

  keywords: [
    "Bakery",
    "Cakes",
    "Custom Cakes",
    "Birthday Cakes",
    "Wedding Cakes",
    "Desserts",
    "Attock Bakery",
    "Pakistan Bakery",
    "Premium Cakes",
  ],

  authors: [
    {
      name: "Cakoo Bakery",
    },
  ],

  creator: "Cakoo Bakery",

  publisher: "Cakoo Bakery",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: siteConfig.links.favicon,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
      className={`
        ${bodoni.variable}
        ${geistSans.variable}
        ${geistMono.variable}
        ${cormorant.variable}
        ${italiana.variable}

      `}
    >
      <body className="antialiased">
        <StructuredData />

    <SmoothScroll>
        {children}
        </SmoothScroll>
      </body>
    </html>
  );
}