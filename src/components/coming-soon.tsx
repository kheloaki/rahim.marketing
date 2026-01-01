"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Clock, Bell, ArrowLeft, Send, MessageCircle, Sparkles, Rocket, Zap } from "lucide-react";
import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
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
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#7C3AED] opacity-[0.05] blur-[100px] rounded-full pointer-events-none animate-pulse" />

          <div className="container relative z-10 px-5 lg:px-10 max-w-[800px] mx-auto text-center">
            <div className="mb-8 relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#BC2C7B] to-[#E44F71] blur-2xl opacity-30 animate-pulse" />
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-[#E44F71]/20 to-[#BC2C7B]/20 border border-[#E44F71]/30 backdrop-blur-sm">
                <Rocket className="w-12 h-12 text-[#E44F71]" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E44F71] rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E44F71]/30 bg-gradient-to-r from-[#E44F71]/10 to-[#BC2C7B]/10 text-[#E44F71] text-sm font-semibold tracking-wide uppercase mb-8">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>

            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white mb-6">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-[550px] mx-auto">
              {description || "We're working hard to bring you this feature. Stay tuned for updates!"}
            </p>

            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <Zap className="w-6 h-6 text-[#E44F71] mb-2" />
                <span className="text-white/80 text-sm font-medium">Fast Launch</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <Sparkles className="w-6 h-6 text-[#E44F71] mb-2" />
                <span className="text-white/80 text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <Bell className="w-6 h-6 text-[#E44F71] mb-2" />
                <span className="text-white/80 text-sm font-medium">Get Notified</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link 
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(228,79,113,0.4)]"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
              <Link 
                href="/request-access"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base transition-all hover:bg-white/10 hover:border-[#E44F71]/30"
              >
                <Bell className="w-5 h-5" />
                Request Early Access
              </Link>
            </div>

            <div className="pt-10 border-t border-white/10">
              <p className="text-white/50 text-sm mb-6">Need this service now? Contact us directly</p>
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://t.me/brandrahim"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#229ED9]/10 border border-[#229ED9]/20 text-[#229ED9] font-medium text-sm transition-all hover:bg-[#229ED9]/20 hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
                <a 
                  href="https://wa.me/37258956859"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-medium text-sm transition-all hover:bg-[#25D366]/20 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}