import React from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Navigation = () => {
  return (
<div 
        className="navbar7_component fixed top-0 left-0 right-0 z-[1000] flex h-[89px] items-center bg-[#0a0612] px-5 lg:px-10 border-b border-white/10"
      style={{ fontFamily: 'Inter, Arial, sans-serif' }}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
{/* Logo */}
<Link href="/" className="flex-shrink-0">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-design-56-1767290636447.png?width=8000&height=8000&resize=contain" 
                alt="rahim logo" 
                className="h-10 w-auto"
              />
            </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Agency Accounts Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-base font-medium text-white transition-opacity hover:opacity-80">
              Agency Accounts
              <ChevronDown className="h-4 w-4 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            {/* Mega Menu Dropdown */}
            <div className="invisible absolute left-1/2 top-full mt-2 w-screen max-w-[1200px] -translate-x-1/2 transform opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#150d1f] shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-1 p-8 lg:p-10">
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">Agency ad accounts</h3>
                    <div className="mt-6 grid grid-cols-2 gap-x-12 gap-y-6 lg:grid-cols-3">
                      <DropdownLink 
                        href="/services/facebook-agency-ad-account"
                        icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5e6713de7470d6fbf_facebook.svg"
                        title="Facebook Agency Ad Accounts"
                        desc="Get a Meta Agency Ad Account"
                      />
                      <DropdownLink 
                        href="/services/google-ads-agency-account"
                        icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5ee0f69154b58e522_google.svg"
                        title="Google Agency Ad Accounts"
                        desc="Get a Google Agency Ad Account"
                      />
                      <DropdownLink 
                        href="/services/tiktok-agency-account"
                        icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a558069249529ce2f3_tiktok.svg"
                        title="TikTok Agency Ad Accounts"
                        desc="Get a TikTok Agency Ad Account"
                      />
                      <DropdownLink 
                        href="/services/bing-agency-accounts"
                        icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a51e37f05dbfafd0d3_bing.svg"
                        title="Bing Agency Ad Accounts"
                        desc="Get a Bing Agency Ad Account"
                      />
                      <DropdownLink 
                        href="/services/taboola-agency-ad-accounts"
                        icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a6c1f88424f4b4df48_taboola.svg"
                        title="Taboola Agency Accounts"
                        desc="Get a Taboola Agency Account"
                      />
                      <DropdownLink 
                        href="/services/outbrain-agency-ad-accounts"
                        icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5a2b997d3650086d9_outbrain.svg"
                        title="Outbrain Agency Accounts"
                        desc="Get an Outbrain Agency Account"
                      />
                    </div>
                  </div>

                  {/* Bottom Contact Bar */}
                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-6">
                    <div className="max-w-md">
                      <h4 className="text-sm font-semibold text-white">Contact Uproas</h4>
                      <p className="mt-1 text-sm text-white/60">Message us on telegram or Whatsapp for real-time time support from industry specialists.</p>
                    </div>
                    <div className="flex gap-4">
                      <SocialButton variant="telegram" href="https://t.me/uproas" />
                      <SocialButton variant="whatsapp" href="https://api.whatsapp.com/send/?phone=37258956859" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Services Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-base font-medium text-white transition-opacity hover:opacity-80">
              Other Services
              <ChevronDown className="h-4 w-4 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="invisible absolute left-1/2 top-full mt-2 w-[800px] -translate-x-1/2 transform opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
               <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d1a] shadow-2xl backdrop-blur-xl p-8">
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-6">Assets</h3>
                      <div className="space-y-6">
                        <DropdownLink href="/products/buy-facebook-accounts" icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a5e6713de7470d6fbf_facebook.svg" title="Facebook Accounts" desc="Aged, verified profiles for stability." />
                        <DropdownLink href="/products/buy-facebook-business-managers" icon="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/690b9e8ff01c0cfaf629b82e_4db4364723691601ed55b96e-1.avif" title="Business Managers" desc="Clean BMs with proper structure." />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-6">Partner Services</h3>
                      <div className="space-y-6">
                        <PartnerLink 
                          href="https://www.floxy.io" 
                          bg="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/690ba392cb6b1315e6ed583f_floxy-3.avif"
                          title="Proxies" 
                          desc="Real-user residential IPs." 
                        />
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Resources link */}
          <a href="/resources" className="text-base font-medium text-white transition-opacity hover:opacity-80">Resources</a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a 
            href="https://t.me/uproas" 
            className="hidden sm:flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(228,79,113,0.4)]"
          >
            <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba72114ecacc7cbe7a790_Telegram.svg" alt="Telegram" className="h-5 w-5" />
            Join Telegram
          </a>
          <a 
            href="/request-access" 
            className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            Request Access
            <ArrowRight className="h-4 w-4" />
          </a>
          
          {/* Mobile Menu Toggle (Simplified) */}
          <button className="lg:hidden p-2 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const DropdownLink = ({ href, icon, title, desc }: { href: string; icon: string; title: string; desc: string }) => (
  <a href={href} className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/5">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 p-2 transition-colors group-hover:bg-white/10">
      <img src={icon} alt="" className="h-full w-full object-contain" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-white group-hover:text-[#E44F71] transition-colors">{title}</span>
      <span className="text-xs text-white/60 mt-1 line-clamp-1">{desc}</span>
    </div>
  </a>
);

const PartnerLink = ({ href, bg, title, desc }: { href: string; bg: string; title: string; desc: string }) => (
  <a href={href} className="group relative block overflow-hidden rounded-xl border border-white/10 p-5 transition-all hover:bg-white/5">
    <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
      <img src={bg} alt="" className="h-full w-full object-cover" />
    </div>
    <div className="relative z-10">
      <h4 className="text-sm font-bold text-white mb-2">{title}</h4>
      <p className="text-xs text-white/60 mb-3">{desc}</p>
      <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#E44F71]">
        Learn More <ArrowRight className="h-3 w-3" />
      </div>
    </div>
  </a>
);

const SocialButton = ({ variant, href }: { variant: 'telegram' | 'whatsapp'; href: string }) => {
  const isTelegram = variant === 'telegram';
  const icon = isTelegram 
    ? "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba72114ecacc7cbe7a790_Telegram.svg"
    : "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba7219ec2999077b3aef2_WhatsApp.svg";
  
  return (
    <a 
      href={href}
      className={`flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10`}
    >
      <img src={icon} alt={variant} className="h-4 w-4" />
      {isTelegram ? 'Telegram' : 'WhatsApp'}
    </a>
  );
};

export default Navigation;