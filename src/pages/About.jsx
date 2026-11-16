import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Layers, MapPin, Check, Phone } from 'lucide-react';
import heroQuarryImg from '../assets/images/hero-truck.jpg';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { COMPANY_INFO, WHY_CHOOSE_US } from '../data/companyData';

export default function About() {
  return (
    <div className="bg-[#0B0C0E] text-zinc-100">
      {/* PAGE HEADER */}
      <section className="py-16 sm:py-20 bg-[#121418] border-b border-zinc-800">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            About Us
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-wide text-white mt-1">
            Thamburatti Group, Kanhangad
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mt-3">
            Local Eicher tipper transport and building material suppliers serving homeowners, masons, and contractors across Kasaragod district.
          </p>
        </ScrollReveal>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 bg-[#0B0C0E] border-b border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="left" className="lg:col-span-7 space-y-5">
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white">
                Reliable Material Supply for Every Stage of Construction
              </h2>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>{COMPANY_INFO.aboutText[0]}</p>
                <p>{COMPANY_INFO.aboutText[1]}</p>
                <p className="text-zinc-400">{COMPANY_INFO.aboutText[2]}</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#121418] border border-zinc-800 text-xs font-medium text-zinc-200">
                  Kanhangad, Kasaragod
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#121418] border border-zinc-800 text-xs font-medium text-amber-400">
                  Own Eicher Tipper Fleet
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#121418] border border-zinc-800 text-xs font-medium text-zinc-200">
                  M-Sand • P-Sand • Metal • Stone Dust
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#121418]">
                <img
                  src={heroQuarryImg}
                  alt="Quarry Loading and Tipper Operations"
                  className="w-full h-[360px] object-cover object-center"
                />
                <div className="p-4 border-t border-zinc-800 bg-[#121418]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                    Our Fleet
                  </p>
                  <p className="text-sm text-zinc-200 mt-0.5">
                    Direct site tipping across Kanhangad, Nileshwar, Bekal, and Kasaragod.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 bg-[#121418] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Our Operations
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white mt-1">
              What We Do
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="bg-[#0B0C0E] border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 space-y-3 h-full transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Eicher Tipper Transport
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We run heavy-duty Eicher tippers built to carry sand, metal, and quarry dust safely over main roads as well as narrow village and residential plot access roads.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#0B0C0E] border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 space-y-3 h-full transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Direct Crusher Sourcing
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Whether you need washed M-Sand for concrete, fine P-Sand for plastering, 20mm/40mm blue granite metal, or stone dust, we load directly from trusted regional crushers.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#0B0C0E] border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 space-y-3 h-full transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Local Kasaragod Service
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Based in Kanhangad, we know the local routes and site conditions across Kasaragod district and work closely with local builders, masons, and house owners.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#0B0C0E] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Our Standards
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white mt-1">
              Why Builders &amp; Homeowners Trust Us
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-[#121418] border border-zinc-800 hover:border-zinc-700 p-6 rounded-xl space-y-2.5 h-full transition-colors">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* QUALITY & CONTACT */}
      <section className="py-20 bg-[#121418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="scale" className="bg-[#0B0C0E] border border-zinc-800 rounded-xl p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white">
                  Clean Material &amp; Honest Measurement
                </h2>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Good concrete and plastering depend on clean sand and stone. We check every load at the crusher so you get properly washed sand and well-graded granite metal without mud or quarry waste.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Washed M-Sand &amp; P-Sand</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Clean 20mm &amp; 40mm blue granite metal</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Full tipper load quantity</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Experienced local drivers</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={`tel:+91${COMPANY_INFO.phone1}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.phone1Display}</span>
                </a>
                <Link
                  to="/services"
                  className="w-full text-center py-3 px-6 rounded-lg bg-[#121418] hover:bg-zinc-800 border border-zinc-700 text-white font-medium text-sm transition-colors"
                >
                  View Materials &amp; Uses
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
