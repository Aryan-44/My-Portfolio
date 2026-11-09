import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Button from './common/Button';
import ScrollProgress from './common/ScrollProgress';
import './Navbar.css';

const navigationLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" />
        </svg>
      )}
    </button>
  );
}

function MenuIcon({ isOpen }) {
  return isOpen ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 24);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.dataset.theme !== 'light',
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navigationLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const currentSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (currentSection) setActiveSection(currentSection.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuPanelRef.current
      ?.querySelector('button, a[href]')
      ?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !menuPanelRef.current) return;

      const focusableItems = menuPanelRef.current.querySelectorAll(
        'a[href], button:not(:disabled)',
      );
      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem?.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.setAttribute(
      'data-theme',
      nextIsDark ? 'dark' : 'light',
    );
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header
      className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}
    >
      <ScrollProgress />
      <nav className="site-nav" aria-label="Primary navigation">
        <a
          className="site-brand"
          href="#hero"
          aria-label="Aryan — back to top"
        >
          Aryan<span>.</span>
        </a>

        <div className="site-nav__desktop">
          {navigationLinks.map(({ id, label }) => (
            <a
              key={id}
              className={`site-nav__link${activeSection === id ? ' is-active' : ''}`}
              href={`#${id}`}
              aria-current={activeSection === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <Button href="#contact" className="site-nav__cta">
            Let&apos;s talk
          </Button>
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls={isMenuOpen ? 'mobile-navigation' : undefined}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          ref={menuButtonRef}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu-layer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
            >
              <button
                className="mobile-menu-backdrop"
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
              />
              <motion.div
                className="mobile-menu-panel"
                id="mobile-navigation"
                ref={menuPanelRef}
                role="dialog"
                aria-modal="true"
                aria-label="Primary navigation"
                initial={{ x: shouldReduceMotion ? 0 : '100%' }}
                animate={{ x: 0 }}
                exit={{ x: shouldReduceMotion ? 0 : '100%' }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  className="mobile-menu-close"
                  type="button"
                  onClick={closeMenu}
                >
                  Close menu
                  <MenuIcon isOpen />
                </button>
                <div className="mobile-menu-links">
                  {navigationLinks.map(({ id, label }) => (
                    <a
                      key={id}
                      className={`mobile-menu-link${activeSection === id ? ' is-active' : ''}`}
                      href={`#${id}`}
                      aria-current={activeSection === id ? 'location' : undefined}
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  ))}
                </div>
                <div className="mobile-menu-footer">
                  <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
                  <Button href="#contact" onClick={closeMenu}>
                    Let&apos;s talk
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
