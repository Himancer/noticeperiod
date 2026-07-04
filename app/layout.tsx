import type { Metadata } from "next";
import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Hourglass, GitBranch } from "lucide-react";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "NoticePeriod.fyi — know the notice period before you interview",
  description:
    "A community-maintained lookup of typical notice periods at India-market companies. Search a company, see the typical notice period and buyout culture, plan your switch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-neutral-950 text-neutral-200 antialiased selection:bg-amber-500/30">
        <header className="border-b border-neutral-900">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-sm text-neutral-200 transition-colors hover:text-amber-300"
            >
              <Hourglass
                className="h-4 w-4 text-amber-400 transition-transform group-hover:rotate-180"
                strokeWidth={1.5}
              />
              NoticePeriod<span className="text-amber-400">.fyi</span>
            </Link>
            <a
              href="https://github.com/Himancer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-500 transition-colors hover:text-amber-300"
            >
              <GitBranch className="h-3.5 w-3.5" strokeWidth={1.5} />
              open source
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
