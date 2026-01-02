"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, Star, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0612] pt-24 pb-20">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Radial Glow Effects - Using logo colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#BC2C7B] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#E44F71] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 px-5 lg:px-10 max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#BC2C7B] to-[#E44F71] border-2 border-[#0a0612]" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E44F71] to-[#E44F71] border-2 border-[#0a0612]" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E44F71] to-[#BC2C7B] border-2 border-[#0a0612]" />
              </div>
              <span className="text-sm font-medium text-white/80">Trusted by <span className="text-white font-bold">1,750+</span> advertisers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Premium Agency Ad Accounts for{' '}
              <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Unlimited Scaling
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-[540px] mx-auto lg:mx-0">
              Stop losing accounts. Scale your ads with whitelisted Meta, Google & TikTok agency accounts. Get unlimited spend, instant replacements, and dedicated rep access.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <a 
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(228,79,113,0.4)] group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://t.me/brandrahim"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <Image 
                  src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba72114ecacc7cbe7a790_Telegram.svg" 
                  alt="Telegram" 
                  width={20} 
                  height={20}
                  className="w-5 h-5"
                />
                Join Telegram
              </a>
            </div>

            {/* Social Proof Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-[#E44F71] text-[#E44F71]" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm">5.0</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <Image 
                src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66857b290df62758169994c6_trustpilot-stars.svg" 
                alt="Trustpilot" 
                width={84}
                height={20}
                className="h-5 w-auto"
              />
              <div className="h-4 w-px bg-white/20" />
              <span className="text-sm text-white/50">$50M+ in ad spend managed</span>
            </div>
          </div>

          {/* Right Column: Video/Visual Element */}
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] rounded-[1.5rem] opacity-20 blur-xl" />
            
            <div 
              className="relative rounded-[1.25rem] overflow-hidden border border-white/10 bg-[#150d1f] shadow-2xl cursor-pointer group"
              onClick={handlePlayVideo}
            >
              {/* Video Thumbnail/Player */}
              <div className="aspect-video relative">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68a5dac91e6443db4754e05b_rating-23.avif"
                  onEnded={() => setIsPlaying(false)}
                  playsInline
                >
                  <source src="https://uproas.sfo3.cdn.digitaloceanspaces.com/accelerate-testimonial.webm" type="video/webm" />
                </video>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] flex items-center justify-center shadow-[0_0_40px_rgba(228,79,113,0.5)] scale-100 group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="fill-white text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                      <Image 
                        src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66c4664a78732e6a9f5835ea_Kamil.webp"
                        alt="Kamil"
                        width={40}
                        height={40}
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Kamil Z.</p>
                      <p className="text-xs text-white/50">Scaled to $150K/mo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={12} className="fill-[#E44F71] text-[#E44F71]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -left-4 lg:-left-8 top-1/4 glass-panel px-4 py-3 rounded-xl border border-white/10 bg-[#150d1f]/90 backdrop-blur-md shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#10b981]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Active Spend</p>
                  <p className="text-lg font-bold text-white">$2.4M+</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 lg:-right-8 bottom-1/4 glass-panel px-4 py-3 rounded-xl border border-white/10 bg-[#150d1f]/90 backdrop-blur-md shadow-xl animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E44F71]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#E44F71]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Ban Rate</p>
                  <p className="text-lg font-bold text-white">0.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Logos Strip */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <p className="text-center text-sm text-white/40 uppercase tracking-widest mb-8">
            Official partners with leading ad platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <Image src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5e6713de7470d6fbf_facebook.svg" alt="Meta" width={32} height={32} className="h-8 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <Image src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5ee0f69154b58e522_google.svg" alt="Google" width={32} height={32} className="h-8 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <Image src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a558069249529ce2f3_tiktok.svg" alt="TikTok" width={32} height={32} className="h-8 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <Image src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a51e37f05dbfafd0d3_bing.svg" alt="Bing" width={32} height={32} className="h-8 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <Image src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5a2b997d3650086d9_outbrain.svg" alt="Outbrain" width={24} height={24} className="h-6 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <Image src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a6c1f88424f4b4df48_taboola.svg" alt="Taboola" width={24} height={24} className="h-6 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;