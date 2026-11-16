import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ServiceCard({ service, index = 0 }) {
  const whatsappUrl = `https://wa.me/91${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    service.whatsappMessage ||
      `Hello Thamburatti Group, I would like to enquire about ${service.name} supply in Kanhangad / Kasaragod.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -4 }}
      className="bg-[#121418] border border-zinc-800 hover:border-amber-500/40 rounded-xl p-6 flex flex-col justify-between transition-colors h-full"
    >
      <div className="space-y-4">
        <div className="border-b border-zinc-800 pb-4">
          <span className="font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-amber-500 block">
            {service.code}
          </span>
          <h3 className="font-display text-xl font-medium tracking-[-0.025em] text-white mt-1.5">
            {service.name}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">{service.fullName}</p>
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
    </motion.div>
  );
}
