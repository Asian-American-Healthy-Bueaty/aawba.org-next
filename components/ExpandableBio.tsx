'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

// Shows the first paragraph of a long bio, with a toggle for the rest.
export default function ExpandableBio({ text }: { text: string }) {
  const t = useTranslations('auction')
  const [expanded, setExpanded] = useState(false)
  const paragraphs = text.split('\n\n')
  const visible = expanded ? paragraphs : paragraphs.slice(0, 1)

  return (
    <div>
      {visible.map((paragraph, index) => (
        <p key={index} className="mb-3 text-[0.95rem] leading-[1.75] whitespace-pre-line text-text last:mb-0">
          {paragraph}
        </p>
      ))}
      {paragraphs.length > 1 && (
        <button
          type="button"
          className="mt-3 text-[0.85rem] font-bold text-gold transition-colors hover:text-green-dark"
          aria-expanded={expanded}
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? t('readLess') : t('readMore')}
        </button>
      )}
    </div>
  )
}
