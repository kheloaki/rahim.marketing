"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import type { CaseStudy } from "@/data/seo-case-studies";

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  title?: string;
  subtitle?: string;
}

const CaseStudiesSection = ({
  caseStudies,
  title = "Case Studies",
  subtitle = "Real results from our SEO work.",
}: CaseStudiesSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-[120px] bg-[#02040a] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle,rgba(43,89,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="container relative z-10 px-5 lg:px-10 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4 block">
            RESULTS
          </span>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-white mb-6">{title}</h2>
          <p className="text-lg text-white/70 max-w-[600px] mx-auto">{subtitle}</p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="h-full rounded-2xl bg-[#150d1f] border border-white/10 p-8 flex flex-col hover:border-[#E44F71]/30 transition-all duration-300">
                  {study.clientOrIndustry && (
                    <span className="text-[#E44F71] text-xs font-semibold uppercase tracking-wider mb-3 block">
                      {study.clientOrIndustry}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <div className="flex items-center gap-2 text-[#10b981] text-sm font-medium mb-4">
                    <TrendingUp className="w-4 h-4" />
                    {study.results}
                  </div>
                  <blockquote className="text-white/70 leading-relaxed mb-6 flex-grow">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                  {study.author && (
                    <p className="text-white/90 font-semibold text-sm pt-4 border-t border-white/10">
                      — {study.author}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {caseStudies.length > 1 && (
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={() => scroll("left")}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all"
                aria-label="Previous case study"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all"
                aria-label="Next case study"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection;
