// SEO tier and indexability helpers.
//
// Every catalog entity may opt out of Google-indexing with `isIndexable: false`.
// Bestand bleibt automatisch indexierbar (Feld fehlt oder true). Off-ICP-Slugs
// werden gesetzt, wenn sie bewusst aus dem Index gehalten werden sollen.
//
// The same predicate is used in every sitemap (to hide the URL) and in the
// detail page metadata (to emit `robots: { index: false, follow: true }`).
// Widersprüchliche Signale sind das Kernrisiko - beide Stellen müssen synchron
// bleiben.

export type Tier = "top" | "extended";

export interface IndexableEntity {
  isIndexable?: boolean;
  tier?: Tier;
}

export function isIndexable(entity: IndexableEntity | undefined | null): boolean {
  if (!entity) return false;
  return entity.isIndexable !== false;
}

export function noindexRobots() {
  return {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true }
  } as const;
}
