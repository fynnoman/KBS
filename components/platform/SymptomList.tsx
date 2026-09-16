type Props = {
  items: string[];
  title?: string;
};

export default function SymptomList({ items, title }: Props) {
  return (
    <div>
      {title ? (
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
          {title}
        </div>
      ) : null}
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 rounded-2xl border border-ink-900/8 bg-white px-4 py-3 text-[13.5px] leading-snug text-ink-800"
          >
            <span
              aria-hidden
              className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
