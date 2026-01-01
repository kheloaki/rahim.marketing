import React from 'react';
import Image from 'next/image';

const CTABanner = () => {
  // Asset provided in the prompt: cash counting machine background/elements
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6909cb9a592ba8bd0c1983a2_68ef859babb16a4a5525c96a_-11.avif";

  return (
    <section className="py-[120px] lg:py-[160px] px-5 lg:px-10 flex justify-center items-center bg-[#02040a]">
      <div className="container max-w-[1280px]">
        <div className="relative w-full rounded-[20px] overflow-hidden min-h-[400px] lg:min-h-[480px] flex flex-col items-center justify-center text-center p-8 lg:p-16 border border-white/10 shadow-[0_0_40px_0_rgba(43,89,255,0.15)] bg-[#150d1f]">
          
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
            <Image
              src={backgroundImage}
              alt="Cash counting background"
              fill
              className="object-cover lg:object-contain"
              priority
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#150d1f]/60 via-[#150d1f]/20 to-[#150d1f]/60" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col items-center max-w-[900px]">
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-6">
              Tired of watching your competitors scale while you&apos;re getting banned right & left?
            </h2>
            
            <p className="text-[1.125rem] text-white opacity-90 font-medium mb-10 max-w-[700px]">
              This is your infrastructure upgrade. Your whitelist. Your rep access.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a
                href="#request-access"
                className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-white text-[#02040a] font-bold text-base transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                Request Access
              </a>
              
              <div className="text-[0.875rem] text-white/60 font-semibold tracking-wide">
                Limited access. No BS. Just results.
              </div>
            </div>
          </div>

          {/* Subtle Glow Effect */}
          <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[#f97316] opacity-10 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CTABanner;