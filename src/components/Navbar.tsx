'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, ArrowUpRight, Terminal, Menu, X, Sun, Moon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  soundEnabled: boolean;
  setSoundEnabled: (v: boolean) => void;
  playTick: () => void;
  onOpenContact: () => void;
  isAudioPlaying?: boolean;
  onTogglePlayAudio?: () => void;
}

export default function Navbar({
  soundEnabled,
  setSoundEnabled,
  playTick,
  onOpenContact,
  isAudioPlaying,
  onTogglePlayAudio
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = () => {
    playTick();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.1 },
      colors: ['#00F0FF', '#9478FF', '#F25BD0', '#ffffff']
    });
    navigator.clipboard?.writeText('hello@lsfolio.design');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#08090C]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-white/90 backdrop-blur-xl border-b border-gray-200 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          onClick={() => playTick()}
          className="flex items-center gap-3 group"
        >
          <div
            className={`w-9 h-9 rounded-xl border flex items-center justify-center p-[1px] shadow-lg transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-pink-500/20 border-white/20 group-hover:border-cyan-400'
                : 'bg-gradient-to-tr from-cyan-100 to-violet-100 border-gray-300 group-hover:border-cyan-600'
            }`}
          >
            <div
              className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                isDark ? 'bg-[#0c0e14]' : 'bg-white'
              }`}
            >
              <Terminal
                className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-12 ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}
              />
            </div>
          </div>
          <div>
            <div
              className={`flex items-center gap-1.5 font-bold tracking-tight font-mono text-sm ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span>ARJUN</span>
              <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>//</span>
              <span>FOLIO</span>
            </div>
            <div
              className={`text-[10px] font-mono tracking-wider ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              FULL-STACK & SPATIAL UI
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-md border ${
            isDark
              ? 'bg-white/[0.03] border-white/[0.08]'
              : 'bg-gray-100/80 border-gray-200'
          }`}
        >
          {[
            { label: 'Work', href: '#work' },
            { label: '3D Gallery', href: '#gallery' },
            { label: 'Capabilities', href: '#capabilities' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' }
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => playTick()}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                isDark
                  ? 'text-zinc-300 hover:text-white hover:bg-white/[0.08]'
                  : 'text-zinc-600 hover:text-black hover:bg-white shadow-sm'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Status badge */}
          <div
            className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono border ${
              isDark
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR HIRE</span>
          </div>

          {/* Theme Switcher Toggle */}
          <button
            onClick={() => {
              playTick();
              toggleTheme();
            }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`p-2 rounded-full border transition-all duration-300 active:scale-90 ${
              isDark
                ? 'bg-white/[0.05] border-white/10 text-zinc-300 hover:text-yellow-300 hover:bg-white/10'
                : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-indigo-600 hover:bg-gray-200'
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? 'Disable UI sound feedback' : 'Enable UI sound feedback'}
            className={`p-2 rounded-full border transition-colors ${
              isDark
                ? 'bg-white/[0.05] border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'
                : 'bg-gray-100 border-gray-300 text-gray-500 hover:text-black hover:bg-gray-200'
            }`}
          >
            {soundEnabled ? (
              <Volume2 className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Start Project CTA */}
          <button
            onClick={() => {
              triggerConfetti();
              onOpenContact();
            }}
            className="relative group px-4 py-2 rounded-full text-xs font-semibold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center gap-1.5 overflow-hidden active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              playTick();
              toggleTheme();
            }}
            className={`p-2 rounded-full border ${
              isDark ? 'bg-white/[0.05] border-white/10 text-yellow-300' : 'bg-gray-100 border-gray-300 text-gray-700'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-full border ${
              isDark ? 'bg-white/[0.05] border-white/10 text-zinc-400' : 'bg-gray-100 border-gray-300 text-gray-600'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border ${
              isDark ? 'bg-white/[0.05] border-white/10 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden mt-3 mx-4 p-4 rounded-2xl border backdrop-blur-2xl shadow-2xl space-y-3 ${
            isDark
              ? 'bg-[#0f1118]/95 border-white/10 text-white'
              : 'bg-white/95 border-gray-200 text-gray-900'
          }`}
        >
          {[
            { label: 'Work (Web & Apps)', href: '#work' },
            { label: '3D Gallery Ring', href: '#gallery' },
            { label: 'Capabilities', href: '#capabilities' },
            { label: 'About & Bio', href: '#about' },
            { label: 'Contact & Hire', href: '#contact' }
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                playTick();
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isDark ? 'text-zinc-300 hover:text-white hover:bg-white/5' : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-2.5 rounded-xl text-xs font-bold text-black bg-cyan-400 text-center"
          >
            Start Project / Hire
          </button>
        </div>
      )}
    </header>
  );
}
