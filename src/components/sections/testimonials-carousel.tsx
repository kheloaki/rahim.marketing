import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    rating: '5.0',
    title: 'Lost $2M in revenue to bans. Never again.',
    content: '"2023 was my worst year. 12 account bans. $2 million in lost revenue. Competitors eating my lunch while I fought with Facebook support. Got the agency ad account in January 2024. Revenue went from $500k to $3.8M by December. Same products, same ads, just stable accounts. Do the math."',
    author: 'Robert F.',
    role: '8-Figure Advertiser',
    avatar: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba395ed9ccfde944baa79_moropay.avif' // Fallback to relevant asset
  },
  {
    rating: '5.0',
    title: 'The 1% cashback literally pays for everything',
    content: '"I\'m spending $300k/month on ads now. That\'s $4,500 in cashback every month. The agency accounts account service costs me $1,000/month. So I\'m getting PAID $3,500 to have bulletproof accounts"',
    author: 'Leonard M.',
    role: 'E-commerce Brand Owner',
    avatar: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba395ed9ccfde944baa79_moropay.avif'
  },
  {
    rating: '5.0',
    title: 'I can now run more aggressive D2C offers',
    content: '"First, they actually answered my questions before I paid. Second, the account was live within 2 hours. Third, I\'ve been running for 7 months straight with ZERO bans. My only regret is not finding them sooner."',
    author: 'Alex G.',
    role: '$180k/month ad spend',
    avatar: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba395ed9ccfde944baa79_moropay.avif'
  },
  {
    rating: '5.0',
    title: 'Why wouldn\'t Facebook shut these accounts down too?',
    content: '"I wondered why would these accounts last? Turns out that having meta reps as a part of their team really matters. I’ve been running ads for months now without any trouble at all."',
    author: 'Martin S.',
    role: 'Digital Agency Owner',
    avatar: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba395ed9ccfde944baa79_moropay.avif'
  },
  {
    rating: '5.0',
    title: 'Scaling is not a problem anymore',
    content: '"Scaling speed was always a bottleneck for us. With Uproas, we went from initial testing to spending $20k/day in less than two weeks. Their instant approvals and unlimited spend changed everything."',
    author: 'Dan O.',
    role: 'E-commerce Brand CEO',
    avatar: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba395ed9ccfde944baa79_moropay.avif'
  },
  {
    rating: '5.0',
    title: 'Pixel data safehouse. LITERALLY!',
    content: '"Losing pixel data from bans ruined our business multiple times. With Uproas’ accounts, we\'ve kept our pixel intact for over a year. This alone is the very best reason why anyone running ads on Facebook should make a switch."',
    author: 'Chloe S.',
    role: 'Dropshipping Marketer',
    avatar: 'https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/690ba395ed9ccfde944baa79_moropay.avif'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#020412] text-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 relative">
          {/* Laurel Wreath Icons Decoration */}
          <div className="absolute left-1/2 top-10 -translate-x-1/2 w-full flex justify-center pointer-events-none opacity-20">
             <div className="flex gap-[400px]">
                <div className="w-16 h-16 rotate-[-15deg]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#2B7FFF]"><path d="M7 11c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm4 0c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm4 0c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1z"/></svg>
                </div>
                <div className="w-16 h-16 rotate-[15deg] scale-x-[-1]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#2B7FFF]"><path d="M7 11c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm4 0c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm4 0c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1z"/></svg>
                </div>
             </div>
          </div>

          <div className="inline-block bg-[#080B1E] border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium tracking-tight">Testimonials</span>
          </div>
          
          <h2 className="text-[48px] font-semibold tracking-[-0.02em] leading-[1.2] mb-6">
            What Our Clients Say
          </h2>
          
          <p className="text-[18px] text-white/60 mb-10 max-w-2xl">
            See Testimonials from hundreds of entrepreneurs who already made the switch
          </p>

          {/* Trustpilot Bar */}
          <div className="bg-[#080B1E]/80 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3">
             <div className="bg-[#2B7FFF] rounded-md p-1">
                <input type="checkbox" checked readOnly className="w-4 h-4 accent-[#2B7FFF] bg-transparent border-white" />
             </div>
             <span className="text-[16px] font-semibold">4.8/5</span>
             <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-[#25D366] flex items-center justify-center rounded-sm">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                  </div>
                ))}
             </div>
             <span className="text-[14px] text-white/60">Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-[#080B1E] border border-white/10 rounded-[24px] p-8 lg:p-10 flex flex-col h-full hover:border-[#2B7FFF]/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  ))}
                </div>
                <span className="text-[14px] font-semibold text-white/80">{testimonial.rating}</span>
              </div>
              
              <h3 className="text-[18px] font-semibold leading-[1.4] mb-4">
                {testimonial.title}
              </h3>
              
              <div className="text-[14px] leading-[1.6] text-white/60 mb-8 flex-grow">
                {testimonial.content}
              </div>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-[14px] font-semibold leading-tight">{testimonial.author}</div>
                  <div className="text-[12px] text-white/40 leading-tight">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;