import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    category: 'Guides',
    title: 'Cost Per Result Formula: How to Calculate, Analyze, and Lower Your CPR',
    description: 'Master the Cost Per Result formula! Calculate, analyze, and apply optimization tips to efficiently lower your CPR and maximize ad campaign profits.',
    image: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b9e8f615efe1d1a8eb829_Facebook%20Feedback%20Score%20Boost.svg', // Placeholder from assets logic if direct match missing
    link: '#',
  },
  {
    id: 2,
    category: 'Strategies',
    title: 'How to Spy on Competitors’ Ads: Tools, Strategies, Insider Insights',
    description: 'Learn how to spy on competitors\' ads ethically using tools, strategies, insider insights to build better, cheap campaigns. Beat your competitors in ads war!',
    image: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5ee0f69154b58e522_google.svg',
    link: '#',
  },
  {
    id: 3,
    category: 'Benchmarks',
    title: 'Google Ads Benchmarks (2026): CPC, CTR, CPA & Conversion Standards by Industry',
    description: 'Get the definitive 2026 Google Ads benchmarks. Dive into current average CPC, CTR, CVR, and CPA for your industry to measure and improve campaign ROI.',
    image: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a51e37f05dbfafd0d3_bing.svg',
    link: '#',
  },
];

export default function LatestBlogs() {
  return (
    <section className="bg-[#02040a] py-[120px] lg:py-[160px]">
      <div className="container">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[64px] gap-6">
          <div className="max-w-[720px]">
            <h2 className="text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-4">
              Latest blogs
            </h2>
          </div>
          <a
            href="/blog"
            className="flex items-center gap-2 text-white font-semibold hover:text-[#2b59ff] transition-colors"
          >
            view all
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="group flex flex-col bg-[#0a0d1a] border border-[rgba(255,255,255,0.1)] rounded-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#2b59ff]/30"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full bg-[#121629] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2b59ff]/20 to-transparent z-10 opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   {/* Using a placeholder visual representation consistent with the high-tech UI since specific thumbnails aren't in assets */}
                   <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute w-[80%] h-[80%] bg-[#2b59ff]/10 blur-[40px] rounded-full" />
                      <Image 
                        src={post.image}
                        alt={post.title}
                        width={80}
                        height={80}
                        className="relative z-20 transition-transform duration-500 group-hover:scale-110"
                      />
                   </div>
                </div>
                {/* Arrow Icon Badge */}
                <div className="absolute bottom-4 right-4 z-20 bg-[#2b59ff] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-[#2b59ff] text-[14px] font-semibold uppercase tracking-wider mb-3">
                  {post.category}
                </div>
                <h3 className="text-[24px] font-semibold leading-[1.3] text-white mb-4 group-hover:text-[#2b59ff] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-white/70 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
<style jsx global>{`
  .container {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 1024px) {
    .container {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
`}</style>