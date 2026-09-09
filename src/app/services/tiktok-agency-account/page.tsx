import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import PlatformGrid from "@/components/sections/platform-grid";
import FeaturesGrid from "@/components/sections/features-grid";
import SuccessStories from "@/components/sections/success-stories";
import HowItWorks from "@/components/sections/how-it-works";
import ComparisonTable from "@/components/sections/comparison-table";
import PricingPackages from "@/components/sections/pricing-packages";
import FAQSection from "@/components/sections/faq-section";
import CTABanner from "@/components/sections/cta-banner";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { RelatedResources } from "@/components/seo/related-resources";
import { servicePageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { Check, ArrowRight, Send, MessageCircle } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { TELEGRAM_URL, WHATSAPP_URL } from "@/lib/site";
import { TikTokIcon } from "@/components/brand/platform-icons";

const path = "/services/tiktok-agency-account";
const breadcrumbs = getBreadcrumbs(path, "TikTok Agency Ad Accounts");

function TikTokHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0612] pt-24 pb-20">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
      <div className="container relative z-10 px-5 lg:px-10 max-w-[1280px] mx-auto">
        <div className="mb-8">
          <PageBreadcrumbs items={breadcrumbs} />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <span className="text-sm font-medium text-white/80">Eligibility review before onboarding</span>
            </div>

            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
              TikTok Agency{" "}
              <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                Ad Accounts
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-[540px] mx-auto lg:mx-0">
              TikTok agency advertising infrastructure with Business Center access, structured
              onboarding, and continuity-focused support. TikTok Advertising Policies still apply.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10 max-w-[500px] mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#E44F71]" />
                <span className="text-[15px] font-medium text-white">Business Center access model</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#E44F71]" />
                <span className="text-[15px] font-medium text-white">Documented permissions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#E44F71]" />
                <span className="text-[15px] font-medium text-white">Operational support paths</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <a
                href={TELEGRAM_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(228,79,113,0.4)]"
              >
                <Send className="w-5 h-5" />
                Chat with us
              </a>
              <a
                href={WHATSAPP_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold text-base transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base transition-all hover:bg-white/10"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] rounded-[1.5rem] opacity-20 blur-xl" />
            <div className="relative rounded-[1.25rem] overflow-hidden border border-white/10 bg-[#150d1f] shadow-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-black rounded-2xl flex items-center justify-center shadow-2xl">
                  <TikTokIcon size={56} className="text-white" />
                </div>
                <h3 className="text-[28px] font-bold text-white mb-4">TikTok Agency Accounts</h3>
                <p className="text-white/60 mb-8">Structured TikTok Ads agency infrastructure</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-[#E44F71]/20 text-[#E44F71] px-3 py-1 rounded-full text-xs font-semibold">Business Center access</span>
                  <span className="bg-[#E44F71]/20 text-[#E44F71] px-3 py-1 rounded-full text-xs font-semibold">Role-based permissions</span>
                  <span className="bg-[#E44F71]/20 text-[#E44F71] px-3 py-1 rounded-full text-xs font-semibold">Support paths</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const metadata = buildPageMetadata({
  title: servicePageSchemas["tiktok-agency-account"].title,
  description: servicePageSchemas["tiktok-agency-account"].description,
  path,
  image: "/images/service-accounts.jpg",
});

export default function TikTokAgencyAccountPage() {
  const schemaData = servicePageSchemas["tiktok-agency-account"];

  return (
    <>
      <ComprehensiveSchema
        pageType="service"
        data={{
          ...schemaData,
          path,
          breadcrumbs,
          image: "/images/service-accounts.jpg",
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <TikTokHeroSection />
          <PlatformGrid />
          <FeaturesGrid />
          <SuccessStories />
          <HowItWorks />
          <ComparisonTable />
          <PricingPackages />
          <FAQSection />
          <RelatedResources
            title="TikTok Ads guides"
            links={[
              {
                href: "/services/agency-ad-accounts",
                title: "Agency Ad Accounts overview",
                description: "Cross-platform agency account model",
              },
              {
                href: "/resources/tiktok-ads",
                title: "TikTok Ads resource hub",
                description: "Business Center, access, and suspensions",
              },
              {
                href: "/resources/tiktok-agency-account-guide",
                title: "What is a TikTok agency account?",
              },
              {
                href: "/resources/tiktok-ad-account-suspended",
                title: "TikTok ad account suspended",
              },
              {
                href: "/resources/tiktok-business-center-vs-agency-account",
                title: "Business Center vs agency account",
              },
              {
                href: "/resources/tiktok-ad-account-access-permissions",
                title: "TikTok access & permissions",
              },
            ]}
          />
          <CTABanner />
        </div>
        <Footer />
      </main>
    </>
  );
}
