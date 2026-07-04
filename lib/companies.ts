import companiesJson from "@/data/companies.json";

export type Company = {
  name: string;
  sector: string;
  typicalNoticePeriod: string;
  buyoutCommon: string;
  lastUpdated: string;
  source: string;
};

/** All companies, sorted by name (case-insensitive). */
export function getCompanies(): Company[] {
  return [...(companiesJson as Company[])].sort((a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" })
  );
}

/**
 * Bucket a notice-period string by its worst-case (max) number of days,
 * used for badge colouring. "30 days" -> short, "30-60 days" -> medium,
 * "90 days" -> long.
 */
export function noticeBucket(period: string): "short" | "medium" | "long" {
  const numbers = period.match(/\d+/g)?.map(Number) ?? [];
  const maxDays = numbers.length > 0 ? Math.max(...numbers) : 0;
  if (maxDays <= 30) return "short";
  if (maxDays <= 60) return "medium";
  return "long";
}
