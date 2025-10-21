import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo/horizontal.png"
              alt="Cognitfy"
              width={200}
              height={60}
              className="h-auto w-48"
            />
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Al registrarte, aceptas nuestros{' '}
            <Link
              href="/terminos"
              className="font-semibold text-blue-600 underline hover:text-blue-700"
            >
              Términos de Servicio
            </Link>{' '}
            y{' '}
            <Link
              href="/privacidad"
              className="font-semibold text-blue-600 underline hover:text-blue-700"
            >
              Política de Privacidad
            </Link>
            . Cumplimos con el RGPD y protegemos tus datos.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            © {currentYear} Cognitfy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

