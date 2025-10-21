'use client'

import Image from 'next/image'

import { ANALYTICS_KEYS } from '@/lib/analytics'
import { openElevenLabsAgent } from '@/lib/elevenlabs'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black py-32 sm:py-40 lg:py-56">
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
        <Image
          src="/images/esferas.svg"
          alt="Background spheres"
          width={1722}
          height={715}
          className="h-auto w-full opacity-60"
          priority
        />
      </div>
      <div className="absolute -left-1/4 bottom-0 flex items-end justify-start opacity-20">
        <Image
          src="/images/looper.svg"
          alt="Background pattern"
          width={2545}
          height={1934}
          className="h-auto w-[1400px]"
          priority
        />
      </div>
      <div className="absolute -right-1/4 bottom-0 flex items-end justify-end opacity-20">
        <Image
          src="/images/looper.svg"
          alt="Background pattern"
          width={2545}
          height={1934}
          className="h-auto w-[1400px] scale-x-[-1]"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Construimos tu agente en 72 horas
          </h1>
          <p className="mt-6 text-xl font-semibold text-gray-100 sm:text-2xl">
          70% menos de costes en tus procesos, 30% más de rentabilidad y 50% más de productividad sin costes adicionales para tu negocio.

          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base text-gray-300 sm:text-lg">
          Descubre los costes reales que se esconden a simple vista en la gestión de tu negocio y cómo aplicar tecnología inteligente sin esfuerzo ni sobrecostes con Cognitfy. 
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-4 md:gap-6">
            <div className="flex w-full max-w-sm items-center gap-2.5 rounded-lg border border-gray-700/50 bg-slate-800/30 px-3 py-2 backdrop-blur-sm sm:w-auto sm:px-4 sm:py-2.5">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 sm:h-8 sm:w-8">
                <svg className="h-3.5 w-3.5 text-blue-400 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-200 sm:text-base">22, 23, 29 y 30 de octubre</span>
            </div>
            <div className="flex w-full max-w-sm items-center gap-2.5 rounded-lg border border-gray-700/50 bg-slate-800/30 px-3 py-2 backdrop-blur-sm sm:w-auto sm:px-4 sm:py-2.5">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 sm:h-8 sm:w-8">
                <svg className="h-3.5 w-3.5 text-purple-400 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-200 sm:text-base">45–60 minutos</span>
            </div>
            <div className="flex w-full max-w-sm items-center gap-2.5 rounded-lg border border-gray-700/50 bg-slate-800/30 px-3 py-2 backdrop-blur-sm sm:w-auto sm:px-4 sm:py-2.5">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-pink-500/20 sm:h-8 sm:w-8">
                <svg className="h-3.5 w-3.5 text-pink-400 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-200 sm:text-base">Demo en vivo</span>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-xl border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3">
              <svg className="h-8 w-8 flex-shrink-0 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-yellow-300">
                  Bonus de asistencia
                </p>
                <p className="mt-1 text-lg font-bold text-white">
                  Calculadora de coste por proceso
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
              data-analytics={ANALYTICS_KEYS.CTA_HERO_AGENT}
              onClick={openElevenLabsAgent}
            >
              Quiero asistir
            </button>
            <button
              type="button"
              className="w-full rounded-lg border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-auto"
              data-analytics={ANALYTICS_KEYS.CTA_DEMO}
              onClick={openElevenLabsAgent}
            >
              Quiero una demo de Cognitfy
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

