import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = [
    {
      title: "Agency Accounts",
      links: [
        { name: "Facebook Agency Ad Accounts", href: "/services/facebook-agency-ad-account" },
        { name: "Google Agency Ad Accounts", href: "/services/google-ads-agency-account" },
        { name: "TikTok Agency Ad Accounts", href: "/services/tiktok-agency-account" },
        { name: "Bing Agency Ad Accounts", href: "/services/bing-agency-accounts" },
        { name: "Taboola Agency Accounts", href: "/services/taboola-agency-ad-accounts" },
        { name: "Outbrain Agency Accounts", href: "/services/outbrain-agency-ad-accounts" },
      ],
    },
    {
      title: "Other Services",
      links: [
        { name: "Facebook Feedback Score Boost", href: "/services/facebook-feedback-score" },
        { name: "Account Health Assessment", href: "/services/health-assessment-service" },
        { name: "Unban Service", href: "/facebook-unban-services" },
      ],
    },
    {
      title: "Assets",
      links: [
        { name: "Facebook Accounts", href: "/products/buy-facebook-accounts" },
        { name: "Business Managers", href: "/products/buy-facebook-business-managers" },
        { name: "Facebook Pages", href: "/products/buy-facebook-pages" },
      ],
    },
    {
      title: "Partner Services",
      links: [
        { name: "Proxies", href: "https://www.floxy.io/proxies/floxy-for-affiliate-media-buyers" },
        { name: "Payment Processing", href: "https://www.moropay.io/" },
        { name: "Anti-Detect Browser", href: "https://dolphin-anty.com/" },
      ],
    },
    {
      title: "Others",
      links: [
        { name: "Partners", href: "/partners" },
        { name: "Reviews", href: "/reviews" },
        { name: "Blog", href: "/blog" },
        { name: "Milestones", href: "/milestones" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0a0612] text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1 flex flex-col space-y-6">
            <a href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                Rahim Marketing
              </span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Rahim Marketing provides premium whitelisted advertising infrastructure for serious media buyers and brands.
            </p>
            <div className="flex space-x-4 items-center">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                <span className="text-[#E44F71] text-sm font-bold">★ 4.9</span>
                <span className="text-white/40 text-xs">Trustpilot</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                <span className="text-[#E44F71] text-sm font-bold">★ 4.8</span>
                <span className="text-white/40 text-xs">G2</span>
              </div>
            </div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-[#E44F71] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Rahim Marketing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/terms" className="text-xs text-white/40 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-xs text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-xs text-white/40 hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://t.me/brandrahim" className="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 hover:text-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2s-.21-.05-.3-.03c-.12.02-2.11 1.34-5.96 3.94-.57.39-1.08.58-1.54.57-.5-.01-1.46-.28-2.17-.51-.87-.28-1.56-.44-1.5-.92.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.24-3.53 3.93-1.61 4.74-1.89 5.28-1.89.12 0 .38.03.55.17s.17.34.19.49c.02.11.02.24 0 .37z"/>
              </svg>
            </a>
            <a href="https://whatsapp.com" className="bg-[#25D366]/10 p-2 rounded-full hover:bg-[#25D366]/20 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                <path d="M12.03 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.41 1.25 4.84L2.03 22l5.34-1.4c1.4.76 2.99 1.19 4.66 1.19 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.95 14.19c-.25.7-1.45 1.28-2.02 1.37-.51.08-1.16.14-1.85-.08-.44-.14-1.01-.33-2.16-.83-4.88-2.09-8.08-7.1-8.33-7.43-.24-.33-1.95-2.59-1.95-4.94 0-2.35 1.23-3.51 1.67-3.99.36-.4.74-.5 1-.5.25 0 .5 0 .73.01.26.01.61-.1.95.73.34.82 1.15 2.81 1.25 3.01.1.2.17.44.03.73-.14.28-.31.47-.63.85-.31.36-.66.8-.94 1.08-.31.3-.64.63-.27 1.26.36.63 1.62 2.67 3.49 4.33 2.41 2.14 4.43 2.8 5.06 3.11.64.31.96.26 1.33-.16.36-.43 1.57-1.82 1.99-2.43.41-.61.83-.51 1.4-.29.57.21 3.63 1.71 4.25 2.02.62.31 1.04.46 1.19.72s.15 1.5-.1 2.2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;