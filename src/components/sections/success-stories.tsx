import React, { useRef } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    rating: 5.0,
    title: "Plugged in my card & scaled up same day",
    content: "“Being able to use my own Visa card was huge. With other providers I couldn’t. Here, I connected my card and within half a day we were already spending. Super smooth.”",
    author: "Ecommerce Brand Owner",
  },
  {
    rating: 5.0,
    title: "From 3 bans in 6 months to $150K/month",
    content: "“Got banned 3 times in half a year. Since moving to Rahim Marketing, zero issues. Before, every campaign felt like gambling. Now accounts have been solid for 4 months straight and we’ve scaled past $150K/month without a single ban.”",
    author: "DTC Health Offer Owner",
  },
  {
    rating: 5.0,
    title: "Didn’t expect real Meta feedback",
    content: "“I thought ‘rep access’ just meant quick replies. But I actually got real Meta feedback explaining why an ad wasn’t approved. Fixed it in minutes. That’s the kind of support I didn’t expect but needed.”",
    author: "Performance Marketer",
  },
  {
    rating: 5.0,
    title: "Cashback makes my plan basically free",
    content: "“Our ad spend hit $100k last month. The 1% cashback basically wiped out the $999 plan cost. The subscription ended up paying for itself.”",
    author: "Agency Owner",
  },
  {
    rating: 5.0,
    title: "Finally found accounts that don’t die",
    content: "“I’ve tried at least five providers before. None of them lasted more than a few weeks. With Rahim Marketing, it’s the first time I’ve had both stable accounts and actual support. Even Meta reps answer now. Total game-changer.”",
    author: "Lead Gen Affiliate",
  }
];

const SuccessStories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-[120px] bg-[#02040a] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle,rgba(43,89,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#10b981] text-[#10b981]" />
              ))}
            </div>
            <span className="text-white font-semibold">5.0</span>
          </div>
          <h2 className="text-[3rem] font-bold text-white mb-6">Success Stories from Our Clients</h2>
          <p className="text-[1.125rem] text-white/70 max-w-[800px] mx-auto">
            Trusted by 1,750+ media buyers, affiliates, and ecommerce brands spending $50K–$500K+/month
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-[1000px] mx-auto mb-20">
          <div className="glass-panel rounded-[1.25rem] overflow-hidden bg-[#150d1f]/80 border border-white/10 glow-blue">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center text-white/40">
                    <Star size={24} className="fill-[#10b981] text-[#10b981]" />
                 </div>
                 <div>
                    <div className="text-white font-bold text-xl">Kamil Z.</div>
                    <div className="text-white/40 text-sm">SaaS Founder & Rahim Marketing Client</div>
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 italic">"These guides changed everything. We applied the structures and instantly stopped losing accounts. The aggressive scaling book alone is worth thousands."</h3>
              <div className="flex items-center gap-3">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/82acdb25-9ead-41a3-9e58-a393f66f7c2d-uproas-io/assets/images/68617f6e5cafcdc938e782f7_trustpilotstars-26.avif" 
                  alt="Trustpilot Stars" 
                  width={100} 
                  height={20}
                  className="h-5 w-auto object-contain"
                />
                <span className="text-white/60 text-sm font-medium">Excellent reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="h-full glass-panel p-8 rounded-2xl bg-[#150d1f] border border-white/10 flex flex-col hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-1 mb-4 text-[#10b981]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 line-clamp-2">{item.title}</h4>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 flex-grow">
                    {item.content}
                  </p>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-white font-semibold">{item.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;