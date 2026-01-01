"use client";

import Navbar from "@/components/sections/navbar";
import Milestones from "@/components/sections/milestones";
import Footer from "@/components/sections/footer";

export default function MilestonesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[89px]">
        <section className="py-20 bg-[#020412]">
          <div className="container mx-auto px-6 max-w-[1280px] text-center">
            <span className="text-[#2B7FFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
              MILESTONES
            </span>
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
              Milestone Clubs
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
  );
}
