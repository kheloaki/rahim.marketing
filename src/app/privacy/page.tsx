"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[89px]">
        <section className="py-[120px] bg-[#020412]">
          <div className="container mx-auto px-6 max-w-[800px]">
            <h1 className="text-[48px] font-bold leading-[1.1] mb-8 tracking-tight text-white">
              Privacy Policy
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
