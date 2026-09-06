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
import SeoHomeSection from "@/components/sections/seo-home-section";
import OtherServices from "@/components/sections/other-services";
import FAQSection from "@/components/sections/faq-section";
import LatestBlogs from "@/components/sections/latest-blogs";
import CTABanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Agency Ad Accounts for Meta, Google & TikTok | Rahim Marketing",
  description:
    "Advertising infrastructure for Meta, Google, TikTok and other platforms. Agency ad accounts, account continuity support, tracking protection, and structured onboarding.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <ComprehensiveSchema
        pageType="home"
        data={{
          title: "Agency Ad Accounts for Meta, Google & TikTok | Rahim Marketing",
          description:
            "Advertising infrastructure for Meta, Google, TikTok and other platforms. Agency ad accounts, continuity support, and structured onboarding.",
          path: "/",
          breadcrumbs: [
            { name: "Home", url: "/" },
          ],
          services: [
            { name: "Facebook Agency Ad Accounts", url: "/services/facebook-agency-ad-account", description: "Meta advertising infrastructure and agency ad accounts", itemType: "Service" },
            { name: "Google Ads Agency Accounts", url: "/services/google-ads-agency-account", description: "Google Ads agency account infrastructure", itemType: "Service" },
            { name: "TikTok Agency Accounts", url: "/services/tiktok-agency-account", description: "TikTok agency advertising infrastructure", itemType: "Service" },
            { name: "Bing Agency Accounts", url: "/services/bing-agency-accounts", description: "Microsoft Advertising agency accounts", itemType: "Service" },
            { name: "Taboola Agency Accounts", url: "/services/taboola-agency-ad-accounts", description: "Taboola native advertising infrastructure", itemType: "Service" },
            { name: "Outbrain Agency Accounts", url: "/services/outbrain-agency-ad-accounts", description: "Outbrain content discovery advertising", itemType: "Service" },
            { name: "Meta Ads Structure for Peptide Brands", url: "/services/peptides-meta-ads", description: "Meta ads infrastructure for peptide brands", itemType: "Service" },
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
          <SeoHomeSection />
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
