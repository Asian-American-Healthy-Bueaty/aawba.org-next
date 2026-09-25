'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import logo from '@/assets/logo1.png'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '简体中文' },
] as const

const NAV_LINKS = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/', hash: '#about' },
  { key: 'ourWork', path: '/our-work' },
  { key: 'activities', path: '/activities' },
  { key: 'leadership', path: '/', hash: '#leadership' },
  { key: 'resources', path: '/resources' },
  {
    key: 'community',
    path: '/community',
    children: [{ key: 'membership', path: '/community/membership' }],
  },
  { key: 'support', path: '/support' },
] as const

const ANCHOR_HASHES = NAV_LINKS.filter((link) => 'hash' in link).map((link) => (link as { hash: string }).hash)
const SCROLL_OFFSET = 120

function useScrollSpy(hashes: string[], enabled: boolean) {
  const [activeHash, setActiveHash] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return

    let ticking = false

    const computeActive = () => {
      let current: string | null = null
      for (const hash of hashes) {
        const el = document.querySelector(hash)
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = hash
        }
      }
      setActiveHash(current)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(computeActive)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [enabled, hashes])

  return activeHash
}

const navLinkBase =
  'inline-block rounded-md px-2.5 py-2 text-xs font-bold tracking-[0.02em] uppercase no-underline whitespace-nowrap transition-colors'
const navLinkIdle = 'text-text-h hover:bg-green-dark/8'
const navLinkActive = 'bg-green-dark text-white'

function NavItem({
  link,
  activeHash,
  label,
  isMobile,
  t,
  pathname,
}: {
  link: (typeof NAV_LINKS)[number]
  activeHash: string | null
  label: string
  isMobile?: boolean
  t: ReturnType<typeof useTranslations>
  pathname: string
}) {
  const [open, setOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  if ('hash' in link) {
    const isActive = activeHash === link.hash
    return (
      <Link href={`/${link.hash}`} className={`${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}`}>
        {label}
      </Link>
    )
  }

  const isHome = link.path === '/'
  const isActive = isHome ? pathname === '/' && !activeHash : pathname === link.path || pathname.startsWith(`${link.path}/`)

  if ('children' in link && link.children) {
    // Hide the hover/focus dropdown after a click; it re-arms once the pointer leaves.
    const dismiss = (event: React.MouseEvent<HTMLAnchorElement>) => {
      setDismissed(true)
      event.currentTarget.blur()
    }

    return (
      <div
        className={`relative inline-flex items-center${isMobile && open ? ' flex-col items-stretch w-full' : ''}`}
        onMouseLeave={isMobile ? undefined : () => setDismissed(false)}
      >
        <div className={`flex items-center${isMobile ? ' justify-between' : ''}`}>
          <Link
            href={link.path}
            className={`${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}${isMobile ? ' flex-1' : ''}`}
            onClick={isMobile ? undefined : dismiss}
          >
            {label}
          </Link>
          <button
            type="button"
            className={`ml-0.5 flex h-5 w-5 items-center justify-center border-none bg-none text-[10px] text-text-h transition-transform ${isMobile ? 'h-10 w-10' : ''} ${open ? 'rotate-180' : ''}`}
            aria-expanded={isMobile ? open : undefined}
            aria-label={`Toggle ${label} submenu`}
            onClick={isMobile ? () => setOpen((o) => !o) : undefined}
          >
            ▾
          </button>
        </div>
        <ul
          className={
            isMobile
              ? `${open ? 'block' : 'hidden'} py-1 pl-5`
              : `absolute top-full left-0 z-20 min-w-[180px] -translate-y-1.5 rounded-[10px] border border-border bg-white p-1.5 opacity-0 invisible shadow-[0_12px_28px_rgba(31,59,44,0.14)] transition-[opacity,transform,visibility] ${
                  dismissed
                    ? ''
                    : 'group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100'
                }`
          }
        >
          {link.children.map((child) => {
            const childActive = pathname === child.path
            return (
              <li key={child.key}>
                <Link
                  href={child.path}
                  className={`block ${navLinkBase} ${childActive ? navLinkActive : navLinkIdle}`}
                  onClick={isMobile ? undefined : dismiss}
                >
                  {t(`header.nav.${child.key}`)}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <Link href={link.path} className={`${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}`}>
      {label}
    </Link>
  )
}

function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const current = LANGUAGES.find((lang) => lang.code === locale) ?? LANGUAGES[0]

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className={`relative ${className}`} ref={rootRef}>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white py-2 pr-3 pl-4 text-xs font-semibold whitespace-nowrap text-text-h transition-colors hover:border-green hover:text-green-dark"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('header.languageAriaLabel')}
        onClick={() => setOpen((o) => !o)}
      >
        {current.label}
        <span className={`text-[10px] transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <ul
          className="absolute top-[calc(100%+8px)] right-0 z-10 min-w-[140px] list-none rounded-[10px] border border-border bg-white p-1.5 shadow-[0_12px_28px_rgba(31,59,44,0.14)]"
          role="listbox"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === locale}>
              <button
                type="button"
                className={`block w-full rounded-md px-3 py-2 text-left text-[13px] font-semibold transition-colors hover:bg-green-dark/8 ${
                  lang.code === locale ? 'bg-green-dark text-white hover:bg-green-dark' : 'text-text-h'
                }`}
                onClick={() => {
                  router.replace(pathname, { locale: lang.code })
                  setOpen(false)
                }}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Header() {
  const t = useTranslations()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const [menuPathname, setMenuPathname] = useState(pathname)
  const isHomePage = pathname === '/'
  const activeHash = useScrollSpy(ANCHOR_HASHES, isHomePage)

  if (pathname !== menuPathname) {
    setMenuPathname(pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-cream">
      <div className="relative z-[3] mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-6 py-3 max-[1200px]:px-5 max-[1200px]:py-2.5">
        <Link href="/" className="flex flex-shrink-0 items-center leading-none" aria-label={t('header.homeAriaLabel')}>
          <Image src={logo} alt={t('header.logoAlt')} className="h-[52px] w-auto max-[1200px]:h-11" />
        </Link>

        <nav className="hidden flex-1 min-[1201px]:block" aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="group">
                <NavItem
                  link={link}
                  activeHash={activeHash}
                  label={t(`header.nav.${link.key}`)}
                  t={t}
                  pathname={pathname}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden flex-shrink-0 items-center gap-2 min-[1201px]:flex">
          <Link href="/contact" className={`${navLinkBase} ${navLinkActive} px-4 py-2.5`}>
            {t('header.cta')}
          </Link>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-[5px] border-none bg-none min-[1201px]:hidden"
          aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-text-h transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`block h-0.5 w-6 rounded-sm bg-text-h transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-6 rounded-sm bg-text-h transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[1] hidden bg-[rgba(20,30,24,0.4)] transition-opacity max-[1200px]:block ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-[2] hidden w-[min(320px,82vw)] flex-col overflow-y-auto bg-cream pt-[76px] shadow-[-12px_0_32px_rgba(0,0,0,0.16)] transition-transform max-[1200px]:flex ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav aria-label="Primary mobile">
          <ul className="flex flex-col gap-1 px-5 pt-4 pb-2">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <NavItem
                  link={link}
                  activeHash={activeHash}
                  label={t(`header.nav.${link.key}`)}
                  isMobile
                  t={t}
                  pathname={pathname}
                />
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contact" className={`${navLinkBase} ${navLinkActive} mx-5 mt-2 block text-center`}>
          {t('header.cta')}
        </Link>
        <LanguageSwitcher className="mx-5 mt-4 mb-5 block [&>button]:w-full [&>button]:justify-center" />
      </div>
    </header>
  )
}
