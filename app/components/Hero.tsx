'use client';

import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-0 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-10 bg-[var(--accent)]" />
              <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            >
              Khaled
              <br />
              <span className="gradient-text">Mustafa</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl font-display font-medium text-gray-300 mb-4"
            >
              Senior Backend Engineer
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            >
              I build scalable Rails systems, open-source gems, and AI-integrated products.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a
                href="#experience"
                className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-white/20 hover:border-[var(--accent)] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm hover:text-[var(--accent)]"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[var(--accent)]/30 animate-pulse-slow" />
              <div className="absolute inset-3 rounded-full border border-[var(--accent)]/20" />
              {/* Avatar */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[#1a1a1a] flex items-center justify-center">
                <span className="font-display font-bold text-5xl md:text-6xl text-white/90 select-none">
                  KM
                </span>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[var(--accent)]" />
              <div className="absolute bottom-8 left-2 w-2 h-2 rounded-full bg-[var(--accent)]/50" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
