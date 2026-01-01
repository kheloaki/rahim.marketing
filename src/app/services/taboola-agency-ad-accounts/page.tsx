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

function TaboolaHeroSection() {
  return (
    <section className="relative pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[100px] overflow-hidden bg-[#020412]">
      <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] rounded-full bg-[#0052CC] opacity-[0.08] blur-[120px] pointer-events-none" />
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
              Taboola Agency <br />Ad Accounts
            </h1>
            <p className="text-[18px] text-white/60 mb-8 max-w-[540px] leading-[1.6]">
              Access the world&apos;s largest discovery platform with premium agency accounts. Native advertising at scale.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">Native Ad Network Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">Premium Publisher Placements</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-[16px] font-medium text-white">No Account Restrictions</span>
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
                <div className="w-24 h-24 mx-auto mb-6 bg-[#0052CC] rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white text-3xl font-bold">Taboola</span>
                </div>
                <h3 className="text-[32px] font-bold text-white mb-4">Taboola Ads</h3>
                <p className="text-white/60">Premium Agency Accounts</p>
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
      <Navbar />
      <div className="pt-[89px]">
        <TaboolaHeroSection />
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
