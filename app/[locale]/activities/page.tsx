'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import SecondaryHero from '@/components/ui/SecondaryHero'
import SectionIntro from '@/components/ui/SectionIntro'
import EventCard from '@/components/EventCard'
import EventDateStrip from '@/components/EventDateStrip'
import { UPCOMING_EVENTS, PAST_EVENTS } from '@/data/events'
import logo from '@/assets/logo1.png'

export default function Activities() {
  const t = useTranslations()
  const [showAll, setShowAll] = useState(false)

  return (
    <>
      <SecondaryHero
        gradient="light"
        watermark={logo}
        watermarkSide="left"
        watermarkRotate={-8}
        eyebrow={t('activities.hero.eyebrow')}
        title={t('activities.hero.heading')}
        desc={t('activities.hero.desc')}
        descMaxWidth="max-w-[560px]"
      />

      <EventDateStrip upcomingEvents={UPCOMING_EVENTS} pastEvents={PAST_EVENTS} />

      <section className="bg-cream px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
          <SectionIntro eyebrow={t('activities.upcoming.eyebrow')} heading={t('activities.upcoming.heading')} className="mb-2" />

          <div className="grid grid-cols-3 gap-6 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {UPCOMING_EVENTS.map((event) => (
              <EventCard event={event} key={event.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10">
          <SectionIntro eyebrow={t('activities.past.eyebrow')} heading={t('activities.past.heading')} />

          <div className="grid w-full grid-cols-3 gap-6 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {PAST_EVENTS.slice(0, 3).map((event) => (
              <EventCard event={event} key={event.slug} />
            ))}
          </div>

          <div
            className="grid w-full transition-[grid-template-rows] duration-[450ms] ease-in-out"
            style={{ gridTemplateRows: showAll ? '1fr' : '0fr' }}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="grid grid-cols-3 gap-6 pt-6 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
                {PAST_EVENTS.slice(3).map((event) => (
                  <div
                    key={event.slug}
                    className={`transition-[opacity,transform] duration-[350ms] ${
                      showAll ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-4 opacity-0'
                    }`}
                  >
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-[26px] py-3 text-[0.9rem] font-bold text-green-dark transition-colors hover:bg-green-dark hover:text-white"
            aria-expanded={showAll}
            onClick={() => setShowAll((open) => !open)}
          >
            {showAll ? t('activities.showLess') : t('activities.showMore')}
            <span
              aria-hidden="true"
              className={`inline-block transition-transform duration-[250ms] ${showAll ? 'rotate-180' : ''}`}
            >
              ▾
            </span>
          </button>
        </div>
      </section>
    </>
  )
}
