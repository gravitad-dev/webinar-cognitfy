'use client'

import { useEffect, useState } from 'react'

import { ANALYTICS_KEYS } from '@/lib/analytics'
import { openElevenLabsAgent } from '@/lib/elevenlabs'

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-700 bg-slate-900 p-4 shadow-lg sm:hidden">
      <button
        type="button"
        className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        data-analytics={ANALYTICS_KEYS.CTA_HERO_AGENT}
        onClick={openElevenLabsAgent}
      >
        Quiero asistir
      </button>
    </div>
  )
}

export default StickyCTA

