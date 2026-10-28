export const DOWNLOAD_CATEGORIES = [
  { slug: "kompass", label: "Kompass zur Helfertätigkeit", visibility: "public" as const },
  { slug: "kochen", label: "Kochen", visibility: "public" as const },
  { slug: "sachspenden", label: "Sachspenden", visibility: "public" as const },
  { slug: "helfen-im-zelt", label: "Helfen im Zelt", visibility: "public" as const },
  { slug: "versorgungstouren", label: "Versorgungstouren", visibility: "public" as const },
  { slug: "einladungen", label: "Einladungen", visibility: "members" as const },
  { slug: "protokolle", label: "Protokolle", visibility: "members" as const },
  { slug: "sonstiges-mitglieder", label: "Sonstiges (Mitglieder)", visibility: "members" as const },
];

export type DownloadVisibility = "public" | "members";

export type DownloadRow = {
  id: string;
  title: string;
  description: string | null;
  category: string;
  visibility: DownloadVisibility;
  file_url: string;
  file_name: string;
  file_size: number;
  sort: number;
  created_at: string;
  updated_at: string;
};

export function categoryLabel(slug: string) {
  return DOWNLOAD_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export function formatBytes(bytes: number) {
  if (!bytes) return "—";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value < 10 && unit > 0 ? value.toFixed(1) : Math.round(value)} ${units[unit]}`;
}
