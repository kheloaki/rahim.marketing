"use client";

import React, { useState, useEffect, useMemo } from "react";
import { slugify } from "@/lib/slugify";
import type { BlogPost } from "@/data/blog-posts";
import { Plus, Minus } from "lucide-react";

interface TocItem {
  title: string;
  id: string;
  level: "h2" | "h3";
}

interface BlogArticleContentProps {
  post: BlogPost;
}

function getTocItems(post: BlogPost): TocItem[] {
  return post.content
    .filter((block): block is { type: "h2" | "h3"; content: string } =>
      block.type === "h2" || block.type === "h3"
    )
    .map((block) => ({
      title: block.content,
      id: slugify(block.content),
      level: block.type,
    }));
}

export default function BlogArticleContent({ post }: BlogArticleContentProps) {
  const tocItems = useMemo(() => getTocItems(post), [post]);
  const firstId = tocItems.find((t) => t.level === "h2")?.id ?? tocItems[0]?.id ?? "";
  const [activeId, setActiveId] = useState<string>(firstId);

  useEffect(() => {
    if (tocItems.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [tocItems]);

  const faqs = post.faqs ?? [];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-[1280px] mx-auto px-6 pb-24">
      {/* Main content */}
      <div className="min-w-0 flex-1">
        <div className="max-w-[680px]">
          {post.content.map((block, i) => {
            if (block.type === "h2") {
              const id = slugify(block.content);
              return (
                <h2
                  key={i}
                  id={id}
                  className="text-xl font-bold text-white mt-10 mb-4 first:mt-0 scroll-mt-28"
                >
                  {block.content}
                </h2>
              );
            }
            if (block.type === "h3") {
              const id = slugify(block.content);
              return (
                <h3
                  key={i}
                  id={id}
                  className="text-lg font-semibold text-white mt-8 mb-3 scroll-mt-28"
                >
                  {block.content}
                </h3>
              );
            }
            if (block.type === "paragraph") {
              return (
                <p key={i} className="text-white/80 leading-relaxed mb-5">
                  {block.content}
                </p>
              );
            }
            if (block.type === "list" && block.items) {
              return (
                <div key={i} className="mb-6">
                  {block.content && (
                    <p className="text-white/80 font-medium mb-2">{block.content}</p>
                  )}
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div className="max-w-[680px] mt-16 pt-16 border-t border-white/10">
            <span className="text-[#E44F71] text-xs font-semibold tracking-widest uppercase">
              FAQ
            </span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    openFaqIndex === index
                      ? "border-[#E44F71]/30 bg-[#E44F71]/5"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span
                      className={`text-base font-semibold pr-6 ${
                        openFaqIndex === index ? "text-white" : "text-white/90"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        openFaqIndex === index
                          ? "bg-[#E44F71] text-white"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {openFaqIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky TOC - right side */}
      {tocItems.length > 0 && (
        <aside
          className="hidden lg:block w-[240px] flex-shrink-0"
          aria-label="Table of contents"
        >
          <div className="sticky top-[120px]">
            <span className="text-[#E44F71] text-xs font-semibold tracking-widest uppercase">
              On this page
            </span>
            <nav className="mt-3 space-y-0.5">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block py-1.5 rounded-lg text-sm transition-colors ${
                    item.level === "h3" ? "pl-5" : "pl-3"
                  } ${
                    activeId === item.id
                      ? "text-[#E44F71] font-semibold bg-[#E44F71]/10 border-l-2 border-[#E44F71] -ml-px pl-[11px]"
                      : "text-white/60 hover:text-white/90 hover:bg-white/5"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </div>
  );
}
