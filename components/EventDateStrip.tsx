'use client'

import { useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { localize } from '@/lib/localize'
import { parseEventDate } from '@/lib/eventDate'
import type { EventItem } from '@/data/events'

function buildEntries(upcomingEvents: EventItem[], pastEvents: EventItem[]) {
  return [
    ...upcomingEvents.map((event) => ({ event, isPast: false })),
    ...pastEvents.map((event) => ({ event, isPast: true })),
  ]
    .map((entry) => ({ ...entry, parsed: parseEventDate(entry.event.dateLabel) }))
    .filter((entry): entry is typeof entry & { parsed: NonNullable<typeof entry.parsed> } => entry.parsed !== null)
    .sort((a, b) => a.parsed.date.getTime() - b.parsed.date.getTime())
}

export default function EventDateStrip({
  upcomingEvents,
  pastEvents,
}: {
  upcomingEvents: EventItem[]
  pastEvents: EventItem[]
}) {
  const t = useTranslations()
  const locale = useLocale()
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)

  const entries = buildEntries(upcomingEvents, pastEvents)

  useEffect(() => {
    if (!selectedSlug) return
    const onKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') setSelectedSlug(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [selectedSlug])

  if (!entries.length) return null

  const selectedEntry = entries.find((entry) => entry.event.slug === selectedSlug)
  const selectedEvent = selectedEntry ? localize(selectedEntry.event, locale) : null

  return (
    <section className="bg-cream px-6 pt-10" aria-label={t('activities.calendar.heading')}>
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 text-[13px] font-bold tracking-[0.14em] text-gold uppercase">
          {t('activities.calendar.heading')}
        </p>

        <div className="flex gap-3 overflow-x-auto pb-2 [scroll-snap-type:x_proximity]">
          {entries.map(({ event, isPast, parsed }) => (
            <button
              type="button"
              key={event.slug}
              className={`flex min-w-16 flex-shrink-0 flex-col items-center rounded-xl border border-border bg-white px-3.5 py-2.5 leading-none transition-[border-color,box-shadow,transform] [scroll-snap-align:start] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(31,59,44,0.1)] ${
                isPast ? 'opacity-55' : ''
              } ${event.slug === selectedSlug ? `border-gold shadow-[0_6px_16px_rgba(189,138,79,0.22)] ${isPast ? 'opacity-100' : ''}` : ''}`}
              aria-pressed={event.slug === selectedSlug}
              onClick={() => setSelectedSlug((current) => (current === event.slug ? null : event.slug))}
            >
              <span className="text-[0.65rem] font-bold tracking-[0.08em] text-gold">{parsed.month}</span>
              <span className="mt-[3px] text-[1.2rem] font-extrabold text-green-dark">{parsed.day}</span>
            </button>
          ))}
        </div>

        {selectedEvent && (
          <div
            className="relative mt-5 rounded-[10px] border border-border border-l-[3px] border-l-gold bg-white py-5 pr-12 pl-5"
            role="region"
            aria-live="polite"
          >
            <button
              type="button"
              className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-md border-none bg-transparent text-[1.3rem] leading-none text-text transition-colors hover:bg-green-dark/8 hover:text-green-dark"
              aria-label={t('activities.calendar.close')}
              onClick={() => setSelectedSlug(null)}
            >
              ×
            </button>
            <p className="mb-2 text-[1.05rem] font-bold text-green-dark">{selectedEvent.title}</p>
            <p className="mb-1 text-[0.88rem] text-text">
              {selectedEvent.dateLabel} · {selectedEvent.time}
            </p>
            <p className="mb-1 text-[0.88rem] text-text">{selectedEvent.location}</p>
            <Link href={`/activities/${selectedEvent.slug}`} className="mt-2 inline-block text-[0.9rem] font-bold text-green-dark">
              {t('eventCard.viewDetails')}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
