import { otherPageSchemas } from "@/lib/page-schemas";
import { metaFromSchema } from "@/lib/page-meta";
import RequestAccessPage from "@/components/pages/request-access-page";

export const metadata = metaFromSchema(otherPageSchemas["request-access"], "/request-access", {
  noIndex: true,
});

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = (await searchParams) ?? {};
  const service = typeof params.service === "string" ? params.service : undefined;
  const pack = typeof params.pack === "string" ? params.pack : undefined;

  return <RequestAccessPage service={service} pack={pack} />;
}
