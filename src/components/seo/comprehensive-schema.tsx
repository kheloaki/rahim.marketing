import { generateAllSchemas, type PageSchemaData } from "@/lib/seo";

interface ComprehensiveSchemaProps {
  pageType: "home" | "service" | "product" | "blog" | "page";
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
