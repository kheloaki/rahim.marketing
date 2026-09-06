import { absoluteUrl, primaryImageId } from "@/lib/schema/ids";
import { getImageDimensions, resolveImagePath } from "@/lib/schema/image-registry";
import { asNode, type JsonLd } from "@/lib/schema/organization";

export function buildPrimaryImageObject(
  path: string,
  imageSrc: string,
  options?: { caption?: string; representativeOfPage?: boolean },
): JsonLd {
  const pathname = resolveImagePath(imageSrc);
  const url = absoluteUrl(pathname);
  const dims = getImageDimensions(pathname);

  return asNode({
    "@type": "ImageObject",
    "@id": primaryImageId(path),
    url,
    contentUrl: url,
    ...(dims ? { width: dims.width, height: dims.height } : {}),
    ...(options?.caption ? { caption: options.caption } : {}),
    ...(options?.representativeOfPage ? { representativeOfPage: true } : {}),
  });
}
