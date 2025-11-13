'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import * as ackeeTracker from 'ackee-tracker'

const ACKEE_SERVER = 'https://aki.useteam.io'
const ACKEE_DOMAIN_ID = 'd7439c13-77fa-4a25-9852-320e81b89b3b'

const AckeeTracker = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const stopRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    // Stop previous tracking if exists
    if (stopRef.current) {
      stopRef.current()
    }

    try {
      const tracker = ackeeTracker.create(ACKEE_SERVER, {
        ignoreLocalhost: false,
        detailed: false,
        ignoreOwnVisits: false,
      })

      const { stop } = tracker.record(ACKEE_DOMAIN_ID)
      stopRef.current = stop

      console.log('Ackee: Tracking page view', pathname)
    } catch (error) {
      console.error('Ackee tracking error:', error)
    }

    // Cleanup on unmount
    return () => {
      if (stopRef.current) {
        stopRef.current()
      }
    }
  }, [pathname, searchParams])

  return null
}

export default AckeeTracker

