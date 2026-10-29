import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server'
import { localize } from '@/lib/localize'
import { AUCTION_ARTISTS } from '@/data/auction'
import AuctionWorkGrid from '@/components/AuctionWorkGrid'
import ExpandableBio from '@/components/ExpandableBio'
import Btn from '@/components/ui/Btn'
import SecondaryHero from '@/components/ui/SecondaryHero'
import SectionIntro from '@/components/ui/SectionIntro'
import logo from '@/assets/logo1.png'

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

export default async function Auction() {
  const t = await getTranslations()
  const locale = await getLocale()
  const artists = AUCTION_ARTISTS.map((artist) => ({
    ...localize(artist, locale),
    // On the Chinese page, pair the Chinese name with the English one, and vice versa.
    altName: locale === 'zh' ? artist.name : artist.nativeName,
  }))
  const totalWorks = artists.reduce((sum, artist) => sum + artist.works.length, 0)

  return (
    <>
      <SecondaryHero
        gradient="light"
        watermark={logo}
        watermarkSide="left"
        watermarkRotate={-8}
        eyebrow={t('auction.hero.eyebrow')}
        title={t('auction.hero.heading')}
        desc={t('auction.hero.desc')}
      />

      <section className="bg-cream px-6 pt-20 pb-6 max-[640px]:px-5 max-[640px]:pt-14">
        <div className="mx-auto max-w-[1100px]">
          <SectionIntro
            eyebrow={t('auction.artists.eyebrow', { artists: artists.length, works: totalWorks })}
            heading={t('auction.artists.heading')}
            className="mb-8"
          />
          <nav aria-label={t('auction.artists.heading')}>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {artists.map((artist) => (
                <li key={artist.id}>
                  <a
                    href={`#${artist.id}`}
                    className="inline-block rounded-full border border-border bg-white px-4 py-2 text-[0.85rem] font-semibold text-green-dark no-underline transition-colors hover:border-green-dark hover:bg-green-dark hover:text-white"
                  >
                    {artist.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mx-auto mt-8 max-w-[640px] rounded-xl border-l-[3px] border-l-gold bg-white px-5 py-4 text-center text-[0.9rem] leading-[1.6] text-text">
            {t('auction.notice')}
          </p>
        </div>
      </section>

      {artists.map((artist) => {
        const works = artist.works.map((item) => {
          const work = localize(item, locale)
          return {
            id: work.id,
            image: work.image,
            title: work.title,
            meta: [work.medium, work.size, work.year].filter(Boolean).join(' · '),
            desc: work.desc,
            startingBid: currency.format(work.startingBid),
          }
        })
        const showAltName = artist.altName && artist.altName !== artist.name

        return (
          <section
            key={artist.id}
            id={artist.id}
            className="scroll-mt-[90px] bg-cream px-6 py-16 max-[640px]:px-5 max-[640px]:py-12"
          >
            <div className="mx-auto max-w-[1100px] border-t border-border pt-16 max-[640px]:pt-12">
              <div className="mb-10 grid grid-cols-[140px_1fr] items-start gap-8 max-[640px]:grid-cols-1 max-[640px]:gap-5">
                {artist.photo ? (
                  <Image
                    src={artist.photo}
                    alt={artist.name}
                    sizes="140px"
                    className="aspect-square w-[140px] rounded-full object-cover shadow-[0_1px_3px_rgba(0,0,0,0.12)] max-[640px]:w-[110px]"
                  />
                ) : (
                  <div
                    className="flex aspect-square w-[140px] items-center justify-center rounded-full bg-green-dark font-serif text-[2.6rem] text-gold-light max-[640px]:w-[110px] max-[640px]:text-[2rem]"
                    aria-hidden="true"
                  >
                    {(artist.nativeName ?? artist.name).charAt(0)}
                  </div>
                )}
                <div>
                  <p className="mb-2 text-[12px] font-bold tracking-[0.14em] text-gold uppercase">
                    {t('auction.worksCount', { count: works.length })}
                  </p>
                  <h3 className="mb-4 text-[clamp(1.5rem,3vw,1.9rem)] text-green-dark">
                    {artist.name}
                    {showAltName && (
                      <span className="ml-3 font-sans text-[0.7em] font-medium text-green-light">{artist.altName}</span>
                    )}
                  </h3>
                  {artist.bio && <ExpandableBio text={artist.bio} />}
                  {artist.website && (
                    <a
                      href={artist.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-[0.85rem] font-bold text-gold no-underline hover:text-green-dark"
                    >
                      {t('auction.website')} ↗
                    </a>
                  )}
                </div>
              </div>

              <AuctionWorkGrid works={works} artistName={artist.name} />
            </div>
          </section>
        )
      })}

      <section className="bg-cream px-6 pt-6 pb-24 text-center max-[640px]:px-5 max-[640px]:pb-16">
        <div className="mx-auto max-w-[640px] rounded-xl bg-green-dark px-8 py-12 text-white max-[640px]:px-6">
          <h2 className="mb-3 text-[clamp(1.4rem,3vw,1.8rem)] text-white">{t('auction.cta.heading')}</h2>
          <p className="mb-7 text-[0.95rem] leading-[1.65] text-white/85">{t('auction.cta.desc')}</p>
          <Btn href="/contact" variant="solid">
            {t('auction.cta.button')}
          </Btn>
        </div>
      </section>
    </>
  )
}
