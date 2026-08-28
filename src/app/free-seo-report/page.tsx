import { otherPageSchemas } from "@/lib/page-schemas";
import { metaFromSchema } from "@/lib/page-meta";
import FreeSeoReportPage from "@/components/pages/free-seo-report-page";

export const metadata = metaFromSchema(otherPageSchemas["free-seo-report"], "/free-seo-report");

export default function Page() {
  return <FreeSeoReportPage />;
}
