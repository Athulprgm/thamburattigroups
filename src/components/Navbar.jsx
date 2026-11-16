import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import logoImg from '../assets/images/logo-transparent.png';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Materials & Transport', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0B0C0E]/95 backdrop-blur-md border-zinc-800 shadow-lg shadow-black/40'
          : 'bg-[#0B0C0E]/90 backdrop-blur-sm border-zinc-800/80'
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="h-0.5 bg-amber-500 origin-left w-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 focus:outline-none">
            <img
              src={logoImg}
              alt="Thamburatti Group"
              className="h-8 sm:h-9 w-auto object-contain shrink-0"
            />
            <div>
              <span className="block font-display text-base sm:text-lg font-bold uppercase tracking-wide text-white leading-none">
                Thamburatti <span className="text-amber-500">Group</span>
              </span>
              <span className="block text-[10px] sm:text-[11px] text-zinc-400 mt-0.5 leading-none">
                Tipper Transport &amp; Materials • Kanhangad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs lg:text-sm font-medium transition-colors py-1 border-b-2 ${
                    isActive
                      ? 'text-amber-400 border-amber-500 font-semibold'
                      : 'text-zinc-300 hover:text-white border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Contact Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={`tel:+91${COMPANY_INFO.phone1}`}
              className="inline-flex items-center gap-1.5 text-xs lg:text-sm font-medium text-zinc-200 hover:text-amber-400 px-2.5 py-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.phone1Display}</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg text-xs lg:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors"
            >
              Book a Load
            </Link>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:+91${COMPANY_INFO.phone1}`}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-500"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#121418] px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-400 font-semibold'
                    : 'text-zinc-300 hover:bg-zinc-800/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href={`tel:+91${COMPANY_INFO.phone1}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call {COMPANY_INFO.phone1Display}</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-lg bg-amber-500 text-zinc-950 text-sm font-semibold"
            >
              Book a Load
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
