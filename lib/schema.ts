import { SESSIONS, FAQ_ITEMS } from '@/types/session'

import type { ISession } from '@/types/session'

interface EventSchema {
  '@context': string
  '@type': string
  name: string
  startDate: string
  endDate: string
  eventAttendanceMode: string
  eventStatus: string
  location: {
    '@type': string
    name: string
  }
  organizer: {
    '@type': string
    name: string
    url: string
  }
  description: string
  inLanguage: string
  isAccessibleForFree: boolean
}

interface FAQSchema {
  '@context': string
  '@type': string
  mainEntity: Array<{
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }>
}

export const generateEventSchema = (session: ISession): EventSchema => {
  const startDate = new Date(session.dateISO)
  const endDate = new Date(startDate.getTime() + session.durationMin * 60 * 1000)

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `Webinar Cognitfy: Automatización con ROI medible - ${session.label}`,
    startDate: session.dateISO,
    endDate: endDate.toISOString(),
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'VirtualLocation',
      name: 'Virtual',
    },
    organizer: {
      '@type': 'Organization',
      name: 'Cognitfy',
      url: 'https://cognitfy.com',
    },
    description:
      'Aprende a calcular el coste por proceso y a desplegar automatizaciones 100% personalizadas con Cognitfy para ahorrar tiempo, dinero y errores y mejorar la experiencia del cliente.',
    inLanguage: 'es-ES',
    isAccessibleForFree: true,
  }
}

export const generateAllEventsSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': SESSIONS.map((session) => {
      const schema = generateEventSchema(session)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { '@context': _, ...rest } = schema
      return rest
    }),
  }
}

export const generateFAQSchema = (): FAQSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

