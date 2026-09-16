import Link from "next/link";

const NAV = [
  { href: "/plattform", label: "Übersicht" },
  { href: "/probleme", label: "Probleme" },
  { href: "/automatisieren", label: "Automatisierungen" },
  { href: "/schnittstelle", label: "Schnittstellen" },
  { href: "/software", label: "Software" }
];

export default function PlatformNav() {
  return (
    <header className="sticky top-8 z-50 border-b border-ink-900/8 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/plattform"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-900"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-accent-500"
          />
          KBS · Automatisierungs-Plattform
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[12.5px] font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/kontakt"
          className="hidden rounded-full bg-ink-900 px-4 py-1.5 text-[12.5px] font-semibold text-white shadow-soft transition-colors hover:bg-ink-700 md:inline-flex"
        >
          Kostenlose Ersteinschätzung
        </Link>
      </div>
    </header>
  );
}
