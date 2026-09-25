import type { ComponentProps } from 'react'
import { Link } from '@/i18n/navigation'

const BASE =
  'inline-flex items-center justify-center rounded-md border-2 px-[30px] py-3.5 text-sm font-bold tracking-[0.02em] no-underline transition-colors'

const VARIANTS = {
  solid: 'border-gold bg-gold text-[#1c2b22] hover:border-gold-light hover:bg-gold-light',
  outline: 'border-white/85 bg-transparent text-white hover:bg-white/12',
} as const

export default function Btn({
  variant = 'solid',
  className = '',
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof VARIANTS }) {
  return <Link className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props} />
}
