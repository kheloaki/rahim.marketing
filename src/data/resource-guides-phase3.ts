import type { ResourceGuide } from "./resource-guides";

export const phase3ResourceGuides: Record<string, ResourceGuide> = {
  "google-ads-agency-account-guide": {
    slug: "google-ads-agency-account-guide",
    category: "Google Ads",
    title: "What Is a Google Ads Agency Account?",
    metaTitle: "Google Ads Agency Account Explained: Access, Ownership & Ops",
    description:
      "How Google Ads agency accounts work in practice — manager relationships, ownership, billing, permissions, tracking, restrictions, and when agency infrastructure is worth considering.",
    h1: "What Is a Google Ads Agency Account?",
    subtitle:
      "A working definition for media buyers who need clearer access and operations — not a separate Google rulebook.",
    sections: [
      {
        heading: "What “agency account” usually means",
        paragraphs: [
          "In Google Ads, an “agency account” is not a hidden product tier with its own policy exemptions. It usually means advertising access structured through an agency or partner: you run campaigns inside a Google Ads advertiser account that sits under a manager account (MCC), with documented permissions, billing workflows, and operational support. The label varies by vendor — clarify what you actually receive before you compare quotes.",
          "You still advertise under current Google Ads policies, verification requirements, and review systems. Agency infrastructure is about how spend is provisioned, who owns what, how billing is funded, and who you escalate to when something breaks — not immunity from disapprovals or suspensions.",
        ],
      },
      {
        heading: "Agency access vs client-owned accounts",
        paragraphs: [
          "Client-owned setups are straightforward: your company controls the Google Ads account (and often the manager account above it), attaches its own payments profile, and grants agency users access through standard Google roles. That model keeps ownership clean and exits simple.",
          "Agency-managed infrastructure flips parts of that map. The agency may own or control the manager account and provision advertiser accounts you operate under. You may receive admin or standard access without owning the legal billing entity behind the payments profile. Neither model is “safer” by default — they trade ownership clarity for operational support and continuity options when those are written into the engagement.",
          "Ask early: who can invite users, who can change billing, who can transfer the account, and what you keep if the relationship ends. Verbal answers are not enough when media spend is material.",
        ],
        bullets: [
          "Client-owned: your org typically owns the Ads account and payments profile",
          "Agency-provisioned: clarify MCC owner, your role level, and exit rights in writing",
          "Both models run under the same Google Ads policies and review systems",
          "Access should use Google user invitations — not shared personal passwords",
        ],
      },
      {
        heading: "Manager account relationship",
        paragraphs: [
          "A manager account (historically called an MCC) is a control layer above one or more Google Ads accounts. It is not the same thing as the advertiser account where campaigns live. Agencies often use a manager account to grant cross-account access, standardize reporting, and organize billing relationships across clients or brands.",
          "Being linked under a manager account does not automatically mean the agency “owns” your advertising identity, and owning a manager account does not make every child account agency infrastructure. Map the hierarchy: which manager links to which Ads account, whether links are administrative or ownership-oriented in practice, and whether multiple brands share one manager tree. Shared trees create blast-radius risk when verification or policy issues appear.",
        ],
      },
      {
        heading: "Ownership, billing, permissions, and tracking",
        paragraphs: [
          "Ownership questions that matter: who controls the Google account that administers users, who owns the payments profile and billing setup, who can accept terms, and who can move conversion actions or linked assets. If those answers are fuzzy, fix them before you scale.",
          "Billing may sit on an agency payments profile, a client profile, or a hybrid depending on the setup. Confirm currency, invoicing vs automatic payments, who funds spend, what happens to prepaid or outstanding balances if an account is limited, and whether invoices reconcile to the Ads account you actually use. Do not invent assumptions about Google privileges a vendor cannot grant.",
          "Permissions should follow least privilege: campaign managers need campaign access; finance needs billing visibility; nobody needs personal Gmail passwords shared in Slack. Tracking continuity depends on who owns conversion actions, Google tags / gtag / Google Tag Manager containers, and linked Analytics properties — not only on which Ads account is spending this month.",
        ],
      },
      {
        heading: "Support, restrictions, and when agency infrastructure fits",
        paragraphs: [
          "Responsible agency setups usually include eligibility review (offer, markets, claim posture), onboarding into the correct account type, and a defined support path when delivery stops. Support quality varies. Prefer providers who describe process — diagnosis, documentation, account changes when contracted — over those who imply guaranteed restoration.",
          "Restrictions and suspensions can still happen on agency-linked accounts. Payment failures, destination issues, policy flags, and integrity reviews remain possible. Architecture may affect how quickly you can restructure or replace a spend node when the plan includes that; it does not rewrite Google’s policies.",
          "Consider agency infrastructure when spend continuity, funding workflows, multi-brand manager architecture, or contracted operational support matter more than owning every Ads account yourself — and when the provider will decline non-viable offers rather than force a launch. Stay client-owned when internal ownership is already clean, spend is manageable, and your team can handle billing and verification alone.",
        ],
        bullets: [
          "Fit for agency model: continuity, documented billing, multi-account ops support",
          "Fit for client-owned: clear internal ownership, modest complexity, strong in-house ops",
          "Never a fit: claims of policy bypass, invented Google partnership status, or guaranteed approvals",
        ],
      },
      {
        heading: "Questions before you onboard",
        paragraphs: [
          "Get answers in writing. Vague answers are a reason to wait.",
        ],
        bullets: [
          "Who owns the manager account, the Ads account, and the payments profile?",
          "What Google Ads roles will I receive, and how is access revoked?",
          "How is billing funded, topped up, and reconciled if an account is limited?",
          "Who owns conversion actions, tags, and Analytics links during and after the engagement?",
          "What happens operationally if the account is suspended — support scope vs what is not covered?",
          "Will you decline offers that look non-viable under current Google Ads policies?",
        ],
      },
    ],
    related: [
      {
        href: "/services/google-ads-agency-account",
        title: "Google Ads Agency Accounts",
        description: "Agency advertising infrastructure from Rahim Marketing",
      },
      {
        href: "/resources/google-ads-manager-account-vs-agency-account",
        title: "Manager Account vs Agency Account",
        description: "MCC, client Ads accounts, and agency-managed setups compared",
      },
      {
        href: "/resources/google-ads-billing-account-structure",
        title: "Google Ads Billing Structure",
        description: "Payments profiles, billing setup, and common ownership mistakes",
      },
      {
        href: "/resources/google-ads-account-suspended",
        title: "Google Ads Account Suspended",
        description: "Legitimate next steps when an account is limited",
      },
      {
        href: "/blog/google-ads-benchmarks-2026",
        title: "Google Ads Benchmarks 2026",
        description: "Performance context while you plan account structure",
      },
      {
        href: "/resources#google-ads",
        title: "Google Ads resource hub",
        description: "Guides and service links for Google advertising infrastructure",
      },
    ],
    cta: {
      href: "/request-access?service=google",
      label: "Request Google agency access",
    },
  },

  "google-ads-account-suspended": {
    slug: "google-ads-account-suspended",
    category: "Google Ads",
    title: "Google Ads Account Suspended: What It Means & What To Do",
    metaTitle: "Google Ads Suspended Account: Causes, Appeals & Next Steps",
    description:
      "What a Google Ads suspension means versus ad disapproval, common legitimate causes, immediate actions, what not to do, and when a professional review helps — without reinstatement promises.",
    h1: "Google Ads Account Suspended: What It Means & What To Do",
    subtitle:
      "Diagnose the layer, preserve evidence, and choose a legitimate path — restoration is never guaranteed.",
    sections: [
      {
        heading: "Suspension vs disapproval",
        paragraphs: [
          "An ad or asset disapproval usually blocks a creative, keyword, or landing path while the account can still operate. An account suspension (or broader account-level limitation) interrupts advertising ability at the account layer — campaigns stop, new spend may be blocked, and you may see policy or integrity notices that apply to the whole Ads account rather than one ad.",
          "Those states can stack. A streak of disapprovals does not automatically equal suspension, and a suspension is not “just another disapproval.” Read Google’s notice carefully: which policy or integrity category is cited, which account ID is affected, and whether billing, verification, or destination issues are mentioned. Capture screenshots and emails before you change settings.",
        ],
      },
      {
        heading: "Legitimate causes teams actually see",
        paragraphs: [
          "Causes are case-dependent and should be read from Google’s notice, not from industry rumor. Common pressure points include billing and payments-profile problems, Advertising Policies violations on offers or landing pages, misrepresentation or destination mismatch, repeated rejected activity, and account-integrity concerns when Google’s systems flag unusual patterns or ownership ambiguity.",
          "Website and destination issues matter: broken pages, cloaked or substantially different mobile experiences, misleading claims, or checkout flows that do not match ad promises. Payment failures and unresolved billing holds can look like policy dead ends until finance is fixed. Separate “cannot pay” from “policy flagged the offer” before you pick a response.",
        ],
        bullets: [
          "Billing / payments profile failures or unresolved payment holds",
          "Policy issues on ads, keywords, extensions, or landing pages",
          "Destination quality, mismatch, or broken conversion paths",
          "Integrity or verification concerns tied to account identity and activity",
          "Repeated relaunch of the same rejected offer without remediation",
        ],
      },
      {
        heading: "Immediate actions",
        paragraphs: [
          "Contain and document first. Do not rebuild three new accounts in the first hour unless you already understand ownership of billing, conversions, and manager links.",
        ],
        bullets: [
          "Screenshot the suspension notice, related emails, and any billing alerts — include timestamps and account IDs",
          "Confirm whether the Ads account, manager link, payments profile, or user access is the failing layer",
          "Stabilize billing: failed charges, payment method status, and who owns the payments profile",
          "Export or record campaign structure, conversion actions, and recent disapproval reasons while you still have visibility",
          "Map linked assets: Analytics, tags, Merchant Center (if used), and manager account relationships",
          "Pause aggressive relaunches of the identical rejected landing experience without changing the underlying issue",
        ],
      },
      {
        heading: "What not to do",
        paragraphs: [
          "Do not share personal Google passwords with vendors. Legitimate help uses Google Ads user invitations and manager-account linking. Password sharing creates security risk and muddies ownership if recovery is later needed.",
          "Do not create chaotic duplicate Ads accounts under unclear managers hoping volume alone fixes a policy or integrity issue. Sprawl makes diagnosis harder and can worsen trust problems when the offer and destination have not changed.",
          "Do not treat cloaking, mismatched “safe” landing pages, or claim-hiding as a recovery strategy. Those approaches increase long-term risk under current Google Ads policies. Fix the offer path and consistency — or pause advertising for that product — rather than trying to outmaneuver review.",
          "Do not spam appeals with identical text while continuing the same rejected activity. If you request a review, make it factual and tied to a real remediation or a clear error. Reinstatement is never guaranteed.",
        ],
      },
      {
        heading: "Appeals, reviews, and realistic expectations",
        paragraphs: [
          "When Google provides a review or appeal path, use it only after you understand what was flagged and whether you have actually fixed it. A useful submission is specific: account ID, notice category, what changed on the site or ads, and why you believe the account now complies — or why the notice appears incorrect based on facts you can show.",
          "An appeal is less useful when the product category cannot advertise under current policies, when claims cannot be made truthfully, or when billing identity is still broken. Decide appeal vs remediate-and-wait vs pause vs restructure based on diagnosis. Nobody outside Google can promise approval of a review.",
        ],
      },
      {
        heading: "When professional review helps",
        paragraphs: [
          "If spend is material, manager and billing ownership are tangled, or you are unsure whether the problem is payment, destination, or account integrity, an experienced review can prioritize the right lever. That typically means mapping notices, payments profile health, manager relationships, conversion ownership, and offer risk — not magic restoration.",
          "Professional help is not a reinstatement guarantee. Prefer advisors who speak in process language and will tell you when an offer should stay paused. Anyone selling fixed success rates or invented Google partnerships is overselling something Google alone controls.",
        ],
      },
    ],
    related: [
      {
        href: "/services/google-ads-agency-account",
        title: "Google Ads Agency Accounts",
        description: "Infrastructure and support when continuity matters",
      },
      {
        href: "/resources/google-ads-agency-account-guide",
        title: "Google Ads Agency Account Guide",
        description: "How agency access, ownership, and billing are structured",
      },
      {
        href: "/resources/google-ads-billing-account-structure",
        title: "Billing Account Structure",
        description: "Payments profiles and billing setup hygiene",
      },
      {
        href: "/resources#google-ads",
        title: "Google Ads resource hub",
        description: "Related Google Ads guides and service links",
      },
    ],
    cta: {
      href: "/request-access?service=google",
      label: "Request Google account review",
    },
  },

  "google-ads-manager-account-vs-agency-account": {
    slug: "google-ads-manager-account-vs-agency-account",
    category: "Google Ads",
    title: "Google Ads Manager Account vs Agency Account",
    metaTitle: "MCC vs Agency Account vs Client Ads Account Explained",
    description:
      "How a Google Ads manager account (MCC) differs from a client advertising account and from agency-managed infrastructure — ownership, permissions, billing, tracking, and use cases.",
    h1: "Google Ads Manager Account vs Agency Account",
    subtitle:
      "Three different things people conflate: the manager layer, the Ads account that spends, and agency-operated infrastructure.",
    sections: [
      {
        heading: "Three layers people mix up",
        paragraphs: [
          "A manager account (MCC) is a hierarchy and access layer above one or more Google Ads accounts. It helps agencies and in-house teams administer users, reporting, and account links. It is not where Search, YouTube, or Shopping campaigns usually live day to day.",
          "A client advertising account is the Google Ads account that holds campaigns, budgets, and most delivery settings. That is the spend node advertisers mean when they say “the account is spending.”",
          "“Agency account” in vendor language usually means agency-managed or agency-provisioned access to one or more of those Ads accounts — often under the agency’s manager tree — with billing and support defined by contract. It is a commercial/ops model, not a separate Google product that bypasses policies.",
        ],
      },
      {
        heading: "Ownership differences",
        paragraphs: [
          "Owning a manager account means you control which Ads accounts link under that tree and which users can administer the hierarchy. Owning the Ads account means you control campaigns, many settings, and (depending on billing setup) critical commercial identity for that spend node.",
          "In a clean client-owned model, the brand owns both the Ads account and ideally the manager that houses it — or at least keeps Ads-account ownership while agencies receive linked access. In an agency-managed model, the agency may own the manager and provision Ads accounts you operate under. Exit risk rises when you never documented who can unlink, transfer, or retain conversion history.",
        ],
        bullets: [
          "Manager ownership ≠ automatic ownership of every child Ads account’s commercial identity",
          "Ads-account ownership is what protects day-to-day campaign control and many asset links",
          "Agency-managed setups require written exit and revocation terms",
        ],
      },
      {
        heading: "Permissions and day-to-day control",
        paragraphs: [
          "Google Ads roles and manager-account access determine who can edit campaigns, view billing, or manage users. An agency can have broad manager access without “owning” your business; a contractor with admin on your Ads account can change more than a read-only manager link implies.",
          "Day-to-day control in the UI can feel identical whether the account is client-owned or agency-provisioned. The difference shows up when something breaks: who can change billing, who can invite finance users, who can accept policy-related requirements, and who you call when delivery stops.",
        ],
      },
      {
        heading: "Billing and tracking implications",
        paragraphs: [
          "Billing can attach at different points in the hierarchy depending on how payments profiles and billing setups are configured. A manager-centric invoicing arrangement is not the same as a client card on a single Ads account. Confirm which entity Google charges, which account IDs appear on invoices, and who can update payment methods.",
          "Tracking continuity depends on conversion-action ownership, tag containers, and linked Analytics — not on whether someone calls the setup an MCC or an agency account. If conversion actions only exist inside a disposable spend node you do not control, a later account change can scramble measurement even when the website still fires tags.",
        ],
      },
      {
        heading: "When each model fits",
        paragraphs: [
          "Use a manager account whenever you administer multiple Ads accounts — in-house or agency — and need centralized user and reporting control. That is standard hygiene, not “going agency.”",
          "Keep client-owned Ads accounts when ownership clarity and simple exits matter most, and your team can handle payments and verification. Consider agency-managed infrastructure when contracted funding workflows, provisioning, or continuity support matter more than owning every spend node — and when eligibility review is part of onboarding.",
          "Do not choose based on marketing language that invents Google partnership status or policy immunity. Choose based on ownership maps and written scope.",
        ],
        bullets: [
          "MCC alone: multi-account administration and access control",
          "Client Ads account: brand-owned spend with clear internal ownership",
          "Agency-managed: operational support and provisioning under a defined contract",
        ],
      },
      {
        heading: "Comparison checklist",
        paragraphs: [
          "Write this down before you switch models or hire a provider.",
        ],
        bullets: [
          "Who owns the manager account and each Ads account ID?",
          "Which payments profile funds which account?",
          "What roles does each party hold, and how is access revoked?",
          "Where do conversion actions and tags live if the spend node changes?",
          "Is support/replacement contractual — or only informal?",
        ],
      },
    ],
    related: [
      {
        href: "/resources/google-ads-agency-account-guide",
        title: "Google Ads Agency Account Guide",
        description: "Definition, access model, and evaluation criteria",
      },
      {
        href: "/resources/google-ads-billing-account-structure",
        title: "Google Ads Billing Structure",
        description: "Payments profiles, billing setups, and permissions",
      },
      {
        href: "/services/google-ads-agency-account",
        title: "Google Ads Agency Accounts",
        description: "Agency advertising infrastructure services",
      },
      {
        href: "/resources#google-ads",
        title: "Google Ads resource hub",
        description: "Guides across Google Ads account structure topics",
      },
    ],
    cta: {
      href: "/request-access?service=google",
      label: "Request Google agency access",
    },
  },

  "google-ads-billing-account-structure": {
    slug: "google-ads-billing-account-structure",
    category: "Google Ads",
    title: "Google Ads Billing Account Structure",
    metaTitle: "Google Ads Payments Profile & Billing Setup Guide",
    description:
      "How Google Ads payments profiles, billing setups, advertiser accounts, and manager accounts fit together — permissions, ownership, and common mistakes without invented Google privileges.",
    h1: "Google Ads Billing Account Structure",
    subtitle:
      "Billing is a hierarchy of identities. Get the map right before spend scales.",
    sections: [
      {
        heading: "Why billing structure matters",
        paragraphs: [
          "When Google Ads spend fails, teams often chase campaign settings first. Many outages start in billing identity: the wrong payments profile, an incomplete billing setup, users without permission to fix payments, or confusion about which Ads account is actually being charged.",
          "Clean billing structure does not create special Google privileges and does not exempt you from Advertising Policies. It reduces self-inflicted downtime, invoice chaos, and ownership disputes when agencies, finance, and media buyers all touch the same accounts.",
        ],
      },
      {
        heading: "Payments profile vs billing setup vs Ads account",
        paragraphs: [
          "A payments profile is the commercial identity Google uses for payments — typically a business or individual profile with tax and payment details. A billing setup connects that profile to advertising activity for a given account context. The Google Ads advertiser account is where campaigns spend; it is not interchangeable with the payments profile.",
          "Treat them as linked but distinct. You can have healthy campaigns and a broken payments profile. You can also have a valid profile that is not correctly attached to the Ads account you think you are funding. Always verify the account ID on invoices against the account ID in the Google Ads UI.",
        ],
        bullets: [
          "Payments profile = who pays / commercial identity",
          "Billing setup = how that profile connects to Ads spend",
          "Ads account = where campaigns and budgets live",
          "Manager account = administration layer; not a substitute for clear billing ownership",
        ],
      },
      {
        heading: "Manager accounts and billing",
        paragraphs: [
          "Manager accounts can organize multiple Ads accounts and, depending on configuration, participate in how access and invoicing are administered. That does not mean “the MCC pays for everything” in a vague sense — it means you must document which entity funds which child account and who can change payment methods.",
          "Agencies sometimes consolidate invoicing under structures they control. Clients sometimes insist on paying with their own profile on accounts they own. Both can work. Problems appear when media buyers assume funds move automatically between accounts, or when prepaid expectations are never written down.",
        ],
      },
      {
        heading: "Permissions that finance actually needs",
        paragraphs: [
          "Campaign edit access is not the same as billing access. If only one contractor can update cards, finance cannot resolve a failed payment at 2 a.m. If everyone has billing admin, accidental changes and messy audit trails become likely.",
          "Grant billing roles to named finance owners, keep agency access scoped to what the engagement requires, and review users when staff or vendors leave. Never share personal Google passwords to “just fix billing.” Use proper user invitations.",
        ],
      },
      {
        heading: "Ownership and agency arrangements",
        paragraphs: [
          "In client-owned models, the brand typically owns the payments profile and the Ads account. In agency-funded models, the agency may control the profile that Google charges while granting you campaign access. Confirm currency, invoice recipients, refund or credit handling if any, and what happens to balances if an Ads account is limited or replaced.",
          "Do not assume a provider can grant unofficial Google payment privileges, higher “trust scores,” or policy exemptions through billing tricks. Prefer clear contracts over folklore.",
        ],
      },
      {
        heading: "Common mistakes",
        paragraphs: [
          "Most billing pain is preventable with a short ownership diagram.",
        ],
        bullets: [
          "Mixing personal and business payments profiles without documenting which funds which Ads account",
          "Letting contractors remain billing admins after the project ends",
          "Assuming prepaid or credit balances transfer automatically between Ads accounts",
          "Ignoring tax/business details on the payments profile until invoices fail",
          "Treating manager-account access as proof of billing ownership",
          "Scaling spend before finance can see invoices for the correct account IDs",
        ],
      },
      {
        heading: "Setup checklist before you scale",
        paragraphs: [
          "Run this once, then revisit when you add brands, agencies, or new manager trees.",
        ],
        bullets: [
          "Named owner for payments profile, billing setup, and each Ads account ID",
          "Finance users with appropriate billing permissions — and a revocation process",
          "Written note on who funds spend in agency vs client-owned models",
          "Invoice and currency expectations confirmed with whoever pays",
          "Plan if an account is limited: which profile still exists, who can open a support path, what is not covered",
        ],
      },
    ],
    related: [
      {
        href: "/resources/google-ads-agency-account-guide",
        title: "Google Ads Agency Account Guide",
        description: "How agency setups handle access and funding workflows",
      },
      {
        href: "/resources/google-ads-manager-account-vs-agency-account",
        title: "Manager vs Agency Account",
        description: "MCC, client Ads accounts, and agency-managed models",
      },
      {
        href: "/services/google-ads-agency-account",
        title: "Google Ads Agency Accounts",
        description: "Agency infrastructure with clear billing questions up front",
      },
      {
        href: "/resources#google-ads",
        title: "Google Ads resource hub",
        description: "Structure, suspension, and agency guides in one place",
      },
    ],
    cta: {
      href: "/request-access?service=google",
      label: "Request Google agency access",
    },
  },

  "tiktok-agency-account-guide": {
    slug: "tiktok-agency-account-guide",
    category: "TikTok Ads",
    title: "What Is a TikTok Agency Account?",
    metaTitle: "TikTok Agency Ad Account Guide: Business Center & Access",
    description:
      "How TikTok agency advertising accounts work — Business Center ownership, advertiser permissions, billing, tracking, limitations, and who agency infrastructure is for.",
    h1: "What Is a TikTok Agency Account?",
    subtitle:
      "Agency access on TikTok is an operations model inside Business Center — not a policy exemption.",
    sections: [
      {
        heading: "A practical definition",
        paragraphs: [
          "A TikTok agency account typically means advertising access structured through an agency: you operate inside a TikTok Ads advertiser account tied to a Business Center, with documented roles, billing workflows, and support. Vendors use the phrase loosely — sometimes it means partner access into an agency Business Center, sometimes a dedicated advertiser account with replacement or funding terms. Ask what you receive before you compare prices.",
          "TikTok Advertising Policies and review systems still apply. Agency infrastructure does not invent platform partnership status or guarantee that every creative, spark ad setup, or landing experience will be approved.",
        ],
      },
      {
        heading: "Business Center, ownership, and access",
        paragraphs: [
          "TikTok Business Center is the organization layer for assets, members, partner relationships, and advertiser accounts. Legitimate agency access uses Business Center member roles and partner invitations — not shared personal TikTok or email passwords.",
          "Clarify who owns the Business Center that houses the advertiser account, what role you receive (admin vs operator-level access on ads), what the agency can see, and how access is revoked when the engagement ends. Ownership mistakes show up later as locked pixels, orphaned ad accounts, or partners who still have spend visibility after offboarding.",
        ],
        bullets: [
          "Map Business Center owner, advertiser account owner, and your exact role",
          "Prefer written diagrams over Slack assumptions",
          "Never share personal passwords to “speed up” onboarding",
          "Confirm exit: what you keep, what the agency retains, how partners are removed",
        ],
      },
      {
        heading: "Advertiser permissions, billing, and tracking",
        paragraphs: [
          "Day-to-day media buying happens in the ad account / Ads Manager experience under permissions granted through Business Center. Finance and admin capabilities may be split; do not assume campaign access includes billing control.",
          "Billing may be agency-funded, client-funded, or hybrid depending on the account and provider. Confirm currency, top-up lead times, invoice ownership, and what happens to balances if an ad account is limited. Do not assume balances transfer between advertiser accounts automatically.",
          "Tracking continuity depends on who owns pixels/events, which Business Center holds them, and whether app or web events are documented. If measurement only exists on a disposable advertiser node you do not control, a later account change can scramble optimization even when the site still fires tags.",
        ],
      },
      {
        heading: "Limitations to expect",
        paragraphs: [
          "Agency access does not remove creative review, advertiser verification requirements, or industry restrictions under current TikTok policies. Certain verticals need extra scrutiny during eligibility review; responsible providers will decline non-viable offers rather than burn infrastructure.",
          "Delivery, audience tools, and format availability can also vary by account type, market, and product availability. Treat feature checklists as “confirm on the live account,” not as universal promises.",
        ],
      },
      {
        heading: "Who agency infrastructure is for",
        paragraphs: [
          "Self-serve Business Center setups are enough for many advertisers with clean ownership, manageable spend, and internal capacity to handle verification and payments. Agency-structured access becomes relevant when continuity, funding workflows, multi-brand Business Center architecture, or contracted operational support matter more than owning every advertiser account yourself.",
          "Choose based on operational fit and written scope. Prefer providers who explain permissions, billing, and restriction response in process language — and who do not claim policy bypass or guaranteed approvals.",
        ],
        bullets: [
          "Strong fit: higher operational complexity, continuity needs, clear eligibility review",
          "Weak fit: tiny tests with no ownership map and pressure to launch before review",
          "Red flags: password requests, invented partnership claims, guaranteed delivery language",
        ],
      },
      {
        heading: "Questions before granting access",
        paragraphs: [
          "Get these answers in writing before spend starts.",
        ],
        bullets: [
          "Who owns the Business Center and the advertiser account?",
          "What permissions will I receive, and how is partner access revoked?",
          "How is billing funded and reconciled if the ad account is limited?",
          "Who owns pixels/events and what happens to them at offboarding?",
          "What support is included when ads or accounts are restricted — and what is not?",
        ],
      },
    ],
    related: [
      {
        href: "/services/tiktok-agency-account",
        title: "TikTok Agency Ad Accounts",
        description: "TikTok agency advertising infrastructure from Rahim Marketing",
      },
      {
        href: "/resources/tiktok-business-center-vs-agency-account",
        title: "Business Center vs Agency Account",
        description: "BC, ad accounts, and agency-managed setups compared",
      },
      {
        href: "/resources/tiktok-ad-account-access-permissions",
        title: "TikTok Access & Permissions",
        description: "Roles, partner access, and safe revocation practices",
      },
      {
        href: "/resources/tiktok-ad-account-suspended",
        title: "TikTok Ad Account Suspended",
        description: "Legitimate response when advertising is limited",
      },
      {
        href: "/resources#tiktok-ads",
        title: "TikTok Ads resource hub",
        description: "Guides and service links for TikTok advertising",
      },
    ],
    cta: {
      href: "/request-access?service=tiktok",
      label: "Request TikTok agency access",
    },
  },

  "tiktok-ad-account-suspended": {
    slug: "tiktok-ad-account-suspended",
    category: "TikTok Ads",
    title: "TikTok Ad Account Suspended: Types & Legitimate Next Steps",
    metaTitle: "TikTok Ad Account Suspended: Review Steps Without Shortcuts",
    description:
      "How TikTok ad account suspensions differ from campaign rejects — verification, destination and creative issues, legitimate review paths, and what not to do. No circumvention advice.",
    h1: "TikTok Ad Account Suspended: Types & Legitimate Next Steps",
    subtitle:
      "Identify whether the problem is a campaign, the advertiser account, or Business Center — then respond without making it worse.",
    sections: [
      {
        heading: "Suspension types vs campaign problems",
        paragraphs: [
          "A rejected ad or ineligible campaign usually blocks a creative, audience, or placement while the advertiser account can still operate. An ad account suspension or broader advertising disablement interrupts spend at the account layer — you may be unable to run new campaigns even if individual creatives looked fine last week.",
          "Business Center or verification problems can also cascade: member access fails, assets become unusable, or multiple advertiser accounts under one BC are affected together. Start by identifying the layer TikTok’s notice names — campaign, ad account, payment, verification, or organization — before you rebuild anything.",
        ],
      },
      {
        heading: "Verification, destination, and creative pressure points",
        paragraphs: [
          "Exact causes are case-dependent; TikTok’s notice is the primary source. Common pressure points include incomplete or failed advertiser verification, payment issues, creative that violates Advertising Policies, landing pages that mismatch claims or break on mobile, and repeated rejected activity without remediation.",
          "Destination quality matters: slow or broken pages, misleading offers, and experiences that diverge from ad promises create review risk. Creative risk includes prohibited claims, misleading before/after framing, and industry-restricted content under current TikTok policies. Fix the substance; do not look for evasion tactics.",
        ],
        bullets: [
          "Read the in-platform notice and related email — capture account IDs and timestamps",
          "Check verification and Business Center health before assuming “creative only”",
          "Inspect landing pages and app store destinations for match and functionality",
          "Review recent reject reasons; patterns beat isolated anecdotes",
        ],
      },
      {
        heading: "Immediate legitimate actions",
        paragraphs: [
          "Document and contain. Preserve evidence while you still have visibility.",
        ],
        bullets: [
          "Screenshot notices, policy categories, and billing or verification alerts",
          "Confirm which layer is limited: campaign, advertiser account, BC, payment, or user access",
          "Stabilize payments and confirm who still has admin in Business Center",
          "Export or record campaign structure and pixel/event ownership details",
          "Pause identical relaunches of the same rejected offer path without changes",
        ],
      },
      {
        heading: "What not to do",
        paragraphs: [
          "Do not share personal TikTok or email passwords with vendors. Legitimate help uses Business Center roles and partner access.",
          "Do not spawn duplicate Business Centers and advertiser accounts in a panic without an ownership map. Sprawl makes diagnosis harder and can worsen trust problems when the offer has not changed.",
          "Do not use cloaking, bait-and-switch landing pages, or claim-hiding as a recovery plan. Those approaches increase long-term risk under current TikTok policies and are not a substitute for eligibility.",
          "Do not spam review requests with the same text while continuing the same rejected activity. If a review path exists, use it after factual remediation. Restoration is never guaranteed.",
        ],
      },
      {
        heading: "Legitimate review and when help is useful",
        paragraphs: [
          "When TikTok provides an appeal or review mechanism, submit facts: what was flagged, what you changed, and why you believe the account now complies — or why the notice appears incorrect based on evidence. A review is less useful when the vertical cannot advertise under current policies or when verification/payment identity is still broken.",
          "Professional review helps when spend is material, permissions are tangled across partners, or you cannot tell whether to remediate, pause, or restructure. It is not a reinstatement promise. Prefer advisors who will tell you to keep an offer offline when it is not viable.",
        ],
      },
      {
        heading: "Continuity checklist after a limit",
        paragraphs: [
          "Before you move budget elsewhere, confirm the following.",
        ],
        bullets: [
          "Named owners for Business Center, advertiser account, and billing",
          "Pixel/event ownership still accessible if the spend node stays limited",
          "Partner list reviewed — remove unused agencies and contractors",
          "Written decision: remediate and review, pause the offer, or restructure cleanly",
        ],
      },
    ],
    related: [
      {
        href: "/services/tiktok-agency-account",
        title: "TikTok Agency Ad Accounts",
        description: "Infrastructure and support when continuity matters",
      },
      {
        href: "/resources/tiktok-agency-account-guide",
        title: "TikTok Agency Account Guide",
        description: "How agency access and Business Center ownership work",
      },
      {
        href: "/resources/tiktok-ad-account-access-permissions",
        title: "Access & Permissions",
        description: "Roles, partners, and secure revocation",
      },
      {
        href: "/resources#tiktok-ads",
        title: "TikTok Ads resource hub",
        description: "Related TikTok advertising guides",
      },
    ],
    cta: {
      href: "/request-access?service=tiktok",
      label: "Request TikTok account review",
    },
  },

  "tiktok-business-center-vs-agency-account": {
    slug: "tiktok-business-center-vs-agency-account",
    category: "TikTok Ads",
    title: "TikTok Business Center vs Agency Account",
    metaTitle: "TikTok Business Center vs Ad Account vs Agency Setup",
    description:
      "How TikTok Business Center differs from an ad account and from agency-managed infrastructure — ownership, partner access, permissions, billing, and real-world scenarios.",
    h1: "TikTok Business Center vs Agency Account",
    subtitle:
      "Business Center is the organization layer. The ad account spends. “Agency account” is usually a commercial access model.",
    sections: [
      {
        heading: "Separate the objects",
        paragraphs: [
          "TikTok Business Center (BC) is the organization container for members, partners, assets, and advertiser accounts. It is where you manage who can touch what. It is not the same thing as a single campaign.",
          "An ad account (advertiser account) is the spend node where campaigns, budgets, and delivery settings live. That is what media buyers open when they say “the account is live.”",
          "“Agency account” in sales language usually means agency-provisioned or agency-managed access to advertiser accounts — often inside an agency-owned or partner-linked Business Center — with billing and support defined by agreement. It is not a secret TikTok product that rewrites Advertising Policies.",
        ],
      },
      {
        heading: "Ownership and partner access",
        paragraphs: [
          "Owning the Business Center means you control members, partners, and how assets are assigned. Owning or administering the ad account determines who can change campaigns and, depending on setup, who influences billing visibility.",
          "Partner access lets an external Business Center collaborate without handing over personal logins. That is the correct pattern for agencies. Document whether you invited the agency into your BC, whether they invited you into theirs, or whether you received roles on a dedicated advertiser account they control. Each pattern has different blast-radius and exit implications.",
        ],
        bullets: [
          "Your BC + partner agency: strong ownership retention when configured carefully",
          "Agency BC + your member access: clarify exit and asset retention in writing",
          "Never substitute partner access with shared personal passwords",
        ],
      },
      {
        heading: "Permissions in practice",
        paragraphs: [
          "BC-level roles and ad-account-level permissions are related but not identical. Someone can help manage organization settings without needing full campaign control — or the reverse. Over-permissioning is a common failure mode after multiple vendors rotate through the same BC.",
          "Review members and partners on a schedule. Remove departed freelancers. Confirm finance and admin roles are held by people who still work on the account. Permissions hygiene is security and continuity, not bureaucracy.",
        ],
      },
      {
        heading: "Billing scenarios",
        paragraphs: [
          "Client-owned models typically fund ad accounts under a Business Center and payments setup the brand controls. Agency-funded models may charge through structures the agency controls while you retain campaign access. Confirm currency, who receives invoices, and what happens to balances if an advertiser account is limited.",
          "Do not assume that calling something an “agency account” automatically includes credit lines, replacement balances, or platform privileges. Those terms exist only if written — and none of them exempt you from TikTok policies.",
        ],
      },
      {
        heading: "When each setup fits",
        paragraphs: [
          "Run a straightforward Business Center with client-owned ad accounts when ownership clarity matters most and your team can handle verification, payments, and partner invites. Add a manager-style agency relationship via partner access when you want outside operators without giving up BC ownership.",
          "Consider agency-managed infrastructure when provisioning, funding workflows, or continuity support are the bottleneck — and when the provider runs eligibility review before launch. Choose with an ownership diagram, not with marketing adjectives.",
        ],
      },
      {
        heading: "Decision checklist",
        paragraphs: [
          "Answer these before you move spend or accept a new partner invite.",
        ],
        bullets: [
          "Who owns the Business Center and each advertiser account ID?",
          "Is the agency a partner on your BC, or are you a member on theirs?",
          "Which party controls billing, and what happens at offboarding?",
          "Where do pixels/events live if the spend node changes?",
          "What permissions are required — and which can stay read-only?",
        ],
      },
    ],
    related: [
      {
        href: "/resources/tiktok-agency-account-guide",
        title: "TikTok Agency Account Guide",
        description: "Definition, access, billing, and evaluation criteria",
      },
      {
        href: "/resources/tiktok-ad-account-access-permissions",
        title: "TikTok Permissions Guide",
        description: "Roles, partner access, and revocation",
      },
      {
        href: "/services/tiktok-agency-account",
        title: "TikTok Agency Ad Accounts",
        description: "Agency advertising infrastructure services",
      },
      {
        href: "/resources#tiktok-ads",
        title: "TikTok Ads resource hub",
        description: "Guides across TikTok account structure topics",
      },
    ],
    cta: {
      href: "/request-access?service=tiktok",
      label: "Request TikTok agency access",
    },
  },

  "tiktok-ad-account-access-permissions": {
    slug: "tiktok-ad-account-access-permissions",
    category: "TikTok Ads",
    title: "TikTok Ad Account Access & Permissions",
    metaTitle: "TikTok Business Center Roles & Partner Access Guide",
    description:
      "How TikTok Business Center roles, partner access, and advertiser permissions should work — security hygiene, revocation, and why you should never share personal passwords.",
    h1: "TikTok Ad Account Access & Permissions",
    subtitle:
      "Least privilege, named owners, and clean offboarding beat shared logins every time.",
    sections: [
      {
        heading: "Why permissions are a spend-risk issue",
        paragraphs: [
          "Most TikTok account chaos is not mysterious. It is over-permissioned partners, forgotten members, unclear admin ownership, and media buyers who inherited access through a personal login someone shared years ago. When something is limited or a vendor relationship ends, nobody can tell who still has control.",
          "Good permission design does not make non-eligible offers compliant. It keeps operations auditable, reduces lockouts, and limits blast radius when a contractor or agency leaves.",
        ],
      },
      {
        heading: "Business Center roles vs advertiser access",
        paragraphs: [
          "Business Center roles govern organization-level capabilities: managing members, partners, and asset assignment. Advertiser / ad account permissions govern who can create campaigns, edit ads, or view performance inside a specific spend node.",
          "People often conflate “I can open Ads Manager” with “I am an org admin.” Separate those needs. A media buyer may need campaign access without the ability to invite new partners. Finance may need billing visibility without creative edit rights. Match roles to jobs.",
        ],
        bullets: [
          "BC admin/owner capabilities are broader than campaign editing",
          "Advertiser access should be scoped to the accounts someone actually runs",
          "Reporting-only access is often enough for stakeholders who do not buy media",
        ],
      },
      {
        heading: "Partner access done correctly",
        paragraphs: [
          "When an agency needs to operate, invite them through Business Center partner or member flows that TikTok provides. Define which advertiser accounts they can use, what they can edit, and how long access should last.",
          "Avoid building critical structure only inside a partner’s Business Center unless the contract and exit plan are explicit. If the agency owns the only BC that holds your pixel and ad account, offboarding becomes a commercial and technical project — not a toggle.",
        ],
      },
      {
        heading: "Security basics that prevent expensive mistakes",
        paragraphs: [
          "Never share personal TikTok, email, or device passwords with agencies, freelancers, or “account specialists.” Shared passwords destroy accountability, complicate recovery, and are unnecessary when Business Center invitations exist.",
          "Use unique user identities for each person. Disable access when people leave. Prefer SSO or strong authentication practices where your organization supports them. Treat ad accounts like payment systems — because they spend money.",
        ],
      },
      {
        heading: "Revoking access cleanly",
        paragraphs: [
          "Revocation should be a checklist, not a memory exercise. When a campaign sprint ends or a vendor is replaced, remove their member or partner access, confirm they cannot open advertiser accounts, rotate any tokens or shared assets they touched, and record who remains admin.",
          "If you cannot name the remaining Business Center admins in one sentence, fix that before you scale spend. Orphaned admin access is how teams lose accounts after staff turnover.",
        ],
        bullets: [
          "Remove partners and members the same week the engagement ends",
          "Confirm advertiser-account roles after BC-level changes",
          "Document remaining admins and finance owners",
          "Re-check pixel/event permissions after partner removal",
        ],
      },
      {
        heading: "Permissions checklist for agencies and in-house teams",
        paragraphs: [
          "Use this before launch and again at quarterly review.",
        ],
        bullets: [
          "Named internal owner for Business Center admin",
          "Agency access via official partner/member invites — never personal passwords",
          "Least-privilege roles for buyers, creatives, and finance",
          "Written offboarding steps in the SOW or internal runbook",
          "Inventory of advertiser accounts each partner can still open",
          "Tracking assets owned under a BC your team can still access after vendor changes",
        ],
      },
    ],
    related: [
      {
        href: "/resources/tiktok-agency-account-guide",
        title: "TikTok Agency Account Guide",
        description: "How agency setups should grant access and ownership",
      },
      {
        href: "/resources/tiktok-business-center-vs-agency-account",
        title: "Business Center vs Agency Account",
        description: "BC, ad accounts, and agency-managed models",
      },
      {
        href: "/services/tiktok-agency-account",
        title: "TikTok Agency Ad Accounts",
        description: "Agency infrastructure with clear permission questions",
      },
      {
        href: "/resources#tiktok-ads",
        title: "TikTok Ads resource hub",
        description: "Related TikTok Ads guides and services",
      },
    ],
    cta: {
      href: "/request-access?service=tiktok",
      label: "Request TikTok agency access",
    },
  },
};
