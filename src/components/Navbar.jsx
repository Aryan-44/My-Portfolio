import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 shadow-md backdrop-blur-md' : 'py-6 backdrop-blur-sm'
    }`} style={{ backgroundColor: 'var(--glass-bg)', borderBottom: '1px solid var(--border-color)' }}>
      
      <div className="section-container flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-bold text-2xl tracking-tighter" style={{ color: 'var(--accent-primary)' }}>
          Aryan.
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="font-code text-sm uppercase tracking-wider transition-colors hover:text-[var(--accent-primary)]" style={{ color: 'var(--text-secondary)' }}>About</a>
          <a href="#experience" className="font-code text-sm uppercase tracking-wider transition-colors hover:text-[var(--accent-primary)]" style={{ color: 'var(--text-secondary)' }}>Experience</a>
          <a href="#skills" className="font-code text-sm uppercase tracking-wider transition-colors hover:text-[var(--accent-primary)]" style={{ color: 'var(--text-secondary)' }}>Skills</a>
          <a href="#projects" className="font-code text-sm uppercase tracking-wider transition-colors hover:text-[var(--accent-primary)]" style={{ color: 'var(--text-secondary)' }}>Projects</a>
          
          <button onClick={toggleTheme} className="transition-colors hover:text-[var(--accent-primary)]" style={{ color: 'var(--text-secondary)' }}>
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </button>

          <a href="#contact" className="px-6 py-2 border rounded-md font-code text-sm uppercase tracking-wider transition-all" 
             style={{ 
               backgroundColor: 'var(--accent-primary)', 
               color: 'var(--bg-color)', 
               borderColor: 'var(--accent-primary)'
             }}
             onMouseEnter={(e) => {
               e.target.style.backgroundColor = 'var(--accent-hover)';
             }}
             onMouseLeave={(e) => {
               e.target.style.backgroundColor = 'var(--accent-primary)';
             }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
