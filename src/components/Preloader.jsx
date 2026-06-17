import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1200); // Wait for exit animation
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-black z-[100000] flex flex-col items-center justify-center font-sans text-white"
        >
          {/* Logo / Title */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-8 text-4xl md:text-5xl font-black tracking-widest uppercase"
          >
            Aryan<span className="text-[#ff2a2a]">.</span>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden relative mb-12">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
          </div>

          {/* Enter Button */}
          <div className="h-16 flex items-center justify-center">
            {isReady ? (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={handleEnter}
                className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-[#ff2a2a] hover:text-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,42,42,0.6)]"
              >
                Enter Aryan's portfolio
              </motion.button>
            ) : (
              <motion.div 
                className="text-white/50 text-sm tracking-widest font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                LOADING ASSETS {Math.min(progress, 100)}%
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
