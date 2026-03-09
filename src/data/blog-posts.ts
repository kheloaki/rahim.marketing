export interface BlogPostFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  content: Array<{ type: "h2" | "h3" | "paragraph" | "list"; content: string; items?: string[] }>;
  faqs?: BlogPostFAQ[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cost-per-result-formula",
    title: "Cost Per Result Formula: How to Calculate, Analyze, and Lower Your CPR",
    description: "Master the Cost Per Result formula! Calculate, analyze, and apply optimization tips to efficiently lower your CPR and maximize ad campaign profits.",
    category: "ADS",
    image: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba6311a444904561effad_blog.svg",
    datePublished: "2026-01-15",
    dateModified: "2026-02-01",
    content: [
      { type: "paragraph", content: "Cost Per Result (CPR) is one of the most important metrics in performance marketing." },
      { type: "paragraph", content: "Whether you're running Facebook, Google, or TikTok ads, knowing how to calculate, analyze, and lower your CPR directly impacts profitability." },
      { type: "paragraph", content: "This guide walks you through the formula, how to use it, and practical ways to improve it." },
      { type: "h2", content: "What is Cost Per Result (CPR)?" },
      { type: "paragraph", content: "Cost Per Result is the average amount you pay for a single desired outcome—a lead, a sale, a sign-up, or any conversion you've defined." },
      { type: "paragraph", content: "It answers: \"How much did each result cost me?\"" },
      { type: "h2", content: "What is the Cost Per Result formula?" },
      { type: "h3", content: "The formula" },
      { type: "paragraph", content: "The formula is straightforward:" },
      { type: "paragraph", content: "CPR = Total Ad Spend ÷ Number of Results" },
      { type: "h3", content: "Example" },
      { type: "paragraph", content: "If you spent $2,000 and got 80 leads, your CPR = $2,000 ÷ 80 = $25 per lead." },
      { type: "paragraph", content: "Use this same logic for purchases, app installs, or any conversion event." },
      { type: "h2", content: "How do you analyze your CPR?" },
      { type: "paragraph", content: "Compare your CPR to your allowable cost per result (based on customer lifetime value and margin)." },
      { type: "paragraph", content: "If your CPR is below your target, you can scale. If it's above, you need to reduce spend, improve creative/audience, or increase conversion rate." },
      { type: "paragraph", content: "Break down CPR by campaign, ad set, and placement to find where performance is best and worst." },
      { type: "h2", content: "How do you lower your CPR?" },
      { type: "list", content: "Ways to lower CPR:", items: [
        "Improve ad creative and copy so more people convert at the same spend.",
        "Refine targeting so you're showing ads to people more likely to convert.",
        "Optimize landing pages for higher conversion rate.",
        "Use smart bidding (e.g. cost cap, value optimization) so the platform aims for your target CPR.",
        "Scale winners and pause underperformers so overall blend CPR goes down.",
      ] },
      { type: "paragraph", content: "Mastering the Cost Per Result formula and applying these optimizations will help you run more efficient campaigns and maximize ad profits." },
    ],
    faqs: [
      { question: "What is a good Cost Per Result (CPR)?", answer: "A good CPR depends on your margin and customer lifetime value. Your CPR should be below your allowable cost per acquisition (CPA). Compare your CPR to industry benchmarks and to your own historical performance to see if you're improving." },
      { question: "How do I lower my CPR without cutting spend?", answer: "Improve conversion rate (better creative, landing pages, and targeting) so you get more results from the same spend. Use value-based or cost-cap bidding so the platform optimizes toward your target CPR." },
      { question: "Should I look at CPR by campaign or overall?", answer: "Look at both. Overall CPR shows blended performance; by-campaign (and ad set/placement) breakdowns show where to scale winners and pause or fix underperformers." },
    ],
  },
  {
    slug: "spy-on-competitors-ads",
    title: "How to Spy on Competitors' Ads: Tools, Strategies, Insider Insights",
    description: "Learn how to spy on competitors' ads ethically using tools, strategies, insider insights to build better, cheap campaigns. Beat your competitors in ads war!",
    category: "ADS",
    image: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba6311a444904561effad_blog.svg",
    datePublished: "2026-01-22",
    dateModified: "2026-02-01",
    content: [
      { type: "paragraph", content: "Knowing what your competitors are doing in paid ads gives you a real edge." },
      { type: "paragraph", content: "You can see their creatives, angles, landing pages, and sometimes even estimated spend." },
      { type: "paragraph", content: "Done ethically and legally, competitor ad research helps you build better campaigns. Here's how to spy on competitors' ads the right way." },
      { type: "h2", content: "Why should you spy on competitor ads?" },
      { type: "paragraph", content: "You get inspiration for creatives and messaging." },
      { type: "paragraph", content: "You understand which angles and offers are working in your niche and spot gaps (e.g. audiences or formats they're not using)." },
      { type: "paragraph", content: "You can benchmark your own ad frequency and landing page quality. It's about learning, not copying verbatim." },
      { type: "h2", content: "What tools can you use for competitor ad research?" },
      { type: "h3", content: "Official ad libraries" },
      { type: "paragraph", content: "Meta Ad Library (Facebook & Instagram), Google Ads Transparency Center, and TikTok Ad Library let you search by advertiser name or keyword." },
      { type: "paragraph", content: "You can see active ads, sometimes with start date and platforms." },
      { type: "h3", content: "Third-party spy tools" },
      { type: "paragraph", content: "Tools like AdEspresso, BigSpy, or similar aggregators give you more filters, creative history, and estimated spend." },
      { type: "paragraph", content: "Use a mix of official libraries and one or two spy tools for depth." },
      { type: "h2", content: "What strategies work when spying on competitor ads?" },
      { type: "list", content: "Practical approach:", items: [
        "Search for known competitor names and your main keywords in ad libraries.",
        "Save winning-looking creatives (angles, hooks, formats) and reverse-engineer why they might work.",
        "Check landing pages: look at structure, offer, and CTA—then improve on them for your brand.",
        "Track new ads over time to see who's scaling and what's fresh.",
      ] },
      { type: "h2", content: "What are the best insider tips?" },
      { type: "paragraph", content: "Focus on ads that have been running for weeks or months; they're likely profitable." },
      { type: "paragraph", content: "Look at comment sentiment and engagement for social proof." },
      { type: "paragraph", content: "Combine competitor insights with your own tests—use their ideas as a starting point, then beat them with better creative and targeting." },
      { type: "paragraph", content: "Ethical spying means gathering inspiration and market intel, not stealing creative or trademarks." },
      { type: "paragraph", content: "With the right tools and a clear strategy, you can spy on competitors' ads effectively and use those insights to build better, more profitable campaigns." },
    ],
    faqs: [
      { question: "Is it legal to spy on competitors' ads?", answer: "Yes. Ad libraries (Meta, Google, TikTok) are public. Using them to see what competitors run is legal. Stay ethical: use insights for inspiration and strategy, not to copy creatives or trademarks." },
      { question: "Which ad spy tool is best?", answer: "Start with free official libraries (Meta Ad Library, Google Ads Transparency Center, TikTok Ad Library). For more filters and history, use a third-party tool like BigSpy or AdEspresso—pick one that fits your budget and platforms." },
      { question: "How often should I check competitor ads?", answer: "Check when planning new campaigns and then periodically (e.g. monthly) to spot new angles and creative trends. Track a short list of key competitors so you don't get overwhelmed." },
    ],
  },
  {
    slug: "google-ads-benchmarks-2026",
    title: "Google Ads Benchmarks (2026): CPC, CTR, CPA & Conversion Standards by Industry",
    description: "Get the definitive 2026 Google Ads benchmarks. Dive into current average CPC, CTR, CVR, and CPA for your industry to measure and improve campaign ROI.",
    category: "ADS",
    image: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba6311a444904561effad_blog.svg",
    datePublished: "2026-02-01",
    content: [
      { type: "paragraph", content: "Benchmarks help you answer: \"Am I doing well or not?\"" },
      { type: "paragraph", content: "For Google Ads in 2026, knowing typical CPC, CTR, conversion rate (CVR), and CPA by industry lets you set realistic targets and spot underperforming campaigns." },
      { type: "paragraph", content: "This article gives you a clear set of reference numbers and how to use them." },
      { type: "h2", content: "Why do benchmarks matter?" },
      { type: "paragraph", content: "Averages vary a lot by industry, device, and campaign type." },
      { type: "paragraph", content: "Benchmarks give you a baseline so you can tell if your metrics are in line, above, or below norm—and where to focus optimization." },
      { type: "h2", content: "What are the Google Ads benchmarks for 2026?" },
      { type: "h3", content: "Search overview" },
      { type: "paragraph", content: "Across industries, rough 2026 Search benchmarks often fall in these ranges." },
      { type: "paragraph", content: "Average CPC: $1–4 (often higher in legal, finance, insurance). CTR: 2–5% for Search. Conversion rate: 2–5% on Search landing pages." },
      { type: "paragraph", content: "CPA varies widely: ecommerce might be $20–80, lead gen $30–150+, legal/finance higher." },
      { type: "h3", content: "Display and YouTube" },
      { type: "paragraph", content: "Display and YouTube usually have lower CPC but lower CVR." },
      { type: "paragraph", content: "Shopping has different cost and conversion dynamics." },
      { type: "h2", content: "What do benchmarks look like by industry?" },
      { type: "paragraph", content: "Ecommerce: CPC often $0.50–2, CVR 2–4%, CPA tied to AOV." },
      { type: "paragraph", content: "Lead gen / B2B: CPC $2–6+, CVR 3–7%, CPA $40–200+." },
      { type: "paragraph", content: "Legal / Finance: CPC and CPA are among the highest." },
      { type: "paragraph", content: "Local services: CPC varies by region, CVR often 5–10% for calls/form." },
      { type: "paragraph", content: "Use industry reports (e.g. from Google, WordStream, or similar) to get the latest numbers for your vertical." },
      { type: "h2", content: "How do you use these benchmarks?" },
      { type: "paragraph", content: "Compare your account's CPC, CTR, CVR, and CPA to these ranges." },
      { type: "paragraph", content: "If you're below average on CTR, test ad copy and keywords. If CVR is low, improve landing pages and relevance. If CPA is high, refine targeting and bids." },
      { type: "paragraph", content: "Benchmarks are a starting point—your target should also consider your margin and LTV." },
      { type: "paragraph", content: "Keeping an eye on 2026 Google Ads benchmarks and applying them to your account will help you measure performance and improve campaign ROI over time." },
    ],
    faqs: [
      { question: "What is a good CTR for Google Search ads?", answer: "Across industries, Search CTR often falls in the 2–5% range. Above 5% can be strong; below 2% may mean ad copy or relevance needs work. Compare to your industry and your own history." },
      { question: "How do I compare my Google Ads to benchmarks?", answer: "Break down by network (Search, Display, YouTube), device, and campaign type. Compare your CPC, CTR, CVR, and CPA to industry averages for your vertical. Use Google's benchmarks in the interface and third-party reports for your sector." },
      { question: "Why is my CPA higher than benchmark?", answer: "High CPA can come from competitive keywords, weak landing pages, poor targeting, or low conversion rate. Improve relevance and landing experience first; then refine bids and targeting." },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
