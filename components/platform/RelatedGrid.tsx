import Link from "next/link";

type Item = {
  href: string;
  title: string;
  sub?: string;
  eyebrow?: string;
};

type Props = {
  title: string;
  items: Item[];
};

export default function RelatedGrid({ title, items }: Props) {
  if (!items.length) return null;
  return (
    <div>
      <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
        {title}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group card p-5 transition-transform hover:-translate-y-0.5"
          >
            {item.eyebrow ? (
              <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
                {item.eyebrow}
              </div>
            ) : null}
            <div className="mt-1 flex items-start justify-between gap-3">
              <div className="text-[15px] font-semibold text-ink-900">
                {item.title}
              </div>
              <span
                aria-hidden
                className="text-ink-400 transition-transform group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </div>
            {item.sub ? (
              <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                {item.sub}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
