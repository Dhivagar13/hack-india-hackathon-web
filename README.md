# HackIndia Hackathon 2026 Website

A modern, responsive website for the HackIndia Hackathon event at Mailam Engineering College.

## 🚀 Features

- **Modern Design**: Dark theme with blue/purple gradient accents
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations**: CSS-based animations and transitions
- **Component-Based**: Clean React component architecture
- **No External CSS Frameworks**: Built with plain CSS using Flexbox and Grid
- **Smooth Scroll Navigation**: Easy navigation between sections

## 📋 Sections

1. **Navbar** - Fixed navigation with responsive hamburger menu
2. **Hero Section** - Eye-catching landing with animated background
3. **Event Schedule** - Timeline design for Day 1 and Day 2
4. **What to Bring / What We Provide** - Grid cards with essential information
5. **Prize Pool** - Highlighted prize cards with hover effects
6. **Rules & Guidelines** - Comprehensive rules with judging criteria
7. **Contact** - College information with Google Maps integration
8. **Footer** - Links and social media placeholders

## 🛠️ Tech Stack

- **React** (with Vite)
- **Plain CSS** (No Tailwind, No Bootstrap)
- **Flexbox & CSS Grid**
- **CSS Animations**
- **Semantic HTML**

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps to Run

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Open in browser**
```
http://localhost:5173
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
hackindia-hackathon/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Schedule.jsx
    │   ├── WhatToBring.jsx
    │   ├── Prizes.jsx
    │   ├── Rules.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/
        ├── global.css
        ├── Navbar.css
        ├── Hero.css
        ├── Schedule.css
        ├── WhatToBring.css
        ├── Prizes.css
        ├── Rules.css
        ├── Contact.css
        └── Footer.css
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --primary-bg: #0a0e27;
  --accent-blue: #4f46e5;
  --accent-purple: #7c3aed;
  --accent-cyan: #06b6d4;
  /* ... more variables */
}
```

### Content
- Update event details in respective component files
- Modify schedule in `src/components/Schedule.jsx`
- Change prize amounts in `src/components/Prizes.jsx`
- Update contact information in `src/components/Contact.jsx`

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🌟 Key Features Implemented

✅ Smooth scroll navigation  
✅ Animated gradient background  
✅ Timeline design for schedule  
✅ Hover effects on cards  
✅ Responsive hamburger menu  
✅ Prize cards with glow effects  
✅ Google Maps integration  
✅ Semantic HTML structure  
✅ Clean component architecture  
✅ CSS animations and transitions  

## 📧 Contact

**Mailam Engineering College**  
Tindivanam Taluk, Mailam  
Tamil Nadu 604304, India

Email: info@mailamec.edu.in  
Phone: +91 12345 67890

## 📄 License

© 2026 HackIndia Hackathon. All rights reserved.  
Organized by Mailam Engineering College

---

**Built with ❤️ for HackIndia Hackathon 2026**
