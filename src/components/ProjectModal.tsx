'use client';

import { useEffect, useState } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  playTick: () => void;
}

export default function ProjectModal({ project, onClose, playTick }: ProjectModalProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl border rounded-3xl overflow-hidden shadow-2xl my-auto text-left transition-colors duration-200 ${
          isDark
            ? 'bg-[#0f1118] border-white/10 text-white'
            : 'bg-white border-gray-200 text-gray-900 shadow-2xl'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playTick();
            onClose();
          }}
          className={`absolute top-5 right-5 z-30 p-2.5 rounded-full border transition-colors ${
            isDark
              ? 'bg-black/60 hover:bg-black/90 text-zinc-300 hover:text-white border-white/10'
              : 'bg-white/80 hover:bg-white text-gray-700 hover:text-black border-gray-300 shadow-md'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Player / Banner */}
        <div className="relative aspect-[16/9] w-full bg-zinc-950 overflow-hidden">
          {project.videoSrc ? (
            <video
              src={project.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={
                project.screenshots && project.screenshots[activeScreenIndex]
                  ? project.screenshots[activeScreenIndex]
                  : project.image
              }
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between pointer-events-none">
            <div>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-cyan-400 border border-white/10">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 drop-shadow-md">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Subtitle & Tagline */}
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}>
            {project.description}
          </p>

          {/* Screenshot Switcher for Apps or Multiple Images */}
          {project.screenshots && project.screenshots.length > 1 && (
            <div className="space-y-2">
              <div className={`text-xs font-mono uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Screenshots & Viewports ({project.screenshots.length} available):
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.screenshots.map((screen, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playTick();
                      setActiveScreenIndex(idx);
                    }}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden border transition-all shrink-0 ${
                      activeScreenIndex === idx
                        ? 'border-cyan-400 ring-2 ring-cyan-400/40 scale-105'
                        : isDark
                        ? 'border-white/10 opacity-70 hover:opacity-100'
                        : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={screen} alt="Screen preview" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div
              className={`grid grid-cols-3 gap-3 p-4 rounded-2xl border ${
                isDark ? 'bg-white/[0.03] border-white/5' : 'bg-gray-50 border-gray-200'
              }`}
            >
              {project.metrics.map(m => (
                <div key={m.label}>
                  <div className={`text-[11px] font-mono uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {m.label}
                  </div>
                  <div className="text-base sm:text-lg font-black text-cyan-500 font-mono mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <div className={`text-xs font-mono uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Technology Architecture:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span
                  key={t}
                  className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                    isDark
                      ? 'bg-white/[0.05] border-white/10 text-zinc-300'
                      : 'bg-gray-100 border-gray-200 text-gray-800'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div
            className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  <Globe className="w-4 h-4" />
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-full text-xs font-medium border transition-colors flex items-center gap-2 ${
                    isDark
                      ? 'bg-white/10 hover:bg-white/20 text-white border-white/10'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300'
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-pink-400" />
                  <span>App Store</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-full text-xs font-mono border transition-colors flex items-center gap-2 ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 text-zinc-300 border-white/5'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>

            <div className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Client: <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.client}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
