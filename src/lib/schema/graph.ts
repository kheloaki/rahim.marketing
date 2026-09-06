import type { PageSchemaData, SchemaBreadcrumb, SchemaListItem } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import {
  EDITORIAL_ID,
  ORG_ID,
  WEBSITE_ID,
  absoluteUrl,
  articleId,
  breadcrumbId,
  itemListId,
  offerCatalogId,
  primaryImageId,
  productId,
  serviceId,
  webpageId,
} from "@/lib/schema/ids";
import { buildPrimaryImageObject } from "@/lib/schema/image";
import {
  AGENCY_PLAN_OFFERS,
  buildOfferCatalog,
  type PricedOfferInput,
} from "@/lib/schema/offer";
import {
  asNode,
  buildEditorialTeamNode,
  buildSiteWideGraph,
  prune,
  ref,
  serializeJsonLd,
  type JsonLd,
} from "@/lib/schema/organization";

export type SchemaPageType =
  | "home"
  | "service"
  | "product"
  | "blog"
  | "page"
  | "article"
  | "collection";

export type ExtendedPageSchemaData = PageSchemaData & {
  includeAgencyPlanOffers?: boolean;
  pricedOffers?: PricedOfferInput[];
  offerCatalogName?: string;
  pageEntityType?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";
  articleType?: "Article" | "BlogPosting";
};

/** Paths that render PricingPackages with visible $299 / $999 plans. */
const AGENCY_PLAN_PATHS = new Set([
  "/",
  "/services/facebook-agency-ad-account",
  "/services/google-ads-agency-account",
  "/services/tiktok-agency-account",
  "/services/bing-agency-accounts",
  "/services/taboola-agency-ad-accounts",
  "/services/outbrain-agency-ad-accounts",
]);

function buildBreadcrumbList(path: string, crumbs: SchemaBreadcrumb[]): JsonLd {
  return asNode({
    "@type": "BreadcrumbList",
    "@id": breadcrumbId(path),
    itemListElement: crumbs.map((item, index) =>
      asNode({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.url),
      }),
    ),
  });
}

function buildItemListNode(path: string, name: string, items: SchemaListItem[]): JsonLd {
  return asNode({
    "@type": "ItemList",
    "@id": itemListId(path),
    name,
    itemListElement: items.map((item, index) =>
      asNode({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.url),
        ...(item.description ? { description: item.description } : {}),
      }),
    ),
  });
}

function isServicePath(path: string, data: ExtendedPageSchemaData): boolean {
  return (
    Boolean(data.serviceType) ||
    path.startsWith("/services/") ||
    path === "/facebook-unban-services"
  );
}

function resolvePlanCatalog(path: string, data: ExtendedPageSchemaData): JsonLd | undefined {
  const priced =
    data.pricedOffers ||
    (data.includeAgencyPlanOffers || AGENCY_PLAN_PATHS.has(path)
      ? AGENCY_PLAN_OFFERS
      : undefined);

  if (!priced?.length) return undefined;

  return buildOfferCatalog(path, data.offerCatalogName || "Agency account plans", priced, {
    itemOfferedId: isServicePath(path, data) ? serviceId(path) : undefined,
    catalogUrl: path,
  });
}

/**
 * Build one connected @graph document for a page.
 * Organization / WebSite / Logo are defined once in the root layout.
 */
export function buildPageSchemaGraph(
  pageType: SchemaPageType,
  data: ExtendedPageSchemaData = {},
): JsonLd {
  const path = data.path || "/";
  const pageUrl = absoluteUrl(path);
  const name = data.title || data.name || SITE_NAME;
  const description = data.description;
  const graph: JsonLd[] = [];

  const imageSrc = data.image || data.blogPost?.image;
  const hasImage = Boolean(imageSrc);
  if (hasImage && imageSrc) {
    graph.push(
      buildPrimaryImageObject(path, imageSrc, {
        caption: name,
        representativeOfPage: true,
      }),
    );
  }

  if (data.breadcrumbs?.length) {
    graph.push(buildBreadcrumbList(path, data.breadcrumbs));
  }

  let mainEntityRef: JsonLd | undefined;

  const useCollectionPage =
    data.pageEntityType === "CollectionPage" ||
    pageType === "collection" ||
    (pageType === "page" && Boolean(data.services?.length)) ||
    (pageType === "blog" && !data.blogPost);

  const pageEntityType =
    data.pageEntityType || (useCollectionPage ? "CollectionPage" : "WebPage");

  if (pageType === "service") {
    const planCatalog = resolvePlanCatalog(path, data);
    if (planCatalog) graph.push(planCatalog);

    const platformCatalogId = `${offerCatalogId(path)}-platforms`;
    const platformCatalog =
      data.services && data.services.length > 0
        ? asNode({
            "@type": "OfferCatalog",
            "@id": platformCatalogId,
            name: "Platform agency ad account services",
            itemListElement: data.services.map((item, index) =>
              asNode({
                "@type": "Offer",
                position: index + 1,
                name: item.name,
                description: item.description,
                url: absoluteUrl(item.url),
                itemOffered: asNode({
                  "@type": "Service",
                  name: item.name,
                  url: absoluteUrl(item.url),
                  provider: ref(ORG_ID),
                }),
              }),
            ),
          })
        : undefined;

    if (platformCatalog) graph.push(platformCatalog);

    let hasOfferCatalog: unknown;
    if (planCatalog && platformCatalog) {
      hasOfferCatalog = [ref(offerCatalogId(path)), ref(platformCatalogId)];
    } else if (planCatalog) {
      hasOfferCatalog = ref(offerCatalogId(path));
    } else if (platformCatalog) {
      hasOfferCatalog = ref(platformCatalogId);
    }

    graph.push(
      asNode({
        "@type": "Service",
        "@id": serviceId(path),
        name,
        description,
        url: pageUrl,
        serviceType: data.serviceType || "Advertising Services",
        provider: ref(ORG_ID),
        mainEntityOfPage: ref(webpageId(path)),
        ...(hasImage ? { image: ref(primaryImageId(path)) } : {}),
        ...(hasOfferCatalog ? { hasOfferCatalog } : {}),
      }),
    );
    mainEntityRef = ref(serviceId(path));
  }

  if (pageType === "product") {
    const numericPrice =
      data.price && /^\d+(\.\d+)?$/.test(String(data.price).trim())
        ? String(data.price).trim()
        : undefined;

    graph.push(
      asNode({
        "@type": "Product",
        "@id": productId(path),
        name,
        description,
        url: pageUrl,
        brand: ref(ORG_ID),
        mainEntityOfPage: ref(webpageId(path)),
        ...(hasImage ? { image: ref(primaryImageId(path)) } : {}),
        ...(numericPrice
          ? {
              offers: asNode({
                "@type": "Offer",
                url: pageUrl,
                price: numericPrice,
                priceCurrency: data.priceCurrency || "USD",
                seller: ref(ORG_ID),
              }),
            }
          : {}),
      }),
    );
    mainEntityRef = ref(productId(path));
  }

  if (pageType === "blog" && data.blogPost) {
    graph.push(buildEditorialTeamNode());
    graph.push(
      asNode({
        "@type": "BlogPosting",
        "@id": articleId(path),
        headline: data.blogPost.title,
        description: data.blogPost.description,
        url: pageUrl,
        datePublished: data.blogPost.datePublished,
        dateModified: data.blogPost.dateModified || data.blogPost.datePublished,
        author: ref(EDITORIAL_ID),
        publisher: ref(ORG_ID),
        isPartOf: ref(WEBSITE_ID),
        mainEntityOfPage: ref(webpageId(path)),
        ...(hasImage ? { image: ref(primaryImageId(path)) } : {}),
      }),
    );
    mainEntityRef = ref(articleId(path));
  }

  if (pageType === "article") {
    graph.push(buildEditorialTeamNode());
    const type = data.articleType || "Article";
    graph.push(
      asNode({
        "@type": type,
        "@id": articleId(path),
        headline: data.headline || name,
        description,
        url: pageUrl,
        ...(data.datePublished ? { datePublished: data.datePublished } : {}),
        ...(data.dateModified || data.datePublished
          ? { dateModified: data.dateModified || data.datePublished }
          : {}),
        author: ref(EDITORIAL_ID),
        publisher: ref(ORG_ID),
        isPartOf: ref(WEBSITE_ID),
        mainEntityOfPage: ref(webpageId(path)),
        ...(hasImage ? { image: ref(primaryImageId(path)) } : {}),
      }),
    );
    mainEntityRef = ref(articleId(path));
  }

  const wantsItemList =
    Boolean(data.services?.length) &&
    !(pageType === "service" && data.services?.length) &&
    (pageType === "home" ||
      pageType === "collection" ||
      pageType === "page" ||
      (pageType === "blog" && !data.blogPost));

  if (wantsItemList && data.services?.length) {
    const listName =
      pageType === "home"
        ? "Agency Ad Account Services"
        : pageType === "blog"
          ? "Blog posts"
          : name;
    graph.push(buildItemListNode(path, listName, data.services));
    if (!mainEntityRef) {
      mainEntityRef = ref(itemListId(path));
    }
  }

  if (pageType === "home") {
    const planCatalog = resolvePlanCatalog(path, {
      ...data,
      includeAgencyPlanOffers: true,
    });
    if (planCatalog) graph.push(planCatalog);
  }

  graph.unshift(
    asNode({
      "@type": pageEntityType,
      "@id": webpageId(path),
      url: pageUrl,
      name,
      description,
      inLanguage: "en-US",
      isPartOf: ref(WEBSITE_ID),
      ...(pageType === "home" ? { about: ref(ORG_ID) } : {}),
      ...(data.breadcrumbs?.length ? { breadcrumb: ref(breadcrumbId(path)) } : {}),
      ...(hasImage ? { primaryImageOfPage: ref(primaryImageId(path)) } : {}),
      ...(mainEntityRef ? { mainEntity: mainEntityRef } : {}),
    }),
  );

  return prune({
    "@context": "https://schema.org",
    "@graph": graph,
  }) as JsonLd;
}

/** Single-element array for ComprehensiveSchema compatibility. */
export function generateAllSchemas(
  pageType: SchemaPageType,
  data: ExtendedPageSchemaData = {},
): JsonLd[] {
  return [buildPageSchemaGraph(pageType, data)];
}

export { buildSiteWideGraph, serializeJsonLd };
