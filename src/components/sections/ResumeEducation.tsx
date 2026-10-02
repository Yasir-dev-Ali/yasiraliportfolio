'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { certificationData, educationData } from '../../data/portfolioData';

export default function ResumeEducation() {
  return (
    <section id="resume" className="pt-10 pb-6 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Education & Degrees */}
        <div className="zelio-box p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Title with Green Icon */}
            <div className="flex items-center gap-3 pb-6 border-b border-[#252532]">
              <div className="h-10 w-10 rounded-xl bg-[#1a1a24] border border-[#2a2a38] flex items-center justify-center text-[#C0DCBC]">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Education
              </h3>
            </div>

            {/* Vertical Timeline List (Zelio signature style) */}
            <div className="relative pl-6 border-l border-[#252532] mt-6 space-y-6">
              {educationData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="relative group"
                >
                  {/* Timeline indicator node */}
                  <div className="absolute -left-7.75 top-1 h-3.5 w-3.5 rounded-full bg-[#15151c] border-2 border-[#C0DCBC] shadow-[0_0_8px_rgba(192,220,188,0.5)]" />

                  <p className="text-xs font-mono text-[#8F8F92] mb-1">
                    {item.period}
                  </p>
                  <h4 className="text-sm font-bold text-[#C0DCBC] uppercase tracking-wide">
                    {item.institutionOrTopic}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Technical Mastery & Research */}
        <div className="zelio-box p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Title with Green Icon */}
            <div className="flex items-center gap-3 pb-6 border-b border-[#252532]">
              <div className="h-10 w-10 rounded-xl bg-[#1a1a24] border border-[#2a2a38] flex items-center justify-center text-[#C0DCBC]">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Certifications
              </h3>
            </div>

            {/* Vertical Timeline List */}
            <div className="relative pl-6 border-l border-[#252532] mt-6 space-y-6">
              {certificationData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="relative group"
                >
                  {/* Timeline indicator node */}
                  <div className="absolute -left-7.75 top-1 h-3.5 w-3.5 rounded-full bg-[#15151c] border-2 border-[#C0DCBC] shadow-[0_0_8px_rgba(192,220,188,0.5)]" />

                  <p className="text-xs font-mono text-[#8F8F92] mb-1">
                    {item.period}
                  </p>
                  <h4 className="text-sm font-bold text-[#C0DCBC] uppercase tracking-wide">
                    {item.institutionOrTopic}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
