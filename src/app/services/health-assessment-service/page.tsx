import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import FAQSection from "@/components/sections/faq-section";
import CTABanner from "@/components/sections/cta-banner";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { RelatedResources } from "@/components/seo/related-resources";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { buildPageMetadata } from "@/lib/seo";

const path = "/services/health-assessment-service";
const schema = otherPageSchemas["health-assessment-service"];
const breadcrumbs = getBreadcrumbs(path, "Meta Ad Account Health Audit");

export const metadata: Metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path,
  image: "/images/service-health.jpg",
});

const inspectItems = [
  "Account status and visible restriction notices",
  "Business Manager health and dependencies",
  "Admin / partner permissions",
  "Page dependencies and Page quality signals",
  "Domain verification and consistency",
  "Pixel / Dataset ownership",
  "Conversions API destinations where applicable",
  "Billing and spend limitations",
  "Policy and account-quality signals visible to the client",
];

const faqs = [
  {
    question: "What is a Meta ad account health audit?",
    answer:
      "A structured review of restrictions, Business Manager dependencies, tracking, permissions, and scaling risk before you increase spend — delivered as prioritized recommendations.",
  },
  {
    question: "Do you need my Facebook password?",
    answer:
      "No. We never need your personal Facebook password. Access is reviewed through Business Manager permissions you control.",
  },
  {
    question: "Can an audit guarantee I will not be restricted?",
    answer:
      "No. An audit reduces blind spots and clarifies next steps. Meta can still restrict assets. We do not promise immunity.",
  },
  {
    question: "What do I receive?",
    answer:
      "A prioritized action plan covering what looks healthy, what is at risk, and recommended next steps — including whether agency infrastructure, appeal, or restructuring is appropriate.",
  },
];

export default function HealthAssessmentPage() {
  return (
    <>
      <ComprehensiveSchema
        pageType="service"
        data={{
          title: schema.title,
          description: schema.description,
          path,
          serviceType: schema.serviceType,
          breadcrumbs,
          faqs,
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
                Diagnostics
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Meta Ad Account Health Audit
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-[680px]">
                Review restrictions, Business Manager dependencies, tracking, permissions and
                scaling risk before increasing spend.
              </p>
              <Link
                href="/request-access?service=health-assessment"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold"
              >
                Request Meta Account Health Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-5 lg:px-10 max-w-[860px] space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">
                  What an account health audit is
                </h2>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  A standalone diagnostic service. We inspect the assets you can share access to,
                  identify structural and policy-adjacent risks visible to you, and produce a
                  prioritized action plan. This is not a generic agency-account sales page.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">When you need one</h2>
                <ul className="space-y-2 text-[#0a0612]/80">
                  {[
                    "Before a major spend increase",
                    "After a restriction or repeated rejections",
                    "When Business Manager, Pages, and pixels feel tangled",
                    "When you are unsure whether to appeal or rebuild",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-5 h-5 text-[#E44F71] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">What we inspect</h2>
                <ul className="grid sm:grid-cols-2 gap-3 text-[#0a0612]/80">
                  {inspectItems.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-5 h-5 text-[#E44F71] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">
                  Access required
                </h2>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  We work through Business Manager permissions you grant and can revoke.{" "}
                  <strong>We never need your personal Facebook password.</strong>
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">
                  What you receive
                </h2>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  A prioritized action plan and recommended next steps — which may include appeal
                  paths, infrastructure changes, or pausing an offer that is not eligible.
                </p>
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} title="Health audit FAQ" subtitle="What the audit covers — and what it does not promise." />
          <RelatedResources
            links={[
              {
                href: "/resources/meta-account-health-checklist",
                title: "Meta account health checklist",
              },
              {
                href: "/resources/meta-ad-account-appeal-guide",
                title: "Meta ad account appeal guide",
              },
              {
                href: "/facebook-unban-services",
                title: "Restriction review & recovery support",
              },
              {
                href: "/resources/facebook-ad-account-restricted",
                title: "Facebook ad account restricted?",
              },
              {
                href: "/resources/meta-page-restricted",
                title: "Meta Page restricted",
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
