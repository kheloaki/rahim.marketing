"use client";

import Navbar from "@/components/sections/navbar";
import LogoMarquee from "@/components/sections/logo-marquee";
import BenefitsGrid from "@/components/sections/benefits-grid";
import ClientResultsVideo from "@/components/sections/client-results-video";
import ComparisonTable from "@/components/sections/comparison-table";
import ProcessSteps from "@/components/sections/process-steps";
import PricingPlans from "@/components/sections/pricing-plans";
import GuaranteesSection from "@/components/sections/guarantees";
import ContactForm from "@/components/sections/contact-form";
import TestimonialsSection from "@/components/sections/testimonials-carousel";
import Milestones from "@/components/sections/milestones";
import OtherServices from "@/components/sections/other-services";
import ContentBanner from "@/components/sections/content-banner";
import LatestBlogs from "@/components/sections/latest-blogs";
import Footer from "@/components/sections/footer";
import { Check, ArrowRight, Send, MessageCircle } from "lucide-react";

function TikTokHeroSection() {
  return (
    <section className="relative pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[100px] overflow-hidden bg-[#020412]">
      <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] rounded-full bg-[#FF0050] opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#00F2EA] opacity-[0.05] blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          <div className="flex-1 max-w-[640px]">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center bg-[#080B1E] border border-white/10 rounded-full px-3 py-1.5">
                <span className="text-sm font-semibold text-white">4.9/5</span>
              </div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-white/60">
                TRUSTED BY 1,750+ BUSINESSES
              </span>
            </div>
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
              TikTok Agency <br />Ad Accounts
            </h1>
            <p className="text-[18px] text-white/60 mb-8 max-w-[540px] leading-[1.6]">
              Unlock the power of TikTok advertising with whitelisted agency accounts. Scale your campaigns without restrictions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">Unlimited Ad Spend</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">No Account Bans</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">Priority TikTok Support</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="https://t.me/uproas" className="flex items-center gap-2 bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 transition-colors px-6 py-4 rounded-[8px] font-semibold text-white">
                <Send className="w-4 h-4" />
                Chat with us
              </a>
              <a href="https://wa.me/37258956859" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 transition-colors px-6 py-4 rounded-[8px] font-semibold text-white">
                <MessageCircle className="w-4 h-4" />
                Chat with us
              </a>
              <a href="#pricing" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors px-6 py-4 rounded-[8px] font-semibold text-white">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[500px] aspect-square bg-[#080B1E] border border-white/10 rounded-[24px] overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-black rounded-2xl flex items-center justify-center shadow-2xl">
                  <svg viewBox="0 0 24 24" className="w-14 h-14" fill="white">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </div>
                <h3 className="text-[32px] font-bold text-white mb-4">TikTok Ads</h3>
                <p className="text-white/60">Premium Agency Accounts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TikTokAgencyAccountPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[89px]">
        <TikTokHeroSection />
        <LogoMarquee />
        <BenefitsGrid />
        <ClientResultsVideo />
        <ComparisonTable />
        <ProcessSteps />
        <PricingPlans />
        <GuaranteesSection />
        <ContactForm />
        <TestimonialsSection />
        <Milestones />
        <OtherServices />
        <ContentBanner />
        <LatestBlogs />
      </div>
      <Footer />
    </main>
  );
}
