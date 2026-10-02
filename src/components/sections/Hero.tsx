'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { personalInfo, statsData } from '../../data/portfolioData';

const skillIcons = [
  { name: 'Next.js', file: 'icon-1.svg' },
  { name: 'Firebase', file: 'icon-2.svg' },
  { name: 'MongoDB', file: 'icon-3.svg' },
  { name: 'Node.js', file: 'icon-4.svg' },
  { name: 'Tailwind CSS', file: 'icon-5.svg' },
  { name: 'React', file: 'icon-6.png' },
  { name: 'React Native', file: 'icon-7.png' },
  { name: 'TypeScript', file: 'icon-8.png' },
  { name: 'JavaScript', file: 'icon-9.png' },
  { name: 'GitHub', file: 'icon-10.png' },
  { name: 'Git', file: 'icon-11.png' },
  { name: 'Docker', file: 'icon-12.png' },
  { name: 'PostgreSQL', file: 'icon-13.png' },
  { name: 'Redis', file: 'icon-14.png' },
];

export default function Hero() {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <section id="about" className="pt-24 sm:pt-28 pb-6 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="zelio-box hero-frame p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="hero-portrait-wrap">
              <div className={`hero-portrait${photoLoaded ? ' has-photo' : ''}`}>
                <Image
                  src={personalInfo.profileImage}
                  alt={`Portrait of ${personalInfo.name}`}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 84vw, 370px"
                  className="hero-portrait-photo"
                  onLoad={() => setPhotoLoaded(true)}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                    setPhotoLoaded(false);
                  }}
                />
                <span className="hero-portrait-orbit hero-portrait-orbit-one" />
                <span className="hero-portrait-orbit hero-portrait-orbit-two" />
                <span className="hero-portrait-mark">YA</span>
                <span className="hero-portrait-caption">FULL STACK DEVELOPER</span>
              </div>
              <span className="hero-code-badge" aria-hidden="true">&lt;/&gt;</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col min-w-0">
            <p className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#8F8F92]">
              <span className="text-[#5c5c6b]">&lt;hello&gt;</span>
              <span className="text-white font-semibold">Hey, I’m {personalInfo.name}</span>
              <span className="text-[#5c5c6b]">&lt;/hello&gt;</span>
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight my-4 leading-tight">
              <span className="text-[#C0DCBC]">{personalInfo.title}</span>
              <span className="flicker font-normal">_</span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 my-2 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            <div className="hero-skill-marquee mt-5 mb-6" aria-label="Technology skills">
              <div className="hero-skill-track">
                {[...skillIcons, ...skillIcons].map((skill, index) => (
                  <div
                    className="hero-skill-tile"
                    key={`${skill.name}-${index}`}
                    title={skill.name}
                    role={index < skillIcons.length ? 'img' : undefined}
                    aria-label={index < skillIcons.length ? skill.name : undefined}
                    aria-hidden={index >= skillIcons.length}
                  >
                    <Image
                      src={`/skills-icons/${skill.file}`}
                      alt=""
                      width={40}
                      height={40}
                      loading="eager"
                      unoptimized
                      className="hero-skill-icon"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-[#C0DCBC] hover:bg-[#D7EAD4] text-[#0e0e13] font-semibold text-sm tracking-wide transition-colors flex items-center gap-2"
              >
                <span>Let’s Connect</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="/Yasir.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-lg border border-[#2a2a38] bg-[#1a1a24] hover:border-[#C0DCBC] text-[#8F8F92] hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <Download className="h-4 w-4 text-[#C0DCBC]" />
                <span>Download my CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-[#15151c] border border-[#252532] p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="h-8 w-8 rounded-lg bg-[#1a1a24] border border-[#2a2a38] flex items-center justify-center text-[#C0DCBC] mb-2 font-mono text-xs">
                #0{idx + 1}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight my-1 font-mono">
                {stat.value}
              </h2>
              <p className="text-xs font-mono text-[#8F8F92] mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
