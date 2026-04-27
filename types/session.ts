export interface ISession {
  id: string
  label: string
  dateISO: string
  durationMin: number
  cta: string
}

export const SESSIONS: ISession[] = [
  {
    id: '2026-05-06-17h',
    label: 'Miércoles, 6 de mayo · 17h',
    dateISO: '2026-05-06T17:00:00+02:00',
    durationMin: 120,
    cta: 'Quiero asistir 6/5 · 17h',
  },
  {
    id: '2026-05-06-19h',
    label: 'Miércoles, 6 de mayo · 19h',
    dateISO: '2026-05-06T19:00:00+02:00',
    durationMin: 120,
    cta: 'Quiero asistir 6/5 · 19h',
  },
  {
    id: '2026-05-08-17h',
    label: 'Viernes, 8 de mayo · 17h',
    dateISO: '2026-05-08T17:00:00+02:00',
    durationMin: 120,
    cta: 'Quiero asistir 8/5 · 17h',
  },
  {
    id: '2026-05-08-19h',
    label: 'Viernes, 8 de mayo · 19h',
    dateISO: '2026-05-08T19:00:00+02:00',
    durationMin: 120,
    cta: 'Quiero asistir 8/5 · 19h',
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

