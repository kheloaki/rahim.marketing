import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ComprehensiveSchema } from "@/components/seo/comprehensive-schema";
import BlogArticleContent from "@/components/blog/blog-article-content";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog-posts";
import { ArrowLeft, Calendar } from "lucide-react";

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
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
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
          },
          faqs: post.faqs ?? [],
        }}
      />
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-[89px]">
          <article className="bg-[#0a0612] text-white min-h-screen">
            {/* Hero */}
            <section className="relative py-16 lg:py-24 px-6 overflow-hidden">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E44F71] opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />
              <div className="container max-w-[780px] mx-auto relative z-10">
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
                <p className="text-lg text-white/70 mb-6">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.datePublished}>
                    {new Date(post.datePublished).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.dateModified && post.dateModified !== post.datePublished && (
                    <>
                      <span>·</span>
                      <span>Updated {new Date(post.dateModified).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </>
                  )}
                </div>
              </div>
            </section>

            {/* Content + Sticky TOC + FAQ */}
            <section className="relative">
              <BlogArticleContent post={post} />
            </section>
          </article>
        </div>
        <Footer />
      </main>
    </>
  );
}
