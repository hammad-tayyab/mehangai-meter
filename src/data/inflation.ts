export type ItemPrice = { label: string; unit: string; price: number; icon: string }

// Composite CPI-style index, rebased only for this calculator. Values are approximate historical estimates.
export const inflationIndex: Record<number, number> = {
  1947: 3.0, 1948: 3.2, 1949: 3.3, 1950: 3.4, 1951: 3.7, 1952: 3.8, 1953: 3.8, 1954: 3.9, 1955: 4.0, 1956: 4.2, 1957: 4.3, 1958: 4.4, 1959: 4.5,
  1960: 4.6, 1961: 4.8, 1962: 4.9, 1963: 5.0, 1964: 5.1, 1965: 5.3, 1966: 5.6, 1967: 5.7, 1968: 5.9, 1969: 6.2,
  1970: 6.8, 1971: 7.5, 1972: 8.4, 1973: 9.7, 1974: 11.1, 1975: 12.3, 1976: 13.2, 1977: 14.1, 1978: 15.5, 1979: 17.4,
  1980: 20.0, 1981: 22.3, 1982: 24.6, 1983: 26.6, 1984: 28.4, 1985: 30.1, 1986: 31.8, 1987: 34.2, 1988: 37.5, 1989: 42.0,
  1990: 47.5, 1991: 53.6, 1992: 59.0, 1993: 65.1, 1994: 72.1, 1995: 81.0, 1996: 89.6, 1997: 96.6, 1998: 102.5, 1999: 107.5,
  2000: 112.0, 2001: 115.0, 2002: 118.5, 2003: 122.5, 2004: 131.5, 2005: 141.6, 2006: 152.1, 2007: 164.0, 2008: 186.2, 2009: 206.3,
  2010: 230.7, 2011: 258.5, 2012: 280.7, 2013: 301.8, 2014: 324.3, 2015: 336.0, 2016: 347.4, 2017: 361.0, 2018: 380.7, 2019: 418.6,
  2020: 462.2, 2021: 506.4, 2022: 572.7, 2023: 740.2, 2024: 921.7, 2025: 1035.0, 2026: 1125.0,
}

// Illustrative national-average price snapshots; these are not official price series.
export const priceSnapshots: Record<number, ItemPrice[]> = {
  1970: [
    { label: 'Naan', unit: 'each', price: 0.15, icon: '◒' }, { label: 'Chai', unit: 'cup', price: 0.5, icon: '☕' }, { label: 'Petrol', unit: 'litre', price: 1.6, icon: '⛽' }, { label: 'Gold', unit: 'tola', price: 190, icon: '◆' }, { label: 'Govt salary', unit: 'monthly', price: 350, icon: '▤' }, { label: 'Family car', unit: 'new', price: 18000, icon: '🚗' },
  ],
  1980: [
    { label: 'Naan', unit: 'each', price: 0.5, icon: '◒' }, { label: 'Chai', unit: 'cup', price: 1.5, icon: '☕' }, { label: 'Petrol', unit: 'litre', price: 3.5, icon: '⛽' }, { label: 'Gold', unit: 'tola', price: 1200, icon: '◆' }, { label: 'Govt salary', unit: 'monthly', price: 900, icon: '▤' }, { label: 'Family car', unit: 'new', price: 55000, icon: '🚗' },
  ],
  1990: [
    { label: 'Naan', unit: 'each', price: 1.5, icon: '◒' }, { label: 'Chai', unit: 'cup', price: 4, icon: '☕' }, { label: 'Petrol', unit: 'litre', price: 10, icon: '⛽' }, { label: 'Gold', unit: 'tola', price: 4300, icon: '◆' }, { label: 'Govt salary', unit: 'monthly', price: 2500, icon: '▤' }, { label: 'Mehran', unit: 'new', price: 125000, icon: '🚗' },
  ],
  2000: [
    { label: 'Naan', unit: 'each', price: 3, icon: '◒' }, { label: 'Chai', unit: 'cup', price: 10, icon: '☕' }, { label: 'Petrol', unit: 'litre', price: 30, icon: '⛽' }, { label: 'Gold', unit: 'tola', price: 6000, icon: '◆' }, { label: 'Govt salary', unit: 'monthly', price: 5500, icon: '▤' }, { label: 'Mehran', unit: 'new', price: 290000, icon: '🚗' },
  ],
  2010: [
    { label: 'Naan', unit: 'each', price: 6, icon: '◒' }, { label: 'Chai', unit: 'cup', price: 25, icon: '☕' }, { label: 'Petrol', unit: 'litre', price: 74, icon: '⛽' }, { label: 'Gold', unit: 'tola', price: 42000, icon: '◆' }, { label: 'Govt salary', unit: 'monthly', price: 11000, icon: '▤' }, { label: 'Mehran', unit: 'new', price: 560000, icon: '🚗' },
  ],
  2020: [
    { label: 'Naan', unit: 'each', price: 12, icon: '◒' }, { label: 'Chai', unit: 'cup', price: 60, icon: '☕' }, { label: 'Petrol', unit: 'litre', price: 110, icon: '⛽' }, { label: 'Gold', unit: 'tola', price: 116000, icon: '◆' }, { label: 'Govt salary', unit: 'monthly', price: 25000, icon: '▤' }, { label: 'Alto', unit: 'new', price: 1500000, icon: '🚗' },
  ],
  2026: [
    { label: 'Naan', unit: 'each', price: 25, icon: '◒' }, { label: 'Chai', unit: 'cup', price: 140, icon: '☕' }, { label: 'Petrol', unit: 'litre', price: 275, icon: '⛽' }, { label: 'Gold', unit: 'tola', price: 365000, icon: '◆' }, { label: 'Govt salary', unit: 'monthly', price: 45000, icon: '▤' }, { label: 'Alto', unit: 'new', price: 2800000, icon: '🚗' },
  ],
}

export const nearestSnapshotYear = (year: number) =>
  Object.keys(priceSnapshots).map(Number).reduce((closest, candidate) =>
    Math.abs(candidate - year) < Math.abs(closest - year) ? candidate : closest,
  )
