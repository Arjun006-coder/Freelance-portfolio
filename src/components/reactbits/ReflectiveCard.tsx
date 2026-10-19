'use client';

import React, { useState, useRef } from 'react';
import { ShieldCheck, Fingerprint, Sparkles, CheckCircle2 } from 'lucide-react';
import './ReflectiveCard.css';

export interface ReflectiveCardProps {
  name?: string;
  role?: string;
  badge?: string;
  status?: string;
  statusColor?: string;
  idLabel?: string;
  idValue?: string;
  children?: React.ReactNode;
  theme?: 'dark' | 'light';
  tint?: string;
  metalness?: number;
  roughness?: number;
  blurStrength?: number;
  shine?: number;
  glare?: number;
  enableTilt?: boolean;
  tiltStrength?: number;
  intro?: boolean;
  width?: number | string;
  height?: number | string;
  radius?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
  name = 'Alexander Doe',
  role = 'Fullstack & Creative Engineer',
  badge = 'Verified Pro Freelancer',
  status = 'Available for Q4',
  statusColor = '#22c55e',
  idLabel = 'CLIENT CODE',
  idValue = 'LS-FOLIO-2025',
  children,
  theme = 'dark',
  tint = '#ffffff',
  metalness = 1,
  roughness = 0.3,
  blurStrength = 6,
  shine = 1,
  glare = 0.6,
  enableTilt = true,
  tiltStrength = 14,
  intro = true,
  width = 340,
  height = 520,
  radius = 24,
  className = '',
  style = {}
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [sheenPos, setSheenPos] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enableTilt) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    setRotateY(normX * tiltStrength);
    setRotateX(-normY * tiltStrength);

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: glare
    });

    setSheenPos({
      x: normX * 40,
      y: normY * 40
    });
  };

  const handlePointerLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
    setSheenPos({ x: 0, y: 0 });
  };

  return (
    <div
      className={`reflective-card-container ${className}`.trim()}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...style
      }}
    >
      <div
        ref={cardRef}
        className="reflective-card w-full h-full p-7 flex flex-col justify-between"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          ['--rc-radius' as any]: `${radius}px`,
          ['--rc-glare-x' as any]: `${glarePos.x}%`,
          ['--rc-glare-y' as any]: `${glarePos.y}%`,
          ['--rc-glare-opacity' as any]: glarePos.opacity,
          ['--rc-sheen-x' as any]: `${sheenPos.x}%`,
          ['--rc-sheen-y' as any]: `${sheenPos.y}%`,
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }}
      >
        <div className="reflective-card__sheen" />
        <div className="reflective-card__noise" />

        {children ? (
          <div className="relative z-20 h-full">{children}</div>
        ) : (
          <>
            {/* Header */}
            <div className="relative z-20 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur-md text-xs font-medium text-white/90">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>{badge}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: statusColor }} />
                <span>{status}</span>
              </div>
            </div>

            {/* Center Identity */}
            <div className="relative z-20 my-auto text-center space-y-4">
              <div className="relative inline-block mx-auto">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-violet-500/20 to-pink-500/30 p-[1px] border border-white/20 shadow-2xl flex items-center justify-center backdrop-blur-xl">
                  <div className="w-full h-full rounded-2xl bg-[#0d0f17]/80 flex flex-col items-center justify-center p-3">
                    <Fingerprint className="w-10 h-10 text-cyan-400 opacity-90 stroke-[1.4]" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-black p-1 rounded-full shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{name}</h3>
                <p className="text-sm font-medium text-cyan-400/90 mt-1">{role}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-left">
                <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Delivered</div>
                  <div className="text-sm font-bold text-white">45+ Web</div>
                </div>
                <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Rating</div>
                  <div className="text-sm font-bold text-emerald-400">5.0 / 5.0</div>
                </div>
                <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Stack</div>
                  <div className="text-sm font-bold text-cyan-300">Next.js+3D</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-20 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <div>
                <div className="text-[10px] uppercase font-mono text-zinc-500">{idLabel}</div>
                <div className="font-mono text-zinc-300 text-xs font-semibold tracking-wider">{idValue}</div>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>SECURE REFLECTION</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReflectiveCard;
