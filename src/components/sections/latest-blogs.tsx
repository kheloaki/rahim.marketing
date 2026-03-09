import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

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
          {blogPosts.map((post) => (
            <div key={post.slug} className="flex flex-col group">
              {/* Card Image Wrapper */}
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/10] bg-[#080B1E] border border-[#ffffff1a] rounded-[12px] overflow-hidden mb-6 flex items-center justify-center p-8 transition-all group-hover:border-[#2B7FFF33]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2B7FFF0D] to-transparent opacity-50" />
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                    <div className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#ffffff66] mb-2 leading-tight">
                      {post.title.split(':').shift()}
                    </div>
                    <div className="w-16 h-1 mt-4 bg-[#2B7FFF] rounded-full shadow-[0_0_15px_#2B7FFF]" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#2B7FFF] text-[10px] font-black px-2 py-1 rounded-[4px] tracking-wider uppercase">
                    {post.category}
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-[20px] font-semibold leading-[1.3] mb-4 hover:text-[#2B7FFF] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-[#ffffff99] text-[16px] leading-[1.5] mb-6 line-clamp-3">
                  {post.description}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="mt-auto text-[#2B7FFF] font-semibold text-[16px] flex items-center hover:underline group/link"
                >
                  Read article
                  <span className="ml-1 transition-transform group-hover/link:translate-x-1">&gt;</span>
                </Link>
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
            <button 
              className="w-12 h-12 rounded-[8px] border border-[#ffffff1a] flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all"
              aria-label="Previous blog post"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button 
              className="w-12 h-12 rounded-[8px] border border-[#ffffff1a] flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all"
              aria-label="Next blog post"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;