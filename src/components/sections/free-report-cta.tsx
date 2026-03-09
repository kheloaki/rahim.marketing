import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

interface FreeReportCtaProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  variant?: "local" | "default";
}

const FreeReportCta = ({
  headline = "Get a free report for your project",
  subtext = "We'll analyze your site and send you a short audit with actionable recommendations.",
  buttonText = "Get my free report",
  variant = "default",
}: FreeReportCtaProps) => {
  const isLocal = variant === "local";
  return (
    <section className="py-[100px] lg:py-[120px] px-5 lg:px-10 bg-[#0a0612]">
      <div className="max-w-[900px] mx-auto text-center">
        <div className="rounded-[20px] overflow-hidden min-h-[280px] flex flex-col items-center justify-center text-center p-8 lg:p-12 border border-white/10 bg-[#150d1f] shadow-[0_0_40px_0_rgba(228,79,113,0.1)]">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#E44F71]/20 flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-[#E44F71]" />
            </div>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight text-white mb-4">
              {isLocal ? "Get a free local SEO report for your business" : headline}
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-[600px]">
              {isLocal
                ? "We'll review your Google Business Profile and local visibility and send you a short audit with clear next steps."
                : subtext}
            </p>
            <Link
              href="/free-seo-report"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold text-base transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_24px_rgba(228,79,113,0.3)]"
            >
              {isLocal ? "Request free local SEO report" : buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeReportCta;
