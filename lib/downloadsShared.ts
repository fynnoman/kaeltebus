export const PUBLIC_CATEGORIES = [
  { slug: "kompass", label: "Kompass zur Helfertätigkeit" },
  { slug: "kochen", label: "Kochen" },
  { slug: "sachspenden", label: "Sachspenden" },
  { slug: "helfen-im-zelt", label: "Helfen im Zelt" },
  { slug: "versorgungstouren", label: "Versorgungstouren" },
];

export type DownloadVisibility = "public" | "internal";

export type DownloadRow = {
  id: string;
  title: string;
  description: string | null;
  visibility: DownloadVisibility;
  category: string | null;
  file_url: string;
  file_name: string;
  file_size: number;
  created_at: string;
  updated_at: string;
};

export function categoryLabel(slug: string | null | undefined) {
  if (!slug) return "Weitere Dokumente";
  return PUBLIC_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
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
