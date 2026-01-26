"use client";

import { useEffect } from "react";

interface PageStructuredDataProps {
  type: "Service" | "FAQPage" | "BreadcrumbList";
  data: any;
}

export function PageStructuredData({ type, data }: PageStructuredDataProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    script.id = `structured-data-${type.toLowerCase()}`;
    
    // Remove existing script if present
    const existing = document.getElementById(script.id);
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(script.id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
}

