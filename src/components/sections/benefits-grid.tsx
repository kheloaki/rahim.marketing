import React from 'react';
import Image from 'next/image';

const benefits = [
  {
    title: "1% Cashback on Your Spend",
    description: "Choose the platinum package and earn up to 1% cashback on your ad spend.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6892578890a2bf2a21d20d1b_cashback-11.avif"
  },
  {
    title: "Run Aggressive D2C Claims",
    description: "Unlock explosive growth with bold, high-impact offers designed for direct-to-consumer brands. From dramatic before-and-afters to urgent claims.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68acae1a690b467a0e74910c_d2c_20claims-12.avif"
  },
  {
    title: "Run Ads For Any Vertical",
    description: "Run any kind of ads with our Facebook agency ad accounts, doesn't matter which vertical you're in. We have a solution for almost everyone.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6892578a86c64ec6dc39b920_run_20blackhat_20ads-13.avif"
  },
  {
    title: "Forget Health Categorization",
    description: "With our ad accounts, you can break free from health categorization issues and bring your CPMs back to normal levels & scale up as much as You want.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6914e9e9fd3ccb82a4731c0c_Forget_20Health_20Categor-14.avif"
  },
  {
    title: "No Bans or Restrictions",
    description: "Stop losing days to restrictions. Run ads with whitelisted accounts that have unlimited spend, instant replacements, and dedicated support from Meta reps.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6914e9e7fd3ccb82a4731bd2_No_20Bans_20or_20Restrict-15.avif"
  },
  {
    title: "Scale Without Limits",
    description: "We offer unlimited ad spending with our Facebook agency accounts, helping you reach new heights without hitting budget restrictions or account caps.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/689257893c2e56b6a2e7a31b_keep_20ads_20running-17.avif"
  },
  {
    title: "Ads Approved in Seconds",
    description: "With our direct access to premium Facebook agency accounts, your campaigns get approved faster and start running without delays or issues.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6892578793103ca0af59bc13_ads_20approval-16.avif"
  },
  {
    title: "Keep Your Ads Running",
    description: "If your ad account gets disabled, we'll instantly replace it for you, so your campaigns continue running without interruption.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/689257893c2e56b6a2e7a31b_keep_20ads_20running-17.avif"
  },
  {
    title: "Never Lose Your Pixel Data",
    description: "We will help you set up a bulletproof account structure so you can run ads without worrying about losing your pixel or analytics data forever.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/689257891f8f4f21a5484c7b_no_20pixel_20data_20loss-18.avif"
  },
  {
    title: "Lower CPA's & CPM's",
    description: "Our whitelisted agency ad accounts have built up a strong reputation over the years, allowing us to get up to 50% lower CPA's and CPM's.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/689257884f02934f492d373d_lower_20cpas-19.avif"
  },
  {
    title: "Instant Top-ups",
    description: "Ensure your campaigns never miss a beat with our instant top-up service. Our Facebook agency accounts for rent are available 24/7.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68925789cbc204e18bfba51a_instant_20top_20ups-20.avif"
  },
  {
    title: "24/7 Customer Support",
    description: "Our team is there to help 24/7, ready to answer any of your burning questions with our dedicated support.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68925787f5b1db66c828e6e2_247_20customer_20support-21.avif"
  },
  {
    title: "Platinum HiVA Accounts",
    description: "Get exclusive access to the highest-tier HiVA advertising accounts, built for serious advertisers who need stability.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68925789db7bc641f0825cb2_plat_20hiva_20accounts-22.avif"
  },
  {
    title: "EU/USA Ad Accounts",
    description: "Choose from fully verified EU or USA-based high-quality FB Ad accounts with no domain limits.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/690d0d80dcb8bb2a352dc999_EU-USA_20Ad_20Accounts-23.avif"
  }
];

export default function BenefitsGrid() {
  return (
    <section className="bg-[#020412] text-white py-[120px]">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
          <div className="lg:max-w-[45%]">
            <span className="text-[#2B7FFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
              BENEFITS
            </span>
            <h2 className="text-[48px] font-semibold leading-[1.2] mb-6">
              Break Free from Spending Limits, Rejections, and Bans
            </h2>
            <a 
              href="#pricing" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#080B1E] border border-white/10 rounded-lg text-sm font-semibold hover:bg-white/5 transition-colors gap-2"
            >
              View Pricing 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="lg:max-w-[50%]">
            <p className="text-white/60 text-[18px] leading-[1.6]">
              We work closely with Meta's representatives to ensure you, as an entrepreneur, can run your ads through our Meta ad accounts smoothly (no bans or restrictions). As 8-figure e-commerce entrepreneurs ourselves, we know the struggles all too well and wish we had access to Facebook agency ad accounts back in the day. Now, we're bringing this powerful tool to you.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#080B1E] border border-white/10 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#2B7FFF]/30 group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index < 3}
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <h3 className="text-[24px] font-semibold mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-base leading-[1.6] mb-4">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}