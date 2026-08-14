import { useEffect, useMemo, useState } from 'react'
import { inflationIndex, nearestSnapshotYear, priceSnapshots, type ItemPrice } from './data/inflation'

const years = Object.keys(inflationIndex).map(Number).filter((year) => year <= 2025).sort((a, b) => b - a)
const money = new Intl.NumberFormat('en-PK', { maximumFractionDigits: 0 })
const compact = new Intl.NumberFormat('en-PK', { notation: 'compact', maximumFractionDigits: 1 })

function formatMoney(value: number) { return `PKR ${money.format(Math.max(0, value))}` }
function formatPrice(value: number) { return value < 1 ? `PKR ${value.toFixed(2)}` : formatMoney(value) }
function quantity(amount: number, price: number) {
  const units = amount / price
  return units >= 1000 ? compact.format(units) : units >= 10 ? Math.round(units).toLocaleString('en-PK') : units.toFixed(1)
}

function useCountUp(target: number) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let frame = 0
    const start = performance.now()
    const duration = 760
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      setValue(target * (1 - Math.pow(1 - progress, 4)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target])
  return value
}

function MinarBackdrop() {
  return <svg className="absolute bottom-0 right-0 h-[280px] w-[210px] opacity-[.1] sm:h-[350px] sm:w-[270px]" viewBox="0 0 220 360" aria-hidden="true">
    <path fill="currentColor" d="M96 350h28l-5-192h-18zM84 158h52l-7-31H91zM91 124h38l-4-48h-30zM96 73h28l-6-52h-16zM104 15h12V0h-12zM74 350h72v-13H74zM68 337h84v-12H68z" />
    <path fill="none" stroke="currentColor" strokeWidth="7" d="M32 350c16-28 32-41 52-41M188 350c-16-28-32-41-52-41" />
  </svg>
}

function PurchaseCard({ thenItem, nowItem, amount, equivalent, isThen }: { thenItem: ItemPrice; nowItem: ItemPrice; amount: number; equivalent: number; isThen: boolean }) {
  const item = isThen ? thenItem : nowItem
  const available = isThen ? amount : equivalent
  return <div className="rounded-2xl border border-emerald-950/8 bg-white/75 p-3.5 shadow-sm backdrop-blur sm:p-4">
    <div className="flex items-start justify-between gap-2"><span className="text-xl" aria-hidden="true">{item.icon}</span><span className="rounded-full bg-emerald-950/6 px-2 py-0.5 text-[10px] font-bold tracking-wide text-emerald-950/65">{item.unit}</span></div>
    <p className="mt-2 text-xs font-semibold text-emerald-950/60">{item.label}</p>
    <p className="mt-0.5 text-sm font-extrabold text-pakistan">{formatPrice(item.price)}</p>
    <p className="mt-3 border-t border-emerald-950/8 pt-2 text-xs text-emerald-950/55">Your money buys <strong className="text-pakistan">{quantity(available, item.price)}</strong></p>
  </div>
}

export default function App() {
  const [amountText, setAmountText] = useState('100')
  const [year, setYear] = useState(1990)
  const amount = Math.max(0, Number(amountText.replace(/,/g, '')) || 0)
  const equivalent = useMemo(() => amount * (inflationIndex[2026] / inflationIndex[year]), [amount, year])
  const shownResult = useCountUp(equivalent)
  const snapshot = nearestSnapshotYear(year)
  const thenItems = priceSnapshots[snapshot].slice(0, 4)
  const nowItems = priceSnapshots[2026].slice(0, 4)
  const ratio = inflationIndex[2026] / inflationIndex[year]

  return <main className="min-h-screen overflow-hidden bg-cream">
    <section className="pattern relative isolate overflow-hidden bg-pakistan px-4 pb-24 pt-8 text-white sm:px-6 sm:pt-12">
      <MinarBackdrop />
      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[.16em] text-emerald-50/75"><span>Pakistan @79</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-gold" /> 14 August</span></div>
        <div className="mt-9 max-w-2xl sm:mt-12">
          <p className="mb-2 text-sm font-semibold text-gold">Azadi ka hisaab, rupee ke saath.</p>
          <h1 className="font-serif text-5xl font-black leading-[.92] tracking-tight sm:text-7xl">Mehngai Meter <span className="whitespace-nowrap">🇵🇰</span></h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-emerald-50/80 sm:text-lg">Pakistan @79 — see how far your rupee has fallen, and what it could still bring home.</p>
        </div>
      </div>
      <div className="truck-border absolute bottom-0 left-0 h-2 w-full" />
    </section>

    <section className="relative z-10 mx-auto -mt-14 max-w-4xl px-4 pb-12 sm:px-6">
      <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_64px_rgba(0,51,21,.15)]">
        <div className="grid gap-4 border-b border-emerald-950/10 p-5 sm:grid-cols-[1.25fr_.75fr] sm:gap-5 sm:p-8">
          <label className="block"><span className="mb-2 block text-xs font-extrabold uppercase tracking-[.12em] text-emerald-950/60">I had this much</span>
            <div className="flex rounded-xl border-2 border-emerald-950/15 bg-cream/60 transition focus-within:border-pakistan"><span className="grid place-items-center px-4 text-sm font-bold text-pakistan">PKR</span><input inputMode="decimal" value={amountText} onChange={(event) => setAmountText(event.target.value)} className="min-w-0 flex-1 bg-transparent py-3.5 pr-3 text-xl font-black text-pakistan outline-none" aria-label="Amount in Pakistani rupees" /></div>
          </label>
          <label className="block"><span className="mb-2 block text-xs font-extrabold uppercase tracking-[.12em] text-emerald-950/60">Back in the year</span>
            <select value={year} onChange={(event) => setYear(Number(event.target.value))} className="w-full rounded-xl border-2 border-emerald-950/15 bg-cream/60 px-4 py-[.9rem] text-xl font-black text-pakistan outline-none transition focus:border-pakistan" aria-label="Historical year">{years.map((itemYear) => <option key={itemYear} value={itemYear}>{itemYear}</option>)}</select>
          </label>
        </div>

        <div className="bg-[linear-gradient(135deg,#f7f5ed,#eaf5ec)] px-5 py-7 text-center sm:px-8 sm:py-10">
          <p className="text-xs font-extrabold uppercase tracking-[.16em] text-emerald-950/55">Worth in 2026</p>
          <p className="mt-2 break-words text-4xl font-black tracking-tight text-pakistan sm:text-6xl">{formatMoney(shownResult)}</p>
          <div className="mx-auto mt-5 max-w-xl rounded-xl border border-gold/45 bg-white/80 px-4 py-3 text-sm leading-relaxed text-emerald-950/70">In purchasing-power terms, <strong className="text-pakistan">PKR {money.format(amount)} in {year}</strong> is roughly equal to <strong className="text-pakistan">PKR {money.format(equivalent)} today</strong> — about <strong className="text-pakistan">{ratio.toFixed(1)}×</strong> more.</div>
        </div>

        <div className="p-5 sm:p-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-2"><div><p className="text-xs font-extrabold uppercase tracking-[.15em] text-gold">The everyday test</p><h2 className="mt-1 text-2xl font-black text-pakistan">Then vs Now</h2></div><p className="text-xs text-emerald-950/50">Closest price snapshot: {snapshot}</p></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {thenItems.map((item, index) => <PurchaseCard key={`then-${item.label}`} thenItem={item} nowItem={nowItems[index]} amount={amount} equivalent={equivalent} isThen />)}
          </div>
          <div className="my-4 flex items-center gap-3"><span className="h-px flex-1 bg-emerald-950/10" /><span className="rounded-full bg-pakistan px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">2026 prices</span><span className="h-px flex-1 bg-emerald-950/10" /></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {thenItems.map((item, index) => <PurchaseCard key={`now-${item.label}`} thenItem={item} nowItem={nowItems[index]} amount={amount} equivalent={equivalent} isThen={false} />)}
          </div>
        </div>
      </div>
      <footer className="mx-auto mt-7 max-w-2xl px-3 text-center text-xs leading-relaxed text-emerald-950/55">Built for <strong>Chai اور Code #1</strong> · Data: approximate historical estimates. CPI-style index and illustrative price snapshots are for education, not official financial statistics.</footer>
    </section>
  </main>
}
