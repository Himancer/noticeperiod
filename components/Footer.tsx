import { GitBranch, Briefcase, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-5 py-8 font-mono text-xs text-neutral-600 sm:flex-row sm:items-center">
        <span>
          Built by{" "}
          <a
            href="https://himanshu-portfolio-website-sr22.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 underline decoration-neutral-700 underline-offset-4 transition-colors hover:text-amber-300 hover:decoration-amber-400"
          >
            Himanshu Pandey
          </a>{" "}
          — community-reported data, not legal advice.
        </span>
        <span className="flex items-center gap-4">
          <a
            href="https://github.com/Himancer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-amber-300"
          >
            <GitBranch className="h-3.5 w-3.5" strokeWidth={1.5} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/himanshu-pandey-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-amber-300"
          >
            <Briefcase className="h-3.5 w-3.5" strokeWidth={1.5} />
            LinkedIn
          </a>
          <a
            href="https://himanshu-portfolio-website-sr22.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-amber-300"
          >
            <Globe className="h-3.5 w-3.5" strokeWidth={1.5} />
            Portfolio
          </a>
        </span>
      </div>
    </footer>
  );
}
