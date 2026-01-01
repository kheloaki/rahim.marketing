"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import PlatformGrid from "@/components/sections/platform-grid";
import FeaturesGrid from "@/components/sections/features-grid";
import SuccessStories from "@/components/sections/success-stories";
import HowItWorks from "@/components/sections/how-it-works";
import ComparisonTable from "@/components/sections/comparison-table";
import PricingPackages from "@/components/sections/pricing-packages";
import FAQSection from "@/components/sections/faq-section";
import CTABanner from "@/components/sections/cta-banner";
import { Check, ArrowRight, Send, MessageCircle, Star } from "lucide-react";

function TaboolaHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0612] pt-24 pb-20">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#BC2C7B] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-5 lg:px-10 max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#BC2C7B] to-[#E44F71] border-2 border-[#0a0612]" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E44F71] to-[#E44F71] border-2 border-[#0a0612]" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E44F71] to-[#BC2C7B] border-2 border-[#0a0612]" />
              </div>
              <span className="text-sm font-medium text-white/80">Trusted by <span className="text-white font-bold">1,750+</span> advertisers</span>
            </div>

            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Taboola Agency{' '}
              <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                Ad Accounts
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-[540px] mx-auto lg:mx-0">
              Access the world&apos;s largest discovery platform with premium agency accounts. Native advertising at scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10 max-w-[500px] mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#E44F71]" />
                <span className="text-[15px] font-medium text-white">Native Ad Network Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#E44F71]" />
                <span className="text-[15px] font-medium text-white">Premium Publisher Placements</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#E44F71]" />
                <span className="text-[15px] font-medium text-white">No Account Restrictions</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <a 
                href="https://t.me/brandrahim"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(228,79,113,0.4)]"
              >
                <Send className="w-5 h-5" />
                Chat with us
              </a>
              <a 
                href="https://wa.me/37258956859"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold text-base transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a 
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base transition-all hover:bg-white/10"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-[#E44F71] text-[#E44F71]" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm">5.0</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <span className="text-sm text-white/50">$50M+ in ad spend managed</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] rounded-[1.5rem] opacity-20 blur-xl" />
            <div className="relative rounded-[1.25rem] overflow-hidden border border-white/10 bg-[#150d1f] shadow-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-[#0052CC] rounded-2xl flex items-center justify-center shadow-2xl p-4">
                  <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b93a6c1f88424f4b4df48_taboola.svg" alt="Taboola" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-[28px] font-bold text-white mb-4">Taboola Agency Accounts</h3>
                <p className="text-white/60 mb-8">Premium Native Advertising Accounts</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-[#E44F71]/20 text-[#E44F71] px-3 py-1 rounded-full text-xs font-semibold">Native Ads</span>
                  <span className="bg-[#E44F71]/20 text-[#E44F71] px-3 py-1 rounded-full text-xs font-semibold">Premium Publishers</span>
                  <span className="bg-[#E44F71]/20 text-[#E44F71] px-3 py-1 rounded-full text-xs font-semibold">No Restrictions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TaboolaAgencyAccountsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-[89px]">
        <TaboolaHeroSection />
        <PlatformGrid />
        <FeaturesGrid />
        <SuccessStories />
        <HowItWorks />
        <ComparisonTable />
        <PricingPackages />
        <FAQSection />
        <CTABanner />
      </div>
      <Footer />
    </main>
  );
}