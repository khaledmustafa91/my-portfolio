'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const gems = [
  {
    name: 'paymob-rails',
    org: 'swiftx-io',
    description:
      'Rails engine for the Paymob payment gateway. Supports one-time payments, mobile wallet, and installment plans with a clean DSL.',
    highlights: ['One-time payments', 'Wallet support', 'Installments', 'Rails engine'],
    url: 'https://github.com/swiftx-io/paymob-rails',
  },
  {
    name: 'otp_engine',
    org: 'go-illa',
    description:
      'Rails engine for OTP generation, SMS delivery & verification. Dual storage (DB/Redis), purpose-based OTPs, and Cequens SMS provider integration.',
    highlights: ['DB & Redis storage', 'Purpose-based OTPs', 'Cequens SMS', 'Rails engine'],
    url: 'https://github.com/go-illa/otp_engine',
  },
  {
    name: 'otp_token_auth',
    org: 'go-illa',
    description:
      'Full phone/OTP-based authentication gem inspired by devise_token_auth. Multi-device sessions, BCrypt tokens, and dynamic model support.',
    highlights: ['Multi-device sessions', 'BCrypt tokens', 'Dynamic models', 'Phone auth'],
    url: 'https://github.com/go-illa/otp_token_auth',
  },
];

function GemIcon() {
  return (
    <svg className="w-5 h-5 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="open-source" className="section-padding bg-[#0d0d0d]">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-10 bg-[#e63946]" />
          <span className="text-[#e63946] text-sm font-semibold tracking-widest uppercase">Open Source</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight"
        >
          Gems I&apos;ve
          <span className="gradient-text"> shipped.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-400 text-base max-w-xl mb-14"
        >
          Ruby gems built to solve real production problems — payment gateways, OTP auth, and more.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {gems.map((gem, i) => (
            <motion.div
              key={gem.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="group bg-[#111] border border-[#1f1f1f] rounded-xl p-6 flex flex-col gap-4 hover:border-[#e63946]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#e63946]/5"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <GemIcon />
                  <div>
                    <span className="text-gray-500 text-xs">{gem.org} /</span>
                    <h3 className="font-display font-bold text-white text-lg leading-tight">{gem.name}</h3>
                  </div>
                </div>
                <a
                  href={gem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-200 flex-shrink-0"
                  aria-label={`View ${gem.name} on GitHub`}
                >
                  <GitHubIcon />
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{gem.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5">
                {gem.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-2 py-0.5 bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 rounded-md"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={gem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#e63946] transition-colors duration-200 font-medium group-hover:text-gray-300"
              >
                <span className="font-mono text-xs truncate">{gem.url.replace('https://', '')}</span>
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
