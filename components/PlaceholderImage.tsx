"use client";

import { useState } from "react";
import { ImageIcon, GraduationCap, Cpu, Boxes, Award } from "lucide-react";
import KIStamp from "./KIStamp";

const ICON_MAP = {
  image: ImageIcon,
  course: GraduationCap,
  module: Cpu,
  boxes: Boxes,
  award: Award
} as const;

export type PlaceholderIconName = keyof typeof ICON_MAP;

type Props = {
  src: string;
  alt: string;
  iconName?: PlaceholderIconName;
  aspect?: string;
  className?: string;
  showKIStamp?: boolean;
};

export default function PlaceholderImage({
  src,
  alt,
  iconName = "image",
  aspect = "aspect-[4/3]",
  className = "",
  showKIStamp = true
}: Props) {
  const [failed, setFailed] = useState(false);
  const Icon = ICON_MAP[iconName];

  return (
    <div
      className={`relative w-full overflow-hidden ${aspect} ${className}`}
    >
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-50 via-white to-accent-50">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-ink-900/10 bg-white/80 backdrop-blur">
            <Icon size={20} strokeWidth={1.6} className="text-ink-400" />
          </div>
          <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-ink-400">
            Bild folgt
          </p>
        </div>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
          {showKIStamp && <KIStamp />}
        </>
      )}
    </div>
  );
}
