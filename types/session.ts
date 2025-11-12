export interface ISession {
  id: string
  label: string
  dateISO: string
  durationMin: number
  cta: string
}

export const SESSIONS: ISession[] = [
  {
    id: '2025-11-20',
    label: 'Jueves, 20 de noviembre',
    dateISO: '2025-11-20T18:00:00+01:00',
    durationMin: 60,
    cta: 'Quiero asistir 20/11',
  },
  {
    id: '2025-11-21',
    label: 'Viernes, 21 de noviembre',
    dateISO: '2025-11-21T18:00:00+01:00',
    durationMin: 60,
    cta: 'Quiero asistir 21/11',
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

