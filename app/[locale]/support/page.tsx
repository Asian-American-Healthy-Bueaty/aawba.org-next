import { getTranslations } from 'next-intl/server'
import Btn from '@/components/ui/Btn'
import SecondaryHero from '@/components/ui/SecondaryHero'
import SectionIntro from '@/components/ui/SectionIntro'
import logo from '@/assets/logo1.png'

export default async function Support() {
  const t = await getTranslations()
  const methods = t.raw('support.methods.items') as { title: string; disclosure: string }[]

  return (
    <>
      <SecondaryHero
        gradient="dark"
        watermark={logo}
        watermarkSide="right"
        watermarkRotate={8}
        eyebrow={t('footer.getInvolved')}
        title={t('support.hero.heading')}
        desc={t('support.hero.desc')}
        descMaxWidth="max-w-[560px]"
      />

      <section className="bg-cream px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto max-w-[1100px]">
          <SectionIntro eyebrow={t('support.methods.eyebrow')} heading={t('support.methods.heading')} className="mb-12" />

          <div className="mb-12 grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {methods.map((method) => (
              <div key={method.title} className="rounded-xl border-t-[3px] border-t-gold bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <h3 className="mb-3.5 text-[1.05rem] text-green-dark">{method.title}</h3>
                <p className="mb-1.5 text-[0.75rem] font-bold tracking-[0.08em] text-gold uppercase">
                  {t('support.methods.requiresLabel')}
                </p>
                <p className="text-[0.9rem] leading-[1.6] text-text">{method.disclosure}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Btn href="/contact" variant="solid">
              {t('support.methods.cta')}
            </Btn>
            <p className="mt-5 text-[0.85rem] text-text italic">{t('support.taxNote')}</p>
          </div>
        </div>
      </section>
    </>
  )
}
