import type { WorkflowStep } from "@/lib/data/platform/types";
import WorkflowDiagram from "./WorkflowDiagram";

type Props = {
  before: WorkflowStep[];
  after: WorkflowStep[];
};

export default function BeforeAfterCompare({ before, after }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card p-6">
        <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
          Vorher
        </div>
        <WorkflowDiagram steps={before} tone="muted" />
      </div>
      <div className="card p-6">
        <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-700">
          Nachher
        </div>
        <WorkflowDiagram steps={after} tone="accent" />
      </div>
    </div>
  );
}
