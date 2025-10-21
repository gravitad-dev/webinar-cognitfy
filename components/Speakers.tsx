import Image from 'next/image'

const Speakers = () => {
  return (
    <section id="ponentes" className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ponentes
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Arquitectos de sistemas y expertos en inteligencia artificial
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-center rounded-lg border border-slate-700 bg-slate-800 p-8 transition-all hover:border-blue-500/50 hover:shadow-lg">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/images/ponente.jpg"
                alt="Bradley Caruci"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">Bradley Caruci</h3>
            <p className="mt-2 text-center text-base text-gray-300">
              
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border border-slate-700 bg-slate-800 p-8 transition-all hover:border-blue-500/50 hover:shadow-lg">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/images/fran.jpeg"
                alt="Fran Carballo"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">Fran Carballo</h3>
            <p className="mt-2 text-center text-base text-gray-300">
              
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speakers

