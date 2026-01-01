import React from 'react';
import Image from 'next/image';
import { ChevronDown, Send, MessageCircle, Zap, ShieldCheck, Share2, Headphones, Check } from 'lucide-react';

/**
 * ContactForm Section
 * A pixel-perfect clone of the "Get Started with Uproas" section.
 * Features a side-by-side layout with contact details on the left and a business inquiry form on the right.
 */
const ContactForm = () => {
  return (
    <section className="bg-[#020412] text-white py-[120px] px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-[1280px]">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-[#2B7FFF] text-[14px] font-semibold uppercase tracking-wider mb-4">
            CONTACT US
          </p>
          <h2 className="text-[48px] font-semibold leading-[1.2] mb-6">
            Get Started with Uproas
          </h2>
          <p className="text-[18px] text-white/60 max-w-[700px] mx-auto">
            Have questions or need help getting started? Our team is here to support you every step of the way. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Main Contact Card Container */}
        <div className="bg-[#080B1E] border border-white/10 rounded-[24px] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_40px_0_rgba(43,127,255,0.05)]">
          
          {/* Left Column: Contact Details & Benefits */}
          <div className="lg:w-[45%] p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
            <p className="text-[#2B7FFF] text-[14px] font-semibold tracking-widest uppercase mb-4">
              CONTACT US
            </p>
            <h3 className="text-[32px] font-semibold leading-tight mb-6">
              Provide us with your business details
            </h3>
            <p className="text-white/60 text-[18px] mb-8">
              Chat with us on WhatsApp or fill in the contact form and we will get back to you.
            </p>

            {/* Chat Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <a 
                href="https://api.whatsapp.com/send/?phone=37258956859&text=I'm interested in your services.&type=phone_number&app_absent=0"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5b] transition-colors rounded-[8px] py-3 px-6 text-[16px] font-semibold text-white"
              >
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/668c1ab6fdb8f8c30665fb20_whatsapp-icon-45.svg" 
                  alt="WhatsApp" 
                  className="w-5 h-5" 
                />
                Chat with us
              </a>
              <a 
                href="https://t.me/uproas?text=Im%20interested%20in%20your%20services"
                className="flex items-center gap-2 bg-[#2B7FFF] hover:bg-[#2572e6] transition-colors rounded-[8px] py-3 px-6 text-[16px] font-semibold text-white"
              >
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/681b86b9dec8f5adac850fb8_Telegram_20-_20Light_20mo-46.svg" 
                  alt="Telegram" 
                  className="w-5 h-5" 
                />
                Chat with us
              </a>
            </div>

            {/* Benefits List */}
            <div className="space-y-8 bg-white/[0.03] border border-white/5 rounded-[12px] p-8">
              <div className="flex gap-4">
                <div className="bg-white/5 rounded-full p-2 h-fit">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold mb-2">Increased Ad Approval Rate</h4>
                  <p className="text-white/60 text-[14px]">Get you ads approved in 5 minutes</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/5 rounded-full p-2 h-fit">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold mb-2">Almost All types of ads supported</h4>
                  <p className="text-white/60 text-[14px]">All types of ads supported</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/5 rounded-full p-2 h-fit">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold mb-2">Unlimited Ad Accounts</h4>
                  <p className="text-white/60 text-[14px]">Create unlimited ad accounts for your businesses.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/5 rounded-full p-2 h-fit">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold mb-2">24/7 Customer Support</h4>
                  <p className="text-white/60 text-[14px]">We are here to support you 24/7.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:w-[55%] p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2B7FFF] transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 432 43 2434" 
                    className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2B7FFF] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2B7FFF] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Company Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your company name" 
                  className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2B7FFF] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Company Website *</label>
                <input 
                  type="url" 
                  placeholder="https://www.yourcompany.com" 
                  className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2B7FFF] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Country / Region *</label>
                <input 
                  type="text" 
                  placeholder="Enter your country or region" 
                  className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2B7FFF] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Monthly Advertising Spend *</label>
                <div className="relative">
                  <select className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white/30 appearance-none focus:outline-none focus:border-[#2B7FFF] transition-colors">
                    <option value="">Select budget</option>
                    <option value="1">Under $10k</option>
                    <option value="2">$10k - $50k</option>
                    <option value="3">$50k - $100k</option>
                    <option value="4">$100k+</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Advertising Platform *</label>
                <div className="relative">
                  <select className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white/30 appearance-none focus:outline-none focus:border-[#2B7FFF] transition-colors">
                    <option value="">Select platform</option>
                    <option value="facebook">Facebook</option>
                    <option value="google">Google</option>
                    <option value="tiktok">TikTok</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Describe Your Business *</label>
                <textarea 
                  rows={4} 
                  placeholder="Describe your business and goals in a few sentences" 
                  className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2B7FFF] transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    id="promo" 
                    className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-[#2B7FFF] cursor-pointer" 
                  />
                </div>
                <label htmlFor="promo" className="text-[14px] text-white/60 cursor-pointer">Have a promo code?</label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#1A2338] hover:bg-[#2B7FFF] transition-all duration-300 rounded-[8px] py-4 text-[16px] font-semibold text-white mt-4 border border-white/5 hover:border-[#2B7FFF]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;