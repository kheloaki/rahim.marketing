import { absoluteUrl, offerCatalogId } from "@/lib/schema/ids";
import { asNode, ref, type JsonLd } from "@/lib/schema/organization";

export type PricedOfferInput = {
  name: string;
  description?: string;
  /** Numeric string without currency symbol, e.g. "299". Omit for contact/enterprise. */
  price?: string;
  priceCurrency?: string;
  url?: string;
  billingDuration?: string;
};

/** Visible Gold / Platinum agency plans from PricingPackages. */
export const AGENCY_PLAN_OFFERS: PricedOfferInput[] = [
  {
    name: "Gold",
    price: "299",
    priceCurrency: "USD",
    description: "Agency account plan — higher-capacity spend infrastructure with operational support.",
    billingDuration: "P1M",
  },
  {
    name: "Platinum",
    price: "999",
    priceCurrency: "USD",
    description:
      "Agency account plan for agencies and high-volume media buyers — includes cashback on eligible spend where applicable.",
    billingDuration: "P1M",
  },
  {
    name: "Custom / Enterprise",
    description: "Tailored agency account solutions for large-scale operations. Contact sales for pricing.",
  },
];

export function buildOfferCatalog(
  path: string,
  name: string,
  offers: PricedOfferInput[],
  options?: { itemOfferedId?: string; catalogUrl?: string },
): JsonLd {
  return asNode({
    "@type": "OfferCatalog",
    "@id": offerCatalogId(path),
    name,
    url: options?.catalogUrl ? absoluteUrl(options.catalogUrl) : absoluteUrl(path),
    itemListElement: offers.map((offer, index) =>
      asNode({
        "@type": "Offer",
        position: index + 1,
        name: offer.name,
        description: offer.description,
        ...(offer.price
          ? {
              price: offer.price,
              priceCurrency: offer.priceCurrency || "USD",
            }
          : {}),
        ...(options?.itemOfferedId ? { itemOffered: ref(options.itemOfferedId) } : {}),
      }),
    ),
  });
}
