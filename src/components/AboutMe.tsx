'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function AboutMe() {
  const t = useTranslations('about');
  const certifications = t.raw('certifications') as string[];

  const stats = [
    { value: t('stats.gpa'), sub: t('stats.gpa_sub'), icon: '🎓' },
    { value: t('stats.experience'), sub: t('stats.experience_sub'), icon: '💼' },
    { value: t('stats.ai'), sub: t('stats.ai_sub'), icon: '🤖' },
    { value: t('stats.certs'), sub: t('stats.certs_sub'), icon: '📜' },
  ];

  return (
    <section id="about" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">
          <span className="gradient-text">{t('title')}</span>
        </h2>
      </AnimatedSection>

      <div className="mt-12 grid lg:grid-cols-3 gap-10 items-start">
        <AnimatedSection className="lg:col-span-1 flex flex-col items-center" delay={0.1}>
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-primary/30 mb-6">
            <Image
              src="https://avatars.githubusercontent.com/u/127162496?v=4"
              alt="Gonzalo Robinson"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card glow-border p-3 text-center"
              >
                <span className="text-2xl">{stat.icon}</span>
                <p className="text-sm font-semibold text-white mt-1">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-2 space-y-8" delay={0.2}>
          <p className="text-gray-300 leading-relaxed text-base">{t('bio')}</p>

          <div className="glass-card glow-border p-6">
            <h3 className="text-lg font-semibold text-white mb-3">{t('education_title')}</h3>
            <div>
              <p className="font-medium text-primary">{t('education.degree')}</p>
              <p className="text-sm text-gray-400">
                {t('education.university')} &middot; {t('education.period')}
              </p>
              <p className="text-sm text-gray-300 mt-1">{t('education.details')}</p>
            </div>
          </div>

          <div className="glass-card glow-border p-6">
            <h3 className="text-lg font-semibold text-white mb-3">{t('certifications_title')}</h3>
            <ul className="space-y-2">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
