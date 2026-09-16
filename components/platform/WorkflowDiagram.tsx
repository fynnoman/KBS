import type { WorkflowStep } from "@/lib/data/platform/types";

type Props = {
  steps: WorkflowStep[];
  tone?: "muted" | "accent";
};

export default function WorkflowDiagram({ steps, tone = "muted" }: Props) {
  const stepBg =
    tone === "accent"
      ? "border-accent-200 bg-accent-50 text-accent-900"
      : "border-ink-900/8 bg-white text-ink-800";
  const arrowColor = tone === "accent" ? "text-accent-500" : "text-ink-400";
  return (
    <ol className="grid gap-3">
      {steps.map((step, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <div
            className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold ${stepBg}`}
          >
            {idx + 1}
          </div>
          <div className="flex-1">
            <div className="rounded-2xl border border-ink-900/8 bg-white px-4 py-3">
              <div className="text-[13.5px] font-medium text-ink-900">
                {step.title}
              </div>
              {step.detail ? (
                <div className="mt-1 text-[12.5px] leading-relaxed text-ink-600">
                  {step.detail}
                </div>
              ) : null}
            </div>
            {idx < steps.length - 1 ? (
              <div className={`mt-1 pl-3 text-[16px] leading-none ${arrowColor}`}>↓</div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
