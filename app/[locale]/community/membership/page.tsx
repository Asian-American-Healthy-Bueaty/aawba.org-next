import { getTranslations, getLocale } from 'next-intl/server'
import Btn from '@/components/ui/Btn'
import SecondaryHero from '@/components/ui/SecondaryHero'
import SectionIntro from '@/components/ui/SectionIntro'
import { localize } from '@/lib/localize'
import {
  TIERS,
  TIERS_FOOTNOTE,
  INDIVIDUAL_HONORARY,
  CORPORATE_COLUMNS,
  CORPORATE_ROWS,
  SPONSORSHIP_COLUMNS,
  SPONSORSHIP_ROWS,
  CALENDAR,
  NETWORK_PERKS,
  TERMS,
} from '@/data/membership'
import logo from '@/assets/logo1.png'

const thClass = 'bg-green-dark/5 px-4 py-3.5 text-left text-[0.78rem] font-bold tracking-[0.03em] text-green-dark uppercase whitespace-nowrap'
const tdClass = 'px-4 py-3.5 align-top text-left border-t border-border'

export default async function Membership() {
  const t = await getTranslations()
  const locale = await getLocale()
  const isZh = locale === 'zh'

  const tiers = TIERS.map((tier) => localize(tier, locale))
  const individualHonorary = INDIVIDUAL_HONORARY.map((item) => localize(item, locale))
  const corporateRows = CORPORATE_ROWS.map((row) => localize(row, locale))
  const sponsorshipRows = SPONSORSHIP_ROWS.map((row) => localize(row, locale))
  const calendar = CALENDAR.map((item) => localize(item, locale))
  const networkPerks = NETWORK_PERKS.map((item) => localize(item, locale))

  const columnLabel = (col: { label: string; zh: string }) => (isZh ? col.zh : col.label)

  return (
    <>
      <SecondaryHero
        gradient="dark"
        watermark={logo}
        watermarkSide="right"
        watermarkRotate={8}
        eyebrow={t('footer.getInvolved')}
        title={t('membership.hero.heading')}
        tagline={t('membership.hero.tagline')}
        desc={t('membership.hero.desc')}
      />

      <section className="bg-cream px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto max-w-[1100px]">
          <SectionIntro eyebrow={t('membership.tiers.eyebrow')} heading={t('membership.tiers.heading')} className="mb-10" />

          <div className="grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {tiers.map((tier) => (
              <div key={tier.title} className="rounded-xl border-t-[3px] border-t-gold bg-white p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <h3 className="mb-2.5 text-[1.1rem] text-green-dark">{tier.title}</h3>
                <p className="mb-1 font-serif text-[1.3rem] font-bold text-gold">{tier.fee}</p>
                <p className="mb-3.5 text-[0.8rem] tracking-[0.04em] text-text uppercase">{tier.term}</p>
                <p className="text-[0.9rem] leading-[1.6] text-text">{tier.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-4 max-w-[760px] text-center text-[0.82rem] text-text italic">
            {isZh ? TIERS_FOOTNOTE.zh : TIERS_FOOTNOTE.en}
          </p>

          <SectionIntro
            eyebrow={t('membership.individual.eyebrow')}
            heading={t('membership.individual.heading')}
            className="mt-16 mb-10"
          />

          <div className="grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {individualHonorary.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <h3 className="mb-3 text-[1.05rem] text-green-dark">{item.title}</h3>
                <p className="mb-3 text-[0.9rem] leading-[1.65] text-text">{item.intro}</p>
                {item.bullets.length > 0 && (
                  <ul className="flex flex-col gap-2 pl-[18px]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="list-disc text-[0.87rem] leading-[1.55] text-text">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <SectionIntro
            eyebrow={t('membership.corporate.eyebrow')}
            heading={t('membership.corporate.heading')}
            className="mt-16 mb-10"
          />

          <div className="overflow-x-auto rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <table className="w-full border-collapse text-[0.86rem]">
              <thead>
                <tr>
                  {CORPORATE_COLUMNS.map((col) => (
                    <th key={col.key} className={thClass}>
                      {columnLabel(col)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {corporateRows.map((row) => (
                  <tr key={row.benefit}>
                    <td className={`${tdClass} font-semibold whitespace-nowrap text-text-h`}>{row.benefit}</td>
                    <td className={tdClass}>{row.standard}</td>
                    <td className={tdClass}>{row.partner}</td>
                    <td className={tdClass}>{row.leader}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionIntro
            eyebrow={t('membership.sponsorship.eyebrow')}
            heading={t('membership.sponsorship.heading')}
            className="mt-16 mb-10"
          />

          <div className="overflow-x-auto rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <table className="w-full border-collapse text-[0.86rem]">
              <thead>
                <tr>
                  {SPONSORSHIP_COLUMNS.map((col) => (
                    <th key={col.key} className={thClass}>
                      {columnLabel(col)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sponsorshipRows.map((row) => (
                  <tr key={row.level}>
                    <td className={`${tdClass} font-semibold whitespace-nowrap text-text-h`}>{row.level}</td>
                    <td className={tdClass}>{row.amount}</td>
                    <td className={tdClass}>{row.recognition}</td>
                    <td className={tdClass}>{row.hospitality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionIntro
            eyebrow={t('membership.calendar.eyebrow')}
            heading={t('membership.calendar.heading')}
            className="mt-16 mb-10"
          />

          <div className="grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {calendar.map((item) => (
              <div key={item.title} className="rounded-xl border-t-[3px] border-t-gold bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <p className="mb-2.5 text-[0.75rem] font-bold tracking-[0.06em] text-gold uppercase">{item.minimum}</p>
                <h3 className="mb-2.5 text-base text-green-dark">{item.title}</h3>
                <p className="text-[0.88rem] leading-[1.6] text-text">{item.format}</p>
              </div>
            ))}
          </div>

          <SectionIntro
            eyebrow={t('membership.network.eyebrow')}
            heading={t('membership.network.heading')}
            className="mt-16 mb-10"
          />

          <div className="grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
            {networkPerks.map((perk) => (
              <div key={perk.title} className="rounded-xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <h3 className="mb-2.5 text-base text-green-dark">{perk.title}</h3>
                <p className="text-[0.88rem] leading-[1.6] text-text">{perk.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-[760px] text-center">
            <p className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-gold uppercase">{t('membership.joining.eyebrow')}</p>
            <h2 className="mb-5 text-[clamp(1.6rem,3.5vw,2.1rem)] text-green-dark">{t('membership.joining.heading')}</h2>
            <p className="mb-4 text-[0.98rem] leading-[1.75] text-text">{t('membership.joining.text1')}</p>
            <p className="text-[0.98rem] leading-[1.75] text-text">{t('membership.joining.text2')}</p>
          </div>

          <div className="mt-8 text-center">
            <Btn href="/contact" variant="solid">
              {t('membership.cta')}
            </Btn>
          </div>

          <div className="mx-auto mt-14 max-w-[760px] border-t border-border pt-8">
            <h3 className="mb-3.5 text-[0.95rem] text-green-dark">{t('membership.terms.heading')}</h3>
            <ul className="flex flex-col gap-2 pl-[18px]">
              {TERMS.map((term) => (
                <li key={term.en} className="list-disc text-[0.82rem] leading-[1.6] text-text">
                  {isZh ? term.zh : term.en}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
