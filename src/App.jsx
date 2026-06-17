import React, { useState, useEffect } from 'react'
import Preloader from './components/Preloader'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [appState, setAppState] = useState('preloading'); // 'preloading', 'intro', 'portfolio'
  
  useEffect(() => {
    // Set initial theme to dark
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const handleEnterExperience = () => {
    setAppState('portfolio');
  };

  const handleSelectSection = (sectionId) => {
    setAppState('portfolio');
    // Scroll to the selected section after a short delay to allow rendering
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {appState === 'preloading' && (
        <Preloader onEnter={handleEnterExperience} />
      )}



      <div style={{ display: appState === 'portfolio' ? 'block' : 'none' }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
