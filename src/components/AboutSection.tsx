'use client';

import ReflectiveCard from './reactbits/ReflectiveCard';
import AnimatedContent from './reactbits/AnimatedContent';
import { ShieldCheck, Award, Zap, Code, HeartHandshake, Github, ExternalLink } from 'lucide-react';
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
                  name="Arjun Sharma"
                  role="Full-Stack Engineer & Architect"
                  badge="Hackathon Champion (SIH & FAR AWAY)"
                  status="Available for Contracts"
                  idLabel="GITHUB VERIFIED"
                  idValue="Arjun006-coder"
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
                <span>INDEPENDENT CONTRACT ENGINEER</span>
              </div>
              <h2
                className={`text-3xl sm:text-5xl font-black tracking-tight mt-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Engineered with precision. Shipped with speed.
              </h2>
            </AnimatedContent>

            <AnimatedContent distance={30} direction="vertical" delay={0.1}>
              <p
                className={`text-base leading-relaxed font-normal ${
                  isDark ? 'text-zinc-300' : 'text-gray-700'
                }`}
              >
                I am an independent software engineer and UI technologist based in India, working with clients globally. Over the past several years, I have engineered mission-critical web applications, high-throughput financial backends, and tactile native iOS applications.
              </p>
              <p
                className={`text-sm leading-relaxed mt-3 ${
                  isDark ? 'text-zinc-400' : 'text-gray-600'
                }`}
              >
                When you hire me, you don't deal with account managers, Junior hand-offs, or generic template code. You work directly with a builder who writes robust TypeScript, builds custom WebGL shaders, integrates modern AI toolchains, and delivers production-grade apps on time.
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
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
                    <Zap className="w-4 h-4" />
                    <span>Extreme Performance</span>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    Strict sub-second TTFB, 60fps WebGL rendering, and zero unnecessary bundle overhead.
                  </p>
                </div>

                <div
                  className={`p-4 rounded-2xl border space-y-1.5 ${
                    isDark
                      ? 'bg-white/[0.03] border-white/5'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-bold">
                    <Code className="w-4 h-4" />
                    <span>Clean Architecture</span>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    Strongly-typed TypeScript, modular components, and self-documenting codebases built to scale.
                  </p>
                </div>

                <div
                  className={`p-4 rounded-2xl border space-y-1.5 ${
                    isDark
                      ? 'bg-white/[0.03] border-white/5'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-pink-400 text-sm font-bold">
                    <Award className="w-4 h-4" />
                    <span>Tactile Spatial Craft</span>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    WebGL shaders, audio-reactive frequency physics, and fluid micro-interactions with real depth.
                  </p>
                </div>

                <div
                  className={`p-4 rounded-2xl border space-y-1.5 ${
                    isDark
                      ? 'bg-white/[0.03] border-white/5'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Direct Transparent Comms</span>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    Clear daily async updates, staging environments on day 3, and guaranteed milestone deliveries.
                  </p>
                </div>
              </div>
            </AnimatedContent>

            {/* GitHub & Verified Proof links */}
            <AnimatedContent distance={30} direction="vertical" delay={0.3}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/Arjun006-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playTick()}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-all ${
                    isDark
                      ? 'bg-white/[0.04] hover:bg-white/[0.09] text-zinc-300 border-white/10 hover:text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/Arjun006-coder</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <span className={`text-xs font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Based in Bengaluru, India · UTC+5:30
                </span>
              </div>
            </AnimatedContent>

          </div>

        </div>

      </div>
    </section>
  );
}
