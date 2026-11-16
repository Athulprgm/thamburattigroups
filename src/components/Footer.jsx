import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageSquare } from 'lucide-react';
import logoImg from '../assets/images/logo-transparent.png';
import { InstagramIcon } from './Icons';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#0B0C0E] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 focus:outline-none">
              <img
                src={logoImg}
                alt="Thamburatti Group Logo"
                className="h-9 w-auto object-contain shrink-0"
              />
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                Thamburatti <span className="text-amber-500">Group</span>
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Eicher tipper transport and building materials supply (M-Sand, P-Sand, Metal, and Stone Dust) in Kanhangad, Kasaragod, Kerala.
            </p>

            <div>
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-amber-400 text-sm font-medium transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-amber-500" />
                <span>{COMPANY_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-300">
              Pages
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-400 hover:text-white transition-colors">
                  Materials &amp; Transport
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Materials */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-300">
              Materials Supplied
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to="/services"
                    className="text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    {srv.name} — {srv.fullName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-300">
              Contact &amp; Booking
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:+91${COMPANY_INFO.phone1}`}
                  className="font-mono text-[13px] tabular-nums text-zinc-200 hover:text-amber-400 font-medium transition-colors"
                >
                  {COMPANY_INFO.phone1Display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:+91${COMPANY_INFO.phone2}`}
                  className="font-mono text-[13px] tabular-nums text-zinc-200 hover:text-amber-400 font-medium transition-colors"
                >
                  {COMPANY_INFO.phone2Display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/91${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Thamburatti Group, I would like to enquire about construction materials.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] tabular-nums text-zinc-200 hover:text-emerald-400 font-medium transition-colors"
                >
                  {COMPANY_INFO.whatsappDisplay} (WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {CURRENT_YEAR} Thamburatti Group, Kanhangad. All rights reserved.</p>
          <p>Kanhangad, Kasaragod, Kerala</p>
        </div>
      </div>
    </footer>
  );
}
