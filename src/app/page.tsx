"use client";

import Navigation from "@/components/sections/navigation";
import HeroPopup from "@/components/sections/hero-popup";
import HeroGeometric from "@/components/sections/hero-geometric";
import PlatformGrid from "@/components/sections/platform-grid";
import FeaturesGrid from "@/components/sections/features-grid";
import SuccessStories from "@/components/sections/success-stories";
import HowItWorks from "@/components/sections/how-it-works";
import ComparisonTable from "@/components/sections/comparison-table";
import PricingPackages from "@/components/sections/pricing-packages";
import Milestones from "@/components/sections/milestones";
import OtherServices from "@/components/sections/other-services";
import FAQSection from "@/components/sections/faq-section";
import LatestBlogs from "@/components/sections/latest-blogs";
import CTABanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroPopup />
      <div className="pt-[89px]">
        <HeroGeometric />
        <PlatformGrid />
        <FeaturesGrid />
        <SuccessStories />
        <HowItWorks />
        <ComparisonTable />
        <PricingPackages />
        <Milestones />
        <OtherServices />
        <FAQSection />
        <LatestBlogs />
        <CTABanner />
      </div>
      <Footer />
    </main>
  );
}