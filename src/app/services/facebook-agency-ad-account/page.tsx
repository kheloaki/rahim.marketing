import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Send, MessageCircle } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import PricingPackages from "@/components/sections/pricing-packages";
import FAQSection from "@/components/sections/faq-section";
import CTABanner from "@/components/sections/cta-banner";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { RelatedResources } from "@/components/seo/related-resources";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { servicePageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { buildPageMetadata } from "@/lib/seo";
import { TELEGRAM_URL, WHATSAPP_URL } from "@/lib/site";

const path = "/services/facebook-agency-ad-account";
const schema = servicePageSchemas["facebook-agency-ad-account"];
const breadcrumbs = getBreadcrumbs(path, "Facebook Agency Ad Accounts");

export const metadata: Metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path,
  keywords: [
    "facebook agency ad account",
    "meta agency ad account",
    "facebook agency account",
    "meta advertising account",
  ],
  image: "/images/service-accounts.jpg",
});

const comparison = [
  { label: "Ownership & access", ours: "Documented BM permissions", theirs: "Often personal / unclear" },
  { label: "Spend infrastructure", ours: "Higher-capacity agency setup", theirs: "New self-serve limits common" },
  { label: "Support / escalation", ours: "Operational support included", theirs: "Mostly self-serve help center" },
  { label: "Onboarding", ours: "Eligibility review first", theirs: "Instant create, limited review" },
  { label: "Billing", ours: "Card, crypto, or bank (per account)", theirs: "Typically card" },
  { label: "Account continuity", ours: "Replacement support when included", theirs: "Rebuild from scratch" },
  { label: "Tracking / data", ours: "Continuity guidance for Pixel/Dataset", theirs: "Often tied to one fragile node" },
];

export default function FacebookAgencyAdAccountPage() {
  return (
    <>
      <ComprehensiveSchema
        pageType="service"
        data={{
          title: schema.title,
          description: schema.description,
          path,
          serviceType: schema.serviceType,
          breadcrumbs,
          faqs: schema.faqs,
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="relative overflow-hidden bg-[#0a0612] pt-16 pb-20 lg:pt-20 lg:pb-24">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="container relative z-10 mx-auto px-5 lg:px-10 max-w-[1280px]">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <PageBreadcrumbs items={breadcrumbs} />
                  <p className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-5">
                    Meta advertising infrastructure
                  </p>
                  <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
                    Facebook Agency{" "}
                    <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                      Ad Accounts
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-[540px]">
                    Structured Meta agency ad accounts for higher-spend operations: clear access,
                    tracking continuity, eligibility review, and restriction support — without
                    promising that platform policies can be ignored.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {[
                      "Business Manager permissions — never your personal password",
                      "Eligibility review before onboarding",
                      "Replacement & restriction support where included",
                      "Pixel / Dataset continuity guidance",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white">
                        <Check className="w-5 h-5 text-[#E44F71] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/request-access?service=facebook"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold"
                    >
                      Request Access
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={TELEGRAM_URL}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold"
                    >
                      <Send className="w-5 h-5" />
                      Telegram
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] rounded-[1.5rem] opacity-20 blur-xl" />
                  <div className="relative rounded-[1.25rem] overflow-hidden border border-white/10">
                    <Image
                      src="/images/service-accounts.jpg"
                      alt="Meta agency ad account structure with Business Manager, Pixel and advertising account"
                      width={1200}
                      height={750}
                      className="w-full h-auto object-cover"
                      priority
                      sizes="(min-width: 1024px) 560px, 90vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-white">
            <div className="container mx-auto px-5 lg:px-10 max-w-[860px]">
              <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">
                What you receive
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0612] mb-6">
                What is a Facebook / Meta agency ad account?
              </h2>
              <p className="text-[#0a0612]/80 leading-relaxed mb-4">
                A Facebook (Meta) agency ad account is advertising infrastructure accessed through
                an agency or partner setup. You typically receive Business Manager access to spend
                nodes, documented permissions, billing workflows, and operational support — instead
                of relying only on a brand-new personal self-serve account.
              </p>
              <p className="text-[#0a0612]/80 leading-relaxed">
                Agency infrastructure improves continuity and clarity. It does not override Meta
                Advertising Policies, and it does not guarantee that every offer or creative will be
                approved.
              </p>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-[#0a0612]">
            <div className="container mx-auto px-5 lg:px-10 max-w-[1000px]">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Agency account vs standard Meta ad account
              </h2>
              <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
                Both models can still face restrictions. The difference is infrastructure and support.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-white/70">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Topic</th>
                      <th className="px-6 py-4 font-semibold text-[#E44F71]">Rahim Marketing setup</th>
                      <th className="px-6 py-4 font-semibold">Typical self-serve</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr key={row.label} className="border-t border-white/10">
                        <td className="px-6 py-4 text-white font-medium">{row.label}</td>
                        <td className="px-6 py-4 text-[#E44F71]">{row.ours}</td>
                        <td className="px-6 py-4 text-white/60">{row.theirs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-white">
            <div className="container mx-auto px-5 lg:px-10 max-w-[1000px] grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">Who this is for</h2>
                <ul className="space-y-3 text-[#0a0612]/80">
                  {[
                    "Ecommerce brands scaling Meta spend",
                    "Agencies managing client campaigns",
                    "High-spend advertisers needing clearer infrastructure",
                    "Teams that need documented access and continuity options",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-5 h-5 text-[#E44F71] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0612] mb-4">Who this is NOT for</h2>
                <ul className="space-y-3 text-[#0a0612]/80">
                  {[
                    "Anyone looking to bypass Meta advertising policies",
                    "Offers that fail eligibility review",
                    "Teams unwilling to use Business Manager permissions properly",
                    "Advertisers expecting a guarantee that restrictions cannot happen",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-5 h-5 text-[#E44F71] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-[#0a0612]">
            <div className="container mx-auto px-5 lg:px-10 max-w-[860px] space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">How access and ownership work</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  You should never give your personal Facebook password. Access is granted through
                  Business Manager roles and partner access where applicable. During onboarding we
                  document what Rahim can see, what you control, and how access can be revoked.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Data ownership for Pages, domains, and Pixel/Dataset should be intentional. We
                  help you keep measurement on durable assets where the architecture allows.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Pixel / Dataset / tracking continuity</h2>
                <p className="text-white/70 leading-relaxed">
                  When tracking sits only on a fragile spend account, a restriction can interrupt
                  learning and reporting. We guide setups that separate durable tracking ownership
                  from replaceable spend nodes — within what Meta permissions allow.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Funding &amp; billing</h2>
                <p className="text-white/70 leading-relaxed">
                  Supported funding methods depend on the account and may include card, crypto, or
                  bank transfer. Exact options are confirmed during onboarding — we do not invent
                  methods that are not available for your setup.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Replacement &amp; restriction support</h2>
                <p className="text-white/70 leading-relaxed">
                  Meta can restrict any advertising asset. Where your plan includes replacement
                  support, we help review the situation and restore spend capacity when possible.
                  Restoration is never guaranteed. See also our{" "}
                  <Link href="/facebook-unban-services" className="text-[#E44F71] underline">
                    restriction review service
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/health-assessment-service" className="text-[#E44F71] underline">
                    Meta ad account health audit
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">How onboarding works</h2>
                <ol className="space-y-3 text-white/70 list-decimal pl-5">
                  <li>Submit business and offer details for eligibility review.</li>
                  <li>We confirm fit, plan, and access model.</li>
                  <li>After approval, infrastructure is typically delivered within about 24 hours.</li>
                  <li>Fund the account and launch with documented permissions.</li>
                </ol>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Why advertisers choose Rahim</h2>
                <ul className="space-y-3 text-white/70">
                  {[
                    "Meta-focused infrastructure with clear permissions",
                    "Eligibility review before you spend",
                    "Continuity-oriented tracking guidance",
                    "Responsive operational support over Telegram and WhatsApp",
                    "Honest positioning: policies still apply",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-5 h-5 text-[#E44F71] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <PricingPackages />
          <FAQSection
            faqs={schema.faqs}
            title="Facebook agency ad account FAQ"
            subtitle="Straight answers about Meta agency accounts, ownership, and restrictions."
          />
          <RelatedResources
            title="Related guides"
            links={[
              {
                href: "/services/agency-ad-accounts",
                title: "Agency Ad Accounts overview",
                description: "Cross-platform agency account model",
              },
              {
                href: "/resources/meta-agency-ad-account-guide",
                title: "What Is a Meta Agency Ad Account?",
                description: "Definition, access, billing, and tracking",
              },
              {
                href: "/resources/meta-agency-account-vs-standard-ad-account",
                title: "Agency vs standard Meta accounts",
                description: "When self-serve is enough",
              },
              {
                href: "/resources/meta-business-manager-permissions",
                title: "Business Manager permissions",
                description: "Roles, partners, and safe agency access",
              },
              {
                href: "/resources/meta-pixel-capi-account-structure",
                title: "Pixel, Dataset & CAPI structure",
                description: "How measurement should relate to spend nodes",
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
