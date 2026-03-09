"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CaseStudiesSection from "@/components/sections/case-studies-section";
import FAQSection from "@/components/sections/faq-section";
import CTABanner from "@/components/sections/cta-banner";
import FreeReportCta from "@/components/sections/free-report-cta";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { seoCaseStudies } from "@/data/seo-case-studies";
import { Check, Search, FileText, BarChart3, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

function SeoHeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a0612] pt-24 pb-20">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
      <div className="container relative z-10 px-5 lg:px-10 max-w-[1280px] mx-auto text-center">
        <span className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4 block">
          SEO DEPARTMENT
        </span>
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
          We Manage{" "}
          <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
            SEO for Your Projects
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-[640px] mx-auto">
          From technical SEO and content strategy to analytics and ongoing optimization—we grow your organic visibility so you can focus on your business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/free-seo-report"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold text-base transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_30px_rgba(228,79,113,0.4)]"
          >
            Get my free report
          </Link>
          <a
            href="https://t.me/rahim_ou"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base transition-all hover:bg-white/10"
          >
            <Send className="w-5 h-5" />
            Chat with us
          </a>
          <a
            href="https://wa.me/message/WKWQWAZSRAU3N1"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold text-base transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const items = [
    { icon: Search, title: "Technical SEO", desc: "Site speed, crawlability, indexing, and core Web Vitals so search engines can rank you properly." },
    { icon: FileText, title: "Content & On-Page", desc: "Keyword strategy, on-page optimization, and content that matches what your audience searches for." },
    { icon: BarChart3, title: "Analytics & Reporting", desc: "Clear reports on rankings, traffic, and conversions so you always know how SEO is performing." },
  ];
  return (
    <section className="py-[100px] lg:py-[120px] bg-[#02040a]">
      <div className="container px-5 lg:px-10 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4 block">WHAT WE DO</span>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-white mb-6">Full-Service SEO Management</h2>
          <p className="text-lg text-white/70 max-w-[600px] mx-auto">
            We handle the full stack: technical, content, and analytics—so you get sustainable organic growth.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl bg-[#150d1f] border border-white/10 p-8 hover:border-[#E44F71]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#E44F71]/20 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-[#E44F71]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 text-white/80">
            <Check className="w-5 h-5 text-[#10b981]" />
            <span>Link building & outreach</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Check className="w-5 h-5 text-[#10b981]" />
            <span>Ongoing optimization</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Check className="w-5 h-5 text-[#10b981]" />
            <span>Dedicated point of contact</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SeoManagementPage() {
  const schemaData = otherPageSchemas["seo-management"] as {
    title: string;
    description: string;
    serviceType: string;
    faqs: Array<{ question: string; answer: string }>;
  };

  return (
    <>
      <ComprehensiveSchema
        pageType="service"
        data={{
          ...schemaData,
          path: "/services/seo-management",
          breadcrumbs: getBreadcrumbs("/services/seo-management", "SEO Management"),
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <SeoHeroSection />
          <WhatWeDoSection />
          <CaseStudiesSection
            caseStudies={seoCaseStudies}
            title="SEO Case Studies"
            subtitle="Real results from our SEO management work."
          />
          <FreeReportCta />
          <FAQSection
            faqs={schemaData.faqs}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our SEO management service."
          />
          <CTABanner />
        </div>
        <Footer />
      </main>
    </>
  );
}
