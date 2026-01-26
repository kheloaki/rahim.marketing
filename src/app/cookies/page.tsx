import ComingSoon from "@/components/coming-soon";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";

export default function CookiesPage() {
  const schemaData = otherPageSchemas["cookies"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          ...schemaData,
          path: "/cookies",
          breadcrumbs: getBreadcrumbs("/cookies", "Cookie Settings"),
        }}
      />
      <ComingSoon 
        title="Cookie Settings" 
        description="Manage your cookie preferences and privacy settings. This page is launching soon."
      />
    </>
  );
}