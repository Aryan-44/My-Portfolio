import { useEffect, useRef } from 'react';

function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

        progressRef.current?.style.setProperty(
          'transform',
          `scaleX(${Math.min(1, Math.max(0, progress))})`,
        );
      });
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__fill" ref={progressRef} />
    </div>
  );
}

export default ScrollProgress;
