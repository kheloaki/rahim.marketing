import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight, MessageCircle, Send } from 'lucide-react';

/**
 * Hero component for the Facebook Agency Ad Accounts landing page.
 * Replicated with pixel-perfect accuracy based on provided designs and computed styles.
 */
const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[100px] overflow-hidden bg-[#020412]">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] rounded-full bg-[#2B7FFF] opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#2B7FFF] opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <div className="flex-1 max-w-[640px]">
            {/* Trustpilot Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center bg-[#080B1E] border border-white/10 rounded-full px-3 py-1.5">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68617f6e5cafcdc938e782f7_trustpilotstars-6.avif" 
                  alt="Trustpilot stars" 
                  width={90} 
                  height={18} 
                  className="object-contain"
                />
                <span className="ml-2 text-sm font-semibold text-white">4.9/5</span>
              </div>
              <div className="flex items-center -space-x-2">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68eff94e932c432dd4fb33a3_our_20customers-7.avif" 
                  alt="Trusted customers" 
                  width={80} 
                  height={30} 
                  className="rounded-full"
                />
              </div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-white/60">
                TRUSTED BY 1,750+ BUSINESSES
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
              Facebook Agency <br />
              Ad Accounts
            </h1>

            {/* Sub-headline */}
            <p className="text-[18px] text-white/60 mb-8 max-w-[540px] leading-[1.6]">
              Scale Without Limits, avoid bans and run Ads on steroids with Facebook Agency Ad Accounts.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">Run Ads for Almost Any Vertical</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">No Bans & Restrictions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">Get Cashback on ad Spend</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="https://t.me/brandrahim" 
                className="flex items-center gap-2 bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 transition-colors px-6 py-4 rounded-[8px] font-semibold text-white"
              >
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                  <Send className="w-3 h-3 text-white fill-white" />
                </div>
                Chat with us
              </a>
              <a 
                href="https://wa.me/37258956859" 
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 transition-colors px-6 py-4 rounded-[8px] font-semibold text-white"
              >
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-white fill-white" />
                </div>
                Chat with us
              </a>
              <a 
                href="#pricing" 
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors px-6 py-4 rounded-[8px] font-semibold text-white"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Small Testimonial Card */}
            <div className="glass-morphism rounded-xl p-6 glow-blue max-w-[440px] border border-white/10">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-[#25D366] fill-[#25D366]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-bold text-white">5.0</span>
              </div>
              <p className="italic text-white mb-3 text-[15px] leading-relaxed">
                &quot;These ad accounts are different. You&apos;ll know immediately&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="text-sm">
                  <span className="font-bold text-white block">Marcus N.</span>
                  <span className="text-white/60 text-xs">Ecom Brand Owner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Preview */}
          <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[580px] aspect-[1/1] bg-[#080B1E] border border-white/10 rounded-[24px] overflow-hidden p-[2px]">
              {/* Inner Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
              
              {/* Mock FB Ad Interface */}
              <div className="relative w-full h-full bg-[#020412] rounded-[22px] overflow-hidden p-6 flex flex-col">
                {/* FB Post Header */}
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 rounded-full bg-[#080B1E] flex items-center justify-center border border-white/10">
                     <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/685accf8c39773732471ca10_Facebook-36.svg" 
                      alt="FB icon" 
                      width={24} 
                      height={24}
                     />
                   </div>
                   <div className="flex-1">
                     <div className="h-2.5 w-32 bg-white/10 rounded-full mb-2" />
                     <div className="flex items-center gap-2">
                       <span className="text-[10px] text-white/40">Sponsored</span>
                       <div className="w-1 h-1 rounded-full bg-white/20" />
                       <div className="w-3 h-3 text-white/40"><svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg></div>
                     </div>
                   </div>
                </div>

                <div className="h-2 w-full bg-white/10 rounded-full mb-3" />
                <div className="h-2 w-2/3 bg-white/10 rounded-full mb-6" />

                {/* Main Ad Image Replacement */}
                <div className="relative flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#d946ef] flex flex-col items-center justify-center text-center p-8">
                  <div className="absolute inset-0 bg-black/10" />
                  <h3 className="text-[28px] lg:text-[40px] font-bold text-white mb-6 relative z-10 leading-[1.1]">
                    Unlock Limitless <br /> Advertising
                  </h3>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center relative z-10 shadow-2xl">
                     <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/685accf8c39773732471ca10_Facebook-36.svg" 
                      alt="FB icon" 
                      width={44} 
                      height={44}
                     />
                  </div>
                  
                  {/* Floating Bubbles/Badges in Ad */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 w-full px-4">
                    <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-wider text-white border border-white/10">No Restrictions</div>
                    <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-wider text-white border border-white/10">Unlimited Ad Accounts</div>
                    <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-wider text-white border border-white/10">24/7 Customer Support</div>
                  </div>
                </div>

                {/* FB Post Footer */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-2 w-48 bg-white/10 rounded-full" />
                  <div className="bg-white/10 px-4 py-2 rounded text-[12px] font-semibold text-white/60">
                    Shop now
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-[#1877F2] flex items-center justify-center ring-1 ring-[#020412]">
                        <svg className="w-2 h-2 text-white fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-[#fa3e3e] flex items-center justify-center ring-1 ring-[#020412]">
                        <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      </div>
                    </div>
                    <span className="text-[11px] text-white/40">100</span>
                  </div>
                  <div className="text-[11px] text-white/40 flex gap-2">
                    <span>2 Comments</span>
                    <span>5 Shares</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Logo Cloud Section - Part of Hero visual cleanup */}
        <div className="mt-20 lg:mt-32 pt-10 border-t border-white/5 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-[1000px] lg:min-w-0 opacity-40 hover:opacity-100 transition-opacity duration-500">
            <Image src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/688dd38b68b6787dbc2c30b7_dolphinanty.avif" alt="Dolphin" width={110} height={24} className="grayscale brightness-0 invert" />
            <Image src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/688bc3d7d132b191aa4b04dc_moropay.svg" alt="Wetracked" width={120} height={24} className="grayscale brightness-0 invert" />
            <Image src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/688bc3d7ba481a32d8b594c5_floxy.svg" alt="Floxy" width={100} height={24} className="grayscale brightness-0 invert" />
            <div className="text-[16px] font-bold text-white tracking-widest uppercase">Chargeback</div>
            <div className="text-[16px] font-bold text-white tracking-widest uppercase">Incogniton</div>
            <div className="text-[16px] font-bold text-white tracking-widest uppercase">MoreLogin</div>
            <div className="text-[16px] font-bold text-white tracking-widest uppercase">Engine</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;