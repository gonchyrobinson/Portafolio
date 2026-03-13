'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import AnimatedSection from './AnimatedSection';

export default function Projects() {
  const t = useTranslations('projects');
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">
          <span className="gradient-text">{t('title')}</span>
        </h2>
      </AnimatedSection>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <AnimatedSection key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} onClick={() => setSelected(project)} />
          </AnimatedSection>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
