import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
  Bodoni_Moda,
} from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";

import { Italiana } from "next/font/google";

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
  title: siteConfig.name,
  description: siteConfig.description,
    icons: {
    icon: siteConfig.links.favicon, 
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
        ${geistSans.variable}
        ${geistMono.variable}
        ${cormorant.variable}
        ${bodoni.variable}
        ${geistSans.variable}
        ${geistMono.variable}
        ${cormorant.variable}
        ${italiana.variable}

      `}
    >
      <body className="antialiased">

    <SmoothScroll>
        {children}
        </SmoothScroll>
      </body>
    </html>
  );
}