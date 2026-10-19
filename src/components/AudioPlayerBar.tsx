'use client';

import React from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Disc3, Radio } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AudioPlayerBarProps {
  isPlaying: boolean;
  isMuted: boolean;
  audioDriven: boolean;
  volume: number;
  spectrumBars: number[];
  trackInfo: { title: string; artist: string; file: string };
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onToggleAudioDriven: () => void;
  onSetVolume: (vol: number) => void;
  playTick?: () => void;
}

const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  isPlaying,
  isMuted,
  audioDriven,
  volume,
  spectrumBars,
  trackInfo,
  onTogglePlay,
  onToggleMute,
  onToggleAudioDriven,
  onSetVolume,
  playTick
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 rounded-2xl border backdrop-blur-xl shadow-2xl px-4 py-3 max-w-sm sm:max-w-md w-full ${
        isDark
          ? 'bg-[#0E1017]/90 border-white/10 text-white shadow-black/80'
          : 'bg-white/95 border-gray-200 text-gray-900 shadow-gray-300/60'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={() => {
            playTick?.();
            onTogglePlay();
          }}
          className={`relative p-3 rounded-xl transition-all duration-300 flex items-center justify-center shrink-0 ${
            isPlaying
              ? 'bg-gradient-to-tr from-[#00F0FF] to-[#9478FF] text-black shadow-lg shadow-[#00F0FF]/30 scale-105'
              : isDark
              ? 'bg-white/10 hover:bg-white/20 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          title={isPlaying ? 'Pause soundtrack' : 'Play soundtrack'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </button>

        {/* Track Details & Visualizer */}
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              {isPlaying && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  isPlaying ? 'bg-[#00F0FF]' : isDark ? 'bg-zinc-600' : 'bg-gray-400'
                }`}
              ></span>
            </span>
            <p className="text-xs font-semibold tracking-wide truncate">
              {trackInfo.title}
            </p>
          </div>

          <div className="flex items-center justify-between mt-1 text-[11px] text-zinc-400">
            <span className="truncate">{trackInfo.artist} · BGM</span>

            {/* Live Audio Visualizer Equalizer */}
            <div className="flex items-end gap-0.5 h-3.5 px-1 shrink-0">
              {spectrumBars.map((height, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full transition-all duration-75"
                  style={{
                    height: isPlaying ? `${Math.max(20, height * 100)}%` : '20%',
                    backgroundColor: isPlaying
                      ? i % 2 === 0
                        ? '#00F0FF'
                        : '#9478FF'
                      : isDark
                      ? '#3f3f46'
                      : '#cbd5e1'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Audio Reactive Globe Toggle */}
        <button
          onClick={() => {
            playTick?.();
            onToggleAudioDriven();
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors shrink-0 ${
            audioDriven
              ? 'bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/30'
              : isDark
              ? 'bg-zinc-800/80 text-zinc-400 border-zinc-700'
              : 'bg-gray-100 text-gray-500 border-gray-200'
          }`}
          title={
            audioDriven
              ? 'Crystal globe motion is synced to piano chords'
              : 'Crystal globe motion responds to manual mouse touch'
          }
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">
            {audioDriven ? 'Music Flow' : 'Touch Flow'}
          </span>
        </button>

        {/* Mute Button */}
        <button
          onClick={() => {
            playTick?.();
            onToggleMute();
          }}
          className={`p-2 rounded-lg transition-colors shrink-0 ${
            isDark
              ? 'text-zinc-400 hover:text-white hover:bg-white/5'
              : 'text-gray-500 hover:text-black hover:bg-gray-100'
          }`}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-400" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayerBar;
