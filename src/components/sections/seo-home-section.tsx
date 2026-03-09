import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, MapPin, FileText } from "lucide-react";

const seoServices = [
  {
    title: "SEO Management",
    description: "We manage SEO for your projects. Technical SEO, content strategy, and ongoing optimization to grow your organic visibility.",
    link: "/services/seo-management",
    cta: "Learn more",
    icon: Search,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690b9e8f53e5c5ada378abc1_Unban_20Service-12.svg",
  },
  {
    title: "Local SEO",
    description: "Get found in your area. We optimize your Google Business Profile and local search visibility so customers near you find you first.",
    link: "/services/local-seo",
    cta: "Learn more",
    icon: MapPin,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690b9e8f53e5c5ada378abc1_Unban_20Service-12.svg",
  },
];

const SeoHomeSection = () => {
  return (
    <section className="bg-[#020412] py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#E44F71] font-semibold tracking-wider uppercase text-sm mb-4">
            SEO
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            SEO & Local SEO
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Grow your organic visibility and get found locally. We manage SEO for your projects and optimize your presence for &quot;near me&quot; and local search.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {seoServices.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group flex flex-col bg-[#080B1E] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#E44F71]/50 hover:shadow-2xl hover:shadow-[#E44F71]/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D25]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B1E] to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#E44F71]/20 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-[#E44F71]" />
                  </div>
                  <span className="text-white font-bold text-lg">{service.title}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#E44F71] font-semibold text-sm group-hover:gap-3 transition-all">
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/free-seo-report"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/90 font-semibold text-sm hover:bg-white/10 hover:border-[#E44F71]/30 transition-all"
          >
            <FileText className="w-4 h-4 text-[#E44F71]" />
            Get a free SEO report for your project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeoHomeSection;
