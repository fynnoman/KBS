import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DepartmentPage from "@/components/DepartmentPage";
import { findDepartment } from "@/lib/data/useCases";
import { SITE_URL } from "@/lib/config";

const SLUG = "hr";

export function generateMetadata(): Metadata {
  const d = findDepartment(SLUG);
  if (!d) return {};
  const url = `${SITE_URL}${d.routePath}`;
  const description = d.intro.slice(0, 158);
  return {
    title: `${d.name} · KBS – KI-Beratung Saar`,
    description,
    alternates: { canonical: url },
    keywords: d.keywords,
    openGraph: {
      title: `${d.name} · KBS`,
      description,
      url,
      type: "article",
      locale: "de_DE",
      siteName: "KBS – KI-Beratung Saar",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
    }
  };
}

export default function Page() {
  const d = findDepartment(SLUG);
  if (!d) return notFound();
  return <DepartmentPage dept={d} />;
}
