import React, { useState } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function QuickContactBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {isExpanded && (
        <div className="bg-[#121418] border border-zinc-700 rounded-xl p-3 shadow-xl flex flex-col gap-2 min-w-[220px]">
          <div className="text-xs font-semibold text-zinc-400 px-1">
            Contact Thamburatti Group
          </div>

          <a
            href={`tel:+91${COMPANY_INFO.phone1}`}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-100 text-xs font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>{COMPANY_INFO.phone1Display}</span>
          </a>

          <a
            href={`tel:+91${COMPANY_INFO.phone2}`}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-100 text-xs font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>{COMPANY_INFO.phone2Display}</span>
          </a>

          <a
            href={`https://wa.me/91${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
              'Hello Thamburatti Group, I would like to enquire about construction materials.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp {COMPANY_INFO.whatsappDisplay}</span>
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="h-12 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-colors focus:outline-none"
        aria-label="Quick Contact Options"
      >
        {isExpanded ? (
          <>
            <X className="w-4 h-4" />
            <span>Close</span>
          </>
        ) : (
          <>
            <Phone className="w-4 h-4" />
            <span>Call / WhatsApp</span>
          </>
        )}
      </button>
    </div>
  );
}
