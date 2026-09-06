import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = { name: string; url: string };

type PageBreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Use on dark heroes */
  variant?: "dark" | "light";
  className?: string;
};

export function PageBreadcrumbs({
  items,
  variant = "dark",
  className = "",
}: PageBreadcrumbsProps) {
  if (!items.length) return null;

  const textMuted = variant === "dark" ? "text-white/50" : "text-black/50";
  const textLink = variant === "dark" ? "text-white/70 hover:text-white" : "text-black/60 hover:text-black";
  const textCurrent = variant === "dark" ? "text-white" : "text-black";

  return (
    <nav aria-label="Breadcrumb" className={`mb-6 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.url}-${item.name}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${textMuted}`} aria-hidden="true" />
              )}
              {isLast ? (
                <span className={`font-medium ${textCurrent}`} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className={`transition-colors ${textLink}`}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
