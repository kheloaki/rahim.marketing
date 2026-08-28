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
}

export type JsonLd = Record<string, unknown>;

const defaultKeywords = [
  "agency ad accounts",
  "Meta agency accounts",
  "Facebook agency accounts",
  "Google Ads agency accounts",
  "TikTok agency accounts",
  "whitelisted ad accounts",
  "premium ad accounts",
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
  const url = canonicalPath ? `${siteUrl}${canonicalPath === "/" ? "/" : canonicalPath}` : siteUrl;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const pageTitle = absoluteTitle ? { absolute: title } : title;

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
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
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

const baseOrganization: JsonLd = {
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Premium agency ad accounts for Meta, Google, and TikTok. Trusted by 1750+ advertisers worldwide.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["English"],
    contactOption: "TollFree",
  },
  sameAs: ["https://t.me/rahim_ou"],
};

export function generateStructuredData(type: string, data: PageSchemaData = {}): JsonLd {
  switch (type) {
    case "Organization":
      return {
        "@context": "https://schema.org",
        ...baseOrganization,
      };

    case "WebSite":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        publisher: baseOrganization,
      };

    case "Service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.name,
        serviceType: data.serviceType || "Advertising Services",
        provider: baseOrganization,
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        description: data.description,
        offers: data.offers || {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
        },
      };

    case "Product":
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: data.name,
        description: data.description,
        brand: baseOrganization,
        manufacturer: baseOrganization,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: data.priceCurrency || "USD",
          price: data.price,
          priceValidUntil: data.priceValidUntil,
          url: data.url || `${siteUrl}${data.path || ""}`,
          seller: baseOrganization,
        },
      };

    case "WebPage":
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: data.name,
        description: data.description,
        url: `${siteUrl}${data.path || ""}`,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          name: siteName,
          url: siteUrl,
        },
        about: baseOrganization,
        publisher: baseOrganization,
      };

    case "FAQPage":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity:
          data.faqs?.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })) || [],
      };

    case "BreadcrumbList":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement:
          data.breadcrumbs?.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteUrl}${item.url}`,
          })) || [],
      };

    case "ItemList":
      return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: data.name,
        description: data.description,
        itemListElement:
          data.services?.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": item.itemType || "Service",
              name: item.name,
              url: `${siteUrl}${item.url}`,
              description: item.description,
            },
          })) || [],
      };

    case "BlogPosting":
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data.headline,
        description: data.description,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
          "@type": "Organization",
          name: siteName,
        },
        publisher: baseOrganization,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}${data.path || ""}`,
        },
      };

    case "CollectionPage":
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: data.name,
        description: data.description,
        url: `${siteUrl}${data.path || ""}`,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: data.items || [],
        },
      };

    default:
      return {
        "@context": "https://schema.org",
        ...baseOrganization,
      };
  }
}

export function generateAllSchemas(
  pageType: "home" | "service" | "product" | "blog" | "page",
  data: PageSchemaData = {},
): JsonLd[] {
  const schemas: JsonLd[] = [];
  const path = data.path || "";
  const url = `${siteUrl}${path}`;

  schemas.push(generateStructuredData("Organization"));
  schemas.push(
    generateStructuredData("WebPage", {
      name: data.title || siteName,
      description: data.description,
      path,
    }),
  );

  if (data.breadcrumbs && data.breadcrumbs.length > 0) {
    schemas.push(
      generateStructuredData("BreadcrumbList", {
        breadcrumbs: data.breadcrumbs,
      }),
    );
  }

  switch (pageType) {
    case "home":
      schemas.push(generateStructuredData("WebSite"));
      if (data.services) {
        schemas.push(
          generateStructuredData("ItemList", {
            name: "Agency Ad Account Services",
            description: "Premium agency ad accounts for Meta, Google, and TikTok",
            services: data.services,
          }),
        );
      }
      break;

    case "service":
      schemas.push(
        generateStructuredData("Service", {
          name: data.title,
          description: data.description,
          serviceType: data.serviceType || "Advertising Services",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            url,
          },
        }),
      );
      if (data.faqs && data.faqs.length > 0) {
        schemas.push(generateStructuredData("FAQPage", { faqs: data.faqs }));
      }
      break;

    case "product":
      schemas.push(
        generateStructuredData("Product", {
          name: data.title,
          description: data.description,
          price: data.price,
          priceCurrency: data.priceCurrency || "USD",
          path,
          url,
        }),
      );
      break;

    case "blog":
      if (data.services && data.services.length > 0) {
        schemas.push(
          generateStructuredData("CollectionPage", {
            name: data.title || "Blog",
            description: data.description,
            path,
            items: data.services.map((item) => ({
              "@type": "BlogPosting",
              name: item.name,
              url: `${siteUrl}${item.url}`,
              description: item.description,
            })),
          }),
        );
      } else if (data.blogPost) {
        schemas.push(
          generateStructuredData("BlogPosting", {
            headline: data.blogPost.title,
            description: data.blogPost.description,
            image: data.blogPost.image,
            datePublished: data.blogPost.datePublished,
            dateModified: data.blogPost.dateModified,
            path,
          }),
        );
      }
      if (data.faqs && data.faqs.length > 0) {
        schemas.push(generateStructuredData("FAQPage", { faqs: data.faqs }));
      }
      break;

    case "page":
      if (data.services && data.services.length > 0) {
        schemas.push(
          generateStructuredData("CollectionPage", {
            name: data.title,
            description: data.description,
            path,
            items: data.services.map((item) => ({
              "@type": item.itemType || "Thing",
              name: item.name,
              url: `${siteUrl}${item.url}`,
              description: item.description,
            })),
          }),
        );
      }
      if (data.faqs && data.faqs.length > 0) {
        schemas.push(generateStructuredData("FAQPage", { faqs: data.faqs }));
      }
      break;
  }

  return schemas;
}
