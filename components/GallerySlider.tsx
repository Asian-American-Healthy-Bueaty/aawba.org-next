'use client'

import { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'

export default function GallerySlider({
  images,
  altPrefix,
}: {
  images: { src?: StaticImageData; label?: string }[]
  altPrefix: string
}) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setIndex((i) => (i + 1) % images.length)
  const current = images[index]

  return (
    <div className="flex flex-col gap-3.5">
      <div className="relative flex min-h-[260px] max-h-[70vh] w-full items-center justify-center overflow-hidden rounded-[10px] bg-green-dark/6 max-[640px]:min-h-[200px] max-[640px]:max-h-[50vh]">
        {current.src ? (
          <Image
            src={current.src}
            alt={current.label ? `${altPrefix} — ${current.label}` : altPrefix}
            className="block h-auto max-h-[70vh] w-auto max-w-full max-[640px]:max-h-[50vh]"
          />
        ) : (
          <div className="media-placeholder h-full min-h-[260px] w-full max-[640px]:min-h-[200px]">{current.label}</div>
        )}

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="absolute top-1/2 left-3.5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 text-[22px] leading-none text-green-dark transition-colors hover:border-green-dark hover:bg-green-dark hover:text-white max-[640px]:h-[34px] max-[640px]:w-[34px] max-[640px]:text-lg"
              aria-label="Previous photo"
              onClick={goPrev}
            >
              &lsaquo;
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-3.5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 text-[22px] leading-none text-green-dark transition-colors hover:border-green-dark hover:bg-green-dark hover:text-white max-[640px]:h-[34px] max-[640px]:w-[34px] max-[640px]:text-lg"
              aria-label="Next photo"
              onClick={goNext}
            >
              &rsaquo;
            </button>
            <span className="absolute right-3.5 bottom-3 rounded-full bg-black/55 px-2.5 py-1 text-[0.78rem] font-semibold text-white">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`h-2 w-2 rounded-full border-none p-0 transition-transform ${
                i === index ? 'scale-[1.35] bg-green-dark' : 'bg-border'
              }`}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
