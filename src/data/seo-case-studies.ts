export interface CaseStudy {
  title: string;
  clientOrIndustry?: string;
  results: string;
  quote: string;
  author?: string;
  image?: string;
}

export const seoCaseStudies: CaseStudy[] = [
  {
    title: "Organic traffic up 40% in 5 months",
    clientOrIndustry: "Ecommerce",
    results: "+40% organic traffic, +25% conversions from organic",
    quote: "They took over our SEO and within a few months we saw real growth. Clear reports and no jargon—just results we could track.",
    author: "Ecommerce Brand Owner",
  },
  {
    title: "From page 3 to top 3 for key terms",
    clientOrIndustry: "SaaS",
    results: "Top 3 rankings for 8 target keywords, 2x organic signups",
    quote: "We were buried on page 3. Rahim's team fixed technical issues and focused our content. Now we're ranking where it matters.",
    author: "SaaS Marketing Lead",
  },
];
