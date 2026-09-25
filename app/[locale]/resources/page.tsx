import { getTranslations } from 'next-intl/server'
import SecondaryHero from '@/components/ui/SecondaryHero'
import SectionIntro from '@/components/ui/SectionIntro'
import logo from '@/assets/logo1.png'

export default async function Resources() {
  const t = await getTranslations()
  const categories = t.raw('resources.categories.items') as string[]

  return (
    <>
      <SecondaryHero
        gradient="light"
        watermark={logo}
        watermarkSide="left"
        watermarkRotate={-8}
        eyebrow={t('footer.exploreHeading')}
        title={t('resources.hero.heading')}
        desc={t('resources.hero.desc')}
      />

      <section className="bg-cream px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto max-w-[1100px]">
          <SectionIntro eyebrow={t('resources.categories.eyebrow')} heading={t('resources.categories.heading')} className="mb-12" />

          <div className="grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {categories.map((category) => (
              <div key={category} className="rounded-xl border-t-[3px] border-t-gold bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <h3 className="mb-2.5 text-[1.05rem] leading-[1.4] text-green-dark">{category}</h3>
                <p className="text-[0.78rem] font-bold tracking-[0.06em] text-gold uppercase">
                  {t('resources.categories.comingSoon')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
