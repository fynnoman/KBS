import Link from "next/link";
import { Landmark, ArrowUpRight } from "lucide-react";

type Props = {
  /** Optional page path so the anchor works cross-page. Defaults to same-page. */
  href?: string;
};

export default function FoerderungBadge({ href = "#foerderung" }: Props) {
  return (
    <section
      aria-label="Hinweis zur staatlichen Förderfähigkeit"
      className="relative pt-6 pb-2 md:pt-8"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href={href}
          className="doc-frame-hairline group flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-5 sm:py-3.5"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.22em] text-ink-700">
              <Landmark
                size={12}
                strokeWidth={2.2}
                className="text-accent-700"
              />
              Förderfähig
            </span>
            <span
              aria-hidden
              className="hidden h-3 w-px bg-ink-900/20 sm:inline-block"
            />
            <span className="text-[13px] leading-relaxed text-ink-700 sm:text-[13.5px]">
              Bis zu{" "}
              <span className="font-medium text-ink-900">80 Prozent</span>{" "}
              Zuschuss möglich. Ihr Unternehmen zahlt nur den Eigenanteil.
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[12px] font-medium text-ink-700 transition-colors group-hover:text-ink-900">
            Förderfähigkeit prüfen
            <ArrowUpRight
              size={13}
              strokeWidth={2.2}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      </div>
    </section>
  );
}
