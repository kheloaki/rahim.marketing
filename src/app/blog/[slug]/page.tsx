import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { RelatedResources } from "@/components/seo/related-resources";
import BlogArticleContent from "@/components/blog/blog-article-content";
import { buildPageMetadata } from "@/lib/seo";
import { EDITORIAL_TEAM } from "@/lib/site";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog-posts";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Blog" };
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    image: post.image,
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const schemaBreadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: path },
  ];
  const author = post.author || EDITORIAL_TEAM;

  return (
    <>
      <ComprehensiveSchema
        pageType="blog"
        data={{
          title: post.title,
          description: post.description,
          path,
          breadcrumbs: schemaBreadcrumbs,
          blogPost: {
            title: post.title,
            description: post.description,
            image: post.image,
            datePublished: post.datePublished,
            dateModified: post.dateModified ?? post.datePublished,
            author,
          },
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <article className="bg-[#0a0612] text-white min-h-screen">
            <section className="relative py-16 lg:py-24 px-6 overflow-hidden">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />
              <div className="container max-w-[780px] mx-auto relative z-10">
                <PageBreadcrumbs items={schemaBreadcrumbs} className="mb-6" />
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
                <span className="text-[#E44F71] text-xs font-semibold tracking-widest uppercase">
                  {post.category}
                </span>
                <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.15] tracking-tight mt-2 mb-6">
                  {post.title}
                </h1>
                <p className="text-lg text-white/70 mb-6">{post.description}</p>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 mb-8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 1024px) 860px, 90vw"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50 text-sm">
                  <span className="inline-flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {author}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.datePublished}>
                      {new Date(post.datePublished).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </span>
                  {post.dateModified && post.dateModified !== post.datePublished ? (
                    <span>
                      Updated{" "}
                      {new Date(post.dateModified).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  ) : null}
                </div>
              </div>
            </section>

            <section className="relative">
              <BlogArticleContent post={post} />
            </section>

            {post.related?.length ? (
              <RelatedResources links={post.related} variant="dark" title="Related reading" />
            ) : null}
          </article>
        </div>
        <Footer />
      </main>
    </>
  );
}
