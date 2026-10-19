'use client';

import { useState } from 'react';
import CircularCarousel from './reactbits/CircularCarousel';
import AnimatedContent from './reactbits/AnimatedContent';
import { ProjectItem } from '../data/portfolioData';
import { Disc3, MoveHorizontal, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CarouselSectionProps {
  projects: ProjectItem[];
  onSelectProject: (p: ProjectItem) => void;
  playTick: () => void;
}

export default function CarouselSection({ projects, onSelectProject, playTick }: CarouselSectionProps) {
  const [carouselPreset, setCarouselPreset] = useState<'cylinder' | 'orbit' | 'wheel' | 'panorama'>('cylinder');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const carouselItems = projects.map(p => ({
    src: p.image,
    alt: p.title,
    title: p.title,
    subtitle: `${p.category} • ${p.client}`,
    data: p
  }));

  const handleItemClick = (item: any) => {
    playTick();
    if (item?.data) {
      onSelectProject(item.data);
    }
  };

  return (
    <section
      id="gallery"
      className={`py-24 relative overflow-hidden border-y transition-colors duration-300 ${
        isDark
          ? 'bg-[#07080a] border-white/[0.05]'
          : 'bg-[#F2F4F7] border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <AnimatedContent distance={25} direction="vertical">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border ${
              isDark
                ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                : 'bg-cyan-50 border-cyan-200 text-cyan-700'
            }`}
          >
            <Disc3 className="w-3.5 h-3.5 animate-spin" />
            <span>3D SPATIAL ARCHIVE</span>
          </div>
          <h2
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Flagship Client Deployments
          </h2>
          <p
            className={`text-sm sm:text-base max-w-xl mx-auto mt-3 ${
              isDark ? 'text-zinc-400' : 'text-gray-600'
            }`}
          >
            Drag horizontally to rotate through the 3D showcase ring. Click any active project card for in-depth specs, video demo, and live links.
          </p>
        </AnimatedContent>

        {/* Preset mode toggle */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span
            className={`text-xs font-mono mr-2 flex items-center gap-1 ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            }`}
          >
            <MoveHorizontal className="w-3.5 h-3.5" />
            <span>Perspective:</span>
          </span>
          {(['cylinder', 'orbit', 'wheel', 'panorama'] as const).map(preset => (
            <button
              key={preset}
              onClick={() => {
                playTick();
                setCarouselPreset(preset);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-mono capitalize transition-all ${
                carouselPreset === preset
                  ? isDark
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'bg-cyan-600 text-white font-bold shadow-md'
                  : isDark
                  ? 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5'
                  : 'bg-white text-gray-700 hover:text-black border border-gray-300'
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Carousel Viewport */}
      <div className="w-full h-[580px] relative">
        <CircularCarousel
          items={carouselItems}
          preset={carouselPreset}
          intro="rise"
          cardWidth={280}
          aspectRatio={1.25}
          speed={11}
          captions={true}
          cornerRadius={16}
          fadeColor={isDark ? '#07080a' : '#F2F4F7'}
          onItemClick={handleItemClick}
        />
      </div>

      <div className="text-center mt-3">
        <span
          className={`inline-flex items-center gap-2 text-xs font-mono ${
            isDark ? 'text-zinc-500' : 'text-zinc-400'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          <span>Interactive 3D Stage • Click any project to inspect source & live view</span>
        </span>
      </div>
    </section>
  );
}
