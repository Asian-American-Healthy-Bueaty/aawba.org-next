import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { localize } from '@/lib/localize'
import { parseEventDate } from '@/lib/eventDate'
import type { EventItem } from '@/data/events'
import logo from '@/assets/logo1.png'

export default function EventCard({ event: rawEvent }: { event: EventItem }) {
  const t = useTranslations()
  const locale = useLocale()
  const event = localize(rawEvent, locale)
  const badge = parseEventDate(rawEvent.dateLabel)

  return (
    <Link
      href={`/activities/${event.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-white text-inherit no-underline shadow-[0_1px_3px_rgba(31,59,44,0.08)] transition-[box-shadow,transform] duration-[250ms] hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(31,59,44,0.16),0_4px_10px_rgba(31,59,44,0.08)]"
    >
      <div
        className={`relative flex aspect-[16/10] items-center justify-center ${
          event.poster.src
            ? 'overflow-hidden bg-green-dark/8'
            : 'bg-[radial-gradient(circle_at_50%_45%,rgba(189,138,79,0.14),rgba(47,78,61,0.06)_70%)]'
        }`}
      >
        {event.poster.src ? (
          <Image
            src={event.poster.src}
            alt={event.title}
            className="h-full w-full max-w-none object-cover opacity-100 transition-transform duration-[400ms] group-hover:scale-105"
          />
        ) : (
          <Image src={logo} alt="" aria-hidden="true" className="h-auto max-w-[100px] w-[30%] opacity-80" />
        )}
        {badge && (
          <span
            aria-hidden="true"
            className="absolute top-3.5 left-3.5 flex flex-col items-center rounded-[10px] bg-cream px-[11px] py-[7px] leading-none shadow-[0_4px_10px_rgba(0,0,0,0.14)]"
          >
            <span className="text-[0.65rem] font-bold tracking-[0.08em] text-gold">{badge.month}</span>
            <span className="mt-0.5 text-[1.15rem] font-extrabold text-green-dark">{badge.day}</span>
          </span>
        )}
        {event.featured && (
          <span className="absolute top-3.5 right-3.5 rounded-[4px] bg-gold px-3.5 py-1.5 text-[0.72rem] font-bold tracking-[0.08em] text-white uppercase">
            {t('eventCard.featured')}
          </span>
        )}
      </div>
      <div className="flex flex-col p-6">
        <h3 className="mb-2.5 text-[1.1rem] text-green-dark">{event.title}</h3>
        <p className="mb-1.5 flex items-center gap-1.5 text-[0.88rem] text-text">
          <svg className="h-3.5 w-3.5 flex-shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {event.dateLabel} · {event.time}
        </p>
        <p className="mb-0 flex items-center gap-1.5 text-[0.88rem] text-text">
          <svg className="h-3.5 w-3.5 flex-shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" strokeLinejoin="round" />
            <circle cx="12" cy="9.5" r="2.3" />
          </svg>
          {event.location}
        </p>
        <p className="mt-1.5 text-[0.88rem] leading-[1.6] text-text">{event.summary}</p>
        <span className="mt-2.5 inline-flex items-center gap-1.5 text-[0.9rem] font-bold text-green-dark">
          {t('eventCard.viewDetails')}
          <svg
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
