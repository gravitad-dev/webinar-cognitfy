import { SESSIONS } from '@/types/session'
import SessionCard from './SessionCard'

const SessionPicker = () => {
  return (
    <section id="sesiones" className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Elige tu sesión
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Todas las sesiones comparten el mismo contenido. Selecciona la fecha que mejor te convenga.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SESSIONS.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SessionPicker

