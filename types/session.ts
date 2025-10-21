export interface ISession {
  id: string
  label: string
  dateISO: string
  durationMin: number
  cta: string
}

export const SESSIONS: ISession[] = [
  {
    id: '2025-10-22',
    label: 'Miércoles, 22 de octubre',
    dateISO: '2025-10-22T18:00:00+02:00',
    durationMin: 60,
    cta: 'Quiero asistir 22/10',
  },
  {
    id: '2025-10-23',
    label: 'Jueves, 23 de octubre',
    dateISO: '2025-10-23T18:00:00+02:00',
    durationMin: 60,
    cta: 'Quiero asistir 23/10',
  },
  {
    id: '2025-10-29',
    label: 'Miércoles, 29 de octubre',
    dateISO: '2025-10-29T18:00:00+01:00',
    durationMin: 60,
    cta: 'Quiero asistir 29/10',
  },
  {
    id: '2025-10-30',
    label: 'Jueves, 30 de octubre',
    dateISO: '2025-10-30T18:00:00+01:00',
    durationMin: 60,
    cta: 'Quiero asistir 30/10',
  },
]

export interface IFAQItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: IFAQItem[] = [
  {
    question: '¿Recibiré la grabación si no puedo asistir en directo?',
    answer: 'Sí, enviaremos la grabación a todos los inscritos en un plazo de 24 horas tras el webinar. La grabación estará disponible de forma limitada.',
  },
  {
    question: '¿Necesito conocimientos técnicos previos?',
    answer: 'No. El webinar está diseñado para que cualquier profesional pueda entender y aplicar los conceptos, sin necesidad de experiencia técnica previa.',
  },
  {
    question: '¿Cuánto tiempo se necesita para ver resultados?',
    answer: 'Muchas empresas ven mejoras significativas en las primeras 2-4 semanas tras incorporar sus primeros compañeros de trabajo virtuales con Cognitfy.',
  },
  {
    question: '¿Puedo traer mi propio caso o proceso para analizar?',
    answer: 'Sí, durante la sesión de preguntas y respuestas podrás plantear tu caso específico y nuestros expertos te darán recomendaciones personalizadas.',
  },
]

