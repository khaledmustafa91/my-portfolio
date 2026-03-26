'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  {
    category: 'Backend',
    color: 'var(--accent)',
    skills: ['Ruby', 'Ruby on Rails', 'Sidekiq', 'REST APIs', 'System Design', 'Action Cable', 'WebSockets'],
  },
  {
    category: 'Frontend',
    color: '#3b82f6',
    skills: ['JavaScript', 'Next.js', 'React.js', 'Vue.js', 'HTML', 'CSS', 'TypeScript'],
  },
  {
    category: 'DevOps & Infra',
    color: '#10b981',
    skills: ['Docker', 'AWS ECS', 'AWS EC2', 'CloudWatch', 'Semaphore CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Databases',
    color: '#f59e0b',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'Other',
    color: '#8b5cf6',
    skills: ['PHP', 'Laravel', 'C++', 'C#'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-padding bg-[var(--background)]">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-10 bg-[var(--accent)]" />
          <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-[var(--foreground)] mb-14 leading-tight"
        >
          Tools of the
          <span className="gradient-text"> trade.</span>
        </motion.h2>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + gi * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: group.color }}
                />
                <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + gi * 0.1 + si * 0.04, duration: 0.3 }}
                    className="px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)]/60 font-medium hover:border-[var(--accent)]/40 hover:text-[var(--foreground)] transition-colors duration-200 cursor-default"
                    style={{ '--hover-color': group.color } as React.CSSProperties}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
