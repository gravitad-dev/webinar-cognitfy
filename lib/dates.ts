import { SESSIONS } from '@/types/session'

import type { ISession } from '@/types/session'

export const getNextSession = (): ISession | null => {
  const now = new Date()
  const upcoming = SESSIONS.filter((session) => new Date(session.dateISO) > now)
  return upcoming.length > 0 ? upcoming[0] : null
}

export const formatDateSpanish = (dateISO: string): string => {
  const date = new Date(dateISO)
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat('es-ES', options).format(date)
}

export const formatTimeSpanish = (dateISO: string): string => {
  const date = new Date(dateISO)
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Madrid',
  }
  return new Intl.DateTimeFormat('es-ES', options).format(date)
}

export const getWeekdayShort = (dateISO: string): string => {
  const date = new Date(dateISO)
  const weekday = date.toLocaleDateString('es-ES', { weekday: 'short' })
  return weekday.charAt(0).toUpperCase() + weekday.slice(1)
}

