const FEATURES = [
  {
    title: 'Entendemos tu negocio y necesidades',
    description:
      'Analizamos tu operación para diseñar automatizaciones que realmente impactan en tu negocio.',
  },
  {
    title: 'Ponemos el trabajo inteligente al alcance de todos',
    description: 'Rápido, simple y sin barreras técnicas para equipos de cualquier tamaño.',
  },
  {
    title: 'Soluciones hechas para tu forma de trabajar',
    description: 'Adaptadas a cada paso de tu operación, sin plantillas estándar.',
  },
  {
    title: 'Operadores inteligentes que nunca duermen',
    description: 'Disponible 24/7, con memoria de cada cliente y soluciones precisas en segundos.',
  },
  {
    title: '1400 integraciones',
    description: 'Conecta con tus herramientas actuales: CRM, ERP, e-commerce y más.',
  },
  {
    title: 'Interfaz sin código + análisis en tiempo real',
    description: 'Dashboard intuitivo con métricas claras para medir el ahorro y el impacto.',
  },
  {
    title: 'Soporte continuo',
    description: 'Acompañamiento técnico y estratégico en cada etapa de tu mejora de procesos.',
  },
  {
    title: 'Integración con Amplitfy & Valitfy',
    description: 'Ecosistema completo para amplificar y validar la mejora de tus procesos.',
  },
]

const UniqueCognitfy = () => {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Cognitfy: por qué es único
          </h2>
          <p className="mt-4 text-lg text-gray-300">
          Valor real en lugar de más tecnología, resultados desde el primer momento. Nos integramos con lo que ya usas: sin equipamiento ni nuevos aprendizajes. 
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-slate-700 bg-slate-800 p-6 transition-all hover:border-blue-500/50 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UniqueCognitfy

