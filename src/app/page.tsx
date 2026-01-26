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
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";

export default function Home() {
  return (
    <>
      <ComprehensiveSchema
        pageType="home"
        data={{
          title: "Rahim Marketing - Premium Agency Ad Accounts for Meta, Google & TikTok",
          description: "Scale your advertising without limits. Premium whitelisted agency ad accounts for Meta, Google, and TikTok. Trusted by 1750+ advertisers worldwide.",
          path: "/",
          breadcrumbs: [
            { name: "Home", url: "/" },
          ],
          services: [
            { name: "Facebook Agency Ad Accounts", url: "/services/facebook-agency-ad-account", description: "Premium whitelisted Facebook agency ad accounts", itemType: "Service" },
            { name: "Google Ads Agency Accounts", url: "/services/google-ads-agency-account", description: "Premium Google Ads agency accounts", itemType: "Service" },
            { name: "TikTok Agency Accounts", url: "/services/tiktok-agency-account", description: "Premium TikTok agency ad accounts", itemType: "Service" },
            { name: "Bing Agency Accounts", url: "/services/bing-agency-accounts", description: "Premium Bing agency ad accounts", itemType: "Service" },
            { name: "Taboola Agency Accounts", url: "/services/taboola-agency-ad-accounts", description: "Premium Taboola agency accounts", itemType: "Service" },
            { name: "Outbrain Agency Accounts", url: "/services/outbrain-agency-ad-accounts", description: "Premium Outbrain agency accounts", itemType: "Service" },
          ],
        }}
      />
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
    </>
  );
}
