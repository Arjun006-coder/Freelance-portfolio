'use client';

import React, { useState, useEffect } from 'react';
import GhostFibers from './reactbits/GhostFibers';
import Lightfall from './reactbits/Lightfall';
import { useTheme } from '../context/ThemeContext';
import { AudioEnergy } from '../hooks/useAudioManager';
import { Waves, Sparkles, Grid3X3 } from 'lucide-react';

export type BackgroundMode = 'ghost-fibers' | 'lightfall' | 'grid';

interface AmbientBackgroundProps {
  mode: BackgroundMode;
  onModeChange: (mode: BackgroundMode) => void;
  audioData?: AudioEnergy;
  isPlaying?: boolean;
}

export default function AmbientBackground({
  mode,
  onModeChange,
  audioData,
  isPlaying = false
}: AmbientBackgroundProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`fixed inset-0 pointer-events-none -z-20 transition-colors duration-500 ${
          isDark ? 'bg-[#08090C]' : 'bg-[#F8F9FA]'
        }`}
      />
    );
  }

  // Audio-reactive adjustments for speed and glow
  const audioEnergy = audioData?.energy ?? 0;
  const audioBass = audioData?.bass ?? 0;
  const dynamicSpeed = isPlaying ? 0.35 + audioEnergy * 0.4 : 0.38;
  const dynamicGlow = isPlaying ? 0.75 + audioBass * 0.4 : 0.75;
  const dynamicTwist = isPlaying ? 1.1 + audioBass * 0.5 : 1.2;

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* 1. Base Atmospheric Ambient Gradients (No more flat harsh pitch-black!) */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark ? 'opacity-100' : 'opacity-80'
        }`}
      >
        {isDark ? (
          <>
            {/* Rich deep layered obsidian base */}
            <div className="absolute inset-0 bg-[#07080B]" />
            {/* Top-right subtle atmospheric aurora */}
            <div className="absolute -top-[25%] -right-[15%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-transparent blur-[140px]" />
            {/* Center-left subtle cyan bloom */}
            <div className="absolute top-[35%] -left-[20%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-tr from-cyan-950/25 via-teal-950/15 to-transparent blur-[160px]" />
            {/* Bottom-right warm violet counterweight */}
            <div className="absolute -bottom-[20%] right-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-tl from-violet-950/20 via-pink-950/10 to-transparent blur-[150px]" />
          </>
        ) : (
          <>
            {/* Architectural off-white paper canvas */}
            <div className="absolute inset-0 bg-[#F8F9FB]" />
            <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-indigo-100/60 via-slate-100/40 to-transparent blur-[120px]" />
            <div className="absolute top-[40%] -left-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-cyan-100/50 via-teal-50/30 to-transparent blur-[130px]" />
          </>
        )}
      </div>

      {/* 2. WebGL Animated Canvas (GhostFibers OR Lightfall OR Grid) */}
      <div className="absolute inset-0">
        {mode === 'ghost-fibers' && (
          <GhostFibers
            key={`ghost-fibers-${theme}`}
            glowColor={isDark ? '#00E5FF' : '#4f46e5'}
            secondaryColor={isDark ? '#8b5cf6' : '#0ea5e9'}
            lineColor={isDark ? '#ffffff' : '#312e81'}
            gradient="depth"
            speed={dynamicSpeed}
            scale={1.05}
            layers={3}
            twist={dynamicTwist}
            threads={64}
            spread={1.25}
            volume={0.7}
            density={0.9}
            thickness={1.1}
            flow={0.35}
            fiberStyle="dots"
            glow={dynamicGlow}
            sparkle={0.6}
            particles={0.4}
            depthOfField={0.8}
            mouseInteraction={true}
            pulseOnClick={true}
            vignette={0.4}
            grain={0.06}
            lightMode={!isDark}
            className="w-full h-full opacity-70"
          />
        )}

        {mode === 'lightfall' && (
          <Lightfall
            key={`lightfall-${theme}`}
            colors={isDark ? ['#00F0FF', '#8b5cf6', '#F25BD0', '#38bdf8'] : ['#4f46e5', '#0284c7', '#7c3aed']}
            backgroundColor={isDark ? '#08090C' : '#e2e8f0'}
            speed={dynamicSpeed * 0.75}
            streakCount={3}
            streakWidth={0.8}
            streakLength={1.1}
            glow={dynamicGlow}
            density={0.45}
            twinkle={0.3}
            zoom={2.8}
            bloom={0.3}
            backgroundGlow={isDark ? 0.15 : 0.05}
            mouseInteraction={true}
            holdToWarp={true}
            lightMode={!isDark}
            className="w-full h-full opacity-65"
          />
        )}

        {mode === 'grid' && (
          <div
            className={`w-full h-full transition-opacity duration-500 ${
              isDark ? 'bg-grid-pattern opacity-40' : 'bg-grid-pattern-light opacity-50'
            }`}
          />
        )}
      </div>

      {/* 3. Physical Film-Grain Noise Layer (Breaks digital plastic flatness) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* 4. Soft Vignette around screen perimeter */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
          isDark
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,8,11,0.65)_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(226,232,240,0.5)_100%)]'
        }`}
      />
    </div>
  );
}

/**
 * Floating Interactive Background Switcher Pill
 * Allows the user or prospective client to test both effects live
 */
export function BackgroundSwitcherPill({
  currentMode,
  onSelectMode,
  playTick
}: {
  currentMode: BackgroundMode;
  onSelectMode: (m: BackgroundMode) => void;
  playTick: () => void;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const modes: { id: BackgroundMode; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'ghost-fibers',
      label: 'Ghost Fibers',
      icon: <Waves className="w-3.5 h-3.5" />,
      desc: 'Fluid 3D silk filaments with bokeh & depth'
    },
    {
      id: 'lightfall',
      label: 'Lightfall',
      icon: <Sparkles className="w-3.5 h-3.5" />,
      desc: 'Cinematic warp streaks & lens flares'
    },
    {
      id: 'grid',
      label: 'Minimal Grid',
      icon: <Grid3X3 className="w-3.5 h-3.5" />,
      desc: 'Clean architectural drafting dots'
    }
  ];

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-xl shadow-2xl transition-all duration-300 ${
        isDark
          ? 'bg-[#0E1017]/85 border-white/10 text-zinc-300 shadow-black/60'
          : 'bg-white/90 border-gray-200 text-gray-700 shadow-gray-300/40'
      }`}
    >
      <div className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-semibold opacity-60">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>Canvas</span>
      </div>

      {modes.map(m => {
        const isActive = currentMode === m.id;
        return (
          <button
            key={m.id}
            onClick={() => {
              playTick();
              onSelectMode(m.id);
            }}
            title={m.desc}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              isActive
                ? isDark
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                  : 'bg-cyan-50 text-cyan-800 border border-cyan-200 shadow-sm'
                : isDark
                ? 'hover:text-white hover:bg-white/[0.05] border border-transparent'
                : 'hover:text-black hover:bg-gray-100 border border-transparent'
            }`}
          >
            {m.icon}
            <span className="text-[11px] font-sans">{m.label}</span>
          </button>
        );
      })}
    </div>
  );
}
