import { TECHNOLOGY_LABEL, type Technology } from "@/lib/data/platform/types";

type Props = { technologies: Technology[] };

export default function TechStackList({ technologies }: Props) {
  return (
    <ul className="flex flex-wrap gap-2">
      {technologies.map((t) => (
        <li
          key={t}
          className="inline-flex items-center rounded-full border border-ink-900/8 bg-white px-3 py-1 text-[12px] font-medium text-ink-700"
        >
          {TECHNOLOGY_LABEL[t]}
        </li>
      ))}
    </ul>
  );
}
