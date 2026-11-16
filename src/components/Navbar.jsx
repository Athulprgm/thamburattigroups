import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import logoImg from '../assets/images/logo-transparent.png';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Materials & Transport', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0C0E] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3.5 focus:outline-none">
            <img
              src={logoImg}
              alt="Thamburatti Group"
              className="h-12 sm:h-14 w-auto object-contain shrink-0"
            />
            <div>
              <span className="block font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white leading-none">
                Thamburatti <span className="text-amber-500">Group</span>
              </span>
              <span className="block text-xs text-zinc-400 mt-1">
                Tipper Transport &amp; Materials • Kanhangad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors py-1 border-b-2 ${
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
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:+91${COMPANY_INFO.phone1}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-amber-400 px-3 py-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>{COMPANY_INFO.phone1Display}</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors"
            >
              Book a Load
            </Link>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:+91${COMPANY_INFO.phone1}`}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-500"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
