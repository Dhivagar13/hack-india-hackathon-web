import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import WhatToBring from './components/WhatToBring'
import Prizes from './components/Prizes'
import Rules from './components/Rules'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background3D from './components/Background3D'
import { initScrollReveal } from './utils/scrollReveal'

function App() {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  return (
    <div className="app">
      <Background3D />
      <div className="grid-background"></div>
      <div className="floating-cubes">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <Navbar />
      <Hero />
      <div className="reveal"><Schedule /></div>
      <div className="reveal"><WhatToBring /></div>
      <div className="reveal"><Prizes /></div>
      <div className="reveal"><Rules /></div>
      <div className="reveal"><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
