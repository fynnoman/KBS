import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/config";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href.startsWith("http") ? c.href : `${SITE_URL}${c.href}`
    }))
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-6xl px-6 pt-32 sm:pt-36"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-ink-400">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="font-medium text-ink-700">{c.label}</span>
              ) : (
                <Link
                  href={c.href}
                  className="hover:text-ink-900 hover:underline"
                >
                  {c.label}
                </Link>
              )}
              {!isLast && (
                <ChevronRight
                  size={13}
                  strokeWidth={2}
                  className="text-ink-300"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
