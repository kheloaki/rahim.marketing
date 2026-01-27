import ComingSoon from "@/components/coming-soon";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";

export default function HealthAssessmentPage() {
  const schemaData = otherPageSchemas["health-assessment-service"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="service"
        data={{
          ...schemaData,
          path: "/services/health-assessment-service",
          breadcrumbs: getBreadcrumbs("/services/health-assessment-service", "Account Health Assessment"),
        }}
      />
    <ComingSoon 
      title="Account Health Assessment" 
      description="Get a comprehensive analysis of your ad account health with actionable recommendations. This service is launching soon."
    />
    </>
  );
}