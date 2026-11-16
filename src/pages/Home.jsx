import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Truck,
  Clock,
  ThumbsUp,
  Phone,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import heroQuarryImg from '../assets/images/hero-truck.jpg';
import logoImg from '../assets/images/logo-transparent.png';
import ServiceCard from '../components/ServiceCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import {
  COMPANY_INFO,
  SERVICES_DATA,
  WHY_CHOOSE_US,
  WORKING_PROCESS,
  REGIONAL_COVERAGE
} from '../data/companyData';

export default function Home() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Gem: Truck,
    Clock: Clock,
    ThumbsUp: ThumbsUp
  };

  return (
    <div className="bg-[#0B0C0E] text-zinc-100">
      {/* HERO SECTION */}
      <section className="relative min-h-[82vh] flex items-center border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/gemini_generated_video_51bf42da.mp4"
            poster={heroQuarryImg}
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={(e) => {
              if (e.currentTarget.currentTime >= 7) {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play();
              }
            }}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/90 via-[#0B0C0E]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl space-y-5"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-amber-500 text-xs font-semibold uppercase tracking-widest"
            >
              Kanhangad, Kasaragod
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white leading-[1.05]"
            >
              Building Materials &amp;{' '}
              <span className="text-amber-500">Tipper Service</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="text-sm sm:text-base text-zinc-300"
            >
              M-Sand, P-Sand, Crushed Metal &amp; Stone Dust delivered directly to your site.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              <a
                href={`tel:+91${COMPANY_INFO.phone1}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone1Display}</span>
              </a>

              <a
                href={`https://wa.me/91${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  'Hello Thamburatti Group, I want to enquire about building materials delivery in Kanhangad / Kasaragod.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-white font-medium text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp {COMPANY_INFO.whatsappDisplay}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 lg:py-24 bg-[#0B0C0E] border-b border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div className="bg-[#121418] rounded-xl p-8 sm:p-10 border border-zinc-800 flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Thamburatti Group Kanhangad"
                  className="w-full max-w-[360px] h-auto object-contain"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                  About Thamburatti Group
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white mt-1">
                  Dependable Tipper Transport &amp; Crusher Materials in Kasaragod
                </h2>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>{COMPANY_INFO.aboutText[0]}</p>
                <p className="text-zinc-400">{COMPANY_INFO.aboutText[1]}</p>
                <p className="text-zinc-400">{COMPANY_INFO.aboutText[2]}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#121418] border border-zinc-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white">
                    Company-Owned Eicher Tippers
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Well-maintained heavy tipper trucks suitable for both highway hauling and narrow residential site roads.
                  </p>
                </div>
                <div className="bg-[#121418] border border-zinc-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white">
                    Direct Quarry Loading
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Materials are loaded straight from regional crushers with no middleman markup or unnecessary delays.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                >
                  <span>Read more about our business</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MATERIALS SECTION */}
      <section className="py-20 lg:py-24 bg-[#0B0C0E] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                What We Supply
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white mt-1">
                Construction Materials
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              We supply washed sand, granite metal, and quarry dust in full tipper loads for house construction and commercial projects.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <ScrollReveal delay={0.2} className="mt-10 text-center">
            <p className="text-sm text-zinc-400">
              Need multiple loads or regular site supply?{' '}
              <Link
                to="/contact"
                className="text-amber-500 hover:text-amber-400 font-semibold underline underline-offset-4"
              >
                Call or message us for rates
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-24 bg-[#121418] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Why Work With Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white mt-1">
              Straightforward Service You Can Count On
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComp = iconMap[item.iconName] || ShieldCheck;
              return (
                <StaggerItem key={idx}>
                  <div className="bg-[#0B0C0E] border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 space-y-3 h-full transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="text-xs text-zinc-400 block">
                        {item.subtitle}
                      </span>
                      <h3 className="text-base font-semibold text-white mt-0.5">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="py-20 lg:py-24 bg-[#0B0C0E] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Ordering Process
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white mt-1">
              How We Deliver to Your Site
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKING_PROCESS.map((proc) => (
              <StaggerItem key={proc.step}>
                <div className="bg-[#121418] border border-zinc-800 hover:border-zinc-700 p-6 rounded-xl space-y-3 h-full transition-colors">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500 text-zinc-950 font-display font-bold text-lg">
                    {proc.step}
                  </span>

                  <h3 className="text-base font-semibold text-white">
                    {proc.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SERVICE AREAS & MAP */}
      <section className="py-20 lg:py-24 bg-[#121418] border-b border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="left" className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                  Service Areas
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white mt-1">
                  Based in Kanhangad, Delivering Across Kasaragod
                </h2>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Operating from Kanhangad, we deliver construction materials to house plots, commercial sites, and road works across the district.
              </p>

              <div className="space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
                  Regular Delivery Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {REGIONAL_COVERAGE.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 rounded-lg bg-[#0B0C0E] border border-zinc-800 text-xs font-medium text-zinc-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${COMPANY_INFO.phone1}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs sm:text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{COMPANY_INFO.phone1Display}</span>
                </a>
                <a
                  href={`tel:+91${COMPANY_INFO.phone2}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B0C0E] hover:bg-zinc-900 border border-zinc-700 text-white font-medium text-xs sm:text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>{COMPANY_INFO.phone2Display}</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#0B0C0E]">
                <iframe
                  title="Thamburatti Group Location Kanhangad Kasaragod"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62354.10325490212!2d75.05149313888365!3d12.308253164101962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba47ff290516ddb%3A0xbfe903695287f394!2sKanhangad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="py-20 bg-[#0B0C0E]">
        <ScrollReveal direction="scale" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white">
            Need M-Sand, P-Sand, Metal, or Stone Dust?
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Call or WhatsApp us with your location in Kanhangad or Kasaragod for today&apos;s load rate and delivery timing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`tel:+91${COMPANY_INFO.phone1}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.phone1Display}</span>
            </a>

            <a
              href={`https://wa.me/91${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                'Hello Thamburatti Group, I need construction materials supply in Kanhangad / Kasaragod.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#121418] hover:bg-zinc-800 border border-zinc-700 text-white font-medium text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp {COMPANY_INFO.whatsappDisplay}</span>
            </a>
          </div>

          <p className="text-xs text-zinc-400 pt-2">
            Second Number:{' '}
            <a
              href={`tel:+91${COMPANY_INFO.phone2}`}
              className="text-zinc-200 hover:text-amber-400 underline underline-offset-2"
            >
              {COMPANY_INFO.phone2Display}
            </a>{' '}
            • Instagram:{' '}
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 underline underline-offset-2"
            >
              {COMPANY_INFO.instagramHandle}
            </a>
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
