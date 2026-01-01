"use client";

import Navbar from "@/components/sections/navbar";
import LatestBlogs from "@/components/sections/latest-blogs";
import Footer from "@/components/sections/footer";
import { ArrowRight, BookOpen, Users, Award, FileText } from "lucide-react";

const resources = [
  {
    title: "Blog",
    description: "Tested playbooks, guides, and industry insights for media buyers.",
    icon: BookOpen,
    href: "/blog",
    color: "#2B7FFF"
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
    color: "#FF6600"
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[89px]">
        <section className="py-[120px] bg-[#020412]">
          <div className="container mx-auto px-6 max-w-[1280px]">
            <div className="text-center mb-16">
              <span className="text-[#2B7FFF] font-semibold text-sm tracking-widest uppercase mb-4 block">
                RESOURCES
              </span>
              <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
                Resources & Guides
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
                  className="group bg-[#080B1E] border border-white/10 rounded-[24px] p-8 lg:p-10 hover:border-[#2B7FFF]/30 transition-all"
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${resource.color}20` }}
                  >
                    <resource.icon className="w-7 h-7" style={{ color: resource.color }} />
                  </div>
                  <h3 className="text-[24px] font-semibold text-white mb-3 group-hover:text-[#2B7FFF] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-white/60 mb-6">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-[#2B7FFF] font-semibold">
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
