import Image from 'next/image'

const PARTNERS = [
  { name: 'Gravitad', logo: '/logo/gravitad.jpg' },
  { name: 'Koolinart', logo: '/logo/koolinart.jpg' },
  { name: 'Seedchain', logo: '/logo/seedchain.jpg' },
  { name: 'Saverin', logo: '/logo/saverin.jpg' },
  { name: 'Creantia', logo: '/logo/creantia.jpg' },
]

const Partners = () => {
  return (
    <section className="border-y border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-600">
          Empresas que ya mejoran sus procesos con Cognitfy
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex h-16 items-center justify-center grayscale transition-all hover:grayscale-0"
              aria-label={`Logo de ${partner.name}`}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={60}
                className="h-auto w-28 object-contain sm:w-32 lg:w-36"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

