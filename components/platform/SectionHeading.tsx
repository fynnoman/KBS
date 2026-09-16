type Props = {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left"
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-900 md:text-4xl">
        {title}
      </h2>
      {sub ? (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-600 md:text-base">
          {sub}
        </p>
      ) : null}
    </div>
  );
}
