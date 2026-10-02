'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { blogPosts } from '../../data/portfolioData';

export default function BlogSection() {
  return (
    <section id="blog" className="pt-10 pb-6 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="zelio-box p-6 sm:p-10 lg:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#C0DCBC] shadow-[0_0_8px_rgba(192,220,188,0.8)]" />
            <span className="text-xs font-mono text-[#C0DCBC] tracking-widest uppercase">
              Latest Posts
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Blog
          </h3>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group rounded-2xl bg-[#1a1a24] border border-[#2a2a38] overflow-hidden hover:border-[#C0DCBC] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Simulated Image Container */}
              <div className="relative h-44 bg-gradient-to-tr from-[#121217] via-[#1a1a26] to-[#151520] p-4 flex flex-col justify-between border-b border-[#252532] overflow-hidden">
                {/* Floating Category Tag */}
                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-md bg-[#15151c] text-[#C0DCBC] border border-[#2a2a38] text-[10px] font-mono font-bold uppercase tracking-wider">
                    {post.tag}
                  </span>
                  <span className="h-8 w-8 rounded-full bg-[#15151c] border border-[#2a2a38] flex items-center justify-center text-zinc-400 group-hover:text-[#C0DCBC] group-hover:border-[#C0DCBC] transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Abstract Code graphic inside card preview */}
                <div className="my-auto font-mono text-[10px] text-[#5c5c6b] space-y-1">
                  <div>&gt; import &#123; performance &#125; from 'next'</div>
                  <div>&gt; query.optimize(&#123; latency: '&lt; 100ms' &#125;)</div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8F8F92] z-10">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-mono text-[#8F8F92] block mb-2">
                    {post.date}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-[#C0DCBC] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-[#8F8F92] mt-2 leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#252532]">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 group-hover:text-[#C0DCBC] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
