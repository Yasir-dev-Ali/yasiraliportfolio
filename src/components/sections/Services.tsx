'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cpu,
  Zap,
  ShoppingCart,
  Radio,
  ArrowRight,
} from 'lucide-react';
import { servicesData } from '../../data/portfolioData';

export default function Services() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Code2 className="h-6 w-6 text-[#C0DCBC]" />;
      case 'database':
        return <Database className="h-6 w-6 text-[#C0DCBC]" />;
      case 'cpu':
        return <Cpu className="h-6 w-6 text-[#C0DCBC]" />;
      case 'zap':
        return <Zap className="h-6 w-6 text-[#C0DCBC]" />;
      case 'cart':
        return <ShoppingCart className="h-6 w-6 text-[#C0DCBC]" />;
      case 'radio':
        return <Radio className="h-6 w-6 text-[#C0DCBC]" />;
      default:
        return <Code2 className="h-6 w-6 text-[#C0DCBC]" />;
    }
  };

  return (
    <section id="services" className="pt-10 pb-6 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="zelio-box p-6 sm:p-10 lg:p-12">
        {/* Header (Cooperation) */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#C0DCBC] shadow-[0_0_8px_rgba(192,220,188,0.8)]" />
            <span className="text-xs font-mono text-[#C0DCBC] tracking-widest uppercase">
              Cooperation
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            Designing solutions{' '}
            <span className="text-[#8F8F92] font-normal block sm:inline">
              customized to meet your requirements
            </span>
          </h3>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-6 rounded-2xl bg-[#1a1a24] border border-[#2a2a38] hover:border-[#C0DCBC] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-[#15151c] border border-[#2f2f40] flex items-center justify-center mb-5 group-hover:border-[#C0DCBC]/50 transition-colors">
                  {getIcon(service.icon)}
                </div>

                <h4 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-[#C0DCBC] transition-colors">
                  {service.title}
                </h4>

                <p className="text-xs text-[#8F8F92] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Highlight Tech Badges */}
              <div className="mt-5 pt-4 border-t border-[#252532] flex flex-wrap gap-1.5">
                {service.highlightTech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#15151c] text-[#C0DCBC] border border-[#262635]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA text */}
        <div className="text-center pt-10 border-t border-[#252532] mt-10">
          <p className="text-xs sm:text-sm font-mono text-[#8F8F92] leading-relaxed">
            Excited to take on <span className="text-white font-semibold">new projects</span> and collaborate.
            <br />
            Let's chat about your ideas.{' '}
            <a
              href="#contact"
              className="text-[#C0DCBC] underline font-bold hover:text-white transition-colors ml-1"
            >
              Reach out!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
