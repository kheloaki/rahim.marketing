import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Send, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Navbar component for Brand Rahim.
 * Features:
 * - Sticky glassmorphism header
 * - Mega-menus for Agency Accounts, Other Services, and Resources
 * - Multi-column layout within dropdowns
 * - Contact buttons for Telegram and WhatsApp
 * - Pixel-perfect styling based on computed styles and design system
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/66857660d17fcbc0b572ffd2_uproas-logo-white-1.svg";

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] flex items-center h-[89px] px-6 lg:px-10 transition-all duration-300",
        isScrolled ? "bg-[rgb(0,1,17)] border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <Image 
            src={logoUrl} 
            alt="uproas logo white" 
            width={120} 
            height={32} 
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {/* Agency Accounts Dropdown */}
          <NavDropdown title="Agency Accounts">
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 p-8">
                <div className="col-span-2 text-[rgba(255,255,255,0.4)] text-[12px] font-semibold uppercase tracking-wider mb-4">
                  Agency ad accounts
                </div>
                <DropdownItem 
                  href="/services/facebook-agency-ad-account"
                  icon="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690b93a5e6713de7470d6fbf_facebook-2.svg"
                  title="Facebook Agency Ad Accounts"
                  description="Get a Meta Agency Ad Account"
                />
                <DropdownItem 
                  href="/services/google-ads-agency-account"
                  icon="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690b93a5ee0f69154b58e522_google-3.svg"
                  title="Google Agency Ad Accounts"
                  description="Get a Google Agency Ad Account"
                />
                <DropdownItem 
                  href="/services/tiktok-agency-account"
                  icon="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690b93a558069249529ce2f3_tiktok-4.svg"
                  title="TikTok Agency Ad Accounts"
                  description="Get a TikTok Agency Ad Account"
                />
                <DropdownItem 
                  href="/services/bing-agency-accounts"
                  icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a51e37f05dbfafd0d3_bing.svg"
                  title="Bing Agency Ad Accounts"
                  description="Get a Bing Agency Ad Account"
                />
              </div>
              <ContactBottomBar />
            </div>
          </NavDropdown>

          {/* Other Services Dropdown */}
          <NavDropdown title="Other Services">
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-8 p-8 min-w-[700px]">
                <div className="space-y-6">
                  <div>
                    <div className="text-[rgba(255,255,255,0.4)] text-[12px] font-semibold uppercase tracking-wider mb-4">Assets</div>
                    <div className="space-y-2">
                       <DropdownItem 
                        href="/products/buy-facebook-accounts"
                        icon="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690b93a5e6713de7470d6fbf_facebook-2.svg"
                        title="Facebook Accounts"
                        description="Aged, verified profiles for scale."
                      />
                      <DropdownItem 
                        href="/products/buy-facebook-business-managers"
                        icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b9e8ff01c0cfaf629b82e_4db4364723691601ed55b96e75bf26d0_business%20managers.avif"
                        title="Business Managers"
                        description="Clean BMs with proper structure."
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[rgba(255,255,255,0.4)] text-[12px] font-semibold uppercase tracking-wider mb-4">Other Services</div>
                  <div className="space-y-2">
                    <DropdownItem 
                      href="/services/facebook-feedback-score"
                      icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b9e8f615efe1d1a8eb829_Facebook%20Feedback%20Score%20Boost.svg"
                      title="Feedback Boost"
                      description="Recover page feedback compliant."
                    />
                    <DropdownItem 
                      href="/facebook-unban-services"
                      icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b9e8f53e5c5ada378abc1_Unban%20Service.svg"
                      title="Unban Service"
                      description="Ethical recovery for restricted BMs."
                    />
                  </div>
                </div>
              </div>
              <ContactBottomBar />
            </div>
          </NavDropdown>

          {/* Resources Dropdown */}
          <NavDropdown title="Resources">
            <div className="flex flex-col">
               <div className="grid grid-cols-2 gap-8 p-8 min-w-[600px]">
                <div className="space-y-4">
                  <div className="text-[rgba(255,255,255,0.4)] text-[12px] font-semibold uppercase tracking-wider mb-2">Resources</div>
                  <DropdownItem 
                    href="/partners"
                    icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba63138491723aa3aa0d8_partners.svg"
                    title="Partners"
                    description="Exclusive tools and providers."
                  />
                  <DropdownItem 
                    href="/reviews"
                    icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba63199d89daa35b9485f_reviews.svg"
                    title="Reviews"
                    description="Trustpilot + G2 ratings."
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-[rgba(255,255,255,0.4)] text-[12px] font-semibold uppercase tracking-wider mb-2">Others</div>
                  <DropdownItem 
                    href="/blog"
                    icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba6311a444904561effad_blog.svg"
                    title="Blog"
                    description="Tested playbooks and guides."
                  />
                  <DropdownItem 
                    href="/milestones"
                    icon="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba63160dbee8f4bcf443d_milestones.svg"
                    title="Milestones"
                    description="Claim your scale rewards."
                  />
                </div>
              </div>
              <ContactBottomBar />
            </div>
          </NavDropdown>

          <a href="/partners" className="text-white hover:text-primary transition-colors font-medium">Partners</a>
          <a href="/blog" className="text-white hover:text-primary transition-colors font-medium">Blog</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a 
            href="https://t.me/brandrahim" 
            className="flex items-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            <Send className="w-4 h-4 text-[#2B7FFF]" />
            <span>Telegram</span>
          </a>
          <a 
            href="/get-started" 
            className="bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 transition-all rounded-full px-6 py-2.5 text-sm font-semibold flex items-center shadow-[0_0_20px_rgba(43,127,255,0.3)]"
          >
            Request Access
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
          <div className="w-6 h-0.5 bg-current transition-all"></div>
        </button>
      </div>
    </header>
  );
};

const NavDropdown = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="group relative">
      <button className="flex items-center space-x-1 py-4 text-white hover:text-primary transition-colors font-medium">
        <span>{title}</span>
        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="bg-[#080B1E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-morphism min-w-[max-content]">
          {children}
        </div>
      </div>
    </div>
  );
};

const DropdownItem = ({ href, icon, title, description, isPartner = false }: { href: string; icon: string; title: string; description: string; isPartner?: boolean }) => {
  return (
    <a 
      href={href} 
      className={cn(
        "flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all",
        isPartner && "border border-white/5"
      )}
    >
      <div className="w-10 h-10 flex-shrink-0 relative">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      <div className="flex flex-col">
        <span className="text-white text-[15px] font-semibold leading-tight mb-1">{title}</span>
        <span className="text-[rgba(255,255,255,0.6)] text-[13px] leading-snug max-w-[200px]">{description}</span>
      </div>
    </a>
  );
};

const ContactBottomBar = () => {
  return (
    <div className="bg-white/[0.02] border-t border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col">
        <span className="text-white font-semibold text-sm">Contact Brand Rahim</span>
        <span className="text-[rgba(255,255,255,0.6)] text-xs mt-1">
          Message us on telegram or Whatsapp for real-time support.
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <a 
          href="https://t.me/brandrahim" 
          className="flex items-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-full px-4 py-2 text-xs font-semibold"
        >
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690ba72114ecacc7cbe7a790_Telegram-8.svg" 
            alt="Telegram" 
            width={16} 
            height={16} 
          />
          <span>Telegram</span>
        </a>
        <a 
          href="https://api.whatsapp.com/send" 
          className="flex items-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-full px-4 py-2 text-xs font-semibold"
        >
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690ba7219ec2999077b3aef2_WhatsApp-9.svg" 
            alt="WhatsApp" 
            width={16} 
            height={16} 
          />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;