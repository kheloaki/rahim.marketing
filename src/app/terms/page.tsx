"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";

export default function TermsPage() {
  const schemaData = otherPageSchemas["terms"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          ...schemaData,
          path: "/terms",
          breadcrumbs: getBreadcrumbs("/terms", "Terms of Service"),
        }}
      />
      <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-[89px]">
        <section className="py-[120px] bg-[#0a0612] relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 max-w-[800px] relative z-10">
            <h1 className="text-[48px] font-bold leading-[1.1] mb-8 tracking-tight text-white">
              Terms of{' '}
              <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/60 mb-8">Last updated: January 1, 2026</p>
              
              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/60 mb-6">
                By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>

              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">2. Use of Services</h2>
              <p className="text-white/60 mb-6">
                Our services are intended for legitimate business purposes only. You agree to use our agency ad accounts in compliance with all applicable advertising platform policies and local laws.
              </p>

              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">3. Account Responsibilities</h2>
              <p className="text-white/60 mb-6">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
              </p>

              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">4. Payment Terms</h2>
              <p className="text-white/60 mb-6">
                All fees are due in advance and are non-refundable unless otherwise stated in our guarantee policy. We reserve the right to modify our pricing with reasonable notice.
              </p>

              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">5. Limitation of Liability</h2>
              <p className="text-white/60 mb-6">
                Our liability is limited to the amount paid for services. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
              </p>

              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">6. Contact</h2>
              <p className="text-white/60 mb-6">
                For questions about these Terms, please contact us through our support channels.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
    </>
  );
}