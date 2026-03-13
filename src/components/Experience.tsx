'use client';

import { useTranslations } from 'next-intl';
import AnimatedSection from './AnimatedSection';

interface Role {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export default function Experience() {
  const t = useTranslations('experience');
  const roles = t.raw('roles') as Role[];

  return (
    <section id="experience" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">
          <span className="gradient-text">{t('title')}</span>
        </h2>
      </AnimatedSection>

      <div className="mt-12 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-accent" />

        {roles.map((role, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface z-10 mt-6" />

              <div className="ml-12 md:ml-0 md:w-1/2 glass-card glow-border p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                    <p className="text-primary font-medium">{role.company}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-400 whitespace-nowrap ml-4 mt-1">
                    {role.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {role.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-accent mt-1 shrink-0">&#9656;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
