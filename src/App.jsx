import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuickContactBar from './components/QuickContactBar';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <PageLoader isLoading={isLoading} onComplete={handleLoaderComplete} />
      <div className="flex flex-col min-h-screen bg-[#0B0C0E] text-[#F4F4F5] font-sans antialiased selection:bg-[#F59E0B] selection:text-[#0B0C0E]">
        <Navbar />
        <main className="flex-1 pt-16">
          <AnimatedRoutes />
        </main>
        <Footer />
        <QuickContactBar />
      </div>
    </Router>
  );
}
