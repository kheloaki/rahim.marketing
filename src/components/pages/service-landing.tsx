"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Send, MessageCircle, Star } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import PricingPackages from "@/components/sections/pricing-packages";
import SuccessStories from "@/components/sections/success-stories";
import FAQSection from "@/components/sections/faq-section";
import CTABanner from "@/components/sections/cta-banner";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { TELEGRAM_URL, WHATSAPP_URL } from "@/lib/site";

export type LandingFaq = { question: string; answer: string };

export type ServiceLandingProps = {
  pageType: "service" | "product" | "page";
  path: string;
  schema: {
    title: string;
    description: string;
    serviceType?: string;
    price?: string;
  };
  breadcrumbs: Array<{ name: string; url: string }>;
  kicker?: string;
  title: string;
  highlight: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  faqs?: LandingFaq[];
};

export default function ServiceLanding({
  pageType,
  path,
  schema,
  breadcrumbs,
  kicker = "RAHIM MARKETING",
  title,
  highlight,
  description,
  bullets,
  image,
  imageAlt,
  faqs,
}: ServiceLandingProps) {
  return (
    <>
      <ComprehensiveSchema
        pageType={pageType}
        data={{
          ...schema,
          path,
          breadcrumbs,
          faqs,
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0a0612] pt-24 pb-20">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="container relative z-10 px-5 lg:px-10 max-w-[1280px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="text-center lg:text-left">
                  <p className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-6">{kicker}</p>
                  <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
                    {title}{" "}
                    <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                      {highlight}
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-[540px] mx-auto lg:mx-0">
                    {description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10 max-w-[500px] mx-auto lg:mx-0">
                    {bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#E44F71] shrink-0" />
                        <span className="text-[15px] font-medium text-white">{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
                    <Link
                      href="/request-access"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold text-base"
                    >
                      Request Access
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={TELEGRAM_URL}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base"
                    >
                      <Send className="w-5 h-5" />
                      Telegram
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-base"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="fill-[#E44F71] text-[#E44F71]" />
                    ))}
                    <span className="text-white font-bold text-sm ml-1">Trusted by 1,750+ advertisers</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] rounded-[1.5rem] opacity-20 blur-xl" />
                  <div className="relative rounded-[1.25rem] overflow-hidden border border-white/10 bg-[#150d1f]">
                    <Image
                      src={image}
                      alt={imageAlt}
                      width={1200}
                      height={750}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PricingPackages />
          <SuccessStories />
          <FAQSection faqs={faqs} />
          <CTABanner />
        </div>
        <Footer />
      </main>
    </>
  );
}
