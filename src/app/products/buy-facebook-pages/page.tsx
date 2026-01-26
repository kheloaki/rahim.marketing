import ComingSoon from "@/components/coming-soon";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { productPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";

export default function BuyFacebookPagesPage() {
  const schemaData = productPageSchemas["buy-facebook-pages"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="product"
        data={{
          ...schemaData,
          path: "/products/buy-facebook-pages",
          breadcrumbs: getBreadcrumbs("/products/buy-facebook-pages", "Buy Facebook Pages"),
        }}
      />
      <ComingSoon 
        title="Buy Facebook Pages" 
        description="Premium aged Facebook pages with established history and engagement. This product is launching soon."
      />
    </>
  );
}