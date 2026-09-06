/**
 * Central platform brand config for UI logos.
 *
 * Asset provenance:
 * - meta, facebook, google-ads, tiktok: Simple Icons (CC0) official brand marks
 * - microsoft: Microsoft four-square mark with official brand colors
 * - taboola, outbrain: NO confident official asset in-repo — do not invent marks
 */

export type PlatformId =
  | "meta"
  | "facebook"
  | "google-ads"
  | "tiktok"
  | "microsoft-advertising"
  | "taboola"
  | "outbrain";

export type PlatformAssetStatus = "official" | "pending-official";

export type PlatformDefinition = {
  id: PlatformId;
  name: string;
  /** Public SVG path when an official file exists */
  logo?: `/${string}`;
  logoAlt: string;
  brandHex?: string;
  serviceUrl: string;
  assetStatus: PlatformAssetStatus;
};

export const platforms: Record<PlatformId, PlatformDefinition> = {
  meta: {
    id: "meta",
    name: "Meta",
    logo: "/platforms/meta.svg",
    logoAlt: "Meta",
    brandHex: "#0467DF",
    serviceUrl: "/services/facebook-agency-ad-account",
    assetStatus: "official",
  },
  facebook: {
    id: "facebook",
    name: "Facebook",
    logo: "/platforms/facebook.svg",
    logoAlt: "Facebook",
    brandHex: "#0866FF",
    serviceUrl: "/services/facebook-agency-ad-account",
    assetStatus: "official",
  },
  "google-ads": {
    id: "google-ads",
    name: "Google Ads",
    logo: "/platforms/google-ads.svg",
    logoAlt: "Google Ads",
    brandHex: "#4285F4",
    serviceUrl: "/services/google-ads-agency-account",
    assetStatus: "official",
  },
  tiktok: {
    id: "tiktok",
    name: "TikTok",
    logo: "/platforms/tiktok.svg",
    logoAlt: "TikTok",
    brandHex: "#000000",
    serviceUrl: "/services/tiktok-agency-account",
    assetStatus: "official",
  },
  "microsoft-advertising": {
    id: "microsoft-advertising",
    name: "Microsoft Advertising",
    logo: "/platforms/microsoft.svg",
    logoAlt: "Microsoft",
    serviceUrl: "/services/bing-agency-accounts",
    assetStatus: "official",
  },
  taboola: {
    id: "taboola",
    name: "Taboola",
    logoAlt: "Taboola",
    serviceUrl: "/services/taboola-agency-ad-accounts",
    assetStatus: "pending-official",
  },
  outbrain: {
    id: "outbrain",
    name: "Outbrain",
    logoAlt: "Outbrain",
    serviceUrl: "/services/outbrain-agency-ad-accounts",
    assetStatus: "pending-official",
  },
};
