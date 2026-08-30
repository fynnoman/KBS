import Link from "next/link";
import Image from "next/image";

export default function Logo({ height = 34 }: { height?: number }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="KBS KI-Beratung Saar"
    >
      <Image
        src="/kbs-logo.png"
        alt="KBS"
        width={Math.round(height * 1.5)}
        height={height}
        priority
        className="h-auto w-auto"
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
