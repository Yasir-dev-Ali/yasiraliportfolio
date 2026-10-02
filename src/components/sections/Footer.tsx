'use client';

import { Mail } from 'lucide-react';
import { personalInfo, navItems } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export default function Footer() {
  return (
    <footer className="pt-10 pb-12 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="border-t border-[#252532] pt-8 text-center">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C0DCBC] text-[#0e0e13] font-extrabold text-sm shadow-[0_0_12px_rgba(192,220,188,0.3)]">
            Y
          </div>
          <span className="font-mono text-lg font-bold text-white">
            {personalInfo.brandName}
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 rounded-lg border border-[#2a2a38] bg-[#1a1a24] flex items-center justify-center text-[#8F8F92] hover:text-[#C0DCBC] hover:border-[#C0DCBC] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 rounded-lg border border-[#2a2a38] bg-[#1a1a24] flex items-center justify-center text-[#8F8F92] hover:text-[#C0DCBC] hover:border-[#C0DCBC] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="h-9 w-9 rounded-lg border border-[#2a2a38] bg-[#1a1a24] flex items-center justify-center text-[#8F8F92] hover:text-[#C0DCBC] hover:border-[#C0DCBC] transition-colors"
            aria-label="Email Yasir"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Navigation row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6 font-mono text-xs">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#8F8F92] hover:text-[#C0DCBC] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[11px] font-mono text-[#5c5c6b]">
          © {new Date().getFullYear()} {personalInfo.name}. Full Stack Developer. Built with Next.js &amp; React.
        </p>
      </div>
    </footer>
  );
}
