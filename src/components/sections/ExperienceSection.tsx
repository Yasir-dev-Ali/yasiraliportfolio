'use client';

import { motion } from 'framer-motion';
import { experienceData, personalInfo } from '../../data/portfolioData';

export default function ExperienceSection() {
  const techTags = [
    'Next.js 15',
    'React 19',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'Redis',
    'REST APIs',
    'Socket.io',
    'Tailwind CSS',
  ];

  return (
    <section id="experience" className="pt-10 pb-6 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="zelio-box p-6 sm:p-10 lg:p-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#C0DCBC] shadow-[0_0_8px_rgba(192,220,188,0.8)]" />
            <span className="text-xs font-mono text-[#C0DCBC] tracking-widest uppercase">
              Experience
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {personalInfo.experienceYears}{' '}
            <span className="text-[#8F8F92] font-normal">years of</span> passion{' '}
            <span className="text-[#8F8F92] font-normal block sm:inline">
              for programming techniques
            </span>
          </h3>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 border-t border-[#252532]">
          {/* Left Column: Terminal Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-[#1a1a24] border border-[#2a2a38] p-5 font-mono text-xs shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-[#252532] text-[#8F8F92]">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-2 text-[11px] text-zinc-400">career.log</span>
              </div>
              <div className="pt-3 space-y-2 text-zinc-300">
                <p className="text-[#8F8F92]">{'// Career Trajectory'}</p>
                <p>
                  <span className="text-[#C0DCBC]">const</span> developer = &#123;
                </p>
                <p className="pl-4 text-zinc-300">
                  name: <span className="text-amber-300">&quot;{personalInfo.name}&quot;</span>,
                </p>
                <p className="pl-4 text-zinc-300">
                  experience: <span className="text-cyan-300">&quot;{personalInfo.experienceYears} Years&quot;</span>,
                </p>
                <p className="pl-4 text-zinc-300">
                  focus: <span className="text-emerald-300">&quot;Production Web Systems&quot;</span>,
                </p>
                <p className="pl-4 text-zinc-300">
                  status: <span className="text-[#C0DCBC]">&quot;Ready for Impact&quot;</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>

          {/* Right Column: Roles & Accomplishments */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative ml-2 border-l border-[#2a2a38] pl-6 space-y-8">
              {experienceData.map((experience, idx) => (
                <motion.div
                  key={experience.company}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-7.75 top-1 h-3.5 w-3.5 rounded-full bg-[#15151c] border-2 border-[#C0DCBC] shadow-[0_0_8px_rgba(192,220,188,0.5)]" />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#C0DCBC] font-mono">
                        {experience.role}
                      </h4>
                      <p className="text-sm text-zinc-300">{experience.company}</p>
                    </div>
                    <span className="text-xs font-mono text-[#8F8F92] sm:text-right">
                      {experience.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {experience.accomplishments.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C0DCBC] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Tech Tags Row (Zelio style) */}
            <div className="pt-4 border-t border-[#252532] flex flex-wrap gap-2">
              {techTags.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg border border-[#2a2a38] bg-[#1a1a24] text-[#8F8F92] hover:text-[#C0DCBC] hover:border-[#C0DCBC] font-mono text-xs transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
