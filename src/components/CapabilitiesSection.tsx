'use client';

import { useState } from 'react';
import OptionWheel from './reactbits/OptionWheel';
import AnimatedContent from './reactbits/AnimatedContent';
import { CAPABILITIES } from '../data/portfolioData';
import { CheckCircle2, Clock, Sparkles, Zap, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CapabilitiesSectionProps {
  playTick: () => void;
}

export default function CapabilitiesSection({ playTick }: CapabilitiesSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const capabilityLabels = CAPABILITIES.map(c => c.title);
  const activeCapability = CAPABILITIES[selectedIndex] || CAPABILITIES[0];

  const handleWheelChange = (index: number) => {
    setSelectedIndex(index);
    playTick();
  };

  return (
    <section
      id="capabilities"
      className={`py-28 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#090a0f] border-white/[0.05]' : 'bg-[#F9FAFB] border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedContent distance={30} direction="vertical">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                isDark
                  ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                  : 'bg-cyan-50 border-cyan-200 text-cyan-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>CORE DISCIPLINES</span>
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Engineering Capabilities
            </h2>
            <p className={`text-sm sm:text-base ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
              Drag or scroll the kinetic cylinder wheel to inspect technical domains, deliverables, and sprint timelines.
            </p>
          </div>
        </AnimatedContent>

        {/* Interactive Kinetic Wheel + Detail Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Kinetic Wheel (Left) */}
          <div
            className={`lg:col-span-6 h-[440px] relative rounded-3xl border backdrop-blur-xl overflow-hidden p-4 shadow-2xl transition-colors ${
              isDark
                ? 'bg-[#0f1118]/60 border-white/[0.08]'
                : 'bg-white border-gray-200 shadow-gray-200/60'
            }`}
          >
            <div
              className={`absolute top-4 left-6 text-[10px] font-mono tracking-wider uppercase z-20 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`}
            >
              Kinetic Selection Wheel (Scroll / Drag)
            </div>
            <OptionWheel
              items={capabilityLabels}
              defaultSelected={0}
              onChange={handleWheelChange}
              textColor={isDark ? '#52525b' : '#9ca3af'}
              activeColor={isDark ? '#00f0ff' : '#0066cc'}
              fontSize={1.7}
              spacing={1.4}
              tilt={7}
              curve={1.1}
              inset={32}
            />
            {/* Center target indicator line */}
            <div
              className={`absolute top-1/2 left-0 right-0 h-[1px] pointer-events-none -translate-y-1/2 ${
                isDark
                  ? 'bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-cyan-600/40 to-transparent'
              }`}
            />
          </div>

          {/* Active Capability Inspector (Right) */}
          <div className="lg:col-span-6">
            <div
              className={`p-8 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden space-y-6 transition-colors ${
                isDark
                  ? 'bg-[#11131c] border-white/10'
                  : 'bg-white border-gray-200 shadow-gray-200/50'
              }`}
            >
              {/* Top ambient highlight */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 blur-[80px] pointer-events-none -z-10 ${
                  isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/5'
                }`}
              />

              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 border ${
                    isDark
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                      : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeCapability.badge}</span>
                </span>

                <div className={`flex items-center gap-1.5 text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Sprint: {activeCapability.timeframe}</span>
                </div>
              </div>

              <div>
                <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {activeCapability.title}
                </h3>
                <p className={`text-sm mt-2 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                  {activeCapability.subtitle}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="space-y-3 pt-2">
                <div className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Included in Contract Sprint:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCapability.deliverables.map(deliv => (
                    <div
                      key={deliv}
                      className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                        isDark
                          ? 'bg-white/[0.03] border-white/5'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span className={`text-xs font-medium ${isDark ? 'text-zinc-200' : 'text-gray-800'}`}>
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees bar */}
              <div
                className={`pt-4 border-t flex flex-wrap items-center justify-between text-xs gap-4 ${
                  isDark ? 'border-white/10 text-zinc-400' : 'border-gray-200 text-gray-600'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span>Full IP Ownership & Production Handover</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-cyan-500">
                  <span>Asynchronous Slack / Telegram Sync</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
