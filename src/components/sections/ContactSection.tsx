'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';
import { WhatsappIcon } from '../ui/Icons';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
      setForm({ name: '', phone: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="pt-10 pb-16 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="zelio-box p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#C0DCBC] font-mono mb-2">
              Let’s connect
            </h3>
            <p className="text-xs sm:text-sm text-[#8F8F92] mb-6 font-mono">
              Have an opening or project? Drop me a message and let's discuss details.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#1a1a24] border border-[#C0DCBC] text-center space-y-2">
                <Check className="h-8 w-8 text-[#C0DCBC] mx-auto mb-2" />
                <h4 className="text-lg font-bold text-white font-mono">Message Sent!</h4>
                <p className="text-xs text-[#8F8F92]">
                  Thank you for reaching out. Yasir will reply within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1a24] border border-[#2a2a38] text-white text-xs sm:text-sm font-mono placeholder:text-[#5c5c6b] focus:outline-none focus:border-[#C0DCBC] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1a24] border border-[#2a2a38] text-white text-xs sm:text-sm font-mono placeholder:text-[#5c5c6b] focus:outline-none focus:border-[#C0DCBC] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1a24] border border-[#2a2a38] text-white text-xs sm:text-sm font-mono placeholder:text-[#5c5c6b] focus:outline-none focus:border-[#C0DCBC] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1a24] border border-[#2a2a38] text-white text-xs sm:text-sm font-mono placeholder:text-[#5c5c6b] focus:outline-none focus:border-[#C0DCBC] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a24] border border-[#2a2a38] text-white text-xs sm:text-sm font-mono placeholder:text-[#5c5c6b] focus:outline-none focus:border-[#C0DCBC] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-xl bg-[#C0DCBC] hover:bg-[#D7EAD4] text-[#0e0e13] font-mono font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(192,220,188,0.3)] disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Detail Cards */}
          <div className="lg:col-span-5 space-y-4 lg:pl-6">
            {/* WhatsApp Card */}
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a24] border border-[#2a2a38] hover:border-[#C0DCBC] transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-[#15151c] border border-[#2f2f40] flex items-center justify-center text-[#C0DCBC] group-hover:scale-105 transition-transform shrink-0">
                <WhatsappIcon className="h-5 w-5" />
              </div>
              <div className="font-mono text-xs overflow-hidden">
                <span className="text-[#8F8F92] block text-[11px] mb-0.5">WhatsApp</span>
                <span className="text-white font-bold group-hover:text-[#C0DCBC] transition-colors truncate block">
                  {personalInfo.phone}
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a24] border border-[#2a2a38] hover:border-[#C0DCBC] transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-[#15151c] border border-[#2f2f40] flex items-center justify-center text-[#C0DCBC] group-hover:scale-105 transition-transform shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="font-mono text-xs overflow-hidden">
                <span className="text-[#8F8F92] block text-[11px] mb-0.5">Email Address</span>
                <span className="text-white font-bold group-hover:text-[#C0DCBC] transition-colors truncate block">
                  {personalInfo.email}
                </span>
              </div>
            </a>

            {/* Address Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a24] border border-[#2a2a38]">
              <div className="h-12 w-12 rounded-xl bg-[#15151c] border border-[#2f2f40] flex items-center justify-center text-[#C0DCBC] shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="font-mono text-xs overflow-hidden">
                <span className="text-[#8F8F92] block text-[11px] mb-0.5">Location</span>
                <span className="text-white font-bold block">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
