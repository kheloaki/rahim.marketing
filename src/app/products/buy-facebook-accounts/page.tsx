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

const path = "/products/buy-facebook-accounts";
const schema = productPageSchemas["buy-facebook-accounts"];
const breadcrumbs = getBreadcrumbs(path, "Buy Facebook Accounts");

export const metadata: Metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path,
});

const faqs = [
  {
    question: "What are you offering?",
    answer:
      "Facebook accounts intended for legitimate advertising workflows. Characteristics, access method, and limitations are confirmed during fulfillment — we do not promise policy immunity.",
  },
  {
    question: "What is the intended use?",
    answer:
      "Operational advertising and Business Manager workflows where an additional profile is needed. Misuse or policy circumvention is not supported.",
  },
  {
    question: "How is access delivered?",
    answer:
      "Secure handoff of credentials or access instructions after approval. Change passwords and enable 2FA immediately after delivery.",
  },
  {
    question: "Do you sell agency subscription pricing here?",
    answer:
      "No. This page is about Facebook accounts as a product. For Meta agency ad account infrastructure, see the Facebook Agency Ad Accounts service.",
  },
];

export default function BuyFacebookAccountsPage() {
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
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">Buy Facebook Accounts</h1>
              <p className="text-lg text-white/70 mb-8 max-w-[680px]">
                Facebook accounts for legitimate advertising operations — characteristics, access,
                security expectations, and limitations explained without unrelated agency
                subscription copy.
              </p>
              <Link
                href="/request-access?service=facebook-accounts"
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
                <h2 className="text-2xl font-bold text-[#0a0612] mb-3">What is included</h2>
                <ul className="space-y-2 text-[#0a0612]/80">
                  {[
                    "Account characteristics confirmed before delivery",
                    "Secure access handoff",
                    "Guidance to secure the account after delivery",
                    "Support for legitimate Business Manager connection workflows",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-5 h-5 text-[#E44F71] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-3">Limitations</h2>
                <p className="text-[#0a0612]/80 leading-relaxed">
                  Platform policies still apply. Accounts can face limits or restrictions. Pricing is
                  provided on request for the specific profile type you need — this page does not
                  reuse Meta agency monthly plans.
                </p>
              </div>
            </div>
          </section>
          <FAQSection faqs={faqs} title="Facebook accounts FAQ" />
          <RelatedResources
            links={[
              {
                href: "/services/facebook-agency-ad-account",
                title: "Facebook Agency Ad Accounts",
              },
              {
                href: "/products/buy-facebook-business-managers",
                title: "Facebook Business Managers",
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
