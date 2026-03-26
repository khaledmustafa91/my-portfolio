'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

const socials = [
  {
    label: 'Email',
    value: 'khaled.mustafa1297@gmail.com',
    href: 'mailto:khaled.mustafa1297@gmail.com',
    icon: <EmailIcon />,
  },
  {
    label: 'GitHub',
    value: 'github.com/khaledmustafa91',
    href: 'https://github.com/khaledmustafa91',
    icon: <GitHubIcon />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/khaledmustafa8',
    href: 'https://linkedin.com/in/khaledmustafa8',
    icon: <LinkedInIcon />,
  },
];

const services = [
  { icon: '⚙️', title: 'API & Backend Development', desc: 'Custom REST APIs, background jobs, and scalable Rails systems tailored to your product.' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'Dockerized deployments, AWS infrastructure, CI/CD pipelines, and monitoring setup.' },
  { icon: '🔗', title: 'Third-party Integrations', desc: 'Payment gateways, SMS providers, AI APIs, and any service your product needs.' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section-padding bg-[var(--background-2)] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-10 bg-[var(--accent)]" />
          <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase">Freelance & Hire</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-[var(--foreground)] mb-4 leading-tight"
        >
          Got a project? Let&apos;s
          <span className="gradient-text"> make it happen.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[var(--muted)] text-base max-w-2xl mb-10"
        >
          I take on freelance backend projects — from greenfield APIs to legacy system upgrades.
          Tell me about your idea and I&apos;ll get back to you within 24 hours.
        </motion.p>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-14"
        >
          {services.map((s) => (
            <div key={s.title} className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
              <div className="text-2xl mb-3">{s.icon}</div>
              <h4 className="text-[var(--foreground)] font-semibold text-sm mb-1">{s.title}</h4>
              <p className="text-[var(--muted)] text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </motion.div>

        <div className="max-w-xl">
          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-4"
          >
            <h3 className="text-[var(--foreground)] font-semibold text-lg mb-6">Reach me directly</h3>
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] transition-all duration-200 group"
              >
                <div className="text-[var(--accent)] group-hover:scale-110 transition-transform duration-200">
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs text-[var(--muted)] mb-0.5">{s.label}</div>
                  <div className="text-[var(--foreground)] text-sm font-medium">{s.value}</div>
                </div>
                <svg className="w-4 h-4 text-[var(--muted)] ml-auto group-hover:text-[var(--accent)] transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Project inquiry form — hidden for now
          <motion.div ...>
            <h3>Tell me about your project</h3>
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
              ... (form fields: name, email, project-type, budget, message)
            </form>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  );
}
