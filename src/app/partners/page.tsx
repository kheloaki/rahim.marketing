"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    name: "Dolphin Anty",
    description: "Anti-detect browser for managing multiple accounts securely.",
    logo: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/688dd38b68b6787dbc2c30b7_dolphinanty.avif",
    href: "https://dolphin-anty.com/"
  },
  {
    name: "Floxy",
    description: "Premium proxy solutions for media buyers and affiliates.",
    logo: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/688bc3d7ba481a32d8b594c5_floxy.svg",
    href: "https://www.floxy.io/"
  },
  {
    name: "Moropay",
    description: "Payment processing solutions for high-risk businesses.",
    logo: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/688bc3d7d132b191aa4b04dc_moropay.svg",
    href: "https://www.moropay.io/"
  },
  {
    name: "Incogniton",
    description: "Multi-account management and anti-detect browser.",
    logo: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/668ba458315ea9a6cf730e79_Incogniton.svg",
    href: "https://incogniton.com/"
  },
  {
    name: "MoreLogin",
    description: "Secure browser for managing multiple online identities.",
    logo: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/668ba458a8a763ed20150ca7_MoreLogin.svg",
    href: "https://www.morelogin.com/"
  },
  {
    name: "Wetracked",
    description: "Advanced tracking and analytics for media buyers.",
    logo: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66857cb3f0e0f317b960cd3f_wetracked.svg",
    href: "https://wetracked.io/"
  }
];

export default function PartnersPage() {
  const schemaData = otherPageSchemas["partners"];
  
  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          ...schemaData,
          path: "/partners",
          breadcrumbs: getBreadcrumbs("/partners", "Partners"),
          services: partners.map(p => ({
            name: p.name,
            url: p.href,
            description: p.description,
            itemType: "Organization",
          })),
        }}
      />
      <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-[89px]">
        <section className="py-[120px] bg-[#0a0612] relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
            <div className="text-center mb-16">
              <span className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-4 block">
                PARTNERS
              </span>
              <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
                Our Trusted{' '}
                <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                  Partners
                </span>
              </h1>
              <p className="text-[18px] text-white/60 max-w-[600px] mx-auto">
                We work with the best tools and providers in the industry to help you scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, idx) => (
                <a
                  key={idx}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#150d1f] border border-white/10 rounded-[24px] p-8 hover:border-[#E44F71]/30 transition-all"
                >
                  <div className="h-12 mb-6 flex items-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={40}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white mb-3 group-hover:text-[#E44F71] transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-white/60 mb-6 text-sm">
                    {partner.description}
                  </p>
                  <div className="flex items-center text-[#E44F71] font-semibold text-sm">
                    Visit Partner
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}