import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CTABanner from "@/components/sections/cta-banner";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { RelatedResources } from "@/components/seo/related-resources";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { buildPageMetadata } from "@/lib/seo";
import { getClusterById } from "@/data/seo-clusters";

const path = "/services/agency-ad-accounts";

export const metadata: Metadata = buildPageMetadata({
  title: "Agency Ad Accounts | Advertising Infrastructure Across Platforms | Rahim Marketing",
  description:
    "What agency ad accounts are, how access and billing usually work, and how to choose Meta, Google, TikTok, Microsoft, Taboola, or Outbrain agency infrastructure.",
  path,
  keywords: [
    "agency ad accounts",
    "advertising agency accounts",
    "agency advertising accounts",
  ],
  image: "/images/service-accounts.jpg",
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services/agency-ad-accounts" },
  { name: "Agency Ad Accounts", url: path },
];

const platforms = getClusterById("agency-ad-accounts")!.moneyPages;

const evaluateItems = [
  "Written scope for ownership, permissions, and exit/revocation",
  "Eligibility review before opening spend capacity",
  "Billing and top-up mechanics that match the account type",
  "Tracking ownership guidance (Pixel/Dataset or platform equivalents)",
  "Honest talk about restrictions — no immunity claims",
  "Support path when a spend node is limited or needs replacement",
];

export default function AgencyAdAccountsPillarPage() {
  return (
    <>
      <ComprehensiveSchema
        pageType="service"
        data={{
          title: "Agency Ad Accounts",
          description:
            "Cross-platform agency advertising account infrastructure with clear access, billing, and continuity considerations.",
          path,
          serviceType: "Advertising Infrastructure",
          breadcrumbs,
          image: "/images/service-accounts.jpg",
          services: platforms.map((p) => ({
            name: p.title,
            url: p.href,
            description: "Platform-specific agency ad account service",
            itemType: "Service",
          })),
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="relative overflow-hidden bg-[#0a0612] pt-16 pb-20">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="container relative z-10 mx-auto px-5 lg:px-10 max-w-[900px]">
              <PageBreadcrumbs items={breadcrumbs} />
              <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">
                Advertising infrastructure
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                Agency Ad Accounts
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-[720px]">
                Agency ad accounts are structured advertising access — permissions, billing, and
                operational support — rather than a personal self-serve account alone. Platform
                policies still apply. Use this page to understand the model, then open the platform
                page that matches where you actually buy media.
              </p>
            </div>
          </section>

          <article className="bg-white py-16 lg:py-20">
            <div className="container mx-auto px-5 lg:px-10 max-w-[900px] space-y-14">
              <section>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-4">What agency ad accounts are</h2>
                <p className="text-[#0a0612]/80 leading-relaxed mb-4">
                  In industry language, an agency ad account usually means advertising spend
                  infrastructure provisioned or partnered through an agency: documented Business
                  Manager (or equivalent) access, clearer billing workflows, and support when
                  operational issues appear. It is not a separate advertising rulebook. Meta, Google,
                  TikTok, Microsoft Advertising, Taboola, and Outbrain each enforce their own policies
                  on the activity you run.
                </p>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  This pillar page stays platform-agnostic on purpose. Deep Meta, Google, or TikTok
                  details live on those money pages so search intent and on-page relevance stay clean.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-4">How access generally works</h2>
                <p className="text-[#0a0612]/80 leading-relaxed mb-4">
                  Legitimate setups grant access through the platform’s official permission systems —
                  partner invites, user roles, Business Manager / Business Center / MCC-style
                  hierarchy — not by sharing personal login passwords. You operate campaigns inside
                  the platform UI under the roles you were granted.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#0a0612]/80">
                  <li>Eligibility or offer review before capacity is opened</li>
                  <li>Role-based access with a written owner map for assets</li>
                  <li>Funding and top-up paths confirmed for that account type</li>
                  <li>Escalation path when a spend node is limited or needs replacement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-4">
                  Agency vs self-serve accounts
                </h2>
                <p className="text-[#0a0612]/80 leading-relaxed mb-4">
                  Self-serve accounts fit many teams: you create the account, attach payment, and
                  run. Agency structures become useful when spend capacity, multi-brand architecture,
                  funding workflows, replacement support, or continuity after a limited node matter
                  more than owning every spend node yourself.
                </p>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  Neither model is immune from restrictions, payment failures, or creative rejects.
                  The useful comparison is process and ownership clarity — not marketing claims about
                  bypassing platform enforcement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-4">
                  Ownership, permissions, billing, and tracking
                </h2>
                <p className="text-[#0a0612]/80 leading-relaxed mb-4">
                  Before you scale, write down who owns the manager account, pages/assets, domains,
                  and measurement (Pixel/Dataset, Google tags, TikTok pixel, etc.), how partners are
                  invited, and how access is revoked when the engagement ends.
                </p>
                <p className="text-[#0a0612]/80 leading-relaxed mb-4">
                  Billing may use your card, an agency payment profile, prepaid top-ups, or a hybrid.
                  Confirm currency, lead times, and what happens to balance if a node is limited.
                </p>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  Tracking should outlive a single fragile spend account where the platform allows
                  it. That usually means owning the primary measurement asset in a durable business
                  entity — not leaving the only conversion destination tied to a disposable node.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-4">Who they are for — and limits</h2>
                <p className="text-[#0a0612]/80 leading-relaxed mb-4">
                  Agency infrastructure is typically a fit for advertisers with material spend,
                  multi-market or multi-brand complexity, or a need for structured support. It is a
                  weak fit if the offer is not eligible under current platform policies, if you need
                  guarantees of approval or restoration, or if you refuse to document ownership.
                </p>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  Continuity support, when included, helps with operational response. It does not
                  rewrite policies or guarantee outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-4">How to evaluate a provider</h2>
                <ul className="space-y-3">
                  {evaluateItems.map((item) => (
                    <li key={item} className="flex gap-3 text-[#0a0612]/80">
                      <Check className="w-5 h-5 text-[#E44F71] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-6">Choose a platform</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {platforms.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="group flex items-center justify-between rounded-xl border border-[#0a0612]/10 px-4 py-3 text-[#0a0612] hover:border-[#E44F71]/50 transition-colors"
                    >
                      <span className="font-medium">{p.title}</span>
                      <ArrowRight className="w-4 h-4 text-[#0a0612]/40 group-hover:text-[#E44F71]" />
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </article>

          <RelatedResources
            variant="dark"
            title="Related reading"
            links={[
              {
                href: "/resources/meta-agency-ad-account-guide",
                title: "What is a Meta agency ad account?",
                description: "Deep dive on Meta agency infrastructure",
              },
              {
                href: "/resources/meta-agency-account-vs-standard-ad-account",
                title: "Agency vs standard Meta accounts",
                description: "When self-serve is enough vs agency structure",
              },
              {
                href: "/resources",
                title: "All resources",
                description: "Guides by cluster",
              },
              {
                href: "/request-access",
                title: "Request access",
                description: "Eligibility review before onboarding",
              },
            ]}
          />
          <CTABanner />
        </div>
        <Footer />
      </main>
    </>
  );
}
