import { FAQ_ITEMS } from '@/types/session'

const FAQ = () => {
  return (
    <section id="faq" className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <dl className="mt-12 space-y-6">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-700 bg-slate-800 p-6"
            >
              <dt className="text-lg font-bold text-white">{item.question}</dt>
              <dd className="mt-3 text-base text-gray-300">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default FAQ

