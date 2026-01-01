import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="relative py-[120px] md:py-[160px] bg-[#02040a] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2b59ff] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[rgba(43,89,255,0.3)] bg-[rgba(43,89,255,0.1)] text-[#2b59ff] text-sm font-semibold tracking-wide uppercase">
            Process
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Get your Agency Ad Accounts in 3 Simple Steps
          </h2>
          <p className="max-w-[720px] mx-auto text-[1.125rem] text-[rgba(255,255,255,0.6)] leading-relaxed">
            Getting started is fast, simple, and designed to keep your campaigns running smoothly—no stress, no bans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Side: Steps */}
          <div className="lg:col-span-6 space-y-12">
            {/* Step 1 */}
            <div className="group relative flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(43,89,255,0.1)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#2b59ff] font-bold text-xl group-hover:bg-[#2b59ff] group-hover:text-white transition-all duration-300">
                1
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Step 1: Submit Your Business Info
                </h3>
                <p className="text-[1.125rem] text-[rgba(255,255,255,0.6)] leading-relaxed">
                  Tell us about your website and business so we can assess if you&apos;re the right fit for our premium ad accounts.
                </p>
              </div>
              {/* Connector Line */}
              <div className="absolute left-6 top-14 w-px h-10 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-transparent" />
            </div>

            {/* Step 2 */}
            <div className="group relative flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(43,89,255,0.1)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#2b59ff] font-bold text-xl group-hover:bg-[#2b59ff] group-hover:text-white transition-all duration-300">
                2
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Step 2: Fund Your Account Easily
                </h3>
                <p className="text-[1.125rem] text-[rgba(255,255,255,0.6)] leading-relaxed">
                  Once approved, your agency account is delivered within 24 hours. Fund via card, crypto, or direct bank transfer.
                </p>
              </div>
              {/* Connector Line */}
              <div className="absolute left-6 top-14 w-px h-10 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-transparent" />
            </div>

            {/* Step 3 */}
            <div className="group relative flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(43,89,255,0.1)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#2b59ff] font-bold text-xl group-hover:bg-[#2b59ff] group-hover:text-white transition-all duration-300">
                3
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Step 3: Launch Ads with Confidence
                </h3>
                <p className="text-[1.125rem] text-[rgba(255,255,255,0.6)] leading-relaxed">
                  Start running ads immediately—with stable accounts designed for scale and full ban protection.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Graphic Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative group p-1 rounded-[2rem] bg-gradient-to-br from-[rgba(43,89,255,0.2)] via-transparent to-[rgba(0,204,255,0.2)] shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
              {/* Inner Card Content Base */}
              <div className="absolute inset-2 rounded-[1.8rem] bg-[#0a0d1a] border border-[rgba(255,255,255,0.05)]" />
              
              {/* Stylized UI Element Representative of a card */}
              <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col items-center justify-center text-center">
                <div className="relative w-full max-w-[400px]">
                  {/* Floating Elements effect */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2b59ff] opacity-20 blur-[60px] rounded-full animate-pulse" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00ccff] opacity-20 blur-[60px] rounded-full animate-pulse" />
                  
                  {/* Mockup Card Design */}
                  <div className="relative glass-panel rounded-2xl p-8 border border-[rgba(255,255,255,0.1)] bg-[rgba(10,13,26,0.6)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-12 h-8 bg-gradient-to-r from-[#2b59ff] to-[#00ccff] rounded-md opacity-80" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.2)]" />
                        <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.2)]" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-12 text-left">
                      <div className="h-2 w-3/4 bg-[rgba(255,255,255,0.1)] rounded" />
                      <div className="h-2 w-1/2 bg-[rgba(255,255,255,0.1)] rounded" />
                    </div>

                    <div className="flex items-end justify-between">
                      <div className="text-xl font-mono tracking-widest text-white/80 uppercase">
                        Active Account
                      </div>
                      <div className="text-xs font-mono text-white/40">
                        00/00
                      </div>
                    </div>
                  </div>

                  {/* Overlapping Status Badge */}
                  <div className="absolute -bottom-4 -right-4 glass-panel px-6 py-4 rounded-xl border border-[rgba(0,204,102,0.3)] bg-[rgba(0,204,102,0.1)] shadow-xl animate-bounce duration-[3s]">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#00cc66] rounded-full shadow-[0_0_10px_#00cc66]" />
                      <span className="text-white font-semibold text-sm">Whitelisted Level 1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Arrow SVG from assets if needed, otherwise general styling suffices */}
              <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/685d6f71d832b4495e440669_arrow-39.svg"
                  width={60}
                  height={60}
                  alt=""
                  className="invert brightness-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;