import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export function metaFromSchema(
  schema: { title: string; description: string },
  path: string,
): Metadata {
  return buildPageMetadata({
    title: schema.title,
    description: schema.description,
    path,
  });
}
