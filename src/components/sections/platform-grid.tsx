import React from 'react';
import Image from 'next/image';

const PlatformGrid = () => {
  const platforms = [
    {
      title: "Meta Agency Accounts",
      description: "Unlock the full potential of your brand with premium Meta Advertising, reaching billions across Facebook, Instagram, Messenger, and WhatsApp. Benefit from whitelisted accounts for higher trust and faster scaling.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/6911c94843b45e885fb0a764_Facebook-33.svg",
      link: "/services/facebook-agency-ad-account",
      alt: "Meta Agency Accounts"
    },
    {
      title: "Google Agency Accounts",
      description: "Tap into the power of Google’s vast network with whitelisted Google ad accounts that deliver higher approval rates, wider reach, and better conversions across Search, YouTube, Display, and Shopping campaigns.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/6911c948abe268a002e2ec48_Google-35.svg",
      link: "/services/google-ads-agency-account",
      alt: "Google Agency Accounts"
    },
    {
      title: "TikTok Agency Accounts",
      description: "Engage the fastest-growing audience with TikTok’s high-impact ad formats through our TikTok agency ad accounts. Our whitelisted accounts help you run compliant, scalable campaigns with higher reach and engagement from day one.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/6911c948c262a1429553f18f_TikTok-34.svg",
      link: "/services/tiktok-agency-account",
      alt: "TikTok Agency Accounts"
    },
    {
      title: "Bing Agency Ad Accounts",
      description: "Capture high-intent demand on Microsoft Advertising across Bing, Microsoft Start, Outlook, and the Microsoft Audience Network. Our whitelisted agency accounts enable faster approvals, higher spend limits.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/6911c948f80c9990b3e9ac29_bing-icon-36.svg",
      link: "/services/bing-agency-accounts",
      alt: "Bing Agency Ad Accounts"
    },
    {
      title: "Taboola Agency Ad Accounts",
      description: "Capture high-intent demand on Taboola across premium publisher widgets on top news sites. Our whitelisted agency accounts enable faster approvals, higher spend limits, and scale through Taboola's network.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/6911c9487aab425552b1ae87_taboola-37.svg",
      link: "/services/taboola-agency-ad-accounts",
      alt: "Taboola Agency Ad Accounts"
    },
    {
      title: "Outbrain Agency Ad Accounts",
      description: "Capture high-intent demand on Outbrain across premium publisher placements on top news sites. Our whitelisted agency accounts enable faster approvals, higher spend limits, and efficient global scale, now.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/6911c948a71ffb4c3e1cb799_Outbrain-38.svg",
      link: "/services/outbrain-agency-ad-accounts",
      alt: "Outbrain Agency Ad Accounts"
    }
  ];

  return (
    <section className="bg-[#02040a] py-[120px] lg:py-[160px]">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-[64px] lg:mb-[80px]">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.1] text-white tracking-[-0.02em] mb-6">
              Limitless Scaling with Agency Ad Accounts Across All Platforms
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/70 leading-[1.6] max-w-[800px] mx-auto">
              We work with all major social media platforms to provide enterprise-tier solutions for businesses of all sizes. Forget about advertising limitations, restrictions and unsustainable campaigns.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                className="group flex flex-col bg-[#150d1f] border border-white/10 rounded-[16px] p-8 transition-all duration-300 hover:translate-y-[-5px] hover:border-white/20 hover:shadow-[0_0_40px_0_rgba(43,89,255,0.1)]"
              >
                <div className="mb-8 w-[48px] h-[48px] flex items-center justify-center relative">
                  <Image
                    src={platform.icon}
                    alt={platform.alt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformGrid;