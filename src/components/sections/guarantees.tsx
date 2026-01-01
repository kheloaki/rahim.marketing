import React from 'react';
import Image from 'next/image';

const GuaranteesSection = () => {
  return (
    <section className="bg-[#020412] text-white py-20 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-[32px] md:text-[48px] font-semibold text-center mb-16 leading-tight">
          All Packages Come with Guarantees
        </h2>

        {/* Certificate Container */}
        <div className="relative w-full max-w-[960px] p-[2px] rounded-xl overflow-hidden bg-gradient-to-b from-white/20 to-transparent">
          <div className="relative bg-[#080B1E] rounded-[10px] p-6 md:p-12 overflow-hidden border border-white/10">
            
            {/* Ornate Background Border Pattern - Using a repeating CSS pattern for pixel accuracy */}
            <div 
              className="absolute inset-4 border-[12px] border-double border-white/5 pointer-events-none rounded-sm"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20l20-20H0l20 20zM0 40l20-20 20 20H0z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '20px 20px'
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Gold Seal Column */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
                  {/* Decorative Glow behind seal */}
                  <div className="absolute inset-0 bg-[#A3964E]/20 blur-[40px] rounded-full scale-75" />
                  
                  {/* Gold Guarantee Seal */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-[6px] border-[#A3964E] opacity-50 shadow-[0_0_20px_rgba(163,150,78,0.3)]" />
                    <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#7B6E32] via-[#A3964E] to-[#D4C374] flex flex-col items-center justify-center text-center p-4 border-2 border-[#D4C374] shadow-xl">
                      <div className="flex gap-0.5 mb-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.335 24 12 20.107 4.665 24 6 15.272 0 9.423l8.332-1.268z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight text-white mb-0">100%</span>
                      <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.1em] text-white/90 leading-none">Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee Content Column */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                
                {/* Top Row Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass-morphism p-5 rounded-lg border border-white/10 glow-blue">
                    <h4 className="text-[15px] font-semibold mb-2">Account Replacement Guarantee</h4>
                    <p className="text-[13px] text-white/60 leading-relaxed">
                      If your ad account goes down, we&apos;ll replace it within 24 hours at no extra cost.
                    </p>
                  </div>
                  <div className="glass-morphism p-5 rounded-lg border border-white/10 glow-blue">
                    <h4 className="text-[15px] font-semibold mb-2">Ad Spend Guarantee</h4>
                    <p className="text-[13px] text-white/60 leading-relaxed">
                      If you want to stop running your ads, we&apos;ll refund your remaining balance.
                    </p>
                  </div>
                </div>

                {/* Long Block */}
                <div className="glass-morphism p-5 rounded-lg border border-white/10 glow-blue">
                  <h4 className="text-[15px] font-semibold mb-2">Locked Rate Guarantee</h4>
                  <p className="text-[13px] text-white/60 leading-relaxed">
                    Your price is locked in for life—even as we raise pricing for new clients.
                  </p>
                </div>

                {/* Bottom Signature Section */}
                <div className="mt-4 pt-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div className="max-w-[440px]">
                    <h3 className="text-[18px] font-semibold mb-3">Rahim Marketing Satisfaction Guarantee</h3>
                    <p className="text-[14px] text-white/60 leading-relaxed mb-4">
                      Rahim Marketing guarantees access to premium ad accounts with direct access to a professional support team.
                    </p>
                    <p className="text-[14px] text-white/60 leading-relaxed">
                      Chosen by advertisers who plan to run long term. Focus on the important parts of the business instead of dealing with daily ad account headaches.
                    </p>
                  </div>
                  
                  {/* Signature Asset */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-[180px] h-[80px]">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/6909cb9a592ba8bd0c1983a2_68ef859babb16a4a5525c96a_-10.avif"
                        alt="CEO Signature"
                        fill
                        className="object-contain brightness-100 contrast-125 grayscale invert"
                        priority
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;