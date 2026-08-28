import type { Metadata } from "next";
import ServiceLanding from "@/components/pages/service-landing";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { buildPageMetadata } from "@/lib/seo";

const schema = otherPageSchemas["health-assessment-service"];

export const metadata: Metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path: "/services/health-assessment-service",
});

export default function HealthAssessmentPage() {
  return (
    <ServiceLanding
      pageType="service"
      path="/services/health-assessment-service"
      schema={schema}
      breadcrumbs={getBreadcrumbs("/services/health-assessment-service", "Account Health Assessment")}
      kicker="DIAGNOSTICS"
      title="Account Health"
      highlight="Assessment"
      description="A full review of your ad account health: restrictions, spend limits, pixel setup, and risk before you scale."
      bullets={["Restriction and limit audit", "Pixel and BM structure review", "Spend-readiness score", "Written action plan"]}
      image="/images/service-health.jpg"
      imageAlt="Rahim Marketing account health assessment"
      faqs={[
        { question: "What do I get in the assessment?", answer: "A written report covering account status, likely restriction causes, structure issues, and a prioritized fix list." },
        { question: "Do I need to share login access?", answer: "We only need the access required to inspect ads manager, Business Manager, and pixels. Credentials are never stored." },
        { question: "Can this prevent a ban?", answer: "It cannot guarantee it, but catching health issues early is the fastest way to avoid a shutdown while scaling." },
      ]}
    />
  );
}
