import { phase2ResourceGuides } from "./resource-guides-phase2";
import { phase3ResourceGuides } from "./resource-guides-phase3";

export type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResourceGuide = {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  description: string;
  h1: string;
  subtitle: string;
  sections: ResourceSection[];
  related: Array<{ href: string; title: string; description?: string }>;
  cta?: { href: string; label: string };
};

export const RESOURCE_GUIDE_SLUGS = [
  "meta-agency-ad-account-guide",
  "facebook-ad-account-restricted",
  "meta-business-manager-restricted",
  "can-you-advertise-peptides-on-facebook",
  "peptide-meta-ads-compliance",
  "why-peptide-meta-ads-get-rejected",
  "meta-agency-account-vs-standard-ad-account",
  "meta-pixel-capi-account-structure",
  "meta-business-manager-permissions",
  "meta-page-restricted",
  "meta-account-health-checklist",
  "meta-ad-account-appeal-guide",
  "peptide-meta-landing-page-compliance",
  "peptide-meta-tracking-capi",
  "google-ads-agency-account-guide",
  "google-ads-account-suspended",
  "google-ads-manager-account-vs-agency-account",
  "google-ads-billing-account-structure",
  "tiktok-agency-account-guide",
  "tiktok-ad-account-suspended",
  "tiktok-business-center-vs-agency-account",
  "tiktok-ad-account-access-permissions",
] as const;

export type ResourceGuideSlug = (typeof RESOURCE_GUIDE_SLUGS)[number];

export const resourceGuides = {
  "meta-agency-ad-account-guide": {
    slug: "meta-agency-ad-account-guide",
    category: "Agency Ad Accounts",
    title: "What Is a Meta Agency Ad Account?",
    metaTitle: "What Is a Meta Agency Ad Account? Complete Guide",
    description:
      "A practical guide to Meta agency ad accounts: how they work, access and ownership, billing, tracking, restrictions, and how to evaluate a provider.",
    h1: "What Is a Meta Agency Ad Account?",
    subtitle:
      "A clear explanation of agency advertising infrastructure on Meta — without promising immunity from platform policies.",
    sections: [
      {
        heading: "Definition",
        paragraphs: [
          "A Meta (Facebook/Instagram) agency ad account is advertising access structured through an agency or partner setup rather than a brand-new personal self-serve account alone. In practice, advertisers typically receive Business Manager permissions, documented access rules, billing workflows, and operational support around spend nodes that may be provisioned, shared, or replaced according to an agreed plan.",
          "The phrase “agency ad account” is used loosely across the industry. Sometimes it means an agency-owned Business Manager that grants you advertiser or admin roles. Sometimes it means a partner relationship where your Business Manager receives access to accounts the agency controls. Sometimes it includes replacement support, funding workflows, or both. Clarify the model before you onboard — the label alone does not tell you who owns what.",
          "Agency infrastructure is about operations and continuity: clearer permissions, support when something breaks, and architecture that may protect tracking when a spend node is limited. It does not rewrite Meta Advertising Policies, override current Meta review systems, or guarantee that every creative, offer, or landing page will be approved.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "In most setups, the agency provisions or partners into ad accounts inside a Business Manager, then grants the advertiser admin or advertiser-level access through Meta’s partner or user invitation flows. You operate campaigns inside Ads Manager under those permissions. Funding, top-ups, and replacement options — when included — are handled according to the written plan, not by sharing personal Facebook logins.",
          "A typical operational sequence looks like eligibility review, asset mapping (Pages, domains, Pixel/Dataset), permission grants, billing setup, then launch. Responsible providers usually ask what you sell, where you sell it, and how you position claims before they open spend capacity. That review is not legal advice and does not create a Meta partnership status — it is a risk filter so you do not burn infrastructure on an offer that is unlikely to survive review under current Meta policies.",
        ],
        bullets: [
          "Eligibility review before onboarding — product category, markets, and claim posture",
          "Permissions granted through Business Manager roles and partner access — not personal Facebook passwords",
          "Spend nodes that may be replaceable when a plan explicitly includes replacement support",
          "Guidance on Pixel/Dataset ownership so measurement can outlive a single ad account",
          "Documented billing and top-up paths that match the account type you receive",
        ],
      },
      {
        heading: "Agency vs self-serve",
        paragraphs: [
          "Self-serve accounts are appropriate for many advertisers: you create a Business Manager, open an ad account, add a payment method, and run. That model is simplest when spend is modest, ownership is already clear inside your company, and you have internal capacity to handle verification, payments, and occasional restrictions.",
          "Agency setups become relevant when spend capacity, access clarity, replacement workflows, multi-brand architecture, or continuity after a limited account matter more than a single personal or brand self-serve node. Neither model is “immune.” Restrictions can still happen on agency infrastructure and on self-serve accounts. The difference is usually process: who you contact, whether replacement is part of the agreement, and whether tracking assets were designed to survive a spend-node change.",
          "Choose based on operational fit, not marketing language. If a provider implies that agency access bypasses Meta policies, treat that as a red flag. Current Meta policies apply to advertising activity regardless of how the ad account was provisioned.",
        ],
        bullets: [
          "Ownership and access are typically documented in writing under an agency model",
          "Support and escalation paths exist when issues appear — quality of support varies by provider",
          "Billing may support card, crypto, or bank transfer depending on the specific account and provider",
          "Restrictions can still happen on either model; architecture affects recovery options, not policy exemptions",
          "Self-serve keeps full ownership by default; agency setups require clear contracts on who owns BM, Pages, and datasets",
        ],
      },
      {
        heading: "Access and ownership",
        paragraphs: [
          "You should never share your personal Facebook password. Legitimate setups use Business Manager roles, partner business access, and asset-level permissions. Ask who owns the Business Manager that houses the ad account, who owns the Pages you advertise from, who owns the Pixel/Dataset, what the agency can see, what you control day to day, and how access is revoked when the engagement ends.",
          "Ownership mistakes create long-term risk. If the Pixel lives only on a disposable spend node, a restriction can disrupt optimization history and event continuity. If Pages and domains are scattered across personal profiles and unverified Business Managers, a later restriction becomes harder to diagnose. Map assets before you scale spend.",
          "Also clarify whether you are a partner on the agency’s Business Manager, whether they are a partner on yours, or whether you receive admin on a dedicated structure. Each pattern has different blast-radius implications when something is limited. Prefer written diagrams of people, Business Managers, Pages, domains, and datasets over verbal assurances.",
        ],
      },
      {
        heading: "Billing, tracking, and restrictions",
        paragraphs: [
          "Billing methods vary by account and provider. Some setups use agency-controlled payment methods; others expect you to fund through defined channels. Confirm currency, top-up lead times, refund policy (if any), and what happens to prepaid balance if an ad account is restricted. Do not assume balances transfer automatically between nodes.",
          "Tracking continuity depends on whether the Pixel/Dataset sits on a durable business asset rather than only on a disposable spend node. Where architecture allows, keep domain verification, dataset ownership, and Conversions API destinations under assets your team can still access if a single ad account is limited. That does not guarantee uninterrupted delivery — it typically reduces measurement chaos during a change.",
          "Restrictions remain possible under current Meta systems. Common pressure points include payment issues, policy flags on creatives or landing pages, Business Manager or Page problems, and repeated rejected activity. The operational value of infrastructure is usually review before launch, clearer permissions, replacement where the plan includes it, and protecting measurement when architecture allows — not a promise that ads will always run.",
        ],
      },
      {
        heading: "Evaluating providers",
        paragraphs: [
          "Evaluate providers the way you would evaluate any vendor with access to revenue-critical systems. Ask for a plain description of the access model, what is included in replacement (if offered), how eligibility reviews work, and what happens when Meta limits an account. Prefer providers who speak in process language over those who promise outcomes Meta alone controls.",
          "Be cautious of claims that invent Meta partnership status, official immunity, guaranteed approvals, or fixed approval rates. Those are typically marketing, not contractual facts you can rely on. Also watch for requests for personal passwords, pressure to launch before eligibility review, or advice that sounds like policy evasion (cloaking, mismatched landing pages, or claim-hiding). That increases long-term risk even if a campaign appears to launch once.",
        ],
        bullets: [
          "Written scope: access type, billing, support hours, replacement terms, and exit process",
          "Clear ownership map for Business Manager, Pages, domains, and Pixel/Dataset",
          "Eligibility review that can decline an offer rather than force it live",
          "No request for personal Facebook passwords",
          "Honest language about restrictions: possible, case-dependent, not “solved forever”",
        ],
      },
      {
        heading: "Questions to ask before granting access",
        paragraphs: [
          "Before you onboard with any provider — including agency ad account vendors — get answers in writing. If the answers are vague, delay access until they are not.",
        ],
        bullets: [
          "What permissions will you need, on which assets, and for how long?",
          "Who owns the Business Manager, Pages, domains, and Pixel/Dataset during and after the engagement?",
          "What happens if an ad account is restricted — appeal support, replacement, timeline expectations, and what is not covered?",
          "Do you ever need my personal Facebook password? (The answer should be no.)",
          "How do you review offer eligibility, and will you decline categories that look non-viable under current Meta policies?",
          "How is billing funded, topped up, and reconciled if spend moves to a different node?",
          "How is access revoked, and what do I keep when we stop working together?",
        ],
      },
    ],
    related: [
      {
        href: "/services/facebook-agency-ad-account",
        title: "Facebook Agency Ad Accounts",
        description: "Meta advertising infrastructure from Rahim Marketing",
      },
      {
        href: "/services/health-assessment-service",
        title: "Meta Ad Account Health Audit",
        description: "Review restrictions, permissions, and scaling risk",
      },
      {
        href: "/resources/facebook-ad-account-restricted",
        title: "Facebook Ad Account Restricted?",
        description: "What to do next after a restriction",
      },
    ],
    cta: { href: "/request-access?service=facebook", label: "Request Meta agency access" },
  },
  "facebook-ad-account-restricted": {
    slug: "facebook-ad-account-restricted",
    category: "Account Restrictions",
    title: "Facebook Ad Account Restricted? What to Do Next",
    metaTitle: "Facebook Ad Account Restricted? What to Do Next",
    description:
      "Practical next steps when a Facebook/Meta ad account is restricted: restriction types, what not to do, reviews, appeals, and when a professional assessment helps.",
    h1: "Facebook Ad Account Restricted? What to Do Next",
    subtitle:
      "A calm, operational checklist — not a guarantee of restoration.",
    sections: [
      {
        heading: "Common restriction types",
        paragraphs: [
          "Meta may limit advertising ability at several layers: the ad account, Page, Business Manager, user profile with advertising permissions, payment method, or combinations of those. Symptoms often overlap — ads disabled, spend blocked, inability to create campaigns, assets greyed out, or policy flags on creatives and landing pages — so the first job is to identify which layer is actually limited.",
          "An ad-account-level issue may leave your Business Manager and Pages usable while blocking spend on one node. A Page issue can interrupt advertising even when the ad account looks healthy. A Business Manager issue can cascade across multiple accounts and partner relationships. Payment problems can look like policy restrictions until you inspect billing. Treat “restricted” as a category that needs diagnosis, not a single event with one fix.",
          "Notices inside Ads Manager, Business Settings, and email may not use identical wording. Capture all of them. Note dates, affected asset IDs, and whether delivery stopped suddenly, after a creative reject streak, after a payment failure, or after a Business Manager change. Sequence matters when you later decide whether to appeal, restructure, or pause.",
        ],
      },
      {
        heading: "Immediate steps",
        paragraphs: [
          "Start with evidence and containment. Do not improvise a full rebuild in the first hour unless you already know ownership of every critical asset. The goal is to preserve information and stop actions that typically make the situation harder to unwind.",
        ],
        bullets: [
          "Screenshot the restriction notice, related email, and any policy or payment alerts — include timestamps and asset names",
          "Note which assets are affected: ad account, Page, Business Manager, domain, Pixel/Dataset, payment method, or user access",
          "Pause aggressive relaunches of the same rejected creatives or landing pages without changing the underlying issue",
          "Confirm who still has admin access in Business Settings and whether partner access is intact",
          "Preserve Pixel/Dataset ownership details, domain verification status, and CAPI destinations before changing structure",
          "Export or record active campaign structure, audiences, and recent reject reasons while you still have visibility",
          "Stabilize billing: confirm cards, balances, and failed charges so a payment issue is not mistaken for a policy dead end",
        ],
      },
      {
        heading: "What NOT to do",
        paragraphs: [
          "Do not share personal Facebook passwords with vendors. Legitimate help uses Business Manager roles and partner access. Password sharing creates security risk and can complicate ownership if accounts later need recovery.",
          "Do not create chaotic duplicate Business Managers, Pages, and Pixels without documenting ownership. Sprawl makes diagnosis harder and can leave tracking fragmented across assets nobody fully controls. If you must create new structure, do it deliberately with a written map.",
          "Do not assume cloaking, claim-hiding, or a mismatched “safe” landing page will solve a policy problem. Those approaches typically increase long-term risk under current Meta policies and can turn a creative reject into a broader trust problem. Fix the offer, claims, and consistency — or pause advertising for that product — rather than trying to outmaneuver review.",
          "Do not spam appeals with identical text while continuing the same rejected activity. If you appeal, make it factual and tied to a real change or a clear error. Restoration is never guaranteed; repeated low-quality appeals usually do not help.",
        ],
      },
      {
        heading: "Review workflow",
        paragraphs: [
          "A useful review separates symptoms from root causes. Work through layers in order: what Meta says is limited, what you can still access, whether payment is healthy, whether Pages and domains are verified and consistent, whether creatives and landing pages match, and whether permissions or shared assets are broken.",
          "Account quality signals visible to you — reject rates, disabled ads, payment failures, Business verification status where relevant, and unresolved Page issues — help prioritize. So do dependencies: an ad account may look fine while a connected Page or domain problem blocks delivery. Landing-page and creative consistency matters especially for health and wellness categories, where personal-attribute language and outcome claims are often scrutinized under current Meta policies.",
          "An appeal may be appropriate when the notice suggests a review path and you believe there is a factual error or you have already remediated the flagged issue. An appeal is less useful when the product category itself is not eligible to advertise, when claims cannot be made truthfully, or when the Business Manager layer is the real problem. Decide appeal vs restructure vs pause based on diagnosis — not panic.",
        ],
        bullets: [
          "Capture restriction scope and asset IDs",
          "Check payment health and billing ownership",
          "Inspect Page, domain, and Business Manager dependencies",
          "Review recent creatives, reject reasons, and landing-page alignment",
          "Confirm admin/partner permissions have not been silently lost",
          "Choose a path: remediate and appeal, restructure cleanly, or pause the offer",
        ],
      },
      {
        heading: "When professional assessment helps",
        paragraphs: [
          "If spend is material, assets are tangled across people and Business Managers, or you are unsure whether to appeal versus rebuild, a Meta ad account health audit can prioritize next steps. A professional review typically maps permissions, restriction layer, tracking ownership, and offer risk so you do not spend weeks on the wrong lever.",
          "Professional help is also useful when multiple teams have added partners over time, when Pixel ownership is unclear, or when you need a continuity plan that protects measurement while a spend node is limited. It is not a guarantee of restoration, unban, or future approvals. Anyone who promises a fixed outcome Meta alone controls is overselling.",
          "Use outside help for clarity and process. Keep ownership of passwords and final decisions. Ask for a written diagnosis: what is restricted, what is salvageable, what should not be relaunched yet, and what architecture changes reduce repeat risk under current Meta policies.",
        ],
      },
    ],
    related: [
      {
        href: "/services/health-assessment-service",
        title: "Request a Meta Account Health Audit",
        description: "Structured review before you increase spend again",
      },
      {
        href: "/facebook-unban-services",
        title: "Restriction recovery support",
        description: "Professional review and continuity planning",
      },
      {
        href: "/services/facebook-agency-ad-account",
        title: "Facebook Agency Ad Accounts",
        description: "Infrastructure for higher-spend Meta operations",
      },
    ],
    cta: {
      href: "/request-access?service=health-assessment",
      label: "Request Account Health Audit",
    },
  },
  "meta-business-manager-restricted": {
    slug: "meta-business-manager-restricted",
    category: "Account Restrictions",
    title: "Meta Business Manager Restricted: Causes & Next Steps",
    metaTitle: "Meta Business Manager Restricted: Causes & Next Steps",
    description:
      "How Business Manager restrictions differ from ad account limits — permissions, verification, Pages, domains, datasets, and legitimate next steps.",
    h1: "Meta Business Manager Restricted: Causes & Next Steps",
    subtitle:
      "Understand BM-level issues before you rebuild everything from scratch.",
    sections: [
      {
        heading: "BM restriction vs ad account restriction",
        paragraphs: [
          "An ad account restriction may block spend on one advertising node while the Business Manager remains usable for Pages, datasets, partner access, and other accounts. A Business Manager restriction can affect multiple ad accounts, Pages, catalogs, and partner relationships at once. Treating them as the same problem often leads to the wrong rebuild: people create new BMs while the original still holds critical assets, or they appeal the wrong layer.",
          "Operationally, start by answering: can you still open Business Settings? Can you access Pages and datasets? Are partner invitations still visible? Are multiple ad accounts limited in the same window? If the blast radius is BM-wide, focus on Business Manager health, verification, permissions, and shared assets before you obsess over a single campaign reject.",
          "Ad account issues and BM issues can also stack. A weak Business Manager with messy permissions may survive until spend rises or a policy review occurs, then several nodes fail together. Diagnosis should include both layers even when the visible notice mentions only one.",
        ],
      },
      {
        heading: "Permissions and people risk",
        paragraphs: [
          "Business Manager problems frequently involve people and partners as much as ads. Excess admins, departed contractors who still hold roles, personal profiles mixed into business assets, and unclear partner relationships all increase operational fragility. When a restriction hits, the first practical question is whether someone with real control can still log in and act.",
          "Map every person and partner with access: admin, employee, partner business, finance roles, and Page-level roles that may sit outside the BM. Confirm two-factor practices for critical admins. Remove access you no longer need — carefully, and after documenting who owns what — so recovery work is not blocked by unknown parties.",
          "Never “fix” permissions by sharing personal Facebook passwords. Use Meta’s role and partner flows. If only one person holds admin and that person is unavailable, recovery options typically shrink. Redundancy of trusted admins is an operational control, not a workaround for platform policy.",
        ],
      },
      {
        heading: "Verification, Pages, domains, and datasets",
        paragraphs: [
          "Business verification status, where relevant to your setup and Meta’s current requirements, can affect what a Business Manager can do with certain features or assets. Verification is not a universal cure for restrictions, and lack of verification is not always the sole cause of a limit — but it is part of the health picture you should inspect when a BM is under stress.",
          "Pages and domains often sit at the center of BM recovery. If advertising depends on a Page owned elsewhere, or a domain verified under a different Business Manager, a restriction can strand delivery even after a new ad account appears. Datasets (Pixels) and Conversions API destinations similarly need intentional ownership. If measurement lives only inside a restricted BM with no transfer path, rebuilding spend without fixing tracking ownership usually recreates chaos.",
          "Inventory connected Pages, verified domains, datasets, catalogs, and pending asset requests. Note which assets can be moved or re-requested under Meta’s current tools and which cannot. Plan measurement continuity before you abandon a BM that still holds your only verified domain or primary dataset.",
        ],
        bullets: [
          "Admin and partner permissions — who can still act, and who should not",
          "Business verification status where relevant to your account type and markets",
          "Connected Pages, Instagram accounts, and domain verification ownership",
          "Pixels / Datasets and CAPI destinations tied to the BM",
          "Shared assets, pending requests, and partner Business Managers",
          "Payment methods and finance access attached at BM or account level",
        ],
      },
      {
        heading: "Legitimate recovery steps",
        paragraphs: [
          "Document the notice and every affected asset ID. Confirm who has control. Avoid password sharing. Decide whether appeal, remediation inside the existing BM, or a cleaner asset architecture is appropriate. That decision depends on what Meta’s notice indicates, what you can still access, and whether the underlying issue is payment, permissions, verification, policy activity, or structural sprawl.",
          "If an appeal path is available and you believe the limitation is erroneous or already remediated, submit a factual appeal and stop actions that recreate the flagged behavior. If the original BM cannot be restored — or restoration is uncertain — plan how Pages, domains, and datasets move without losing measurement. Do not scatter duplicates; design a target architecture and migrate deliberately.",
          "Legitimate recovery does not include cloaking, fake business identities, or spinning endless unverified structures to dodge review. Those patterns typically increase risk. Focus on clear ownership, consistent business identity, healthy permissions, and offers that can be advertised under current Meta policies. Restoration is never guaranteed; continuity planning is the part you control.",
        ],
      },
      {
        heading: "When to get a structured review",
        paragraphs: [
          "Get a structured Business Manager review when multiple ad accounts are impacted, when Page and dataset ownership is unclear, when partners have layered access over years, or when your team is about to rebuild from scratch without a migration plan. A health audit typically prioritizes blast radius, salvageable assets, and whether appeal or architecture change is the better next move.",
          "Ask for written outputs: asset map, restriction layer hypothesis, recommended sequence, and what not to launch yet. Keep final control of admins and passwords. Treat any promise of guaranteed BM restoration as unreliable — Meta’s systems and policies determine outcomes you cannot contractually force.",
        ],
      },
    ],
    related: [
      {
        href: "/services/health-assessment-service",
        title: "Meta Ad Account Health Audit",
        description: "Map BM blast radius, permissions, and recovery options",
      },
      {
        href: "/services/facebook-agency-ad-account",
        title: "Facebook Agency Ad Accounts",
        description: "Infrastructure options when continuity matters",
      },
      {
        href: "/products/buy-facebook-business-managers",
        title: "Facebook Business Managers",
        description: "Business Manager setups for Meta advertising operations",
      },
    ],
    cta: {
      href: "/request-access?service=health-assessment",
      label: "Request a Business Manager review",
    },
  },
  "can-you-advertise-peptides-on-facebook": {
    slug: "can-you-advertise-peptides-on-facebook",
    category: "Peptide Advertising",
    title: "Can You Advertise Peptides on Facebook & Instagram?",
    metaTitle: "Can You Advertise Peptides on Facebook & Instagram?",
    description:
      "Compliance-first guidance on peptide advertising eligibility on Meta: product, jurisdiction, claims, landing pages, and when an offer should not be advertised.",
    h1: "Can You Advertise Peptides on Facebook & Instagram?",
    subtitle:
      "Eligibility depends on the product, jurisdiction, claims, landing page, and current Meta policies — not on a workaround.",
    sections: [
      {
        heading: "Short answer",
        paragraphs: [
          "Sometimes — and sometimes not. Meta scrutinizes health and wellness advertising. Whether a peptide or research-compound offer can run depends on the actual product, how it is positioned, where it is sold, how claims are made in ads and on-site, and how those elements interact with current Meta Advertising Policies and review systems.",
          "There is no universal yes. Two brands both selling “peptides” can face different outcomes if one markets a permitted wellness framing with careful claims and another implies medical outcomes, ships into restricted contexts, or uses a landing page that contradicts the ad. Eligibility is case-dependent. Anyone selling a blanket guarantee is ignoring how review typically works.",
        ],
      },
      {
        heading: "What “eligibility” actually means",
        paragraphs: [
          "Eligibility is not only “did this ad get approved once.” It includes whether the product category is allowed to advertise on Meta for your markets, whether the claims you need to convert customers are permitted and truthful, whether the landing page stays consistent with the ad, and whether your business presence (Page, domain, transparency) looks coherent under review.",
          "Jurisdiction matters. Rules and enforcement priorities can differ by destination market and by how a product is classified where you sell it. A positioning that seems acceptable in one context may be non-viable in another. Your legal and regulatory obligations are separate from Meta’s advertising rules — satisfying one does not automatically satisfy the other.",
          "Claims matter as much as the SKU list. Outcome language, disease implications, before/after framing, and personal-attribute targeting or copy can trigger scrutiny even when the product itself is not the only issue. Landing pages that escalate claims beyond the ad commonly create reject or restriction pressure.",
        ],
      },
      {
        heading: "Why peptide advertising is scrutinized",
        paragraphs: [
          "Health-adjacent offers often trigger reviews related to misleading claims, personal attributes, restricted goods and services categories, and landing-page consistency — depending on creative and destination. Meta’s systems and human review may evaluate ads, Pages, and websites together. A careful primary text with an aggressive on-page medical claim is still a risk package.",
          "Account and Business Manager quality also matter operationally. Fragile setups — unclear ownership, payment problems, high reject rates, tangled partners — typically fail under load even when a single creative looks restrained. Infrastructure does not create eligibility for a prohibited offer, but weak infrastructure can make an otherwise careful launch unstable.",
        ],
      },
      {
        heading: "What reviewers effectively look at",
        paragraphs: [
          "In practice, expect scrutiny across the full path from ad to conversion, not only the headline. Exact enforcement can change with current Meta policies and automated systems, so treat the following as operational focus areas rather than a complete legal checklist.",
        ],
        bullets: [
          "Product eligibility and category fit for the markets you target",
          "Medical, disease, or outcome claims in ads, images, video, and on-page copy",
          "Landing-page consistency with the ad — including popups, FAQ, and linked pages",
          "Business / Page transparency and whether the advertiser identity is clear",
          "Ad account and Business Manager quality signals, payment health, and prior rejects",
          "Personal-attribute language that implies knowledge of a user’s health condition",
        ],
      },
      {
        heading: "When you should NOT advertise",
        paragraphs: [
          "If the product appears prohibited for advertising on Meta under current policies for your use case, do not force it live through agency accounts, new Pages, or creative tricks. Infrastructure does not override category eligibility.",
          "If the claims required to sell the product cannot be made truthfully and within Meta’s advertising standards as they apply to your creative and landing page, pause paid social for that offer until positioning changes — or choose channels where your compliant messaging can work.",
          "If the landing page contradicts the ad, buries material information, or escalates into medical outcome territory the ad avoided, fix the site before spending. If you cannot describe the product honestly without triggering the issues above, eligibility review before spend protects more than a rejected campaign does.",
          "Do not use cloaking, geo-swapped “review” pages, or hidden claim sets as a strategy. Those approaches are policy-evasion patterns and typically increase long-term account risk. The compliant path is to change the offer, claims, or channel — not to disguise them.",
        ],
      },
      {
        heading: "A practical decision path",
        paragraphs: [
          "Work in order: product and market eligibility, claim inventory across ads and site, landing-page consistency, business transparency, then account architecture. If step one fails, stop. If claims fail, rewrite or do not advertise. If only architecture is weak, fix permissions, tracking ownership, and account health before scaling tests.",
          "Write the decision down. A one-page internal note that states “eligible / not eligible / needs repositioning,” lists the claims you will allow, and names the destination URL reduces the chance that media buyers invent angles under pressure. When Meta rejects an ad, compare the reject to that note before changing accounts or creatives.",
          "When you need a second opinion, ask for a compliance-aware review that can decline the offer. A useful partner will say “not like this” when needed. They should not invent Meta partnership status, approval rates, or guarantees. Your team remains responsible for product legality, labeling, and the claims you publish.",
        ],
      },
      {
        heading: "How this differs from a compliance checklist",
        paragraphs: [
          "This page answers the eligibility question: whether you should advertise a given peptide offer on Facebook and Instagram at all. A compliance checklist assumes you may proceed and then walks through claims, creative, landing pages, transparency, tracking, and account health before launch. Rejection guides explain why campaigns fail after you try. Keep those intents separate so teams do not treat infrastructure as a substitute for eligibility.",
        ],
      },
    ],
    related: [
      {
        href: "/services/peptides-meta-ads",
        title: "Peptides Meta Ads Structure",
        description: "Infrastructure packs for peptide brands",
      },
      {
        href: "/resources/peptide-meta-ads-compliance",
        title: "Meta Ads Compliance for Peptide Brands",
        description: "Pre-launch checklist for claims, LPs, and account health",
      },
      {
        href: "/resources/why-peptide-meta-ads-get-rejected",
        title: "Why Peptide Meta Ads Get Rejected",
        description: "Common rejection causes and what audits examine",
      },
    ],
    cta: {
      href: "/request-access?service=peptides",
      label: "Review your peptide Meta setup",
    },
  },
  "peptide-meta-ads-compliance": {
    slug: "peptide-meta-ads-compliance",
    category: "Peptide Advertising",
    title: "Meta Ads Compliance for Peptide Brands",
    metaTitle: "Meta Ads Compliance for Peptide Brands",
    description:
      "A pre-launch checklist for peptide Meta ads: eligibility, claims, creative, landing pages, transparency, tracking, and account health — without policy circumvention.",
    h1: "Meta Ads Compliance for Peptide Brands",
    subtitle:
      "A practical compliance-aware checklist before you scale spend.",
    sections: [
      {
        heading: "Offer eligibility",
        paragraphs: [
          "Confirm the product can be advertised on Meta in the markets you intend to reach, under current Meta Advertising Policies as they apply to your category and positioning. If it cannot, new ad accounts, agency infrastructure, or creative rotation will not fix the problem. Eligibility review belongs at the start — before pixel installs and media budgets.",
          "Document what you sell, how it is classified where you sell it, who may purchase it, and what fulfillment looks like. Jurisdiction and product framing can change risk even when the brand name stays the same. Your regulatory obligations and Meta’s ad rules are related but not identical; you need both in view.",
          "If eligibility is uncertain, treat Meta as paused for that SKU until counsel and a compliance-aware media review agree on a viable positioning — or decide the channel is not appropriate. Ambiguity resolved after a restriction is more expensive than ambiguity resolved before launch.",
        ],
      },
      {
        heading: "Claim and creative review",
        paragraphs: [
          "Inventory every claim in primary text, headlines, image overlays, video scripts, testimonials, and on-page sections the ad can reach. Align them. Unsupported medical outcomes, disease implications, and exaggerated results language commonly create review pressure in health-adjacent categories. Your claims remain your responsibility even when a media partner helps structure accounts.",
          "Avoid personal-attribute targeting language and copy that implies knowledge of a person’s health condition. Focus on the offer you can substantiate and the audience definitions Meta’s current tools allow for your objective. Creative testing should vary angles within a compliant claim set — not hunt for a loophole.",
          "Keep a change log. When a creative is rejected, record the reason and the fix. Relaunching the same claim package under a new ad account is not a compliance strategy; it is usually a way to transfer risk into infrastructure.",
        ],
      },
      {
        heading: "Landing-page and business transparency",
        paragraphs: [
          "Landing pages should match the ad in product, promise, and tone. Reviewers and automated systems may evaluate the destination, including linked pages, popups, chat widgets, and FAQ blocks. If the ad is restrained and the site escalates into aggressive medical outcomes, you still own the mismatch risk.",
          "Business and Page information should be clear: who you are, how to contact you, and what is being sold. Domain verification and Page ownership should be intentional and documented. Opaque ownership, mismatched brand names across ad and site, or thin destinations typically weaken trust signals even when a single line of ad copy looks fine.",
          "Do not maintain a “review version” of the site that differs materially from what users see after click as a way to pass policy checks. That is cloaking-style evasion and is not a legitimate compliance practice. One honest destination is the standard to aim for.",
        ],
      },
      {
        heading: "Tracking and account health",
        paragraphs: [
          "Separate durable tracking assets from replaceable spend nodes where architecture allows. Prefer Pixel/Dataset ownership and domain verification under Business Manager assets your team can still access if a single ad account is limited. Conversions API destinations should be documented the same way.",
          "Review permissions before launch: who is admin, which partners can see what, and whether personal profiles are incorrectly mixed into business assets. Check Business Manager health, Page status, and payment methods. High reject rates, unpaid balances, and unresolved Page issues are operational warnings — address them before scaling tests.",
          "Account health does not create eligibility for a non-viable offer. It does reduce self-inflicted failures when you are advertising something that can run under current Meta policies. Treat infrastructure as hygiene, not as a policy shield.",
        ],
      },
      {
        heading: "Transparency and operational discipline",
        paragraphs: [
          "Compliance-aware media buying is mostly discipline: written claim sets, staged launches, controlled partner access, and willingness to stop when review feedback indicates a structural problem. Scale after signals stabilize — not after one accidental approval.",
          "Assign owners inside your company for product eligibility, creative claims, landing-page truthfulness, and ad account access. Agencies can support process; they should not be the only party who understands where the Pixel lives or what the site claims.",
          "Staged launch typically means small budget, limited creative variants inside an approved claim set, and a pause rule when rejects cluster. That is operational control — not a guarantee of delivery. If rejects continue after you fixed the documented issues, revisit eligibility rather than accelerating spend.",
        ],
      },
      {
        heading: "Pre-launch checklist",
        paragraphs: [
          "Use this as a gate. If an item fails, fix it or do not launch that offer on Meta yet. The checklist is for teams that already believe the product may be eligible; it is not a workaround for prohibited categories.",
        ],
        bullets: [
          "Eligibility confirmed for product and target markets under current Meta policies — or explicitly deferred",
          "Claims reviewed on ads and landing page; medical/outcome language vetted; personal-attribute issues removed",
          "Landing page matches ad; no cloaking or material “review-only” variants",
          "Page, domain, and Pixel/Dataset ownership documented with named internal owners",
          "Permissions granted via Business Manager roles — no personal Facebook passwords shared",
          "Payment methods healthy; Business Manager and Page issues cleared or accepted as known risks",
          "Fallback plan if a spend account is limited: who appeals, what gets paused, how tracking stays intact",
          "Reject/reason log ready so tests improve the claim set instead of repeating it",
          "Internal owners named for product, creative, site, and access — not only the media buyer",
        ],
      },
    ],
    related: [
      {
        href: "/services/peptides-meta-ads",
        title: "Peptides Meta Ads Structure",
        description: "Infrastructure designed around compliant peptide media ops",
      },
      {
        href: "/services/health-assessment-service",
        title: "Meta Ad Account Health Audit",
        description: "Permissions, restrictions, and scaling risk review",
      },
      {
        href: "/resources/can-you-advertise-peptides-on-facebook",
        title: "Can You Advertise Peptides on Facebook?",
        description: "Eligibility depends on product, claims, and policies",
      },
    ],
    cta: {
      href: "/request-access?service=peptides",
      label: "Request peptide infrastructure review",
    },
  },
  "why-peptide-meta-ads-get-rejected": {
    slug: "why-peptide-meta-ads-get-rejected",
    category: "Peptide Advertising",
    title: "Why Peptide Meta Ads Get Rejected or Restricted",
    metaTitle: "Why Peptide Meta Ads Get Rejected or Restricted",
    description:
      "Legitimate reasons peptide Meta ads get rejected or restricted — eligibility, claims, landing-page mismatch, account quality, and asset problems — plus what a professional audit examines.",
    h1: "Why Peptide Meta Ads Get Rejected or Restricted",
    subtitle:
      "Creative is only one variable. Structure, eligibility, and consistency matter too.",
    sections: [
      {
        heading: "Rejects vs restrictions",
        paragraphs: [
          "A creative rejection usually means a specific ad or ad set was not approved to deliver as submitted. A restriction can limit the ad account, Page, Business Manager, or related assets more broadly. Peptide advertisers often experience both: repeated rejects, then escalating limits if the same underlying issues continue.",
          "Treat rejects as diagnostic data. The reason text may be incomplete or generic, but patterns across multiple ads — claims, destination, image text, landing-page mismatch — usually point to a root cause. Restrictions require a wider review: payments, BM health, Page status, and whether the offer itself is viable under current Meta policies.",
        ],
      },
      {
        heading: "Legitimate causes",
        paragraphs: [
          "Most failures are ordinary and fixable — or they indicate the offer should not run on Meta. They are not mysteries that require evasion. Common legitimate causes include the following.",
        ],
        bullets: [
          "Product eligibility issues for the category, positioning, or destination markets under current Meta policies",
          "Unsupported medical, disease, or outcome claims in ads, creative overlays, or on-site copy reachable from the ad",
          "Personal-attribute messaging that implies knowledge of a user’s health condition",
          "Landing-page mismatch: ad promise, product, or tone differs from the destination experience",
          "Account or Business Manager quality problems — payments, permissions sprawl, unresolved Page issues",
          "Repeated rejected creatives relaunched without fixing the root claim or destination problem",
          "Page, domain, or brand inconsistencies that make the advertiser identity unclear",
          "Permissions and shared-asset problems that interrupt delivery or create unstable ownership",
          "Thin or opaque business presence that fails basic transparency expectations during review",
        ],
      },
      {
        heading: "How causes compound",
        paragraphs: [
          "A single aggressive claim on an otherwise careful account may produce a reject. The same claim on a Business Manager with payment failures, partner sprawl, and a mismatched landing page may contribute to broader limits. That is why “we only changed the headline” often fails as a recovery plan — the system may be evaluating a bundle of signals.",
          "Health-adjacent verticals typically see less margin for inconsistency. If testimonials, FAQ, or checkout pages escalate claims, they are part of the package Meta may evaluate. Fixing Ads Manager copy while leaving the site unchanged usually reproduces the same outcome.",
          "Infrastructure mistakes also compound. Moving spend to a new ad account while keeping a non-eligible positioning or cloaking-style destination does not address cause; it relocates risk. Legitimate recovery starts with eligibility and claims truth, then creative/LP consistency, then account architecture.",
        ],
      },
      {
        heading: "What a professional audit examines",
        paragraphs: [
          "An audit looks at offer fit first: can this product be advertised on Meta as currently positioned for these markets? If not, the honest recommendation is to change the offer, change the claims, or use a different channel — not to invent a bypass.",
          "Next comes claim risk across ads and site, creative and landing-page consistency, and business transparency. Then BM and ad account health: permissions, payments, Pages, domains, datasets, partner access, and recent reject history. Tracking ownership is included so any rebuild does not orphan measurement.",
          "Finally, the audit should recommend a sequence: remediate and retry, restructure assets, pause the SKU, or escalate to a formal health assessment for restrictions. A competent audit does not promise approval rates, guaranteed restoration, or Meta partnership privileges. It produces a prioritized diagnosis and a compliance-first plan your team can execute.",
        ],
        bullets: [
          "Offer and market eligibility under current Meta policies",
          "Claim inventory and personal-attribute risk on ads and destination",
          "Landing-page consistency and transparency gaps",
          "Ad account, Page, and Business Manager health signals",
          "Pixel/Dataset and domain ownership continuity",
          "Whether rebuilding infrastructure is wiser than forcing another launch",
        ],
      },
      {
        heading: "What to do with the findings",
        paragraphs: [
          "Act on root causes in order. Eligibility failures require stopping or repositioning. Claim failures require rewriting ads and site together. Consistency failures require one destination truth. Account failures require permissions, payment, and asset hygiene. Only after those layers are addressed does creative volume testing make sense.",
          "Avoid the common failure loop: reject → minor synonym swap → new account → same landing page → restriction. That loop trains the wrong lesson. The useful lesson is usually that Meta review responds to substance and structure, and that peptide media buying rewards restraint, documentation, and willingness to decline a non-viable angle.",
          "When you remediate, change one layer at a time where possible and record what changed. If you rewrite claims and the destination in the same week you also migrate Business Managers, you will not know which lever mattered. Restoration and approval remain case-dependent under current Meta systems — process improves your odds of learning, not a promised outcome.",
        ],
      },
      {
        heading: "When professional help is appropriate",
        paragraphs: [
          "Bring in a structured audit when rejects persist after a real claim and landing-page rewrite, when restrictions appear at account or Business Manager level, or when ownership of Pages and datasets is too tangled for your team to diagnose safely. The goal is prioritization: what to stop, what to fix, and what not to relaunch yet.",
          "Professional support should stay compliance-first. It may include health assessment, continuity planning, or infrastructure review when spend architecture is part of the problem. It should not include cloaking guidance, fake business identities, or guarantees of unban or approval. If a vendor’s pitch depends on those, the risk usually outweighs the short-term delivery.",
        ],
      },
    ],
    related: [
      {
        href: "/services/peptides-meta-ads",
        title: "Peptides Meta Ads Structure",
        description: "Structured Meta setups for peptide advertisers",
      },
      {
        href: "/services/health-assessment-service",
        title: "Meta Ad Account Health Audit",
        description: "Diagnose rejects, restrictions, and asset risk",
      },
      {
        href: "/resources/peptide-meta-ads-compliance",
        title: "Peptide Meta Ads Compliance Checklist",
        description: "Pre-launch eligibility, claims, LP, and tracking gates",
      },
    ],
    cta: {
      href: "/request-access?service=peptides",
      label: "Review Your Meta Setup",
    },
  },
  ...(phase2ResourceGuides as Record<string, ResourceGuide>),
  ...(phase3ResourceGuides as Record<string, ResourceGuide>),
} as Record<ResourceGuideSlug, ResourceGuide>;


export function getResourceGuide(slug: string): ResourceGuide | undefined {
  return resourceGuides[slug as ResourceGuideSlug];
}

export function getAllResourceGuides(): ResourceGuide[] {
  return RESOURCE_GUIDE_SLUGS.map((slug) => resourceGuides[slug]);
}
