import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { buildSiteWideGraph, serializeJsonLd } from "@/lib/schema/organization";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Agency Ad Accounts for Meta, Google & TikTok | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Advertising infrastructure for Meta, Google, TikTok and other platforms. Agency ad accounts, account continuity support, tracking protection, and structured onboarding from Rahim Marketing.",
  keywords: [
    "agency ad accounts",
    "Meta agency accounts",
    "Facebook agency accounts",
    "Google Ads agency accounts",
    "TikTok agency accounts",
    "advertising infrastructure",
    "account continuity",
    "Meta advertising",
    "Rahim Marketing",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: `Agency Ad Accounts for Meta, Google & TikTok | ${SITE_NAME}`,
    description:
      "Advertising infrastructure for Meta, Google, TikTok and other platforms — agency accounts, continuity support, and structured onboarding.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Advertising Infrastructure`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Agency Ad Accounts for Meta, Google & TikTok | ${SITE_NAME}`,
    description:
      "Advertising infrastructure for Meta, Google, TikTok and other platforms.",
    images: ["/og-image.jpg"],
    creator: "@rahim_ou",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  category: "Advertising Services",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/icon.png?v=3", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png?v=3", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://t.me" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Favicons rebuilt from Rahim R mark (?v= busts aggressive browser caches) */}
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/icon.png?v=3" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=3" sizes="180x180" />

        {/* Preload Critical Resources */}
        <link rel="preload" as="image" href="/og-image.jpg" />
        
        {/* Critical CSS for LCP element - inline to prevent render blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in {
              animation: fade-in 0.3s ease-out forwards;
            }
            /* Ensure LCP element is visible immediately */
            h1.animate-fade-in {
              animation-delay: 0s !important;
            }
          `
        }} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(buildSiteWideGraph()),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
