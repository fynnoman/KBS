import {
  VERIFICATION_LABEL,
  type VerificationStatus
} from "@/lib/data/platform/types";

const STYLE: Record<VerificationStatus, string> = {
  bestaetigt: "bg-accent-100 text-accent-900 border-accent-200",
  wahrscheinlich: "bg-ink-50 text-ink-700 border-ink-900/10",
  pruefung_erforderlich: "bg-amber-50 text-amber-800 border-amber-200"
};

type Props = {
  status: VerificationStatus;
  hint?: string;
};

export default function DataStatusBadge({ status, hint }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${STYLE[status]}`}
      title={hint}
    >
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {VERIFICATION_LABEL[status]}
    </span>
  );
}
