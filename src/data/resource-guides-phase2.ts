import type { ResourceGuide } from "./resource-guides";

export const phase2ResourceGuides: Record<string, ResourceGuide> = {
  "meta-agency-account-vs-standard-ad-account": {
    slug: "meta-agency-account-vs-standard-ad-account",
    category: "Meta Advertising",
    title: "Meta Agency Account vs Standard Ad Account",
    metaTitle: "Meta Agency Account vs Standard Ad Account: Key Differences",
    description:
      "How Meta agency ad accounts differ from standard self-serve ad accounts — ownership, billing, permissions, spend capacity, and when each model fits.",
    h1: "Meta Agency Account vs Standard Ad Account",
    subtitle:
      "A practical comparison for advertisers choosing between self-serve and agency-structured Meta spend — without policy immunity claims.",
    sections: [
      {
        heading: "The real difference in one paragraph",
        paragraphs: [
          "A standard Meta ad account is typically created and funded inside your own Business Manager: you own the node, attach your payment method, and run campaigns under your team’s roles. A Meta agency ad account is advertising access structured through an agency or partner setup — often agency-provisioned spend nodes, partner permissions into a Business Manager, documented billing workflows, and (when contracted) operational support such as replacement or top-up paths. Both run inside Ads Manager under current Meta Advertising Policies. The difference is infrastructure and process, not a separate rulebook.",
          "Industry language blurs the line. “Agency account” can mean partner access on an agency BM, an advertiser role on a shared node, or a dedicated structure with replacement terms. Ask what you actually receive before you compare prices.",
        ],
      },
      {
        heading: "Ownership, permissions, and day-to-day control",
        paragraphs: [
          "On a standard account, ownership is usually straightforward: your Business Manager holds the ad account, Pages, and datasets if you set them up that way. You control admins, finance roles, and partner invites. That clarity is an advantage when spend is modest and your team can handle verification, payments, and occasional limits alone.",
          "On an agency setup, ownership splits across parties by design. The agency may own the Business Manager that houses the spend node while granting you advertiser or admin access through Meta’s partner or user invitation flows. You should still refuse personal Facebook password sharing — legitimate access uses Business Manager roles. Before onboarding, map who owns the BM, Pages, domains, and Pixel/Dataset during and after the engagement, and how access is revoked when you leave.",
          "Day-to-day control can feel similar in Ads Manager. The operational gap shows up when something breaks: who you escalate to, whether replacement is in scope, and whether measurement assets were designed to survive a spend-node change.",
        ],
        bullets: [
          "Standard: your BM usually owns the ad account unless you invited partners",
          "Agency: clarify BM owner, your role level, and exit/revocation steps in writing",
          "Never share personal Facebook passwords in either model",
          "Pages and datasets should have named owners — not “whoever set it up last year”",
        ],
      },
      {
        heading: "Billing and spend capacity",
        paragraphs: [
          "Standard accounts typically fund with a card or other payment methods you attach yourself. Limits, failed charges, and currency are your responsibility. That model is simple until spend rises, payment friction appears, or you need multi-brand funding workflows your finance team cannot support alone.",
          "Agency setups may use agency-controlled payment methods, prepaid top-ups, or hybrid funding depending on the provider and account type. Confirm currency, lead times, what happens to prepaid balance if a node is limited, and whether balances transfer. Do not assume prepaid funds move automatically between accounts.",
          "Spend capacity is often why advertisers evaluate agency infrastructure — not because agency nodes are “immune,” but because operational support and replacement (when included) can matter when a single self-serve node becomes a bottleneck. Capacity still depends on Meta’s systems, account history, and offer risk under current policies.",
        ],
      },
      {
        heading: "Restrictions: what changes and what does not",
        paragraphs: [
          "Restrictions can happen on standard accounts and on agency infrastructure. Creative rejects, payment issues, Page problems, and Business Manager health still matter. Agency access does not rewrite Meta Advertising Policies or guarantee delivery for a non-viable offer.",
          "What often changes is the response path. Self-serve teams appeal or rebuild themselves. Agency plans may include triage, appeal support, or replacement of a spend node when the written scope says so. Continuity still depends on whether Pixel/Dataset and domain ownership sit on durable assets rather than only on a disposable ad account.",
          "If a provider implies that agency accounts bypass review, treat that as a red flag. Prefer process language: eligibility review, clear permissions, documented billing, honest restriction talk.",
        ],
      },
      {
        heading: "When standard is enough — and when agency fits",
        paragraphs: [
          "Stay on standard self-serve when ownership is already clean inside your company, spend is manageable on one or a few nodes, your team can handle payments and verification, and you do not need contracted replacement workflows. Simpler structures are easier to audit and exit.",
          "Consider agency-structured access when spend continuity, multi-brand architecture, funding workflows, or replacement support matter more than owning every spend node yourself — and when a provider will review offer eligibility rather than force a risky launch live. Choose based on operational fit and written scope, not marketing claims about immunity or unofficial Meta partnership status.",
        ],
        bullets: [
          "Standard fits: clear internal ownership, modest-to-moderate spend, internal ops capacity",
          "Agency fits: continuity, support paths, and architecture that protect measurement across nodes",
          "Neither model: guaranteed approvals, guaranteed restoration, or policy exemptions",
        ],
      },
      {
        heading: "Decision checklist before you switch models",
        paragraphs: [
          "Write answers before you move spend. Vague answers are a reason to wait.",
        ],
        bullets: [
          "Who owns BM, Pages, domains, and Pixel/Dataset under each option?",
          "How is billing funded, topped up, and reconciled if a node is limited?",
          "What permissions will partners need, and how is access revoked?",
          "Is replacement or appeal support in the contract — or only informal?",
          "Will the provider decline non-viable offers under current Meta policies?",
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
        href: "/resources/meta-agency-ad-account-guide",
        title: "What Is a Meta Agency Ad Account?",
        description: "How agency setups work, ownership, and evaluation criteria",
      },
      {
        href: "/resources/meta-business-manager-permissions",
        title: "Meta Business Manager Permissions Guide",
        description: "Roles, partner access, and safe agency permissions",
      },
    ],
    cta: {
      href: "/request-access?service=facebook",
      label: "Request Facebook agency access",
    },
  },

  "meta-pixel-capi-account-structure": {
    slug: "meta-pixel-capi-account-structure",
    category: "Meta Advertising",
    title: "Meta Pixel, Dataset & CAPI: How They Relate to Ad Accounts",
    metaTitle: "Meta Pixel, Dataset & CAPI Account Structure Explained",
    description:
      "How Meta Pixel, Dataset, Conversions API, domains, and ad accounts fit together — ownership, event continuity, and structure that survives spend-node changes.",
    h1: "Meta Pixel, Dataset & CAPI: How They Relate to Ad Accounts",
    subtitle:
      "Measurement assets are not the same as spend nodes. Structure them so optimization history can outlive a single ad account.",
    sections: [
      {
        heading: "Start with the asset map",
        paragraphs: [
          "In Meta’s current advertising stack, the browser Pixel and related server events typically connect through a Dataset (the measurement container advertisers manage in Events Manager). Ad accounts spend against campaigns; they are not the durable home for your event definition. Domains you verify, Pages you advertise from, and CAPI destinations you configure are related but distinct assets.",
          "Confusion starts when teams treat “the Pixel on the ad account” as one object. Operationally you want: a Dataset your business still controls if one ad account is limited; domain verification under a Business Manager you can access; and CAPI sending to that same Dataset with documented owners. Spend nodes can be replaceable. Measurement identity should not be accidental.",
        ],
      },
      {
        heading: "Pixel / Dataset vs ad account",
        paragraphs: [
          "An ad account is a spend and delivery container. A Dataset holds event configuration, access permissions for people and partners, and the connection point for browser and server events. You can share a Dataset with multiple ad accounts when permissions and architecture allow — which is often desirable when spend may move between nodes.",
          "If the only place your event history “lives” is tied to a disposable or partner-controlled spend node with no clear Dataset ownership path, a restriction or account change can scramble optimization and reporting even when the website still fires tags. Prefer Dataset ownership under a Business Manager your team can still open, then grant ad accounts access to use that Dataset.",
          "This is hygiene, not a workaround. Clean measurement structure does not make a non-eligible offer compliant. It reduces self-inflicted chaos when infrastructure changes under current Meta systems.",
        ],
        bullets: [
          "Ad account = where you spend and manage campaigns",
          "Dataset / Pixel = where events are defined and shared",
          "Domain verification = business identity for the site, separate from any one campaign",
          "CAPI = server-side event stream into the same Dataset when configured correctly",
        ],
      },
      {
        heading: "Where Conversions API fits",
        paragraphs: [
          "Conversions API (CAPI) sends events from your server, CRM, or gateway to Meta so browser-only measurement is not your only signal. It complements the Pixel; it does not replace the need for a coherent Dataset and domain setup. Event names, parameters, and deduplication logic should match how you defined browser events so Meta can reconcile duplicates rather than double-count.",
          "Document the CAPI destination: which Dataset receives events, which system sends them (tag manager server, Shopify, custom backend), who can rotate tokens, and what breaks if a partner is removed. Token sprawl and undocumented endpoints are common failure modes after agency or contractor changes.",
          "For health-adjacent and ecommerce offers — including peptide brands that already cleared eligibility — CAPI continuity matters because purchase and lead quality signals often drive optimization. Continuity still assumes the offer and landing path can run under current Meta policies; tracking cannot invent eligibility.",
        ],
      },
      {
        heading: "Recommended ownership pattern",
        paragraphs: [
          "A durable pattern many teams aim for: Business Manager your company controls holds domain verification and the primary Dataset; ad accounts (self-serve or agency-provisioned) receive permission to use that Dataset; CAPI points at the same Dataset; Pages used for advertising are owned or properly assigned under the same intentional structure.",
          "When working with an agency, decide whether they receive partner access to your Dataset, whether you share events into a Dataset they control, or whether each party keeps separate measurement (usually worse for continuity). Prefer written diagrams over Slack assumptions. If replacement of spend nodes is part of the plan, Dataset ownership on your side is usually the safer default.",
        ],
      },
      {
        heading: "Event continuity checklist",
        paragraphs: [
          "Before you scale or migrate accounts, verify the following. Fix gaps before you move budget.",
        ],
        bullets: [
          "Named internal owner for Dataset, domain verification, and CAPI credentials",
          "Ad accounts that spend can access the intended Dataset — confirmed in Events Manager / BM settings",
          "Browser and server events use consistent names and IDs for deduplication",
          "Partner access reviewed: remove departed vendors; no personal password sharing",
          "Fallback plan if one ad account is limited: which Dataset still receives events, who still has admin",
        ],
      },
      {
        heading: "What this structure does not do",
        paragraphs: [
          "Good Pixel/Dataset/CAPI architecture does not bypass Meta review, hide landing-page claims, or restore restricted accounts. It does not create Meta partnership status. It supports attribution and optimization when you are advertising offers that can run under current policies — and it makes rebuilds less painful when a spend node changes.",
          "If measurement is broken, fix ownership and event quality. If ads are rejected for claims or eligibility, fix the offer path. Do not confuse those workstreams.",
        ],
      },
    ],
    related: [
      {
        href: "/services/facebook-agency-ad-account",
        title: "Facebook Agency Ad Accounts",
        description: "Agency infrastructure with clear tracking ownership questions",
      },
      {
        href: "/resources/meta-agency-ad-account-guide",
        title: "Meta Agency Ad Account Guide",
        description: "How agency setups handle access, billing, and continuity",
      },
      {
        href: "/resources/peptide-meta-tracking-capi",
        title: "Peptide Meta Tracking & CAPI",
        description: "Ecommerce event continuity for peptide Meta advertisers",
      },
      {
        href: "/services/peptides-meta-ads",
        title: "Peptides Meta Ads Structure",
        description: "Infrastructure packs when measurement and compliance both matter",
      },
    ],
    cta: {
      href: "/request-access?service=facebook",
      label: "Request Meta infrastructure review",
    },
  },

  "meta-business-manager-permissions": {
    slug: "meta-business-manager-permissions",
    category: "Meta Advertising",
    title: "Meta Business Manager Permissions & Safe Agency Access",
    metaTitle: "Meta Business Manager Permissions: Roles & Partner Access",
    description:
      "How Meta Business Manager roles, partner access, and asset permissions work — and how to grant agencies access safely without sharing passwords.",
    h1: "Meta Business Manager Permissions & Safe Agency Access",
    subtitle:
      "Permissions are an operational control. Get them wrong and you lose recovery options; get them right and partners can work without owning your identity.",
    sections: [
      {
        heading: "Why permissions fail before ads do",
        paragraphs: [
          "Many Meta advertising failures that look like “account problems” start as people problems: too many admins, departed freelancers still holding roles, partners with wider access than the scope requires, or a single admin who is unavailable when a restriction notice appears. Business Manager permissions decide who can act when something breaks.",
          "Safe agency access means using Meta’s role and partner invitation flows — never personal Facebook passwords — with a written map of which assets the partner needs and for how long. That discipline applies whether you use self-serve accounts or agency-provisioned spend nodes.",
        ],
      },
      {
        heading: "People roles vs partner business access",
        paragraphs: [
          "Inside a Business Manager, people are assigned roles (such as admin or employee-level access patterns Meta currently exposes) and then given permission on specific assets: ad accounts, Pages, catalogs, datasets. Admins can typically manage people and assets; narrower roles should be preferred for day-to-day media buyers when your process allows it.",
          "Partner business access connects another Business Manager to yours so their people can work on shared assets without becoming employees of your BM. This is usually the cleaner model for agencies and freelancers: access is scoped, revocable, and auditable at the business level. Confirm whether you are partnering into their BM, they are partnering into yours, or both — blast radius differs.",
          "Page-level roles can also sit outside the BM story. Inventory Page access separately so advertising is not blocked by a personal profile that “owns” the Page while the BM looks healthy.",
        ],
        bullets: [
          "Prefer partner BM access for external agencies over adding many personal profiles as full admins",
          "Scope asset permissions to what the engagement needs — not “admin on everything” by default",
          "Keep at least two trusted internal admins so one vacation or departure does not strand the BM",
          "Review finance and payment permissions separately from creative/media roles",
        ],
      },
      {
        heading: "What agencies actually need",
        paragraphs: [
          "A media partner typically needs access to the ad accounts they will operate, the Pages or Instagram accounts used in ads, and the Dataset/Pixel required for optimization — plus enough Business Manager visibility to troubleshoot delivery. They rarely need your personal profile password, unrestricted admin on unrelated brands, or ownership transfer of your primary domain by default.",
          "Ask for a permission request in writing: assets, role level, duration, and whether they need finance access. Decline password sharing every time. If a vendor cannot work through Business Manager invites, that is a process failure on their side, not a reason to weaken security.",
          "When the agency provisions the spend node on their BM, you still need clarity: your role on that account, whether you can export history, who owns creatives and audiences, and how access ends. Permissions are bidirectional risk — they can see your performance data; you may depend on their admins during an incident.",
        ],
      },
      {
        heading: "Least-privilege workflow for onboarding and offboarding",
        paragraphs: [
          "Onboard in order: define scope → send partner or user invite → grant asset-level permissions → confirm two-factor practices for critical admins → launch. Do not grant broad admin “temporarily” and forget it. Temporary access without a calendar reminder becomes permanent risk.",
          "Offboard the same week a contract ends: remove partner access, revoke people roles, rotate CAPI tokens if the partner held them, and confirm Dataset and Page ownership remain with your team. Document what they can still see in email or shared drives — Meta permissions are only one surface.",
          "Quarterly access reviews catch drift: old contractors, unused partners, and duplicate personal logins mixed into business assets. Messy permissions make Business Manager restrictions harder to diagnose and recover from because nobody is sure who can still act.",
        ],
      },
      {
        heading: "Permissions during restrictions and audits",
        paragraphs: [
          "When an ad account, Page, or Business Manager is limited, your first operational question is whether someone with real control can still open Business Settings and act. If the only admin is a former contractor, recovery options shrink before any appeal is drafted.",
          "A Meta account health audit often starts with a permissions map for that reason. Fixing access hygiene does not guarantee restoration under Meta’s systems — but it preserves the ability to appeal, remediate, or migrate measurement deliberately instead of in a panic.",
        ],
      },
      {
        heading: "Red flags",
        paragraphs: [
          "Walk away from access patterns that increase long-term risk even if they feel faster at kickoff.",
        ],
        bullets: [
          "Requests for personal Facebook passwords or authenticator codes",
          "Pressure to add the partner as sole admin on your only Business Manager",
          "Unclear ownership of Pages, domains, or Datasets after “setup”",
          "Refusal to use partner invites or to document what access is needed",
          "Claims that special permissions create policy immunity or unofficial Meta partnership status",
        ],
      },
    ],
    related: [
      {
        href: "/services/facebook-agency-ad-account",
        title: "Facebook Agency Ad Accounts",
        description: "Agency access designed around Business Manager roles",
      },
      {
        href: "/services/health-assessment-service",
        title: "Meta Ad Account Health Audit",
        description: "Map permissions, blast radius, and scaling risk",
      },
      {
        href: "/resources/meta-agency-ad-account-guide",
        title: "What Is a Meta Agency Ad Account?",
        description: "Ownership and access models explained",
      },
      {
        href: "/resources/meta-business-manager-restricted",
        title: "Meta Business Manager Restricted",
        description: "What BM-level limits mean for people and assets",
      },
    ],
    cta: {
      href: "/request-access?service=facebook",
      label: "Request Facebook agency access",
    },
  },

  "meta-page-restricted": {
    slug: "meta-page-restricted",
    category: "Account Restrictions",
    title: "Meta / Facebook Page Restricted: What It Means",
    metaTitle: "Facebook Page Restricted: Causes & Legitimate Next Steps",
    description:
      "What a restricted Meta/Facebook Page means for advertising, how it differs from ad account limits, and legitimate next steps — without recovery guarantees.",
    h1: "Meta / Facebook Page Restricted: What It Means",
    subtitle:
      "A Page limit can stop delivery even when the ad account looks healthy. Diagnose the layer before you rebuild everything.",
    sections: [
      {
        heading: "Page restriction is not the same as an ad account restriction",
        paragraphs: [
          "When advertisers say “Facebook restricted us,” they may mean the ad account, the Business Manager, a user profile’s advertising ability, payment methods — or the Page used as the Facebook/Instagram presence for ads. A Page restriction or unpublished/disabled state can interrupt advertising even if Ads Manager still opens and the ad account shows a balance.",
          "Symptoms vary: inability to boost or run ads from the Page, features greyed out, policy notices on the Page, content removed, or advertising access limited while organic posting still partially works. Capture the exact notice text, timestamps, and Page ID. Vague screenshots without asset IDs slow every later step.",
          "Do not assume fixing a different layer will restore Page advertising. An open ad account does not override a Page that Meta has limited under current systems.",
        ],
      },
      {
        heading: "Why Pages get limited",
        paragraphs: [
          "Pages sit at the intersection of brand identity, content, and ads. Limits can relate to content that violates Community Standards or Advertising Policies, repeated flagged posts or ads tied to the Page, intellectual property issues, impersonation or misrepresentation concerns, or broader Business Manager / admin problems that surface as Page symptoms.",
          "Health and wellness advertisers often see Page pressure when on-Page content, shop links, or about sections escalate claims beyond what ads stated — or when the Page identity does not match the landing experience. Exact causes are case-dependent; Meta’s notice is the primary source, not industry rumor.",
          "Admin sprawl matters operationally. If many people can post or run ads from the Page, one person’s content can create risk for everyone using that Page as an advertising identity.",
        ],
      },
      {
        heading: "Immediate containment steps",
        paragraphs: [
          "Stabilize before you invent a new brand presence. Spawning duplicate Pages without a plan usually fragments audiences, reviews, and domain trust signals.",
        ],
        bullets: [
          "Screenshot Page notices, email alerts, and Ads Manager errors that mention the Page",
          "Confirm which admins and Business Managers still control the Page",
          "Pause aggressive relaunches of the same flagged content or ads from that Page",
          "Inventory connected Instagram accounts, shops, and domains tied to the Page",
          "Do not share personal Facebook passwords with vendors offering “instant unban”",
          "Preserve access: ensure at least one trusted admin can still open Page settings",
        ],
      },
      {
        heading: "Legitimate next steps — and what not to do",
        paragraphs: [
          "Read Meta’s notice carefully. If a review or appeal path is offered and you believe there is a factual error or you have already removed the problematic content, submit a factual request. Restoration is never guaranteed. Identical spam appeals while the same content remains live rarely help.",
          "Remediate what you control: remove or revise violating content where appropriate, align About/shop/landing claims with a truthful offer, and clean admin lists. If the Page is entangled with a wider Business Manager or ad account restriction, diagnose the blast radius before you rebuild ads on a new Page.",
          "Avoid cloaking, fake business identities, or endless new Pages created to dodge review. Those patterns typically increase long-term risk under current Meta policies. Avoid vendors who guarantee Page restoration — Meta’s systems determine outcomes you cannot contractually force.",
        ],
      },
      {
        heading: "Advertising continuity when a Page is limited",
        paragraphs: [
          "If the Page is the advertising identity for live campaigns, expect delivery impact until the Page issue is resolved or you deliberately migrate to a different, legitimately owned presence — which has its own setup, review, and brand-consistency costs. Measure whether the ad account, BM, and Dataset remain healthy so you do not mis-attribute a Page problem as a spend-node failure.",
          "A structured health assessment is useful when Page ownership is unclear, multiple brands share admins, or Page limits coincide with ad account or BM issues. Professional review can prioritize layers and continuity options; it is not a promise of unban or reinstatement.",
        ],
      },
    ],
    related: [
      {
        href: "/services/health-assessment-service",
        title: "Meta Ad Account Health Audit",
        description: "Diagnose Page vs ad account vs BM layers",
      },
      {
        href: "/facebook-unban-services",
        title: "Restriction recovery support",
        description: "Professional review and continuity planning",
      },
      {
        href: "/resources/facebook-ad-account-restricted",
        title: "Facebook Ad Account Restricted?",
        description: "What to do when the spend node is limited",
      },
    ],
    cta: {
      href: "/request-access?service=health-assessment",
      label: "Request Account Health Audit",
    },
  },

  "meta-account-health-checklist": {
    slug: "meta-account-health-checklist",
    category: "Account Restrictions",
    title: "Meta Account Health Checklist Before You Scale",
    metaTitle: "Meta Account Health Checklist Before Scaling Spend",
    description:
      "A practical Meta account health checklist for advertisers before scaling: payments, permissions, Pages, datasets, rejects, and offer risk — without fake scores.",
    h1: "Meta Account Health Checklist Before You Scale",
    subtitle:
      "Scale after hygiene, not after one lucky approval. Use this as a gate — not as a guarantee of future delivery.",
    sections: [
      {
        heading: "Why scale amplifies weak structure",
        paragraphs: [
          "Low spend can hide fragile Meta setups: one admin, messy partners, unpaid invoices that “usually clear,” a Dataset nobody owns on paper, or a claim set that only works until review deepens. Scaling spend and creative volume increases the rate at which payment, policy, and permission problems surface.",
          "This checklist is operational. It does not assign a proprietary “health score,” invent Meta partnership benefits, or promise that passing every item prevents restrictions. It reduces self-inflicted failures before you raise budgets under current Meta systems.",
        ],
      },
      {
        heading: "Identity and access layer",
        paragraphs: [
          "Confirm Business Manager access is recoverable: at least two trusted internal admins, two-factor practices for critical people, and a current list of partners. Remove departed contractors. Prefer partner BM access for agencies over scattering personal profiles as full admins.",
          "Map ownership of Pages, Instagram accounts, domains, and Datasets. If advertising depends on a Page sitting on a personal profile outside the BM, fix that deliberately before scale — not during an incident. Never “fix” access by sharing passwords.",
        ],
        bullets: [
          "Two+ trusted internal BM admins documented",
          "Partner list reviewed in the last 90 days",
          "Page and domain ownership intentional and written down",
          "No personal Facebook passwords shared with vendors",
        ],
      },
      {
        heading: "Payments and spend nodes",
        paragraphs: [
          "Payment failures often look like mysterious delivery problems. Confirm payment methods are valid, thresholds and failed charges are cleared, and finance roles know who can update billing. If you use agency funding or prepaid top-ups, confirm lead times and what happens to balance if a node is limited.",
          "Know which ad accounts will take scale. If you rely on a single fragile node with no continuity plan, decide whether replacement support, additional capacity, or a pause rule belongs in the plan before you increase budgets — not after a limit.",
        ],
      },
      {
        heading: "Measurement continuity",
        paragraphs: [
          "Verify the Dataset/Pixel that campaigns optimize against is owned under assets your team can still access if one ad account changes. Confirm CAPI destinations and tokens have named owners. Browser and server events should use consistent naming for deduplication.",
          "Scaling on broken or orphaned measurement wastes spend and muddies learning. Fix tracking ownership before you treat ROAS swings as creative truth.",
        ],
      },
      {
        heading: "Policy and reject hygiene",
        paragraphs: [
          "Review recent rejects and disabled ads. If the same claim or landing-page mismatch keeps recurring, raising budget will not educate the system in your favor — it usually increases pressure. Align ads and destinations; remove personal-attribute health language you cannot support; stop relaunching identical packages under new names.",
          "For health-adjacent offers, re-check eligibility and claim posture before scale. Infrastructure and checklists do not create eligibility for a non-viable product under current Meta Advertising Policies.",
        ],
        bullets: [
          "Reject reasons logged with creative ID and destination URL",
          "Landing page matches ad promise and product",
          "No cloaking or “review-only” site variants",
          "Offer eligibility explicitly accepted or deferred — not “we’ll see at scale”",
        ],
      },
      {
        heading: "Pre-scale gate",
        paragraphs: [
          "Treat the following as a go/no-go list. Any hard no means fix or pause that offer path before increasing spend.",
        ],
        bullets: [
          "BM and Page accessible to trusted admins; partner sprawl cleaned",
          "Billing healthy; funding path documented for the accounts you will use",
          "Dataset/domain/CAPI ownership documented with internal owners",
          "Recent reject pattern remediated — not ignored",
          "Fallback if a spend node is limited: who pauses, who appeals, how measurement continues",
          "Written claim set for creatives and site; escalation path if rejects cluster",
        ],
      },
      {
        heading: "When to get a formal health assessment",
        paragraphs: [
          "Use a structured Meta ad account health audit when ownership is tangled, restrictions already exist, multiple layers (Page, BM, ad account) look unhealthy, or your team is about to scale into a category with elevated review pressure. The output should be a prioritized map and sequence — not a promised approval rate or guaranteed clean bill of health from Meta.",
        ],
      },
    ],
    related: [
      {
        href: "/services/health-assessment-service",
        title: "Meta Ad Account Health Audit",
        description: "Structured review before you increase spend",
      },
      {
        href: "/services/facebook-agency-ad-account",
        title: "Facebook Agency Ad Accounts",
        description: "Infrastructure options when continuity matters at scale",
      },
      {
        href: "/resources/facebook-ad-account-restricted",
        title: "Facebook Ad Account Restricted?",
        description: "Operational steps when a spend node is already limited",
      },
    ],
    cta: {
      href: "/request-access?service=health-assessment",
      label: "Request Account Health Audit",
    },
  },

  "meta-ad-account-appeal-guide": {
    slug: "meta-ad-account-appeal-guide",
    category: "Account Restrictions",
    title: "Meta Ad Account Appeal Guide (Legitimate Process)",
    metaTitle: "Meta Ad Account Appeal Guide: Legitimate Review Process",
    description:
      "How to approach a Meta ad account appeal or review legitimately: evidence, remediation, timing, and when not to appeal — with no evasion advice or recovery guarantees.",
    h1: "Meta Ad Account Appeal Guide",
    subtitle:
      "Appeals are a request for review — not a reset button. Outcomes are case-dependent under Meta’s systems.",
    sections: [
      {
        heading: "What an appeal can and cannot do",
        paragraphs: [
          "A Meta ad account appeal (or the review path shown in your notice) asks Meta to reconsider a limitation on advertising ability for a specific account or related decision. It may help when there is a factual error, when you have already remediated the flagged issue, or when the notice itself points you to request a review.",
          "An appeal cannot rewrite Advertising Policies, force approval of a non-eligible offer, or guarantee restoration. It also cannot fix a problem that actually lives on another layer — Page, Business Manager, payment method, or user access — if you only appeal the ad account. Diagnose first; appeal the correct scope.",
          "Anyone promising guaranteed unban, fixed success rates, or policy evasion “angles” for appeals is selling certainty Meta alone controls. Ignore that pitch.",
        ],
      },
      {
        heading: "Decide whether appeal is the right lever",
        paragraphs: [
          "Appeal when the notice offers a path, you can state a clear factual case or completed remediation, and the underlying product/claims can still be advertised under current Meta policies. Pause-and-restructure when ownership is broken, the offer is not viable, or the real issue is BM/Page-wide.",
          "Do not appeal as a ritual while you keep launching the same rejected creatives and landing pages. Repeated low-quality appeals plus continued flagged activity typically do not improve your position.",
        ],
        bullets: [
          "Good candidate: possible error or fixed issue + review path available",
          "Poor candidate: prohibited positioning, unpaid billing ignored, or wrong layer diagnosed",
          "Also poor: appeal spam with identical text and no change in behavior",
        ],
      },
      {
        heading: "Prepare evidence before you submit",
        paragraphs: [
          "Work from records, not memory. Collect restriction notices, dates, ad account IDs, related Page/BM IDs, payment alerts, and examples of creatives or destinations referenced in rejects. Note what you changed after the limit — content removed, claims rewritten, partners removed, billing fixed.",
          "Confirm admins can still access Business Settings. If you cannot enter the account surfaces Meta uses for review, resolve access first. Do not hand personal passwords to a third party to “submit for you”; use Business Manager roles if you engage professional help.",
        ],
      },
      {
        heading: "Write a factual appeal",
        paragraphs: [
          "Keep the submission specific and calm. Identify the account, summarize what was limited, state whether you believe the decision was mistaken or that remediation is complete, and describe concrete changes. Attach or reference documentation Meta’s flow allows. Avoid threats, vague innocence claims, or essays about how much you spend.",
          "If you remediated, say what changed on ads, landing pages, billing, or permissions. If you believe Meta matched the wrong asset or misread a product, explain with identifiers — not with policy-debate rhetoric.",
          "Do not include cloaking admissions, “safe page” tricks, or requests for special treatment framed as unofficial partnerships. Those patterns are not legitimate appeal strategy.",
        ],
      },
      {
        heading: "After you submit",
        paragraphs: [
          "Wait for Meta’s process. Continuing the same flagged behavior while a review is open can undermine the remediation story. Use the waiting period to harden permissions, Dataset ownership, and claim/landing consistency so a restored node — if restoration occurs — is not immediately stressed again.",
          "If the appeal is denied, reassess: was the layer wrong, is the offer non-viable on Meta, or is a cleaner architecture and pause the honest path? Denial is information. It is not automatically a cue to create chaotic duplicate structures.",
          "Restoration remains never guaranteed. Continuity planning — protecting Pages, domains, and Datasets you still control — is the part your team owns regardless of appeal outcome.",
        ],
      },
      {
        heading: "When professional support helps",
        paragraphs: [
          "A health assessment or restriction-support review is useful when layers are tangled, when you are unsure appeal vs restructure, or when measurement ownership must be protected during a limit. Support should mean diagnosis, documentation, and process — not guaranteed recovery or evasion coaching.",
          "Ask for a written recommendation: appeal now, remediate first, restructure, or pause the offer. Keep final control of admins and passwords.",
        ],
      },
    ],
    related: [
      {
        href: "/services/health-assessment-service",
        title: "Meta Ad Account Health Audit",
        description: "Diagnose layer and whether appeal is appropriate",
      },
      {
        href: "/facebook-unban-services",
        title: "Restriction recovery support",
        description: "Review and continuity planning — not guaranteed unban",
      },
      {
        href: "/resources/facebook-ad-account-restricted",
        title: "Facebook Ad Account Restricted?",
        description: "Immediate steps and what not to do after a limit",
      },
    ],
    cta: {
      href: "/request-access?service=health-assessment",
      label: "Request Account Health Audit",
    },
  },

  "peptide-meta-landing-page-compliance": {
    slug: "peptide-meta-landing-page-compliance",
    category: "Peptide Advertising",
    title: "Landing Page Compliance for Peptide Meta Ads",
    metaTitle: "Peptide Meta Ads Landing Page Compliance Guide",
    description:
      "Landing page compliance for peptide Meta ads: offer clarity, claims, destination consistency, product presentation, sensitive language, and trust elements — no circumvention.",
    h1: "Landing Page Compliance for Peptide Meta Ads",
    subtitle:
      "Meta often evaluates the destination, not only the primary text. One honest page beats a “review version” every time.",
    sections: [
      {
        heading: "Why the landing page decides many peptide reviews",
        paragraphs: [
          "Peptide and research-compound advertisers frequently pass or fail as a package: ad creative plus the URL it sends people to. Under current Meta Advertising Policies and review systems, a restrained ad paired with an aggressive medical-outcome page is still a risk bundle. Popups, FAQ blocks, chat widgets, and linked collection pages are part of that destination experience.",
          "This guide assumes you have already asked whether the product can be advertised at all for your markets. Landing-page polish does not create eligibility for a prohibited offer. If eligibility fails, fix positioning or channel choice before you invest in CRO copy.",
        ],
      },
      {
        heading: "Offer clarity and destination consistency",
        paragraphs: [
          "The page should make clear what is being sold, who it is for at a high level you can substantiate, and what the next step is (shop, consult, waitlist). Ambiguous “miracle” framing with vague products invites scrutiny and poor conversion quality.",
          "Consistency means the ad and landing page match on product, promise intensity, and brand identity. If the ad mentions a specific SKU or research framing, the first screen should not pivot into unrelated disease claims or a different product line. Mismatched brand names, sudden prescription language, or bait-and-switch offers are common reject drivers.",
          "Use one honest destination. Do not maintain a softer “review” page that differs materially from what users see after click. That cloaking-style pattern is policy-evasion behavior and increases long-term account risk.",
        ],
      },
      {
        heading: "Claims and policy-sensitive language",
        paragraphs: [
          "Inventory claims above the fold, in testimonials, comparison charts, FAQ, and checkout. Unsupported disease treatment claims, guaranteed outcomes, and before/after framing that implies medical results commonly create pressure in health-adjacent categories. Your regulatory obligations and Meta’s ad rules both apply — satisfying one does not automatically satisfy the other.",
          "Avoid copy that implies you know a visitor’s personal health condition. Speak to the offer and information you can support, not to diagnosed states you assume about the audience. Align ad primary text, image overlays, and on-page headlines so media buyers cannot “stay safe” in Ads Manager while the site escalates.",
          "Keep a written claim set your team is allowed to use. Creative tests should rotate within that set — not hunt for a loophole synonym that still promises the same outcome.",
        ],
        bullets: [
          "Claims on page ≤ claims you can substantiate and that fit your Meta positioning",
          "Testimonials reviewed for disease/outcome language — not only star ratings",
          "No personal-attribute health implications aimed at the individual visitor",
          "Ad and LP claim intensity matched on purpose",
        ],
      },
      {
        heading: "Product presentation",
        paragraphs: [
          "Present products accurately: names, what the customer receives, material limitations you are required to disclose, and purchase conditions that apply where you sell. Thin pages that hide the product behind vague wellness storytelling while checkout reveals a different substance create consistency risk.",
          "Imagery should match the offer. Stock visuals that imply clinical treatment environments can conflict with a non-medical positioning — or vice versa. Review hero images and videos with the same care as headlines.",
          "If certain SKUs are not appropriate for Meta traffic, do not deep-link ads into those PDPs. Segment catalogs and URLs intentionally so paid social destinations stay inside the claim set you approved for the channel.",
        ],
      },
      {
        heading: "Trust elements that help operations — not as loopholes",
        paragraphs: [
          "Clear business identity, contact paths, shipping/return information where relevant, and coherent Page-to-site branding help reviewers and customers understand who is advertising. Domain verification and Page ownership should match the brand on the page when architecture allows.",
          "Trust elements do not override category eligibility or false claims. A polished footer on a non-viable medical-claim page does not make the page compliant. Use transparency as hygiene alongside honest claims — not as decoration on an evasion strategy.",
        ],
      },
      {
        heading: "Pre-launch LP review sequence",
        paragraphs: [
          "Walk the click path as a reviewer might: ad → landing URL → first screen → FAQ/testimonials → checkout or lead form → linked policies. Note every claim. Compare to your written claim set and to the ad. Fix mismatches before spend.",
          "Assign an internal owner for on-page truthfulness who is not only the media buyer. Agencies can flag issues; your company owns what the site says. When Meta rejects an ad citing the destination, update the page and the ad together, log the change, and only then retry — on the same honest URL.",
        ],
      },
    ],
    related: [
      {
        href: "/services/peptides-meta-ads",
        title: "Peptides Meta Ads Structure",
        description: "Infrastructure for compliance-aware peptide media ops",
      },
      {
        href: "/resources/peptide-meta-ads-compliance",
        title: "Meta Ads Compliance for Peptide Brands",
        description: "Full pre-launch checklist beyond the landing page",
      },
      {
        href: "/resources/can-you-advertise-peptides-on-facebook",
        title: "Can You Advertise Peptides on Facebook?",
        description: "Eligibility before you invest in LP CRO",
      },
    ],
    cta: {
      href: "/request-access?service=peptides",
      label: "Review your peptide Meta setup",
    },
  },

  "peptide-meta-tracking-capi": {
    slug: "peptide-meta-tracking-capi",
    category: "Peptide Advertising",
    title: "Peptide Meta Ads: Pixel, Dataset & CAPI Tracking",
    metaTitle: "Peptide Meta Tracking: Pixel, Dataset & CAPI Guide",
    description:
      "How peptide advertisers should structure Meta Pixel, Dataset, CAPI, and ecommerce events for attribution continuity — without policy circumvention.",
    h1: "Peptide Meta Ads: Pixel, Dataset & CAPI Tracking",
    subtitle:
      "Event continuity supports optimization when the offer can run. Tracking is not a substitute for eligibility or claim discipline.",
    sections: [
      {
        heading: "Tracking only pays off after eligibility",
        paragraphs: [
          "Peptide Meta programs fail in two different ways: the offer or landing path cannot survive review, or the offer can run but measurement is too broken to optimize. This page addresses the second problem — Pixel/Dataset structure, Conversions API, and ecommerce event continuity — for teams that already treat compliance as a gate.",
          "No tracking architecture bypasses Meta Advertising Policies, hides destination claims, or guarantees attribution accuracy in every browser environment. Build measurement so learning survives account changes; fix claims and eligibility on a separate track.",
        ],
      },
      {
        heading: "Dataset ownership for peptide media ops",
        paragraphs: [
          "Keep the primary Dataset under a Business Manager your company can still access if a spend node is limited or replaced. Grant ad accounts — including agency-provisioned nodes when you use them — permission to use that Dataset rather than recreating a new Pixel per account by habit.",
          "Document who can add partners to the Dataset, who rotates CAPI credentials, and which domains are verified against the BM that holds measurement. Peptide brands that churn accounts without Dataset discipline often lose purchase-signal history right when creative tests get expensive.",
          "If an agency must operate measurement temporarily, define whether they are a partner on your Dataset or whether you are sharing into theirs — and what happens at offboarding. Prefer your durable ownership when replacement of spend nodes is likely.",
        ],
      },
      {
        heading: "Browser Pixel and ecommerce events",
        paragraphs: [
          "Implement standard events that match your funnel: view content, add to cart, initiate checkout, purchase — or lead events if you are not checkout-based. Parameters should carry value, currency, and content identifiers consistently so optimization and reporting speak the same language as your store.",
          "Test with Meta’s tools and your own purchase QA. Broken events at scale produce confident-looking ROAS on incomplete data. For subscription or multi-step peptide funnels, map which step is the optimization event and whether downstream purchases are still sent.",
          "Align on-site behavior with the claim set you advertise. Tracking a checkout that only exists behind a mismatched “review” experience is not a measurement win — it is a compliance problem. One honest funnel, fully instrumented, is the standard.",
        ],
        bullets: [
          "Event names stable across theme changes and landing tests",
          "Purchase value and currency verified on real test orders",
          "Content IDs aligned with catalog or product feeds when used",
          "SPA or funnel step changes re-QA’d after site releases",
        ],
      },
      {
        heading: "CAPI and event continuity",
        paragraphs: [
          "Conversions API should send server-side events to the same Dataset the Pixel uses, with deduplication keys aligned to browser events where both fire. That complementarity improves resilience when browsers limit cookies; it does not invent conversions that never happened.",
          "Common peptide-stack sources include Shopify or ecommerce gateways, server containers, and CRM lead pipelines. Name the system of record for each event type. Rotate access tokens when contractors leave. Log failures — silent CAPI outages look like “Meta stopped optimizing” for weeks.",
          "When you migrate ad accounts, keep CAPI pointed at the durable Dataset. Continuity means the event identity stays stable while spend nodes change — assuming you still have admin on the BM that owns measurement.",
        ],
      },
      {
        heading: "Attribution expectations for peptide advertisers",
        paragraphs: [
          "Attribution windows, modeled conversions, and partial observability mean Meta-reported results will not match your store’s order list one-to-one. Use platform reporting for optimization direction and finance systems for revenue truth. Discrepancy investigation should start with event QA and Dataset access — not with immediate account replacement.",
          "Health-adjacent verticals sometimes see delivery and learning volatility when rejects cluster. Treat measurement health and compliance health as parallel dashboards. Scaling CAPI complexity will not fix a landing page that escalates medical claims.",
        ],
      },
      {
        heading: "Operational checklist",
        paragraphs: [
          "Before a serious peptide Meta test or scale phase, confirm the following.",
        ],
        bullets: [
          "Eligibility and claim/LP gates already passed or explicitly deferred",
          "Primary Dataset owned under a BM your team controls",
          "Ad accounts in use have Dataset access; no orphan Pixels for vanity reasons",
          "CAPI destination, token owners, and deduplication documented",
          "Purchase/lead QA completed after the latest site deploy",
          "Offboarding plan for agency partners who touched Events Manager or tokens",
        ],
      },
    ],
    related: [
      {
        href: "/services/peptides-meta-ads",
        title: "Peptides Meta Ads Structure",
        description: "Infrastructure packs for peptide Meta advertisers",
      },
      {
        href: "/resources/peptide-meta-ads-compliance",
        title: "Peptide Meta Ads Compliance Checklist",
        description: "Claims, LP, and account health before tracking scale",
      },
      {
        href: "/resources/meta-pixel-capi-account-structure",
        title: "Meta Pixel, Dataset & CAPI Structure",
        description: "How measurement assets relate to ad accounts",
      },
    ],
    cta: {
      href: "/request-access?service=peptides",
      label: "Review your peptide Meta setup",
    },
  },
};
