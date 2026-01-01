"use client";

import Navbar from "@/components/sections/navbar";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function RequestAccessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[89px]">
        <section className="py-20 bg-[#020412]">
          <div className="container mx-auto px-6 max-w-[1280px] text-center">
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
              Request Access
            </h1>
            <p className="text-[18px] text-white/60 mb-12 max-w-[600px] mx-auto">
              Get started with premium agency ad accounts. Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>
        </section>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
