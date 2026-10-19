'use client';

import ReflectiveCard from './reactbits/ReflectiveCard';
import AnimatedContent from './reactbits/AnimatedContent';
import { ShieldCheck, Award, Zap, Code, HeartHandshake } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AboutSectionProps {
  playTick: () => void;
}

export default function AboutSection({ playTick }: AboutSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className="py-28 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Reflective Card Showcase (Left) */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatedContent distance={30} direction="vertical">
              <div className="relative">
                {/* Back decorative glow */}
                <div
                  className={`absolute -inset-4 rounded-[32px] blur-2xl -z-10 ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-70'
                      : 'bg-gradient-to-r from-cyan-400/20 to-purple-300/20 opacity-80'
                  }`}
                />
                <ReflectiveCard
                  name="Independent Technologist"
                  role="Senior Fullstack & Mobile Architect"
                  badge="Verified Top 1% Freelancer"
                  status="Open for Contract"
                  idLabel="FREELANCE AUTH TOKEN"
                  idValue="LS-774-NEXT-2026"
                  width={340}
                  height={500}
                  tiltStrength={15}
                  glare={0.6}
                />
              </div>
            </AnimatedContent>
          </div>

          {/* Biography & Philosophy (Right) */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedContent distance={30} direction="vertical">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border ${
                  isDark
                    ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                    : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>VERIFIED INDEPENDENT CONSULTANT</span>
              </div>
              <h2
                className={`text-3xl sm:text-5xl font-black tracking-tight mt-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Built for founders who care about the craft.
              </h2>
            </AnimatedContent>

            <AnimatedContent distance={30} direction="vertical" delay={0.1}>
              <p
                className={`text-base leading-relaxed font-normal ${
                  isDark ? 'text-zinc-300' : 'text-gray-700'
                }`}
              >
                I partner directly with ambitious startups, agencies, and enterprise teams to design and build digital flagships that convert, captivate, and scale effortlessly.
              </p>
              <p
                className={`text-sm leading-relaxed mt-3 ${
                  isDark ? 'text-zinc-400' : 'text-gray-600'
                }`}
              >
                No endless meetings or handoffs. You work directly with a senior engineer who writes production-ready Next.js, WebGL, and iOS applications with zero generic template bloat.
              </p>
            </AnimatedContent>

            {/* Principles Grid */}
            <AnimatedContent distance={30} direction="vertical" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div
                  className={`p-4 rounded-2xl border space-y-1.5 ${
                    isDark
                      ? 'bg-white/[0.03] border-white/5'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-cyan-500 text-sm font-bold">
                    <Zap className="w-4 h-4" />
                    <span>Extreme Speed</span>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    Targeting 100/100 Lighthouse metrics, sub-second TTFB, and zero junk JavaScript.
                  </p>
                </div>

                <div
                  className={`p-4 rounded-2xl border space-y-1.5 ${
                    isDark
                      ? 'bg-white/[0.03] border-white/5'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-purple-500 text-sm font-bold">
                    <Code className="w-4 h-4" />
                    <span>Clean Architecture</span>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    Modular TypeScript components, fully documented and effortless for your team to maintain.
                  </p>
                </div>

                <div
                  className={`p-4 rounded-2xl border space-y-1.5 ${
                    isDark
                      ? 'bg-white/[0.03] border-white/5'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-pink-500 text-sm font-bold">
                    <Award className="w-4 h-4" />
                    <span>Tactile Polish</span>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    Custom WebGL shaders, mechanical split-flap typography, and kinetic physics without AI genericism.
                  </p>
                </div>

                <div
                  className={`p-4 rounded-2xl border space-y-1.5 ${
                    isDark
                      ? 'bg-white/[0.03] border-white/5'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Direct Partnership</span>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    Transparent sprint deliverables, daily async progress, and on-schedule launches.
                  </p>
                </div>
              </div>
            </AnimatedContent>

            {/* Testimonial Quote */}
            <AnimatedContent distance={30} direction="vertical" delay={0.3}>
              <div
                className={`p-5 rounded-2xl border-l-2 border-cyan-500 text-xs sm:text-sm italic border ${
                  isDark
                    ? 'bg-gradient-to-r from-white/[0.04] to-transparent border-white/5 text-zinc-300'
                    : 'bg-cyan-50/50 border-gray-200 text-gray-700'
                }`}
              >
                &ldquo;Delivered our 3D interactive web portal ahead of schedule. The micro-interactions and performance are unmatched—investors constantly praise our site.&rdquo;
                <div
                  className={`mt-2 text-xs font-mono font-semibold not-italic ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  — Julian Vance, Founder @ Pulse Capital
                </div>
              </div>
            </AnimatedContent>

          </div>

        </div>

      </div>
    </section>
  );
}
