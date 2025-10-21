import Agenda from '@/components/Agenda'
import Countdown from '@/components/Countdown'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Partners from '@/components/Partners'
import SessionPicker from '@/components/SessionPicker'
import Speakers from '@/components/Speakers'
import Stats from '@/components/Stats'
import StickyCTA from '@/components/StickyCTA'
import UniqueCognitfy from '@/components/UniqueCognitfy'
import WhatYouGet from '@/components/WhatYouGet'

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Countdown />
      <WhatYouGet />
      <SessionPicker />
      <Partners />
      <Agenda />
      <UniqueCognitfy />
      <Stats />
      <Speakers />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  )
}

export default HomePage

