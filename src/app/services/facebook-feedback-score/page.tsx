import type { Metadata } from "next";
import ServiceLanding from "@/components/pages/service-landing";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { buildPageMetadata } from "@/lib/seo";

const schema = otherPageSchemas["facebook-feedback-score"];

export const metadata: Metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path: "/services/facebook-feedback-score",
});

export default function FacebookFeedbackScorePage() {
  return (
    <ServiceLanding
      pageType="service"
      path="/services/facebook-feedback-score"
      schema={schema}
      breadcrumbs={getBreadcrumbs("/services/facebook-feedback-score", "Facebook Feedback Score")}
      kicker="PAGE REPUTATION"
      title="Feedback Score"
      highlight="Review"
      description="Support reviewing and improving Facebook page feedback signals that can affect delivery and costs — without guaranteed score outcomes."
      bullets={[
        "Score diagnosis",
        "Reputation recovery plan",
        "Creative & landing review",
        "Ongoing monitoring guidance",
      ]}
      image="/images/service-feedback.jpg"
      imageAlt="Rahim Marketing feedback score review"
      showAgencyStack={false}
      faqs={[
        {
          question: "Why does feedback score matter?",
          answer:
            "Weak page feedback can correlate with harder delivery and higher costs. Improving signals may help stability, but results vary and are not guaranteed.",
        },
        {
          question: "How do you approach improvement?",
          answer:
            "We review page quality, feedback patterns, creative and landing-page experience, and monitor changes as ads run.",
        },
        {
          question: "How soon will I see a change?",
          answer:
            "Timelines vary with spend volume and creative quality. We set expectations during onboarding rather than promising fixed dates.",
        },
      ]}
    />
  );
}
