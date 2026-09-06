import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { RelatedResources } from "@/components/seo/related-resources";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import type { ResourceGuide } from "@/data/resource-guides";
import { getClusterForResourceSlug } from "@/data/seo-clusters";

export function ResourceGuidePage({ guide }: { guide: ResourceGuide }) {
  const path = `/resources/${guide.slug}`;
  const cluster = getClusterForResourceSlug(guide.slug);
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    ...(cluster
      ? [{ name: cluster.name, url: `/resources#${cluster.id}` }]
      : [{ name: guide.category, url: "/resources" }]),
    { name: guide.title, url: path },
  ];

  return (
    <>
      <ComprehensiveSchema
        pageType="article"
        data={{
          title: guide.metaTitle,
          headline: guide.h1,
          description: guide.description,
          path,
          breadcrumbs,
          articleType: "Article",
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="relative overflow-hidden bg-[#0a0612] pt-16 pb-16 lg:pt-20 lg:pb-20">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="container relative z-10 mx-auto px-5 lg:px-10 max-w-[860px]">
              <PageBreadcrumbs items={breadcrumbs} />
              <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">
                {guide.category}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
                {guide.h1}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-[680px]">
                {guide.subtitle}
              </p>
            </div>
          </section>

          <article className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-5 lg:px-10 max-w-[860px] space-y-12">
              {guide.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-[#0a0612] mb-4">{section.heading}</h2>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)} className="text-[#0a0612]/80 leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="list-disc pl-5 space-y-2 text-[#0a0612]/80">
                      {section.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              {guide.cta ? (
                <div className="rounded-2xl bg-[#0a0612] p-8 text-center">
                  <Link
                    href={guide.cta.href}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold"
                  >
                    {guide.cta.label}
                  </Link>
                </div>
              ) : null}
            </div>
          </article>

          <RelatedResources links={guide.related} variant="dark" />
        </div>
        <Footer />
      </main>
    </>
  );
}
