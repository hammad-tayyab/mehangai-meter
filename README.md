# Mehngai Meter — Pakistan @79

A mobile-first Pakistan inflation calculator built for the country’s 79th Independence Day. Enter a historical PKR amount and year to see its estimated 2026 purchasing-power equivalent, plus an illustrative then-versus-now basket.

## Stack

Vite, React, TypeScript, and Tailwind CSS. It is fully static: no APIs or backend are required.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Deploy

Deploy directly to Vercel. The standard Vite settings are detected automatically: build command `npm run build`, output directory `dist`.

## Data note

The CPI-style indices and price snapshots in `src/data/inflation.ts` are approximate historical estimates for storytelling and education, not an official inflation series or financial advice. Item prices are illustrative national-average snapshots.
