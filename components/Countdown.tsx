'use client'

import { useEffect, useState } from 'react'

import { getNextSession } from '@/lib/dates'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const nextSession = getNextSession()
    if (!nextSession) return

    const calculateTimeLeft = (): TimeLeft => {
      const targetDate = new Date(nextSession.dateISO)
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [mounted])

  const nextSession = getNextSession()

  if (!mounted || !nextSession || !timeLeft) {
    return null
  }

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return null
  }

  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-black">
          <p className="text-sm font-semibold uppercase tracking-wide">
            Próxima sesión: {nextSession.label}
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold sm:text-4xl" aria-label={`${timeLeft.days} días`}>
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="mt-1 text-xs uppercase tracking-wide">Días</span>
            </div>
            <span className="text-2xl font-bold">:</span>
            <div className="flex flex-col">
              <span className="text-3xl font-bold sm:text-4xl" aria-label={`${timeLeft.hours} horas`}>
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="mt-1 text-xs uppercase tracking-wide">Horas</span>
            </div>
            <span className="text-2xl font-bold">:</span>
            <div className="flex flex-col">
              <span className="text-3xl font-bold sm:text-4xl" aria-label={`${timeLeft.minutes} minutos`}>
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="mt-1 text-xs uppercase tracking-wide">Min</span>
            </div>
            <span className="text-2xl font-bold">:</span>
            <div className="flex flex-col">
              <span className="text-3xl font-bold sm:text-4xl" aria-label={`${timeLeft.seconds} segundos`}>
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="mt-1 text-xs uppercase tracking-wide">Seg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown

