import type { Metadata } from "next";
import ServiceLanding from "@/components/pages/service-landing";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { buildPageMetadata } from "@/lib/seo";

const schema = otherPageSchemas["facebook-unban-services"];

export const metadata: Metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path: "/facebook-unban-services",
});

export default function FacebookUnbanPage() {
  return (
    <ServiceLanding
      pageType="service"
      path="/facebook-unban-services"
      schema={schema}
      breadcrumbs={getBreadcrumbs("/facebook-unban-services", "Facebook Unban Service")}
      kicker="ACCOUNT RECOVERY"
      title="Facebook Unban"
      highlight="Service"
      description="Professional recovery for restricted Facebook ad accounts. We work with platform reps to restore access and get campaigns back online."
      bullets={["Restricted account review", "Rep-level escalation", "Pixel and campaign continuity", "Replacement if unban is not possible"]}
      image="/images/service-unban.jpg"
      imageAlt="Rahim Marketing account recovery"
      faqs={[
        { question: "Can every banned account be recovered?", answer: "Not always. We audit the restriction first. If recovery is unlikely, we recommend a replacement account so spend does not sit idle." },
        { question: "How long does recovery take?", answer: "Simple policy appeals can complete in 24–72 hours. Complex cases take longer; we keep you updated throughout." },
        { question: "Will I lose my pixel?", answer: "We prioritize structures that keep pixel and audience data intact, or we migrate them to a replacement account." },
      ]}
    />
  );
}
