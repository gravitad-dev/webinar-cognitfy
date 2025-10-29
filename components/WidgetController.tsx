'use client'

import { usePathname } from 'next/navigation'

const WidgetController = () => {
  const pathname = usePathname()
  
  // No mostrar el widget en la página de la calculadora y demofincas
  if (pathname === '/calculadora' || pathname === '/demofincas') {
    return null
  }

  return (
    <elevenlabs-convai agent-id="agent_6701k7s7r039ewjt3epnd5xd32d7"></elevenlabs-convai>
  )
}

export default WidgetController
