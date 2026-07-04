import {
  ArrowDown,
  TriangleAlert,
  GitPullRequest,
  Braces,
  CircleCheck,
} from "lucide-react";
import CompanyExplorer from "@/components/CompanyExplorer";
import { getCompanies } from "@/lib/companies";

const exampleEntry = `{
  "name": "Acme Systems",
  "sector": "IT Services",
  "typicalNoticePeriod": "60 days",
  "buyoutCommon": "Sometimes",
  "lastUpdated": "2026-07",
  "source": "community-reported"
}`;

export default function Home() {
  const companies = getCompanies();

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pt-24 pb-16 text-center sm:pt-32">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 font-mono text-[11px] text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          {companies.length} companies tracked · community-reported
        </p>
        <h1 className="mx-auto max-w-2xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-50 sm:text-6xl">
          Know the notice period
          <br className="hidden sm:block" />
          <span className="text-amber-400"> before you interview.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-neutral-500">
          90 days can kill an offer. Look up the typical notice period and
          buyout culture at India-market companies — before the recruiter
          asks &ldquo;how soon can you join?&rdquo;
        </p>
        <a
          href="#lookup"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-amber-300"
        >
          Look up a company
          <ArrowDown
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            strokeWidth={2}
          />
        </a>
      </section>

      {/* Integrity banner */}
      <section className="mx-auto max-w-5xl px-5">
        <div
          role="note"
          className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-left"
        >
          <TriangleAlert
            className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
            strokeWidth={1.5}
          />
          <p className="text-xs leading-relaxed text-amber-200/90">
            <span className="font-semibold text-amber-300">
              Sample seed data — community-reported, not official.
            </span>{" "}
            Notice periods vary by level, tenure and offer letter. Always
            verify with the company. Spotted an error? Contribute corrections
            via PR.
          </p>
        </div>
      </section>

      {/* Search + results */}
      <section className="mx-auto max-w-5xl px-5 pt-10 pb-20">
        <CompanyExplorer companies={companies} />
      </section>

      {/* Contribute */}
      <section id="contribute" className="border-t border-neutral-900">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] text-amber-400">
            <GitPullRequest className="h-3.5 w-3.5" strokeWidth={1.5} />
            CONTRIBUTE
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl">
            Fix a number. Add a company.
            <span className="text-neutral-500"> One JSON entry.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500">
            All data lives in a single file:{" "}
            <code className="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-xs text-amber-300">
              data/companies.json
            </code>
            . Edit it, open a pull request, done. Every entry follows this
            shape:
          </p>

          <pre className="mt-6 overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 font-mono text-xs leading-relaxed text-neutral-300">
            <code>{exampleEntry}</code>
          </pre>

          <ul className="mt-6 space-y-2 text-sm text-neutral-500">
            {[
              "Keep names official (as the company writes them).",
              'Use day ranges like "30-60 days" when it varies by level.',
              'buyoutCommon is one of: "Often", "Sometimes", "Rare".',
              "Set lastUpdated to the current YYYY-MM so stale data is visible.",
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-2">
                <CircleCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-400/70"
                  strokeWidth={1.5}
                />
                {rule}
              </li>
            ))}
          </ul>

          <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-neutral-600">
            <Braces className="h-3.5 w-3.5" strokeWidth={1.5} />
            No build steps, no database — the site rebuilds from the JSON.
          </p>
        </div>
      </section>
    </div>
  );
}
