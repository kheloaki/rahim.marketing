import React from 'react';
import Image from 'next/image';

const ContentBanner = () => {
  // Asset matches the banknote machine background/illustration from the screenshots
  const bannerAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6909cbfa6679c795d2eb40cc_688c950293488f10e3a7ae47_-8.avif";

  return (
    <section className="py-[120px] px-6 md:px-8 lg:px-12 bg-[#020412]">
      <div className="container mx-auto max-w-[1280px]">
        {/* Main Banner Container */}
        <div 
          className="relative overflow-hidden rounded-[24px] bg-[#080B1E] border border-white/10 glow-blue transition-all duration-300"
          style={{
            backgroundImage: `linear-gradient(rgba(8, 11, 30, 0.8), rgba(8, 11, 30, 0.8)), url(${bannerAsset})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 md:py-20 lg:py-24 max-w-[800px] mx-auto">
            {/* Headline */}
            <h2 className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-semibold tracking-[-0.02em] leading-[1.2] mb-6">
              Tired of watching your competitors scale while you&apos;re getting banned right &amp; left?
            </h2>

            {/* Sub-headline */}
            <p className="text-white/60 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-[650px]">
              This is your infrastructure upgrade. Your whitelist. Your rep access.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-6">
              <a
                href="#contact"
                className="bg-white text-[#020412] px-8 py-4 rounded-[8px] text-base font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98] inline-block shadow-lg"
              >
                Request Access
              </a>

              {/* Tagline */}
              <div className="text-white/60 text-sm md:text-base font-medium tracking-wide">
                Limited access. No BS. Just results.
              </div>
            </div>
          </div>

          {/* Decorative Gradients for Depth */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#080B1E]/60 via-transparent to-[#080B1E]/60"></div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#080B1E] via-transparent to-[#080B1E]/20"></div>
          
          {/* Subtle Blue Glow in the background of the text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#2B7FFF]/10 blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ContentBanner;