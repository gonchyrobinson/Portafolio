'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import type { Project } from '@/data/projects';

interface Props {
  project: Project;
  onClick: () => void;
}

function formatDate(dateStr: string, locale: 'en' | 'es') {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(locale === 'es' ? 'es-AR' : 'en-US', {
    month: 'short',
    year: 'numeric',
  });
}

export default function ProjectCard({ project, onClick }: Props) {
  const locale = useLocale() as 'en' | 'es';
  const t = useTranslations('projects');
  const hasScreenshot = project.screenshots.length > 0;
  const hasVideos = project.demoVideos.length > 0;

  return (
    <button
      onClick={onClick}
      className="group glass-card glow-border overflow-hidden text-left w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="relative h-48 bg-surface-lighter overflow-hidden">
        {hasScreenshot ? (
          <Image
            src={project.screenshots[0]}
            alt={project.title[locale]}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : hasVideos ? (
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <svg className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-xs text-gray-500 font-mono">
              {project.demoVideos.length} {project.demoVideos.length === 1 ? 'demo' : 'demos'}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl text-gray-600 font-mono">{'</>'}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-light/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 right-3 flex gap-2">
          {hasVideos && (
            <span className="px-2 py-0.5 text-xs bg-primary/20 border border-primary/30 text-primary rounded-full flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              {project.demoVideos.length} {project.demoVideos.length === 1 ? 'demo' : 'demos'}
            </span>
          )}
          {project.isPrivate && (
            <span className="px-2 py-0.5 text-xs bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-full">
              {t('private_badge')}
            </span>
          )}
          {project.isSlowStart && (
            <span className="px-2 py-0.5 text-xs bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full">
              {t('slow_badge')}
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
            {project.title[locale]}
          </h3>
          <span className="shrink-0 text-xs text-gray-500 font-mono mt-1">
            {formatDate(project.createdAt, locale)}
          </span>
        </div>
        <p className="text-sm text-gray-400 line-clamp-2 mb-3">
          {project.description[locale]}
        </p>
        {project.liveUrl && (
          <div className="flex items-center gap-1.5 mb-3">
            <svg className="w-3.5 h-3.5 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="text-xs text-primary/70 truncate font-mono">
              {project.liveUrl.replace(/^https?:\/\//, '')}
            </span>
          </div>
        )}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs bg-surface-lighter/80 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2 py-0.5 text-xs bg-surface-lighter/80 text-gray-400 rounded">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
