import { CATEGORY_LABEL, type ProblemCategory } from "@/lib/data/platform/types";

type Props = {
  category: ProblemCategory;
  tone?: "solid" | "soft";
};

export default function CategoryChip({ category, tone = "soft" }: Props) {
  const label = CATEGORY_LABEL[category];
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide";
  const solid = "bg-ink-900 text-white";
  const soft = "bg-ink-50 text-ink-700 border border-ink-900/8";
  return <span className={`${base} ${tone === "solid" ? solid : soft}`}>{label}</span>;
}
