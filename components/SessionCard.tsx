'use client'

import { getSessionCTAAnalytics } from '@/lib/analytics'
import { getWeekdayShort, formatTimeSpanish } from '@/lib/dates'
import { openElevenLabsAgent } from '@/lib/elevenlabs'

import type { ISession } from '@/types/session'

interface ISessionCardProps {
  session: ISession
}

const SessionCard = ({ session }: ISessionCardProps) => {
  const weekdayShort = getWeekdayShort(session.dateISO)
  const time = formatTimeSpanish(session.dateISO)

  return (
    <article className="group relative flex h-full flex-col rounded-xl border-2 border-slate-700 bg-slate-800 p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="mb-4 flex items-start justify-between">
        <span className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-300">
          {weekdayShort}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-pink-400">
          Plazas limitadas
        </span>
      </div>

      <h3 className="text-xl font-bold text-white">{session.label}</h3>

      <div className="mt-4 flex-1 space-y-2 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Hora:</span>
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Duración:</span>
          <span>{session.durationMin} minutos</span>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        {...getSessionCTAAnalytics(session.id)}
        onClick={openElevenLabsAgent}
      >
        {session.cta}
      </button>
    </article>
  )
}

export default SessionCard

