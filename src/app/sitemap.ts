import { MetadataRoute } from 'next'
import { getAllBlogSlugs } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rahimagency.com'
  const blogPostRoutes = getAllBlogSlugs().map((slug) => `/blog/${slug}`)

  const routes = [
    '',
    '/services/facebook-agency-ad-account',
    '/services/google-ads-agency-account',
    '/services/tiktok-agency-account',
    '/services/bing-agency-accounts',
    '/services/outbrain-agency-ad-accounts',
    '/services/taboola-agency-ad-accounts',
    '/services/facebook-feedback-score',
    '/services/health-assessment-service',
    '/services/seo-management',
    '/services/local-seo',
    '/free-seo-report',
    '/products/buy-facebook-accounts',
    '/products/buy-facebook-pages',
    '/products/buy-facebook-business-managers',
    '/request-access',
    '/reviews',
    '/blog',
    ...blogPostRoutes,
    '/resources',
    '/milestones',
    '/partners',
    '/privacy',
    '/terms',
    '/cookies',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/products') ? 0.9 : 0.7,
  }))
}

