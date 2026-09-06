/**
 * Measured production asset dimensions (sips).
 * Omit width/height in ImageObject when the path is not listed.
 */
export const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/logo.png": { width: 804, height: 315 },
  "/icon.png": { width: 512, height: 512 },
  "/og-image.jpg": { width: 1200, height: 800 },
  "/images/service-accounts.jpg": { width: 1536, height: 1024 },
  "/images/service-unban.jpg": { width: 1536, height: 1024 },
  "/images/service-health.jpg": { width: 1536, height: 1024 },
  "/images/service-seo.jpg": { width: 1536, height: 1024 },
  "/images/service-local-seo.jpg": { width: 1536, height: 1024 },
  "/images/service-business-manager.jpg": { width: 1536, height: 1024 },
  "/images/service-pages.jpg": { width: 1536, height: 1024 },
  "/images/service-feedback.jpg": { width: 1536, height: 1024 },
  "/images/blog-benchmarks.jpg": { width: 1536, height: 1024 },
  "/images/blog-competitors.jpg": { width: 1536, height: 1024 },
  "/images/blog-cpr.jpg": { width: 1536, height: 1024 },
  "/images/milestones-hero.jpg": { width: 400, height: 267 },
  "/images/peptides/rahim-pack-starter.jpg": { width: 1600, height: 1067 },
  "/images/peptides/rahim-pack-pro.jpg": { width: 1600, height: 1067 },
  "/images/peptides/rahim-pack-master.jpg": { width: 1600, height: 1067 },
  "/images/peptides/rahim-pack-enterprise.jpg": { width: 1600, height: 1067 },
  "/images/peptides/peptides-hero.jpg": { width: 933, height: 1400 },
  "/images/peptides/peptides-hub.jpg": { width: 1400, height: 933 },
};

export function resolveImagePath(src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    try {
      return new URL(src).pathname;
    } catch {
      return src;
    }
  }
  return src.startsWith("/") ? src : `/${src}`;
}

export function getImageDimensions(src: string): { width: number; height: number } | undefined {
  return IMAGE_DIMENSIONS[resolveImagePath(src)];
}
