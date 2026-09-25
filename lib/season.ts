export function isWinterSeason(date: Date = new Date()): boolean {
  const month = date.getMonth();
  return month >= 10 || month <= 2;
}

export function currentSeasonLabel(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = date.getMonth();
  if (month >= 10) return `Winter ${year}/${year + 1}`;
  if (month <= 2) return `Winter ${year - 1}/${year}`;
  return `Winter ${year}/${year + 1}`;
}

export function nextWinterStart(date: Date = new Date()): Date {
  const year = date.getFullYear();
  const month = date.getMonth();
  if (month >= 10 || month <= 2) return new Date(year, 10, 1);
  return new Date(year, 10, 1);
}
