"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";

export default function PrivacyPage() {
  const schemaData = otherPageSchemas["privacy"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          ...schemaData,
          path: "/privacy",
          breadcrumbs: getBreadcrumbs("/privacy", "Privacy Policy"),
        }}
      />
      <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-[89px]">
        <section className="py-[120px] bg-[#0a0612] relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 max-w-[800px] relative z-10">
            <h1 className="text-[48px] font-bold leading-[1.1] mb-8 tracking-tight text-white">
              Privacy{' '}
              <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/60 mb-8">Last updated: January 1, 2026</p>
              
              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">1. Information We Collect</h2>
              <p className="text-white/60 mb-6">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, company information, and payment details.
              </p>

              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">2. How We Use Your Information</h2>
              <p className="text-white/60 mb-6">
                We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.
              </p>

              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">3. Information Sharing</h2>
              <p className="text-white/60 mb-6">
                We do not share your personal information with third parties except as described in this policy. We may share information with service providers who assist us in operating our business, or when required by law.
              </p>

              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">4. Data Security</h2>
              <p className="text-white/60 mb-6">
                We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>

              <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">5. Contact Us</h2>
              <p className="text-white/60 mb-6">
                If you have any questions about this Privacy Policy, please contact us through our support channels.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}