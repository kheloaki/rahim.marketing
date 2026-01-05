import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, MoveRight, Star } from 'lucide-react';

/**
 * HeroPopup Component
 * A pixel-perfect clone of the central hero modal for 'High-Risk Facebook Ads Playbook'.
 * Theme: Dark
 */
const HeroPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [platform, setPlatform] = useState<'telegram' | 'whatsapp'>('telegram');

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="relative w-full max-w-[600px] bg-[#150d1f] border border-white/10 rounded-[20px] glow-blue overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button Header - Sticky */}
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-[#150d1f]/95 backdrop-blur-sm border-b border-white/5">
          <button 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors py-2 px-3 rounded-lg border border-white/10 hover:bg-white/5"
          >
            I&apos;m not Interested
          </button>
        </div>

        <div className="px-4 md:px-8 pb-8 pt-4 flex flex-col items-center">
          {/* Main Title */}
          <h2 className="text-[24px] md:text-[28px] font-bold text-center leading-[1.1] mb-3 text-white">
            Unlock the Complete High-Risk <br /> Facebook Ads Playbook
          </h2>
          
          <p className="text-[14px] md:text-[15px] text-white/60 text-center max-w-[500px] mb-6">
            Get instant access to the 3 books used by top-tier advertisers to run aggressive campaigns, stay unbanned, and scale to 7–9 figures.
          </p>

          {/* Book Mockup Section */}
          <div className="w-full glass-panel rounded-[12px] p-4 mb-6 flex flex-col md:flex-row items-center gap-4 border-white/5">
            <div className="relative w-[200px] h-[130px] shrink-0">
              {/* Using assets provided directly as fallback references for mockups */}
              <div className="relative flex items-center justify-center">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6912f75a7fb7a49c4e008082_bcb2da77df23ae8b0fae36d27-6.avif"
                  alt="Book Mockup 1"
                  width={85}
                  height={115}
                  className="relative z-30 shadow-2xl rounded-sm transform -rotate-6 -translate-x-6"
                />
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6912fbb1897945ca186105f0_16b5eda3c20e69ec256f351d7-7.avif"
                  alt="Book Mockup 2"
                  width={95}
                  height={120}
                  className="absolute z-40 shadow-2xl rounded-sm"
                />
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68af566490a4b25644947adc_5802c0bf34869e6acbf32a6fd-24.avif"
                  alt="Book Mockup 3"
                  width={85}
                  height={115}
                  className="absolute z-30 shadow-2xl rounded-sm transform rotate-6 translate-x-6"
                />
              </div>
            </div>

            <div className="flex-1">
              <p className="text-[12px] font-semibold text-white/40 uppercase tracking-wider mb-3">You Unlock All 3 Books Including:</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded bg-primary text-[11px] font-bold shrink-0 mt-0.5">1</span>
                  <p className="text-[13px] font-medium text-white/90">
                    Book I: Bulletproof Facebook Account Structures <span className="text-white/30 line-through ml-1">$975</span> <span className="text-white font-bold ml-1">Free</span>
                  </p>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded bg-primary text-[11px] font-bold shrink-0 mt-0.5">2</span>
                  <p className="text-[13px] font-medium text-white/90">
                    Book II: Running Aggressive Facebook Campaigns <span className="text-white/30 line-through ml-1">$1115</span> <span className="text-white font-bold ml-1">Free</span>
                  </p>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded bg-primary text-[11px] font-bold shrink-0 mt-0.5">3</span>
                  <p className="text-[13px] font-medium text-white/90">
                    Book III: Agency Ad Accounts 101 <span className="text-white/30 line-through ml-1">$2155</span> <span className="text-white font-bold ml-1">Free</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Lead Gen Form */}
          <div className="w-full bg-[#E44F71] rounded-[12px] p-4 md:p-6">
            <h3 className="text-[18px] font-bold text-white mb-4">Enter Your Details to Get the Books Free</h3>
            
            <form 
              className="space-y-3" 
              onSubmit={(e) => {
                e.preventDefault();
                const usernameInput = e.currentTarget.querySelector('input[type="text"]') as HTMLInputElement;
                const username = usernameInput?.value || '';
                
                if (platform === 'telegram') {
                  window.open(`https://t.me/rahim_ou`, '_blank');
                } else if (platform === 'whatsapp') {
                  window.open('https://wa.me/message/WKWQWAZSRAU3N1', '_blank');
                }
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-[#150d1f]/40 border border-white/10 rounded-[8px] h-[44px] px-3 text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium">Business Email Address</label>
                  <input 
                    type="email" 
                    placeholder="johndoe32@gmail.com" 
                    className="w-full bg-[#150d1f]/40 border border-white/10 rounded-[8px] h-[44px] px-3 text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>

              {/* Platform Selection */}
              <div className="flex bg-[#150d1f]/40 p-1 rounded-[8px] border border-white/10 w-fit">
                <button 
                  onClick={() => setPlatform('telegram')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[13px] font-semibold transition-all ${platform === 'telegram' ? 'bg-[#150d1f] text-white' : 'text-white/60 hover:text-white'}`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full border border-white/20 flex items-center justify-center ${platform === 'telegram' ? 'bg-[#E44F71]' : ''}`}>
                    {platform === 'telegram' && <div className="w-1 h-1 rounded-full bg-white" />}
                  </div>
                  Telegram
                </button>
                <button 
                  onClick={() => setPlatform('whatsapp')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[13px] font-semibold transition-all ${platform === 'whatsapp' ? 'bg-[#150d1f] text-white' : 'text-white/60 hover:text-white'}`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full border border-white/20 flex items-center justify-center ${platform === 'whatsapp' ? 'bg-[#E44F71]' : ''}`}>
                    {platform === 'whatsapp' && <div className="w-1 h-1 rounded-full bg-white" />}
                  </div>
                  Whatsapp
                </button>
              </div>

              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-white/40">
                  {platform === 'telegram' ? (
                     <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.303.48-.429-.012-1.253-.245-1.865-.444-.754-.245-1.354-.374-1.301-.79.028-.217.326-.44.896-.67 3.509-1.527 5.848-2.534 7.018-3.02 3.333-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.049a11.82 11.82 0 001.592 5.96L0 24l6.101-1.6a11.816 11.816 0 005.942 1.596h.005c6.634 0 12.043-5.411 12.046-12.049a11.83 11.83 0 00-3.535-8.414"/></svg>
                  )}
                  <span className="text-[12px]">@</span>
                </div>
                <input 
                  type="text" 
                  placeholder={platform === 'telegram' ? 'rahim_ou' : 'your username'} 
                  className="w-full bg-[#150d1f]/40 border border-white/10 rounded-[8px] h-[44px] pl-[48px] pr-3 text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                />
              </div>

              <button className="w-full h-[48px] bg-[#1a42cc] hover:bg-[#1534a6] text-white font-bold rounded-[8px] flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98] text-[14px]">
                Get All 3 E-Books For Free
                <MoveRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Testimonial Block */}
          <div className="w-full border-t border-white/10 mt-6 pt-6">
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-[#10b981] text-[#10b981]" />
              ))}
              <span className="text-[13px] font-bold ml-2 text-white">5.0</span>
            </div>
            
            <p className="text-[13px] italic text-white/80 leading-relaxed mb-4">
              &quot;These guides changed everything. We applied the structures and instantly stopped losing accounts. The aggressive scaling book alone is worth thousands.&quot;
            </p>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden">
                <Image 
                  src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66c4664a78732e6a9f5835ea_Kamil.webp" 
                  alt="Kamil Z." 
                  width={32} 
                  height={32}
                  unoptimized
                />
              </div>
              <div>
                <p className="text-[13px] font-bold text-white">Kamil Z.</p>
                <p className="text-[11px] text-white/50">SaaS Founder & Rahim Marketing Client</p>
              </div>
            </div>
          </div>

          {/* Accordion Footer */}
          <div className="w-full mt-4 border border-white/10 rounded-[10px] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors">
              <span className="text-[12px] font-bold text-white uppercase tracking-wider">What You&apos;ll Get:</span>
              <ChevronDown className="w-4 h-4 text-white/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPopup;