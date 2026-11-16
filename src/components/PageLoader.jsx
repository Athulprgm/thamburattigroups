import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/logo-transparent.png';

export default function PageLoader({ isLoading, onComplete }) {
  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      onComplete?.();
    }, 750);

    return () => clearTimeout(timer);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="logo-circle-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.98,
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0C0E] select-none pointer-events-none"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="relative flex items-center justify-center">
            {/* Ambient soft amber glow */}
            <div className="absolute w-24 h-24 rounded-full bg-amber-500/15 blur-xl pointer-events-none" />

            {/* Static background circle ring */}
            <div className="w-20 h-20 rounded-full border-2 border-zinc-800/80" />

            {/* Smooth spinning circular accent ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="absolute inset-0 w-20 h-20 rounded-full border-2 border-transparent border-t-amber-500 border-r-amber-500/40"
            />

            {/* Centered Brand Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute flex items-center justify-center"
            >
              <img
                src={logoImg}
                alt="Thamburatti Group"
                className="w-10 h-10 object-contain drop-shadow"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
