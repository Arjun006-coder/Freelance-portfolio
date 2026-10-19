'use client';

import { Terminal, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  playTick: () => void;
}

export default function Footer({ playTick }: FooterProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    playTick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 border-t text-xs font-mono transition-colors duration-300 ${
        isDark ? 'bg-[#06070a] border-white/[0.06] text-zinc-500' : 'bg-gray-100 border-gray-200 text-gray-500'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand signature */}
        <div className="flex items-center gap-3">
          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center border ${
              isDark
                ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400'
                : 'bg-cyan-100 border-cyan-200 text-cyan-700'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className={`font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            LS // FOLIO
          </span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Center Tech Notice */}
        <div className="flex items-center gap-2">
          <span>Engineered with</span>
          <span className="text-cyan-500 font-semibold">Next.js 14</span>
          <span>•</span>
          <span className="text-violet-500 font-semibold">OGL WebGL</span>
          <span>•</span>
          <span className="text-pink-500 font-semibold">React Bits</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border transition-all ${
            isDark
              ? 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border-white/5'
              : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-black border-gray-300 shadow-sm'
          }`}
        >
          <span>Return to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-500" />
        </button>

      </div>
    </footer>
  );
}
