import type { FaqItem } from "@/lib/data/platform/types";

type Props = {
  items: FaqItem[];
};

export default function FaqBlock({ items }: Props) {
  if (!items.length) return null;
  return (
    <div className="grid gap-3">
      {items.map((f, idx) => (
        <details
          key={idx}
          className="group card overflow-hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-[15px] font-semibold text-ink-900">
            {f.question}
            <span
              aria-hidden
              className="grid h-6 w-6 place-items-center rounded-full border border-ink-900/12 text-ink-600 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="border-t border-ink-900/8 px-6 py-4 text-[14px] leading-relaxed text-ink-700">
            {f.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
