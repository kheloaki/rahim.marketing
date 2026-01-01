import React from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

const Milestones = () => {
  return (
    <section className="relative w-full bg-[#020412] text-white py-[80px] lg:py-[120px] overflow-hidden">
      <div className="container mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Background Card Container */}
        <div className="relative w-full rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[#080B1E] p-8 lg:p-16 overflow-hidden">
          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Header Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-[#2B7FFF] font-semibold text-[14px] uppercase tracking-wider mb-4 block">
                Brand Rahim Milestone Clubs
              </span>
              <h2 className="text-[36px] lg:text-[48px] font-bold leading-[1.1] mb-6">
                Get Rewarded for Your Ad Spend
              </h2>
              <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.6] mb-10 max-w-[500px]">
                Join our Milestone Program and earn exclusive trophies, curated mystery gifts, and leaderboard status as you scale your monthly ad spend.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/milestones"
                  className="inline-flex items-center justify-center bg-[#2B7FFF] hover:bg-[#1a6ae6] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  See This Month&apos;s Leaders
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a 
                  href="#claim"
                  className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  How to Claim
                </a>
              </div>
            </div>

            {/* Right Podium Display Section */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-end h-[400px]">
              {/* Podium Visuals */}
              <div className="flex items-end justify-center gap-4 w-full h-full relative">
                
                {/* 3rd Place - Silver */}
                <div className="flex flex-col items-center group">
                   <div className="absolute top-10 left-[15%] opacity-90 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-slate-700 border border-[rgba(255,255,255,0.2)]" />
                        <div className="flex flex-col">
                            <span className="text-[12px] font-bold">Joh•••• <Check className="inline w-3 h-3 text-blue-400" /></span>
                            <span className="text-[10px] text-[rgba(255,255,255,0.5)]">Total Ad Spend:</span>
                            <span className="text-[12px] font-bold">$3,732,000</span>
                        </div>
                    </div>
                  </div>
                  <div className="relative w-[120px] lg:w-[140px] h-[160px] bg-gradient-to-t from-[#1e2a4a] to-[#2B7FFF] rounded-xl flex flex-col items-center justify-center border border-[rgba(255,255,255,0.1)] shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl"></div>
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#E2E2E2] to-[#8C8C8C] flex items-center justify-center border-4 border-[#A0A0A0] shadow-[0_0_20px_rgba(226,226,226,0.5)]">
                        <div className="w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center rotate-45">
                            <div className="w-6 h-[2px] bg-white"></div>
                            <div className="w-6 h-[2px] bg-white -rotate-90"></div>
                        </div>
                    </div>
                  </div>
                </div>

                {/* 1st Place - Gold (Center) */}
                <div className="flex flex-col items-center z-10 group -mt-20">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-100 transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="flex items-center gap-2 mb-4 bg-black/40 backdrop-blur-md p-2 rounded-lg border border-white/5">
                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-blue-500" />
                            <div className="flex flex-col">
                                <span className="text-[12px] font-bold text-white">Mag•••• <Check className="inline w-3 h-3 text-blue-400" /></span>
                                <span className="text-[10px] text-[rgba(255,255,255,0.6)]">Total Ad Spend:</span>
                                <span className="text-[14px] font-extrabold text-[#FFD700]">$9,685,100</span>
                            </div>
                        </div>
                    </div>
                  <div className="relative w-[140px] lg:w-[180px] h-[260px] bg-gradient-to-t from-[#2c220f] to-[#A3964E] rounded-xl flex flex-col items-center justify-center border border-[rgba(255,255,255,0.2)] shadow-[0_0_50px_rgba(163,150,78,0.3)]">
                    <div className="absolute inset-0 bg-gold/10 blur-2xl"></div>
                    <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#FDE08D] to-[#A3964E] flex items-center justify-center border-4 border-[#D4AF37] shadow-[0_0_30px_rgba(253,224,141,0.6)]">
                         <div className="w-14 h-14 border-4 border-white/20 rounded-full flex items-center justify-center">
                            <div className="w-8 h-1 flex bg-white rotate-45 transform translate-y-2"></div>
                         </div>
                    </div>
                  </div>
                </div>

                {/* 2nd Place - Platinum/Silver */}
                <div className="flex flex-col items-center group">
                    <div className="absolute top-16 right-[5%] opacity-90 transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-slate-700 border border-[rgba(255,255,255,0.2)]" />
                            <div className="flex flex-col">
                                <span className="text-[12px] font-bold">Cl•••• <Check className="inline w-3 h-3 text-blue-400" /></span>
                                <span className="text-[10px] text-[rgba(255,255,255,0.5)]">Total Ad Spend:</span>
                                <span className="text-[12px] font-bold">$8,301,000</span>
                            </div>
                        </div>
                    </div>
                  <div className="relative w-[120px] lg:w-[140px] h-[200px] bg-gradient-to-t from-[#16273a] to-[#2B7FFF] rounded-xl flex flex-col items-center justify-center border border-[rgba(255,255,255,0.1)] shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl"></div>
                    <div className="relative z-10 w-18 h-18 rounded-full bg-gradient-to-br from-[#F5F5F5] to-[#B0B0B0] flex items-center justify-center border-4 border-[#C0C0C0] shadow-[0_0_20px_rgba(245,245,245,0.5)]">
                        <div className="w-10 h-10 border-2 border-white/40 rounded-full flex items-center justify-center">
                            <div className="w-6 h-[2px] bg-white translate-y-1"></div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Blur Backgrounds */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-blue-600/20 blur-[100px] -z-10"></div>
            </div>
          </div>

          {/* Abstract Floating Icons (from assets) */}
          <div className="absolute top-10 right-10 opacity-20 hidden lg:block pointer-events-none">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690ba63160dbee8f4bcf443d_milestones-18.svg" 
              alt="Floating Milestone Icon" 
              width={80} 
              height={80}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;