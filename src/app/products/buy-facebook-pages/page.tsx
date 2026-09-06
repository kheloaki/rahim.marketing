import type { Metadata } from "next";
import ServiceLanding from "@/components/pages/service-landing";
import { productPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { buildPageMetadata } from "@/lib/seo";

const schema = productPageSchemas["buy-facebook-pages"];
const path = "/products/buy-facebook-pages";

export const metadata: Metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path,
  noIndex: true,
});

export default function BuyFacebookPagesPage() {
  return (
    <ServiceLanding
      pageType="product"
      path={path}
      schema={schema}
      breadcrumbs={getBreadcrumbs(path, "Buy Facebook Pages")}
      kicker="Coming soon"
      title="Buy Facebook"
      highlight="Pages"
      description="Facebook Pages product is coming soon. If you need Pages as part of a Meta advertising setup, request access and we will confirm options."
      bullets={[
        "Coming soon product page",
        "Request access for setup needs",
        "Pair with Business Manager planning",
        "No fabricated inventory claims",
      ]}
      image="/images/service-pages.jpg"
      imageAlt="Facebook Pages — coming soon"
      comingSoon
      showAgencyStack={false}
      faqs={[
        {
          question: "When will Pages be available?",
          answer:
            "This product is not yet listed for general purchase. Contact us if Pages are required as part of an approved Meta infrastructure setup.",
        },
        {
          question: "Can I still get Pages with an agency setup?",
          answer:
            "Sometimes Pages are included as part of a broader Meta structure. Request access and describe what you need.",
        },
      ]}
    />
  );
}
