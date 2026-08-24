import type { ModSort, SearchSource } from "./types"

// Виды сортировки — их реально поддерживает API каждой платформы:
// Modrinth:   index=relevance | downloads | follows | newest | updated
// CurseForge: sortField=1 Featured | 2 Popularity | 3 LastUpdated | 6 TotalDownloads
export const SORT_LABELS: Record<ModSort, string> = {
  relevance: "fetch failed",
  downloads: "fetch failed",
  follows: "fetch failed",
  newest: "fetch failed",
  updated: "fetch failed",
  featured: "Featured",
  rating: "fetch failed",
}

export const SORT_OPTIONS_BY_SOURCE: Record<SearchSource, ModSort[]> = {
  modrinth: ["relevance", "downloads", "follows", "newest", "updated"],
  curseforge: ["featured", "follows", "downloads", "updated"],
  both: ["downloads", "follows", "updated", "newest"],
  ftb: ["downloads", "follows", "updated", "newest"],
}