import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { ReactNode } from 'react'

const GRADIENTS = {
  light: 'bg-[linear-gradient(135deg,var(--color-green-light)_0%,var(--color-green)_45%,var(--color-green-dark)_100%)]',
  dark: 'bg-[linear-gradient(135deg,var(--color-green-dark)_0%,var(--color-green)_48%,var(--color-green-light)_100%)]',
} as const

export default function SecondaryHero({
  gradient,
  watermark,
  watermarkSide,
  watermarkRotate,
  eyebrow,
  title,
  tagline,
  desc,
  descMaxWidth = 'max-w-[620px]',
}: {
  gradient: keyof typeof GRADIENTS
  watermark: StaticImageData
  watermarkSide: 'left' | 'right'
  watermarkRotate: number
  eyebrow: string
  title: string
  tagline?: ReactNode
  desc: string
  descMaxWidth?: string
}) {
  return (
    <section
      className={`relative overflow-hidden px-6 pt-[100px] pb-[90px] text-center text-white sm:px-5 sm:pt-20 sm:pb-16 ${GRADIENTS[gradient]}`}
    >
      <Image
        src={watermark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 h-[640px] w-[640px] max-w-none opacity-[0.14] brightness-0 invert"
        style={{
          [watermarkSide]: '-260px',
          transform: `translateY(-50%) rotate(${watermarkRotate}deg)`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-[760px]">
        <p className="mb-[18px] text-[13px] font-bold tracking-[0.14em] text-gold-light uppercase">{eyebrow}</p>
        <h1 className="mb-3.5 text-[clamp(2rem,4.5vw,3rem)] leading-[1.2] text-white">{title}</h1>
        {tagline && (
          <p className="mb-[18px] font-serif text-[clamp(1.05rem,2vw,1.25rem)] font-medium text-gold-light italic">
            {tagline}
          </p>
        )}
        <p className={`mx-auto text-[1.05rem] leading-[1.65] text-white/[0.86] ${descMaxWidth}`}>{desc}</p>
      </div>
    </section>
  )
}
