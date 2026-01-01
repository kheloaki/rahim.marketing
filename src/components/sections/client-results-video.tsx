import React from 'react';
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    title: "Plugged in my card & scaled up same day",
    quote: "“Being able to use my own Visa card was huge. With other providers I couldn’t. Here, I connected my card and within half a day we were already spending. Super smooth.”",
    author: "Ecommerce Brand Owner",
    avatar: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/668ba4589d8137353f868ae7_avatar-1.webp",
    name: "Marcus N."
  },
  {
    rating: 5,
    title: "From 3 bans in 6 months to $150K/month",
    quote: "“Got banned 3 times in half a year. Since moving to Brand Rahim, zero issues. Before, every campaign felt like gambling. Now accounts have been solid for 4 months straight and we’ve scaled past $150K/month without a single ban.”",
    author: "DTC Health Offer Owner",
    avatar: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/668ba4589d8137353f868ae7_avatar-1.webp",
    name: "Travis P."
  },
  {
    rating: 5,
    title: "Didn’t expect real Meta feedback",
    quote: "“I thought ‘rep access’ just meant quick replies. But I actually got real Meta feedback explaining why an ad wasn’t approved. Fixed it in minutes. That’s the kind of support I didn’t expect but needed.”",
    author: "Performance Marketer",
    avatar: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/668ba4589d8137353f868ae7_avatar-1.webp",
    name: "Alex G."
  }
];

const ClientResultsVideo = () => {
  return (
    <section className="section-padding bg-[#020412]">
      <div className="container">
        <div className="glass-morphism rounded-3xl p-8 lg:p-14 glow-blue relative overflow-hidden bg-[rgba(8,11,30,0.8)] border border-[rgba(255,255,255,0.1)]">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-[14px] font-semibold text-[#2B7FFF] tracking-wider uppercase mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-[36px] lg:text-[48px] font-semibold leading-[1.2] mb-6">
              Success Stories from Our Clients
            </h2>
            <p className="text-[18px] text-[rgba(255,255,255,0.6)] mb-8">
              Trusted by 1,750+ media buyers, affiliates, and ecommerce brands spending $50K–$500K+/month
            </p>
            
            {/* Trust Rating Badge */}
            <div className="flex items-center justify-center gap-2 mb-12">
              <div className="flex items-center gap-2 bg-[rgba(43,127,255,0.1)] border border-[rgba(43,127,255,0.2)] px-4 py-2 rounded-lg">
                <input type="checkbox" checked readOnly className="w-5 h-5 rounded border-none bg-[#2B7FFF]" />
                <span className="text-[16px] font-semibold">4.8/5</span>
                <div className="flex text-[#25D366]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <span className="text-[14px] font-medium opacity-80">Rating</span>
              </div>
            </div>
          </div>

          {/* Video Featured Testimonial */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-[rgba(2,4,18,0.4)] p-8 lg:p-12 rounded-2xl border border-[rgba(255,255,255,0.05)]">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <img 
                  src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66857c0678859664da066b4d_carl-weische.avif" 
                  alt="Carl Weische" 
                  className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.2)]"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg">Carl Weische</span>
                    <div className="bg-[#2B7FFF] rounded-full p-0.5">
                      <Check size={10} className="text-white" />
                    </div>
                  </div>
                  <div className="text-[14px] text-[rgba(255,255,255,0.6)]">
                    Founder & CEO | Accelerated Agency
                  </div>
                </div>
                <img 
                  src="https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/66857c06eb69d854ce6996d9_accelerated.svg" 
                  alt="Accelerated" 
                  className="ml-auto h-8 opacity-60"
                />
              </div>
              
              <div className="flex text-[#25D366] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" stroke="none" />
                ))}
                <span className="text-white font-semibold ml-2">5.0</span>
              </div>
              
              <p className="text-[18px] leading-[1.6] text-[rgba(255,255,255,0.8)] italic">
                Carl Weische is the founder and CEO of the worlds leading conversion rate optimization agency proudly working with AG1, Huel, Vessi, the Oodie, Cocunat and many more 9 figure brands.
              </p>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer bg-black">
              <video 
                className="w-full h-full object-cover"
                poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68a5dac91e6443db4754e05b_rating-24.avif"
                controls
              >
                <source src="https://uproas.sfo3.cdn.digitaloceanspaces.com/accelerate-testimonial.webm" type="video/webm" />
              </video>
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs text-white">
                0:00 / 0:55
              </div>
            </div>
          </div>

          {/* Testimonial Cards Slider Simulation */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-[#020412] p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] flex flex-col h-full">
                  <div className="flex text-[#25D366] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <h4 className="text-[20px] font-semibold mb-4 leading-tight">
                    {t.title}
                  </h4>
                  <p className="text-[16px] text-[rgba(255,255,255,0.7)] mb-8 flex-grow">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full grayscale" />
                    <div>
                      <div className="font-semibold text-[15px]">{t.name}</div>
                      <div className="text-[13px] text-[rgba(255,255,255,0.5)]">{t.author}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slider Navigation */}
            <div className="flex justify-center gap-4 mt-10 lg:hidden">
              <button className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[#2B7FFF] transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[#2B7FFF] transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResultsVideo;