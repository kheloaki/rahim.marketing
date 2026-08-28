import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Layers,
  MessageCircle,
  RefreshCw,
  Send,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import FAQSection from "@/components/sections/faq-section";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { buildPageMetadata } from "@/lib/seo";
import { TELEGRAM_URL, WHATSAPP_URL } from "@/lib/site";

const schema = otherPageSchemas["peptides-meta-ads"];
const path = "/services/peptides-meta-ads";
const requestHref = "/request-access?service=peptides";

export const metadata = buildPageMetadata({
  title: schema.title,
  description: schema.description,
  path,
  image: "/images/peptides/rahim-pack-master.jpg",
  keywords: [
    "peptide ads",
    "Meta ads for peptide brands",
    "peptide Facebook ads structure",
    "holder Business Manager",
    "pixel backup structure",
  ],
});

const bullets = [
  "Holder BM with pixel + CAPI vault",
  "Replaceable agency ad account",
  "Prospecting, retargeting, offer shells",
  "Replacement cover if spend is limited",
];

const reasons = [
  { icon: ShieldCheck, title: "Holder BM that survives", desc: "Pixel, domain, and CAPI live in a vault BM — not inside the ad account that can get limited." },
  { icon: Layers, title: "Every asset covered", desc: "Page, pixel, agency account, and campaign shells arrive as one stack, not a login dump." },
  { icon: Target, title: "Pixel protection", desc: "Events keep flowing to the holder if an advertiser account is replaced." },
  { icon: Workflow, title: "Campaign architecture", desc: "Prospecting, retargeting, and offer tests are split so learning does not fight itself." },
  { icon: RefreshCw, title: "Instant replacement", desc: "Restricted ad accounts get swapped. The pixel and the board stay." },
];

const inventory = [
  {
    title: "Holder Business Manager",
    desc: "The vault. Pixel, domain, and CAPI sit here so spend nodes can be replaced without wiping events.",
    image: "/images/peptides/peptides-card-bm.jpg",
  },
  {
    title: "Pixel + CAPI vault",
    desc: "Server events mapped to the holder BM, not trapped inside a single ad account.",
    image: "/images/peptides/peptides-card-pixel.jpg",
  },
  {
    title: "Peptide brand page",
    desc: "A clean page wired to the stack — not a mixed personal profile running health traffic.",
    image: "/images/peptides/peptides-card-page.jpg",
  },
  {
    title: "Agency ad account",
    desc: "The replaceable spend node. Built for health and wellness volume, with cover if it gets limited.",
    image: "/images/peptides/peptides-card-account.jpg",
  },
  {
    title: "Campaign board",
    desc: "Named shells: prospecting CBO, retargeting 7–14d, offer tests. You launch into a layout, not an empty Ads Manager.",
    image: "/images/peptides/peptides-card-campaigns.jpg",
  },
];

const campaigns = [
  { job: "Prospecting", name: "PEP-PROS-CBO", sets: "Broad · LAL 1% · LAL 3% · UGC hooks" },
  { job: "Retargeting", name: "PEP-RTG", sets: "View content 7–14d · Add to cart · Initiate checkout" },
  { job: "Offer / scale", name: "PEP-OFFER", sets: "Winning ads · New offer tests · Geo expansion" },
];

const comparison = [
  { label: "Pixel survives a restricted ad account", weak: "No", ours: "Yes" },
  { label: "Agency-level spend, not a personal account", weak: "No", ours: "Yes" },
  { label: "Page, pixel, and spend are separated", weak: "Rarely", ours: "Yes" },
  { label: "Prospecting, retargeting, and offer are split", weak: "One CBO", ours: "Three jobs" },
  { label: "Named campaign shells on delivery", weak: "Empty Ads Manager", ours: "Yes" },
  { label: "Policy-evasion / hidden medical claims", weak: "Often sold elsewhere", ours: "Never" },
];

const packs = [
  {
    id: "starter",
    name: "Starter",
    price: "$399",
    period: "one-time",
    forWho: "First launch or a single offer",
    blurb: "Two admin profiles, two advertiser BMs, three pages, and six ad accounts — enough to launch a peptide store without mixing spend into a personal profile.",
    image: "/images/peptides/rahim-pack-starter.jpg",
    featured: false,
    includes: [
      "x2 Profiles (2-line)",
      "x2 Business Managers",
      "x3 Brand pages",
      "x6 Ad accounts",
      "Isolated browser + campaign shells",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$899",
    period: "one-time",
    forWho: "Agencies running more than one offer",
    blurb: "Admin lane and advertiser lane split across two browsers. Four BMs and twelve ad accounts so you can rotate spend without touching owner profiles.",
    image: "/images/peptides/rahim-pack-pro.jpg",
    featured: false,
    includes: [
      "x4 Profiles (2-line)",
      "x4 Business Managers",
      "x3 Brand pages",
      "x12 Ad accounts",
      "Admin + advertiser access split",
    ],
  },
  {
    id: "master",
    name: "Master",
    price: "$1,499",
    period: "one-time",
    forWho: "Already spending — pixel cannot die",
    blurb: "Verified holder BM keeps the pixel. Three advertiser BMs and nine ad accounts run spend. If a spend node is limited, the pixel stays in the holder.",
    image: "/images/peptides/rahim-pack-master.jpg",
    featured: true,
    includes: [
      "x2 Profiles 3-line + x2 aged profiles",
      "x1 Verified holder BM (pixel vault)",
      "x3 Advertiser Business Managers",
      "x3 Brand pages",
      "x9 Ad accounts",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$2,999",
    period: "one-time",
    forWho: "Networks and high-volume media buyers",
    blurb: "Dual verified holders, six advertiser BMs, and eighteen ad accounts across four isolated browsers. Built for peptide brands that cannot go dark.",
    image: "/images/peptides/rahim-pack-enterprise.jpg",
    featured: false,
    includes: [
      "x4 Profiles 3-line + x4 aged profiles",
      "x2 Verified holder BMs (dual pixel vaults)",
      "x6 Advertiser Business Managers",
      "x6 Brand pages",
      "x18 Ad accounts",
    ],
  },
];

const steps = [
  { n: "01", title: "Share the offer", desc: "Store URL, product, geo, and monthly spend. We confirm the offer can run on Meta before you pay." },
  { n: "02", title: "We build the stack", desc: "Holder BM, page, pixel/CAPI, agency account, and campaign shells — usually inside 24 hours of approval." },
  { n: "03", title: "You get the board", desc: "Access, backup map, naming, and a walkthrough. If an account is restricted, we replace the spend node." },
];

const fitFor = [
  "Peptide and adjacent wellness brands with a live store and landing page",
  "Media buyers who already have an offer and need infrastructure that holds spend",
  "Teams tired of rebuilding pixels and campaigns after every restriction",
];

const notFor = [
  "Offers that cannot be advertised on Meta at all — we will tell you before you spend",
  "Anyone asking us to hide medical claims or write policy-evasion copy",
  "Brands with no product, no page, and no tracking plan yet",
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold text-base transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_30px_rgba(228,79,113,0.4)]";
const btnGhost =
  "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base transition-all hover:bg-white/10";
const btnWhatsapp =
  "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold text-base transition-all";

function Ctas({ full = false }: { full?: boolean }) {
  const width = full ? "w-full sm:w-auto" : "";
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <Link href={requestHref} className={`${btnPrimary} ${width}`}>
        Request this structure
        <ArrowUpRight className="w-4 h-4" />
      </Link>
      <a href={TELEGRAM_URL} className={`${btnGhost} ${width}`}>
        <Send className="w-5 h-5" />
        Telegram
      </a>
      <a href={WHATSAPP_URL} className={`${btnWhatsapp} ${width}`}>
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
}

export default function PeptidesMetaAdsPage() {
  return (
    <>
      <ComprehensiveSchema
        pageType="service"
        data={{
          ...schema,
          path,
          breadcrumbs: getBreadcrumbs(path, "Peptides Meta Ads Structure"),
          faqs: schema.faqs,
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="relative overflow-hidden bg-[#0a0612] pt-16 pb-20 lg:pt-20 lg:pb-24">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="container relative z-10 px-5 lg:px-10 max-w-[1280px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="text-center lg:text-left">
                  <p className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-5">
                    Peptide brands · Meta ads structure
                  </p>
                  <h1 className="text-[2.4rem] sm:text-[3.1rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
                    The Meta stack peptide brands actually{" "}
                    <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                      scale on
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-[540px] mx-auto lg:mx-0">
                    Holder Business Manager, pixel vault, brand page, agency ad account, and a campaign board split into prospecting, retargeting, and offer. Not a login. A structure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10 max-w-[520px] mx-auto lg:mx-0 text-left">
                    {bullets.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#E44F71] shrink-0" />
                        <span className="text-[15px] font-medium text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <Ctas full />
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-[480px]">
                  <Image
                    src="/images/peptides/peptides-hero.jpg"
                    alt="Peptide Meta ads structure: holder BM, pixel, agency account, and campaign architecture on the desk"
                    width={832}
                    height={1248}
                    className="w-full h-auto max-h-[640px] object-cover object-center rounded-[1.5rem] ring-1 ring-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
                    priority
                    sizes="(min-width: 1024px) 480px, 90vw"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-[#f4f5f8]">
            <div className="container px-5 lg:px-10 max-w-[1280px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <Image
                  src="/images/peptides/peptides-hub.jpg"
                  alt="Peptide Meta stack map: holder BM, pixel vault, domain, brand page, agency ad account, prospecting, retargeting, offer scale"
                  width={1400}
                  height={1050}
                  className="w-full h-auto rounded-3xl border border-black/5 shadow-sm"
                  sizes="(min-width: 1024px) 560px, 90vw"
                />
                <div>
                  <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">Why this exists</p>
                  <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#12061c] leading-tight mb-5">
                    Peptide ads do not die because of creative. They die because the stack is wrong.
                  </h2>
                  <p className="text-[#12061c]/70 text-lg leading-relaxed mb-4">
                    Personal accounts, mixed pages, and one bloated CBO cannot carry a high-scrutiny wellness offer. The pixel dies with the ban. The learning is gone. You rebuild from zero.
                  </p>
                  <p className="text-[#12061c]/70 text-lg leading-relaxed mb-8">
                    This product puts the pixel and domain in a holder BM, runs spend through replaceable agency accounts, and installs a campaign board built for peptide funnels. Copy and claims stay yours.
                  </p>
                  <Link href={requestHref} className={btnPrimary}>
                    Get the structure
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-[#0a0612]">
            <div className="container px-5 lg:px-10 max-w-[1280px] mx-auto">
              <div className="text-center mb-14">
                <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">Why this stack</p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">
                  Why peptide brands use Rahim for Meta
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {reasons.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-[#150d1f] p-6">
                    <item.icon className="w-6 h-6 text-[#E44F71] mb-4" />
                    <h3 className="font-bold text-lg text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-white">
            <div className="container px-5 lg:px-10 max-w-[1280px] mx-auto">
              <div className="text-center max-w-[720px] mx-auto mb-12">
                <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">Inventory</p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-[#12061c] mb-4">
                  What is inside the stack
                </h2>
                <p className="text-lg text-[#12061c]/65">
                  Five assets, delivered together. You do not buy a login and figure out the rest.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {inventory.map((item) => (
                  <article key={item.title} className="rounded-3xl bg-[#12061c] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={560}
                      height={560}
                      className="w-full aspect-square object-cover"
                      sizes="(min-width: 1024px) 220px, 50vw"
                    />
                    <div className="p-5">
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-[#02040a]">
            <div className="container px-5 lg:px-10 max-w-[1280px] mx-auto">
              <div className="text-center max-w-[720px] mx-auto mb-12">
                <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">Campaign board</p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white mb-4">
                  The board you launch into
                </h2>
                <p className="text-lg text-white/65">
                  Naming is already set. You duplicate winners instead of inventing a tree on day one.
                </p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[640px] text-left">
                  <thead className="bg-white/5 text-white/50 text-xs uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Job</th>
                      <th className="px-6 py-4 font-semibold">Campaign name</th>
                      <th className="px-6 py-4 font-semibold">Ad sets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((row) => (
                      <tr key={row.name} className="border-t border-white/10">
                        <td className="px-6 py-5 text-white font-semibold">{row.job}</td>
                        <td className="px-6 py-5 text-[#E44F71] font-mono text-sm">{row.name}</td>
                        <td className="px-6 py-5 text-white/70">{row.sets}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-[#f4f5f8]">
            <div className="container px-5 lg:px-10 max-w-[1280px] mx-auto">
              <div className="text-center max-w-[760px] mx-auto mb-12">
                <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">Rahim structures</p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-[#12061c] mb-3">
                  Four packs. Pick the redundancy your spend needs.
                </h2>
                <p className="text-[#12061c]/65 text-lg leading-relaxed">
                  Each structure is delivered with Rahim branding, isolated browsers, and a campaign board. Master and Enterprise keep the pixel in a verified holder so spend nodes can be replaced.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                {packs.map((pack) => (
                  <a
                    key={pack.id}
                    href={`#pack-${pack.id}`}
                    className={`rounded-2xl border p-5 text-center transition-all hover:-translate-y-0.5 ${
                      pack.featured
                        ? "border-[#E44F71] bg-[#12061c] text-white"
                        : "border-black/10 bg-white text-[#12061c]"
                    }`}
                  >
                    {pack.featured ? (
                      <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#E44F71] mb-2">Most used</p>
                    ) : (
                      <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#E44F71] mb-2">{pack.name}</p>
                    )}
                    <p className="text-3xl font-bold">{pack.price}</p>
                    <p className={`text-xs mt-1 ${pack.featured ? "text-white/50" : "text-[#12061c]/45"}`}>{pack.period}</p>
                    <p className={`text-sm mt-3 ${pack.featured ? "text-white/70" : "text-[#12061c]/60"}`}>{pack.name}</p>
                  </a>
                ))}
              </div>
              <div className="space-y-12">
                {packs.map((pack) => (
                  <article
                    id={`pack-${pack.id}`}
                    key={pack.id}
                    className={`rounded-3xl overflow-hidden border ${
                      pack.featured ? "border-[#E44F71]/40 bg-white" : "border-black/5 bg-white"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 px-8 pt-8 pb-4">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E44F71]">{pack.forWho}</p>
                        <h3 className="text-2xl font-bold text-[#12061c]">{pack.name}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl font-bold text-[#12061c]">{pack.price}</p>
                        <p className="text-sm text-[#12061c]/45">{pack.period} delivery</p>
                      </div>
                    </div>
                    <p className="px-8 pb-6 text-[#12061c]/70 max-w-[720px]">{pack.blurb}</p>
                    <div className="bg-[#eceef3] px-4 pb-4 lg:px-6">
                      <Image
                        src={pack.image}
                        alt={`${pack.name} Rahim structure — ${pack.price}`}
                        width={1920}
                        height={1080}
                        className="w-full h-auto rounded-2xl"
                        sizes="(min-width: 1024px) 1100px, 100vw"
                      />
                    </div>
                    <div className="px-8 py-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                        {pack.includes.map((line) => (
                          <li key={line} className="flex items-start gap-2 text-[#12061c]/80">
                            <Check className="w-4 h-4 text-[#E44F71] shrink-0 mt-1" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={`${requestHref}&pack=${pack.id}`} className={`${btnPrimary} text-sm px-6 py-3 shrink-0`}>
                        Request {pack.name} · {pack.price}
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-[#0a0612]">
            <div className="container px-5 lg:px-10 max-w-[900px] mx-auto">
              <div className="text-center mb-12">
                <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">Compare</p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-white">Personal setup vs this stack</h2>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[560px] text-left">
                  <thead className="bg-white/5 text-white/50 text-xs uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4 font-semibold"> </th>
                      <th className="px-6 py-4 font-semibold">Regular accounts</th>
                      <th className="px-6 py-4 font-semibold">Rahim peptide stack</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr key={row.label} className="border-t border-white/10">
                        <td className="px-6 py-4 text-white/80">{row.label}</td>
                        <td className="px-6 py-4 text-white/45">{row.weak}</td>
                        <td className="px-6 py-4 text-[#E44F71] font-semibold">{row.ours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-[#02040a]">
            <div className="container px-5 lg:px-10 max-w-[1280px] mx-auto">
              <h2 className="text-center text-[2rem] md:text-[2.6rem] font-bold text-white mb-14">
                How to get the peptide Meta structure
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {steps.map((step) => (
                  <div key={step.n} className="rounded-2xl border border-white/10 bg-[#150d1f] p-8">
                    <span className="text-[#E44F71] font-bold tracking-widest">{step.n}</span>
                    <h3 className="text-xl font-bold text-white mt-3 mb-3">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Ctas />
              </div>
            </div>
          </section>

          <section className="py-[90px] lg:py-[110px] bg-[#0a0612]">
            <div className="container px-5 lg:px-10 max-w-[1280px] mx-auto">
              <h2 className="text-center text-[2rem] md:text-[2.6rem] font-bold text-white mb-12">Who this is for</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-white/10 bg-[#150d1f] p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Built for</h3>
                  <ul className="space-y-4">
                    {fitFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white/80">
                        <Check className="w-5 h-5 text-[#E44F71] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#150d1f] p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Not for</h3>
                  <ul className="space-y-4">
                    {notFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white/80">
                        <span className="text-white/40 font-bold shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <FAQSection
            faqs={schema.faqs}
            title="Peptide Meta ads questions"
            subtitle="Fit, packs, delivery, and what we will not do."
          />

          <section className="py-[100px] px-5 lg:px-10 bg-[#02040a]">
            <div className="container max-w-[1280px] mx-auto">
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#150d1f] px-8 py-16 text-center">
                <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[#E44F71] opacity-10 blur-[120px] rounded-full pointer-events-none" />
                <h2 className="relative z-10 text-[2rem] md:text-[2.75rem] font-bold text-white mb-5 max-w-[720px] mx-auto">
                  Ready to run peptide ads on a structure that holds?
                </h2>
                <p className="relative z-10 text-white/70 text-lg mb-10 max-w-[560px] mx-auto">
                  Share the offer. We confirm fit, deliver Starter through Enterprise, and walk you through the board.
                </p>
                <div className="relative z-10 flex justify-center">
                  <Ctas />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
