import type { Metadata } from "next";
import { ResourceHubPage } from "@/components/pages/resource-hub-page";
import { buildPageMetadata } from "@/lib/seo";
import { getResourceGuide } from "@/data/resource-guides";

const path = "/resources/google-ads";

export const metadata: Metadata = buildPageMetadata({
  title: "Google Ads Resources | Agency Accounts, MCC & Suspensions | Rahim Marketing",
  description:
    "Practical Google Ads guides on agency accounts, Manager Accounts (MCC), billing structure, and what to do when an account is suspended.",
  path,
  keywords: ["google ads agency account", "google ads manager account", "google ads account suspended"],
  image: "/images/blog-benchmarks.jpg",
});

const guideSlugs = [
  "google-ads-agency-account-guide",
  "google-ads-account-suspended",
  "google-ads-manager-account-vs-agency-account",
  "google-ads-billing-account-structure",
] as const;

export default function GoogleAdsResourcesHubPage() {
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
      category="Google Ads"
      title="Google Ads"
      metaTitle="Google Ads Resources | Agency Accounts, MCC & Suspensions | Rahim Marketing"
      description="Practical Google Ads guides on agency accounts, Manager Accounts, billing, and suspensions."
      h1="Google Ads resources"
      subtitle="Agency account infrastructure, Manager Account (MCC) relationships, billing hierarchy, and legitimate next steps when an account is suspended — written for advertisers who already buy media."
      image="/images/blog-benchmarks.jpg"
      moneyPage={{
        href: "/services/google-ads-agency-account",
        title: "Google Ads Agency Accounts",
        description: "Commercial Google Ads agency account infrastructure",
      }}
      guides={guides}
      sections={[
        {
          heading: "How Google Ads account architecture usually works",
          paragraphs: [
            "Most Google Ads setups involve an advertising account where campaigns run, a payments profile that funds spend, and optionally a Manager Account (MCC) that links one or more client accounts for oversight. Agency infrastructure sits on top of that model: access is granted through Google’s official invitation and role systems, billing may be agency-controlled or client-controlled depending on the plan, and operational support is defined by contract — not by a separate Google rulebook.",
            "Google Ads policies still apply to what you advertise, where traffic lands, and how the account behaves. Agency access does not create a policy exemption.",
          ],
        },
        {
          heading: "When agency infrastructure is relevant",
          paragraphs: [
            "Self-serve Google Ads accounts are enough for many teams. Agency structures become useful when spend continuity, funding workflows, multi-account operations, or replacement/support paths matter more than owning every advertising account yourself — and when a provider reviews offer eligibility before opening capacity.",
            "If your goal is guaranteed delivery for a non-compliant offer, agency access will not solve that. Fix destination, claims, and account integrity first.",
          ],
          bullets: [
            "Clarify who owns the MCC, advertising accounts, and payments profile",
            "Confirm how top-ups, invoices, and currency work before launch",
            "Map conversion tracking ownership so measurement survives account changes",
            "Document who can invite users and how access is revoked",
          ],
        },
        {
          heading: "Suspensions, billing, and access",
          paragraphs: [
            "Account suspension is different from an ad or keyword disapproval. Suspensions typically block spend across the account until Google completes a review or the underlying issue is resolved. Common pressure points include payments profile problems, policy and account-integrity flags, and destination quality issues.",
            "Start with diagnosis: read the notice, freeze risky relaunches of the same rejected setup, and separate billing failures from policy problems. Appeals exist for legitimate cases; outcomes are not guaranteed.",
          ],
        },
      ]}
      related={[
        {
          href: "/services/google-ads-agency-account",
          title: "Google Ads Agency Accounts",
          description: "Request structured Google Ads agency access",
        },
        {
          href: "/blog/google-ads-benchmarks-2026",
          title: "Google Ads benchmarks (2026)",
          description: "CPC, CTR, CPA reference ranges by industry",
        },
        {
          href: "/services/agency-ad-accounts",
          title: "Agency Ad Accounts overview",
          description: "Cross-platform agency account model",
        },
      ]}
      cta={{ href: "/request-access?service=google", label: "Request Google Ads access" }}
    />
  );
}
