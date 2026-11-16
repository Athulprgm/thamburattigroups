import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/logo-transparent.png';

export default function PageLoader({ isLoading, onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    let rafId;
    const duration = 850; // crisp, minimal 850ms load cycle
    const startTime = performance.now();

    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        rafId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          onComplete?.();
        }, 120);
      }
    };

    rafId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(rafId);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="minimal-page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -12,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0C0E] text-[#F4F4F5] select-none"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="w-full max-w-[240px] px-4 flex flex-col items-center">
            {/* Logo & Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={logoImg}
                alt="Thamburatti Group"
                className="h-11 w-auto object-contain mb-3.5"
              />
              <span className="font-display text-[17px] font-semibold tracking-[-0.03em] text-white leading-none">
                Thamburatti <span className="text-amber-500">Group</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 mt-1.5">
                Kanhangad • Kasaragod
              </span>
            </motion.div>

            {/* Minimal Razor-Thin Progress Bar */}
            <div className="w-full mt-6 space-y-2">
              <div className="h-[1.5px] w-full bg-zinc-800/90 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-500 origin-left"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
                <span>Loading</span>
                <span className="tabular-nums text-zinc-400">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
