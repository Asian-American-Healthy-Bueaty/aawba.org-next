import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import logo from '@/assets/logo1.png'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()
  const homeHref = locale === routing.defaultLocale ? '/' : `/${locale}`

  const EXPLORE_LINKS = [
    { key: 'header.nav.about', href: `${homeHref}#about` },
    { key: 'header.nav.activities', href: '/activities' },
  ]

  const ORGANIZATION_LINKS = [
    { key: 'header.nav.leadership', href: `${homeHref}#leadership` },
    { key: 'header.cta', href: '/contact' },
  ]

  return (
    <footer className="bg-[#16231d]">
      <div className="bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%),var(--color-green-dark)] px-6 py-20 text-center">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-3 text-[clamp(1.5rem,4vw,2.2rem)] leading-[1.3] text-white">{t('footer.ctaHeading')}</h2>
          <p className="mb-8 text-base text-white/70">{t('footer.tagline')}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/support"
              className="inline-flex items-center justify-center rounded-md border-2 border-gold bg-gold px-7 py-3.5 text-[0.95rem] font-bold text-[#1c2b22] no-underline transition-colors hover:border-gold-light hover:bg-gold-light"
            >
              {t('footer.donate')}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/60 bg-transparent px-7 py-3.5 text-[0.95rem] font-bold text-white no-underline transition-colors hover:bg-white/12"
            >
              {t('footer.getInvolved')}
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/60 bg-transparent px-7 py-3.5 text-[0.95rem] font-bold text-white no-underline transition-colors hover:bg-white/12"
            >
              {t('footer.seeUpcomingEvents')}
            </Link>
          </div>
        </div>
      </div>

      <div className="px-6 pt-16 pb-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 pb-10 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
          <div className="max-[860px]:col-span-2 max-[640px]:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image src={logo} alt={t('header.logoAlt')} className="h-12 w-12" />
              <span className="font-serif text-xl font-bold text-white">AAWBA</span>
            </div>
            <p className="max-w-[260px] text-[0.9rem] leading-[1.7] text-white/65">{t('footer.brandDesc')}</p>
          </div>

          <div>
            <h3 className="mb-5 text-[0.8rem] font-bold tracking-[0.12em] text-gold uppercase">
              {t('footer.exploreHeading')}
            </h3>
            <ul className="flex flex-col gap-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-[0.9rem] tracking-[0.02em] text-white/80 uppercase no-underline transition-colors hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[0.8rem] font-bold tracking-[0.12em] text-gold uppercase">
              {t('footer.organizationHeading')}
            </h3>
            <ul className="flex flex-col gap-3">
              {ORGANIZATION_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-[0.9rem] tracking-[0.02em] text-white/80 uppercase no-underline transition-colors hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-[0.9rem] text-white/45">{t('footer.privacyDisclaimer')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[0.8rem] font-bold tracking-[0.12em] text-gold uppercase">
              {t('footer.contactHeading')}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-[0.9rem] text-white/80">
                <a href="mailto:info@aawba.org" className="no-underline transition-colors hover:text-white">
                  info@aawba.org
                </a>
              </li>
              <li className="text-[0.9rem] text-white/80">
                <a href="tel:+17742701234" className="no-underline transition-colors hover:text-white">
                  (774)-270-1234
                </a>
              </li>
              <li className="text-[0.9rem] text-white/80">{t('footer.addressLine')}</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-2 border-t border-white/10 pt-6">
          <p className="text-[0.8rem] text-white/45">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <p className="text-[0.8rem] text-white/45">{t('footer.planningNote')}</p>
        </div>
      </div>
    </footer>
  )
}
