import React, { useState } from 'react';
import { Info, Check, ArrowRight, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

type PlanType = 'whitehat' | 'gh';

interface PricingPlanProps {
  name: string;
  price: number;
  highlightColor: string;
  isBestValue?: boolean;
  features: string[];
  bonuses: {
    label: string;
    value: string;
    info?: boolean;
  }[];
  isAvailable?: boolean;
  spotsLeft?: number;
}

const PricingPlans = () => {
  const [selectedTab, setSelectedTab] = useState<PlanType>('whitehat');

  const plans: Record<PlanType, PricingPlanProps[]> = {
    whitehat: [
      {
        name: 'Gold',
        price: 299,
        highlightColor: '#A3964E',
        features: [
          '0% of ad spend',
          'Up to $5k/month in spend',
          'No bans or restrictions',
          'Unlimited number of ad accounts',
          'Ad account issued in 5 minutes',
          'Up to 50% lower CPA\'s',
          '8x higher ad approval rates',
          'Top up with crypto / bank transfer'
        ],
        bonuses: [
          { label: 'Meta rep 24/7 access', value: '$1,000 value' },
          { label: 'Bulletproof Meta Setup PDF', value: '$500 value' },
          { label: 'Premium Partner Software Bundle', value: '$1,136 value', info: true }
        ],
        isAvailable: true,
        spotsLeft: 9
      },
      {
        name: 'Platinum',
        price: 995,
        highlightColor: '#2B7FFF',
        isBestValue: true,
        features: [
          '1% cashback on ad spend',
          'Unlimited daily spend',
          'No bans or restrictions',
          'Unlimited number of ad accounts',
          'Ad account issued in 5 minutes',
          'Up to 50% lower CPA\'s',
          '8x higher ad approval rates'
        ],
        bonuses: [
          { label: 'Meta rep 24/7 access', value: '$1,000 value' },
          { label: 'Bulletproof Meta Setup PDF', value: '$500 value' },
          { label: 'Dedicated Account Manager', value: '$500 value' },
          { label: 'All-Inclusive Partner Tool Bundle', value: '$1,186 value', info: true }
        ],
        isAvailable: true,
        spotsLeft: 9
      },
      {
        name: 'Diamond',
        price: 699,
        highlightColor: '#5A5A5A',
        features: [
          '0% of ad spend',
          'Unlimited daily spend',
          'No bans or restrictions',
          'Unlimited number of ad accounts',
          'Ad account issued in 5 minutes',
          'Up to 50% lower CPA\'s',
          '8x higher ad approval rates',
          'Top up with crypto / bank transfer'
        ],
        bonuses: [
          { label: 'Meta rep 24/7 access', value: '$1,000 value' },
          { label: 'Bulletproof Meta Setup PDF', value: '$500 value' },
          { label: 'Premium Partner Software Bundle', value: '$1,136 value', info: true }
        ],
        isAvailable: true,
        spotsLeft: 9
      }
    ],
    gh: [
      {
        name: 'Gold',
        price: 499,
        highlightColor: '#A3964E',
        features: [
          '3% fee on ad spend',
          'Up to $10k/month in spend',
          'Replacement guarantee',
          'Unlimited number of ad accounts',
          'Ad account issued in 15 minutes',
          'Anti-ban protection',
          'Support via Telegram'
        ],
        bonuses: [
          { label: 'Compliance Manual', value: '$300 value' },
          { label: 'Proxy Setup Guide', value: '$200 value' }
        ],
        isAvailable: true,
        spotsLeft: 5
      },
      {
        name: 'Platinum',
        price: 1495,
        highlightColor: '#2B7FFF',
        isBestValue: true,
        features: [
          '2.5% fee on ad spend',
          'Unlimited daily spend',
          'Priority replacements',
          'Unlimited number of ad accounts',
          'Ad account issued in 5 minutes',
          'Premium whitelisting',
          'Dedicated support'
        ],
        bonuses: [
          { label: 'Meta rep direct line', value: '$1,500 value' },
          { label: 'VIP Network Access', value: '$1,000 value' },
          { label: 'Software Suite', value: '$1,200 value', info: true }
        ],
        isAvailable: true,
        spotsLeft: 3
      },
      {
        name: 'Diamond',
        price: 999,
        highlightColor: '#5A5A5A',
        features: [
          '3% fee on ad spend',
          'Unlimited daily spend',
          'Replacement guarantee',
          'Unlimited number of ad accounts',
          'Ad account issued in 10 minutes',
          'Anti-ban protection',
          'Support via WhatsApp'
        ],
        bonuses: [
          { label: 'Advanced Scaling PDF', value: '$400 value' },
          { label: 'Tool Bundle', value: '$800 value', info: true }
        ],
        isAvailable: true,
        spotsLeft: 4
      }
    ]
  };

  return (
    <section className="bg-[#020412] text-white py-[120px] px-4">
      <div className="container mx-auto max-w-[1280px]">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#080B1E] border border-white/10 p-1.5 rounded-2xl flex items-center gap-2">
            <button
              onClick={() => setSelectedTab('whitehat')}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-semibold text-sm",
                selectedTab === 'whitehat' 
                  ? "bg-white text-black shadow-lg" 
                  : "text-white/60 hover:text-white"
              )}
            >
              <Facebook className="w-4 h-4 fill-current" />
              Whitehat
            </button>
            <button
              onClick={() => setSelectedTab('gh')}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-semibold text-sm",
                selectedTab === 'gh' 
                  ? "bg-white text-black shadow-lg" 
                  : "text-white/60 hover:text-white"
              )}
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#2B7FFF] to-[#25D366]" />
              GH
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans[selectedTab].map((plan, idx) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-[24px] border border-white/10 transition-transform duration-300 hover:scale-[1.02]",
                plan.isBestValue ? "scale-[1.05] z-10 glow-blue" : "bg-[#080B1E]"
              )}
              style={plan.isBestValue ? { 
                backgroundColor: 'rgba(8, 11, 30, 0.95)',
                borderColor: plan.highlightColor 
              } : {}}
            >
              {/* Best Value Badge */}
              {plan.isBestValue && (
                <div 
                  className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: plan.highlightColor }}
                >
                  Best Value
                </div>
              )}

              {/* Card Header */}
              <div className="p-8 pb-0">
                <h3 className="text-2xl font-bold mb-4" style={{ color: plan.name === 'Gold' ? plan.highlightColor : 'white' }}>
                  {plan.name}
                </h3>
                
                {plan.isBestValue && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#080B1E] bg-white/10" />
                      ))}
                    </div>
                    <span className="text-xs text-white/60">Trusted by 200+ Companies</span>
                  </div>
                )}

                {/* Features Section */}
                <div 
                  className="rounded-2xl p-6 mb-6" 
                  style={{ 
                    background: plan.name === 'Gold' 
                      ? 'linear-gradient(180deg, rgba(163, 150, 78, 0.15) 0%, rgba(163, 150, 78, 0.05) 100%)'
                      : plan.name === 'Platinum'
                      ? 'linear-gradient(180deg, rgba(43, 127, 255, 0.15) 0%, rgba(43, 127, 255, 0.05) 100%)'
                      : 'linear-gradient(180deg, rgba(90, 90, 90, 0.3) 0%, rgba(90, 90, 90, 0.1) 100%)'
                  }}
                >
                  <p className="text-sm font-semibold mb-4 text-white/80">
                    {plan.name === 'Platinum' ? 'Includes Cashback + Extra Bonuses:' : 'Core features:'}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/90">
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: plan.highlightColor }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bonus Section */}
                <div className="bg-white/[0.03] rounded-2xl p-6 mb-8 border border-white/5">
                  <p className="text-sm font-semibold mb-4 text-white/80">Bonuses include:</p>
                  <ul className="space-y-3">
                    {plan.bonuses.map((bonus, i) => (
                      <li key={i} className="flex items-start justify-between gap-2 text-sm">
                        <div className="flex items-start gap-2.5 text-white/90">
                          <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: plan.highlightColor }} />
                          <span>{bonus.label}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="font-bold underline text-[rgba(255,255,255,0.8)]" style={{ textDecorationColor: plan.highlightColor }}>
                            ({bonus.value})
                          </span>
                          {bonus.info && <Info className="w-3.5 h-3.5 opacity-40 cursor-help" />}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price and Footer */}
              <div className="mt-auto p-8 pt-0">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold tracking-tight">${plan.price}</span>
                  <span className="text-white/40 text-sm">per month</span>
                </div>

                {/* Lock-In Guarantee Box */}
                <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 mb-6">
                  <p className="text-xs leading-relaxed">
                    <span className="text-red-400 font-bold">Lock-In Guarantee:</span> Stay on legacy pricing and save <span className="text-green-400 font-bold">$100-$300/month</span> as we raise rates for new clients.
                  </p>
                </div>

                {/* CTA Button */}
                <button 
                  className="w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all hover:brightness-110 mb-6"
                  style={{ backgroundColor: plan.highlightColor }}
                >
                  Check Availability
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Card Payment Logos (Placeholder Icons) */}
                <div className="flex justify-center gap-3 opacity-60 mb-6 flex-wrap">
                  {['Visa', 'Mastercard', 'Amex', 'ApplePay', 'Crypto', 'Bank'].map((type) => (
                    <div key={type} className="h-5 px-2 bg-white/10 rounded flex items-center text-[10px] font-bold uppercase tracking-tight">
                      {type}
                    </div>
                  ))}
                </div>

                {/* Availability Indicator */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-semibold text-white/80">Only {plan.spotsLeft}/20 Spots Available</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;