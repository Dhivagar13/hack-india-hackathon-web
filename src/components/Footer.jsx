import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-icon">⚡</span>
              HackIndia Hackathon
            </h3>
            <p className="footer-description">
              24-Hour Coding Challenge at Mailam Engineering College.
              Innovate. Build. Impact.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#prizes">Prizes</a></li>
              <li><a href="#rules">Rules</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} HackIndia Hackathon. All rights reserved.</p>
          <p>Organized by Mailam Engineering College</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
