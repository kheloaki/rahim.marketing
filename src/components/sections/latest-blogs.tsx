import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Cost Per Result Formula: How to Calculate, Analyze, and Lower Your CPR",
    description: "Master the Cost Per Result formula! Calculate, analyze, and apply optimization tips to efficiently lower your CPR and maximize ad campaign profits.",
    image: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba6311a444904561effad_blog.svg",
    category: "ADS"
  },
  {
    title: "How to Spy on Competitors’ Ads: Tools, Strategies, Insider Insights",
    description: "Learn how to spy on competitors' ads ethically using tools, strategies, insider insights to build better, cheap campaigns. Beat your competitors in ads war!",
    image: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba6311a444904561effad_blog.svg",
    category: "ADS"
  },
  {
    title: "Google Ads Benchmarks (2026): CPC, CTR, CPA & Conversion Standards by Industry",
    description: "Get the definitive 2026 Google Ads benchmarks. Dive into current average CPC, CTR, CVR, and CPA for your industry to measure and improve campaign ROI.",
    image: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba6311a444904561effad_blog.svg",
    category: "ADS"
  }
];

const LatestBlogs = () => {
  return (
    <section className="bg-[#020412] text-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-[48px] font-semibold leading-[1.2] tracking-[-0.02em]">
            Latest blogs
          </h2>
          <a 
            href="/blog" 
            className="group flex items-center gap-2 bg-[#ffffff0d] border border-[#ffffff1a] rounded-[8px] px-6 py-3 text-[16px] font-semibold transition-all hover:bg-[#ffffff1a]"
          >
            View all
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Carousel/Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col group">
              {/* Card Image Wrapper */}
              <div className="relative aspect-[16/10] bg-[#080B1E] border border-[#ffffff1a] rounded-[12px] overflow-hidden mb-6 flex items-center justify-center p-8 transition-all group-hover:border-[#2B7FFF33]">
                {/* Simulated Blog Graphic - Matching the blue glowing style in screenshots */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2B7FFF0D] to-transparent opacity-50" />
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                   <div className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#ffffff66] mb-2 leading-tight">
                    {post.title.split(':').shift()}
                   </div>
                   <div className="w-16 h-1 mt-4 bg-[#2B7FFF] rounded-full shadow-[0_0_15px_#2B7FFF]" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute bottom-4 right-4 bg-[#2B7FFF] text-[10px] font-black px-2 py-1 rounded-[4px] tracking-wider uppercase">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-[20px] font-semibold leading-[1.3] mb-4 hover:text-[#2B7FFF] transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-[#ffffff99] text-[16px] leading-[1.5] mb-6 line-clamp-3">
                  {post.description}
                </p>
                <a 
                  href="#" 
                  className="mt-auto text-[#2B7FFF] font-semibold text-[16px] flex items-center hover:underline group/link"
                >
                  Read how
                  <span className="ml-1 transition-transform group-hover/link:translate-x-1">&gt;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls (Visual-only for clone) */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <div className="flex gap-1">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className={`h-[4px] rounded-full transition-all ${i === 0 ? 'w-8 bg-[#2B7FFF]' : 'w-4 bg-[#ffffff1a]'}`}
              />
            ))}
          </div>
          <div className="flex gap-4 ml-auto">
            <button className="w-12 h-12 rounded-[8px] border border-[#ffffff1a] flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-[8px] border border-[#ffffff1a] flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;