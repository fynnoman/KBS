import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DepartmentPage from "@/components/DepartmentPage";
import { DEPARTMENTS, findDepartment } from "@/lib/data/useCases";
import { SITE_URL } from "@/lib/config";

export function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = findDepartment(slug);
  if (!d) return {};
  const url = `${SITE_URL}/ki-anwendungsfaelle/${d.slug}`;
  const description = d.intro.slice(0, 158);
  return {
    title: `${d.name} · KBS KI-Beratung Saar`,
    description,
    alternates: { canonical: url },
    keywords: d.keywords,
    openGraph: {
      title: `${d.name} · KBS`,
      description,
      url,
      type: "article",
      locale: "de_DE",
      siteName: "KBS KI-Beratung Saar",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
    }
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = findDepartment(slug);
  if (!d) return notFound();
  return <DepartmentPage dept={d} />;
}
