import { SITE_URL } from "@/lib/site";

/** Stable site-wide entity IDs (canonical production host). */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;
export const EDITORIAL_ID = `${SITE_URL}/#team`;

export function absoluteUrl(pathOrUrl = "/"): string {
  if (!pathOrUrl || pathOrUrl === "/") return `${SITE_URL}/`;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}

/** Page fragment IDs: https://host/path#fragment */
export function pageId(path: string, fragment: string): string {
  const normalized =
    path === "/" || path === ""
      ? `${SITE_URL}/`
      : absoluteUrl(path).replace(/\/$/, "");
  return `${normalized}#${fragment}`;
}

export function webpageId(path: string): string {
  return pageId(path, "webpage");
}

export function serviceId(path: string): string {
  return pageId(path, "service");
}

export function productId(path: string): string {
  return pageId(path, "product");
}

export function articleId(path: string): string {
  return pageId(path, "article");
}

export function primaryImageId(path: string): string {
  return pageId(path, "primaryimage");
}

export function breadcrumbId(path: string): string {
  return pageId(path, "breadcrumb");
}

export function itemListId(path: string): string {
  return pageId(path, "itemlist");
}

export function offerCatalogId(path: string): string {
  return pageId(path, "offercatalog");
}
