const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const DATE_RE = /^\w+,\s+(\w+)\s+(\d+),\s+(\d+)/

export function parseEventDate(dateLabel: string | undefined) {
  const match = DATE_RE.exec(dateLabel ?? '')
  if (!match) return null

  const monthIndex = MONTHS.indexOf(match[1].slice(0, 3).toLowerCase())
  if (monthIndex === -1) return null

  const day = Number(match[2])
  const year = Number(match[3])

  return {
    month: match[1].slice(0, 3).toUpperCase(),
    day: String(day),
    year,
    date: new Date(year, monthIndex, day),
  }
}
