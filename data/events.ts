import type { StaticImageData } from 'next/image'
import { UPCOMING_EVENTS as RAW_UPCOMING, PAST_EVENTS as RAW_PAST } from './events-list'

export interface EventDescriptionBlock {
  type: 'p' | 'list'
  text?: string
  items?: string[]
}

export interface EventDescriptionSection {
  heading?: string
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
  gallery: { src?: StaticImageData; label?: string }[]
  zh?: EventTranslation
}

export const UPCOMING_EVENTS = RAW_UPCOMING as EventItem[]
export const PAST_EVENTS = RAW_PAST as EventItem[]
