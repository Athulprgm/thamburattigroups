import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuickContactBar from './components/QuickContactBar';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <QuickContactBar />
      </div>
    </Router>
  );
}
