"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

type CellData =
  | { type: "check" }
  | { type: "cross" }
  | { type: "text"; value: string }
  | { type: "badge"; value: string; color: string };

const ComparisonTable = () => {
  const features: Array<{ label: React.ReactNode; uproas: CellData; traditional: CellData }> = [
    {
      label: "Eligibility review before onboarding",
      uproas: { type: "check" },
      traditional: { type: "cross" },
    },
    {
      label: "Higher-capacity spend infrastructure",
      uproas: { type: "check" },
      traditional: { type: "text", value: "Often limited early" },
    },
    {
      label: "Structured Business Manager access",
      uproas: { type: "check" },
      traditional: { type: "text", value: "Varies" },
    },
    {
      label: "Replacement support when included",
      uproas: { type: "check" },
      traditional: { type: "cross" },
    },
    {
      label: "Tracking continuity guidance",
      uproas: { type: "check" },
      traditional: { type: "text", value: "DIY" },
    },
    {
      label: "Restriction review & escalation support",
      uproas: { type: "check" },
      traditional: { type: "cross" },
    },
    {
      label: "Dedicated operational support",
      uproas: { type: "check" },
      traditional: { type: "cross" },
    },
    {
      label: "Onboarding & permissions clarity",
      uproas: { type: "text", value: "Documented" },
      traditional: { type: "text", value: "Self-serve" },
    },
    {
      label: "Payment options",
      uproas: { type: "text", value: "Bank transfer, Card, Crypto" },
      traditional: { type: "text", value: "Typically card" },
    },
  ];

  const renderCellContent = (data: CellData) => {
    if (data.type === "check") {
      return (
        <div className="flex justify-center">
          <CheckCircle2 className="w-6 h-6 text-[#25D366] fill-[#25D366]/20" strokeWidth={2.5} />
        </div>
      );
    }
    if (data.type === "cross") {
      return (
        <div className="flex justify-center">
          <XCircle className="w-6 h-6 text-[#ef4444] opacity-80" strokeWidth={2.5} />
        </div>
      );
    }
    if (data.type === "badge") {
      return (
        <div className="flex justify-center">
          <span
            className={`${data.color} px-3 py-1 rounded-md text-xs font-semibold text-white min-w-[60px] text-center`}
          >
            {data.value}
          </span>
        </div>
      );
    }
    return (
      <div className="flex justify-center">
        <span className="text-white text-sm font-medium text-center px-2">{data.value}</span>
      </div>
    );
  };

  return (
    <section className="bg-[#0a0612] section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-[#E44F71] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            COMPARISON
          </span>
          <h2 className="max-w-4xl mx-auto text-white">
            Agency infrastructure vs typical self-serve accounts
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-base">
            Agency setups improve continuity and support — they do not override platform advertising
            policies.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-[#E44F71]/5 blur-3xl rounded-3xl -z-10" />

          <div className="glass-morphism rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="grid grid-cols-12 min-h-[80px] bg-[#150d1f]/50 border-b border-white/10 items-center">
              <div className="col-span-6 px-8" />
              <div className="col-span-3 flex flex-col items-center justify-center border-x border-white/10 h-full py-4 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#BC2C7B] to-[#E44F71]" />
                <span className="text-xl font-bold bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                  Rahim Marketing
                </span>
              </div>
              <div className="col-span-3 flex items-center justify-center text-sm font-semibold opacity-60">
                Typical self-serve
              </div>
            </div>

            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-12 border-b border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="col-span-6 px-8 py-5 flex items-center text-sm font-medium text-white/90">
                  {feature.label}
                </div>
                <div className="col-span-3 py-5 border-x border-white/10 bg-[#E44F71]/[0.02]">
                  {renderCellContent(feature.uproas)}
                </div>
                <div className="col-span-3 py-5">{renderCellContent(feature.traditional)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-morphism {
          background: rgba(8, 11, 30, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .section-padding {
          padding-top: 120px;
          padding-bottom: 120px;
        }
      `}</style>
    </section>
  );
};

export default ComparisonTable;
