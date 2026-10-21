'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CarouselSection from '../components/CarouselSection';
import WorkSection from '../components/WorkSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';
import AudioPlayerBar from '../components/AudioPlayerBar';
import AmbientBackground, { BackgroundSwitcherPill, BackgroundMode } from '../components/AmbientBackground';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/portfolioData';
import { useAudioManager } from '../hooks/useAudioManager';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [backgroundMode, setBackgroundMode] = useState<BackgroundMode>('ghost-fibers');
  const audioCtxRef = useRef<AudioContext | null>(null);

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Persist background mode in localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ls_bg_mode') as BackgroundMode;
      if (saved && (saved === 'ghost-fibers' || saved === 'lightfall' || saved === 'grid')) {
        setBackgroundMode(saved);
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleSelectBgMode = (mode: BackgroundMode) => {
    setBackgroundMode(mode);
    try {
      localStorage.setItem('ls_bg_mode', mode);
    } catch {
      // Ignore
    }
  };

  // Background Music & Live Web Audio Frequency Analyzer
  const {
    isPlaying,
    isMuted,
    audioDriven,
    setAudioDriven,
    volume,
    setVolume,
    audioData,
    spectrumBars,
    togglePlay,
    toggleMute,
    trackInfo
  } = useAudioManager();

  // Web Audio subtle micro-tick synthesizer (zero asset dependencies, 100% reliable)
  const playTick = useCallback(() => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Audio autoplay policy catch
    }
  }, [soundEnabled]);

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main
      className={`min-h-screen relative transition-colors duration-500 selection:bg-[#00F0FF] selection:text-black ${
        isDark ? 'text-[#f4f4f5]' : 'text-[#111318]'
      }`}
    >
      {/* Dynamic 3D WebGL Ambient Background (GhostFibers, Lightfall, or Architectural Grid) */}
      <AmbientBackground
        mode={backgroundMode}
        onModeChange={handleSelectBgMode}
        audioData={audioData}
        isPlaying={isPlaying}
      />

      {/* Navigation with Theme Switch & Audio Trigger */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playTick={playTick}
        onOpenContact={handleOpenContact}
        isAudioPlaying={isPlaying}
        onTogglePlayAudio={togglePlay}
      />

      {/* Hero with Audio-Reactive WebGL Crystalized Ball & Kinetic Ticker */}
      <HeroSection
        playTick={playTick}
        onExploreWork={handleExploreWork}
        onOpenContact={handleOpenContact}
        audioData={audioData}
        audioDriven={audioDriven}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onToggleAudioDriven={() => setAudioDriven(!audioDriven)}
      />

      {/* 3D Circular Spatial Carousel */}
      <CarouselSection
        projects={PORTFOLIO_PROJECTS}
        onSelectProject={setSelectedProject}
        playTick={playTick}
      />

      {/* Distinct Separated Work Showcase (Web Applications vs iOS Mobile Engineering) */}
      <WorkSection
        projects={PORTFOLIO_PROJECTS}
        onSelectProject={setSelectedProject}
        playTick={playTick}
      />

      {/* Capabilities with Kinetic Option Wheel */}
      <CapabilitiesSection
        playTick={playTick}
      />

      {/* About & Verified Credentials with 3D Specular Reflective Card */}
      <AboutSection
        playTick={playTick}
      />

      {/* Interactive Project Initiation / Contract Sprints */}
      <ContactSection
        playTick={playTick}
      />

      {/* Footer */}
      <Footer
        playTick={playTick}
      />

      {/* Interactive Floating Background Effect Switcher (Bottom-Left) */}
      <BackgroundSwitcherPill
        currentMode={backgroundMode}
        onSelectMode={handleSelectBgMode}
        playTick={playTick}
      />

      {/* Fixed Ambient BGM Player & Frequency Visualizer (Bottom-Right) */}
      <AudioPlayerBar
        isPlaying={isPlaying}
        isMuted={isMuted}
        audioDriven={audioDriven}
        volume={volume}
        spectrumBars={spectrumBars}
        trackInfo={trackInfo}
        onTogglePlay={togglePlay}
        onToggleMute={toggleMute}
        onToggleAudioDriven={() => setAudioDriven(!audioDriven)}
        onSetVolume={setVolume}
        playTick={playTick}
      />

      {/* Detail Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        playTick={playTick}
      />
    </main>
  );
}
