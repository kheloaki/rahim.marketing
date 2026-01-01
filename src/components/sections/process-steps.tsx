import React from 'react';
import Image from 'next/image';

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Step 1: Submit Your Business Info',
      description: "Tell us about your website and business so we can assess if you're the right fit for our premium ad accounts.",
    },
    {
      number: 2,
      title: 'Step 2: Fund Your Account Easily',
      description: 'Once approved, your agency account is delivered within 24 hours. Fund via card, crypto, or direct bank transfer.',
    },
    {
      number: 3,
      title: 'Step 3: Launch Ads with Confidence',
      description: 'Start running ads immediately—with stable accounts designed for scale and full ban protection.',
    },
  ];

  return (
    <section className="bg-[#020412] text-white py-[120px] relative overflow-hidden">
      <div className="container mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-[#2B7FFF] text-[14px] font-semibold uppercase tracking-wider mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.2] mb-6 max-w-[800px]">
            Rent Facebook Ad Accounts in 3 Simple Steps
          </h2>
          <p className="text-[rgba(255,255,255,0.6)] text-[18px] max-w-[700px]">
            Getting started is fast, simple, and designed to improve your campaign performance—no stress, no bans.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-12">
          {/* Left Side: Step Markers and Text */}
          <div className="w-full lg:w-1/2 flex relative">
            {/* Vertical Line */}
            <div className="absolute left-[7px] top-[10px] bottom-[10px] w-[1px] bg-[rgba(255,255,255,0.1)] hidden md:block" />
            
            <div className="flex flex-col gap-12 w-full">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 md:gap-10 relative group">
                  {/* Step Marker */}
                  <div className="hidden md:flex flex-shrink-0 w-[15px] h-[15px] rounded-full bg-[#020412] border-[1px] border-[rgba(255,255,255,0.2)] z-10 mt-2 group-first:bg-[#2B7FFF] group-first:border-[#2B7FFF] transition-colors" />
                  
                  <div className="flex flex-col">
                    <h3 className="text-[20px] md:text-[24px] font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[rgba(255,255,255,0.6)] text-[16px] md:text-[18px] leading-[1.6]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Graphic Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Decorative Blue Glow Background */}
              <div 
                className="absolute inset-0 rounded-[24px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(43, 127, 255, 0.4) 0%, rgba(8, 11, 30, 0) 100%)',
                  filter: 'blur(40px)',
                  opacity: 0.5
                }}
              />
              
              <div className="relative h-full w-full rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(8,11,30,0.8)] backdrop-blur-xl flex flex-col items-center justify-center p-8 overflow-hidden">
                {/* Submit Info Card Graphic */}
                <div className="bg-[#080B1E] border border-[rgba(255,255,255,0.1)] rounded-[16px] p-8 w-full max-w-[320px] text-center flex flex-col items-center gap-6 shadow-2xl">
                  <div className="w-20 h-20 bg-[rgba(255,255,255,0.05)] rounded-full flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[rgba(255,255,255,0.6)]">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[20px] font-semibold">Submit Business Info</h4>
                    <p className="text-[14px] text-[rgba(255,255,255,0.4)] leading-snug">
                      Tell us about your website and business so we can assess
                    </p>
                  </div>
                </div>

                {/* Shifting elements placeholder / Animation context */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,127,255,0.15)_0%,transparent_70%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;