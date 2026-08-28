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
      breadcrumbs={getBreadcrumbs("/services/facebook-feedback-score", "Facebook Feedback Score Boost")}
      kicker="PAGE REPUTATION"
      title="Feedback Score"
      highlight="Boost"
      description="Improve your Facebook page feedback score to unlock better delivery, lower CPMs, and more stable account health."
      bullets={["Score diagnosis", "Reputation recovery plan", "Review quality workflow", "Ongoing monitoring"]}
      image="/images/service-feedback.jpg"
      imageAlt="Rahim Marketing feedback score service"
      faqs={[
        { question: "Why does feedback score matter?", answer: "A weak page score can raise CPMs, limit delivery, and increase restriction risk. A healthier score usually means cheaper, more stable ads." },
        { question: "How do you improve the score?", answer: "We audit page quality, hide or address negative feedback, tighten creative and landing-page experience, and monitor the score as ads run." },
        { question: "How soon will I see a change?", answer: "Early movement can appear within 1–2 weeks. Lasting improvement depends on spend volume and creative quality." },
      ]}
    />
  );
}
