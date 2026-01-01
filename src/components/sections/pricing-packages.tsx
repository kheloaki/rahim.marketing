import React from 'react';
import { Check, Info } from 'lucide-react';

const PricingPackages = () => {
  const plans = [
    {
      name: "Gold",
      price: "$299",
      period: "/month",
      description: "Ideal for individual advertisers scaling to 5-figures.",
      features: [
        "Unlimited Ad Spend Potential",
        "Instant Replacements",
        "24/7 Dedicated Support",
        "Multiple Verticals Supported",
        "Instant Top-ups (24/7)",
        "Meta Rep Feedback Access",
      ],
      cta: "Get Started",
      color: "#c5a059", // Gold
      badge: null,
      opacity: "bg-white/5",
    },
    {
      name: "Platinum",
      price: "$999",
      period: "/month",
      description: "For agencies and high-volume media buyers scaling past $100k/mo.",
      features: [
        "Everything in Gold Plan",
        "Up to 1% Cashback on Spend",
        "Dedicated Account Manager",
        "Priority Onboarding (<2h)",
        "Custom Account Structures",
        "Beta Feature Access",
      ],
      cta: "Get Started",
      color: "#2b59ff", // Electric Blue
      badge: "MOST POPULAR",
      featured: true,
      opacity: "bg-primary/10",
    },
    {
      name: "Custom",
      price: "Enterprise",
      period: "",
      description: "Tailored solutions for large-scale operations and networks.",
      features: [
        "Custom Commission Rates",
        "Whitelabel Dashboard",
        "API Access for Top-ups",
        "Multi-Platform Aggregation",
        "Volume-Based Discounts",
        "Quarterly Business Reviews",
      ],
      cta: "Contact Sales",
      color: "#6b7280", // Gray
      badge: null,
      opacity: "bg-white/5",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#02040a]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] height-[800px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            LIMITED AVAILABILITY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Get Your Agency Account Today!
          </h2>
          <p className="text-lg text-white/60 mb-2">
            <span className="text-red-500 font-bold">Only 9/20 Spots left</span> | We only open access a few times per year to limited amount of clients to maintain the highest quality accounts & provide hands-on support.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66857b290df62758169994c6_trustpilot-stars.svg" alt="Trustpilot" className="h-6" />
            <span className="text-sm font-medium">Excellent 4.9/5</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 glass-panel ${
                plan.featured 
                  ? 'border-primary/50 shadow-[0_0_40px_rgba(43,89,255,0.15)] ring-1 ring-primary/30 scale-105 z-20' 
                  : 'border-white/10 hover:border-white/20'
              } ${plan.opacity}`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 tracking-tight text-white/90">
                  {plan.name} Package
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-white/40 text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-200 cursor-pointer ${
                plan.featured
                  ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20'
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}>
                {plan.cta}
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 grayscale opacity-50">
                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/68eea656b52e6d210182211c_cards-40.svg" alt="Payments" className="h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-white/40 flex items-center justify-center gap-2">
            <Info size={14} />
            All packages come with a 7-day money-back guarantee if accounts aren&apos;t delivered within 48h.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6">
             <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5e6713de7470d6fbf_facebook.svg" alt="Meta" className="h-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
             <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5ee0f69154b58e522_google.svg" alt="Google" className="h-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
             <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a558069249529ce2f3_tiktok.svg" alt="TikTok" className="h-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
             <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a51e37f05dbfafd0d3_bing.svg" alt="Bing" className="h-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;