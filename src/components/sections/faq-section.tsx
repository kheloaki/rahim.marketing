"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What is an Agency Ad Account?",
    answer: "An Agency Ad Account is a premium advertising account provided through certified marketing agencies with direct platform partnerships. These accounts offer higher trust scores, unlimited spending potential, faster ad approvals, and dedicated support from platform representatives."
  },
  {
    question: "How is Uproas different from other providers?",
    answer: "Uproas provides whitelisted agency accounts with direct Meta, Google, and TikTok rep access. We offer instant replacements if accounts get restricted, up to 1% cashback on ad spend, and 24/7 dedicated support. Our 0.2% ban rate is the lowest in the industry."
  },
  {
    question: "What platforms do you support?",
    answer: "We provide agency ad accounts for Meta (Facebook/Instagram), Google Ads, TikTok, Bing/Microsoft Ads, Taboola, and Outbrain. Each platform has dedicated account managers and specialized support."
  },
  {
    question: "How quickly can I get started?",
    answer: "Once approved, your agency account is delivered within 24 hours. You can fund via credit card, crypto, or bank transfer and start running ads immediately. Priority onboarding is available for Platinum members (<2 hours)."
  },
  {
    question: "What happens if my account gets restricted?",
    answer: "We provide instant replacements at no additional cost. Our dedicated team works directly with platform reps to resolve issues quickly. Your pixel data and campaigns can be transferred to minimize downtime."
  },
  {
    question: "What verticals/niches do you support?",
    answer: "We support a wide range of verticals including ecommerce, health & wellness, finance, SaaS, lead generation, gaming, and more. Contact us to discuss your specific niche and we'll advise on the best account structure."
  },
  {
    question: "How does the cashback program work?",
    answer: "Platinum package members earn up to 1% cashback on all ad spend. Cashback is calculated monthly and can be applied as account credit or withdrawn. There's no cap on cashback earnings."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes, all packages come with a 7-day money-back guarantee if accounts aren't delivered within 48 hours. We're confident in our service quality and stand behind our delivery promises."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[120px] lg:py-[160px] bg-[#02040a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d946a8] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 max-w-[900px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold leading-[1.1] tracking-tight text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70 max-w-[600px] mx-auto">
            Everything you need to know about our agency ad accounts and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'border-primary/30 bg-primary/5'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-semibold pr-8 transition-colors ${
                  openIndex === index ? 'text-white' : 'text-white/90'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index
                    ? 'bg-primary text-white'
                    : 'bg-white/10 text-white/60'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/uproas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0088cc] text-white font-semibold text-sm transition-all hover:bg-[#0077b5]"
            >
              <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba72114ecacc7cbe7a790_Telegram.svg" alt="Telegram" className="w-4 h-4" />
              Ask on Telegram
            </a>
            <a
              href="https://wa.me/37258956859"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm transition-all hover:bg-[#20ba59]"
            >
              <img src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba7219ec2999077b3aef2_WhatsApp.svg" alt="WhatsApp" className="w-4 h-4" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;