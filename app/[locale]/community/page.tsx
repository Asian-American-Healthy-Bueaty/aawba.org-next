import { getTranslations } from 'next-intl/server'
import Btn from '@/components/ui/Btn'
import SecondaryHero from '@/components/ui/SecondaryHero'
import SectionIntro from '@/components/ui/SectionIntro'
import logo from '@/assets/logo1.png'

export default async function Community() {
  const t = await getTranslations()
  const ways = t.raw('community.ways.items') as { title: string; desc: string }[]

  return (
    <>
      <SecondaryHero
        gradient="light"
        watermark={logo}
        watermarkSide="left"
        watermarkRotate={-8}
        eyebrow={t('footer.getInvolved')}
        title={t('community.hero.heading')}
        desc={t('community.hero.desc')}
      />

      <section className="bg-cream px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto max-w-[1100px]">
          <SectionIntro eyebrow={t('community.ways.eyebrow')} heading={t('community.ways.heading')} className="mb-12" />

          <div className="mb-12 grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {ways.map((way) => (
              <div key={way.title} className="rounded-xl border-t-[3px] border-t-gold bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <h3 className="mb-3 text-[1.05rem] text-green-dark">{way.title}</h3>
                <p className="text-[0.9rem] leading-[1.6] text-text">{way.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-14 text-center">
            <Btn href="/contact" variant="solid">
              {t('community.ways.cta')}
            </Btn>
          </div>

          <div className="grid grid-cols-2 gap-10 rounded-xl bg-white px-12 py-11 shadow-[0_1px_3px_rgba(0,0,0,0.06)] max-[640px]:grid-cols-1 max-[640px]:gap-7 max-[640px]:px-8 max-[640px]:py-8">
            <div className="px-10 first:pl-0 max-[640px]:px-0 max-[640px]:pt-7">
              <h3 className="mb-3.5 text-[1.15rem] text-green-dark">{t('community.standards.heading')}</h3>
              <p className="text-[0.95rem] leading-[1.7] text-text">{t('community.standards.desc')}</p>
            </div>
            <div className="border-l border-border px-10 max-[640px]:border-t max-[640px]:border-l-0 max-[640px]:px-0 max-[640px]:pt-7">
              <h3 className="mb-3.5 text-[1.15rem] text-green-dark">{t('community.stories.heading')}</h3>
              <p className="text-[0.95rem] leading-[1.7] text-text">{t('community.stories.desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
