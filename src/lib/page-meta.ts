import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export function metaFromSchema(
  schema: { title: string; description: string },
  path: string,
  options?: { noIndex?: boolean; image?: string; keywords?: string[] },
): Metadata {
  return buildPageMetadata({
    title: schema.title,
    description: schema.description,
    path,
    noIndex: options?.noIndex,
    image: options?.image,
    keywords: options?.keywords,
  });
}
