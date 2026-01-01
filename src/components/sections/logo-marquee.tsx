import React from 'react';
import Image from 'next/image';

const logos = [
  {
    name: 'Dolphin Anty',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/688dd38b68b6787dbc2c30b7_dolphinanty-5.avif',
    width: 140,
    height: 32,
  },
  {
    name: 'Wettracked.io',
    src: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66857cb3f0e0f317b960cd3f_wetracked.svg',
    width: 140,
    height: 28,
  },
  {
    name: 'Accelerated',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68acc0ae345c2f0cd114280a_accelerated-26.webp',
    width: 130,
    height: 30,
  },
  {
    name: 'Chargeback',
    src: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66857cb3989c938d6df025a1_chargeback.svg',
    width: 150,
    height: 32,
  },
  {
    name: 'Incogniton',
    src: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/668ba458315ea9a6cf730e79_Incogniton.svg',
    width: 140,
    height: 32,
  },
  {
    name: 'MoreLogin',
    src: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/668ba458a8a763ed20150ca7_MoreLogin.svg',
    width: 140,
    height: 32,
  },
  {
    name: 'Engain',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/69366fe040442f25e9d59989_engain_20logo-27.svg',
    width: 110,
    height: 32,
  },
];

/**
 * LogoMarquee Component
 * A pixel-perfect clone of the trusted partners logo marquee.
 * Features a seamless horizontal scroll animation of monochrome logos.
 */
const LogoMarquee: React.FC = () => {
  return (
    <div className="w-full bg-[#020412] pt-8 pb-12 overflow-hidden select-none">
      <div className="container mx-auto px-6 mb-8">
        {/* Optional: Add a subtle text if needed based on sections, 
            but the screenshot shows logos immediately below hero content */}
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Inner marquee container */}
        <div className="flex animate-marquee whitespace-nowrap py-4 items-center gap-12 sm:gap-20 md:gap-24">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              style={{ minWidth: brandingMinWidth(logo.name) }}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-[28px] md:max-h-[32px] w-auto h-auto"
                priority
              />
            </div>
          ))}
          {/* Second set of logos for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              style={{ minWidth: brandingMinWidth(logo.name) }}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-[28px] md:max-h-[32px] w-auto h-auto"
              />
            </div>
          ))}
        </div>

        {/* Masking gradients for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#020412] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#020412] to-transparent z-10 pointer-events-none" />
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

/**
 * Helper to ensure consistent spacing for different logo widths
 */
function brandingMinWidth(name: string): string {
  switch (name) {
    case 'Engain': return '120px';
    case 'Accelerated': return '160px';
    default: return '180px';
  }
}

export default LogoMarquee;