'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import SecondaryHero from '@/components/ui/SecondaryHero'
import logo from '@/assets/logo1.png'

const CONTACT_EMAIL = 'info@aawba.org'

const fieldClass =
  'rounded-md border border-border bg-white px-3.5 py-3 font-sans text-[0.95rem] font-normal text-text-h resize-y focus:border-green focus:shadow-[0_0_0_3px_rgba(47,78,61,0.12)] focus:outline-none'

export default function Contact() {
  const t = useTranslations()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const CONTACT_DETAILS = [
    { label: t('contact.labels.email'), value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { label: t('contact.labels.phone'), value: '(781) 363-9023', href: 'tel:+17813639023' },
    { label: t('contact.labels.address'), value: '100 Galen St #204\nWatertown, MA 02472' },
  ]

  const handleChange = (field: keyof typeof form) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = `Message from ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <SecondaryHero
        gradient="light"
        watermark={logo}
        watermarkSide="right"
        watermarkRotate={-6}
        eyebrow={t('contact.hero.eyebrow')}
        title={t('contact.hero.heading')}
        desc={t('contact.hero.desc')}
        descMaxWidth="max-w-[560px]"
      />

      <section className="bg-cream px-6 py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-[1fr_1.1fr] items-start gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div>
            <p className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-gold uppercase">{t('contact.info.eyebrow')}</p>
            <h2 className="mb-8 text-[clamp(1.6rem,3.5vw,2.1rem)] leading-normal text-green-dark">{t('contact.info.heading')}</h2>

            {CONTACT_DETAILS.map((item) => (
              <div key={item.label} className="mb-6">
                <p className="mb-1.5 text-[0.78rem] font-bold tracking-[0.1em] text-gold uppercase">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-base text-text-h no-underline hover:text-green-dark hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-base whitespace-pre-line text-text-h">{item.value}</p>
                )}
              </div>
            ))}

            <div className="mb-6">
              <p className="mb-1.5 text-[0.78rem] font-bold tracking-[0.1em] text-gold uppercase">{t('contact.labels.followUs')}</p>
              <div className="mt-1 flex gap-3">
                <span aria-hidden="true" className="h-11 w-11 rounded-full bg-green-dark/8" />
                <span aria-hidden="true" className="h-11 w-11 rounded-full bg-green-dark/8" />
                <span aria-hidden="true" className="h-11 w-11 rounded-full bg-green-dark/8" />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-xl border border-border bg-white p-10 max-[640px]:p-7">
            <label className="flex flex-col gap-2 text-[0.9rem] font-semibold text-text-h">
              {t('contact.form.name')}
              <input type="text" name="name" required value={form.name} onChange={handleChange('name')} className={fieldClass} />
            </label>

            <label className="flex flex-col gap-2 text-[0.9rem] font-semibold text-text-h">
              {t('contact.form.email')}
              <input type="email" name="email" required value={form.email} onChange={handleChange('email')} className={fieldClass} />
            </label>

            <label className="flex flex-col gap-2 text-[0.9rem] font-semibold text-text-h">
              {t('contact.form.message')}
              <textarea name="message" rows={6} required value={form.message} onChange={handleChange('message')} className={fieldClass} />
            </label>

            <button
              type="submit"
              className="mt-1 rounded-md bg-green-dark py-4 text-base font-bold text-white transition-colors hover:bg-green"
            >
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
