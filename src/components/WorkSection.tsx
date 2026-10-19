'use client';

import { useState } from 'react';
import { ProjectItem } from '../data/portfolioData';
import AnimatedContent from './reactbits/AnimatedContent';
import {
  ExternalLink,
  Play,
  Smartphone,
  Globe,
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  CheckCircle2,
  Sliders,
  Maximize2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface WorkSectionProps {
  projects: ProjectItem[];
  onSelectProject: (p: ProjectItem) => void;
  playTick: () => void;
}

export default function WorkSection({ projects, onSelectProject, playTick }: WorkSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'website' | 'app'>('website');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const webProjects = projects.filter(p => p.type === 'website');
  const appProjects = projects.filter(p => p.type === 'app');

  const currentList = activeCategory === 'website' ? webProjects : appProjects;

  return (
    <section id="work" className="py-28 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <AnimatedContent distance={30} direction="vertical">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-3 border ${
                isDark
                  ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                  : 'bg-cyan-50 border-cyan-200 text-cyan-700'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>VERIFIED PRODUCTION PORTFOLIO</span>
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Engineered Works. Zero Templates.
            </h2>
            <p
              className={`max-w-xl text-sm sm:text-base mt-2 ${
                isDark ? 'text-zinc-400' : 'text-gray-600'
              }`}
            >
              Explore dedicated categories for Web Applications & SaaS platforms and bespoke native iOS Mobile engineering.
            </p>
          </AnimatedContent>

          {/* Master Category Separator Switch */}
          <div
            className={`flex items-center p-1.5 rounded-2xl border backdrop-blur-md self-start md:self-auto ${
              isDark
                ? 'bg-[#0E1017] border-white/10'
                : 'bg-gray-100 border-gray-200 shadow-sm'
            }`}
          >
            <button
              onClick={() => {
                playTick();
                setActiveCategory('website');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeCategory === 'website'
                  ? isDark
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-black shadow-lg shadow-cyan-400/20'
                    : 'bg-white text-gray-900 shadow-md'
                  : isDark
                  ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                  : 'text-gray-600 hover:text-black hover:bg-gray-200/60'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Web Applications & SaaS ({webProjects.length})</span>
            </button>

            <button
              onClick={() => {
                playTick();
                setActiveCategory('app');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeCategory === 'app'
                  ? isDark
                    ? 'bg-gradient-to-r from-[#9478FF] to-[#F25BD0] text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white text-gray-900 shadow-md'
                  : isDark
                  ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                  : 'text-gray-600 hover:text-black hover:bg-gray-200/60'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>iOS & Mobile Apps ({appProjects.length})</span>
            </button>
          </div>
        </div>

        {/* Category Description Banner */}
        <div
          className={`mb-10 px-5 py-3.5 rounded-xl border flex items-center justify-between text-xs font-mono ${
            activeCategory === 'website'
              ? isDark
                ? 'bg-cyan-950/20 border-cyan-500/20 text-cyan-300'
                : 'bg-cyan-50 border-cyan-200 text-cyan-800'
              : isDark
              ? 'bg-purple-950/20 border-purple-500/20 text-purple-300'
              : 'bg-purple-50 border-purple-200 text-purple-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            <span>
              {activeCategory === 'website'
                ? 'SHOWCASING: High-speed Next.js platforms, WebGL engines, SGP4 orbital mechanics, and SaaS portals'
                : 'SHOWCASING: Native iOS architectures, fluid geometry canvas shaders, and touch physics'}
            </span>
          </div>
          <span className="hidden sm:inline font-semibold">
            {currentList.length} Case Studies Available
          </span>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: WEB APPLICATIONS & SAAS PLATFORMS */}
        {/* ========================================================================= */}
        {activeCategory === 'website' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, idx) => (
              <AnimatedContent
                key={project.id}
                distance={40}
                direction="vertical"
                delay={idx * 0.08}
              >
                <div
                  className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between h-full shadow-lg hover:shadow-2xl ${
                    isDark
                      ? 'bg-[#0F1118] border-white/[0.08] hover:border-cyan-500/40'
                      : 'bg-white border-gray-200 hover:border-cyan-500/60 shadow-gray-200/50'
                  }`}
                >
                  {/* Browser Chrome Header */}
                  <div
                    className={`px-4 py-2 border-b flex items-center justify-between text-[11px] font-mono ${
                      isDark ? 'bg-[#0B0D13] border-white/5 text-zinc-400' : 'bg-gray-100 border-gray-200 text-gray-500'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="truncate max-w-[170px] opacity-75 font-mono">
                      {project.liveUrl?.replace('https://', '') || project.id}
                    </div>
                    <span className="text-[10px] font-bold text-cyan-500">{project.year}</span>
                  </div>

                  {/* Visual Preview / Video Banner */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden bg-zinc-950 cursor-pointer"
                    onClick={() => {
                      playTick();
                      onSelectProject(project);
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Play video overlay hint if video exists */}
                    {project.videoSrc && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Box */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-cyan-500 tracking-wider uppercase font-semibold">
                        {project.client}
                      </div>
                      <h3
                        onClick={() => {
                          playTick();
                          onSelectProject(project);
                        }}
                        className={`text-xl font-bold transition-colors cursor-pointer ${
                          isDark ? 'text-white group-hover:text-cyan-300' : 'text-gray-900 group-hover:text-cyan-600'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-xs line-clamp-2 leading-relaxed ${
                          isDark ? 'text-zinc-400' : 'text-gray-600'
                        }`}
                      >
                        {project.tagline}
                      </p>
                    </div>

                    {/* Metrics Bar */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div
                        className={`grid grid-cols-3 gap-2 my-4 py-2.5 px-3 rounded-xl border ${
                          isDark
                            ? 'bg-white/[0.03] border-white/5'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        {project.metrics.map(m => (
                          <div key={m.label}>
                            <div className={`text-[10px] uppercase font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                              {m.label}
                            </div>
                            <div className={`text-xs font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${
                            isDark
                              ? 'bg-white/[0.04] text-zinc-400 border-white/5'
                              : 'bg-gray-100 text-gray-700 border-gray-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div
                      className={`pt-3 border-t flex items-center justify-between ${
                        isDark ? 'border-white/[0.06]' : 'border-gray-200'
                      }`}
                    >
                      <button
                        onClick={() => {
                          playTick();
                          onSelectProject(project);
                        }}
                        className={`text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                          isDark ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-cyan-600'
                        }`}
                      >
                        <span>Case Study & Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Visit Live Application"
                            onClick={e => {
                              e.stopPropagation();
                              playTick();
                            }}
                            className={`p-1.5 rounded-lg transition-colors ${
                              isDark
                                ? 'bg-white/5 hover:bg-cyan-400 hover:text-black text-zinc-300'
                                : 'bg-gray-100 hover:bg-cyan-500 hover:text-white text-gray-700'
                            }`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </AnimatedContent>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: DEDICATED IOS & MOBILE ENGINEERING */}
        {/* ========================================================================= */}
        {activeCategory === 'app' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {appProjects.map((project, idx) => (
              <AnimatedContent
                key={project.id}
                distance={40}
                direction="vertical"
                delay={idx * 0.1}
              >
                <div
                  className={`group relative rounded-3xl border p-6 md:p-8 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center shadow-xl ${
                    isDark
                      ? 'bg-gradient-to-br from-[#10131d] via-[#0E1017] to-[#151221] border-white/10 hover:border-purple-500/50'
                      : 'bg-white border-gray-200 hover:border-purple-400 shadow-gray-200/60'
                  }`}
                >
                  {/* Phone Device Mockup Frame */}
                  <div className="w-[220px] sm:w-[240px] shrink-0">
                    <div
                      className={`relative rounded-[40px] p-2.5 border-[6px] shadow-2xl overflow-hidden cursor-pointer ${
                        isDark
                          ? 'border-[#2d3142] bg-black shadow-purple-950/40'
                          : 'border-gray-800 bg-black shadow-gray-400/50'
                      }`}
                      onClick={() => {
                        playTick();
                        onSelectProject(project);
                      }}
                    >
                      {/* Dynamic Island */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-between px-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                        <span className="w-2 h-2 rounded-full bg-blue-900/60" />
                      </div>

                      {/* Screen Content */}
                      <div className="relative aspect-[9/19.5] rounded-[32px] overflow-hidden bg-zinc-900">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                          <span className="text-[10px] font-mono text-purple-300 uppercase">
                            {project.category}
                          </span>
                          <span className="text-xs font-bold text-white">
                            {project.title.split('—')[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Screenshot count pill */}
                    <div className="text-center mt-3">
                      <span
                        className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-zinc-400'
                            : 'bg-gray-100 border-gray-200 text-gray-600'
                        }`}
                      >
                        {project.screenshots?.length || 1} Mobile Screens
                      </span>
                    </div>
                  </div>

                  {/* App Description & Architectural Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-mono font-bold">
                        iOS NATIVE
                      </span>
                      <span className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        {project.year}
                      </span>
                    </div>

                    <h3
                      onClick={() => {
                        playTick();
                        onSelectProject(project);
                      }}
                      className={`text-2xl font-black transition-colors cursor-pointer ${
                        isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-900 group-hover:text-purple-600'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? 'text-zinc-400' : 'text-gray-600'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div
                      className={`grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl border ${
                        isDark ? 'bg-white/[0.03] border-white/5' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      {project.metrics.map(m => (
                        <div key={m.label}>
                          <div className={`text-[10px] uppercase font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            {m.label}
                          </div>
                          <div className={`text-xs font-bold font-mono ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(t => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border ${
                            isDark
                              ? 'bg-purple-950/20 text-purple-300 border-purple-500/20'
                              : 'bg-purple-50 text-purple-700 border-purple-200'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          playTick();
                          onSelectProject(project);
                        }}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2 active:scale-95"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Full App Flow & Screenshots</span>
                      </button>
                    </div>
                  </div>

                </div>
              </AnimatedContent>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
