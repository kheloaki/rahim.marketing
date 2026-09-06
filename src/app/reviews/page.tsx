import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import SuccessStories from "@/components/sections/success-stories";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { metaFromSchema } from "@/lib/page-meta";

export const metadata = metaFromSchema(otherPageSchemas["reviews"], "/reviews");

export default function ReviewsPage() {
  const schemaData = otherPageSchemas["reviews"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          ...schemaData,
          path: "/reviews",
          breadcrumbs: getBreadcrumbs("/reviews", "Reviews"),
        }}
      />
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-[89px]">
        <section className="py-20 bg-[#0a0612] relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 max-w-[1280px] text-center relative z-10">
            <span className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-4 block">
              REVIEWS
            </span>
            <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
              What Our{' '}
              <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h1>
            <p className="text-[18px] text-white/60 mb-8 max-w-[600px] mx-auto">
              Feedback from media buyers, affiliates, and ecommerce brands working with Rahim Marketing.
            </p>
            <p className="text-sm text-white/40 max-w-[520px] mx-auto">
              Third-party rating badges are shown only when a verified public profile URL is available.
              Browse the stories below for qualitative feedback.
            </p>
          </div>
        </section>
        <SuccessStories />
      </div>
      <Footer />
    </main>
    </>
  );
}