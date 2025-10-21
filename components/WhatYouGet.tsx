const BENEFITS = [
  {
    title: 'Tu mapa de procesos en 20\'',
    description: 'Con los cuellos de botella que más dinero te cuestan.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Calculadora de ROI',
    description: 'Para estimar ahorro en tiempo, errores y costes desde el día 1 (plantilla descargable).',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Demo gratuita del primer miembro virtual de tu equipo',
    description: 'Atención en cualquier canal (web/WhatsApp/teléfono) y gestión documental (CRM, incidencias, presupuestos, facturas, recordatorios).',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Plan de 10 días',
    description: 'Descubrimiento (90\'), configuración (48–72h) y piloto controlado. Sin aumentar costes.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

const SECTORS = [
  'Operaciones',
  'Atención al Cliente',
  'Ventas',
  'e-commerce',
  'Educación',
  'Salud',
  'Servicios profesionales',
]

const WhatYouGet = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            ¿Qué te llevas en 60 minutos?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-slate-600 bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white transition-transform group-hover:scale-110">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-gray-300 sm:text-base">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-slate-600 bg-slate-800/30 p-6 backdrop-blur-sm sm:p-8">
          <h3 className="text-center text-xl font-bold text-white sm:text-2xl">
            Para quién es
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {SECTORS.map((sector) => (
              <span
                key={sector}
                className="inline-flex rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-300 ring-1 ring-blue-500/30 transition-all hover:ring-blue-400/50 sm:text-base"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatYouGet

