import React from 'react';
import Image from 'next/image';

const otherServicesData = [
  {
    title: 'Facebook Unban Services',
    description: 'Comprehensive solutions tailored for managing local digital campaigns and reaching targeted communities effectively.',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690b9e8f53e5c5ada378abc1_Unban_20Service-12.svg',
    link: '/facebook-unban-services',
  },
  {
    title: 'Facebook Business Managers',
    description: 'Centralized tool for organizing assets, managing permissions, and streamlining all business operations.',
    icon: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b9e8ff01c0cfaf629b82e_4db4364723691601ed55b96e75bf26d0_business%20managers.avif',
    link: '/products/buy-facebook-business-managers',
  },
  {
    title: 'Facebook Pages',
    description: 'Dedicated platform to showcase your brand, engage audiences, and grow an online community seamlessly.',
    icon: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690b9e90063a7c130f95c211_ff85f2f31b4179c499149315a473447b_facebook%20pages.avif',
    link: '/products/buy-facebook-pages',
  },
  {
    title: 'Feedback Score Boost',
    description: "Boost your Facebook page's feedback score & make your ads more profitable with lower CPM's",
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690b9e8f615efe1d1a8eb829_Facebook_20Feedback_20Sco-10.svg',
    link: '/services/facebook-feedback-score',
  },
  {
    title: 'Meta Health Assessment',
    description: 'See the health of your Meta assets: penalties, Hiva Score, CAR rate & see how to fix them',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690b9e90a2b997d36506efcc_Account_20Health_20Assess-11.svg',
    link: '/services/health-assessment-service',
  },
];

const OtherServices = () => {
  return (
    <section className="py-[120px] md:py-[160px] bg-[#02040a]">
      <div className="container mx-auto px-5 lg:px-10 max-w-[1280px]">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Services
          </div>
          <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
            Other Services
          </h2>
          <p className="text-white/70 text-[18px] leading-[1.6]">
            Additional tailored solutions designed to support your business needs beyond core Facebook offerings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServicesData.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group relative flex flex-col p-8 bg-[#150d1f] border border-[rgba(255,255,255,0.1)] rounded-[16px] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_0_rgba(43,89,255,0.1)]"
            >
              <div className="mb-6 w-12 h-12 flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[24px] font-bold mb-4 leading-[1.2] text-white">
                {service.title}
              </h3>
              <p className="text-white/70 text-[16px] leading-[1.6]">
                {service.description}
              </p>
              
              {/* Optional Arrow Indicator for Hover State */}
              <div className="mt-8 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
          
          {/* Support CTA Card (Visual Placeholder for even grid if needed, otherwise data maps) */}
          <div className="hidden lg:flex flex-col p-8 bg-gradient-to-br from-[#E44F7110] to-transparent border border-[rgba(43,89,255,0.2)] rounded-[16px] justify-center items-center text-center">
             <div className="mb-4">
               <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary opacity-60">
                 <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
               </svg>
             </div>
             <p className="text-white/70 text-sm font-medium mb-4">Need help with something else?</p>
             <a href="/contact" className="text-primary font-bold hover:underline">Contact Support →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;