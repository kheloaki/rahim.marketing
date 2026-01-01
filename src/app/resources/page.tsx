"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import LatestBlogs from "@/components/sections/latest-blogs";
import { ArrowRight, BookOpen, Users, Award, FileText } from "lucide-react";

const resources = [
  {
    title: "Blog",
    description: "Tested playbooks, guides, and industry insights for media buyers.",
    icon: BookOpen,
    href: "/blog",
    color: "#E44F71"
  },
  {
    title: "Partners",
    description: "Exclusive tools and providers we trust and recommend.",
    icon: Users,
    href: "/partners",
    color: "#25D366"
  },
  {
    title: "Reviews",
    description: "See what our clients say on Trustpilot and G2.",
    icon: Award,
    href: "/reviews",
    color: "#A3964E"
  },
  {
    title: "Milestones",
    description: "Claim your rewards based on your ad spend levels.",
    icon: FileText,
    href: "/milestones",
    color: "#BC2C7B"
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-[89px]">
        <section className="py-[120px] bg-[#0a0612] relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
            <div className="text-center mb-16">
              <span className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-4 block">
                RESOURCES
              </span>
              <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
                Resources &{' '}
                <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                  Guides
                </span>
              </h1>
              <p className="text-[18px] text-white/60 max-w-[600px] mx-auto">
                Everything you need to scale your advertising. From guides to partner tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.href}
                  className="group bg-[#150d1f] border border-white/10 rounded-[24px] p-8 lg:p-10 hover:border-[#E44F71]/30 transition-all"
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${resource.color}20` }}
                  >
                    <resource.icon className="w-7 h-7" style={{ color: resource.color }} />
                  </div>
                  <h3 className="text-[24px] font-semibold text-white mb-3 group-hover:text-[#E44F71] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-white/60 mb-6">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-[#E44F71] font-semibold">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <LatestBlogs />
      </div>
      <Footer />
    </main>
  );
}