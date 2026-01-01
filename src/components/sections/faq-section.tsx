"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What is an Agency Ad Account?",
    answer: "An Agency Ad Account is a premium advertising account provided through certified marketing agencies with direct platform partnerships. These accounts offer higher trust scores, unlimited spending potential, faster ad approvals, and dedicated support from platform representatives."
  },
  {
    question: "How is Brand Rahim different from other providers?",
    answer: "Brand Rahim provides whitelisted agency accounts with direct Meta, Google, and TikTok rep access. We offer instant replacements if accounts get restricted, up to 1% cashback on ad spend, and 24/7 dedicated support. Our 0.2% ban rate is the lowest in the industry."
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
    <section className="py-[120px] lg:py-[160px] bg-[#0a0612] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E44F71] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 max-w-[900px] relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#E44F71] text-sm font-semibold tracking-wide uppercase mb-6">
            FAQ
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold leading-[1.1] tracking-tight text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70 max-w-[600px] mx-auto">
            Everything you need to know about our agency ad accounts and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'border-[#E44F71]/30 bg-[#E44F71]/5'
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
                    ? 'bg-[#E44F71] text-white'
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

        <div className="mt-16 text-center">
          <p className="text-white/70 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/brandrahim"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#BC2C7B] to-[#E44F71] text-white font-semibold text-sm transition-all hover:opacity-90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2s-.21-.05-.3-.03c-.12.02-2.11 1.34-5.96 3.94-.57.39-1.08.58-1.54.57-.5-.01-1.46-.28-2.17-.51-.87-.28-1.56-.44-1.5-.92.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.24-3.53 3.93-1.61 4.74-1.89 5.28-1.89.12 0 .38.03.55.17s.17.34.19.49c.02.11.02.24 0 .37z"/>
              </svg>
              Ask on Telegram
            </a>
            <a
              href="https://wa.me/37258956859"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm transition-all hover:bg-[#20ba59]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.03 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.41 1.25 4.84L2.03 22l5.34-1.4c1.4.76 2.99 1.19 4.66 1.19 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.95 14.19c-.25.7-1.45 1.28-2.02 1.37-.51.08-1.16.14-1.85-.08-.44-.14-1.01-.33-2.16-.83-4.88-2.09-8.08-7.1-8.33-7.43-.24-.33-1.95-2.59-1.95-4.94 0-2.35 1.23-3.51 1.67-3.99.36-.4.74-.5 1-.5.25 0 .5 0 .73.01.26.01.61-.1.95.73.34.82 1.15 2.81 1.25 3.01.1.2.17.44.03.73-.14.28-.31.47-.63.85-.31.36-.66.8-.94 1.08-.31.3-.64.63-.27 1.26.36.63 1.62 2.67 3.49 4.33 2.41 2.14 4.43 2.8 5.06 3.11.64.31.96.26 1.33-.16.36-.43 1.57-1.82 1.99-2.43.41-.61.83-.51 1.4-.29.57.21 3.63 1.71 4.25 2.02.62.31 1.04.46 1.19.72s.15 1.5-.1 2.2z"/>
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;