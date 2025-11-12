'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const ACKEE_SERVER = 'http://18.118.100.235:2337'
const ACKEE_DOMAIN_ID = 'd7439c13-77fa-4a25-9852-320e81b89b3b'

declare global {
  interface Window {
    ackeeTracker?: {
      create: (server: string, options?: {
        ignoreLocalhost?: boolean
        detailed?: boolean
        ignoreOwnVisits?: boolean
      }) => {
        record: (domainId: string) => { stop: () => void }
      }
    }
  }
}

const AckeeTracker = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const stopRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    // Wait for ackeeTracker to be available
    const checkAndTrack = () => {
      if (typeof window !== 'undefined' && window.ackeeTracker) {
        // Stop previous tracking if exists
        if (stopRef.current) {
          stopRef.current()
        }

        try {
          const tracker = window.ackeeTracker.create(ACKEE_SERVER, {
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
      } else {
        // Retry after a short delay if tracker not available yet
        setTimeout(checkAndTrack, 100)
      }
    }

    checkAndTrack()

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

