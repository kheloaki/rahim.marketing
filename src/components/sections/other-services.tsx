import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const OtherServices = () => {
  const services = [
    {
      title: "Facebook Unban Services",
      description: "Comprehensive solutions tailored for managing local digital campaigns and reaching targeted communities effectively.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/svgs/690b9e8f53e5c5ada378abc1_Unban_20Service-12.svg",
      link: "/facebook-unban-services"
    },
    {
      title: "Facebook Business Managers",
      description: "Centralized tool for organizing assets, managing permissions, and streamlining all business operations.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/690b9e8ff01c0cfaf629b82e_4db4364723691601ed55b96e7-1.avif",
      link: "/products/buy-facebook-business-managers"
    },
    {
      title: "Facebook Pages",
      description: "Dedicated platform to showcase your brand, engage audiences, and grow an online community seamlessly.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/690b9e90063a7c130f95c211_ff85f2f31b4179c499149315a-2.avif",
      link: "/products/buy-facebook-pages"
    },
    {
      title: "Facebook Accounts",
      description: "Secure profiles that enable users to connect, interact, and manage business or personal activities online.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/690b9e8ff01c0cfaf629b82e_4db4364723691601ed55b96e7-1.avif", // Reusing BM asset as fallback for accounts graphics which has similar theme
      link: "/products/buy-facebook-accounts"
    }
  ];

  return (
    <section className="bg-[#020412] py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#2B7FFF] font-semibold tracking-wider uppercase text-sm mb-4">OTHERS</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Other Services</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Additional tailored solutions designed to support your business needs beyond core Facebook offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a 
              key={index}
              href={service.link}
              className="group flex flex-col bg-[#080B1E] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#2B7FFF]/50 hover:shadow-2xl hover:shadow-[#2B7FFF]/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D25]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B1E] to-transparent opacity-40"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#2B7FFF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#2B7FFF] transition-all duration-300 transform group-hover:translate-x-1" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Slider Navigation Indicators (as seen in screenshots) */}
        <div className="flex justify-center mt-12 gap-3">
          <div className="w-12 h-1 bg-[#2B7FFF] rounded-full"></div>
          <div className="w-12 h-1 bg-white/10 rounded-full"></div>
          <div className="w-12 h-1 bg-white/10 rounded-full"></div>
        </div>

        {/* Carousel buttons (as seen in screenshots) */}
        <div className="flex justify-end mt-[-32px] gap-2">
            <button 
              className="p-3 border border-white/10 rounded-md bg-[#080B1E] hover:bg-white/5 transition-colors"
              aria-label="Previous service"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              className="p-3 border border-white/10 rounded-md bg-[#080B1E] hover:bg-white/5 transition-colors"
              aria-label="Next service"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;