import React from 'react';
import { MessageSquare, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ServiceCard({ service }) {
  const whatsappUrl = `https://wa.me/91${COMPANY_INFO.phone1}?text=${encodeURIComponent(
    service.whatsappMessage ||
      `Hello Thamburatti Group, I would like to enquire about ${service.name} supply in Kanhangad / Kasaragod.`
  )}`;

  return (
    <div className="bg-[#121418] border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 flex flex-col justify-between transition-colors">
      <div className="space-y-4">
        <div className="border-b border-zinc-800 pb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 block">
            {service.code}
          </span>
          <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white mt-1">
            {service.name}
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">{service.fullName}</p>
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed">
          {service.description}
        </p>

        {service.detailedFeatures && (
          <ul className="space-y-2 pt-2">
            {service.detailedFeatures.slice(0, 3).map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-zinc-300 leading-snug"
              >
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-6 mt-4 border-t border-zinc-800/80">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-amber-500 text-zinc-100 hover:text-zinc-950 text-xs font-semibold transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
