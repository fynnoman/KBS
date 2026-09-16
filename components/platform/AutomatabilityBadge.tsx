import {
  AUTOMATION_LEVEL_LABEL,
  HUMAN_CONTROL_LABEL,
  type AutomationLevel,
  type HumanControl
} from "@/lib/data/platform/types";

const LEVEL_STYLE: Record<AutomationLevel, { dots: number; tone: string }> = {
  niedrig: { dots: 1, tone: "bg-ink-200 text-ink-700" },
  teilweise: { dots: 2, tone: "bg-accent-100 text-accent-900" },
  hoch: { dots: 3, tone: "bg-accent-200 text-accent-900" },
  sehr_hoch: { dots: 4, tone: "bg-accent-500 text-white" }
};

type Props = {
  level: AutomationLevel;
  control: HumanControl;
};

export default function AutomatabilityBadge({ level, control }: Props) {
  const cfg = LEVEL_STYLE[level];
  return (
    <div className="inline-flex flex-wrap items-center gap-2">
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11.5px] font-semibold ${cfg.tone}`}
      >
        <span className="inline-flex items-center gap-0.5" aria-hidden>
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i < cfg.dots ? "bg-current opacity-100" : "bg-current opacity-25"
              }`}
            />
          ))}
        </span>
        {AUTOMATION_LEVEL_LABEL[level]}
      </span>
      <span className="inline-flex items-center rounded-full border border-ink-900/8 bg-white px-3 py-1 text-[11.5px] font-medium text-ink-700">
        {HUMAN_CONTROL_LABEL[control]}
      </span>
    </div>
  );
}
