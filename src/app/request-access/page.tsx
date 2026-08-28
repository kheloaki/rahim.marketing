import { Suspense } from "react";
import { otherPageSchemas } from "@/lib/page-schemas";
import { metaFromSchema } from "@/lib/page-meta";
import RequestAccessPage from "@/components/pages/request-access-page";

export const metadata = metaFromSchema(otherPageSchemas["request-access"], "/request-access");

export default function Page() {
  return (
    <Suspense>
      <RequestAccessPage />
    </Suspense>
  );
}
