import React from 'react';

/**
 * Handcrafted Scrapbook SVG Decorative Assets
 */

export const RibbonBow = ({ className = "w-8 h-8 text-[#DFA9B8]" }) => (
  <svg viewBox="0 0 100 80" fill="currentColor" className={className}>
    {/* Center knot */}
    <ellipse cx="50" cy="35" rx="8" ry="7" />
    {/* Left loop */}
    <path d="M44 35 C30 15 10 20 15 40 C18 55 35 48 44 38 Z" opacity="0.9" />
    <path d="M40 35 C28 25 18 28 22 40 C25 48 35 42 40 37 Z" opacity="0.4" fill="#ffffff" />
    {/* Right loop */}
    <path d="M56 35 C70 15 90 20 85 40 C82 55 65 48 56 38 Z" opacity="0.9" />
    <path d="M60 35 C72 25 82 28 78 40 C75 48 65 42 60 37 Z" opacity="0.4" fill="#ffffff" />
    {/* Left ribbon tail */}
    <path d="M46 38 C40 50 30 65 20 75 C25 72 32 74 38 78 C44 65 48 52 48 40 Z" opacity="0.85" />
    {/* Right ribbon tail */}
    <path d="M54 38 C60 50 70 65 80 75 C75 72 68 74 62 78 C56 65 52 52 52 40 Z" opacity="0.85" />
  </svg>
);

export const WashiTape = ({ color = "pink", className = "" }) => {
  const bgClass = color === 'pink' 
    ? 'washi-tape-pink' 
    : color === 'lavender' 
    ? 'washi-tape-lavender' 
    : 'washi-tape-cream';

  return (
    <div className={`h-6 w-24 rounded-xs pointer-events-none transform -translate-y-3 ${bgClass} ${className}`}>
      <div className="w-full h-full opacity-30 flex items-center justify-around px-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
      </div>
    </div>
  );
};

export const PaperClip = ({ className = "w-6 h-12 text-[#DFA9B8]" }) => (
  <svg viewBox="0 0 24 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 6 v30 a7 7 0 0 0 14 0 V14 a10 10 0 0 0 -20 0 v26 a5 5 0 0 0 10 0 V16" transform="translate(-3, 0)" />
  </svg>
);

export const PostageStamp = ({ label = "ACLA • 21", className = "" }) => (
  <div className={`relative inline-block px-3 py-2 bg-[#FFF7F5] border-2 border-dashed border-[#DFA9B8] shadow-sm rounded-sm text-center ${className}`}>
    <div className="text-[9px] tracking-widest uppercase font-serif text-[#8D6878] font-bold">
      {label}
    </div>
    <div className="text-[8px] text-[#BA4C70] font-sans">
      NOV 10 2026
    </div>
  </div>
);

export const SparkleDoodle = ({ className = "w-5 h-5 text-[#BA4C70]" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z" />
  </svg>
);

export const LittleFlower = ({ className = "w-6 h-6 text-[#F2C8D1]" }) => (
  <svg viewBox="0 0 50 50" fill="currentColor" className={className}>
    <circle cx="25" cy="14" r="8" opacity="0.85" />
    <circle cx="36" cy="22" r="8" opacity="0.85" />
    <circle cx="32" cy="35" r="8" opacity="0.85" />
    <circle cx="18" cy="35" r="8" opacity="0.85" />
    <circle cx="14" cy="22" r="8" opacity="0.85" />
    <circle cx="25" cy="25" r="6" fill="#F8E9D2" />
  </svg>
);

export const CuteHeartSticker = ({ className = "w-6 h-6 text-[#DFA9B8]" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

