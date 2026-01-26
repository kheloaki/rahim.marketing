import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rahimmarketing.com'),
  title: {
    default: "Rahim Marketing - Premium Agency Ad Accounts for Meta, Google & TikTok",
    template: "%s | Rahim Marketing"
  },
  description: "Rahim Marketing is the leading provider of premium agency ad accounts for Meta, Google, and TikTok. Trusted by 1750+ advertisers worldwide. Scale without limits with whitelisted accounts, unlimited spend, instant replacements, and dedicated rep access.",
  keywords: [
    "agency ad accounts",
    "Meta agency accounts",
    "Facebook agency accounts",
    "Google Ads agency accounts",
    "TikTok agency accounts",
    "whitelisted ad accounts",
    "premium ad accounts",
    "ad account management",
    "Facebook advertising",
    "Google advertising",
    "TikTok advertising",
    "scale advertising",
    "unlimited ad spend",
    "ad account replacement",
    "Facebook ad account ban",
    "advertising solutions",
    "performance marketing",
    "media buying",
    "Rahim Marketing"
  ],
  authors: [{ name: "Rahim Marketing" }],
  creator: "Rahim Marketing",
  publisher: "Rahim Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Rahim Marketing",
    title: "Rahim Marketing - Premium Agency Ad Accounts for Meta, Google & TikTok",
    description: "Scale your advertising without limits. Premium whitelisted agency ad accounts for Meta, Google, and TikTok. Trusted by 1750+ advertisers worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahim Marketing - Premium Agency Ad Accounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahim Marketing - Premium Agency Ad Accounts",
    description: "Scale your advertising without limits. Premium whitelisted agency ad accounts for Meta, Google, and TikTok.",
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
  alternates: {
    canonical: "/",
  },
  category: "Advertising Services",
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
        <link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />
        <link rel="dns-prefetch" href="https://t.me" />
        <link rel="dns-prefetch" href="https://wa.me" />
        
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rahim Marketing",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://rahimmarketing.com",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://rahimmarketing.com"}/logo.png`,
              description: "Premium agency ad accounts for Meta, Google, and TikTok. Trusted by 1750+ advertisers worldwide.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: ["English"],
              },
              sameAs: ["https://t.me/rahim_ou"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "1750",
              },
            }),
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
