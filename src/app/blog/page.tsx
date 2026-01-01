"use client";

import Navbar from "@/components/sections/navbar";
import LatestBlogs from "@/components/sections/latest-blogs";
import Footer from "@/components/sections/footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[89px]">
        <section className="py-20 bg-[#020412]">
          <div className="container mx-auto px-6 max-w-[1280px] text-center">
            <span className="text-[#2B7FFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
              BLOG
            </span>
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
              Latest Insights
            </h1>
            <p className="text-[18px] text-white/60 mb-12 max-w-[600px] mx-auto">
              Tested playbooks, industry insights, and guides for media buyers and advertisers.
            </p>
          </div>
        </section>
        <LatestBlogs />
      </div>
      <Footer />
    </main>
  );
}
