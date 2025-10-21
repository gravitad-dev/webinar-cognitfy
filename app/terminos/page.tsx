import Image from 'next/image'
import Link from 'next/link'

const TerminosPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/horizontal.png"
                alt="Cognitfy"
                width={150}
                height={40}
                priority
                className="h-auto w-32 sm:w-36"
              />
            </Link>
          </div>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Términos de Servicio</h1>
        <p className="mt-4 text-lg text-gray-600">
          Estos términos y condiciones describen las reglas y regulaciones para el uso del servicio de Cognitfy.
        </p>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Aceptación de los Términos</h2>
            <p className="mt-4 text-gray-700">
              Al acceder y utilizar este webinar y los servicios de Cognitfy, aceptas estar sujeto a estos términos de servicio y cumplir con todas las leyes y regulaciones aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Uso del Servicio</h2>
            <p className="mt-4 text-gray-700">
              El webinar y los materiales proporcionados son para uso educativo e informativo. No debes utilizar la información obtenida para fines ilegales o no autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Propiedad Intelectual</h2>
            <p className="mt-4 text-gray-700">
              Todo el contenido, materiales, marcas y logotipos mostrados en este webinar son propiedad de Cognitfy o de sus licenciantes. No está permitido copiar, reproducir o distribuir sin autorización previa por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Limitación de Responsabilidad</h2>
            <p className="mt-4 text-gray-700">
              Cognitfy no será responsable de ningún daño directo, indirecto, incidental, consecuente o punitivo que surja del uso o la imposibilidad de usar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Modificaciones</h2>
            <p className="mt-4 text-gray-700">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Contacto</h2>
            <p className="mt-4 text-gray-700">
              Si tienes alguna pregunta sobre estos términos de servicio, no dudes en contactarnos.
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver a la página principal
          </Link>
        </div>
      </article>
    </main>
  )
}

export default TerminosPage

