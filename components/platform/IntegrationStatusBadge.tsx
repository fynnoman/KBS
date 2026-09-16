import {
  INTEGRATION_STATUS_LABEL,
  type IntegrationStatus
} from "@/lib/data/platform/types";

const STYLE: Record<IntegrationStatus, string> = {
  direkte_integration: "bg-accent-500 text-white",
  api_integration: "bg-accent-100 text-accent-900",
  individuelle_integration: "bg-ink-900 text-white",
  eingeschraenkt: "bg-amber-100 text-amber-900",
  pruefung_erforderlich: "bg-ink-50 text-ink-700 border border-ink-900/10"
};

type Props = { status: IntegrationStatus };

export default function IntegrationStatusBadge({ status }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11.5px] font-semibold ${STYLE[status]}`}
    >
      {INTEGRATION_STATUS_LABEL[status]}
    </span>
  );
}
