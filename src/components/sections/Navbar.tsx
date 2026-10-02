'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  Mail,
  X,
  Moon,
  Sun,
} from 'lucide-react';
import { navItems, personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/Icons';

export default function Navbar() {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('yasir-portfolio-theme');
    const nextTheme = savedTheme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    const frameId = window.requestAnimationFrame(() => setTheme(nextTheme));
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('yasir-portfolio-theme', nextTheme);
    setTheme(nextTheme);
  };

  const scrollTo = (href: string) => {
    setOffCanvasOpen(false);
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 p-4 sm:p-6 pointer-events-none">
        <div className="max-w-6xl mx-auto w-full pointer-events-auto">
          <nav className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#15151c]/90 backdrop-blur-xl border border-[#252532] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            {/* Left: Menu Trigger (Desktop) + Brand */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOffCanvasOpen(true)}
                className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg border border-[#2a2a38] bg-[#1a1a24] text-[#C0DCBC] hover:border-[#C0DCBC] hover:bg-[#C0DCBC]/10 transition-colors cursor-pointer"
                title="Open Quick Info"
                aria-label="Open Info Drawer"
              >
                <Menu className="h-4 w-4" />
              </button>

              <a
                href="#about"
                className="flex items-center gap-2 text-white font-bold text-lg tracking-tight group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C0DCBC] text-[#0e0e13] font-extrabold text-sm shadow-[0_0_12px_rgba(192,220,188,0.4)] group-hover:scale-105 transition-transform">
                  Y
                </div>
                <span className="font-mono text-base font-bold text-white">
                  {personalInfo.brandName}
                </span>
              </a>
            </div>

            {/* Center: Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-xs font-mono text-[#8F8F92] hover:text-[#C0DCBC] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right: Social, Theme, and Mobile Controls */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2a38] bg-[#1a1a24] text-[#8F8F92] hover:text-[#C0DCBC] hover:border-[#C0DCBC] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2a38] bg-[#1a1a24] text-[#8F8F92] hover:text-[#C0DCBC] hover:border-[#C0DCBC] transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2a38] bg-[#1a1a24] text-[#8F8F92] hover:text-[#C0DCBC] hover:border-[#C0DCBC] transition-all"
                  aria-label="Message Yasir on WhatsApp"
                  title="WhatsApp"
                >
                  <WhatsappIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2a38] bg-[#1a1a24] text-[#8F8F92] hover:text-[#C0DCBC] hover:border-[#C0DCBC] transition-all"
                  aria-label="Email Yasir"
                  title="Email Yasir"
                >
                  <Mail className="h-3.5 w-3.5" />
                </a>
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              >
                {theme === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-[#2a2a38] bg-[#1a1a24] text-white hover:text-[#C0DCBC] transition-colors"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="pointer-events-auto max-w-6xl mx-auto mt-2 rounded-2xl bg-[#15151c] border border-[#252532] p-5 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col gap-3 font-mono text-xs">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className="text-left py-2 px-3 rounded-lg text-[#8F8F92] hover:text-white hover:bg-[#1a1a24] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-3 border-t border-[#252532] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#1a1a24] border border-[#2a2a38] text-zinc-300"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#1a1a24] border border-[#2a2a38] text-zinc-300"
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="px-4 py-2 rounded-lg bg-[#C0DCBC] text-[#0e0e13] font-bold text-xs"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* OffCanvas Side Drawer (like in faiqahmad.bytesflux.com) */}
      <AnimatePresence>
        {offCanvasOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOffCanvasOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed inset-y-0 left-0 max-w-sm w-full bg-[#15151c] border-r border-[#252532] p-8 shadow-2xl flex flex-col justify-between z-10"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#252532]">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Get in touch
                  </h3>
                  <button
                    onClick={() => setOffCanvasOpen(false)}
                    className="p-2 rounded-lg border border-[#2a2a38] bg-[#1a1a24] text-zinc-400 hover:text-white hover:border-[#C0DCBC] transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Subtitle */}
                <p className="mt-6 text-xs text-[#8F8F92] leading-relaxed">
                  I&apos;m always excited to take on new full-stack projects, contract opportunities, and collaborate with innovative teams.
                </p>

                {/* Contact list items */}
                <div className="mt-8 space-y-6 text-xs font-mono">
                  <div>
                    <span className="text-[#5c5c6b] text-[11px] uppercase tracking-wider block mb-1">
                      WhatsApp
                    </span>
                    <a
                      href={personalInfo.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-[#C0DCBC] text-sm font-semibold transition-colors"
                    >
                      <WhatsappIcon className="h-4 w-4 shrink-0" />
                      {personalInfo.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-[#5c5c6b] text-[11px] uppercase tracking-wider block mb-1">
                      Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-[#C0DCBC] text-sm font-semibold transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-[#5c5c6b] text-[11px] uppercase tracking-wider block mb-1">
                      Address
                    </span>
                    <p className="text-white text-sm font-semibold">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social bottom */}
              <div className="pt-6 border-t border-[#252532]">
                <span className="text-[#5c5c6b] text-[11px] font-mono uppercase tracking-wider block mb-3">
                  Social Channels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-lg border border-[#2a2a38] bg-[#1a1a24] flex items-center justify-center text-zinc-400 hover:text-[#C0DCBC] hover:border-[#C0DCBC] transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-lg border border-[#2a2a38] bg-[#1a1a24] flex items-center justify-center text-zinc-400 hover:text-[#C0DCBC] hover:border-[#C0DCBC] transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
