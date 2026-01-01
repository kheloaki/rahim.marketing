"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import FAQSection from "@/components/sections/faq-section";
import { ChevronDown, Zap, Share2, ShieldCheck, Headphones, Send, MessageCircle } from "lucide-react";

export default function RequestAccessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-[89px]">
        <section className="py-20 bg-[#0a0612] relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 max-w-[1280px] text-center relative z-10">
            <span className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-4 block">
              GET STARTED
            </span>
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
              Request{' '}
              <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                Access
              </span>
            </h1>
            <p className="text-[18px] text-white/60 mb-12 max-w-[600px] mx-auto">
              Get started with premium agency ad accounts. Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>
        </section>

        <section className="bg-[#0a0612] text-white py-[80px] px-6 lg:px-8 overflow-hidden">
          <div className="container mx-auto max-w-[1280px]">
            <div className="bg-[#150d1f] border border-white/10 rounded-[24px] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_40px_0_rgba(228,79,113,0.05)]">
              
              <div className="lg:w-[45%] p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                <p className="text-[#E44F71] text-[14px] font-semibold tracking-widest uppercase mb-4">
                  CONTACT US
                </p>
                <h3 className="text-[32px] font-semibold leading-tight mb-6">
                  Provide us with your business details
                </h3>
                <p className="text-white/60 text-[18px] mb-8">
                  Chat with us on WhatsApp or fill in the contact form and we will get back to you.
                </p>

                <div className="flex flex-wrap gap-4 mb-16">
                  <a 
                    href="https://api.whatsapp.com/send/?phone=37258956859"
                    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5b] transition-colors rounded-[8px] py-3 px-6 text-[16px] font-semibold text-white"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat with us
                  </a>
                  <a 
                    href="https://t.me/brandrahim"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] hover:opacity-90 transition-colors rounded-[8px] py-3 px-6 text-[16px] font-semibold text-white"
                  >
                    <Send className="w-5 h-5" />
                    Telegram
                  </a>
                </div>

                <div className="space-y-8 bg-white/[0.03] border border-white/5 rounded-[12px] p-8">
                  <div className="flex gap-4">
                    <div className="bg-[#E44F71]/10 rounded-full p-2 h-fit">
                      <Zap className="w-5 h-5 text-[#E44F71]" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-semibold mb-2">Increased Ad Approval Rate</h4>
                      <p className="text-white/60 text-[14px]">Get your ads approved in 5 minutes</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-[#E44F71]/10 rounded-full p-2 h-fit">
                      <Share2 className="w-5 h-5 text-[#E44F71]" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-semibold mb-2">Almost All Types of Ads Supported</h4>
                      <p className="text-white/60 text-[14px]">All types of ads supported</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-[#E44F71]/10 rounded-full p-2 h-fit">
                      <ShieldCheck className="w-5 h-5 text-[#E44F71]" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-semibold mb-2">Unlimited Ad Accounts</h4>
                      <p className="text-white/60 text-[14px]">Create unlimited ad accounts for your businesses.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-[#E44F71]/10 rounded-full p-2 h-fit">
                      <Headphones className="w-5 h-5 text-[#E44F71]" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-semibold mb-2">24/7 Customer Support</h4>
                      <p className="text-white/60 text-[14px]">We are here to support you 24/7.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[55%] p-8 lg:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Full Name *</label>
                      <input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E44F71] transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 432 43 2434" 
                        className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E44F71] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E44F71] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Company Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your company name" 
                      className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E44F71] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Company Website *</label>
                    <input 
                      type="url" 
                      placeholder="https://www.yourcompany.com" 
                      className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E44F71] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">Monthly Advertising Spend *</label>
                    <div className="relative">
                      <select className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white/30 appearance-none focus:outline-none focus:border-[#E44F71] transition-colors">
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
                      <select className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white/30 appearance-none focus:outline-none focus:border-[#E44F71] transition-colors">
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
                      className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E44F71] transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] hover:opacity-90 transition-all duration-300 rounded-[8px] py-4 text-[16px] font-semibold text-white mt-4"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}