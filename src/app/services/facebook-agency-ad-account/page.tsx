"use client";

import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
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

export default function FacebookAgencyAdAccountPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[89px]">
        <HeroSection />
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
