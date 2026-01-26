"use client";

import { useEffect } from "react";
import { generateAllSchemas } from "@/lib/seo";

interface ComprehensiveSchemaProps {
  pageType: "home" | "service" | "product" | "blog" | "page";
  data: {
    title?: string;
    description?: string;
    path?: string;
    serviceType?: string;
    price?: string;
    priceCurrency?: string;
    breadcrumbs?: Array<{ name: string; url: string }>;
    faqs?: Array<{ question: string; answer: string }>;
    services?: Array<{ name: string; url: string; description?: string; itemType?: string }>;
    blogPost?: {
      title: string;
      description: string;
      image?: string;
      datePublished: string;
      dateModified?: string;
    };
  };
}

export function ComprehensiveSchema({ pageType, data }: ComprehensiveSchemaProps) {
  useEffect(() => {
    const schemas = generateAllSchemas(pageType, data);

    schemas.forEach((schema, index) => {
      const scriptId = `schema-${pageType}-${index}`;
      
      // Remove existing script if present
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      script.id = scriptId;
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const scriptId = `schema-${pageType}-${index}`;
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      });
    };
  }, [pageType, data]);

  return null;
}

