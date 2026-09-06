/**
 * SEO topical architecture: pillar → money pages → supporting guides.
 * Used by /resources hub, breadcrumbs, and related-link helpers.
 */

export type SeoClusterId =
  | "agency-ad-accounts"
  | "meta-facebook"
  | "meta-health-recovery"
  | "peptide-advertising"
  | "google-ads"
  | "tiktok-ads"
  | "microsoft-ads"
  | "native-advertising"
  | "meta-assets"
  | "seo-services";

export type SeoCluster = {
  id: SeoClusterId;
  name: string;
  /** Short intro for /resources hub */
  intro: string;
  /** Optional pillar / category hub path */
  pillarPath?: string;
  /** Commercial money pages */
  moneyPages: Array<{ href: string; title: string }>;
  /** Resource guide slugs that belong to this cluster (published) */
  supportSlugs: string[];
  /** Future slugs planned but not published yet */
  plannedSlugs?: string[];
  /** Priority for content rollout */
  priority: "P0" | "P1" | "P2" | "P3";
};

export const SEO_CLUSTERS: SeoCluster[] = [
  {
    id: "agency-ad-accounts",
    name: "Agency Ad Accounts",
    intro:
      "How agency advertising accounts work across platforms — access, billing, tracking, and continuity — then choose the right platform page.",
    pillarPath: "/services/agency-ad-accounts",
    moneyPages: [
      { href: "/services/facebook-agency-ad-account", title: "Facebook / Meta" },
      { href: "/services/google-ads-agency-account", title: "Google Ads" },
      { href: "/services/tiktok-agency-account", title: "TikTok" },
      { href: "/services/bing-agency-accounts", title: "Microsoft / Bing" },
      { href: "/services/taboola-agency-ad-accounts", title: "Taboola" },
      { href: "/services/outbrain-agency-ad-accounts", title: "Outbrain" },
    ],
    supportSlugs: ["meta-agency-ad-account-guide"],
    plannedSlugs: [
      "microsoft-ads-agency-account-guide",
      "taboola-agency-account-guide",
      "outbrain-agency-account-guide",
    ],
    priority: "P0",
  },
  {
    id: "meta-facebook",
    name: "Meta Advertising",
    intro:
      "Meta agency accounts, Business Manager permissions, Pixel/Dataset structure, and how agency access differs from standard ad accounts.",
    pillarPath: "/services/facebook-agency-ad-account",
    moneyPages: [
      { href: "/services/facebook-agency-ad-account", title: "Facebook Agency Ad Accounts" },
    ],
    supportSlugs: [
      "meta-agency-ad-account-guide",
      "meta-agency-account-vs-standard-ad-account",
      "meta-pixel-capi-account-structure",
      "meta-business-manager-permissions",
    ],
    plannedSlugs: ["meta-agency-access-security", "meta-business-manager-ownership"],
    priority: "P0",
  },
  {
    id: "meta-health-recovery",
    name: "Account Restrictions",
    intro:
      "What to do when Meta assets are restricted — diagnosis, legitimate appeals, health checklists, and professional review options.",
    pillarPath: "/services/health-assessment-service",
    moneyPages: [
      { href: "/services/health-assessment-service", title: "Meta Ad Account Health Audit" },
      { href: "/facebook-unban-services", title: "Restriction Review & Recovery Support" },
    ],
    supportSlugs: [
      "facebook-ad-account-restricted",
      "meta-business-manager-restricted",
      "meta-page-restricted",
      "meta-account-health-checklist",
      "meta-ad-account-appeal-guide",
    ],
    priority: "P0",
  },
  {
    id: "peptide-advertising",
    name: "Peptide Advertising",
    intro:
      "Eligibility, compliance, landing pages, tracking, and Meta infrastructure for peptide and adjacent wellness brands.",
    pillarPath: "/services/peptides-meta-ads",
    moneyPages: [
      { href: "/services/peptides-meta-ads", title: "Peptides Meta Ads Structure" },
    ],
    supportSlugs: [
      "can-you-advertise-peptides-on-facebook",
      "peptide-meta-ads-compliance",
      "why-peptide-meta-ads-get-rejected",
      "peptide-meta-landing-page-compliance",
      "peptide-meta-tracking-capi",
    ],
    priority: "P0",
  },
  {
    id: "google-ads",
    name: "Google Ads",
    intro:
      "Google Ads agency accounts, Manager Accounts (MCC), billing hierarchy, and suspension response.",
    pillarPath: "/resources/google-ads",
    moneyPages: [
      { href: "/services/google-ads-agency-account", title: "Google Ads Agency Accounts" },
    ],
    supportSlugs: [
      "google-ads-agency-account-guide",
      "google-ads-account-suspended",
      "google-ads-manager-account-vs-agency-account",
      "google-ads-billing-account-structure",
    ],
    priority: "P1",
  },
  {
    id: "tiktok-ads",
    name: "TikTok Ads",
    intro:
      "TikTok agency accounts, Business Center access, permissions, and suspension response.",
    pillarPath: "/resources/tiktok-ads",
    moneyPages: [
      { href: "/services/tiktok-agency-account", title: "TikTok Agency Ad Accounts" },
    ],
    supportSlugs: [
      "tiktok-agency-account-guide",
      "tiktok-ad-account-suspended",
      "tiktok-business-center-vs-agency-account",
      "tiktok-ad-account-access-permissions",
    ],
    priority: "P1",
  },
  {
    id: "microsoft-ads",
    name: "Microsoft Ads",
    intro:
      "Microsoft Advertising (Bing Ads) agency accounts, manager accounts, and suspension guidance.",
    pillarPath: "/services/bing-agency-accounts",
    moneyPages: [
      { href: "/services/bing-agency-accounts", title: "Microsoft / Bing Agency Accounts" },
    ],
    supportSlugs: [],
    plannedSlugs: [
      "microsoft-ads-agency-account-guide",
      "microsoft-ads-account-suspended",
      "microsoft-ads-manager-account-guide",
    ],
    priority: "P2",
  },
  {
    id: "native-advertising",
    name: "Native Advertising",
    intro:
      "Taboola and Outbrain agency accounts, platform differences, and native account restrictions.",
    moneyPages: [
      { href: "/services/taboola-agency-ad-accounts", title: "Taboola Agency Accounts" },
      { href: "/services/outbrain-agency-ad-accounts", title: "Outbrain Agency Accounts" },
    ],
    supportSlugs: [],
    plannedSlugs: [
      "taboola-agency-account-guide",
      "outbrain-agency-account-guide",
      "taboola-vs-outbrain",
      "native-ad-account-restrictions",
    ],
    priority: "P2",
  },
  {
    id: "meta-assets",
    name: "Meta Assets",
    intro:
      "Ownership and relationships between Facebook profiles, Business Managers, Pages, and ad accounts.",
    moneyPages: [
      { href: "/products/buy-facebook-accounts", title: "Facebook Accounts" },
      { href: "/products/buy-facebook-business-managers", title: "Business Managers" },
    ],
    supportSlugs: [],
    plannedSlugs: [
      "facebook-profile-vs-business-manager-vs-ad-account",
      "meta-business-manager-ownership",
      "meta-agency-access-security",
    ],
    priority: "P2",
  },
  {
    id: "seo-services",
    name: "SEO",
    intro:
      "SEO management and local SEO for projects that need organic visibility alongside paid infrastructure.",
    moneyPages: [
      { href: "/services/seo-management", title: "SEO Management" },
      { href: "/services/local-seo", title: "Local SEO" },
      { href: "/free-seo-report", title: "Free SEO Report" },
    ],
    supportSlugs: [],
    plannedSlugs: [
      "local-seo-guide",
      "google-business-profile-optimization",
      "local-citations-guide",
      "local-seo-audit",
    ],
    priority: "P3",
  },
];

export function getClusterById(id: SeoClusterId): SeoCluster | undefined {
  return SEO_CLUSTERS.find((c) => c.id === id);
}

export function getClusterForResourceSlug(slug: string): SeoCluster | undefined {
  return SEO_CLUSTERS.find((c) => c.supportSlugs.includes(slug));
}

export function getClusterForPath(path: string): SeoCluster | undefined {
  const normalized = path.split("?")[0];
  return SEO_CLUSTERS.find(
    (c) =>
      c.pillarPath === normalized ||
      c.moneyPages.some((m) => m.href === normalized) ||
      (normalized.startsWith("/resources/") &&
        c.supportSlugs.includes(normalized.replace("/resources/", ""))),
  );
}
