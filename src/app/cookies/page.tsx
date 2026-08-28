import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { metaFromSchema } from "@/lib/page-meta";

export const metadata = metaFromSchema(otherPageSchemas["cookies"], "/cookies");

export default function CookiesPage() {
  const schemaData = otherPageSchemas["cookies"];

  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          ...schemaData,
          path: "/cookies",
          breadcrumbs: getBreadcrumbs("/cookies", "Cookie Policy"),
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="py-[120px] bg-[#0a0612] relative overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-6 max-w-[800px] relative z-10">
              <h1 className="text-[48px] font-bold leading-[1.1] mb-8 tracking-tight text-white">
                Cookie{" "}
                <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-white/60 mb-8">Last updated: August 28, 2026</p>

                <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">1. What cookies we use</h2>
                <p className="text-white/60 mb-6">
                  Rahim Marketing uses cookies and similar technologies to run the website, measure traffic, and remember basic preferences. We do not sell cookie data.
                </p>

                <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">2. Essential cookies</h2>
                <p className="text-white/60 mb-6">
                  These are required for the site to function: security, load balancing, and remembering that you submitted a form in this session. The site cannot operate correctly without them.
                </p>

                <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">3. Analytics cookies</h2>
                <p className="text-white/60 mb-6">
                  We use Vercel Analytics to understand which pages are visited. This data is aggregated and is not used to advertise to you on other sites.
                </p>

                <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">4. How to control cookies</h2>
                <p className="text-white/60 mb-6">
                  You can block or delete cookies in your browser settings. If you block essential cookies, some features such as forms may not work. For more about how we handle personal data, read our Privacy Policy.
                </p>

                <h2 className="text-[24px] font-semibold text-white mt-12 mb-4">5. Contact</h2>
                <p className="text-white/60 mb-6">
                  Questions about cookies can be sent through Telegram at @rahim_ou or via the request access form.
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
