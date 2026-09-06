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
import { productPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { buildPageMetadata } from "@/lib/seo";

const path = "/products/buy-facebook-business-managers";
const schema = productPageSchemas["buy-facebook-business-managers"];
const breadcrumbs = getBreadcrumbs(path, "Facebook Business Managers");

export const metadata: Metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path,
});

const faqs = [
  {
    question: "What is a Business Manager?",
    answer:
      "Meta Business Manager is the control layer for Pages, ad accounts, pixels/datasets, domains, and people permissions used in advertising operations.",
  },
  {
    question: "What is delivered?",
    answer:
      "A Business Manager setup suitable for advertising workflows, with ownership/access transfer steps confirmed at fulfillment. Exact configuration depends on the package you request.",
  },
  {
    question: "How do Pages, Pixels, and ad accounts relate?",
    answer:
      "A BM can hold or request access to Pages, ad accounts, and datasets. Clear ownership of each asset matters for continuity when spend nodes change.",
  },
  {
    question: "Is this the same as an agency ad account subscription?",
    answer:
      "No. This page is about Business Managers as an asset. For ongoing Meta agency ad account infrastructure, see the Facebook Agency Ad Accounts service.",
  },
];

export default function BuyFacebookBusinessManagersPage() {
  return (
    <>
      <ComprehensiveSchema
        pageType="product"
        data={{
          title: schema.title,
          description: schema.description,
          path,
          price: schema.price,
          breadcrumbs,
          faqs,
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="bg-[#0a0612] pt-16 pb-20">
            <div className="container mx-auto px-5 lg:px-10 max-w-[900px]">
              <PageBreadcrumbs items={breadcrumbs} />
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
                Facebook Business Managers
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-[680px]">
                Business Manager setup for advertising operations — ownership, Pages, Pixels, ad
                accounts, access, and delivery — without unrelated monthly agency subscription copy.
              </p>
              <Link
                href="/request-access?service=business-managers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold"
              >
                Request pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
          <section className="py-16 bg-white">
            <div className="container mx-auto px-5 lg:px-10 max-w-[860px] space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-3">Legitimate use</h2>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  Business Managers exist to organize advertising assets and permissions. We support
                  legitimate operational use — not policy circumvention.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-3">Security &amp; access</h2>
                <ul className="space-y-2 text-[#0a0612]/80">
                  {[
                    "Transfer and permission steps documented at delivery",
                    "Never share personal Facebook passwords with vendors",
                    "Review admin roles after handoff",
                    "Separate durable tracking assets from spend nodes when possible",
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
          <FAQSection faqs={faqs} title="Business Manager FAQ" />
          <RelatedResources
            links={[
              {
                href: "/resources/meta-business-manager-restricted",
                title: "Meta Business Manager Restricted",
              },
              {
                href: "/services/facebook-agency-ad-account",
                title: "Facebook Agency Ad Accounts",
              },
              {
                href: "/services/health-assessment-service",
                title: "Meta Ad Account Health Audit",
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
