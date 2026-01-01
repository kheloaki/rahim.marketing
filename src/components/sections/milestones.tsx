import React from 'react';
import Image from 'next/image';

/**
 * Milestones Section Component
 * Cloned based on "Uproas Milestone Clubs" instructions and design system.
 * Features a tiered display of trophies (Blue, Gold, Silver) and call-to-actions.
 */
const Milestones = () => {
  // Asset mapping based on provided list
  const assets = {
    silverTrophy: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/685e94525a939364d8cb2e44_image_2016-27.avif",
    goldTrophy: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/685e94528a35ba3b6699b54f_image_2018-28.avif",
    blueTrophy: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/685e9452dd023585e06c6e3b_image_2017-30.avif",
    leaderboardBg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/685e94529d5e31fe6e88ed0a_image_2015-29.avif",
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#000111]">
      <div className="container relative z-10 px-5 md:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wide uppercase transition-all duration-300 border rounded-full bg-accent text-accent-foreground border-accent whitespace-nowrap">
              Uproas Milestone Clubs
            </div>
            
            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-5xl text-white">
              Get Rewarded for Your Ad Spend
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-white/70">
              Join our Milestone Program and earn exclusive trophies, curated mystery gifts, and leaderboard status as you scale your monthly ad spend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/milestones" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-primary hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
              >
                Learn More About Milestones
              </a>
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-transparent border border-white/10 rounded-lg hover:bg-white/5"
              >
                View Packages
              </a>
            </div>
          </div>

          {/* Right Column: Visual Tiered Display */}
          <div className="w-full lg:w-1/2 flex justify-center items-end relative min-h-[400px]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Trophies Grid */}
            <div className="relative grid grid-cols-3 items-end gap-2 md:gap-4 w-full max-w-lg">
              
              {/* Blue Milestone (Left) */}
              <div className="flex flex-col items-center group transition-all duration-500 hover:scale-105">
                <div className="glass-panel w-full pt-12 pb-6 px-2 rounded-t-2xl border-b-0 flex flex-col items-center justify-center bg-gradient-to-t from-primary/20 to-transparent">
                  <div className="relative w-full aspect-square mb-4">
                    <Image 
                      src={assets.blueTrophy} 
                      alt="Blue Milestone Trophy"
                      fill
                      className="object-contain drop-shadow-[0_0_15px_rgba(43,89,255,0.4)]"
                    />
                  </div>
                  <div className="text-center">
                    <span className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">Club 100K</span>
                    <span className="block text-sm font-semibold text-white/60">Blue Tier</span>
                  </div>
                </div>
              </div>

              {/* Gold Milestone (Center - Elevated) */}
              <div className="flex flex-col items-center z-10 -mb-4 group transition-all duration-500 hover:scale-105">
                <div className="glass-panel w-full pt-16 pb-8 px-4 rounded-t-2xl border-b-0 flex flex-col items-center justify-center bg-gradient-to-t from-yellow-500/20 to-transparent border-yellow-500/30">
                  <div className="relative w-full aspect-square mb-6">
                    <Image 
                      src={assets.goldTrophy} 
                      alt="Gold Milestone Trophy"
                      fill
                      className="object-contain drop-shadow-[0_0_25px_rgba(241,196,15,0.4)]"
                    />
                  </div>
                  <div className="text-center">
                    <span className="block text-sm font-bold text-[#f1c40f] uppercase tracking-widest mb-1">Club 1M+</span>
                    <span className="block text-base font-bold text-white leading-none">Elite Gold</span>
                  </div>
                </div>
              </div>

              {/* Silver Milestone (Right) */}
              <div className="flex flex-col items-center group transition-all duration-500 hover:scale-105">
                <div className="glass-panel w-full pt-12 pb-6 px-2 rounded-t-2xl border-b-0 flex flex-col items-center justify-center bg-gradient-to-t from-slate-400/20 to-transparent border-slate-400/30">
                  <div className="relative w-full aspect-square mb-4">
                    <Image 
                      src={assets.silverTrophy} 
                      alt="Silver Milestone Trophy"
                      fill
                      className="object-contain drop-shadow-[0_0_15px_rgba(148,163,184,0.4)]"
                    />
                  </div>
                  <div className="text-center">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Club 500K</span>
                    <span className="block text-sm font-semibold text-white/60">Silver Tier</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Floating Leaderboard Entry Mockup - positioned below or overlaying */}
        <div className="mt-20 glass-panel rounded-2xl p-1 overflow-hidden">
          <div className="relative h-24 md:h-32 w-full flex items-center px-6 md:px-12 bg-cover bg-center" style={{ backgroundImage: `url(${assets.leaderboardBg})` }}>
             <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
             <div className="relative w-full flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-black italic text-white/20">01</span>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white">Top Media Buyer</span>
                    <span className="text-sm text-success font-medium uppercase tracking-tighter">Current Leaderboard</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-white/70 uppercase tracking-widest leading-none mb-1">Total Scale</div>
                  <div className="text-2xl font-bold text-white">$4,290,000+</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;