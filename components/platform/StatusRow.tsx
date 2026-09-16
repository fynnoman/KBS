import DataStatusBadge from "./DataStatusBadge";
import type { VerificationStatus } from "@/lib/data/platform/types";

type Row = { label: string; value: string; status?: VerificationStatus };

type Props = {
  title: string;
  rows: Row[];
};

export default function StatusRow({ title, rows }: Props) {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-ink-900/8 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
        {title}
      </div>
      <ul className="divide-y divide-ink-900/8">
        {rows.map((r, idx) => (
          <li key={idx} className="grid gap-2 px-6 py-4 sm:grid-cols-[180px_1fr_auto] sm:items-center">
            <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-500">
              {r.label}
            </div>
            <div className="text-[14px] text-ink-800">{r.value}</div>
            <div className="justify-self-start sm:justify-self-end">
              {r.status ? <DataStatusBadge status={r.status} /> : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
