# WAIZUMI Immigration Consulting Office

New multilingual website for [行政書士わいずみともみ事務所](https://www.visa-waizumi.com/) — replacing the current Wix site with a calmer, clearer brand experience.

## Status

- **Build language:** English (primary UX copy)
- **Source of truth for JP:** preserved Japanese from the live site + client PDFs in `content/` and `src/content/site.ts`
- **Chinese:** planned later
- **Japanese UI:** switch planned after EN structure is approved

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4

## Develop

```bash
npm install
npm run dev
```

## Content sources

| Path | What |
|------|------|
| `content/BRAND.md` | Brand discovery summary |
| `content/source/` | Original PDFs, logos |
| `src/content/site.ts` | Structured EN + JA copy for the site |

## Pages

Home · Services · Fees · Process · About · Contact
