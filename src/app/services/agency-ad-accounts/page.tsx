import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { RelatedResources } from "@/components/seo/related-resources";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { RahimTeamInsight } from "@/components/seo/rahim-team-insight";
import { SourcesList } from "@/components/seo/sources-list";
import { PlatformLogo } from "@/components/brand/platform-icons";
import type { PlatformId } from "@/data/platforms";
import { buildPageMetadata } from "@/lib/seo";
import { TELEGRAM_URL, WHATSAPP_URL } from "@/lib/site";

const path = "/services/agency-ad-accounts";

export const metadata: Metadata = buildPageMetadata({
  title: "Agency Ad Accounts | Cross-Platform Advertising Infrastructure",
  description:
    "What agency ad accounts are, how ownership, access, billing and tracking work, and how to choose Meta, Google, TikTok, Microsoft, Taboola or Outbrain infrastructure.",
  path,
  keywords: [
    "agency ad accounts",
    "agency ad account",
    "advertising agency accounts",
    "agency advertising accounts",
    "agency ad account provider",
    "multi-platform agency ad accounts",
  ],
  image: "/images/service-accounts.jpg",
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: path },
  { name: "Agency Ad Accounts", url: path },
];

const toc = [
  { id: "what-are-agency-ad-accounts", label: "What Agency Ad Accounts Are" },
  { id: "how-they-work", label: "How They Work" },
  { id: "agency-vs-self-serve", label: "Agency vs Self-Serve" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "platform-comparison", label: "Platform Comparison" },
  { id: "who-they-are-for", label: "Who They Are For" },
  { id: "who-should-not", label: "Who Should Not Use Them" },
  { id: "ownership-security", label: "Ownership & Security" },
  { id: "billing", label: "Billing" },
  { id: "tracking", label: "Tracking" },
  { id: "restrictions-risk", label: "Restrictions & Risk" },
  { id: "choosing-a-provider", label: "Choosing a Provider" },
  { id: "rahim-onboarding", label: "Rahim Onboarding" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "platform-services", label: "Platform Services" },
  { id: "related-guides", label: "Related Guides" },
] as const;

const agencyVsSelfServe = [
  {
    factor: "Ownership",
    agency: "Often shared architecture: clarify who owns manager/business container vs spend nodes",
    selfServe: "Advertiser typically owns the account they create",
  },
  {
    factor: "Setup",
    agency: "Eligibility review, asset map, role grants before capacity opens",
    selfServe: "Create account, attach payment, launch",
  },
  {
    factor: "Access",
    agency: "Official partner/user roles — not personal password sharing",
    selfServe: "Owner-controlled users and roles",
  },
  {
    factor: "Billing",
    agency: "Advertiser billing, agency billing, prepaid/top-up, or hybrid — must be written",
    selfServe: "Usually advertiser payment profile / card",
  },
  {
    factor: "Spend operations",
    agency: "Designed for higher-capacity or multi-brand workflows when fit is confirmed",
    selfServe: "Fits many mid-scale advertisers without partner infrastructure",
  },
  {
    factor: "Support",
    agency: "Operational support and escalation paths when included",
    selfServe: "Mostly platform help centers and self-serve tools",
  },
  {
    factor: "Tracking ownership",
    agency: "Should be planned so measurement is not trapped in one disposable spend node",
    selfServe: "Advertiser usually owns tags — still easy to misconfigure",
  },
  {
    factor: "Multi-brand use",
    agency: "Common reason teams evaluate agency structures",
    selfServe: "Possible, but architecture discipline is on you",
  },
  {
    factor: "Operational continuity",
    agency: "Replacement/continuity support may be included — never guaranteed outcomes",
    selfServe: "If a node is limited, rebuild and recovery are mostly yours",
  },
  {
    factor: "Restrictions",
    agency: "Still possible at ad, account, manager, payment, or asset layers",
    selfServe: "Same platform enforcement applies",
  },
  {
    factor: "Best fit",
    agency: "Material spend, multi-brand/market ops, structured billing/access needs",
    selfServe: "Eligible offers with straightforward ownership and self-serve capacity",
  },
] as const;

const platformRows = [
  {
    platform: "Meta / Facebook",
    layer: "Business Manager",
    account: "Ad account",
    tracking: "Pixel / Dataset (+ CAPI where used)",
    access: "Partner / user roles on BM assets",
    service: "/services/facebook-agency-ad-account",
    serviceLabel: "Facebook Agency Ad Accounts",
  },
  {
    platform: "Google Ads",
    layer: "Manager Account (MCC)",
    account: "Google Ads account",
    tracking: "Conversion actions / tags / linked Analytics",
    access: "Linked manager access + user invites",
    service: "/services/google-ads-agency-account",
    serviceLabel: "Google Ads Agency Accounts",
  },
  {
    platform: "TikTok",
    layer: "Business Center",
    account: "Ad account",
    tracking: "TikTok Pixel / Events API where used",
    access: "Business Center member / partner roles",
    service: "/services/tiktok-agency-account",
    serviceLabel: "TikTok Agency Ad Accounts",
  },
  {
    platform: "Microsoft Advertising",
    layer: "Manager account hierarchy",
    account: "Microsoft Advertising account (Bing Ads legacy term)",
    tracking: "UET / conversion goals",
    access: "User roles under manager/account",
    service: "/services/bing-agency-accounts",
    serviceLabel: "Microsoft / Bing Agency Accounts",
  },
  {
    platform: "Taboola",
    layer: "Network / account hierarchy",
    account: "Advertiser account",
    tracking: "Pixel / conversion setup per account",
    access: "Agency or partner access as provisioned",
    service: "/services/taboola-agency-ad-accounts",
    serviceLabel: "Taboola Agency Accounts",
  },
  {
    platform: "Outbrain",
    layer: "Network / account hierarchy",
    account: "Advertiser account",
    tracking: "Pixel / conversion setup per account",
    access: "Agency or partner access as provisioned",
    service: "/services/outbrain-agency-ad-accounts",
    serviceLabel: "Outbrain Agency Accounts",
  },
] as const;

const platformCards: Array<{
  id: PlatformId;
  title: string;
  href: string;
  blurb: string;
}> = [
  {
    id: "meta",
    title: "Meta / Facebook",
    href: "/services/facebook-agency-ad-account",
    blurb: "Business Manager access, Pixel/Dataset continuity, eligibility-first Meta spend infrastructure.",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    href: "/services/google-ads-agency-account",
    blurb: "Manager Account relationships, Ads account structure, billing and conversion ownership clarity.",
  },
  {
    id: "tiktok",
    title: "TikTok",
    href: "/services/tiktok-agency-account",
    blurb: "Business Center permissions, ad account access, and Events/Pixel planning without password handoffs.",
  },
  {
    id: "microsoft-advertising",
    title: "Microsoft Advertising",
    href: "/services/bing-agency-accounts",
    blurb: "Microsoft Advertising (often still searched as Bing Ads) agency access and support paths.",
  },
  {
    id: "taboola",
    title: "Taboola",
    href: "/services/taboola-agency-ad-accounts",
    blurb: "Native advertising agency accounts for publisher-network campaigns with structured onboarding.",
  },
  {
    id: "outbrain",
    title: "Outbrain",
    href: "/services/outbrain-agency-ad-accounts",
    blurb: "Content-discovery agency accounts with defined access and operational support.",
  },
];

const ownershipChecklist = [
  "Who owns the business/manager container?",
  "Who owns the Page, profile, domain, and tracking assets?",
  "What permissions does the agency actually need?",
  "How can access be revoked?",
  "What happens when the relationship ends?",
  "Who owns historical performance and conversion data?",
] as const;

const evaluateItems = [
  "Written scope for ownership, permissions, and exit/revocation",
  "Eligibility review before opening spend capacity",
  "Billing and top-up mechanics that match the account type",
  "Tracking ownership guidance (Pixel/Dataset or platform equivalents)",
  "Honest talk about restrictions — no immunity claims",
  "Support path when a spend node is limited or needs replacement",
  "Clear contact path and escalation ownership",
  "No invented platform-partner badges",
] as const;

const redFlags = [
  "“Unbannable,” “ban-proof,” or guaranteed approvals",
  "Requests for personal Facebook/Google/TikTok passwords",
  "Unclear who owns the manager container, balance, or tracking",
  "No written revocation or exit process",
  "Opaque refund/balance handling if a node is limited",
  "Fake “official partner” claims without evidence",
] as const;

const onboardingSteps = [
  {
    title: "Eligibility review",
    body: "Offer, market, and platform fit before capacity is discussed.",
  },
  {
    title: "Platform selection",
    body: "Choose Meta, Google, TikTok, Microsoft, Taboola, and/or Outbrain based on where you actually buy media.",
  },
  {
    title: "Ownership / asset map",
    body: "Document manager/business containers, pages/profiles, domains, and measurement assets.",
  },
  {
    title: "Permission setup",
    body: "Grant least-necessary access through official partner/user systems — never personal passwords.",
  },
  {
    title: "Billing / funding confirmation",
    body: "Confirm who pays, currency, top-up path, and what happens to balances if a node is limited.",
  },
  {
    title: "Tracking validation",
    body: "Confirm who owns tags/pixels/conversion actions and that events fire as expected.",
  },
  {
    title: "Launch readiness",
    body: "Agree what is covered if delivery is constrained — without inventing outcome guarantees.",
  },
  {
    title: "Support",
    body: "Operational escalation path for access, billing, and restriction review where included.",
  },
] as const;

const faqs = [
  {
    q: "What is an agency ad account?",
    a: "An agency ad account is advertising access structured through an agency or partner setup — typically with a business/manager container, role-based permissions, documented billing, and operational support — rather than only a brand-new personal self-serve account. Platform policies still apply to what you run.",
  },
  {
    q: "How is an agency ad account different from a normal ad account?",
    a: "The difference is usually architecture and operations: how access is granted, who owns containers and measurement, how billing is funded, and what support exists when a spend node is limited. It is not a different advertising rulebook.",
  },
  {
    q: "Who owns an agency ad account?",
    a: "Ownership must be written down. Sometimes the advertiser owns the manager container and grants partner access; sometimes the agency provisions spend nodes you operate under. Continuity depends on that map — not on marketing labels.",
  },
  {
    q: "Do I need to share my Facebook, Google, or TikTok password?",
    a: "No. Legitimate setups use official partner invites, user roles, Business Manager / Business Center / Manager Account hierarchies. Password sharing is a security and continuity risk.",
  },
  {
    q: "Can agency ad accounts still be restricted?",
    a: "Yes. Restrictions can land on creatives, advertiser accounts, manager/business containers, payment profiles, or related assets. Agency infrastructure does not grant immunity.",
  },
  {
    q: "Are agency ad accounts safer?",
    a: "They can be operationally clearer when ownership, permissions, billing, and tracking are documented. “Safer” does not mean protected from platform enforcement or creative rejects.",
  },
  {
    q: "Do I keep my Pixel, Dataset, or conversion data?",
    a: "Only if ownership was designed that way. Ask who owns the measurement asset, where events send, and what remains if a spend node changes. Tracking should not live only on a disposable account when the platform allows a durable setup.",
  },
  {
    q: "How does agency-account billing work?",
    a: "Models vary: advertiser billing, agency billing, prepaid top-ups, or hybrids. Confirm currency, lead times, payment profile ownership, and balance handling before funding.",
  },
  {
    q: "How much does an agency ad account cost?",
    a: "Pricing varies by platform, access model, funding workflow, and support scope. See platform-specific service pages for visible plans where published, or request access for an eligibility review.",
  },
  {
    q: "Which advertising platform should I choose?",
    a: "Choose where your audience and offer already fit platform policies. This pillar explains the shared model; Meta, Google, TikTok, Microsoft, Taboola, and Outbrain pages cover platform-specific details.",
  },
  {
    q: "What happens if an agency account is restricted?",
    a: "Diagnose the layer (creative, ad account, manager/business, payment, or asset), follow in-product review paths where available, and avoid duplicate-account spam. Continuity support, when included, helps with process — not guaranteed restoration.",
  },
  {
    q: "Can any business use an agency ad account?",
    a: "No. Ineligible offers, teams seeking policy circumvention, or businesses unwilling to document ownership are poor fits. Self-serve remains appropriate for many eligible advertisers.",
  },
] as const;

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-2xl md:text-3xl font-bold text-[#0a0612] mb-5 tracking-tight"
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold text-[#0a0612] mt-8 mb-3">{children}</h3>;
}

function Prose({ children }: { children: ReactNode }) {
  return <p className="text-[#0a0612]/80 leading-relaxed mb-4">{children}</p>;
}

export default function AgencyAdAccountsPillarPage() {
  return (
    <>
      <ComprehensiveSchema
        pageType="service"
        data={{
          title: "Agency Ad Accounts",
          description:
            "Cross-platform agency advertising account infrastructure covering ownership, access, billing, tracking, risk, and platform selection.",
          path,
          serviceType: "Advertising Infrastructure",
          breadcrumbs,
          image: "/images/service-accounts.jpg",
          services: platformCards.map((p) => ({
            name: p.title,
            url: p.href,
            description: p.blurb,
            itemType: "Service",
          })),
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="relative overflow-hidden bg-[#0a0612] pt-16 pb-20">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="container relative z-10 mx-auto px-5 lg:px-10 max-w-[900px]">
              <PageBreadcrumbs items={breadcrumbs} />
              <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">
                Advertising infrastructure
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                Agency Ad Accounts
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-[760px]">
                An agency ad account is structured advertising access — permissions, billing, and
                operational support arranged through an agency or partner setup — rather than only a
                personal self-serve account. Terminology and containers differ by platform (Business
                Manager, Manager Account, Business Center, and native network hierarchies), but
                platform policies still apply to creatives, offers, and destinations. This page
                explains how the model works, what it is not, how to evaluate ownership and risk, and
                which Rahim platform page to open next.
              </p>
            </div>
          </section>

          <article className="bg-white py-14 lg:py-20">
            <div className="container mx-auto px-5 lg:px-10 max-w-[900px] space-y-16">
              <nav
                aria-label="On this page"
                className="rounded-2xl border border-[#0a0612]/10 bg-[#0a0612]/[0.03] p-6 md:p-8"
              >
                <p className="text-sm font-semibold tracking-widest uppercase text-[#E44F71] mb-4">
                  On this page
                </p>
                <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#0a0612]/80">
                  {toc.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="hover:text-[#E44F71] transition-colors inline-flex gap-2"
                      >
                        <span className="text-[#0a0612]/35 tabular-nums">{i + 1}.</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <section>
                <SectionHeading id="what-are-agency-ad-accounts">
                  What Are Agency Ad Accounts?
                </SectionHeading>
                <Prose>
                  In industry language, agency ad accounts (also called agency advertising accounts
                  or agency accounts for ads) usually mean advertising spend infrastructure that is
                  provisioned, partnered, or operated with an agency: documented access through a
                  business or manager container, clearer billing workflows, and support when
                  operational issues appear. The advertiser still runs campaigns inside the
                  platform’s own UI under granted roles.
                </Prose>
                <Prose>
                  The phrase is used loosely. Sometimes it means an agency-owned manager that grants
                  you advertiser roles. Sometimes it means partner access into a container you own.
                  Sometimes it includes funding workflows or replacement support. The label alone does
                  not tell you who owns what — the written architecture does.
                </Prose>

                <SubHeading>What “agency account” means</SubHeading>
                <Prose>
                  At a practical level, the model usually involves an advertiser account (the spend
                  node), a manager or business container above it, role-based access for agency and
                  client users, a billing path tied to a payment profile or prepaid balance, and
                  measurement assets that should be planned deliberately. Support and escalation sit
                  beside that stack — they are not a substitute for platform review systems.
                </Prose>

                <SubHeading>What an agency account is NOT</SubHeading>
                <ul className="list-disc pl-5 space-y-2 text-[#0a0612]/80 mb-4">
                  <li>Not a different platform rulebook — Meta, Google, TikTok, Microsoft, Taboola, and Outbrain still enforce their policies</li>
                  <li>Not policy immunity or “ban-proof” infrastructure</li>
                  <li>Not guaranteed creative approval or account restoration</li>
                  <li>Not an excuse to share personal login passwords</li>
                  <li>Not a way to force ineligible offers through review</li>
                </ul>

                <SubHeading>Why the model differs by platform</SubHeading>
                <Prose>
                  Containers and vocabulary change by network. Meta centers on Business Manager and
                  ad accounts. Google Ads uses Manager Accounts (MCC) linked to Ads accounts. TikTok
                  uses Business Center. Microsoft Advertising (still widely searched as Bing Ads) uses
                  its own manager hierarchy. Taboola and Outbrain use native-network account
                  structures. This pillar stays high-level on purpose — platform money pages cover
                  implementation detail without diluting the cross-platform decision.
                </Prose>
              </section>

              <section>
                <SectionHeading id="how-they-work">How Agency Ad Accounts Work</SectionHeading>
                <Prose>
                  Most setups follow the same logical stack even when product names differ. Understanding
                  the stack is what lets you ask precise ownership and access questions before spend
                  scales.
                </Prose>

                <div className="my-8 rounded-2xl border border-[#0a0612]/10 bg-[#0a0612]/[0.02] p-5 md:p-7 overflow-x-auto">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#0a0612]/45 mb-4">
                    Architecture overview
                  </p>
                  <ol className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 md:gap-1 text-sm font-medium text-[#0a0612]">
                    {[
                      "Advertiser",
                      "Business / manager container",
                      "Advertising account",
                      "Campaigns",
                      "Tracking / measurement",
                      "Billing",
                      "Agency / partner access",
                    ].map((step, i, arr) => (
                      <li key={step} className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-lg bg-white border border-[#0a0612]/10 px-3 py-2 shadow-sm">
                          {step}
                        </span>
                        {i < arr.length - 1 ? (
                          <span className="hidden md:inline text-[#E44F71] px-1" aria-hidden>
                            →
                          </span>
                        ) : null}
                        {i < arr.length - 1 ? (
                          <span className="md:hidden text-[#E44F71] pl-3" aria-hidden>
                            ↓
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </div>

                <Prose>
                  The <strong className="font-semibold text-[#0a0612]">advertiser</strong> is the
                  business buying media. The{" "}
                  <strong className="font-semibold text-[#0a0612]">business/manager container</strong>{" "}
                  holds users, assets, and often the relationship to one or more advertising accounts.
                  The <strong className="font-semibold text-[#0a0612]">advertising account</strong> is
                  the spend node where campaigns live.{" "}
                  <strong className="font-semibold text-[#0a0612]">Tracking</strong> should be mapped to
                  durable assets where the platform allows it.{" "}
                  <strong className="font-semibold text-[#0a0612]">Billing</strong> funds delivery.
                  The <strong className="font-semibold text-[#0a0612]">agency role</strong> is access plus
                  process — not ownership by default.
                </Prose>
                <Prose>
                  Legitimate access uses official permission systems: partner invites, user roles, and
                  hierarchy tools. You operate inside the platform UI under the roles you were granted.
                  Typical operating pieces include eligibility review before capacity opens, a written
                  owner map, funding confirmation, and an escalation path when a spend node is limited.
                </Prose>
              </section>

              <section>
                <SectionHeading id="agency-vs-self-serve">
                  Agency Ad Account vs Self-Serve Account
                </SectionHeading>
                <Prose>
                  Self-serve accounts fit many teams: you create the account, attach payment, and run.
                  Agency structures become useful when spend capacity, multi-brand architecture,
                  funding workflows, replacement support, or continuity after a limited node matter more
                  than owning every spend node yourself. Neither model is immune from restrictions,
                  payment failures, or creative rejects.
                </Prose>

                <div className="mt-6 overflow-x-auto rounded-2xl border border-[#0a0612]/10">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <thead className="bg-[#0a0612] text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Factor</th>
                        <th className="px-4 py-3 font-semibold">Agency structure</th>
                        <th className="px-4 py-3 font-semibold">Self-serve</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agencyVsSelfServe.map((row, i) => (
                        <tr
                          key={row.factor}
                          className={i % 2 === 0 ? "bg-white" : "bg-[#0a0612]/[0.03]"}
                        >
                          <td className="px-4 py-3 font-medium text-[#0a0612] align-top">
                            {row.factor}
                          </td>
                          <td className="px-4 py-3 text-[#0a0612]/75 align-top">{row.agency}</td>
                          <td className="px-4 py-3 text-[#0a0612]/75 align-top">{row.selfServe}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-[#0a0612]/55 mt-3">
                  Agency accounts are not ban-proof. Self-serve is not inherently inferior — it is often
                  the right default when eligibility and ownership are straightforward.
                </p>
              </section>

              <section>
                <SectionHeading id="infrastructure">
                  Core Agency Account Infrastructure
                </SectionHeading>

                <SubHeading>Ownership</SubHeading>
                <Prose>
                  Write down who owns the manager/business container, Pages or profiles where
                  applicable, domains, tracking assets, and each advertiser account. If those answers
                  are vague, fix the map before increasing spend. Ownership mistakes surface later as
                  access disputes, broken measurement, or exit deadlocks.
                </Prose>

                <SubHeading>Roles and permissions</SubHeading>
                <Prose>
                  Prefer least-necessary access: admins for architecture, advertisers/operators for
                  campaigns, finance visibility without over-permissioning. Partner access should be
                  scoped and revocable. When the engagement ends, revoke access on purpose — do not
                  leave dormant admins “just in case.”
                </Prose>

                <SubHeading>Billing</SubHeading>
                <Prose>
                  Billing may use your card, an agency payment profile, prepaid top-ups, or a hybrid.
                  Confirm currency, lead times, who controls the payment profile, and what happens to
                  balance if a node is limited. Do not assume every platform funds the same way.
                </Prose>

                <SubHeading>Tracking and data</SubHeading>
                <Prose>
                  Measurement should outlive a single fragile spend account where the platform allows
                  it. That usually means owning the primary measurement asset in a durable business
                  entity — not leaving the only conversion destination tied to a disposable node.
                </Prose>

                <SubHeading>Continuity</SubHeading>
                <Prose>
                  Continuity means documented process when a spend node is constrained: diagnosis,
                  appeal/review paths where available, replacement workflows when included, and
                  preserving tracking ownership. Continuity support helps with operational response. It
                  does not rewrite policies or guarantee outcomes.
                </Prose>
              </section>

              <section>
                <SectionHeading id="platform-comparison">
                  Agency Ad Accounts by Platform
                </SectionHeading>
                <Prose>
                  Use this comparison to orient — then open the platform page for implementation
                  detail. Only high-level, site-supported terminology is listed here.
                </Prose>

                <div className="mt-6 overflow-x-auto rounded-2xl border border-[#0a0612]/10">
                  <table className="w-full min-w-[900px] text-left text-sm">
                    <thead className="bg-[#0a0612] text-white">
                      <tr>
                        <th className="px-3 py-3 font-semibold">Platform</th>
                        <th className="px-3 py-3 font-semibold">Business / manager layer</th>
                        <th className="px-3 py-3 font-semibold">Advertiser account</th>
                        <th className="px-3 py-3 font-semibold">Tracking</th>
                        <th className="px-3 py-3 font-semibold">Typical access model</th>
                        <th className="px-3 py-3 font-semibold">Rahim service</th>
                      </tr>
                    </thead>
                    <tbody>
                      {platformRows.map((row, i) => (
                        <tr
                          key={row.platform}
                          className={i % 2 === 0 ? "bg-white" : "bg-[#0a0612]/[0.03]"}
                        >
                          <td className="px-3 py-3 font-medium text-[#0a0612] align-top">
                            {row.platform}
                          </td>
                          <td className="px-3 py-3 text-[#0a0612]/75 align-top">{row.layer}</td>
                          <td className="px-3 py-3 text-[#0a0612]/75 align-top">{row.account}</td>
                          <td className="px-3 py-3 text-[#0a0612]/75 align-top">{row.tracking}</td>
                          <td className="px-3 py-3 text-[#0a0612]/75 align-top">{row.access}</td>
                          <td className="px-3 py-3 align-top">
                            <Link
                              href={row.service}
                              className="text-[#E44F71] font-medium hover:underline"
                            >
                              {row.serviceLabel}
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <SubHeading>Meta / Facebook agency ad accounts</SubHeading>
                <Prose>
                  Meta agency setups typically involve Business Manager permissions, ad account
                  access, and deliberate Pixel/Dataset ownership. Deep implementation, comparison
                  tables, and Meta-specific FAQs live on the money page — not here.
                </Prose>
                <p className="mb-4">
                  <Link
                    href="/services/facebook-agency-ad-account"
                    className="inline-flex items-center gap-2 font-semibold text-[#E44F71] hover:underline"
                  >
                    Facebook Agency Ad Accounts
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </p>

                <SubHeading>Google Ads agency accounts</SubHeading>
                <Prose>
                  Google Ads agency structures usually involve a Manager Account relationship, clear
                  Ads-account ownership, conversion-action continuity, and billing profile clarity.
                  Read the hub for architecture guides, then the service page for commercial fit.
                </Prose>
                <p className="mb-2">
                  <Link
                    href="/services/google-ads-agency-account"
                    className="inline-flex items-center gap-2 font-semibold text-[#E44F71] hover:underline"
                  >
                    Google Ads Agency Accounts
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </p>
                <p className="mb-4">
                  <Link href="/resources/google-ads" className="text-[#0a0612]/70 hover:text-[#E44F71] underline-offset-2 hover:underline">
                    Google Ads resource hub
                  </Link>
                </p>

                <SubHeading>TikTok agency accounts</SubHeading>
                <Prose>
                  TikTok agency access is organized through Business Center roles and ad accounts —
                  not personal password handoffs. Use the service page for onboarding context and the
                  hub for Business Center / suspension guides.
                </Prose>
                <p className="mb-2">
                  <Link
                    href="/services/tiktok-agency-account"
                    className="inline-flex items-center gap-2 font-semibold text-[#E44F71] hover:underline"
                  >
                    TikTok Agency Ad Accounts
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </p>
                <p className="mb-4">
                  <Link href="/resources/tiktok-ads" className="text-[#0a0612]/70 hover:text-[#E44F71] underline-offset-2 hover:underline">
                    TikTok Ads resource hub
                  </Link>
                </p>

                <SubHeading>Microsoft Advertising</SubHeading>
                <Prose>
                  Microsoft Advertising (historically Bing Ads in many search queries) uses its own
                  manager and account hierarchy. Treat naming carefully: commercial intent often still
                  says “Bing,” while product identity is Microsoft Advertising.
                </Prose>
                <p className="mb-4">
                  <Link
                    href="/services/bing-agency-accounts"
                    className="inline-flex items-center gap-2 font-semibold text-[#E44F71] hover:underline"
                  >
                    Microsoft / Bing Agency Ad Accounts
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </p>

                <SubHeading>Taboola</SubHeading>
                <Prose>
                  Taboola agency accounts support native placements across a publisher network.
                  Eligibility, creatives, and landing pages still follow Taboola policies.
                </Prose>
                <p className="mb-4">
                  <Link
                    href="/services/taboola-agency-ad-accounts"
                    className="inline-flex items-center gap-2 font-semibold text-[#E44F71] hover:underline"
                  >
                    Taboola Agency Accounts
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </p>

                <SubHeading>Outbrain</SubHeading>
                <Prose>
                  Outbrain agency accounts support content-discovery advertising on publisher sites.
                  Access and billing should be documented the same way as other agency structures —
                  without inventing network privileges.
                </Prose>
                <p className="mb-4">
                  <Link
                    href="/services/outbrain-agency-ad-accounts"
                    className="inline-flex items-center gap-2 font-semibold text-[#E44F71] hover:underline"
                  >
                    Outbrain Agency Accounts
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </p>
              </section>

              <section>
                <SectionHeading id="who-they-are-for">Who Should Use Agency Ad Accounts?</SectionHeading>
                <Prose>
                  Agency advertising accounts are typically a fit when operational structure matters as
                  much as media buying skill:
                </Prose>
                <ul className="list-disc pl-5 space-y-2 text-[#0a0612]/80 mb-4">
                  <li>Higher-spend advertisers who need clearer capacity and support paths</li>
                  <li>Multi-brand or multi-market teams</li>
                  <li>Agencies managing multiple advertisers under documented permissions</li>
                  <li>Teams that need structured billing, top-ups, and access revocation</li>
                  <li>Businesses that want operational continuity planning — without believing in immunity</li>
                </ul>
                <Prose>
                  We do not invent arbitrary spend thresholds here. Fit depends on offer eligibility,
                  platform mix, and whether self-serve already covers your needs.
                </Prose>
              </section>

              <section>
                <SectionHeading id="who-should-not">Who Should Not Use Them?</SectionHeading>
                <Prose>
                  Saying no early protects both sides. Agency infrastructure is a weak fit when:
                </Prose>
                <ul className="list-disc pl-5 space-y-2 text-[#0a0612]/80 mb-4">
                  <li>Self-serve already serves an eligible offer with clean ownership</li>
                  <li>The offer is not eligible under current platform policies</li>
                  <li>The goal is policy circumvention or “guaranteed approvals”</li>
                  <li>Someone expects guaranteed restoration after every restriction</li>
                  <li>The business refuses to document ownership, permissions, or exit terms</li>
                </ul>
              </section>

              <section>
                <SectionHeading id="ownership-security">
                  Ownership, Security and Access
                </SectionHeading>
                <Prose>
                  Access and ownership are different. Partner roles let people work; ownership decides
                  who keeps the container, the measurement, and the exit options. Never share personal
                  account passwords. Use official partner/user access, keep permission boundaries
                  tight, and plan revocation before the first campaign launches.
                </Prose>

                <RahimTeamInsight
                  body="Access and ownership are different. We prefer advertisers to know exactly which assets they own — Business Manager or Manager Account, Pages, domains, Pixel/Dataset or conversion actions — and which assets are only made available operationally. Continuity comes from that map, not from promising immunity."
                />

                <p className="text-sm font-semibold text-[#0a0612] mt-8 mb-3">
                  Before giving an agency access, confirm:
                </p>
                <ul className="space-y-3 mb-4">
                  {ownershipChecklist.map((item) => (
                    <li key={item} className="flex gap-3 text-[#0a0612]/80">
                      <span
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#0a0612]/25 text-[10px] text-[#0a0612]/40"
                        aria-hidden
                      >
                        □
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionHeading id="billing">Billing and Funding</SectionHeading>
                <Prose>
                  Billing is where many agency relationships go quiet — until a top-up stalls or a
                  limited node traps balance. At a high level, models include advertiser billing
                  (your payment profile), agency billing (agency funds then recharges), prepaid/top-up
                  wallets, and hybrids. Currency, payment-profile ownership, funding lead times, and
                  balance handling all need written answers.
                </Prose>
                <SubHeading>Questions to ask before funding an agency account</SubHeading>
                <ul className="list-disc pl-5 space-y-2 text-[#0a0612]/80 mb-4">
                  <li>Who owns the payment profile?</li>
                  <li>Is spend prepaid, postpaid, or topped up manually?</li>
                  <li>What currencies and methods are supported?</li>
                  <li>What is the typical funding lead time?</li>
                  <li>What happens to unused balance if an account is limited?</li>
                  <li>Who can view invoices and transaction history?</li>
                </ul>
              </section>

              <section>
                <SectionHeading id="tracking">Tracking and Data Ownership</SectionHeading>
                <Prose>
                  Across platforms you will meet Meta Pixel / Dataset (and Conversions API where
                  used), Google conversion actions and tags, TikTok Pixel / Events API, and Microsoft
                  UET goals. The shared question is always: who owns the measurement asset, and does it
                  survive a spend-node change?
                </Prose>
                <Prose>
                  This is not a CAPI tutorial. It is a planning rule: do not trap the only conversion
                  destination inside a disposable advertising account when the platform allows a
                  durable business-owned setup. For Meta-specific structure, see{" "}
                  <Link
                    href="/resources/meta-pixel-capi-account-structure"
                    className="text-[#E44F71] hover:underline"
                  >
                    Pixel, Dataset &amp; CAPI structure
                  </Link>
                  .
                </Prose>
              </section>

              <section>
                <SectionHeading id="restrictions-risk">
                  Restrictions, Risk and Continuity
                </SectionHeading>
                <Prose>
                  Agency infrastructure can improve operational organization and support. It does{" "}
                  <strong className="font-semibold text-[#0a0612]">not</strong> guarantee no
                  restrictions, no campaign rejection, no billing failures, account restoration, or
                  approval of ineligible offers.
                </Prose>
                <Prose>Distinguish the layer when something breaks:</Prose>
                <ul className="list-disc pl-5 space-y-2 text-[#0a0612]/80 mb-4">
                  <li>Campaign / ad rejection</li>
                  <li>Advertiser account restriction</li>
                  <li>Manager / business restriction</li>
                  <li>Payment / billing issue</li>
                  <li>Asset restriction (Page, domain, pixel, profile)</li>
                </ul>
                <Prose>
                  For Meta health diagnosis before scale, see the{" "}
                  <Link
                    href="/services/health-assessment-service"
                    className="text-[#E44F71] hover:underline"
                  >
                    Account Health Assessment
                  </Link>
                  . For restriction framing, see{" "}
                  <Link
                    href="/resources/facebook-ad-account-restricted"
                    className="text-[#E44F71] hover:underline"
                  >
                    Facebook ad account restricted
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/resources/meta-business-manager-restricted"
                    className="text-[#E44F71] hover:underline"
                  >
                    Business Manager restricted
                  </Link>
                  .
                </Prose>
              </section>

              <section>
                <SectionHeading id="choosing-a-provider">
                  How to Choose an Agency Ad Account Provider
                </SectionHeading>
                <Prose>
                  Treat providers as infrastructure partners. Marketing adjectives matter less than
                  written ownership, permissions, billing, and exit terms.
                </Prose>
                <ul className="space-y-3 mb-6">
                  {evaluateItems.map((item) => (
                    <li key={item} className="flex gap-3 text-[#0a0612]/80">
                      <Check className="w-5 h-5 text-[#E44F71] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <SubHeading>Red flags</SubHeading>
                <ul className="list-disc pl-5 space-y-2 text-[#0a0612]/80 mb-4">
                  {redFlags.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionHeading id="rahim-onboarding">
                  How Rahim Marketing Onboards Advertisers
                </SectionHeading>
                <Prose>
                  Exact timelines vary by platform and verification. We do not invent fixed SLAs. The
                  sequence below is the operational order we recommend before spend scales.
                </Prose>
                <ol className="space-y-4 mb-4">
                  {onboardingSteps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0a0612] text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-[#0a0612]">{step.title}</p>
                        <p className="text-[#0a0612]/75 leading-relaxed">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <SectionHeading id="pricing">Agency Ad Account Pricing</SectionHeading>
                <Prose>
                  Pricing varies by platform, access model, billing/funding workflow, support level,
                  and account structure. Cross-platform “one price fits all” claims usually hide those
                  differences. Where plans are published, they live on platform-specific service pages
                  (and shared plan modules those pages reuse) — not as invented totals on this pillar.
                </Prose>
                <Prose>
                  For visible plan options, open the relevant platform page or{" "}
                  <Link href="/request-access" className="text-[#E44F71] hover:underline">
                    request access
                  </Link>{" "}
                  for an eligibility review before onboarding.
                </Prose>
              </section>

              <section>
                <SectionHeading id="faq">Frequently Asked Questions</SectionHeading>
                <div className="space-y-6">
                  {faqs.map((item) => (
                    <div key={item.q} className="border-b border-[#0a0612]/10 pb-6 last:border-0">
                      <h3 className="text-lg font-semibold text-[#0a0612] mb-2">{item.q}</h3>
                      <p className="text-[#0a0612]/80 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading id="platform-services">
                  Explore Agency Ad Accounts by Platform
                </SectionHeading>
                <div className="grid sm:grid-cols-2 gap-4">
                  {platformCards.map((card) => (
                    <Link
                      key={card.href}
                      href={card.href}
                      className="group flex flex-col rounded-2xl border border-[#0a0612]/10 p-5 hover:border-[#E44F71]/50 transition-colors"
                    >
                      <div className="mb-4 text-[#0a0612]">
                        <PlatformLogo platform={card.id} containerSize={40} iconSize={28} />
                      </div>
                      <span className="font-semibold text-[#0a0612] group-hover:text-[#E44F71] transition-colors">
                        {card.title}
                      </span>
                      <span className="mt-2 text-sm text-[#0a0612]/65 leading-relaxed">
                        {card.blurb}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#E44F71]">
                        View service
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              <SourcesList
                sources={[
                  {
                    title: "Meta Advertising Policies",
                    publisher: "Meta",
                    url: "https://www.facebook.com/policies/ads/",
                  },
                  {
                    title: "Google Ads policies",
                    publisher: "Google Ads Help",
                    url: "https://support.google.com/adspolicy/answer/6008942",
                  },
                  {
                    title: "TikTok Advertising Policies",
                    publisher: "TikTok For Business",
                    url: "https://ads.tiktok.com/help/article/tiktok-advertising-policies",
                  },
                ]}
              />

              <section
                id="cta"
                className="rounded-2xl bg-[#0a0612] p-8 md:p-10 text-center scroll-mt-28"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Request Agency Account Access
                </h2>
                <p className="text-white/70 leading-relaxed max-w-[560px] mx-auto mb-8">
                  Rahim reviews fit, platform, ownership/access requirements, and next steps before
                  onboarding. Capacity is limited to maintain support quality.
                </p>
                <Link
                  href="/request-access?service=agency-ad-accounts"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold"
                >
                  Request Agency Account Access
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
                  <a href={TELEGRAM_URL} className="text-white/55 hover:text-white transition-colors">
                    Telegram
                  </a>
                  <span className="text-white/25">·</span>
                  <a href={WHATSAPP_URL} className="text-white/55 hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </div>
              </section>
            </div>
          </article>

          <div id="related-guides">
            <RelatedResources
              variant="dark"
              title="Related guides"
              links={[
                {
                  href: "/resources/meta-agency-ad-account-guide",
                  title: "Meta Agency Ad Account Guide",
                  description: "Definition, access, billing, and tracking on Meta",
                },
                {
                  href: "/resources/meta-agency-account-vs-standard-ad-account",
                  title: "Meta agency vs standard ad account",
                  description: "When self-serve is enough vs agency structure",
                },
                {
                  href: "/resources/google-ads",
                  title: "Google Ads resource hub",
                  description: "MCC, billing, suspensions, and agency guides",
                },
                {
                  href: "/resources/tiktok-ads",
                  title: "TikTok Ads resource hub",
                  description: "Business Center, access, and suspensions",
                },
                {
                  href: "/services/health-assessment-service",
                  title: "Account Health Assessment",
                  description: "Diagnose Meta ownership, access, and risk before scale",
                },
              ]}
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
