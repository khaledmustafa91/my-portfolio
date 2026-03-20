'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '3', label: 'Open Source Gems' },
  { value: '2', label: 'Products Built' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding bg-[#0d0d0d]">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-10 bg-[#e63946]" />
          <span className="text-[#e63946] text-sm font-semibold tracking-widest uppercase">About Me</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Building backends
              <br />
              <span className="gradient-text">that scale.</span>
            </h2>

            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                I&apos;m a Software Engineer with <strong className="text-white">4+ years</strong> of experience
                building scalable web applications, with a strong focus on{' '}
                <strong className="text-white">Ruby on Rails</strong> and backend architecture.
              </p>
              <p>
                I specialize in designing and delivering robust APIs, distributed systems, and
                cloud-native infrastructure. I enjoy solving hard engineering problems —
                whether that&apos;s optimizing database performance, building reliable async
                pipelines, or shipping open-source tools the community can use.
              </p>
              <p>
                Outside of work, I contribute to open source and explore the intersection
                of backend engineering and AI-powered products.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#e63946]">📍</span> Based in Cairo, Egypt
              </p>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5 text-center"
                >
                  <div className="font-display font-bold text-3xl text-[#e63946] mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack snippet */}
            <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#e63946]" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-600 text-xs ml-2">stack.rb</span>
              </div>
              <div className="space-y-1">
                <p><span className="text-[#e63946]">primary</span><span className="text-gray-400">:</span> <span className="text-green-400">&quot;Ruby on Rails&quot;</span></p>
                <p><span className="text-[#e63946]">frontend</span><span className="text-gray-400">:</span> <span className="text-green-400">&quot;Next.js / React&quot;</span></p>
                <p><span className="text-[#e63946]">infra</span><span className="text-gray-400">:</span> <span className="text-green-400">&quot;Docker / AWS&quot;</span></p>
                <p><span className="text-[#e63946]">ai</span><span className="text-gray-400">:</span> <span className="text-green-400">&quot;OpenAI / Claude&quot;</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
