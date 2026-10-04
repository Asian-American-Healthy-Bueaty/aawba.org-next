import type { StaticImageData } from 'next/image'
import { UPCOMING_EVENTS as RAW_UPCOMING, PAST_EVENTS as RAW_PAST } from './events-list'

export interface EventDescriptionBlock {
  type: 'p' | 'list' | 'image' | 'table' | 'box'
  text?: string
  items?: string[]
  // 'p' styling, for content copied from articles that use it
  bold?: boolean
  muted?: boolean
  small?: boolean
  align?: 'center'
  // 'image': src plus optional display width in px (defaults to full width)
  src?: StaticImageData
  width?: number
  // 'table': first row is the header; '\n' inside a cell starts a new line
  rows?: string[][]
  // 'box': bordered or tinted panel with optional icon + title above it
  variant?: 'outline' | 'tint'
  title?: string
  icon?: StaticImageData
  blocks?: EventDescriptionBlock[]
}

export interface EventDescriptionSection {
  heading?: string
  // 'banner': centered heading with a chevron marker, as in WeChat articles
  headingStyle?: 'banner'
  blocks: EventDescriptionBlock[]
}

export interface EventTranslation {
  title?: string
  dateLabel?: string
  time?: string
  location?: string
  summary?: string
  description?: EventDescriptionSection[]
  poster?: { src?: StaticImageData; label?: string }
}

export interface EventItem {
  slug: string
  featured?: boolean
  title: string
  dateLabel: string
  time: string
  location: string
  summary: string
  description: EventDescriptionSection[]
  registrationUrl?: string
  poster: { src?: StaticImageData; label?: string }
  // skip the banner image on the detail page (e.g. the poster already appears inline)
  hidePosterOnDetail?: boolean
  gallery: { src?: StaticImageData; label?: string }[]
  zh?: EventTranslation
}

export const UPCOMING_EVENTS = RAW_UPCOMING as EventItem[]
export const PAST_EVENTS = RAW_PAST as EventItem[]
