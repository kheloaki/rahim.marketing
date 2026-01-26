"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Milestones from "@/components/sections/milestones";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";

export default function MilestonesPage() {
  const schemaData = otherPageSchemas["milestones"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          ...schemaData,
          path: "/milestones",
          breadcrumbs: getBreadcrumbs("/milestones", "Milestones"),
        }}
      />
      <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-[89px]">
        <section className="py-20 bg-[#0a0612] relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 max-w-[1280px] text-center relative z-10">
            <span className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-4 block">
              MILESTONES
            </span>
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
              Milestone{' '}
              <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                Clubs
              </span>
            </h1>
            <p className="text-[18px] text-white/60 mb-12 max-w-[600px] mx-auto">
              Get rewarded for your ad spend. Join our exclusive milestone program and earn trophies, gifts, and leaderboard status.
            </p>
          </div>
        </section>
        <Milestones />
      </div>
      <Footer />
    </main>
    </>
  );
}