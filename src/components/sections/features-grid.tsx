"use client";

import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: "Up to 1% Cashback on Your Spend",
    description: "Choose the platinum package and earn up to 1% cashback on your ad spend.",
    image: "/images/feature-cashback.jpg",
  },
  {
    title: "Run Aggressive D2C Claims",
    description: "Unlock explosive growth with bold, high-impact offers designed for direct-to-consumer brands. From dramatic before-and-afters to urgent claims.",
    image: "/images/feature-d2c.jpg",
  },
  {
    title: "Run Ads For Any Vertical",
    description: "Run almost any kind of ads on any advertising platform, doesn't matter which vertical you're in. We have a solution for everyone.",
    image: "/images/feature-verticals.jpg",
  },
  {
    title: "Forget Health Categorization",
    description: "With our ad accounts, you can break free from health categorization issues and bring your CPMs back to normal levels & scale up.",
    image: "/images/feature-health.jpg",
  },
  {
    title: "No Bans or Restrictions",
    description: "Stop losing days to restrictions. Run ads with whitelisted accounts that have unlimited spend and dedicated support.",
    image: "/images/feature-no-bans.jpg",
  },
  {
    title: "Ads Approved in Seconds",
    description: "With our direct access to premium agency ad accounts, your digital advertising campaigns get approved faster and start running without delays.",
    image: "/images/feature-approval.jpg",
  },
  {
    title: "Keep Your Ads Running",
    description: "If your ad account gets disabled, we will instantly replace it for you, so your campaigns continue running without interruption.",
    image: "/images/feature-keep-running.jpg",
  },
  {
    title: "Never Lose Your Pixel Data",
    description: "We will help you set up a bulletproof account structure so you can run ads without worrying about losing your pixel or analytics data.",
    image: "/images/feature-pixel.jpg",
  },
  {
    title: "Lower CPA's & CPM's",
    description: "Our whitelisted agency ad accounts have strong reputation, allowing us to get up to 50% lower CPA's and CPM's.",
    image: "/images/feature-cpa.jpg",
  },
  {
    title: "Scale Without Limits",
    description: "We offer unlimited ad spend potential on various platforms, helping you reach new heights without hitting budget restrictions.",
    image: "/images/feature-scale.jpg",
  },
  {
    title: "Instant Top-ups",
    description: "Ensure your campaigns never miss a beat with our instant top-up service. Available 24/7, guaranteeing your accounts always have funds.",
    image: "/images/feature-topups.jpg",
  },
  {
    title: "24/7 Customer Support",
    description: "Our team is there to help 24/7, ready to answer any of your burning questions and provide immediate assistance.",
    image: "/images/feature-support.jpg",
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
            Break Free from Spending Limits,<br className="hidden md:block" /> Rejections, and Bans
          </h2>
          <p className="max-w-[760px] text-[18px] md:text-[20px] text-white/70 leading-relaxed">
            We work closely with ad platform reps to ensure you, as an entrepreneur, can run your ads smoothly. 
            Scale without limits, get higher ROI, and run multiple campaigns without any risks!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative flex flex-col p-8 rounded-[16px] bg-[#150d1f] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E44F71]/30 hover:shadow-[0_0_40px_0_rgba(43,89,255,0.1)]"
            >
              <div className="relative w-full h-[200px] mb-8 overflow-hidden rounded-[8px] flex items-center justify-center">
                <div className="absolute inset-0 bg-radial-gradient from-[rgba(43,89,255,0.1)] to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={340}
                  height={200}
                  className="relative z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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