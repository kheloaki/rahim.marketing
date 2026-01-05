"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ArrowLeft, Home, Search, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0612]">
      <Navigation />
      <div className="pt-[89px]">
        <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#BC2C7B] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10 px-5 lg:px-10 max-w-[800px] mx-auto text-center">
            <div className="mb-8">
              <span className="text-[120px] sm:text-[180px] lg:text-[220px] font-bold leading-none bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                404
              </span>
            </div>

            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-[1.1] tracking-tight text-white mb-6">
              Page Not Found
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-[500px] mx-auto">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link 
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(228,79,113,0.4)]"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <Link 
                href="/request-access"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base transition-all hover:bg-white/10"
              >
                <ArrowLeft className="w-5 h-5" />
                Request Access
              </Link>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm mb-6">Need help? Contact our team</p>
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://t.me/rahim_ou"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm transition-all hover:bg-white/10"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
                <a 
                  href="https://wa.me/message/WKWQWAZSRAU3N1"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-medium text-sm transition-all hover:bg-[#25D366]/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <Link href="/services/facebook-agency-ad-account" className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E44F71]/30 transition-all">
                <span className="text-sm text-white/60 hover:text-white">Facebook Ads</span>
              </Link>
              <Link href="/services/google-ads-agency-account" className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E44F71]/30 transition-all">
                <span className="text-sm text-white/60 hover:text-white">Google Ads</span>
              </Link>
              <Link href="/services/tiktok-agency-account" className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E44F71]/30 transition-all">
                <span className="text-sm text-white/60 hover:text-white">TikTok Ads</span>
              </Link>
              <Link href="/blog" className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E44F71]/30 transition-all">
                <span className="text-sm text-white/60 hover:text-white">Blog</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}