'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const sections = ['about', 'skills', 'experience', 'projects', 'contact'] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: next });
  };

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-lg border-b border-surface-lighter/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            GR
          </button>

          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 capitalize"
              >
                {t(section)}
              </button>
            ))}
            <button
              onClick={switchLocale}
              className="px-3 py-1 text-sm font-mono rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-lg border-b border-surface-lighter/50"
          >
            <div className="px-4 py-4 space-y-3">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="block w-full text-left text-gray-400 hover:text-white transition-colors py-2"
                >
                  {t(section)}
                </button>
              ))}
              <button
                onClick={switchLocale}
                className="px-3 py-1 text-sm font-mono rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
              >
                {locale === 'en' ? 'Español' : 'English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
