import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Check, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import siteBuildImg from '../assets/images/image.png';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

export default function Services() {
  return (
    <div className="bg-[#0B0C0E] text-zinc-100">
      {/* PAGE HEADER */}
      <section className="py-16 sm:py-20 bg-[#121418] border-b border-zinc-800">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-amber-500">
            Materials &amp; Tipper Transport
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mt-2">
            Construction Materials We Supply
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Direct crusher-to-site delivery of M-Sand, P-Sand, 20mm &amp; 40mm granite metal, and stone dust across Kanhangad, Kasaragod, and nearby areas.
          </p>
        </ScrollReveal>
      </section>

      {/* FOUR MAIN SERVICE CARDS */}
      <section className="py-20 bg-[#0B0C0E] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAL DETAILS & USES */}
      <section className="py-20 bg-[#121418] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-amber-500">
              Material Guide
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mt-2">
              Where Each Material Is Used
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((item) => (
              <StaggerItem key={item.id}>
                <div className="bg-[#0B0C0E] border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 sm:p-8 space-y-4 h-full transition-colors">
                  <div className="flex items-start justify-between border-b border-zinc-800 pb-4 gap-4">
                    <div>
                      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-amber-500 block">
                        {item.code}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-white mt-1">
                        {item.fullName}
                      </h3>
                    </div>
                    <a
                      href={`https://wa.me/91${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                        item.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg bg-zinc-900 hover:bg-emerald-600 border border-zinc-700 hover:border-emerald-500 text-emerald-400 hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 shrink-0 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {item.detailedFeatures.map((feat, fidx) => (
                      <li
                        key={fidx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                      >
                        <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* EICHER TIPPER TRANSPORT SECTION */}
      <section className="py-20 bg-[#0B0C0E] border-b border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121418] border border-zinc-800 rounded-xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <ScrollReveal direction="left" className="lg:col-span-7 space-y-5">
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-amber-500">
                    Tipper Service
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mt-2 leading-tight">
                    Eicher Tipper Transport &amp; Site Unloading
                  </h2>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  With our own Eicher tipper trucks, we handle both single-load residential deliveries and multi-trip supply for roof concrete pours and commercial sites across Kanhangad and Kasaragod.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-lg bg-[#0B0C0E] border border-zinc-800 space-y-1">
                    <span className="text-sm font-semibold text-amber-500 block">
                      Direct Site Tipping
                    </span>
                    <p className="text-xs text-zinc-400">
                      Hydraulic tipping right where your masons need the pile unloaded.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0B0C0E] border border-zinc-800 space-y-1">
                    <span className="text-sm font-semibold text-amber-500 block">
                      Scheduled Concrete Pour Trips
                    </span>
                    <p className="text-xs text-zinc-400">
                      Book ahead for slab casting days so sand and metal arrive on time.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:+91${COMPANY_INFO.phone1}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {COMPANY_INFO.phone1Display}</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B0C0E] hover:bg-zinc-900 border border-zinc-700 text-white font-medium text-xs sm:text-sm transition-colors"
                  >
                    <span>Send Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1} className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#0B0C0E]">
                  <img
                    src={siteBuildImg}
                    alt="Construction Site Material Delivery"
                    className="w-full h-[320px] object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON QUESTIONS */}
      <section className="py-20 bg-[#121418]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-amber-500">
              FAQ
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white mt-2">
              Common Questions
            </h2>
          </ScrollReveal>

          <StaggerContainer className="space-y-4">
            <StaggerItem>
              <div className="p-6 rounded-xl bg-[#0B0C0E] border border-zinc-800 space-y-2">
                <h4 className="text-base font-semibold text-white">
                  What is the difference between M-Sand and P-Sand?
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  M-Sand (Manufactured Sand) has slightly coarser, angular grains meant for concrete work (slabs, beams, columns) and block work. P-Sand (Plastering Sand) is finely screened so masons get a smooth finish on walls and ceilings.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-xl bg-[#0B0C0E] border border-zinc-800 space-y-2">
                <h4 className="text-base font-semibold text-white">
                  How do I check current load rates?
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Call us at {COMPANY_INFO.phone1Display} or {COMPANY_INFO.phone2Display}, or send a message on WhatsApp ({COMPANY_INFO.whatsappDisplay}) with your delivery location and material needed. Rates depend on the material and distance from the crusher to your site.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-xl bg-[#0B0C0E] border border-zinc-800 space-y-2">
                <h4 className="text-base font-semibold text-white">
                  Which areas do you deliver to?
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We deliver across Kanhangad, Nileshwar, Bekal, Kasaragod town, Cheruvathur, Uduma, Pallikkara, Kotikulam, and nearby panchayats.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
