import React from 'react';
import Image from 'next/image';
import { Mail, ArrowRight, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#02040a] text-white pt-20 pb-10 border-t border-white/10 font-sans">
      <div className="container mx-auto px-5 lg:px-10 max-w-[1280px]">
        {/* Top Section: Newsletter and Partner Badges */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16 px-1">
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-3 tracking-tight">Subscribe to our newsletter</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Get a summary of what we&apos;ve shipped during the last month, behind the scenes updates, and team picks.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow min-w-[300px]">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 opacity-40" />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all group">
              Get Access
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Partner Logos Row */}
        <div className="flex flex-wrap items-center justify-between gap-8 mb-16 border-b border-white/10 pb-16 px-1">
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white rounded p-3 h-[44px] flex items-center">
              <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5ee0f69154b58e522_google.svg" alt="Google Partner" className="h-5" />
              <span className="text-[#5f6368] text-[10px] font-bold ml-2 uppercase tracking-tighter">Partner</span>
            </div>
            <div className="bg-white rounded p-3 h-[44px] flex items-center">
              <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5e6713de7470d6fbf_facebook.svg" alt="Meta Partner" className="h-5" />
              <div className="ml-2 flex flex-col leading-none">
                <span className="text-black text-[12px] font-bold">Meta</span>
                <span className="text-black text-[8px] uppercase">Business partner</span>
              </div>
            </div>
            <div className="bg-white rounded p-3 h-[44px] flex items-center">
              <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a558069249529ce2f3_tiktok.svg" alt="TikTok Partner" className="h-5" />
              <div className="ml-2 flex flex-col leading-none">
                <span className="text-black text-[10px] font-bold uppercase">Agency Partner</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690bbea6617a6bb8ebcd020a_G2-51.svg" 
              alt="G2 User Reviews" 
              width={80} 
              height={40} 
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="flex items-center bg-[#00b67a]/10 border border-[#00b67a]/20 rounded-lg px-4 py-2">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690bbea6919c5fb7e0ab68e6_TP-52.svg" 
                alt="Trustpilot" 
                width={80} 
                height={20} 
              />
              <div className="ml-3 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="bg-[#00b67a] p-[2px] rounded-sm">
                    <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-20 px-1">
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 opacity-90">Agency Ad Accounts</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Facebook Ad Accounts</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Google Ad Accounts</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">TikTok Ad Accounts</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Bing Ad Accounts</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Taboola Ad Accounts</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Outbrain Ad Accounts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 opacity-90">Assets</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Facebook Accounts</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Business Managers</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Facebook Pages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 opacity-90">Other Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Facebook Feedback Score</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Account Health Assessment</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Unban Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 opacity-90">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Milestones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 opacity-90">Partner Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Proxies</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Payment Processor</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Anti-Detect Browser</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 opacity-90">Our Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 px-1">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66857660d17fcbc0b572ffd2_uproas-logo-white.svg" alt="Uproas" className="h-6" />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Uproas is the leading provider of premium agency ad accounts for Meta, Google, and TikTok. Trusted by 1750+ advertisers worldwide.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="flex flex-wrap items-center gap-6 text-[12px] font-medium tracking-tight">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Purchase Policy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Service Agreement</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              <div className="flex items-center gap-2 ml-2">
                <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba721b0dc38ed805629c4_visa.svg" alt="Visa" className="h-3.5 grayscale opacity-70" />
                <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba721606cf64731872df0_mastercard.svg" alt="Mastercard" className="h-3.5 grayscale opacity-70" />
                <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba7218685b86ae978abc9_amex.svg" alt="Amex" className="h-3.5 grayscale opacity-70" />
                <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba7211a4449045620958f_applepay.svg" alt="Apple Pay" className="h-3.5 grayscale opacity-70" />
                <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba72199d89daa35bb8831_discover.svg" alt="Discover" className="h-3.5 grayscale opacity-70" />
                <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba721113b2c9535805f1d_bitcoin.svg" alt="Bitcoin" className="h-3.5 grayscale opacity-70" />
              </div>
            </div>
            <div className="text-[12px] text-white/50 font-medium">
              © 2025 Uproas — All rights owned by <span className="text-white opacity-100">Uproas</span> & designed by <span className="text-white opacity-100">Webivera</span>.
            </div>
          </div>
        </div>
      </div>

      {/* Floating Support Widgets */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a 
          href="https://t.me/uproas" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#0088cc] hover:bg-[#0077b5] transition-colors p-3.5 rounded-full shadow-lg"
        >
          <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/68ef9084b0173e2d48fb3926_Telegram-53.svg" alt="Telegram" className="w-6 h-6" />
        </a>
        <a 
          href="https://wa.me/37258956859" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#25D366] hover:bg-[#20ba59] transition-colors p-3.5 rounded-full shadow-lg"
        >
          <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/68ef9084b0173e2d48fb3925_Whatsapp-54.svg" alt="WhatsApp" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;