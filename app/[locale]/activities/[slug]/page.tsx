import Image from 'next/image'
import { getTranslations, getLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { localize } from '@/lib/localize'
import { UPCOMING_EVENTS, PAST_EVENTS } from '@/data/events'
import GallerySlider from '@/components/GallerySlider'

export function generateStaticParams() {
  return [...UPCOMING_EVENTS, ...PAST_EVENTS].map((event) => ({ slug: event.slug }))
}

export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const t = await getTranslations()
  const locale = await getLocale()
  const rawEvent = [...UPCOMING_EVENTS, ...PAST_EVENTS].find((item) => item.slug === slug)
  const event = rawEvent ? localize(rawEvent, locale) : null

  if (!event) {
    return (
      <section className="bg-[linear-gradient(135deg,var(--color-green-light)_0%,var(--color-green)_45%,var(--color-green-dark)_100%)] px-6 pt-10 pb-14 text-white">
        <div className="mx-auto max-w-[1200px]">
          <Link href="/activities" className="text-[0.9rem] font-semibold text-white/[0.86] no-underline hover:text-white hover:underline">
            {t('eventDetail.backToActivities')}
          </Link>
          <h1 className="mt-7 text-[clamp(2rem,4.5vw,3rem)] leading-[1.2] text-white">{t('eventDetail.notFound')}</h1>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="bg-[linear-gradient(135deg,var(--color-green-light)_0%,var(--color-green)_45%,var(--color-green-dark)_100%)] px-6 pt-10 pb-14 text-white max-[640px]:px-5 max-[640px]:pt-8 max-[640px]:pb-11">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-7 flex items-center gap-4">
            <Link href="/activities" className="text-[0.9rem] font-semibold text-white/[0.86] no-underline hover:text-white hover:underline">
              {t('eventDetail.backToActivities')}
            </Link>
            {event.featured && (
              <span className="rounded-[4px] bg-gold px-3.5 py-1.5 text-[0.72rem] font-bold tracking-[0.08em] text-white uppercase">
                {t('eventDetail.featured')}
              </span>
            )}
          </div>
          <h1 className="mb-3.5 text-[clamp(2rem,4.5vw,3rem)] leading-[1.2] text-white">{event.title}</h1>
          <p className="text-base font-semibold text-gold-light">
            {event.dateLabel} · {event.time} · {event.location}
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 pt-14 pb-24 max-[640px]:px-5 max-[640px]:pt-10 max-[640px]:pb-16">
        <div className="mx-auto max-w-[1200px]">
          {event.poster.src ? (
            <Image
              src={event.poster.src}
              alt={event.title}
              className="mb-10 block aspect-[5/2] w-full rounded-xl object-cover max-[860px]:aspect-video"
            />
          ) : (
            <div className="media-placeholder mb-10 aspect-[5/2] w-full rounded-xl max-[860px]:aspect-video">
              {event.poster.label}
            </div>
          )}

          <div className="grid grid-cols-[2fr_1fr] items-start gap-12 max-[860px]:grid-cols-1">
            <div>
              <h2 className="mb-4 text-[1.4rem] text-green-dark">{t('eventDetail.aboutEvent')}</h2>
              {event.description.map((section, sectionIndex) => (
                <div key={sectionIndex} className="[&+&]:mt-2">
                  {section.heading && <h3 className="mb-3 text-[1.1rem] text-green-dark">{section.heading}</h3>}
                  {section.blocks.map((block, blockIndex) =>
                    block.type === 'list' ? (
                      <ul key={blockIndex} className="mb-4 list-disc pl-5 text-[0.98rem] leading-[1.75] text-text">
                        {block.items?.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-1.5">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={blockIndex} className="mb-4 text-[0.98rem] leading-[1.75] text-text">
                        {block.text}
                      </p>
                    ),
                  )}
                </div>
              ))}

              <h2 className="mt-10 mb-4 text-[1.4rem] text-green-dark">{t('eventDetail.gallery')}</h2>
              <GallerySlider images={event.gallery} altPrefix={event.title} />
            </div>

            <aside className="flex flex-col gap-1 rounded-xl border border-border bg-white p-7">
              <h3 className="mb-4 text-[1.15rem] text-green-dark">{event.title}</h3>

              <div className="border-t border-border py-2.5 first:border-t-0">
                <p className="mb-1 text-[0.72rem] font-bold tracking-[0.1em] text-gold uppercase">{t('eventDetail.dateLabel')}</p>
                <p className="text-[0.95rem] font-semibold text-text-h">{event.dateLabel}</p>
              </div>
              <div className="border-t border-border py-2.5">
                <p className="mb-1 text-[0.72rem] font-bold tracking-[0.1em] text-gold uppercase">{t('eventDetail.timeLabel')}</p>
                <p className="text-[0.95rem] font-semibold text-text-h">{event.time}</p>
              </div>
              <div className="border-t border-border py-2.5">
                <p className="mb-1 text-[0.72rem] font-bold tracking-[0.1em] text-gold uppercase">{t('eventDetail.locationLabel')}</p>
                <p className="text-[0.95rem] font-semibold text-text-h">{event.location}</p>
              </div>

              {event.registrationUrl ? (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center rounded-md bg-green-dark px-[22px] py-3.5 text-center text-[0.9rem] font-bold text-white no-underline transition-colors hover:bg-green"
                >
                  {t('eventDetail.rsvpRegister')}
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="mt-5 flex items-center justify-center rounded-md bg-green-dark px-[22px] py-3.5 text-center text-[0.9rem] font-bold text-white no-underline transition-colors hover:bg-green"
                >
                  {t('eventDetail.rsvpGetInvolved')}
                </Link>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
