import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceGuidePage } from "@/components/pages/resource-guide-page";
import {
  RESOURCE_GUIDE_SLUGS,
  getResourceGuide,
  type ResourceGuideSlug,
} from "@/data/resource-guides";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return RESOURCE_GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getResourceGuide(slug);
  if (!guide) return {};
  return buildPageMetadata({
    title: guide.metaTitle,
    description: guide.description,
    path: `/resources/${slug}`,
  });
}

export default async function ResourceGuideRoute({ params }: PageProps) {
  const { slug } = await params;
  if (!RESOURCE_GUIDE_SLUGS.includes(slug as ResourceGuideSlug)) {
    notFound();
  }
  const guide = getResourceGuide(slug);
  if (!guide) notFound();
  return <ResourceGuidePage guide={guide} />;
}
