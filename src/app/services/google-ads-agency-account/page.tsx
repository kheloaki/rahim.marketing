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
import Image from "next/image";
import { Check, ArrowRight, Send, MessageCircle } from "lucide-react";

function GoogleHeroSection() {
  return (
    <section className="relative pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[100px] overflow-hidden bg-[#020412]">
      <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] rounded-full bg-[#4285F4] opacity-[0.08] blur-[120px] pointer-events-none" />
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
              Google Agency <br />Ad Accounts
            </h1>
            <p className="text-[18px] text-white/60 mb-8 max-w-[540px] leading-[1.6]">
              Scale your Google Ads campaigns without limits. Get whitelisted agency accounts with unlimited spend and priority support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">Unlimited Daily Spend</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">No Suspensions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">Priority Google Support</span>
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
                <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                  <svg viewBox="0 0 24 24" className="w-14 h-14">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <h3 className="text-[32px] font-bold text-white mb-4">Google Ads</h3>
                <p className="text-white/60">Premium Agency Accounts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GoogleAdsAgencyAccountPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[89px]">
        <GoogleHeroSection />
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
