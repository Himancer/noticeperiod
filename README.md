# NoticePeriod.fyi ⏳

> **Know the notice period before you interview.**

A community-maintained lookup of typical notice periods at India-market companies. Search a company, see the typical notice period and buyout culture, and plan your switch — before the recruiter asks "how soon can you join?"

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![License](https://img.shields.io/badge/status-v0-amber)

**🔗 Live demo: [noticeperiod.vercel.app](https://noticeperiod.vercel.app/)**

> ## ⚠️ Data disclaimer
>
> **Sample seed data — community-reported, not official.** Notice periods vary by level, tenure and offer letter. **Verify with the company.** Contribute corrections via PR.

## ✨ Features (working today)

- **Instant client-side search** across 15 well-known India-market companies (TCS, Infosys, Wipro, Accenture, Cognizant, HCLTech, Amazon India, Flipkart, Razorpay, Zomato, Swiggy, Paytm, CRED, PhonePe, Freshworks) — filter by company name or sector, zero network calls.
- **Colour-coded notice badges** — green (≤30 days), amber (≤60 days), red (90 days), bucketed by worst-case wait.
- **Buyout signal** per company (`Often` / `Sometimes` / `Rare`).
- **Single-file dataset** — everything lives in [`data/companies.json`](data/companies.json); results are always sorted by name.
- **Contribute section** on the page documenting the exact JSON shape for PRs.
- **Fully static** — no database, no auth, no external services. Builds to static pages with security headers.

## 🧰 Stack

- [Next.js 16](https://nextjs.org/) (App Router, static generation)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [lucide-react](https://lucide.dev/) icons

## 🚀 Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## 🤝 Contributing data

All data lives in `data/companies.json`. Add or fix an entry and open a PR:

```json
{
  "name": "Acme Systems",
  "sector": "IT Services",
  "typicalNoticePeriod": "60 days",
  "buyoutCommon": "Sometimes",
  "lastUpdated": "2026-07",
  "source": "community-reported"
}
```

Rules:

- Keep names official (as the company writes them).
- Use day ranges like `"30-60 days"` when it varies by level.
- `buyoutCommon` is one of `"Often"`, `"Sometimes"`, `"Rare"`.
- Set `lastUpdated` to the current `YYYY-MM` so stale data is visible.

## 🗺️ Roadmap (v0 → v1)

Not built yet — honest list:

- [ ] Real community submissions flow (currently the dataset is sample seed data added by the author)
- [ ] Per-company detail pages with sources, level-wise breakdowns and edit history
- [ ] Filters and sorting by notice length, sector, buyout likelihood
- [ ] "Last verified" freshness indicators and stale-data warnings
- [ ] Many more companies (target: 200+) and non-India markets
- [ ] Anonymous "report a correction" form (without a backend this stays PR-only)
- [ ] Schema validation of `companies.json` in CI

## 👤 Author

**Himanshu Pandey**

- GitHub: [@Himancer](https://github.com/Himancer)
- LinkedIn: [linkedin.com/in/himanshu-pandey-ai](https://linkedin.com/in/himanshu-pandey-ai)
- Portfolio: [himanshu-portfolio-website-sr22.vercel.app](https://himanshu-portfolio-website-sr22.vercel.app)
