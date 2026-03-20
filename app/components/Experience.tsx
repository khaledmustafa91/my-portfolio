'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: 'OneBench',
    role: 'Senior Backend Developer',
    period: 'Dec 2025 – Present',
    description:
      'Multi-tenant SaaS platform that empowers organizations to run AI agents, automate data pipelines, and integrate with their core business tools. Contribute to backend architecture and system design, build and maintain API integrations with external services, develop data infrastructure solutions, and drive features from technical specification through to production — collaborating closely with frontend and product to deliver a reliable, scalable platform.',
    tags: ['Rails', 'Docker', 'AWS', 'Sidekiq'],
    current: true,
  },
  {
    company: 'ILLA',
    role: 'Senior Backend Developer',
    period: 'Nov 2024 – Nov 2025',
    description:
      'Leading backend development for a supply chain & logistics platform serving FMCG brands. Architecting scalable Rails systems, managing containerized deployments on AWS, and driving async job processing with Sidekiq.',
    tags: ['Rails', 'Docker', 'AWS', 'Semaphore CI/CD'],
    current: false,
  },
  {
    company: 'SwiftX',
    role: 'Mid-Senior Backend Developer',
    period: 'Nov 2023 – Nov 2024',
    description:
      'Built and maintained real-time chat features using Action Cable, managed background job queues with Sidekiq, and improved system reliability through containerization with Docker.',
    tags: ['Rails', 'Sidekiq', 'Docker', 'Action Cable'],
    current: false,
  },
  {
    company: 'WebOps',
    role: 'Backend Developer',
    period: 'Feb 2021 – Nov 2023',
    description:
      'Developed multi-domain SaaS systems across e-commerce and logistics verticals. Built RESTful APIs, integrated third-party services, and maintained production Rails applications at scale.',
    tags: ['Rails', 'Multi-domain', 'E-commerce', 'Logistics'],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding bg-[var(--background)]">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-10 bg-[var(--accent)]" />
          <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-[var(--foreground)] mb-14 leading-tight"
        >
          Where I&apos;ve
          <span className="gradient-text"> worked.</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div className={`absolute left-4 md:left-6 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center
                  ${exp.current
                    ? 'border-[var(--accent)] bg-[var(--accent)]'
                    : 'border-[var(--accent)]/50 bg-[var(--background)]'
                  }`}
                >
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-[var(--background)] animate-pulse" />
                  )}
                </div>

                <div className={`bg-[var(--surface)] border rounded-xl p-6 transition-all duration-300 hover:bg-[var(--surface-2)] hover:border-[var(--accent)]/50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[var(--accent)]/5 ${
                  exp.current ? 'border-[var(--accent)]/50' : 'border-[var(--border)]'
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-xl text-[var(--foreground)]">{exp.company}</h3>
                      <p className="text-[var(--foreground)]/60 font-medium text-sm mt-0.5">{exp.role}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full
                      ${exp.current
                        ? 'bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30'
                        : 'bg-[var(--foreground)]/5 text-[var(--muted)] border border-[var(--border)]'
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 bg-[var(--surface-2)] border border-[var(--border-2)] text-[var(--foreground)]/60 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
