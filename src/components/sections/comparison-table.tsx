import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  // Data for the comparison table based on the screenshots and instructions
  const comparisonData = [
    {
      feature: "Agency Ad Accounts",
      uproas: "Included",
      others: "Personal / BM"
    },
    {
      feature: "Spending Limit",
      uproas: "Unlimited",
      others: "$50-$250/day"
    },
    {
      feature: "Scale potential",
      uproas: "Extremely high",
      others: "Very low"
    },
    {
      feature: "Ban protection",
      uproas: true,
      others: false
    },
    {
      feature: "Dedicated Meta/Google Rep",
      uproas: true,
      others: false
    },
    {
      feature: "Replacement speed",
      uproas: "Instant",
      others: "Days/Weeks"
    },
    {
      feature: "Pixel data safety",
      uproas: true,
      others: false
    },
    {
      feature: "Card compatibility",
      uproas: "All cards accepted",
      others: "Highly restricted"
    },
    {
      feature: "Approval time",
      uproas: "Seconds",
      others: "Hours/Days"
    },
    {
      feature: "Cashback",
      uproas: "Up to 1%",
      others: "None"
    }
  ];

  return (
    <section className="py-[120px] bg-[#02040a] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d946a8] opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-10 max-w-[1280px]">
        <div className="text-center mb-16">
          <h2 className="text-[3rem] font-bold leading-[1.1] mb-6 tracking-tight text-white">Comparison</h2>
          <p className="text-[1.125rem] text-white/70 max-w-[700px] mx-auto">
            See how Uproas agency services beat all other service providers in stability, scale, and support.
          </p>
        </div>

        <div className="glass-panel rounded-[1rem] border border-white/10 bg-[#150d1f]/80 backdrop-blur-md overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-8 px-6 text-left w-1/3 text-white/60 font-semibold uppercase tracking-wider text-sm">Feature</th>
                <th className="py-8 px-6 text-center w-1/3 bg-[#d946a8]/10 border-x border-white/10">
                  <div className="flex flex-col items-center gap-2">
                    <img 
                      src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66857660d17fcbc0b572ffd2_uproas-logo-white.svg" 
                      alt="Uproas" 
                      className="h-6"
                    />
                  </div>
                </th>
                <th className="py-8 px-6 text-center w-1/3 text-white/60 font-semibold uppercase tracking-wider text-sm">Other Providers</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors`}
                >
                  <td className="py-6 px-6 text-white font-medium text-base">
                    {row.feature}
                  </td>
                  <td className="py-6 px-6 text-center bg-[#d946a8]/5 border-x border-white/10">
                    <div className="flex justify-center items-center">
                      {typeof row.uproas === 'boolean' ? (
                        <div className="w-8 h-8 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-[#10b981]" />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-[#10b981]/20 flex items-center justify-center mb-2">
                            <Check className="w-4 h-4 text-[#10b981]" />
                          </div>
                          <span className="text-white font-semibold">{row.uproas}</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <div className="flex justify-center items-center">
                      {typeof row.others === 'boolean' ? (
                        <div className="w-8 h-8 rounded-full bg-[#ef4444]/20 flex items-center justify-center">
                          <X className="w-5 h-5 text-[#ef4444]" />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-[#ef4444]/20 flex items-center justify-center mb-2">
                            <X className="w-4 h-4 text-[#ef4444]" />
                          </div>
                          <span className="text-white/60">{row.others}</span>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
            Whitelisted accounts with priority support and rapid scaling.
          </p>
        </div>
      </div>

      <style jsx>{`
        .glass-panel {
          box-shadow: 0 0 40px 0 rgba(43, 89, 255, 0.05);
        }
      `}</style>
    </section>
  );
};

export default ComparisonTable;