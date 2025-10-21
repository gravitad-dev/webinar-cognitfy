const AGENDA_ITEMS = [
  {
    step: 1,
    title: 'Mapa de procesos en 20 minutos',
    description: 'Identifica rápidamente los procesos críticos de tu operación.',
  },
  {
    step: 2,
    title: 'Cálculo de costes',
    description: 'Calcula el coste real por tarea, error y retrabajo.',
  },
  {
    step: 3,
    title: 'Tecnología inteligente personalizada',
    description: 'Casos reales por sector: salud, retail, educación, servicios B2B.',
  },
  {
    step: 4,
    title: 'Operadores virtuales inteligentes',
    description: 'Atiende a tus clientes 24/7 con respuestas contextuales.',
  },
  {
    step: 5,
    title: '1400 integraciones',
    description: 'Conecta con CRM, e-commerce, ERPs y más herramientas.',
  },
  {
    step: 6,
    title: 'Métricas y Retorno de la inversión',
    description: 'Dashboard en tiempo real con indicadores clave de ahorro y resultados.',
  },
  {
    step: 7,
    title: 'Demo en vivo, preguntas y respuestas',
    description: 'Plantea tus dudas y casos específicos a nuestros expertos.',
  },
]

const Agenda = () => {
  return (
    <section id="agenda" className="bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Programa</h2>
          <p className="mt-4 text-lg text-gray-300">
            Agenda completa de la sesión en vivo
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {AGENDA_ITEMS.map((item) => (
            <div
              key={item.step}
              className="flex gap-4 rounded-lg border border-slate-700 bg-slate-800 p-6 transition-all hover:border-blue-500/50 hover:shadow-md"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-lg font-bold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-base text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Agenda

