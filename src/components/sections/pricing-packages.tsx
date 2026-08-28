import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Info, Star } from 'lucide-react';
import { BingIcon, GoogleIcon, MetaIcon, TikTokIcon } from '@/components/brand/platform-icons';

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
      badge: null,
      featured: false,
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
      badge: "MOST POPULAR",
      featured: true,
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
      badge: null,
      featured: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden bg-[#0a0612]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-5 lg:px-10 max-w-[1280px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            LIMITED AVAILABILITY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Get Your Agency Account Today!
          </h2>
          <p className="text-lg text-white/70 mb-2">
            <span className="text-red-500 font-bold">Only 9/20 Spots left</span> | We only open access a few times per year to limited amount of clients to maintain the highest quality accounts & provide hands-on support.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="fill-[#E44F71] text-[#E44F71]" />
              ))}
            </div>
            <span className="text-sm font-medium text-white">Excellent 4.9/5</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                plan.featured 
                  ? 'border-primary/50 bg-primary/10 shadow-[0_0_40px_rgba(228,79,113,0.15)] md:-mt-4 md:mb-4' 
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2 tracking-tight text-white/90">
                    {plan.name} Package
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/40 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link href="/request-access" className={`w-full py-3.5 rounded-xl font-bold transition-all duration-200 cursor-pointer text-sm inline-flex items-center justify-center ${
                    plan.featured
                      ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}>
                    {plan.cta}
                  </Link>
                  
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Image 
                      src="/images/payment-cards.jpg" 
                      alt="Accepted payment methods" 
                      width={160}
                      height={32}
                      className="h-6 w-auto rounded-sm object-cover opacity-70"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-white/40 flex items-center justify-center gap-2">
            <Info size={14} />
            All packages come with a 7-day money-back guarantee if accounts aren&apos;t delivered within 48h.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 text-white/40">
             <MetaIcon size={24} />
             <GoogleIcon size={24} />
             <TikTokIcon size={24} />
             <BingIcon size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;