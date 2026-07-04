"use client";

import { useMemo, useState } from "react";
import { Search, Building2, Banknote, CalendarClock, SearchX } from "lucide-react";
import { noticeBucket, type Company } from "@/lib/companies";

const badgeStyles: Record<ReturnType<typeof noticeBucket>, string> = {
  short: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  medium: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  long: "border-rose-500/30 bg-rose-500/10 text-rose-300",
};

const buyoutStyles: Record<string, string> = {
  Often: "text-emerald-400",
  Sometimes: "text-amber-400",
  Rare: "text-rose-400",
};

export default function CompanyExplorer({
  companies,
}: {
  companies: Company[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return companies;
    return companies.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.sector.toLowerCase().includes(q)
    );
  }, [query, companies]);

  return (
    <div id="lookup" className="scroll-mt-24">
      <label className="group relative block">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600 transition-colors group-focus-within:text-amber-400"
          strokeWidth={1.5}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a company or sector… e.g. TCS, fintech"
          autoComplete="off"
          spellCheck={false}
          className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 py-3.5 pl-11 pr-4 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-colors focus:border-amber-500/50 focus:bg-neutral-900"
        />
      </label>

      <p className="mt-3 font-mono text-[11px] text-neutral-600">
        {filtered.length} of {companies.length} companies · sorted by name ·
        colour = worst-case wait
      </p>

      {filtered.length === 0 ? (
        <div className="np-fade mt-6 flex flex-col items-center gap-3 rounded-xl border border-dashed border-neutral-800 px-6 py-14 text-center">
          <SearchX className="h-6 w-6 text-neutral-700" strokeWidth={1.5} />
          <p className="text-sm text-neutral-500">
            No match for &ldquo;{query}&rdquo; yet.
          </p>
          <a
            href="#contribute"
            className="font-mono text-xs text-amber-400 underline decoration-amber-500/40 underline-offset-4 transition-colors hover:text-amber-300"
          >
            Add it via a pull request →
          </a>
        </div>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => {
            const bucket = noticeBucket(c.typicalNoticePeriod);
            return (
              <li
                key={c.name}
                className="np-fade group rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 transition-colors hover:border-neutral-700 hover:bg-neutral-900/70"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-neutral-100">
                    {c.name}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${badgeStyles[bucket]}`}
                  >
                    {c.typicalNoticePeriod}
                  </span>
                </div>
                <dl className="mt-4 space-y-2 text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                    <dt className="sr-only">Sector</dt>
                    <dd>{c.sector}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Banknote className="h-3.5 w-3.5" strokeWidth={1.5} />
                    <dt>Buyout:</dt>
                    <dd
                      className={
                        buyoutStyles[c.buyoutCommon] ?? "text-neutral-400"
                      }
                    >
                      {c.buyoutCommon}
                    </dd>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <CalendarClock className="h-3.5 w-3.5" strokeWidth={1.5} />
                    <dt className="sr-only">Last updated</dt>
                    <dd className="font-mono text-[11px]">
                      {c.source} · {c.lastUpdated}
                    </dd>
                  </div>
                </dl>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
