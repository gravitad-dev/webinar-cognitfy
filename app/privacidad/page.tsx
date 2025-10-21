import Image from 'next/image'
import Link from 'next/link'

const PrivacidadPage = () => {
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
        <h1 className="text-4xl font-bold text-gray-900">Política de Privacidad</h1>
        <p className="mt-4 text-lg text-gray-600">
          En Cognitfy, tu privacidad es nuestra prioridad. Te explicamos cómo recopilamos, usamos y
          protegemos tu información.
        </p>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Quiénes somos</h2>
            <p className="mt-4 text-gray-700">
              La dirección de nuestra web es:{' '}
              <a href="https://cognitfy.com" className="text-blue-600 underline hover:text-blue-700">
                https://cognitfy.com
              </a>
              . Cognitfy es una plataforma de automatización inteligente que ayuda a empresas a
              optimizar sus procesos mediante soluciones personalizadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Comentarios</h2>
            <p className="mt-4 text-gray-700">
              Cuando los visitantes dejan comentarios en la web, recopilamos los datos que se muestran
              en el formulario de comentarios, así como la dirección IP del visitante y la cadena de
              agentes de usuario del navegador para ayudar a la detección de spam.
            </p>
            <p className="mt-4 text-gray-700">
              Una cadena anónima creada a partir de tu dirección de correo electrónico (también llamada
              hash) puede ser proporcionada al servicio de Gravatar para ver si la estás usando.
              Después de la aprobación de tu comentario, la imagen de tu perfil es visible para el
              público en el contexto de tu comentario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Medios</h2>
            <p className="mt-4 text-gray-700">
              Si subes imágenes a la web, deberías evitar subir imágenes con datos de ubicación (GPS
              EXIF) incluidos. Los visitantes de la web pueden descargar y extraer cualquier dato de
              ubicación de las imágenes de la web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
            <p className="mt-4 text-gray-700">
              Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre, dirección de
              correo electrónico y web en cookies. Esto es para tu comodidad, para que no tengas que
              volver a rellenar tus datos cuando dejes otro comentario. Estas cookies tendrán una
              duración de un año.
            </p>
            <p className="mt-4 text-gray-700">
              Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal para
              determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se
              elimina al cerrar el navegador.
            </p>
            <p className="mt-4 text-gray-700">
              Cuando accedas, también instalaremos varias cookies para guardar tu información de acceso
              y tus opciones de visualización de pantalla. Las cookies de acceso duran dos días, y las
              cookies de opciones de pantalla duran un año. Si seleccionas «Recuérdarme», tu acceso
              perdurará durante dos semanas. Si sales de tu cuenta, las cookies de acceso se
              eliminarán.
            </p>
            <p className="mt-4 text-gray-700">
              Si editas o publicas un artículo se guardará una cookie adicional en tu navegador. Esta
              cookie no incluye datos personales y simplemente indica el ID del artículo que acabas de
              editar. Caduca después de 1 día.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Contenido incrustado de otros sitios web
            </h2>
            <p className="mt-4 text-gray-700">
              Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos,
              imágenes, artículos, etc.). El contenido incrustado de otras webs se comporta exactamente
              de la misma manera que si el visitante hubiera visitado la otra web.
            </p>
            <p className="mt-4 text-gray-700">
              Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento
              adicional de terceros, y supervisar tu interacción con ese contenido incrustado, incluido
              el seguimiento de tu interacción con el contenido incrustado si tienes una cuenta y estás
              conectado a esa web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Con quién compartimos tus datos</h2>
            <p className="mt-4 text-gray-700">
              Si solicitas un restablecimiento de contraseña, tu dirección IP será incluida en el
              correo electrónico de restablecimiento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Cuánto tiempo conservamos tus datos</h2>
            <p className="mt-4 text-gray-700">
              Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto
              es para que podamos reconocer y aprobar comentarios sucesivos automáticamente, en lugar
              de mantenerlos en una cola de moderación.
            </p>
            <p className="mt-4 text-gray-700">
              De los usuarios que se registran en nuestra web (si los hay), también almacenamos la
              información personal que proporcionan en su perfil de usuario. Todos los usuarios pueden
              ver, editar o eliminar su información personal en cualquier momento (excepto que no
              pueden cambiar su nombre de usuario). Los administradores de la web también pueden ver y
              editar esa información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Qué derechos tienes sobre tus datos</h2>
            <p className="mt-4 text-gray-700">
              Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir un
              archivo de exportación de los datos personales que tenemos sobre ti, incluyendo cualquier
              dato que nos hayas proporcionado. También puedes solicitar que eliminemos cualquier dato
              personal que tengamos sobre ti. Esto no incluye ningún dato que estemos obligados a
              conservar con fines administrativos, legales o de seguridad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Dónde se envían tus datos</h2>
            <p className="mt-4 text-gray-700">
              Los comentarios de los visitantes puede que los revise un servicio de detección
              automática de spam.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Contacto</h2>
            <p className="mt-4 text-gray-700">
              Si tienes alguna pregunta sobre esta política de privacidad o sobre cómo manejamos tus
              datos personales, no dudes en contactarnos.
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

export default PrivacidadPage

