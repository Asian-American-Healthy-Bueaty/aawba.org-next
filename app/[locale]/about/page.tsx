import Image from 'next/image'
import { getTranslations, getLocale } from 'next-intl/server'
import { localize } from '@/lib/localize'
import { VALUES } from '@/data/values'
import logo from '@/assets/logo1.png'

export default async function About() {
  const t = await getTranslations()
  const locale = await getLocale()
  const values = VALUES.map((value) => localize(value, locale))

  return (
    <section id="about" className="scroll-mt-[90px] bg-cream px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
        <div className="grid grid-cols-[minmax(260px,380px)_1fr] items-center gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-8">
          <div className="flex aspect-[4/3.3] items-center justify-center rounded-xl bg-green-dark/8 p-10 max-[860px]:aspect-video">
            <Image src={logo} alt="AAWBA" className="h-auto w-[55%] max-w-[180px] opacity-85" />
          </div>
          <div>
            <p className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-gold uppercase">{t('home.about.eyebrow')}</p>
            <h2 className="mb-5 text-[clamp(1.8rem,4vw,2.4rem)] text-green-dark">{t('home.about.heading')}</h2>
            <p className="text-[0.98rem] leading-[1.75] text-text">{t('home.about.desc')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 rounded-xl bg-white px-12 py-11 shadow-[0_1px_3px_rgba(0,0,0,0.06)] max-[860px]:grid-cols-1 max-[860px]:gap-7 max-[860px]:px-8 max-[860px]:py-8">
          <div className="px-10 first:pl-0 max-[860px]:px-0 max-[860px]:pt-7">
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

        <div>
          <h3 className="mb-7 text-[1.3rem] text-green-dark">{t('home.about.valuesHeading')}</h3>
          <div className="grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border-t-[3px] border-t-gold bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <h4 className="mb-2 text-base text-green-dark">{value.title}</h4>
                <p className="text-[0.9rem] leading-[1.65] text-text">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 rounded-xl bg-green-dark p-12 max-[860px]:grid-cols-1 max-[860px]:p-8">
          <p className="text-[0.95rem] leading-[1.75] text-white/85">{t('home.about.bannerP1')}</p>
          <p className="text-[0.95rem] leading-[1.75] text-white/85">{t('home.about.bannerP2')}</p>
        </div>
      </div>
    </section>
  )
}
