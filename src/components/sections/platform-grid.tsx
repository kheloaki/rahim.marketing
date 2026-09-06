import React from 'react';
import Link from 'next/link';
import {
  BingIcon,
  GoogleIcon,
  MetaIcon,
  OutbrainIcon,
  TaboolaIcon,
  TikTokIcon,
} from '@/components/brand/platform-icons';

const PlatformGrid = () => {
  const platforms = [
    {
      title: "Meta Agency Accounts",
      description:
        "Meta advertising infrastructure across Facebook and Instagram with structured Business Manager access, eligibility review, and continuity support.",
      Icon: MetaIcon,
      link: "/services/facebook-agency-ad-account",
    },
    {
      title: "Google Agency Accounts",
      description:
        "Google Ads agency infrastructure for Search, YouTube, Display, and Shopping with clear onboarding and operational support.",
      Icon: GoogleIcon,
      link: "/services/google-ads-agency-account",
    },
    {
      title: "TikTok Agency Accounts",
      description:
        "TikTok agency advertising access with structured onboarding and support for compliance-aware campaign operations.",
      Icon: TikTokIcon,
      link: "/services/tiktok-agency-account",
    },
    {
      title: "Bing Agency Ad Accounts",
      description:
        "Microsoft Advertising agency accounts for Search and audience network campaigns with structured access and support.",
      Icon: BingIcon,
      link: "/services/bing-agency-accounts",
    },
    {
      title: "Taboola Agency Ad Accounts",
      description:
        "Taboola native advertising infrastructure for publisher-network campaigns with agency onboarding support.",
      Icon: TaboolaIcon,
      link: "/services/taboola-agency-ad-accounts",
    },
    {
      title: "Outbrain Agency Ad Accounts",
      description:
        "Outbrain content-discovery advertising access with structured onboarding for publisher placements.",
      Icon: OutbrainIcon,
      link: "/services/outbrain-agency-ad-accounts",
    },
  ];

  return (
    <section className="bg-[#02040a] py-[120px] lg:py-[160px]">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-[64px] lg:mb-[80px]">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.1] text-white tracking-[-0.02em] mb-6">
              Agency Ad Accounts Across Platforms
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/70 leading-[1.6] max-w-[800px] mx-auto">
              We work with all major social media platforms to provide enterprise-tier solutions for businesses of all sizes. Build advertising infrastructure designed for higher-spend operations, clearer support, and better continuity.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {platforms.map((platform) => (
              <Link
                key={platform.title}
                href={platform.link}
                className="group flex flex-col bg-[#150d1f] border border-white/10 rounded-[16px] p-8 transition-all duration-300 hover:translate-y-[-5px] hover:border-white/20 hover:shadow-[0_0_40px_0_rgba(43,89,255,0.1)]"
              >
                <div className="mb-8 w-[48px] h-[48px] flex items-center justify-center relative text-white">
                  <platform.Icon size={40} />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-semibold text-white mb-4">
                  {platform.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-white/70 leading-[1.6] mb-8 flex-grow">
                  {platform.description}
                </p>
                <div className="mt-auto flex items-center text-primary text-[14px] font-semibold uppercase tracking-wider group-hover:text-primary/80 transition-colors">
                  Get Access
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformGrid;