import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: "Up to 1% Cashback on Your Spend",
    description: "Choose the platinum package and earn up to 1% cashback on your ad spend.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6892578890a2bf2a21d20d1b_cashback-12.avif",
  },
  {
    title: "Run Aggressive D2C Claims",
    description: "Unlock explosive growth with bold, high-impact offers designed for direct-to-consumer brands. From dramatic before-and-afters to urgent claims.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68acae1a690b467a0e74910c_d2c_20claims-13.avif",
  },
  {
    title: "Run Ads For Any Vertical",
    description: "Run almost any kind of ads on any advertising platform, doesn't matter which vertical you're in. We have a solution for everyone.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6892578a86c64ec6dc39b920_run_20blackhat_20ads-14.avif",
  },
  {
    title: "Forget Health Categorization",
    description: "With our ad accounts, you can break free from health categorization issues and bring your CPMs back to normal levels & scale up.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6914e9e9fd3ccb82a4731c0c_Forget_20Health_20Categor-15.avif",
  },
  {
    title: "No Bans or Restrictions",
    description: "Stop losing days to restrictions. Run ads with whitelisted accounts that have unlimited spend and dedicated support.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6914e9e7fd3ccb82a4731bd2_No_20Bans_20or_20Restrict-16.avif",
  },
  {
    title: "Ads Approved in Seconds",
    description: "With our direct access to premium agency ad accounts, your digital advertising campaigns get approved faster and start running without delays.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6892578793103ca0af59bc13_ads_20approval-17.avif",
  },
  {
    title: "Keep Your Ads Running",
    description: "If your ad account gets disabled, we’ll instantly replace it for you, so your campaigns continue running without interruption.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/689257893c2e56b6a2e7a31b_keep_20ads_20running-18.avif",
  },
  {
    title: "Never Lose Your Pixel Data",
    description: "We will help you set up a bulletproof account structure so you can run ads without worrying about losing your pixel or analytics data.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/689257891f8f4f21a5484c7b_no_20pixel_20data_20loss-19.avif",
  },
  {
    title: "Lower CPA’s & CPM’s",
    description: "Our whitelisted agency ad accounts have strong reputation, allowing us to get up to 50% lower CPA’s and CPM’s.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/689257884f02934f492d373d_lower_20cpas-20.avif",
  },
  {
    title: "Scale Without Limits",
    description: "We offer unlimited ad spend potential on various platforms, helping you reach new heights without hitting budget restrictions.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/68925407e37731c04dd03264_scale-32.svg",
  },
  {
    title: "Instant Top-ups",
    description: "Ensure your campaigns never miss a beat with our instant top-up service. Available 24/7, guaranteeing your accounts always have funds.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68925789cbc204e18bfba51a_instant_20top_20ups-21.avif",
  },
  {
    title: "24/7 Customer Support",
    description: "Our team is there to help 24/7, ready to answer any of your burning questions and provide immediate assistance.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68925787f5b1db66c828e6e2_247_20customer_20support-22.avif",
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
              className="group relative flex flex-col p-8 rounded-[16px] bg-[#0a0d1a] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2b59ff]/30 hover:shadow-[0_0_40px_0_rgba(43,89,255,0.1)]"
            >
              <div className="relative w-full h-[200px] mb-8 overflow-hidden rounded-[8px] flex items-center justify-center">
                <div className="absolute inset-0 bg-radial-gradient from-[rgba(43,89,255,0.1)] to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={340}
                  height={200}
                  className="relative z-10 object-contain transition-transform duration-500 group-hover:scale-105"
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