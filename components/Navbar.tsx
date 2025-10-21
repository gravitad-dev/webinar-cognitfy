'use client'

import Image from 'next/image'

import { ANALYTICS_KEYS } from '@/lib/analytics'
import { openElevenLabsAgent } from '@/lib/elevenlabs'

const NAV_LINKS = [
  { label: 'Sesiones', href: '#sesiones' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Ponentes', href: '#ponentes' },
  { label: 'FAQ', href: '#faq' },
]

const Navbar = () => {
  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center"
            >
              <Image
                src="/logo/horizontal.png"
                alt="Cognitfy"
                width={150}
                height={40}
                priority
                className="h-auto w-32 sm:w-36"
              />
            </a>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              data-analytics={ANALYTICS_KEYS.CTA_NAV}
              onClick={openElevenLabsAgent}
            >
              Quiero asistir
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


