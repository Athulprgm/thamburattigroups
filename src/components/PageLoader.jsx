import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ isLoading, onComplete }) {
  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      onComplete?.();
    }, 650);

    return () => clearTimeout(timer);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="simple-circle-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.35, ease: 'easeInOut' }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0C0E] select-none pointer-events-none"
          aria-live="polite"
          aria-busy="true"
        >
          {/* Minimal circular spinner */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Subtle background track */}
            <div className="absolute inset-0 rounded-full border-2 border-zinc-800/80" />

            {/* Smooth amber rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-500 border-r-amber-500/60"
            />

            {/* Minimal center indicator */}
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
