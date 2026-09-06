import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type RelatedLink = {
  href: string;
  title: string;
  description?: string;
};

type RelatedResourcesProps = {
  title?: string;
  links: RelatedLink[];
  variant?: "dark" | "light";
};

export function RelatedResources({
  title = "Related resources",
  links,
  variant = "dark",
}: RelatedResourcesProps) {
  if (!links.length) return null;

  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 lg:py-20 ${isDark ? "bg-[#0a0612]" : "bg-[#f7f5f9]"}`}
    >
      <div className="container mx-auto px-5 lg:px-10 max-w-[960px]">
        <h2
          className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? "text-white" : "text-[#0a0612]"}`}
        >
          {title}
        </h2>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group flex items-start justify-between gap-4 rounded-xl border p-5 transition-colors ${
                  isDark
                    ? "border-white/10 bg-white/[0.02] hover:border-[#E44F71]/40"
                    : "border-black/10 bg-white hover:border-[#E44F71]/40"
                }`}
              >
                <div>
                  <p
                    className={`font-semibold mb-1 group-hover:text-[#E44F71] transition-colors ${
                      isDark ? "text-white" : "text-[#0a0612]"
                    }`}
                  >
                    {link.title}
                  </p>
                  {link.description ? (
                    <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                      {link.description}
                    </p>
                  ) : null}
                </div>
                <ArrowRight
                  className={`w-5 h-5 shrink-0 mt-0.5 ${isDark ? "text-white/40" : "text-black/40"} group-hover:text-[#E44F71]`}
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
