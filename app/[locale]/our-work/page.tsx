import type { ReactNode } from 'react'
import { getTranslations, getLocale } from 'next-intl/server'
import Image from 'next/image'
import Btn from '@/components/ui/Btn'
import SecondaryHero from '@/components/ui/SecondaryHero'
import SectionIntro from '@/components/ui/SectionIntro'
import { localize } from '@/lib/localize'
import { SERVICE_PILLARS, PHILOSOPHY } from '@/data/ourWork'
import logo from '@/assets/logo1.png'
import logo2 from '@/assets/logo2.png'

const PHILOSOPHY_AREAS = ['growth', 'beauty', 'wellness', 'education', 'mutual']

const PHILOSOPHY_ICONS: Record<string, ReactNode> = {
  growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21V10" strokeLinecap="round" />
      <path d="M12 10C12 10 7 10 7 5C7 5 12 5 12 10Z" strokeLinejoin="round" />
      <path d="M12 13C12 13 17 13 17 8C17 8 12 8 12 13Z" strokeLinejoin="round" />
    </svg>
  ),
  beauty: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 9.6C12 9.6 10.1 6 12 3C13.9 6 12 9.6 12 9.6Z" strokeLinejoin="round" />
      <path d="M14.4 12C14.4 12 18 10.1 21 12C18 13.9 14.4 12 14.4 12Z" strokeLinejoin="round" />
      <path d="M12 14.4C12 14.4 13.9 18 12 21C10.1 18 12 14.4 12 14.4Z" strokeLinejoin="round" />
      <path d="M9.6 12C9.6 12 6 13.9 3 12C6 10.1 9.6 12 9.6 12Z" strokeLinejoin="round" />
    </svg>
  ),
  wellness: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M12 20s-7-4.35-9.5-9C1 7.5 3 4 6.5 4c2 0 3.5 1.2 4 2.5.5-1.3 2-2.5 4-2.5C18 4 20 7.5 18.5 11 16 15.65 12 20 12 20Z"
        strokeLinejoin="round"
      />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M2 8l10-4 10 4-10 4-10-4Z" />
      <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
      <path d="M20 9v5" strokeLinecap="round" />
    </svg>
  ),
  mutual: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5" strokeLinecap="round" />
      <path d="M11 20c0-3 2.5-5 5-5s5 2 5 5" strokeLinecap="round" />
    </svg>
  ),
}

export default async function OurWork() {
  const t = await getTranslations()
  const locale = await getLocale()
  const pillars = SERVICE_PILLARS.map((pillar) => localize(pillar, locale))
  const philosophy = PHILOSOPHY.map((item) => localize(item, locale))

  return (
    <>
      <SecondaryHero
        gradient="light"
        watermark={logo}
        watermarkSide="left"
        watermarkRotate={-8}
        eyebrow={t('footer.exploreHeading')}
        title={t('ourWork.hero.heading')}
        desc={t('ourWork.hero.desc')}
      />

      <section className="bg-cream px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto max-w-[1100px]">
          <SectionIntro eyebrow={t('ourWork.pillars.eyebrow')} heading={t('ourWork.pillars.heading')} className="mb-10" />

          <div className="grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-xl border-t-[3px] border-t-gold bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <h3 className="mb-3 text-[1.05rem] text-green-dark">{pillar.title}</h3>
                <p className="text-[0.9rem] leading-[1.65] text-text">{pillar.examples}</p>
              </div>
            ))}
          </div>

          <div className="my-16 rounded-xl bg-green-dark p-12 text-center max-[640px]:my-12 max-[640px]:p-8">
            <p className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-gold-light uppercase">
              {t('ourWork.boundary.eyebrow')}
            </p>
            <h2 className="mb-[18px] text-[clamp(1.5rem,3vw,1.9rem)] text-white">{t('ourWork.boundary.heading')}</h2>
            <p className="mx-auto max-w-[760px] text-[0.98rem] leading-[1.75] text-white/[0.86]">
              {t('ourWork.boundary.desc')}
            </p>
          </div>

          <div className="my-16 rounded-2xl bg-green-dark px-10 py-14 max-[640px]:my-12 max-[640px]:px-6 max-[640px]:py-10">
            <div className="mb-12 text-center">
              <p className="flex items-center justify-center gap-4 text-[13px] font-bold tracking-[0.14em] text-gold-light uppercase">
                <span aria-hidden="true" className="inline-block h-px w-10 bg-gold" />
                {t('ourWork.philosophy.eyebrow')}
                <span aria-hidden="true" className="inline-block h-px w-10 bg-gold" />
              </p>
            </div>

            <div className="philosophy-grid mx-auto grid max-w-[1000px] grid-cols-[1fr_1.2fr_1fr] items-center gap-6 max-[900px]:grid-cols-1">
              {philosophy.map((item, index) => (
                <div
                  key={item.title}
                  style={{ gridArea: PHILOSOPHY_AREAS[index] }}
                  className="relative rounded-[14px] border border-gold/40 bg-cream px-[22px] pt-11 pb-[22px] text-center"
                >
                  <span className="absolute top-[18px] left-[18px] flex h-7 w-7 items-center justify-center text-gold">
                    {PHILOSOPHY_ICONS[PHILOSOPHY_AREAS[index]]}
                  </span>
                  <h3 className="mb-2.5 text-[1.15rem] font-bold text-text-h">{item.title}</h3>
                  <p className="text-[0.85rem] leading-[1.6] text-text">{item.desc}</p>
                </div>
              ))}

              <div style={{ gridArea: 'center' }} className="flex flex-col items-center justify-center text-center">
                <Image src={logo2} alt="AAWBA" className="mb-3 h-auto w-[140px]" />
                <p className="mb-1.5 font-serif text-[1.1rem] font-bold tracking-[0.05em] text-gold-light">AAWBA</p>
                <p className="text-[0.85rem] tracking-[0.03em] text-white/75">{t('ourWork.philosophy.brandMotto')}</p>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Btn href="/activities" variant="solid">
              {t('ourWork.cta')}
            </Btn>
          </div>
        </div>
      </section>
    </>
  )
}
