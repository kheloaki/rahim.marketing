"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Cashback on Qualified Spend",
    description:
      "Platinum members can earn cashback on eligible ad spend. Terms depend on the plan and are confirmed during onboarding.",
    image: "/images/feature-cashback.jpg",
    imageAlt: "Advertiser dashboard illustrating cashback on qualified ad spend",
  },
  {
    title: "Compliance-Aware Campaign Support",
    description:
      "Guidance on offer framing, creative review, and landing-page consistency — without promising policy circumvention.",
    image: "/images/feature-d2c.jpg",
    imageAlt: "Campaign creative and landing-page review for advertising compliance",
  },
  {
    title: "Vertical Eligibility Review",
    description:
      "We review your offer before onboarding so you know whether the product, claims, and landing page are a fit for the platform.",
    image: "/images/feature-verticals.jpg",
    imageAlt: "Offer eligibility review across advertising verticals",
  },
  {
    title: "Health & Wellness Advertising Review",
    description:
      "Extra scrutiny for health-adjacent offers: eligibility, claims, and account structure before you scale spend.",
    image: "/images/feature-health.jpg",
    imageAlt: "Health and wellness advertising account structure review",
  },
  {
    title: "Built for Account Continuity",
    description:
      "Structured agency infrastructure with replacement and restriction support where available — not a promise that restrictions cannot happen.",
    image: "/images/feature-no-bans.jpg",
    imageAlt: "Agency advertising infrastructure designed for account continuity",
  },
  {
    title: "Faster Operational Onboarding",
    description:
      "Agency setups are designed for clearer approvals workflows and dedicated support during launch — timelines vary by platform and offer.",
    image: "/images/feature-approval.jpg",
    imageAlt: "Agency ad account onboarding and approval workflow",
  },
  {
    title: "Replacement Support When Needed",
    description:
      "If an ad account is restricted, we help review options and replace spend nodes where your plan includes replacement support.",
    image: "/images/feature-keep-running.jpg",
    imageAlt: "Ad account replacement support keeping campaigns operational",
  },
  {
    title: "Tracking Continuity",
    description:
      "We help design Pixel/Dataset ownership so measurement is less dependent on a single fragile spend account.",
    image: "/images/feature-pixel.jpg",
    imageAlt: "Meta Pixel and Dataset ownership for tracking continuity",
  },
  {
    title: "Higher-Capacity Spend Infrastructure",
    description:
      "Agency account structures intended for higher operational capacity than typical new self-serve setups — results still depend on creative and offer quality.",
    image: "/images/feature-cpa.jpg",
    imageAlt: "Higher-capacity agency ad account spend infrastructure",
  },
  {
    title: "Scale With Structured Support",
    description:
      "Plans for growing spend with clear permissions, billing workflows, and escalation paths when issues arise.",
    image: "/images/feature-scale.jpg",
    imageAlt: "Structured support for scaling advertising spend",
  },
  {
    title: "Top-ups When You Need Them",
    description:
      "Funding support so campaigns are less likely to stall waiting on balance — available methods are confirmed per account.",
    image: "/images/feature-topups.jpg",
    imageAlt: "Ad account funding and top-up workflow",
  },
  {
    title: "Responsive Customer Support",
    description:
      "A team available to help with onboarding, access questions, and operational issues during active campaigns.",
    image: "/images/feature-support.jpg",
    imageAlt: "Customer support for agency advertising operations",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-[rgb(0,1,17)] py-[120px] lg:py-[160px]">
      <div className="container mx-auto px-5 lg:px-10 max-w-[1280px]">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-[rgb(43,89,255)] text-sm font-semibold tracking-wide uppercase mb-4">
            Features
          </div>
          <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.1] mb-6 tracking-[-0.02em] text-white">
            Advertising infrastructure for
            <br className="hidden md:block" /> higher-spend operations
          </h2>
          <p className="max-w-[760px] text-[18px] md:text-[20px] text-white/70 leading-relaxed">
            Structured agency ad accounts for Meta, Google, TikTok and other platforms — with
            continuity support, tracking protection, and clear onboarding. Platform policies still
            apply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col p-8 rounded-[16px] bg-[#150d1f] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E44F71]/30 hover:shadow-[0_0_40px_0_rgba(43,89,255,0.1)]"
            >
              <div className="relative w-full h-[200px] mb-8 overflow-hidden rounded-[8px] flex items-center justify-center">
                <div className="absolute inset-0 bg-radial-gradient from-[rgba(43,89,255,0.1)] to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={340}
                  height={200}
                  className="relative z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 90vw"
                />
              </div>
              <div className="flex flex-col mt-auto">
                <h3 className="text-[20px] md:text-[22px] font-semibold leading-[1.3] mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-white/70 leading-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
        }
      `}</style>
    </section>
  );
}
