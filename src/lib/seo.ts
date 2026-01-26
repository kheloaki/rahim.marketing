import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rahimmarketing.com";
const siteName = "Rahim Marketing";

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
}

export function generateMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og-image.jpg",
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = path ? `${title} | ${siteName}` : title;

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

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image.startsWith("http") ? image : `${siteUrl}${image}`,
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
      title: fullTitle,
      description,
      images: [image.startsWith("http") ? image : `${siteUrl}${image}`],
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

const baseOrganization = {
  "@type": "Organization",
  name: "Rahim Marketing",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: "Premium agency ad accounts for Meta, Google, and TikTok. Trusted by 1750+ advertisers worldwide.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["English"],
    contactOption: "TollFree",
  },
  sameAs: [
    "https://t.me/rahim_ou",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1750",
    bestRating: "5",
    worstRating: "1",
  },
};

export function generateStructuredData(type: string, data?: any) {
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
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      };
    
    case "Service":
      const { path: servicePath, breadcrumbs: serviceBreadcrumbs, faqs: serviceFaqs, ...serviceData } = data || {};
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data?.name,
        serviceType: data?.serviceType || "Advertising Services",
        provider: baseOrganization,
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        description: data?.description,
        offers: data?.offers || {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
        },
        ...serviceData,
      };
    
    case "Product":
      const { path: productPath, ...productData } = data || {};
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: data?.name,
        description: data?.description,
        brand: baseOrganization,
        manufacturer: baseOrganization,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: data?.priceCurrency || "USD",
          price: data?.price,
          priceValidUntil: data?.priceValidUntil,
          url: data?.url || `${siteUrl}${productPath || ""}`,
          seller: baseOrganization,
        },
        aggregateRating: baseOrganization.aggregateRating,
        ...productData,
      };
    
    case "WebPage":
      const { path, breadcrumbs, faqs, services, blogPost, ...webPageData } = data || {};
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: data?.name,
        description: data?.description,
        url: `${siteUrl}${path || ""}`,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          name: siteName,
          url: siteUrl,
        },
        about: baseOrganization,
        publisher: baseOrganization,
        ...webPageData,
      };
    
    case "FAQPage":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data?.faqs?.map((faq: any) => ({
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
        itemListElement: data?.items?.map((item: any, index: number) => ({
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
        name: data?.name,
        description: data?.description,
        itemListElement: data?.items?.map((item: any, index: number) => ({
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
      const { path: blogPath, ...blogData } = data || {};
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data?.headline,
        description: data?.description,
        image: data?.image,
        datePublished: data?.datePublished,
        dateModified: data?.dateModified || data?.datePublished,
        author: {
          "@type": "Organization",
          name: siteName,
        },
        publisher: baseOrganization,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}${blogPath || ""}`,
        },
        ...blogData,
      };
    
    case "CollectionPage":
      const { path: collectionPath, ...collectionData } = data || {};
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: data?.name,
        description: data?.description,
        url: `${siteUrl}${collectionPath || ""}`,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: data?.items || [],
        },
        ...collectionData,
      };
    
    default:
      return {
        "@context": "https://schema.org",
        ...baseOrganization,
      };
  }
}

export function generateAllSchemas(pageType: "home" | "service" | "product" | "blog" | "page", data: any) {
  const schemas: any[] = [];
  const path = data?.path || "";
  const url = `${siteUrl}${path}`;

  // Organization schema - always included
  schemas.push(generateStructuredData("Organization"));

  // WebPage schema - always included
  schemas.push(generateStructuredData("WebPage", {
    name: data?.title || siteName,
    description: data?.description,
    path: path, // Used to construct URL, but not included in final schema
  }));

  // BreadcrumbList - always included if items provided
  if (data?.breadcrumbs && data.breadcrumbs.length > 0) {
    schemas.push(generateStructuredData("BreadcrumbList", {
      items: data.breadcrumbs,
    }));
  }

  // Page-specific schemas
  switch (pageType) {
    case "home":
      schemas.push(generateStructuredData("WebSite"));
      if (data?.services) {
        schemas.push(generateStructuredData("ItemList", {
          name: "Agency Ad Account Services",
          description: "Premium agency ad accounts for Meta, Google, and TikTok",
          items: data.services,
        }));
      }
      break;
    
    case "service":
      schemas.push(generateStructuredData("Service", {
        name: data?.title,
        description: data?.description,
        serviceType: data?.serviceType || "Advertising Services",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          url: url,
        },
      }));
      if (data?.faqs && data.faqs.length > 0) {
        schemas.push(generateStructuredData("FAQPage", { faqs: data.faqs }));
      }
      break;
    
    case "product":
      schemas.push(generateStructuredData("Product", {
        name: data?.title,
        description: data?.description,
        price: data?.price,
        priceCurrency: data?.priceCurrency || "USD",
        path: path, // Used to construct URL in schema, but excluded from final output
        url: url,
      }));
      break;
    
    case "blog":
      // For blog listing page, use CollectionPage
      if (data?.services && data.services.length > 0) {
        schemas.push(generateStructuredData("CollectionPage", {
          name: data?.title || "Blog",
          description: data?.description,
          path: path,
          items: data.services.map((item: any) => ({
            "@type": "BlogPosting",
            name: item.name,
            url: `${siteUrl}${item.url}`,
            description: item.description,
          })),
        }));
      } else if (data?.blogPost) {
        schemas.push(generateStructuredData("BlogPosting", {
          headline: data.blogPost.title,
          description: data.blogPost.description,
          image: data.blogPost.image,
          datePublished: data.blogPost.datePublished,
          dateModified: data.blogPost.dateModified,
          path: path,
        }));
      }
      break;
    
    case "page":
      // For pages with item lists (partners, resources), add CollectionPage
      if (data?.services && data.services.length > 0) {
        schemas.push(generateStructuredData("CollectionPage", {
          name: data?.title,
          description: data?.description,
          path: path,
          items: data.services,
        }));
      }
      // Add FAQPage if FAQs exist
      if (data?.faqs && data.faqs.length > 0) {
        schemas.push(generateStructuredData("FAQPage", { faqs: data.faqs }));
      }
      break;
  }

  return schemas;
}

