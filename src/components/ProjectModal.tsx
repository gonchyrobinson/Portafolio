'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/projects';

interface Props {
  project: Project | null;
  onClose: () => void;
}

function isExternalVideo(url: string) {
  return url.includes('youtube') || url.includes('youtu.be') || url.includes('loom.com');
}

function getEmbedUrl(url: string) {
  if (url.includes('youtube.com/watch')) {
    const id = new URL(url).searchParams.get('v');
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('loom.com/share')) {
    return url.replace('/share/', '/embed/');
  }
  return url;
}

function formatDate(dateStr: string, locale: 'en' | 'es') {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(locale === 'es' ? 'es-AR' : 'en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export default function ProjectModal({ project, onClose }: Props) {
  const locale = useLocale() as 'en' | 'es';
  const t = useTranslations('projects');
  const [currentImage, setCurrentImage] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);

  if (!project) return null;

  const hasScreenshots = project.screenshots.length > 0;
  const hasVideos = project.demoVideos.length > 0;
  const hasManyVideos = project.demoVideos.length > 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="glass-card border border-surface-lighter/50 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Video carousel */}
          {hasVideos && (
            <div>
              {hasManyVideos && (
                <div className="flex overflow-x-auto gap-1 bg-surface/80 border-b border-surface-lighter/50 px-2 pt-2">
                  {project.demoVideos.map((video, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentVideo(i)}
                      className={`px-3 py-2 text-xs font-medium rounded-t-lg whitespace-nowrap transition-colors ${
                        i === currentVideo
                          ? 'bg-surface-light text-primary border border-surface-lighter/50 border-b-transparent'
                          : 'text-gray-400 hover:text-white hover:bg-surface-light/50'
                      }`}
                    >
                      {video.label[locale]}
                    </button>
                  ))}
                </div>
              )}
              <div className="relative w-full aspect-video bg-black">
                {isExternalVideo(project.demoVideos[currentVideo].url) ? (
                  <iframe
                    key={currentVideo}
                    src={getEmbedUrl(project.demoVideos[currentVideo].url)}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    key={currentVideo}
                    src={project.demoVideos[currentVideo].url}
                    controls
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              {hasManyVideos && (
                <div className="flex items-center justify-between px-4 py-2 bg-surface/60 border-b border-surface-lighter/50">
                  <button
                    onClick={() => setCurrentVideo((prev) => (prev - 1 + project.demoVideos.length) % project.demoVideos.length)}
                    className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    &#8592; {t('prev_video')}
                  </button>
                  <span className="text-xs text-gray-500 font-mono">
                    {currentVideo + 1} / {project.demoVideos.length}
                  </span>
                  <button
                    onClick={() => setCurrentVideo((prev) => (prev + 1) % project.demoVideos.length)}
                    className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {t('next_video')} &#8594;
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Screenshot carousel (when no videos) */}
          {hasScreenshots && !hasVideos && (
            <div className="relative w-full aspect-video bg-surface-lighter">
              <Image
                src={project.screenshots[currentImage]}
                alt={`${project.title[locale]} screenshot ${currentImage + 1}`}
                fill
                className="object-contain"
              />
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImage((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                  >
                    &#8249;
                  </button>
                  <button
                    onClick={() => setCurrentImage((prev) => (prev + 1) % project.screenshots.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                  >
                    &#8250;
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${i === currentImage ? 'bg-primary' : 'bg-white/40'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Screenshot thumbnails below video */}
          {hasScreenshots && hasVideos && (
            <div className="px-6 pt-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.screenshots.map((src, i) => (
                  <div key={i} className="relative w-24 h-16 shrink-0 rounded overflow-hidden border border-surface-lighter">
                    <Image src={src} alt={`Screenshot ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-1">
              <h3 className="text-2xl font-bold text-white">{project.title[locale]}</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label={t('close')}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-gray-500 font-mono">
                {formatDate(project.createdAt, locale)}
              </span>
              {project.liveUrl && (
                <>
                  <span className="text-gray-600">|</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary/80 hover:text-primary font-mono flex items-center gap-1 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {project.liveUrl.replace(/^https?:\/\//, '')}
                  </a>
                </>
              )}
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">{project.description[locale]}</p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs bg-surface-lighter/80 text-gray-300 rounded border border-surface-lighter"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary hover:bg-primary/80 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  {t('view_demo')}
                </a>
              )}
              {project.githubUrls.map((gh) => (
                <a
                  key={gh.url}
                  href={gh.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-surface-lighter text-gray-300 hover:text-white hover:border-gray-500 text-sm font-medium rounded-lg transition-colors"
                >
                  {t('view_code')} {project.githubUrls.length > 1 ? `(${gh.label})` : ''}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
