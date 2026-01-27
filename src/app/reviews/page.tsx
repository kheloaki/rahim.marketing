"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import SuccessStories from "@/components/sections/success-stories";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { Star } from "lucide-react";

export default function ReviewsPage() {
  const schemaData = otherPageSchemas["reviews"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          ...schemaData,
          path: "/reviews",
          breadcrumbs: getBreadcrumbs("/reviews", "Reviews"),
        }}
      />
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-[89px]">
        <section className="py-20 bg-[#0a0612] relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 max-w-[1280px] text-center relative z-10">
            <span className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-4 block">
              REVIEWS
            </span>
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
              What Our{' '}
              <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h1>
            <p className="text-[18px] text-white/60 mb-8 max-w-[600px] mx-auto">
              Trusted by 1,750+ media buyers, affiliates, and ecommerce brands worldwide.
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 bg-[#150d1f] border border-white/10 rounded-xl px-4 py-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#E44F71] fill-[#E44F71]" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
                <span className="text-white/60 text-sm">Trustpilot</span>
              </div>
              <div className="flex items-center gap-2 bg-[#150d1f] border border-white/10 rounded-xl px-4 py-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#BC2C7B] fill-[#BC2C7B]" />
                  ))}
                </div>
                <span className="font-semibold">4.8/5</span>
                <span className="text-white/60 text-sm">G2</span>
              </div>
            </div>
          </div>
        </section>
        <SuccessStories />
      </div>
      <Footer />
    </main>
    </>
  );
}