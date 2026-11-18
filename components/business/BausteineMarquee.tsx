"use client";

const ITEMS = [
  "Lokale KI",
  "Custom RAG-Assistenten",
  "Prozess-Automation",
  "Enterprise-Rollout",
  "DSGVO by default",
  "EU AI Act",
  "On-Premise LLMs",
  "Sprach-KI",
  "Microsoft 365",
  "DATEV",
  "HubSpot",
  "Live-Schulungen"
];

export default function BausteineMarquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="Bausteine, mit denen KBS arbeitet"
      className="relative border-y border-ink-900/8 bg-white/80 py-5 backdrop-blur"
    >
      {/* Soft glow line above and below */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent"
      />
      <div
        className="pointer-events-none relative flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)"
        }}
      >
        <ul className="animate-marquee flex min-w-max items-center gap-10 pr-10 text-[12.5px] font-medium uppercase tracking-[0.2em] text-ink-500">
          {row.map((item, i) => (
            <li
              key={`${item}-${i}`}
              className="inline-flex items-center gap-10 whitespace-nowrap"
            >
              <span>{item}</span>
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 shadow-[0_0_8px_rgba(88,192,56,0.75)]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
