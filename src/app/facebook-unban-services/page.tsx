import ComingSoon from "@/components/coming-soon";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";

export default function FacebookUnbanPage() {
  const schemaData = otherPageSchemas["facebook-unban-services"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="service"
        data={{
          ...schemaData,
          path: "/facebook-unban-services",
          breadcrumbs: getBreadcrumbs("/facebook-unban-services", "Facebook Unban Service"),
        }}
      />
    <ComingSoon 
      title="Facebook Unban Service" 
      description="Professional account recovery and unban services for restricted Facebook ad accounts. This service is launching soon."
    />
    </>
  );
}