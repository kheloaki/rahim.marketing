import type { Metadata } from "next";
import ServiceLanding from "@/components/pages/service-landing";
import { productPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { buildPageMetadata } from "@/lib/seo";

const schema = productPageSchemas["buy-facebook-pages"];

export const metadata: Metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path: "/products/buy-facebook-pages",
});

export default function BuyFacebookPagesPage() {
  return (
    <ServiceLanding
      pageType="product"
      path="/products/buy-facebook-pages"
      schema={schema}
      breadcrumbs={getBreadcrumbs("/products/buy-facebook-pages", "Buy Facebook Pages")}
      title="Buy Facebook"
      highlight="Pages"
      description="Premium aged Facebook pages with established history, engagement, and a clean structure ready for ads and brand presence."
      bullets={["Aged page history", "Ready for ads", "Brand-ready setup", "Instant delivery"]}
      image="/images/service-pages.jpg"
      imageAlt="Rahim Marketing Facebook pages"
      faqs={[
        { question: "What kind of pages do you provide?", answer: "Aged business pages with a clean history, ready to connect to a Business Manager and run ads." },
        { question: "Can I brand the page as my own?", answer: "Yes. After delivery we help you transfer ownership and update branding, assets, and pixel setup." },
        { question: "How fast is delivery?", answer: "Most pages are delivered within 24 hours after approval. Priority onboarding is available on Platinum." },
      ]}
    />
  );
}
