import { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/site";
import { RESOURCE_GUIDE_SLUGS } from "@/data/resource-guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPostRoutes = getAllBlogSlugs().map((slug) => `/blog/${slug}`);
  const resourceGuideRoutes = RESOURCE_GUIDE_SLUGS.map((slug) => `/resources/${slug}`);

  // Intentionally excluded (noindex): /request-access, /products/buy-facebook-pages
  const routes = [
    "",
    "/services/agency-ad-accounts",
    "/services/facebook-agency-ad-account",
    "/services/google-ads-agency-account",
    "/services/tiktok-agency-account",
    "/services/bing-agency-accounts",
    "/services/outbrain-agency-ad-accounts",
    "/services/taboola-agency-ad-accounts",
    "/services/peptides-meta-ads",
    "/services/facebook-feedback-score",
    "/services/health-assessment-service",
    "/services/seo-management",
    "/services/local-seo",
    "/free-seo-report",
    "/products/buy-facebook-accounts",
    "/products/buy-facebook-business-managers",
    "/facebook-unban-services",
    "/reviews",
    "/blog",
    ...blogPostRoutes,
    "/resources",
    "/resources/google-ads",
    "/resources/tiktok-ads",
    ...resourceGuideRoutes,
    "/milestones",
    "/partners",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/services") || route.startsWith("/products")
          ? 0.9
          : route.startsWith("/resources/")
            ? 0.8
            : 0.7,
  }));
}
