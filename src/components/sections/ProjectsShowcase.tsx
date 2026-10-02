'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { personalInfo, projectsData } from '../../data/portfolioData';
import { GithubIcon } from '../ui/Icons';

export default function ProjectsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projectsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section id="portfolio" className="pt-10 pb-6 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="zelio-box project-showcase p-5 sm:p-8 lg:p-10 relative overflow-hidden">
        <div className="project-grid-surface" aria-hidden="true" />
        <div className="relative z-10">
          <div className="mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#C0DCBC] shadow-[0_0_8px_rgba(192,220,188,0.8)]" />
              <span className="text-xs font-mono text-[#C0DCBC] tracking-widest uppercase">
                Projects
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              My Recent Works
            </h3>
          </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="project-detail-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center rounded-xl bg-[#1a1a24] border border-[#2a2a38] p-4 sm:p-6 lg:p-8"
            >
              <div className="lg:col-span-5">
                <div className="project-preview">
                  <Image
                    src={currentProject.previewImage}
                    alt={currentProject.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 90vw, 38vw"
                    className="project-preview-image"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#C0DCBC] tracking-tight mb-2">
                    {currentProject.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8F8F92] leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#C0DCBC]/50 bg-transparent px-4 py-2 text-sm font-semibold text-[#C0DCBC] transition-colors hover:border-[#C0DCBC] hover:bg-[#C0DCBC]/10"
                    >
                      <GithubIcon className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#C0DCBC]/50 bg-transparent px-4 py-2 text-sm font-semibold text-[#C0DCBC] transition-colors hover:border-[#C0DCBC] hover:bg-[#C0DCBC]/10"
                    >
                      Preview
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <ul className="space-y-3 font-mono text-xs">
                    <li className="text-[#5c5c6b] border-b border-[#252532] pb-2 uppercase tracking-wider text-[11px]">
                      Project Info
                    </li>

                    <li className="flex justify-between items-center gap-4 border-b border-[#252532] pb-2">
                      <span className="text-white font-semibold">Category</span>
                      <span className="text-[#8F8F92] text-right">{currentProject.category}</span>
                    </li>

                    <li className="flex justify-between items-center gap-4 border-b border-[#252532] pb-2">
                      <span className="text-white font-semibold">Website</span>
                      <span className="text-[#8F8F92] text-right truncate">
                        {new URL(currentProject.liveUrl).hostname}
                      </span>
                    </li>

                    <li className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-[#252532] pb-3">
                      <span className="text-white font-semibold shrink-0">Frontend</span>
                      <div className="flex flex-wrap gap-1.5 sm:justify-end">
                        {currentProject.frontendTech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-[#2a2a38] bg-transparent px-2 py-1 text-[10px] font-mono text-[#C0DCBC]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </li>

                    <li className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <span className="text-white font-semibold shrink-0">Backend</span>
                      <div className="flex flex-wrap gap-1.5 sm:justify-end">
                        {currentProject.backendTech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-[#2a2a38] bg-transparent px-2 py-1 text-[10px] font-mono text-[#8F8F92]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-5 mt-8 pt-4">
                  <div className="flex items-center gap-2 ml-auto" aria-label="Project navigation">
                    <span className="text-xs font-mono text-[#8F8F92] mr-1 tabular-nums">
                      {String(currentIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
                    </span>
                    <button
                      onClick={handlePrev}
                      className="project-nav-button"
                      aria-label="Previous project"
                      title="Previous project"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="project-nav-button"
                      aria-label="Next project"
                      title="Next project"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
