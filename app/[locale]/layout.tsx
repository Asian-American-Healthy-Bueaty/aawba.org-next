import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Inter, Playfair_Display } from 'next/font/google'
import { routing } from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollManager from '@/components/ScrollManager'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'AAWBA — Asian American Wellness & Beauty Association',
  description:
    'Asian American Wellness & Beauty Association — advancing health, confidence, and community through culturally responsive education and programs.',
  icons: { icon: '/icon.png' },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : 'en'} className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-svh flex-col">
        <NextIntlClientProvider>
          <ScrollManager />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
