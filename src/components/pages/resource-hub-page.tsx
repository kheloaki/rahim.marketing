import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { RelatedResources } from "@/components/seo/related-resources";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";

export type ResourceHubSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResourceHubLink = {
  href: string;
  title: string;
  description?: string;
};

export type ResourceHubPageProps = {
  path: string;
  category: string;
  title: string;
  metaTitle: string;
  description: string;
  h1: string;
  subtitle: string;
  sections: ResourceHubSection[];
  moneyPage: ResourceHubLink;
  guides: ResourceHubLink[];
  related?: ResourceHubLink[];
  cta?: { href: string; label: string };
  image?: string;
};

export function ResourceHubPage({
  path,
  category,
  title,
  metaTitle,
  description,
  h1,
  subtitle,
  sections,
  moneyPage,
  guides,
  related = [],
  cta,
  image,
}: ResourceHubPageProps) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: title, url: path },
  ];

  return (
    <>
      <ComprehensiveSchema
        pageType="page"
        data={{
          title: metaTitle,
          description,
          path,
          breadcrumbs,
          image,
          services: [
            { name: moneyPage.title, url: moneyPage.href, description: moneyPage.description, itemType: "Service" },
            ...guides.map((g) => ({
              name: g.title,
              url: g.href,
              description: g.description,
              itemType: "WebPage",
            })),
          ],
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <section className="relative overflow-hidden bg-[#0a0612] pt-16 pb-16 lg:pt-20 lg:pb-20">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E44F71] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="container relative z-10 mx-auto px-5 lg:px-10 max-w-[900px]">
              <PageBreadcrumbs items={breadcrumbs} />
              <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-4">
                {category}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
                {h1}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-[720px]">{subtitle}</p>
              <div className="mt-8">
                <Link
                  href={moneyPage.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] px-6 py-3 text-white font-semibold"
                >
                  {moneyPage.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          <article className="bg-white py-14 lg:py-20">
            <div className="container mx-auto px-5 lg:px-10 max-w-[900px] space-y-12">
              {sections.map((section) => (
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

              <section>
                <h2 className="text-2xl font-bold text-[#0a0612] mb-4">Guides in this cluster</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {guides.map((g) => (
                    <li key={g.href}>
                      <Link
                        href={g.href}
                        className="group flex h-full flex-col rounded-xl border border-[#0a0612]/10 px-4 py-4 hover:border-[#E44F71]/40 transition-colors"
                      >
                        <span className="font-semibold text-[#0a0612] group-hover:text-[#E44F71]">
                          {g.title}
                        </span>
                        {g.description ? (
                          <span className="mt-1 text-sm text-[#0a0612]/60">{g.description}</span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {cta ? (
                <div className="rounded-2xl bg-[#0a0612] p-8 text-center">
                  <Link
                    href={cta.href}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#BC2C7B] via-[#E44F71] to-[#E44F71] text-white font-bold"
                  >
                    {cta.label}
                  </Link>
                </div>
              ) : null}
            </div>
          </article>

          {related.length ? <RelatedResources links={related} variant="dark" /> : null}
        </div>
        <Footer />
      </main>
    </>
  );
}
