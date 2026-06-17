import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveIntro = ({ onSelectSection }) => {
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  
  const [currentTime, setCurrentTime] = useState(0);
  const [audioFinished, setAudioFinished] = useState(false);

  // Timestamps for the words (Approximate, to be adjusted with real audio)
  const introTime = 2.0; // Seconds when "Introduction" is spoken
  const skillsTime = 4.0; // Seconds when "Skills" is spoken
  const projectsTime = 6.0; // Seconds when "Projects" is spoken
  const endTime = 8.0; // Audio finishes

  useEffect(() => {
    if (audioRef.current && videoRef.current) {
      audioRef.current.play().catch(e => console.error("Audio playback failed", e));
      videoRef.current.play().catch(e => console.error("Video playback failed", e));
    }
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.currentTime >= endTime) {
        setAudioFinished(true);
      }
    }
  };

  // Helper to determine button states
  const getButtonState = (targetTime, nextTime) => {
    if (audioFinished) return "interactive"; // Audio done, buttons are clickable
    if (currentTime >= targetTime && currentTime < nextTime) return "highlighted"; // Currently spoken
    if (currentTime >= nextTime) return "dimmed"; // Spoken in the past
    return "hidden"; // Not spoken yet
  };

  const introState = getButtonState(introTime, skillsTime);
  const skillsState = getButtonState(skillsTime, projectsTime);
  const projectsState = getButtonState(projectsTime, endTime);

  // Framer motion variants for the buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    highlighted: { 
      opacity: 1, 
      scale: 1.2, 
      y: 0, 
      boxShadow: "0px 0px 30px 10px rgba(255, 255, 255, 0.8)",
      borderColor: "#ffffff",
      color: "#ffffff"
    },
    dimmed: { 
      opacity: 0.5, 
      scale: 1, 
      y: 0,
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
      borderColor: "rgba(255,255,255,0.2)",
      color: "rgba(255,255,255,0.7)"
    },
    interactive: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      boxShadow: "0px 0px 15px 0px rgba(255, 255, 255, 0.2)",
      borderColor: "rgba(255,255,255,0.5)",
      color: "#ffffff",
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 w-full h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-center items-center z-[50]">
      
      {/* Placeholder Audio (Hidden) */}
      {/* REPLACE src WITH YOUR ACTUAL AUDIO FILE */}
      <audio 
        ref={audioRef} 
        onTimeUpdate={handleTimeUpdate}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder audio
        preload="auto"
      />

      {/* Character Video Layer */}
      {/* REPLACE src WITH YOUR ACTUAL TRANSPARENT WEBM VIDEO */}
      <div className="absolute inset-0 z-0 flex justify-center items-end pointer-events-none">
        <video 
          ref={videoRef}
          playsInline
          muted // Muted to ensure it plays, audio is handled by the <audio> tag for precision
          className="h-[80vh] object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          {/* Using a placeholder video URL, replace with local asset */}
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>
      </div>

      {/* UI Layer */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col md:flex-row justify-around items-center h-full pb-20 pt-10">
        
        {/* Buttons */}
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate={introState}
          whileHover={audioFinished ? { scale: 1.1, backgroundColor: "#ffffff", borderColor: "#ffffff", color: "#000000" } : {}}
          onClick={() => audioFinished && onSelectSection("about")}
          className={`px-8 py-4 rounded-2xl border-2 bg-black/40 backdrop-blur-md font-bold text-xl md:text-3xl transition-colors duration-300 ${audioFinished ? 'cursor-pointer' : 'cursor-default pointer-events-none'}`}
        >
          Introduction
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate={skillsState}
          whileHover={audioFinished ? { scale: 1.1, backgroundColor: "#ffffff", borderColor: "#ffffff", color: "#000000" } : {}}
          onClick={() => audioFinished && onSelectSection("skills")} // Could map to about/experience
          className={`px-8 py-4 rounded-2xl border-2 bg-black/40 backdrop-blur-md font-bold text-xl md:text-3xl transition-colors duration-300 ${audioFinished ? 'cursor-pointer' : 'cursor-default pointer-events-none'}`}
          style={{ y: audioFinished ? [10, -10] : 0 }} // Staggered floating effect
        >
          Skills
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate={projectsState}
          whileHover={audioFinished ? { scale: 1.1, backgroundColor: "#ffffff", borderColor: "#ffffff", color: "#000000" } : {}}
          onClick={() => audioFinished && onSelectSection("projects")}
          className={`px-8 py-4 rounded-2xl border-2 bg-black/40 backdrop-blur-md font-bold text-xl md:text-3xl transition-colors duration-300 ${audioFinished ? 'cursor-pointer' : 'cursor-default pointer-events-none'}`}
        >
          Projects
        </motion.button>
      </div>

      {/* Skip button for development/impatient users */}
      {!audioFinished && (
        <button 
          onClick={() => {
            if(audioRef.current) audioRef.current.currentTime = endTime;
            setAudioFinished(true);
          }}
          className="absolute bottom-8 right-8 text-white/40 hover:text-white transition-colors text-sm font-medium z-50 tracking-widest uppercase"
        >
          Skip Intro
        </button>
      )}

    </div>
  );
};

export default InteractiveIntro;
