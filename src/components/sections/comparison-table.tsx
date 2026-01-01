import React from 'react';
import Image from 'next/image';
import { CheckCircle2, XCircle, Info } from 'lucide-react';

const ComparisonTable = () => {
  const features = [
    {
      label: 'Run Ads For Almost Any Vertical',
      uproas: { type: 'check' },
      traditional: { type: 'cross' },
    },
    {
      label: 'Unlimited Spending Limit 📈',
      uproas: { type: 'check' },
      traditional: { type: 'cross' },
    },
    {
      label: 'Unlimited Ad Accounts',
      uproas: { type: 'check' },
      traditional: { type: 'cross' },
    },
    {
      label: (
          <span className="flex items-center gap-1.5">
            Accounts HIVA Score <Info className="w-3.5 h-3.5 text-[#E44F71] cursor-help" />
          </span>
      ),
      uproas: { type: 'text', value: 'Platinum' },
      traditional: { type: 'text', value: 'Silver' },
    },
    {
      label: "CPM's & CPA's",
      uproas: { type: 'badge', value: 'Low', color: 'bg-[#25D366]' },
      traditional: { type: 'badge', value: 'High', color: 'bg-[#ef4444]' },
    },
    {
      label: 'Increase Ad Approval Rate',
      uproas: { type: 'text', value: '687%' },
      traditional: { type: 'text', value: '0%' },
    },
    {
      label: '24/7 Customer Support',
      uproas: { type: 'check' },
      traditional: { type: 'cross' },
    },
    {
      label: 'Average Ad Approval Time',
      uproas: { type: 'text', value: '5 Minutes' },
      traditional: { type: 'text', value: '5-9 Hours' },
    },
    {
      label: 'Payment Options',
      uproas: { type: 'text', value: 'Bank transfer, Card, Crypto' },
      traditional: { type: 'text', value: 'Card Payment Only' },
    },
  ];

  const renderCellContent = (data: any) => {
    if (data.type === 'check') {
      return (
        <div className="flex justify-center">
          <CheckCircle2 className="w-6 h-6 text-[#25D366] fill-[#25D366]/20" strokeWidth={2.5} />
        </div>
      );
    }
    if (data.type === 'cross') {
      return (
        <div className="flex justify-center">
          <XCircle className="w-6 h-6 text-[#ef4444] opacity-80" strokeWidth={2.5} />
        </div>
      );
    }
    if (data.type === 'badge') {
      return (
        <div className="flex justify-center">
          <span className={`${data.color} px-3 py-1 rounded-md text-xs font-semibold text-white min-w-[60px] text-center`}>
            {data.value}
          </span>
        </div>
      );
    }
    return (
      <div className="flex justify-center">
        <span className="text-white text-sm font-medium">{data.value}</span>
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
            See how Rahim Marketing Beats Regular Ad Accounts Every Single Time
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Glow Background */}
          <div className="absolute -inset-4 bg-[#E44F71]/5 blur-3xl rounded-3xl -z-10"></div>
          
          <div className="glass-morphism rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="grid grid-cols-12 min-h-[80px] bg-[#150d1f]/50 border-b border-white/10 items-center">
              <div className="col-span-6 px-8"></div>
              <div className="col-span-3 flex flex-col items-center justify-center border-x border-white/10 h-full py-4 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#BC2C7B] to-[#E44F71]"></div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                  Rahim Marketing
                </span>
              </div>
              <div className="col-span-3 flex items-center justify-center text-sm font-semibold opacity-60">
                Traditional Ad Accounts
              </div>
            </div>

            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-12 border-b border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors`}
              >
                <div className="col-span-6 px-8 py-5 flex items-center text-sm font-medium text-white/90">
                  {feature.label}
                </div>
                <div className="col-span-3 py-5 border-x border-white/10 bg-[#E44F71]/[0.02]">
                  {renderCellContent(feature.uproas)}
                </div>
                <div className="col-span-3 py-5">
                  {renderCellContent(feature.traditional)}
                </div>
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