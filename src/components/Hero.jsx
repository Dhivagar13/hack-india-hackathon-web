import React, { useEffect, useRef } from 'react'
import '../styles/Hero.css'
import CountdownTimer from './CountdownTimer'

const Hero = () => {
  const particlesRef = useRef(null)

  useEffect(() => {
    // Create particles
    const particlesContainer = particlesRef.current
    if (!particlesContainer) return

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 15}s`
      particle.style.animationDuration = `${10 + Math.random() * 20}s`
      particlesContainer.appendChild(particle)
    }

    // Mouse move effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) * 0.01
      const moveY = (clientY - window.innerHeight / 2) * 0.01
      
      document.querySelectorAll('.gradient-orb').forEach((orb, index) => {
        const speed = (index + 1) * 0.5
        orb.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="particles" ref={particlesRef}></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">24-Hour Coding Challenge</div>
        <h1 className="hero-title">
          HackIndia Hackathon <span className="year">2026</span>
        </h1>
        <p className="hero-tagline">Innovate. Build. Impact.</p>
        <p className="hero-description">
          Join us for an incredible 24-hour hackathon at Mailam Engineering College.
          <br />
          Push your limits, collaborate with brilliant minds, and create something amazing.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Register Now</a>
          <a href="#schedule" className="btn btn-secondary">View Schedule</a>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">24</div>
            <div className="stat-label">Hours</div>
          </div>
          <div className="stat">
            <div className="stat-number">₹25K</div>
            <div className="stat-label">Prize Pool</div>
          </div>
          <div className="stat">
            <div className="stat-number">100+</div>
            <div className="stat-label">Participants</div>
          </div>
        </div>

        <CountdownTimer />
      </div>
    </section>
  )
}

export default Hero
