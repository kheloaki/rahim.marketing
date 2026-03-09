"use client";

import { useState } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { FileText, CheckCircle } from "lucide-react";

export default function FreeSeoReportPage() {
  const [submitted, setSubmitted] = useState(false);
  const schemaData = otherPageSchemas["free-seo-report"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          ...schemaData,
          path: "/free-seo-report",
          breadcrumbs: getBreadcrumbs("/free-seo-report", "Free SEO Report"),
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="py-20 bg-[#0a0612] relative overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-6 max-w-[1280px] text-center relative z-10">
              <span className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-4 block">
                FREE AUDIT
              </span>
              <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
                Free SEO Report for{" "}
                <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                  Your Project
                </span>
              </h1>
              <p className="text-[18px] text-white/60 mb-12 max-w-[600px] mx-auto">
                Share your project URL and we&apos;ll analyze your site and send you a short audit with actionable recommendations.
              </p>
            </div>
          </section>

          <section className="bg-[#0a0612] text-white py-[80px] px-6 lg:px-8 overflow-hidden">
            <div className="container mx-auto max-w-[640px]">
              {submitted ? (
                <div className="rounded-[24px] border border-white/10 bg-[#150d1f] p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#10b981]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#10b981]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Thank you</h2>
                  <p className="text-white/70 text-lg mb-8">
                    We&apos;ve received your request. We&apos;ll analyze your project and send you a free SEO report to your email within a few days.
                  </p>
                  <p className="text-white/50 text-sm">
                    Questions? Reach out on{" "}
                    <a href="https://t.me/rahim_ou" className="text-[#E44F71] hover:underline">Telegram</a>
                    {" "}or{" "}
                    <a href="https://wa.me/message/WKWQWAZSRAU3N1" className="text-[#25D366] hover:underline">WhatsApp</a>.
                  </p>
                </div>
              ) : (
                <div className="rounded-[24px] border border-white/10 bg-[#150d1f] overflow-hidden shadow-[0_0_40px_0_rgba(228,79,113,0.05)]">
                  <div className="p-8 lg:p-12 border-b border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E44F71]/20 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#E44F71]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">Request your free report</h2>
                      <p className="text-white/60 text-sm">We&apos;ll get back to you with a short audit.</p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="p-8 lg:p-12 space-y-6">
                    <div className="space-y-2">
                      <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">
                        Project / Website URL *
                      </label>
                      <input
                        type="url"
                        name="url"
                        placeholder="https://www.yoursite.com"
                        required
                        className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E44F71] transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                          className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E44F71] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          required
                          className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E44F71] transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-semibold uppercase tracking-wider text-white/80">
                        Message (optional)
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Anything specific you want us to look at?"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-[8px] py-4 px-5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#E44F71] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] hover:opacity-90 transition-all duration-300 rounded-[8px] py-4 text-[16px] font-semibold text-white"
                    >
                      Get my free report
                    </button>
                  </form>
                </div>
              )}
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
