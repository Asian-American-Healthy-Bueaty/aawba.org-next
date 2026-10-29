'use client'

import { useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'

export type AuctionWorkView = {
  id: string
  image: StaticImageData
  title: string
  meta: string
  desc?: string
  startingBid: string
}

const navBtn =
  'absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-[26px] leading-none text-white transition-colors hover:bg-white hover:text-green-dark max-[640px]:h-9 max-[640px]:w-9 max-[640px]:text-xl'

export default function AuctionWorkGrid({ works, artistName }: { works: AuctionWorkView[]; artistName: string }) {
  const t = useTranslations('auction')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const open = openIndex === null ? null : works[openIndex]

  useEffect(() => {
    if (openIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null)
      if (event.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? i : (i - 1 + works.length) % works.length))
      if (event.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % works.length))
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [openIndex, works.length])

  return (
    <>
      <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
        {works.map((work, index) => (
          <article
            key={work.id}
            className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_12px_28px_rgba(31,59,44,0.12)]"
          >
            <button
              type="button"
              className="group relative flex aspect-[4/3] w-full cursor-zoom-in items-center justify-center bg-green-dark/6 p-5"
              aria-label={t('viewLarger', { title: work.title })}
              onClick={() => setOpenIndex(index)}
            >
              <Image
                src={work.image}
                alt={`${artistName} — ${work.title}`}
                sizes="(max-width: 600px) 90vw, (max-width: 980px) 45vw, 340px"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
            <div className="flex flex-1 flex-col p-5">
              <h4 className="mb-1.5 text-[1.05rem] text-green-dark">{work.title}</h4>
              {work.meta && <p className="mb-3 text-[0.85rem] text-text">{work.meta}</p>}
              {work.desc && <p className="mb-4 text-[0.88rem] leading-[1.6] text-text">{work.desc}</p>}
              <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-4">
                <div>
                  <p className="text-[0.72rem] font-bold tracking-[0.08em] text-gold uppercase">{t('startingBid')}</p>
                  <p className="font-serif text-[1.35rem] font-semibold text-green-dark">{work.startingBid}</p>
                </div>
                <span className="rounded-full bg-green-dark/8 px-3 py-1.5 text-[0.72rem] font-semibold text-green-dark">
                  {t('biddingSoon')}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {open && openIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[rgba(12,20,16,0.92)] p-6 max-[640px]:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-2xl leading-none text-white transition-colors hover:bg-white hover:text-green-dark"
            aria-label={t('close')}
            onClick={() => setOpenIndex(null)}
          >
            ×
          </button>

          <Image
            src={open.image}
            alt={`${artistName} — ${open.title}`}
            sizes="100vw"
            className="h-auto max-h-[78vh] w-auto max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <div className="mt-4 text-center text-white" onClick={(event) => event.stopPropagation()}>
            <p className="font-serif text-[1.15rem]">{open.title}</p>
            <p className="text-[0.85rem] text-white/70">
              {[artistName, open.meta].filter(Boolean).join(' · ')}
            </p>
          </div>

          {works.length > 1 && (
            <>
              <button
                type="button"
                className={`${navBtn} left-4 max-[640px]:left-2`}
                aria-label={t('previous')}
                onClick={(event) => {
                  event.stopPropagation()
                  setOpenIndex((openIndex - 1 + works.length) % works.length)
                }}
              >
                &lsaquo;
              </button>
              <button
                type="button"
                className={`${navBtn} right-4 max-[640px]:right-2`}
                aria-label={t('next')}
                onClick={(event) => {
                  event.stopPropagation()
                  setOpenIndex((openIndex + 1) % works.length)
                }}
              >
                &rsaquo;
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
