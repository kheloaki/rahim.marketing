"use client";

import Navbar from "@/components/sections/navbar";
import LogoMarquee from "@/components/sections/logo-marquee";
import Footer from "@/components/sections/footer";
import { ArrowRight, ExternalLink } from "lucide-react";
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
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[89px]">
        <section className="py-[120px] bg-[#020412]">
          <div className="container mx-auto px-6 max-w-[1280px]">
            <div className="text-center mb-16">
              <span className="text-[#2B7FFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
                PARTNERS
              </span>
              <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
                Our Trusted Partners
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
                  className="group bg-[#080B1E] border border-white/10 rounded-[24px] p-8 hover:border-[#2B7FFF]/30 transition-all"
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
                  <h3 className="text-[20px] font-semibold text-white mb-3 group-hover:text-[#2B7FFF] transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-white/60 mb-6 text-sm">
                    {partner.description}
                  </p>
                  <div className="flex items-center text-[#2B7FFF] font-semibold text-sm">
                    Visit Partner
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <LogoMarquee />
      </div>
      <Footer />
    </main>
  );
}
