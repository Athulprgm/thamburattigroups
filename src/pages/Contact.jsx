import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Copy,
  Check,
  Loader2
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { COMPANY_INFO } from '../data/companyData';

// Deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbyeCBmZbdHyvFoX48mz-X4mMh8uhfDGbCg7oGwsh9AXASlJZhI-7blylfqlSV2mfxSMRw/exec';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceRequired: 'M-Sand',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(null);

  const validate = (values) => {
    const errs = {};
    if (!values.name || values.name.trim().length < 2) {
      errs.name = 'Please enter your name.';
    }

    const cleanPhone = values.phone.replace(/[\s\-+]/g, '');
    const phoneRegex = /^[0-9]{10}$/;
    if (!cleanPhone) {
      errs.phone = 'Please enter your phone number.';
    } else if (!phoneRegex.test(cleanPhone) && cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!values.serviceRequired) {
      errs.serviceRequired = 'Please select a material or service.';
    }

    if (!values.message || values.message.trim().length < 5) {
      errs.message = 'Please enter your site location and load requirement.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (touched[name]) {
      setErrors(validate({ ...formData, [name]: value }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      phone: true,
      serviceRequired: true,
      message: true
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(formData)
        });
      } catch (error) {
        console.error('Error submitting enquiry to Google Sheet:', error);
      } finally {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      serviceRequired: 'M-Sand',
      message: ''
    });
    setTouched({});
    setErrors({});
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(type);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  const whatsappGeneratedUrl = `https://wa.me/91${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello Thamburatti Group, my name is ${formData.name || 'a customer'}. Material needed: ${formData.serviceRequired}. Phone: ${formData.phone}. Details: ${formData.message}`
  )}`;

  return (
    <div className="bg-[#0B0C0E] text-zinc-100">
      {/* PAGE HEADER */}
      <section className="py-16 sm:py-20 bg-[#121418] border-b border-zinc-800">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Contact Us
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-wide text-white mt-1">
            Book a Load or Check Today&apos;s Rates
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mt-3">
            {COMPANY_INFO.contactSubheading}
          </p>
        </ScrollReveal>
      </section>

      {/* CONTACT DETAILS & FORM */}
      <section className="py-20 bg-[#0B0C0E] border-b border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Info */}
            <StaggerContainer className="lg:col-span-5 space-y-4">
              <StaggerItem>
                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                  Direct Phone &amp; WhatsApp
                </h2>
                <p className="text-zinc-400 text-sm mt-1">
                  For the fastest response, call us directly or send your site location on WhatsApp.
                </p>
              </StaggerItem>

              {/* Primary Phone */}
              <StaggerItem>
                <div className="bg-[#121418] border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs text-zinc-400 block">
                          Primary Number
                        </span>
                        <a
                          href={`tel:+91${COMPANY_INFO.phone1}`}
                          className="block text-lg font-semibold text-white hover:text-amber-400 transition-colors mt-0.5"
                        >
                          {COMPANY_INFO.phone1Display}
                        </a>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          Direct call &amp; booking
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(COMPANY_INFO.phone1, 'phone1')}
                      className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="Copy Phone Number"
                    >
                      {copiedPhone === 'phone1' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </StaggerItem>

              {/* Secondary Phone */}
              <StaggerItem>
                <div className="bg-[#121418] border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs text-zinc-400 block">
                          Alternate Number
                        </span>
                        <a
                          href={`tel:+91${COMPANY_INFO.phone2}`}
                          className="block text-lg font-semibold text-white hover:text-amber-400 transition-colors mt-0.5"
                        >
                          {COMPANY_INFO.phone2Display}
                        </a>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          Direct tipper / dispatch contact
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(COMPANY_INFO.phone2, 'phone2')}
                      className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="Copy Phone Number"
                    >
                      {copiedPhone === 'phone2' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </StaggerItem>

              {/* WhatsApp Card */}
              <StaggerItem>
                <div className="bg-[#121418] border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs text-emerald-400 block">
                          WhatsApp Number
                        </span>
                        <a
                          href={`https://wa.me/91${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                            'Hello Thamburatti Group, I would like to enquire about construction materials.'
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg font-semibold text-white hover:text-emerald-400 transition-colors mt-0.5"
                        >
                          {COMPANY_INFO.whatsappDisplay}
                        </a>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          Message for Rates &amp; Location Pin
                        </p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/91${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                        'Hello Thamburatti Group, I would like to enquire about construction materials.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shrink-0"
                    >
                      Open Chat
                    </a>
                  </div>
                </div>
              </StaggerItem>

              {/* Location Card */}
              <StaggerItem>
                <div className="bg-[#121418] border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 block">
                        Location
                      </span>
                      <h4 className="text-sm font-semibold text-white mt-0.5">
                        {COMPANY_INFO.location}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1">
                        Delivering across Kanhangad, Nileshwar, Bekal, Kasaragod, and nearby areas.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* Instagram Card */}
              <StaggerItem>
                <div className="bg-[#121418] border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                        <InstagramIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs text-zinc-400 block">
                          Instagram
                        </span>
                        <h4 className="text-sm font-semibold text-white">
                          {COMPANY_INFO.instagramHandle}
                        </h4>
                      </div>
                    </div>

                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="Open Instagram"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Right Column: Enquiry Form */}
            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-7">
              <div className="bg-[#121418] border border-zinc-800 rounded-xl p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                    Send an Enquiry
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                    Enter your requirement below to prepare a direct WhatsApp message to our team.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#0B0C0E] border border-emerald-500/40 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="text-base font-semibold text-white">
                          Ready to Send on WhatsApp
                        </h4>
                        <p className="text-sm text-zinc-300">
                          Thank you, <strong className="text-white">{formData.name}</strong>. Click below to send your enquiry for <strong className="text-amber-400">{formData.serviceRequired}</strong> directly to our WhatsApp number.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <a
                        href={whatsappGeneratedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs sm:text-sm font-medium transition-colors"
                      >
                        Reset Form
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-medium text-zinc-300">
                        Your Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your name"
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#0B0C0E] border text-white text-sm focus:outline-none transition-colors ${
                          touched.name && errors.name
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-zinc-700 focus:border-amber-500'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="text-xs text-rose-400 flex items-center gap-1.5 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-medium text-zinc-300">
                        Phone Number <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="10-digit mobile number"
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#0B0C0E] border text-white text-sm focus:outline-none transition-colors ${
                          touched.phone && errors.phone
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-zinc-700 focus:border-amber-500'
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-xs text-rose-400 flex items-center gap-1.5 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="serviceRequired" className="block text-xs font-medium text-zinc-300">
                        Material / Service Required <span className="text-amber-500">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C0E] border border-zinc-700 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="M-Sand">M-Sand (Concrete &amp; Brickwork)</option>
                        <option value="P-Sand">P-Sand (Plastering Sand)</option>
                        <option value="20mm / 40mm Metal">20mm / 40mm Granite Metal</option>
                        <option value="Stone Dust">Stone Dust (Filling &amp; Interlocks)</option>
                        <option value="Eicher Tipper Transport">Eicher Tipper Transport Only</option>
                        <option value="Multiple Materials">Multiple Materials</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-medium text-zinc-300">
                        Site Location &amp; Load Details <span className="text-amber-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. 2 loads of M-Sand needed at Nileshwar tomorrow morning."
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#0B0C0E] border text-white text-sm focus:outline-none transition-colors ${
                          touched.message && errors.message
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-zinc-700 focus:border-amber-500'
                        }`}
                      />
                      {touched.message && errors.message && (
                        <p className="text-xs text-rose-400 flex items-center gap-1.5 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-zinc-950 font-semibold text-sm transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Saving Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WORKING HOURS & DELIVERY INFO */}
      <section className="py-16 bg-[#121418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="bg-[#0B0C0E] border border-zinc-800 p-6 rounded-xl space-y-2 h-full">
                <h3 className="text-base font-semibold text-white">
                  Working Hours
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Monday to Saturday: 6:00 AM – 8:00 PM <br />
                  Sunday: Available for pre-booked concrete work.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#0B0C0E] border border-zinc-800 p-6 rounded-xl space-y-2 h-full">
                <h3 className="text-base font-semibold text-white">
                  Delivery Areas
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Kanhangad, Kasaragod, Bekal, Nileshwar, Cheruvathur, Uduma, Pallikkara, Kotikulam, and nearby areas.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#0B0C0E] border border-zinc-800 p-6 rounded-xl space-y-2 h-full">
                <h3 className="text-base font-semibold text-white">
                  Urgent Site Delivery
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  For urgent concrete pours or same-day loads, please call directly on{' '}
                  <a
                    href={`tel:+91${COMPANY_INFO.phone1}`}
                    className="text-amber-500 hover:text-amber-400 font-semibold"
                  >
                    {COMPANY_INFO.phone1Display}
                  </a>
                  .
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
