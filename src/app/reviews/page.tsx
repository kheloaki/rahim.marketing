"use client";

import Navbar from "@/components/sections/navbar";
import TestimonialsSection from "@/components/sections/testimonials-carousel";
import ClientResultsVideo from "@/components/sections/client-results-video";
import Footer from "@/components/sections/footer";
import { Star } from "lucide-react";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[89px]">
        <section className="py-20 bg-[#020412]">
          <div className="container mx-auto px-6 max-w-[1280px] text-center">
            <span className="text-[#2B7FFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
              REVIEWS
            </span>
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
              What Our Clients Say
            </h1>
            <p className="text-[18px] text-white/60 mb-8 max-w-[600px] mx-auto">
              Trusted by 1,750+ media buyers, affiliates, and ecommerce brands worldwide.
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 bg-[#080B1E] border border-white/10 rounded-xl px-4 py-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
                <span className="text-white/60 text-sm">Trustpilot</span>
              </div>
              <div className="flex items-center gap-2 bg-[#080B1E] border border-white/10 rounded-xl px-4 py-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FF6600] fill-[#FF6600]" />
                  ))}
                </div>
                <span className="font-semibold">4.8/5</span>
                <span className="text-white/60 text-sm">G2</span>
              </div>
            </div>
          </div>
        </section>
        <ClientResultsVideo />
        <TestimonialsSection />
      </div>
      <Footer />
    </main>
  );
}
