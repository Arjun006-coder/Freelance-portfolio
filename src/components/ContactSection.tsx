'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, CheckCircle2, Send, Sparkles, Copy } from 'lucide-react';
import AnimatedContent from './reactbits/AnimatedContent';
import ElectricBorder from './reactbits/ElectricBorder';
import { useTheme } from '../context/ThemeContext';

interface ContactSectionProps {
  playTick: () => void;
}

export default function ContactSection({ playTick }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [projectType, setProjectType] = useState('Full Next.js Website');
  const [budget, setBudget] = useState('$5k - $10k');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const email = 'arjun1234agrawal@gmail.com';

  const copyEmail = () => {
    playTick();
    navigator.clipboard?.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#9478FF', '#F25BD0', '#ffffff']
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTick();
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#00F0FF', '#10B981', '#ffffff']
    });
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`py-28 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#08090C] border-white/[0.06]' : 'bg-[#F9FAFB] border-gray-200'
      }`}
    >
      {/* Background glow */}
      <div
        className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] blur-[140px] pointer-events-none -z-10 ${
          isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/5'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Call to Action */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <AnimatedContent distance={30} direction="vertical">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                  isDark
                    ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                    : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>INITIATE SPRINT</span>
              </div>
              <h2
                className={`text-3xl sm:text-5xl font-black tracking-tight mt-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Let&apos;s build your next flagship.
              </h2>
              <p
                className={`text-sm sm:text-base leading-relaxed mt-2 ${
                  isDark ? 'text-zinc-400' : 'text-gray-600'
                }`}
              >
                Currently booking contracts for 2026. Whether you need a high-end WebGL interactive platform, a high-conversion Next.js platform, or an iOS native app.
              </p>
            </AnimatedContent>

            {/* Direct Copy Email Box */}
            <AnimatedContent distance={30} direction="vertical" delay={0.1}>
              <div
                className={`p-4 rounded-2xl border space-y-3 ${
                  isDark
                    ? 'bg-white/[0.03] border-white/10'
                    : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                <div className={`text-xs font-mono uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Direct Electronic Mail
                </div>
                <div
                  className={`flex items-center justify-between gap-3 p-2.5 rounded-xl border ${
                    isDark
                      ? 'bg-black/40 border-white/5'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className={`flex items-center gap-2 text-sm font-mono truncate ${isDark ? 'text-cyan-300' : 'text-cyan-700 font-semibold'}`}>
                    <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>{email}</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0 ${
                      isDark
                        ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300'
                        : 'bg-cyan-100 hover:bg-cyan-200 text-cyan-800 font-bold'
                    }`}
                  >
                    {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </AnimatedContent>

            <AnimatedContent distance={30} direction="vertical" delay={0.2}>
              <div className={`grid grid-cols-2 gap-3 text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                <div className={`p-3 rounded-xl border ${isDark ? 'bg-white/[0.02] border-white/5' : 'bg-white border-gray-200'}`}>
                  <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>~ 48 Hours</div>
                  <div>Typical Initial Draft</div>
                </div>
                <div className={`p-3 rounded-xl border ${isDark ? 'bg-white/[0.02] border-white/5' : 'bg-white border-gray-200'}`}>
                  <div className="text-emerald-500 font-bold text-sm">Fixed Pricing</div>
                  <div>No Surprise Billing</div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <AnimatedContent distance={30} direction="vertical" delay={0.2}>
              <div
                className={`p-8 sm:p-10 rounded-3xl border shadow-2xl relative transition-colors ${
                  isDark
                    ? 'bg-[#0f1118] border-white/10'
                    : 'bg-white border-gray-200 shadow-gray-200/60'
                }`}
              >
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Inquiry Received!</h3>
                    <p className={`text-sm max-w-md mx-auto ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                      Thank you for reaching out. I review project scopes and respond with technical architecture notes within 12 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-cyan-500 underline hover:text-cyan-600 font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    
                    {/* Project Type selector */}
                    <div className="space-y-2">
                      <label className={`text-xs font-mono uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        Project Focus:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Next.js Website', '3D WebGL', 'Mobile App', 'SaaS Platform'].map(type => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => {
                              playTick();
                              setProjectType(type);
                            }}
                            className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                              projectType === type
                                ? isDark
                                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                                  : 'bg-cyan-50 border-cyan-400 text-cyan-800 font-bold shadow-sm'
                                : isDark
                                ? 'bg-white/[0.03] border-white/5 text-zinc-400 hover:text-white'
                                : 'bg-gray-50 border-gray-200 text-gray-600 hover:text-black'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className={`text-xs font-mono uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                          Your Name / Organization
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Vance"
                          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-500 transition-colors ${
                            isDark
                              ? 'bg-black/50 border-white/10 text-white placeholder-zinc-600'
                              : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                          }`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className={`text-xs font-mono uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@domain.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-500 transition-colors ${
                            isDark
                              ? 'bg-black/50 border-white/10 text-white placeholder-zinc-600'
                              : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Budget selector */}
                    <div className="space-y-2">
                      <label className={`text-xs font-mono uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        Estimated Budget Range:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['$3k - $6k', '$6k - $12k', '$12k+'].map(b => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => {
                              playTick();
                              setBudget(b);
                            }}
                            className={`p-2 rounded-xl text-xs font-mono border text-center transition-all ${
                              budget === b
                                ? isDark
                                  ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold'
                                  : 'bg-purple-50 border-purple-400 text-purple-800 font-bold'
                                : isDark
                                ? 'bg-white/[0.03] border-white/5 text-zinc-400 hover:text-white'
                                : 'bg-gray-50 border-gray-200 text-gray-600 hover:text-black'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Message */}
                    <div className="space-y-1.5">
                      <label className={`text-xs font-mono uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        Project Overview & Target Launch
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about what you're building, target launch date, and any links..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none ${
                          isDark
                            ? 'bg-black/50 border-white/10 text-white placeholder-zinc-600'
                            : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                        }`}
                      />
                    </div>

                    {/* Submit Button */}
                    <ElectricBorder
                      color="#00f0ff"
                      speed={1.2}
                      strands={3}
                      borderRadius={16}
                    >
                      <button
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all active:scale-[0.99]"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Project Brief</span>
                      </button>
                    </ElectricBorder>

                  </form>
                )}

              </div>
            </AnimatedContent>
          </div>

        </div>
      </div>
    </section>
  );
}
