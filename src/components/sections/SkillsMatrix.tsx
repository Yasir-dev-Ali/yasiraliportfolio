'use client';

import Image from 'next/image';
import { skillsCategorized } from '../../data/portfolioData';

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
  { name: 'Material UI', file: 'material ui.png' },
  { name: 'Redux', file: 'redux.png' },
  { name: 'Sass', file: 'sass.png' },
];

const skillIconRows = [
  skillIcons.slice(0, Math.ceil(skillIcons.length / 2)),
  skillIcons.slice(Math.ceil(skillIcons.length / 2)),
];

export default function SkillsMatrix() {
  return (
    <section id="skills" className="pt-10 pb-6 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="zelio-box p-6 sm:p-10 lg:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#C0DCBC] shadow-[0_0_8px_rgba(192,220,188,0.8)]" />
            <span className="text-xs font-mono text-[#C0DCBC] tracking-widest uppercase">
              Skills
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Skills
          </h3>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex items-center">
            <div className="skill-icon-wall" aria-label="Technology skills">
              {skillIconRows.map((row, rowIndex) => (
                <div
                  className={`skill-logo-marquee${rowIndex === 1 ? ' reverse' : ''}`}
                  key={rowIndex}
                >
                  <div className="skill-logo-track">
                    {[...row, ...row].map((skill, index) => (
                      <div
                        className="skill-logo-item"
                        key={`${skill.name}-${index}`}
                        role={index < row.length ? 'img' : undefined}
                        aria-label={index < row.length ? skill.name : undefined}
                        aria-hidden={index >= row.length}
                        title={skill.name}
                      >
                        <Image
                          src={`/skills-icons/${skill.file}`}
                          alt=""
                          fill
                          unoptimized
                          className="skill-logo-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-[#252532] lg:pl-8">
            <ul className="skill-copy-list">
              {skillsCategorized.map((category) => (
                <li className="skill-copy-item" key={category.label}>
                  <span className="skill-copy-label">{category.label}</span>
                  <span>{category.skills}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
