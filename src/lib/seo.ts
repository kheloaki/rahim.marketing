import { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/site";

const siteUrl = SITE_URL;
const siteName = SITE_NAME;

export interface SEOProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  absoluteTitle?: boolean;
}

export interface SchemaFaq {
  question: string;
  answer: string;
}

export interface SchemaBreadcrumb {
  name: string;
  url: string;
}

export interface SchemaListItem {
  name: string;
  url: string;
  description?: string;
  itemType?: string;
}

export interface SchemaBlogPost {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

export interface PageSchemaData {
  title?: string;
  name?: string;
  description?: string;
  path?: string;
  url?: string;
  serviceType?: string;
  price?: string;
  priceCurrency?: string;
  priceValidUntil?: string;
  breadcrumbs?: SchemaBreadcrumb[];
  faqs?: SchemaFaq[];
  services?: SchemaListItem[];
  blogPost?: SchemaBlogPost;
  items?: Array<Record<string, unknown>>;
  headline?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  offers?: Record<string, unknown>;
  includeOrganization?: boolean;
  includeAgencyPlanOffers?: boolean;
  pricedOffers?: Array<{
    name: string;
    description?: string;
    price?: string;
    priceCurrency?: string;
    url?: string;
    billingDuration?: string;
  }>;
  offerCatalogName?: string;
  pageEntityType?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";
  articleType?: "Article" | "BlogPosting";
}

export type JsonLd = Record<string, unknown>;

const defaultKeywords = [
  "agency ad accounts",
  "Meta agency accounts",
  "Facebook agency accounts",
  "Google Ads agency accounts",
  "TikTok agency accounts",
  "advertising infrastructure",
  "Rahim Marketing",
];

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og-image.jpg",
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle = false,
}: SEOProps): Metadata {
  const canonicalPath = path === "/" ? "/" : path;
  const url = canonicalPath
    ? `${siteUrl}${canonicalPath === "/" ? "/" : canonicalPath}`
    : siteUrl;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  // Root layout uses `template: "%s | Rahim Marketing"`. Strip any manual brand
  // suffix so document titles never become "... | Rahim Marketing | Rahim Marketing".
  const brandSuffix = new RegExp(`\\s*\\|\\s*${siteName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "i");
  const titleWithoutBrand = title.replace(brandSuffix, "").trim();
  const titleWithBrand = `${titleWithoutBrand} | ${siteName}`;
  const pageTitle = absoluteTitle ? { absolute: titleWithBrand } : titleWithoutBrand;

  return {
    title: pageTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      siteName,
      title: titleWithBrand,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: titleWithBrand,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: titleWithBrand,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : {
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
  };
}

export {
  generateAllSchemas,
  buildPageSchemaGraph,
  type SchemaPageType,
} from "@/lib/schema/graph";

export {
  buildSiteWideGraph,
  serializeJsonLd,
  buildOrganizationNode,
} from "@/lib/schema/organization";

/** @deprecated Prefer buildSiteWideGraph — layout previously spread this object. */
export { buildOrganizationNode as baseOrganization } from "@/lib/schema/organization";
