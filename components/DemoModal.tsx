'use client'

import { useEffect } from 'react'

interface IDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

const DemoModal = ({ isOpen, onClose }: IDemoModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/gravitad/30min', '_blank', 'noopener,noreferrer')
  }

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-gray-400 transition-colors hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Cerrar modal"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 id="demo-modal-title" className="mb-3 text-2xl font-bold text-white">
            Agenda tu demo
          </h2>
          
          <p className="mb-6 text-base leading-relaxed text-gray-300">
            Selecciona el día y hora que mejor se ajuste a tu disponibilidad y agenda una demo personalizada con nuestro equipo técnico.
          </p>

          <button
            type="button"
            onClick={handleCalendlyClick}
            className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Agendar ahora
          </button>

          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full rounded-lg px-6 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default DemoModal

