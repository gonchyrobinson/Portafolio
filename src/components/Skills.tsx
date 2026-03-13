'use client';

import { useTranslations } from 'next-intl';
import AnimatedSection from './AnimatedSection';

const skillData: Record<string, string[]> = {
  ai: ['Azure OpenAI', 'Generative AI', 'Cursor AI', 'Devin', 'GitHub Copilot', 'AI Agents', 'LLM Integration', 'n8n'],
  cloud: ['Azure', 'Azure DevOps', 'CI/CD', 'Git', 'Docker'],
  backend: ['C#', 'ASP.NET', '.NET', 'NestJS', 'REST API', 'Python', 'Socket.io'],
  frontend: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Material UI', 'HTML', 'CSS'],
  database: ['SQL', 'MySQL', 'PostgreSQL', 'SQLite'],
  testing: ['Playwright', 'Vitest', 'Jest'],
  methodologies: ['Agile', 'Scrum'],
};

const categoryColors: Record<string, string> = {
  ai: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
  cloud: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
  backend: 'border-green-500/40 bg-green-500/10 text-green-300',
  frontend: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
  database: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
  testing: 'border-rose-500/40 bg-rose-500/10 text-rose-300',
  methodologies: 'border-gray-500/40 bg-gray-500/10 text-gray-300',
};

const categoryHeaderColors: Record<string, string> = {
  ai: 'text-purple-400',
  cloud: 'text-blue-400',
  backend: 'text-green-400',
  frontend: 'text-cyan-400',
  database: 'text-amber-400',
  testing: 'text-rose-400',
  methodologies: 'text-gray-400',
};

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">
          <span className="gradient-text">{t('title')}</span>
        </h2>
      </AnimatedSection>

      <div className="mt-12 space-y-8">
        {Object.entries(skillData).map(([category, skills], catIdx) => (
          <AnimatedSection key={category} delay={catIdx * 0.1}>
            <div className={`glass-card p-6 ${category === 'ai' ? 'glow-border border-purple-500/30' : 'glow-border'}`}>
              <h3 className={`text-sm font-mono uppercase tracking-wider mb-4 ${categoryHeaderColors[category]}`}>
                {t(`categories.${category}`)}
                {category === 'ai' && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-purple-500/20 border border-purple-500/30 rounded-full">
                    Featured
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm rounded-lg border ${categoryColors[category]} transition-all duration-200 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
