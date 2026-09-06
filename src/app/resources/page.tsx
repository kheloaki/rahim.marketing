import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import LatestBlogs from "@/components/sections/latest-blogs";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { otherPageSchemas, getBreadcrumbs } from "@/lib/page-schemas";
import { ArrowRight } from "lucide-react";
import { metaFromSchema } from "@/lib/page-meta";
import { getAllResourceGuides, getResourceGuide } from "@/data/resource-guides";
import { SEO_CLUSTERS } from "@/data/seo-clusters";

export const metadata = metaFromSchema(otherPageSchemas["resources"], "/resources");

export default function ResourcesPage() {
  const schemaData = otherPageSchemas["resources"];
  const breadcrumbs = getBreadcrumbs("/resources", "Resources");
  const guides = getAllResourceGuides();

  const hubSections = SEO_CLUSTERS.map((cluster) => {
    const supportLinks = cluster.supportSlugs
      .map((slug) => {
        const g = getResourceGuide(slug);
        if (!g) return null;
        return { href: `/resources/${slug}`, title: g.title };
      })
      .filter(Boolean) as Array<{ href: string; title: string }>;

    const moneyLinks = cluster.moneyPages.map((m) => ({
      href: m.href,
      title: m.title,
    }));

    const pillarLink = cluster.pillarPath
      ? [{ href: cluster.pillarPath, title: `${cluster.name} hub` }]
      : [];

    // Dedupe by href, prefer first occurrence
    const seen = new Set<string>();
    const links = [...pillarLink, ...moneyLinks, ...supportLinks].filter((l) => {
      if (seen.has(l.href)) return false;
      seen.add(l.href);
      return true;
    });

    // Skip clusters with nothing crawlable beyond empty planned stubs
    if (links.length === 0) return null;

    return { ...cluster, links };
  }).filter(Boolean) as Array<(typeof SEO_CLUSTERS)[number] & { links: Array<{ href: string; title: string }> }>;

  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          ...schemaData,
          path: "/resources",
          breadcrumbs,
          services: [
            ...hubSections.flatMap((c) =>
              c.links.map((l) => ({
                name: l.title,
                url: l.href,
                description: c.name,
                itemType: "WebPage",
              })),
            ),
            ...guides.map((g) => ({
              name: g.title,
              url: `/resources/${g.slug}`,
              description: g.description,
              itemType: "WebPage",
            })),
          ],
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="py-[100px] bg-[#0a0612] relative overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
              <PageBreadcrumbs items={breadcrumbs} className="justify-center mb-8" />
              <div className="text-center mb-16">
                <span className="text-[#E44F71] font-semibold text-sm tracking-widest uppercase mb-4 block">
                  RESOURCES
                </span>
                <h1 className="text-[40px] lg:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
                  Resources &{" "}
                  <span className="bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] bg-clip-text text-transparent">
                    Guides
                  </span>
                </h1>
                <p className="text-[18px] text-white/60 max-w-[640px] mx-auto">
                  Structured by topic: agency accounts, Meta, restrictions, peptides, Google,
                  TikTok, Microsoft Advertising, native, assets, and SEO.
                </p>
              </div>

              <div className="space-y-10">
                {hubSections.map((cluster) => (
                  <div
                    key={cluster.id}
                    id={cluster.id}
                    className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#150d1f] p-6 lg:p-8"
                  >
                    <h2 className="text-xl font-bold text-white mb-2">{cluster.name}</h2>
                    <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-[720px]">
                      {cluster.intro}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {cluster.links.map((link) => (
                        <li key={link.href + link.title}>
                          <Link
                            href={link.href}
                            className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 text-white/80 hover:border-[#E44F71]/40 hover:text-white transition-colors"
                          >
                            <span>{link.title}</span>
                            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#E44F71]" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { href: "/blog", title: "Blog" },
                  { href: "/partners", title: "Partners" },
                  { href: "/reviews", title: "Reviews" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-white font-semibold hover:border-[#E44F71]/40"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <LatestBlogs />
        </div>
        <Footer />
      </main>
    </>
  );
}
