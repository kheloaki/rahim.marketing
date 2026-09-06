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

const path = "/facebook-unban-services";
const schema = otherPageSchemas["facebook-unban-services"];
const breadcrumbs = getBreadcrumbs(path, "Restriction Review");

export const metadata: Metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path,
  image: "/images/service-unban.jpg",
});

const faqs = [
  {
    question: "Can you guarantee my account will be restored?",
    answer:
      "No. Restoration is never guaranteed. We review the situation, advise on appeal or escalation where appropriate, and plan continuity if the original account cannot be restored.",
  },
  {
    question: "What restriction types do you review?",
    answer:
      "Ad account, Page, Business Manager, payment, and policy-related advertising limits — depending on what you can share and what is visible in the notice.",
  },
  {
    question: "Do I need to share my Facebook password?",
    answer: "No. Never share your personal Facebook password. We work through Business Manager permissions.",
  },
  {
    question: "What if the account cannot be restored?",
    answer:
      "We help protect tracking and assets where architecture allows, and discuss legitimate rebuild or agency infrastructure options.",
  },
];

export default function FacebookUnbanServicesPage() {
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
                Account recovery support
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Facebook Ad Account Restricted? Get a Professional Review
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-[680px]">
                Facebook / Meta ad account restriction recovery &amp; review — escalation where
                appropriate, continuity planning when restoration is not guaranteed.
              </p>
              <Link
                href="/request-access?service=restriction-review"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold"
              >
                Request a restriction review
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-5 lg:px-10 max-w-[860px] space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">
                  Different restriction types
                </h2>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  Limits can hit ad accounts, Pages, Business Managers, users, or payment methods.
                  Treating every notice as a simple “unban” request misses the real dependency map.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">What Rahim can review</h2>
                <ul className="space-y-2 text-[#0a0612]/80">
                  {[
                    "The restriction notice and affected assets",
                    "Whether an appeal or escalation path may be appropriate",
                    "Business Manager / Page / pixel dependencies",
                    "How to protect tracking while you decide next steps",
                    "When rebuilding is wiser than forcing restoration",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-5 h-5 text-[#E44F71] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">
                  Recovery is not guaranteed
                </h2>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  Some restrictions are reversed after review. Many are not. We will be direct about
                  likelihood based on what we can see — and help you plan continuity either way.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">
                  Information we need
                </h2>
                <ul className="space-y-2 text-[#0a0612]/80">
                  {[
                    "Screenshots of the restriction notice",
                    "Which assets are affected",
                    "Offer / vertical context",
                    "Current Business Manager access you can grant",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-5 h-5 text-[#E44F71] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} title="Restriction review FAQ" subtitle="Honest answers about Meta restriction support." />
          <RelatedResources
            links={[
              {
                href: "/services/health-assessment-service",
                title: "Meta Ad Account Health Audit",
              },
              {
                href: "/resources/meta-ad-account-appeal-guide",
                title: "Legitimate Meta appeal process",
              },
              {
                href: "/resources/facebook-ad-account-restricted",
                title: "Facebook Ad Account Restricted? What to Do Next",
              },
              {
                href: "/resources/meta-business-manager-restricted",
                title: "Business Manager restricted",
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
