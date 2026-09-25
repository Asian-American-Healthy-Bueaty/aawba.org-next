'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollManager() {
  const pathname = usePathname()

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash
      if (hash) {
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
          return
        }
      }
      window.scrollTo(0, 0)
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [pathname])

  return null
}
