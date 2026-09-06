import {
  generateAllSchemas,
  serializeJsonLd,
  type SchemaPageType,
} from "@/lib/schema/graph";
import type { PageSchemaData } from "@/lib/seo";

interface ComprehensiveSchemaProps {
  pageType: SchemaPageType;
  data: PageSchemaData;
}

export function ComprehensiveSchema({ pageType, data }: ComprehensiveSchemaProps) {
  const schemas = generateAllSchemas(pageType, data);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${pageType}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
    </>
  );
}
