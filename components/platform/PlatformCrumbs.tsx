import Link from "next/link";

type Crumb = { href?: string; label: string };

type Props = {
  items: Crumb[];
};

export default function PlatformCrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] text-ink-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-ink-600 transition-colors hover:text-ink-900"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-ink-900" : "text-ink-700"}>
                  {item.label}
                </span>
              )}
              {!isLast ? <span aria-hidden>›</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
