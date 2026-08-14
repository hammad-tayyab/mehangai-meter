# Mehngai Meter 🇵🇰

> **Pakistan @79 — see how far your rupee has fallen.**

Mehngai Meter is a mobile-first inflation calculator made for Pakistan’s 79th Independence Day. Enter an amount in Pakistani rupees and select any year from 1947–2025 to explore its estimated purchasing-power equivalent in 2026 — then see how everyday things have changed over time.

![Pakistan @79](https://img.shields.io/badge/Pakistan-%4079-01411C?style=for-the-badge&labelColor=ffffff)
![Vite](https://img.shields.io/badge/Vite-React-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

- Calculates an estimated **2026 PKR equivalent** for money held in any year from 1947 to 2025.
- Uses a smooth count-up animation to make the result immediate and easy to read.
- Gives a plain-language purchasing-power insight for the chosen year and amount.
- Compares an illustrative basket of Pakistani everyday items — naan, chai, petrol, gold, salary, and a family car — then and now.
- Has a responsive, mobile-first interface with Pakistan flag colours, Urdu copy, truck-art detail, and a lightweight Minar-e-Pakistan silhouette.
- Is fully static: no backend, API calls, accounts, or data collection.

## 🧮 How it works

The calculation uses a local composite CPI-style index:

```text
2026 equivalent = entered amount × (index for 2026 ÷ index for selected year)
```

All calculations run in the browser.

## 🛠 Tech stack

| Area | Technology |
| --- | --- |
| App framework | React + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| Data | Static TypeScript data file |
| Hosting | Vercel-ready static site |

## 🚀 Run locally

### Prerequisites

- Node.js 20 or newer is recommended.
- npm (included with Node.js).

### Installation

```bash
git clone <your-repository-url>
cd mehngai-meter
npm install
npm run dev
```

Vite will print a local address, usually `http://localhost:5173`.

### Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload. |
| `npm run build` | Type-check and create an optimized build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

## ☁️ Deploy to Vercel

No special deployment configuration is required.

1. Push this project to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) with GitHub.
3. Choose **Add New → Project**, then import the repository.
4. Vercel will detect Vite automatically. If settings are requested, use:

   ```text
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

5. Select **Deploy**.

Every later push to your production branch triggers a new deployment automatically.

## 📁 Project structure

```text
mehngai-meter/
├── src/
│   ├── data/
│   │   └── inflation.ts    # Historical index and illustrative price snapshots
│   ├── App.tsx             # Calculator UI, animation, and comparison experience
│   ├── index.css           # Tailwind theme and decorative styles
│   └── main.tsx            # React entry point
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 📊 Data disclaimer

The historical index and item-price snapshots in [`src/data/inflation.ts`](src/data/inflation.ts) are **approximate historical estimates**, assembled for education and storytelling. The price snapshots are illustrative national-average approximations, not an official price series.

Do not use them for investment, compensation, lending, or other financial decisions. Inflation is experienced differently across households, cities, and product categories.

## 🎨 Design principles

The interface puts the result first, keeps comparisons human, and makes the design unmistakably Pakistani. Deep flag green, warm cream, and gold are paired with cultural details that remain lightweight and fast to load.

## 📄 License

Built for **Chai اور Code #1**. You may adapt this project for learning and personal projects; please retain the data disclaimer when reusing the historical estimates.
