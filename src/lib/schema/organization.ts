import { EDITORIAL_TEAM, SITE_NAME, SITE_URL, TELEGRAM_URL, WHATSAPP_URL } from "@/lib/site";
import { EDITORIAL_ID, LOGO_ID, ORG_ID, WEBSITE_ID, absoluteUrl } from "@/lib/schema/ids";
import { getImageDimensions } from "@/lib/schema/image-registry";

export type JsonLd = Record<string, unknown>;

export function ref(id: string): JsonLd {
  return { "@id": id };
}

/** Drop undefined/null/empty-string keys and empty arrays/objects. */
export function prune(value: unknown): unknown {
  if (value === null || value === undefined || value === "") return undefined;
  if (Array.isArray(value)) {
    const next = value.map(prune).filter((v) => v !== undefined);
    return next.length ? next : undefined;
  }
  if (typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      const pruned = prune(v);
      if (pruned !== undefined) out[k] = pruned;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return value;
}

export function asNode(value: Record<string, unknown>): JsonLd {
  return prune(value) as JsonLd;
}

/** Safe JSON-LD serialization (escape `<` to prevent script breakout). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildLogoImageObject(): JsonLd {
  const dims = getImageDimensions("/logo.png")!;
  return asNode({
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: absoluteUrl("/logo.png"),
    contentUrl: absoluteUrl("/logo.png"),
    width: dims.width,
    height: dims.height,
    caption: `${SITE_NAME} logo`,
    name: `${SITE_NAME} logo`,
  });
}

export function buildOrganizationNode(): JsonLd {
  return asNode({
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: ref(LOGO_ID),
    description:
      "Advertising infrastructure for Meta, Google, TikTok and other platforms — agency ad accounts, account continuity support, and structured onboarding.",
    sameAs: [TELEGRAM_URL],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        url: TELEGRAM_URL,
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: WHATSAPP_URL,
        availableLanguage: "English",
      },
    ],
  });
}

export function buildWebSiteNode(): JsonLd {
  return asNode({
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: ref(ORG_ID),
    inLanguage: "en-US",
  });
}

/** Site-wide entities for root layout (defined once). */
export function buildSiteWideGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationNode(), buildLogoImageObject(), buildWebSiteNode()],
  };
}

export function buildEditorialTeamNode(): JsonLd {
  return asNode({
    "@type": "Organization",
    "@id": EDITORIAL_ID,
    name: EDITORIAL_TEAM,
    url: SITE_URL,
    parentOrganization: ref(ORG_ID),
  });
}
