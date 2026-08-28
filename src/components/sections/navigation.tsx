"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Menu, X, Send } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/site";
import {
  BingIcon,
  GoogleIcon,
  MetaIcon,
  OutbrainIcon,
  TaboolaIcon,
  TikTokIcon,
} from "@/components/brand/platform-icons";

const agencyLinks = [
  { href: "/services/facebook-agency-ad-account", title: "Facebook Agency Ad Accounts", desc: "Get a Meta Agency Ad Account", Icon: MetaIcon },
  { href: "/services/google-ads-agency-account", title: "Google Agency Ad Accounts", desc: "Get a Google Agency Ad Account", Icon: GoogleIcon },
  { href: "/services/tiktok-agency-account", title: "TikTok Agency Ad Accounts", desc: "Get a TikTok Agency Ad Account", Icon: TikTokIcon },
  { href: "/services/bing-agency-accounts", title: "Bing Agency Ad Accounts", desc: "Get a Bing Agency Ad Account", Icon: BingIcon },
  { href: "/services/taboola-agency-ad-accounts", title: "Taboola Agency Accounts", desc: "Get a Taboola Agency Account", Icon: TaboolaIcon },
  { href: "/services/outbrain-agency-ad-accounts", title: "Outbrain Agency Accounts", desc: "Get an Outbrain Agency Account", Icon: OutbrainIcon },
];

const assetLinks = [
  { href: "/products/buy-facebook-accounts", title: "Facebook Accounts", desc: "Aged, verified profiles for stability." },
  { href: "/products/buy-facebook-business-managers", title: "Business Managers", desc: "Clean BMs with proper structure." },
  { href: "/products/buy-facebook-pages", title: "Facebook Pages", desc: "Aged pages with established history." },
];

const partnerServiceLinks = [
  { href: "/services/peptides-meta-ads", title: "Peptides Meta Ads Structure", desc: "Campaign architecture for peptide brands." },
  { href: "/services/facebook-feedback-score", title: "Feedback Score Boost", desc: "Improve page reputation and CPMs." },
  { href: "/services/health-assessment-service", title: "Account Health Assessment", desc: "Diagnose restrictions before you scale." },
  { href: "/facebook-unban-services", title: "Unban Service", desc: "Recover restricted ad accounts." },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenSection(null);
  };

  return (
    <div className="navbar7_component fixed top-0 left-0 right-0 z-[1000] flex h-[89px] items-center bg-[#0a0612] px-5 lg:px-10 border-b border-white/10">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
        <Link href="/" className="flex-shrink-0" onClick={closeMobile}>
          <Image
            src="/logo.png"
            alt="rahim logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <div className="group relative">
            <button className="flex items-center gap-1 text-base font-medium text-white transition-opacity hover:opacity-80">
              Agency Accounts
              <ChevronDown className="h-4 w-4 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="invisible absolute left-1/2 top-full mt-2 w-screen max-w-[1200px] -translate-x-1/2 transform opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#150d1f] shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-1 p-8 lg:p-10">
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">Agency ad accounts</h3>
                    <div className="mt-6 grid grid-cols-2 gap-x-12 gap-y-6 lg:grid-cols-3">
                      {agencyLinks.map((item) => (
                        <DropdownLink key={item.href} {...item} />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-6">
                    <div className="max-w-md">
                      <h4 className="text-sm font-semibold text-white">Contact Rahim Marketing</h4>
                      <p className="mt-1 text-sm text-white/60">Message us on Telegram or WhatsApp for real-time support from industry specialists.</p>
                    </div>
                    <a
                      href={TELEGRAM_URL}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10"
                    >
                      <Send className="h-4 w-4" />
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 text-base font-medium text-white transition-opacity hover:opacity-80">
              Other Services
              <ChevronDown className="h-4 w-4 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="invisible absolute left-1/2 top-full mt-2 w-[800px] -translate-x-1/2 transform opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d1a] shadow-2xl backdrop-blur-xl p-8">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-6">Assets</h3>
                    <div className="space-y-4">
                      {assetLinks.map((item) => (
                        <TextLink key={item.href} {...item} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-6">Partner Services</h3>
                    <div className="space-y-4">
                      {partnerServiceLinks.map((item) => (
                        <TextLink key={item.href} {...item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/resources" className="text-base font-medium text-white transition-opacity hover:opacity-80">
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={TELEGRAM_URL}
            className="hidden sm:flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:translate-y-[-2px]"
          >
            <Send className="h-4 w-4" />
            Join Telegram
          </a>
          <Link
            href="/request-access"
            className="flex items-center gap-2 rounded-lg bg-white/10 px-4 sm:px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            Request Access
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            className="lg:hidden p-2 text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute top-[89px] left-0 right-0 max-h-[calc(100vh-89px)] overflow-y-auto border-b border-white/10 bg-[#0a0612] lg:hidden">
          <div className="px-5 py-6 space-y-2">
            <MobileAccordion
              title="Agency Accounts"
              open={openSection === "agency"}
              onToggle={() => setOpenSection(openSection === "agency" ? null : "agency")}
            >
              {agencyLinks.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMobile} className="block py-2 text-sm text-white/80">
                  {item.title}
                </Link>
              ))}
            </MobileAccordion>
            <MobileAccordion
              title="Other Services"
              open={openSection === "other"}
              onToggle={() => setOpenSection(openSection === "other" ? null : "other")}
            >
              {[...assetLinks, ...partnerServiceLinks].map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMobile} className="block py-2 text-sm text-white/80">
                  {item.title}
                </Link>
              ))}
            </MobileAccordion>
            <Link href="/resources" onClick={closeMobile} className="block py-3 text-base font-medium text-white">
              Resources
            </Link>
            <Link href="/blog" onClick={closeMobile} className="block py-3 text-base font-medium text-white">
              Blog
            </Link>
            <a href={TELEGRAM_URL} className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#E44F71] px-5 py-3 text-sm font-semibold text-white">
              <Send className="h-4 w-4" />
              Telegram
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownLink({
  href,
  title,
  desc,
  Icon,
}: {
  href: string;
  title: string;
  desc: string;
  Icon: typeof MetaIcon;
}) {
  return (
    <Link href={href} className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 p-2 text-white transition-colors group-hover:bg-white/10">
        <Icon size={22} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-white group-hover:text-[#E44F71] transition-colors">{title}</span>
        <span className="text-xs text-white/60 mt-1 line-clamp-1">{desc}</span>
      </div>
    </Link>
  );
}

function TextLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} className="block rounded-xl p-2 hover:bg-white/5">
      <span className="text-sm font-semibold text-white">{title}</span>
      <p className="text-xs text-white/60 mt-1">{desc}</p>
    </Link>
  );
}

function MobileAccordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-white/10 pb-2">
      <button
        className="flex w-full items-center justify-between py-3 text-base font-medium text-white"
        onClick={onToggle}
        aria-expanded={open}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-3 pl-1">{children}</div>}
    </div>
  );
}
