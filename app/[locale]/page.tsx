'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import Btn from '@/components/ui/Btn'
import { localize } from '@/lib/localize'
import logo from '@/assets/logo1.png'
import { FOUNDER, BOARD, STAFF, ADVISORY, LEADERSHIP_GROUPS, PILLARS, HERO_IMAGES } from '@/data/leadership'

type Person = {
  name: string
  role: string
  photo: (typeof BOARD)[number]['photo']
  desc: string
}

function BoardPhoto({ person, onClick, size = 88 }: { person: Person; onClick: () => void; size?: number }) {
  return (
    <button
      type="button"
      className="mx-auto mb-4 flex items-center justify-center overflow-hidden rounded-full border-none bg-green-dark/8 p-0 transition-[transform,box-shadow] hover:scale-105 hover:shadow-[0_0_0_4px_rgba(189,138,79,0.35)] focus-visible:scale-105 focus-visible:shadow-[0_0_0_4px_rgba(189,138,79,0.35)] focus-visible:outline-none"
      style={{ width: size, height: size }}
      onClick={onClick}
      aria-label={`View details for ${person.name}`}
    >
      <Image src={person.photo} alt={person.name} className="h-full w-full object-cover" />
    </button>
  )
}

export default function Home() {
  const t = useTranslations()
  const locale = useLocale()
  const [activePerson, setActivePerson] = useState<Person | null>(null)
  const [heroSlide, setHeroSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((index) => (index + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const founder = localize(FOUNDER, locale)
  const board = BOARD.map((member) => localize(member, locale))
  const staff = STAFF.map((member) => localize(member, locale))
  const advisory = ADVISORY.map((member) => localize(member, locale))
  const leadershipGroups = LEADERSHIP_GROUPS.map((group) => localize(group, locale))
  const pillars = PILLARS.map((pillar) => localize(pillar, locale))
  const heroTitleLines = t.raw('home.hero.titleLines') as string[]

  return (
    <>
      {activePerson && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(20,30,24,0.6)] p-6"
          onClick={() => setActivePerson(null)}
        >
          <div
            className="relative flex max-h-[85vh] w-full max-w-[640px] flex-col items-center gap-5 overflow-y-auto rounded-2xl bg-white px-10 pt-12 pb-10 text-center max-[640px]:px-6 max-[640px]:pt-10 max-[640px]:pb-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="leadership-modal-name"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border-none bg-green-dark/8 text-[1.4rem] leading-none text-green-dark hover:bg-green-dark/16"
              aria-label={t('home.modal.close')}
              onClick={() => setActivePerson(null)}
            >
              ×
            </button>
            <div className="h-[140px] w-[140px] flex-shrink-0 overflow-hidden rounded-full">
              <Image src={activePerson.photo} alt={activePerson.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 id="leadership-modal-name" className="mb-1.5 text-[1.3rem] text-green-dark">
                {activePerson.name}
              </h3>
              <p className="mb-3 text-[0.85rem] font-semibold text-gold">{activePerson.role}</p>
              {activePerson.desc.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-3.5 text-left text-[0.95rem] leading-[1.7] text-text last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-green-dark)_0%,var(--color-green)_48%,var(--color-green-light)_100%)] px-6 pt-[130px] pb-[110px] text-center text-white max-[640px]:pt-[90px] max-[640px]:pb-[70px]">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {HERO_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000 ${
                index === heroSlide ? 'opacity-100' : ''
              }`}
              style={{ backgroundImage: `url(${image.src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-[rgba(10,20,15,0.62)]" />
        </div>
        <Image
          src={logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-[220px] -bottom-[300px] h-[900px] w-[900px] max-w-none rotate-[174deg] opacity-[0.12] brightness-0 invert"
        />
        <div className="relative z-[1] mx-auto max-w-[760px]">
          <p className="mb-[18px] text-[13px] font-bold tracking-[0.14em] text-gold-light uppercase">
            {t('home.hero.eyebrow')}
          </p>
          <h1 className="mb-[18px] text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.15] text-white">
            {heroTitleLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < heroTitleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mb-[22px] font-serif text-[clamp(1.15rem,2.2vw,1.4rem)] font-medium text-gold-light italic">
            {t('home.hero.tagline')}
          </p>
          <p className="mx-auto mb-[38px] max-w-[620px] text-[1.05rem] leading-[1.65] text-white/[0.86]">
            {t('home.hero.desc')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Btn href="/contact" variant="solid">
              {t('home.hero.getInvolved')}
            </Btn>
            <Btn href="/#about" variant="outline">
              {t('home.hero.ourStory')}
            </Btn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24 text-left max-[640px]:px-5 max-[640px]:py-16">
        <p className="mb-4 text-[13px] font-bold tracking-[0.14em] text-gold uppercase">{t('home.why.eyebrow')}</p>
        <h2 className="mb-14 text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.2] whitespace-nowrap text-green-dark max-[640px]:mb-10 max-[640px]:whitespace-normal">
          {t('home.why.heading')}
        </h2>
        <div className="grid grid-cols-3 max-[640px]:grid-cols-1 max-[640px]:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`px-10 first:pl-0 max-[640px]:px-0 ${i > 0 ? 'border-l border-border max-[640px]:border-t max-[640px]:border-l-0 max-[640px]:pt-8' : ''}`}
            >
              <p className="mb-5 font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-gold-light">{pillar.number}</p>
              <h3 className="mb-3 text-[1.3rem] text-green-dark">{pillar.title}</h3>
              <p className="text-[0.98rem] leading-[1.7] text-text">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-[90px] bg-cream px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
          <div className="grid grid-cols-[minmax(260px,380px)_1fr] items-center gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-8">
            <div className="flex aspect-[4/3.3] items-center justify-center rounded-xl bg-green-dark/8 p-10 max-[860px]:aspect-video">
              <Image src={logo} alt="AAWBA" className="h-auto w-[55%] max-w-[180px] opacity-85" />
            </div>
            <div>
              <p className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-gold uppercase">
                {t('home.about.eyebrow')}
              </p>
              <h2 className="mb-5 text-[clamp(1.8rem,4vw,2.4rem)] text-green-dark">{t('home.about.heading')}</h2>
              <p className="mb-4 text-[0.98rem] leading-[1.75] text-text last:mb-0">{t('home.about.desc')}</p>
              <Btn href="/about" variant="solid" className="mt-2">
                {t('home.about.learnMore')}
              </Btn>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 rounded-xl bg-white px-12 py-11 shadow-[0_1px_3px_rgba(0,0,0,0.06)] max-[860px]:grid-cols-1 max-[860px]:gap-7 max-[860px]:px-8 max-[860px]:py-8">
            <div className="px-10 first:border-l-0 first:pl-0 max-[860px]:border-t-0 max-[860px]:px-0 max-[860px]:pt-7">
              <h3 className="mb-3.5 text-[1.15rem] text-green-dark">{t('home.about.missionVisionHeading')}</h3>
              <p className="text-[0.95rem] leading-[1.7] text-text">
                <strong className="text-green-dark">{t('home.about.missionLabel')}</strong> {t('home.about.missionText')}
              </p>
            </div>
            <div className="border-l border-border px-10 max-[860px]:border-t max-[860px]:border-l-0 max-[860px]:px-0 max-[860px]:pt-7">
              <p className="text-[0.95rem] leading-[1.7] text-text">
                <strong className="text-green-dark">{t('home.about.visionLabel')}</strong> {t('home.about.visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-[90px] bg-white px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
          <div className="text-center">
            <p className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-gold uppercase">
              {t('home.leadership.eyebrow')}
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] text-green-dark">{t('home.leadership.heading')}</h2>
          </div>

          <div className="text-center">
            <h3 className="mb-8 text-left text-[1.3rem] text-green-dark">{t('home.leadership.founderHeading')}</h3>
            <div className="mx-auto grid max-w-[260px] grid-cols-1 justify-items-center gap-y-10">
              <div className="px-6 text-center">
                <BoardPhoto person={founder} onClick={() => setActivePerson(founder)} size={160} />
                <p className="mb-1 font-serif text-[1.35rem] font-bold text-green-dark">{founder.name}</p>
                <p className="text-[1rem] font-semibold text-gold">{founder.role}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="mb-8 text-left text-[1.3rem] text-green-dark">{t('home.leadership.boardHeading')}</h3>
            <div className="mx-auto grid max-w-[960px] grid-cols-3 gap-y-10 max-[640px]:grid-cols-1">
              {board.map((member, i) => (
                <div
                  key={member.name}
                  className={`px-6 text-center max-[640px]:px-0 ${
                    i % 3 !== 0 ? 'border-l border-border max-[640px]:border-t max-[640px]:border-l-0 max-[640px]:pt-6' : ''
                  }`}
                >
                  <BoardPhoto person={member} onClick={() => setActivePerson(member)} size={140} />
                  <p className="mb-1 font-serif text-[0.95rem] font-bold text-green-dark">{member.name}</p>
                  <p className="text-[0.85rem] font-semibold text-gold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="mb-8 text-left text-[1.3rem] text-green-dark">{t('home.leadership.staffHeading')}</h3>
            <div className="mx-auto grid max-w-[200px] grid-cols-1 justify-items-center gap-y-10">
              {staff.map((member) => (
                <div key={member.name} className="px-6 text-center">
                  <BoardPhoto person={member} onClick={() => setActivePerson(member)} size={140} />
                  <p className="mb-1 font-serif text-[0.95rem] font-bold text-green-dark">{member.name}</p>
                  <p className="text-[0.85rem] font-semibold text-gold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="mb-8 text-left text-[1.3rem] text-green-dark">{t('home.leadership.advisoryHeading')}</h3>
            <div className="mx-auto grid max-w-[200px] grid-cols-1 justify-items-center gap-y-10">
              {advisory.map((member) => (
                <div key={member.name} className="px-6 text-center">
                  <BoardPhoto person={member} onClick={() => setActivePerson(member)} size={140} />
                  <p className="mb-1 font-serif text-[0.95rem] font-bold text-green-dark">{member.name}</p>
                  <p className="text-[0.85rem] font-semibold text-gold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 max-[860px]:grid-cols-1 max-[860px]:gap-7">
            {leadershipGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-2.5 text-[1.05rem] text-green-dark">{group.title}</h3>
                <p className="text-[0.92rem] leading-[1.65] text-text">{group.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 items-center gap-10 rounded-xl bg-green-dark p-12 max-[860px]:grid-cols-1 max-[860px]:p-8">
            <div>
              <h3 className="mb-3 text-[1.2rem] text-white">{t('home.leadership.governanceHeading')}</h3>
              <p className="text-[0.95rem] leading-[1.7] text-white/85">{t('home.leadership.governanceDesc')}</p>
            </div>
            <div className="flex flex-col gap-3.5">
              <p className="text-[0.92rem] font-semibold text-white">{t('home.leadership.policiesLink')}</p>
              <p className="text-[0.92rem] font-semibold text-gold-light">{t('home.leadership.joinBoardLink')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
