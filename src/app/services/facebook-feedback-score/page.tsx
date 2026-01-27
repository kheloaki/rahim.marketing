import ComingSoon from "@/components/coming-soon";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";

export default function FacebookFeedbackScorePage() {
  const schemaData = otherPageSchemas["facebook-feedback-score"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="service"
        data={{
          ...schemaData,
          path: "/services/facebook-feedback-score",
          breadcrumbs: getBreadcrumbs("/services/facebook-feedback-score", "Facebook Feedback Score Boost"),
        }}
      />
    <ComingSoon 
      title="Facebook Feedback Score Boost" 
      description="Improve your Facebook page feedback score to unlock better ad performance and lower costs. This service is launching soon."
    />
    </>
  );
}