'use client';

import { useState, useEffect } from 'react';
import CrystalizedBall from './reactbits/CrystalizedBall';
import SplitFlapText from './reactbits/SplitFlapText';
import ElectricBorder from './reactbits/ElectricBorder';
import AnimatedContent from './reactbits/AnimatedContent';
import {
  ArrowDown,
  Flame,
  Music,
  Pause,
  Play,
  Sparkles,
  Volume2,
  Clock,
  MapPin,
  Terminal,
  Code2,
  Cpu
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AudioEnergy } from '../hooks/useAudioManager';

interface HeroSectionProps {
  playTick: () => void;
  onExploreWork: () => void;
  onOpenContact: () => void;
  audioData?: AudioEnergy;
  audioDriven?: boolean;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
  onToggleAudioDriven?: () => void;
}

const BALL_PRESET_OPTIONS = [
  { id: 'plasma', label: 'Plasma', color: '#F25BD0' },
  { id: 'aurora', label: 'Aurora', color: '#5CFFC8' },
  { id: 'nebula', label: 'Nebula', color: '#9478FF' },
  { id: 'solar', label: 'Solar', color: '#FFD36E' },
  { id: 'ember', label: 'Ember', color: '#FF8A2A' },
  { id: 'frost', label: 'Frost', color: '#BFE6FF' },
];

export default function HeroSection({
  playTick,
  onExploreWork,
  onOpenContact,
  audioData,
  audioDriven = true,
  isPlaying = false,
  onTogglePlay,
  onToggleAudioDriven
}: HeroSectionProps) {
  const [currentPreset, setCurrentPreset] = useState<'plasma' | 'aurora' | 'nebula' | 'solar' | 'ember' | 'frost'>('plasma');
  const [timeString, setTimeString] = useState<string>('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const activeColor = BALL_PRESET_OPTIONS.find(p => p.id === currentPreset)?.color || '#00F0FF';

  // Live real-time clock (Bangalore / IST timezone)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setTimeString(`${formatted} IST`);
      } catch {
        setTimeString('11:00 AM IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-[140px] pointer-events-none -z-10 transition-opacity duration-700 ${
          isDark
            ? 'bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-pink-500/10 opacity-70'
            : 'bg-gradient-to-tr from-cyan-400/20 via-indigo-300/20 to-teal-200/20 opacity-80'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status & Live Telemetry Badge */}
            <AnimatedContent distance={30} direction="vertical" delay={0.1}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md transition-colors ${
                    isDark
                      ? 'bg-white/[0.04] border-white/10 text-zinc-300'
                      : 'bg-black/[0.03] border-gray-200 text-gray-700'
                  }`}
                >
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono font-medium tracking-wide">
                    AVAILABLE FOR FREELANCE & CONTRACT SPRINTS
                  </span>
                </div>

                {timeString && (
                  <div
                    className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-mono backdrop-blur-md ${
                      isDark
                        ? 'bg-white/[0.02] border-white/5 text-zinc-400'
                        : 'bg-black/[0.02] border-gray-200 text-gray-500'
                    }`}
                  >
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{timeString}</span>
                    <span className="opacity-40">·</span>
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>Bengaluru / Remote Worldwide</span>
                  </div>
                )}
              </div>
            </AnimatedContent>

            {/* Authoritative Human Headline */}
            <AnimatedContent distance={40} direction="vertical" delay={0.2}>
              <h1
                className={`text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Full-Stack Engineer &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                  Creative Technologist.
                </span>
              </h1>
            </AnimatedContent>

            {/* Split Flap Cascading Text Banner */}
            <AnimatedContent distance={40} direction="vertical" delay={0.3}>
              <div className="py-2">
                <div
                  className={`text-xs font-mono uppercase tracking-widest mb-2 flex items-center justify-center lg:justify-start gap-2 ${
                    isDark ? 'text-zinc-400' : 'text-zinc-500'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Specialized Engineering Focus:</span>
                </div>
                <div className="overflow-x-auto max-w-full pb-2 scrollbar-none flex justify-center lg:justify-start">
                  <SplitFlapText
                    words={[
                      'NEXTJS SAAS   ',
                      'IOS SWIFT APPS',
                      'WEBGL SHADERS ',
                      'FULLSTACK CODE',
                      'OPTIMAL ENGINE'
                    ]}
                    fontSize={28}
                    tileRadius={6}
                    gap={4}
                    tileColor={isDark ? '#11131c' : '#E8ECF0'}
                    textColor={isDark ? '#00f0ff' : '#0066cc'}
                    padTo={14}
                    flipDuration={0.09}
                    cycleDelay={2600}
                    loop
                  />
                </div>
              </div>
            </AnimatedContent>

            {/* Grounded Human Biography */}
            <AnimatedContent distance={40} direction="vertical" delay={0.4}>
              <p
                className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed transition-colors ${
                  isDark ? 'text-zinc-300' : 'text-gray-700'
                }`}
              >
                I partner with founders, venture studios, and engineering leads to design and build mission-critical web applications, high-performance SaaS backends, and bespoke native iOS apps. No bloated agencies, no generic templates—just clean code, low latency, and obsessive execution.
              </p>
            </AnimatedContent>

            {/* CTA Group */}
            <AnimatedContent distance={40} direction="vertical" delay={0.5}>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <ElectricBorder
                  color={activeColor}
                  thickness={1.5}
                  borderRadius={999}
                  strands={3}
                  speed={1.2}
                >
                  <button
                    onClick={() => {
                      playTick();
                      onExploreWork();
                    }}
                    className={`px-8 py-3.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group ${
                      isDark
                        ? 'bg-[#0c0e14] text-white hover:bg-[#141824]'
                        : 'bg-white text-gray-900 shadow-md hover:bg-gray-50'
                    }`}
                  >
                    <span>View 10 Shipped Projects</span>
                    <ArrowDown className="w-4 h-4 text-cyan-500 group-hover:translate-y-1 transition-transform" />
                  </button>
                </ElectricBorder>

                {/* Audio Soundtrack Play/Sync Button in Hero */}
                {onTogglePlay && (
                  <button
                    onClick={() => {
                      playTick();
                      onTogglePlay();
                    }}
                    className={`px-5 py-3.5 rounded-full text-sm font-semibold border transition-all active:scale-95 flex items-center gap-2.5 shadow-sm ${
                      isPlaying
                        ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-400 border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                        : isDark
                        ? 'bg-white/[0.06] hover:bg-white/[0.12] text-white border-white/10'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-200'
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 text-cyan-400" />
                        <span>Pause Piano BGM</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 text-cyan-500" />
                        <span>Play Piano Soundtrack</span>
                      </>
                    )}
                  </button>
                )}

                <button
                  onClick={() => {
                    playTick();
                    onOpenContact();
                  }}
                  className={`px-6 py-3.5 rounded-full text-sm font-semibold border transition-all active:scale-95 flex items-center gap-2 ${
                    isDark
                      ? 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/10'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span>Get in Touch</span>
                </button>
              </div>
            </AnimatedContent>

            {/* Authentic Credibility Metrics */}
            <AnimatedContent distance={30} direction="vertical" delay={0.6}>
              <div
                className={`pt-6 border-t grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0 ${
                  isDark ? 'border-white/[0.08]' : 'border-gray-200'
                }`}
              >
                <div>
                  <div className={`text-xl sm:text-2xl font-black font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    10 Apps
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Web & iOS Shipped
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">
                    2x Winner
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    SIH & Far Away '26
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                    2–4 Wks
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Avg. MVP Delivery
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* Right Hero Interactive 3D Sphere Playground */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              {/* Backglow disc */}
              <div
                className="absolute inset-8 rounded-full blur-3xl opacity-25 transition-colors duration-700 pointer-events-none"
                style={{ backgroundColor: activeColor }}
              />

              {/* WebGL Crystalized Ball with Dual Theme and Audio Reactive Support */}
              <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
                <CrystalizedBall
                  preset={currentPreset}
                  theme={theme}
                  size={0.78}
                  interactive={true}
                  hoverStrength={0.8}
                  speed={1.1}
                  audioData={audioData}
                  audioDriven={audioDriven}
                />
              </div>

              {/* Status pill overlay */}
              <div
                className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full backdrop-blur-md border text-[11px] font-mono pointer-events-none flex items-center gap-2 shadow-xl ${
                  isDark
                    ? 'bg-black/75 border-white/10 text-zinc-300'
                    : 'bg-white/90 border-gray-200 text-gray-800'
                }`}
              >
                {audioDriven && isPlaying ? (
                  <>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-cyan-400 font-semibold">FLOWING TO PIANO HARMONICS</span>
                  </>
                ) : (
                  <>
                    <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                    <span>Touch or drag sphere to stir vortex</span>
                  </>
                )}
              </div>
            </div>

            {/* Live WebGL Shader Preset Switcher */}
            <div
              className={`mt-4 flex items-center gap-1.5 p-1.5 rounded-full border backdrop-blur-xl ${
                isDark
                  ? 'bg-[#0f1118]/80 border-white/10'
                  : 'bg-white/90 border-gray-200 shadow-sm'
              }`}
            >
              <span className={`text-[10px] uppercase font-mono px-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Shader Core:
              </span>
              {BALL_PRESET_OPTIONS.map(preset => (
                <button
                  key={preset.id}
                  onClick={() => {
                    playTick();
                    setCurrentPreset(preset.id as any);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                    currentPreset === preset.id
                      ? isDark
                        ? 'bg-white/15 text-white font-bold shadow-sm'
                        : 'bg-gray-200 text-gray-900 font-bold shadow-sm'
                      : isDark
                      ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                      : 'text-zinc-500 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: preset.color }}
                  />
                  <span>{preset.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
