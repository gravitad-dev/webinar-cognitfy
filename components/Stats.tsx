const STATS = [
  { value: '1400+', label: 'Integraciones disponibles' },
  { value: '8 h/día', label: 'Ahorradas por equipo' },
  { value: '95%', label: 'Menos errores operativos' },
  { value: '340%', label: 'ROI promedio' },
]

const Stats = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Resultados medibles</h2>
          <p className="mt-4 text-lg text-gray-600">
            Métricas reales de empresas que ya mejoran sus procesos con Cognitfy
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border border-gray-200 bg-gray-50 p-8 transition-all hover:shadow-md"
            >
              <div className="text-5xl font-bold text-gray-900">{stat.value}</div>
              <div className="mt-3 text-center text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm italic text-gray-500">
          Los resultados dependen de la madurez operativa y el volumen de procesos.
        </p>
      </div>
    </section>
  )
}

export default Stats

