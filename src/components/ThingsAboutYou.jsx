import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { audioService } from '../services/AudioService';
import { SparkleDoodle, CuteHeartSticker } from './ScrapbookDecor';

export const ThingsAboutYou = () => {
  const [revealedIds, setRevealedIds] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'A little reason to smile',
    'Something worth celebrating',
    'A reminder of how amazing you are',
    'A little wish for your future',
    'A reminder to be kind to yourself'
  ];

  const handleCardClick = (id) => {
    audioService.playPop();
    const newRevealed = new Set(revealedIds);
    if (newRevealed.has(id)) {
      newRevealed.delete(id);
    } else {
      newRevealed.add(id);
    }
    setRevealedIds(newRevealed);

    // If all 21 cards have been revealed, trigger celebratory confetti!
    if (newRevealed.size === birthdayData.thingsAboutYou.length) {
      setTimeout(() => {
        audioService.playCelebrationChime();
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#F2C8D1', '#F9E4E8', '#BA4C70', '#E9DDF3'],
        });
      }, 300);
    }
  };

  const handleRevealAll = () => {
    audioService.playChime();
    const allIds = new Set(birthdayData.thingsAboutYou.map(item => item.id));
    setRevealedIds(allIds);
  };

  const filteredItems = activeCategory === 'All'
    ? birthdayData.thingsAboutYou
    : birthdayData.thingsAboutYou.filter(item => item.category === activeCategory);

  return (
    <section id="things-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF7F5] via-[#FFFBFB] to-[#FFF7F5] overflow-hidden">
      {/* Background Decorative Sparkles */}
      <div className="absolute top-10 right-[5%] opacity-30 pointer-events-none notranslate" translate="no">
        <SparkleDoodle className="w-10 h-10 text-[#BA4C70]" />
      </div>
      <div className="absolute bottom-20 left-[5%] opacity-30 pointer-events-none notranslate" translate="no">
        <CuteHeartSticker className="w-10 h-10 text-[#DFA9B8]" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2C8D1]/40 border border-[#DFA9B8]/40 text-xs font-semibold uppercase tracking-widest text-[#8D6878] mb-3">
            <Heart className="w-3.5 h-3.5 text-[#BA4C70] fill-[#BA4C70]" />
            <span>21 Sweet Notes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A303E] mb-3">
            21 Things About You
          </h2>

          <p className="font-handwritten text-xl sm:text-2xl text-[#BA4C70] font-bold">
            "21 little reminders, sweet appreciations, and warm wishes made just for you ♡"
          </p>

          {/* Interactive Progress Counter */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-xs font-medium text-[#8D6878]">
              Discovered: <strong className="text-[#BA4C70]">{revealedIds.size}</strong> of {birthdayData.thingsAboutYou.length} cards
            </span>
            {revealedIds.size > 0 && revealedIds.size < 21 && (
              <button
                onClick={handleRevealAll}
                className="text-[11px] underline text-[#8D6878] hover:text-[#BA4C70] transition-colors cursor-pointer"
              >
                Reveal all at once ✨
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                audioService.playPop();
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#BA4C70] text-white shadow-xs scale-105'
                  : 'bg-white/80 text-[#8D6878] border border-[#F2C8D1]/70 hover:bg-[#F9E4E8]'
              }`}
            >
              {cat === 'All' ? '✨ All 21 Cards' : cat}
            </button>
          ))}
        </div>

        {/* Staggered Playful Scrapbook Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isRevealed = revealedIds.has(item.id);
            const rotationDegree = idx % 4 === 0 ? '-rotate-1' : idx % 4 === 1 ? 'rotate-1' : idx % 4 === 2 ? '-rotate-2' : 'rotate-2';

            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className={`relative group rounded-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer select-none ${rotationDegree} ${
                  isRevealed
                    ? 'bg-white border-2 border-[#F2C8D1] shadow-polaroid'
                    : 'bg-gradient-to-br from-[#FFFBFB] to-[#F9E4E8]/60 border border-[#F2C8D1] shadow-soft hover:border-[#BA4C70]/60'
                }`}
              >
                {/* Cute Washi Tape Strip at Top Center */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none notranslate" translate="no">
                  <div className={`h-5 w-20 rounded-xs flex items-center justify-center text-[9px] font-bold tracking-widest uppercase ${
                    idx % 3 === 0 ? 'washi-tape-pink text-[#BA4C70]' : idx % 3 === 1 ? 'washi-tape-lavender text-[#8D6878]' : 'washi-tape-cream text-[#BA4C70]'
                  }`}>
                    #{item.number}
                  </div>
                </div>

                <div className="p-6 pt-7 min-h-[220px] flex flex-col justify-between">
                  {/* Category Stamp Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F9E4E8] text-[#8D6878]">
                      {item.category}
                    </span>
                    <span className="text-xs font-serif italic text-[#BA4C70]">
                      {item.badge}
                    </span>
                  </div>

                  {/* 1. Sealed / Unopened Card State */}
                  <div className={`py-6 flex flex-col items-center justify-center text-center ${
                    isRevealed ? 'hidden' : 'block'
                  }`}>
                    <div className="w-12 h-12 rounded-full bg-[#F9E4E8] border border-[#F2C8D1] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5 text-[#BA4C70] animate-pulse" />
                    </div>
                    <p className="font-handwritten text-xl text-[#5C3D4E] font-bold mb-1">
                      <span>Note #{item.number} ♡</span>
                    </p>
                    <span className="text-xs text-[#8D6878]/80 font-sans">
                      Tap to reveal secret message ♡
                    </span>
                  </div>

                  {/* 2. Revealed Message State (Clean, no uneven notebook lines!) */}
                  <div className={`${isRevealed ? 'block animate-fadeIn' : 'hidden'}`}>
                    <h3 className="font-serif font-bold text-lg text-[#4A303E] mb-2 leading-tight">
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-[#5C3D4E] text-xs sm:text-sm leading-relaxed font-sans">
                      <span>{item.message}</span>
                    </p>
                  </div>

                  {/* Card Bottom Status */}
                  <div className="pt-3 border-t border-[#F2C8D1]/40 flex items-center justify-between text-[11px] text-[#8D6878]">
                    <span className="font-serif italic text-[#BA4C70]">
                      Acla's 21st Universe
                    </span>
                    <span className="font-sans font-medium text-[10px] text-[#8D6878]/70">
                      {isRevealed ? "Click to fold" : "Click to unfold"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
