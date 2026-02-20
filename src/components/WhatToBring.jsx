import React from 'react'
import '../styles/WhatToBring.css'

const WhatToBring = () => {
  const toBring = [
    { icon: '💊', title: 'Own Medicine', description: 'If applicable' },
    { icon: '💻', title: 'Laptop & Charger', description: 'Essential for coding' },
    { icon: '🎓', title: 'College ID', description: 'For identification', mandatory: true },
    { icon: '📋', title: 'Authorization Letter', description: 'Mandatory document', mandatory: true }
  ]

  const weProvide = [
    { icon: '🔌', title: 'Extension Box', description: 'Power outlets available' },
    { icon: '🌐', title: 'Internet', description: 'High-speed connectivity' },
    { icon: '🏨', title: 'Stay', description: '24-hour accommodation' },
    { icon: '🍕', title: 'Food & Snacks', description: 'All meals included' },
    { icon: '⚕️', title: 'Medical Support', description: 'Emergency assistance' }
  ]

  return (
    <section className="what-to-bring-section">
      <div className="container">
        <h2 className="section-title" data-text="Event Essentials">Event Essentials</h2>
        
        <div className="bring-category">
          <h3 className="category-title">What to Bring</h3>
          <div className="bring-grid">
            {toBring.map((item, index) => (
              <div 
                key={index} 
                className="bring-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="bring-icon">{item.icon}</span>
                <h4 className="bring-title">{item.title}</h4>
                <p className="bring-description">{item.description}</p>
                {item.mandatory && <span className="mandatory-badge">MANDATORY</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="bring-category">
          <h3 className="category-title">What We Provide</h3>
          <div className="bring-grid">
            {weProvide.map((item, index) => (
              <div 
                key={index} 
                className="bring-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="bring-icon">{item.icon}</span>
                <h4 className="bring-title">{item.title}</h4>
                <p className="bring-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatToBring
