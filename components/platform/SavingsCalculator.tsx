"use client";

import { useMemo, useState } from "react";

const NUMBER_FORMAT = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
const EUR_FORMAT = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

// Bewusst keine Marketing-Behauptung: der Rechner ist rein rechnerisch
// und zeigt Aufwand & theoretisches Einsparpotenzial transparent.
export default function SavingsCalculator() {
  const [volume, setVolume] = useState(200); // Vorgänge / Monat
  const [minutesPer, setMinutesPer] = useState(6); // Min. pro Vorgang
  const [hourlyCost, setHourlyCost] = useState(45); // Personalkosten / Stunde
  const [reductionPercent, setReductionPercent] = useState(60); // realistischer Automations-Anteil

  const { totalHours, currentCost, potentialCost, potentialSaving } =
    useMemo(() => {
      const totalMinutes = Math.max(0, volume * minutesPer);
      const totalHoursCalc = totalMinutes / 60;
      const current = totalHoursCalc * hourlyCost;
      const potentialHoursReduction =
        totalHoursCalc * (Math.min(Math.max(reductionPercent, 0), 100) / 100);
      const potentialCostReduction = potentialHoursReduction * hourlyCost;
      return {
        totalHours: totalHoursCalc,
        currentCost: current,
        potentialCost: current - potentialCostReduction,
        potentialSaving: potentialCostReduction
      };
    }, [volume, minutesPer, hourlyCost, reductionPercent]);

  return (
    <div className="card p-6">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
        Aufwands-Rechner
      </div>
      <h3 className="mt-2 text-2xl font-semibold text-ink-900">
        Wie viel Zeit steckt heute im Prozess?
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
        Der Rechner zeigt den heutigen Zeit- und Kostenaufwand und eine
        transparente Rechnung, welches Potenzial bei einem angenommenen
        Automations-Anteil realistisch wäre. Keine Marketing-Zahlen ·
        Ihre Eingaben, Ihre Rechnung.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <NumberField
          label="Vorgänge pro Monat"
          value={volume}
          onChange={setVolume}
          min={0}
        />
        <NumberField
          label="Minuten pro Vorgang"
          value={minutesPer}
          onChange={setMinutesPer}
          min={0}
        />
        <NumberField
          label="Personalkosten pro Stunde (€)"
          value={hourlyCost}
          onChange={setHourlyCost}
          min={0}
        />
        <NumberField
          label="Angenommener Automations-Anteil (%)"
          value={reductionPercent}
          onChange={setReductionPercent}
          min={0}
          max={100}
        />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Kpi label="Heutiger Zeitaufwand / Monat" value={`${NUMBER_FORMAT.format(totalHours)} Std.`} />
        <Kpi label="Heutige Kosten / Monat" value={EUR_FORMAT.format(currentCost)} />
        <Kpi
          label="Theoretisches Potenzial / Monat"
          value={EUR_FORMAT.format(potentialSaving)}
          highlight
        />
      </div>

      <p className="mt-4 text-[12px] leading-relaxed text-ink-500">
        Rechnung: Vorgänge × Minuten / 60 = Stunden. Stunden × Personalkosten =
        aktuelle Kosten. Automations-Anteil × aktuelle Kosten = theoretisches
        Potenzial. Verbleibende Kosten nach angenommener Automatisierung:{" "}
        {EUR_FORMAT.format(potentialCost)}.
      </p>
    </div>
  );
}

type NumberFieldProps = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
};

function NumberField({ label, value, onChange, min, max }: NumberFieldProps) {
  return (
    <label className="grid gap-1.5">
      <span className="text-[12px] font-medium text-ink-700">{label}</span>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => {
          const v = Number(e.target.value);
          if (!Number.isNaN(v)) onChange(v);
        }}
        className="rounded-2xl border border-ink-900/10 bg-white px-4 py-2.5 text-[14px] text-ink-900 outline-none focus:border-accent-400"
      />
    </label>
  );
}

function Kpi({
  label,
  value,
  highlight
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border px-5 py-4 ${
        highlight
          ? "border-accent-200 bg-accent-50"
          : "border-ink-900/8 bg-white"
      }`}
    >
      <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
        {label}
      </div>
      <div
        className={`mt-1 text-2xl font-semibold ${
          highlight ? "text-accent-900" : "text-ink-900"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
