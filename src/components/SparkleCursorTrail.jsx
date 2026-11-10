import React, { useEffect, useState } from 'react';

/**
 * Delightful Fairy Dust & Heart Tap Interaction
 * Spawns tiny pastel hearts and sparkles when the visitor clicks or taps anywhere
 */
export const SparkleCursorTrail = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleInteraction = (e) => {
      // Don't trigger if clicking on inputs or buttons if desired, or let it sparkle everywhere!
      const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : null);
      const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : null);

      if (clientX === null || clientY === null) return;

      const symbols = ['♡', '✨', '🌸', '★', '🧁', '✦'];
      const colors = ['#BA4C70', '#DFA9B8', '#DCBFF0', '#F2C8D1', '#F8E9D2'];

      // Spawn 3-5 little floating particles
      const newParticles = Array.from({ length: 4 }).map((_, i) => ({
        id: Date.now() + Math.random() + i,
        x: clientX + (Math.random() * 30 - 15),
        y: clientY + (Math.random() * 20 - 10),
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.floor(Math.random() * 8) + 12,
        vx: (Math.random() - 0.5) * 60,
        vy: -(Math.random() * 50 + 40),
      }));

      setSparkles((prev) => [...prev.slice(-16), ...newParticles]);
    };

    window.addEventListener('pointerdown', handleInteraction);
    return () => window.removeEventListener('pointerdown', handleInteraction);
  }, []);

  // Cleanup aged particles
  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.filter((p) => Date.now() - p.id < 900));
    }, 200);
    return () => clearTimeout(timer);
  }, [sparkles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparkles.map((sp) => (
        <span
          key={sp.id}
          className="absolute select-none font-bold animate-float transition-all duration-700 ease-out"
          style={{
            left: `${sp.x}px`,
            top: `${sp.y}px`,
            color: sp.color,
            fontSize: `${sp.size}px`,
            transform: `translate(${sp.vx}px, ${sp.vy}px) scale(0.6)`,
            opacity: 0,
            textShadow: '0 0 6px rgba(242, 200, 209, 0.8)',
          }}
        >
          {sp.symbol}
        </span>
      ))}
    </div>
  );
};

