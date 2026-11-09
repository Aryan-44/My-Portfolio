import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from './common/Button';
import './Hero.css';

const HeroScene = lazy(() => import('./three/HeroScene'));

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Aryan-44',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/k-aryan-58a852283',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      </svg>
    ),
  },
];

function NetworkIllustration() {
  return (
    <svg
      className="hero-artwork__fallback"
      viewBox="0 0 520 520"
      role="img"
      aria-label="Illustration of a connected neural network"
    >
      <defs>
        <radialGradient id="network-core">
          <stop offset="0" stopColor="#22d3ee" stopOpacity=".34" />
          <stop offset="1" stopColor="#818cf8" stopOpacity=".02" />
        </radialGradient>
        <filter id="network-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="260" cy="260" r="205" fill="url(#network-core)" />
      <g className="hero-artwork__orbits">
        <ellipse cx="260" cy="260" rx="178" ry="76" />
        <ellipse cx="260" cy="260" rx="178" ry="76" transform="rotate(60 260 260)" />
        <ellipse cx="260" cy="260" rx="178" ry="76" transform="rotate(120 260 260)" />
      </g>
      <g className="hero-artwork__edges">
        <path d="m105 190 70-68 82 44 82-64 75 78M105 190l54 105 98-129 87 126 70-112M159 295l-35 88 133-88 87 97 68-97M175 122l-16 173 98 88 82-64 5-217M257 166l1 217M339 102l-10 190M414 180l-84 112" />
      </g>
      <g className="hero-artwork__core">
        <circle cx="257" cy="252" r="52" />
        <circle cx="257" cy="252" r="34" />
        <path d="m231 252 26-24 26 24-26 24-26-24Z" />
      </g>
      <g className="hero-artwork__nodes" filter="url(#network-glow)">
        <circle cx="105" cy="190" r="6" />
        <circle cx="175" cy="122" r="5" />
        <circle cx="257" cy="166" r="7" />
        <circle cx="339" cy="102" r="5" />
        <circle cx="414" cy="180" r="6" />
        <circle cx="159" cy="295" r="5" />
        <circle cx="329" cy="292" r="7" />
        <circle cx="124" cy="383" r="5" />
        <circle cx="257" cy="383" r="6" />
        <circle cx="344" cy="389" r="5" />
        <circle cx="397" cy="292" r="6" />
      </g>
      <g className="hero-artwork__particles">
        <circle cx="86" cy="282" r="2" />
        <circle cx="208" cy="77" r="2" />
        <circle cx="369" cy="242" r="2" />
        <circle cx="215" cy="427" r="2" />
        <circle cx="432" cy="360" r="2" />
        <circle cx="284" cy="91" r="2" />
      </g>
    </svg>
  );
}

function HeroArtwork() {
  const shouldReduceMotion = useReducedMotion();
  const [isCompact, setIsCompact] = useState(
    () => window.matchMedia('(max-width: 720px)').matches,
  );
  const canUseWebGL = Boolean(window.WebGLRenderingContext);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 720px)');
    const updateDensity = (event) => setIsCompact(event.matches);

    mediaQuery.addEventListener('change', updateDensity);
    return () => mediaQuery.removeEventListener('change', updateDensity);
  }, []);

  return (
    <div className="hero-artwork" aria-hidden="true">
      {canUseWebGL ? (
        <Suspense fallback={<NetworkIllustration />}>
          <HeroScene
            compact={isCompact}
            reducedMotion={Boolean(shouldReduceMotion)}
            fallback={<NetworkIllustration />}
          />
        </Suspense>
      ) : (
        <NetworkIllustration />
      )}
      <div className="hero-artwork__caption">NEURAL SYSTEMS / 01</div>
    </div>
  );
}

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.65, delay },
  });

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.p className="hero-eyebrow" {...reveal()}>
              Kummiti Naga Aryan Kumar Reddy
            </motion.p>
            <motion.h1
              className="hero-title"
              id="hero-title"
              {...reveal(0.08)}
            >
              Building intelligent systems.
              <span>Turning ideas into AI-powered products.</span>
            </motion.h1>
            <motion.p className="hero-role" {...reveal(0.16)}>
              AI/ML Engineer <span aria-hidden="true">·</span> Generative AI
              Developer
            </motion.p>
            <motion.p className="hero-description" {...reveal(0.24)}>
              I build practical applications with machine learning, large
              language models, and retrieval workflows—connecting AI
              capabilities to thoughtful software experiences.
            </motion.p>

            <motion.div className="hero-actions" {...reveal(0.32)}>
              <Button href="#projects">Explore my projects</Button>
              <Button href="#contact" variant="secondary">
                Get in touch
              </Button>
            </motion.div>

            <motion.div className="hero-socials" {...reveal(0.4)}>
              <span className="hero-socials__label">Find me on</span>
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div className="hero-artwork-wrap" {...reveal(0.2)}>
            <HeroArtwork />
          </motion.div>
        </div>
      </div>
      <a className="hero-scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <span className="hero-scroll-cue__line" aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
