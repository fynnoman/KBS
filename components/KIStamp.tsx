/**
 * Kleiner Marker "KI" auf Content-Bildern.
 * Wird absolut positioniert – Elternelement muss `relative` sein.
 */
export default function KIStamp({
  position = "bottom-right"
}: {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}) {
  const pos =
    position === "bottom-right"
      ? "bottom-1.5 right-1.5"
      : position === "bottom-left"
      ? "bottom-1.5 left-1.5"
      : position === "top-right"
      ? "top-1.5 right-1.5"
      : "top-1.5 left-1.5";

  return (
    <span
      aria-label="KI-generiertes oder KI-unterstütztes Bild"
      className={`pointer-events-none absolute ${pos} z-20 inline-flex select-none items-center rounded-[3px] bg-black/45 px-[3px] py-[1px] font-mono text-[8px] font-semibold uppercase leading-none tracking-[0.16em] text-white/85 backdrop-blur-sm`}
    >
      KI
    </span>
  );
}
