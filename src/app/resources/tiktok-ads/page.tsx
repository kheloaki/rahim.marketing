import type { Metadata } from "next";
import { ResourceHubPage } from "@/components/pages/resource-hub-page";
import { buildPageMetadata } from "@/lib/seo";
import { getResourceGuide } from "@/data/resource-guides";

const path = "/resources/tiktok-ads";

export const metadata: Metadata = buildPageMetadata({
  title: "TikTok Ads Resources | Agency Accounts, Business Center & Access | Rahim Marketing",
  description:
    "Practical TikTok Ads guides on agency accounts, Business Center vs ad accounts, access permissions, and what to do when an account is suspended.",
  path,
  keywords: [
    "tiktok agency account",
    "tiktok business center",
    "tiktok ad account suspended",
  ],
  image: "/images/service-accounts.jpg",
});

const guideSlugs = [
  "tiktok-agency-account-guide",
  "tiktok-ad-account-suspended",
  "tiktok-business-center-vs-agency-account",
  "tiktok-ad-account-access-permissions",
] as const;

export default function TikTokAdsResourcesHubPage() {
  const guides = guideSlugs.map((slug) => {
    const g = getResourceGuide(slug)!;
    return {
      href: `/resources/${slug}`,
      title: g.title,
      description: g.description,
    };
  });

  return (
    <ResourceHubPage
      path={path}
      category="TikTok Ads"
      title="TikTok Ads"
      metaTitle="TikTok Ads Resources | Agency Accounts, Business Center & Access | Rahim Marketing"
      description="Practical TikTok Ads guides on agency accounts, Business Center, permissions, and suspensions."
      h1="TikTok Ads resources"
      subtitle="Business Center architecture, agency-managed ad accounts, partner permissions, billing, and legitimate next steps when TikTok limits advertising — without password sharing or policy circumvention."
      image="/images/service-accounts.jpg"
      moneyPage={{
        href: "/services/tiktok-agency-account",
        title: "TikTok Agency Ad Accounts",
        description: "Commercial TikTok agency advertising infrastructure",
      }}
      guides={guides}
      sections={[
        {
          heading: "TikTok advertising structure in plain terms",
          paragraphs: [
            "TikTok Ads Manager campaigns run inside ad accounts that usually sit under a Business Center. The Business Center holds assets, users, and partner relationships. Agency setups typically grant advertiser or admin access through Business Center invitations — not by asking for a personal TikTok login password.",
            "Billing, pixel/events tracking, and identity verification still matter. Agency infrastructure changes who provisions and supports the account; it does not rewrite TikTok Advertising Policies.",
          ],
        },
        {
          heading: "Business Center, agency access, and ownership",
          paragraphs: [
            "A Business Center is the container. An ad account is the spend node. Agency-managed infrastructure means an agency provisions or partners into that spend node and documents your role level, billing path, and support scope.",
            "Before you scale, write down who owns the Business Center, who owns the ad account during and after the engagement, how partners are invited, and how access is revoked. Ambiguity here creates the messiest offboarding problems.",
          ],
          bullets: [
            "Use official Business Center roles and partner access only",
            "Never share personal TikTok or email passwords with an agency",
            "Confirm billing currency, top-ups, and what happens if a node is limited",
            "Own measurement events in a durable asset where the platform allows it",
          ],
        },
        {
          heading: "Suspensions and restrictions",
          paragraphs: [
            "TikTok may limit a campaign, an ad account, or broader Business Center assets. Creative and destination issues are not the same as account-level suspensions. Read the notice, stop relaunching the same rejected setup unchanged, and separate verification or billing problems from policy problems.",
            "Legitimate review and appeal paths exist in some cases. Restoration is never guaranteed. Circumvention tactics increase long-term risk.",
          ],
        },
      ]}
      related={[
        {
          href: "/services/tiktok-agency-account",
          title: "TikTok Agency Ad Accounts",
          description: "Request structured TikTok agency access",
        },
        {
          href: "/services/agency-ad-accounts",
          title: "Agency Ad Accounts overview",
          description: "Cross-platform agency account model",
        },
        {
          href: "/resources",
          title: "All resources",
          description: "Guides by cluster",
        },
      ]}
      cta={{ href: "/request-access?service=tiktok", label: "Request TikTok Ads access" }}
    />
  );
}
