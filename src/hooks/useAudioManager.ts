'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export interface AudioEnergy {
  bass: number;
  mid: number;
  treble: number;
  energy: number;
  isPlaying: boolean;
}

export function useAudioManager() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioDriven, setAudioDriven] = useState(true);
  const [volume, setVolume] = useState(0.7);
  const [audioData, setAudioData] = useState<AudioEnergy>({
    bass: 0,
    mid: 0,
    treble: 0,
    energy: 0,
    isPlaying: false
  });
  const [spectrumBars, setSpectrumBars] = useState<number[]>([0.2, 0.4, 0.6, 0.8, 0.5, 0.3, 0.7, 0.4]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const dataArrayRef = useRef<any>(null);

  // Initialize Audio element and Web Audio API Graph
  const initAudio = useCallback(() => {
    if (audioContextRef.current) return;

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      analyser.smoothingTimeConstant = 0.8;
      analyserRef.current = analyser;

      const gainNode = ctx.createGain();
      gainNode.gain.value = volume;
      gainNodeRef.current = gainNode;

      const audio = new Audio();
      audio.src = '/bgms/ambient-piano.mp3';
      audio.loop = true;
      audio.preload = 'auto';
      audioRef.current = audio;

      const source = ctx.createMediaElementSource(audio);
      sourceNodeRef.current = source;

      source.connect(analyser);
      analyser.connect(gainNode);
      gainNode.connect(ctx.destination);

      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);
    } catch (err) {
      console.warn('Web Audio initialization error:', err);
    }
  }, [volume]);

  // Audio frequency analysis loop
  const updateFrequencies = useCallback(() => {
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;

    if (analyser && dataArray && isPlaying) {
      analyser.getByteFrequencyData(dataArray as any);

      // Low bins (0 - 6) -> Bass (e.g. piano low octave & chords)
      let bassSum = 0;
      for (let i = 0; i < 6; i++) {
        bassSum += dataArray[i];
      }
      const bass = Math.min(1, (bassSum / 6) / 200);

      // Mid bins (7 - 24) -> Mid harmonics (melodies, vocals, piano core)
      let midSum = 0;
      for (let i = 7; i < 24; i++) {
        midSum += dataArray[i];
      }
      const mid = Math.min(1, (midSum / 17) / 180);

      // High bins (25 - 55) -> Treble & atmosphere (air, upper resonance)
      let trebleSum = 0;
      for (let i = 25; i < 55; i++) {
        trebleSum += dataArray[i];
      }
      const treble = Math.min(1, (trebleSum / 30) / 160);

      // Overall average energy
      const energy = (bass * 0.45 + mid * 0.4 + treble * 0.15);

      setAudioData({
        bass,
        mid,
        treble,
        energy,
        isPlaying: true
      });

      // Sample 8 visualizer bars for UI display
      const bars: number[] = [];
      const step = Math.floor(dataArray.length / 8);
      for (let i = 0; i < 8; i++) {
        const val = dataArray[i * step] / 255;
        bars.push(Math.max(0.15, val));
      }
      setSpectrumBars(bars);
    }

    if (isPlaying) {
      rafRef.current = requestAnimationFrame(updateFrequencies);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      rafRef.current = requestAnimationFrame(updateFrequencies);
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setAudioData(prev => ({ ...prev, isPlaying: false, energy: 0, bass: 0, mid: 0, treble: 0 }));
      setSpectrumBars([0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, updateFrequencies]);

  const togglePlay = useCallback(async () => {
    initAudio();

    const ctx = audioContextRef.current;
    const audio = audioRef.current;

    if (ctx && ctx.state === 'suspended') {
      await ctx.resume();
    }

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (e) {
        console.warn('Playback blocked by browser policy:', e);
      }
    }
  }, [initAudio, isPlaying]);

  const toggleMute = useCallback(() => {
    if (!gainNodeRef.current) return;
    if (isMuted) {
      gainNodeRef.current.gain.value = volume;
      setIsMuted(false);
    } else {
      gainNodeRef.current.gain.value = 0;
      setIsMuted(true);
    }
  }, [isMuted, volume]);

  const handleSetVolume = useCallback((newVol: number) => {
    const v = Math.max(0, Math.min(1, newVol));
    setVolume(v);
    if (gainNodeRef.current && !isMuted) {
      gainNodeRef.current.gain.value = v;
    }
  }, [isMuted]);

  return {
    isPlaying,
    isMuted,
    audioDriven,
    setAudioDriven,
    volume,
    setVolume: handleSetVolume,
    audioData,
    spectrumBars,
    togglePlay,
    toggleMute,
    trackInfo: {
      title: 'Classical Piano Ambient',
      artist: 'Andriih',
      file: 'ambient-piano.mp3'
    }
  };
}
