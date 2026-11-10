import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Star, RefreshCw, X, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { audioService } from '../services/AudioService';
import { RibbonBow } from './ScrapbookDecor';

export const WishingJar = () => {
  const [currentWish, setCurrentWish] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [drawnCount, setDrawnCount] = useState(0);

  const pickWish = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    audioService.playPop();

    // Pick a random wish
    const wishes = birthdayData.wishingJar.wishes;
    const randomIndex = Math.floor(Math.random() * wishes.length);
    const selected = wishes[randomIndex];

    // Trigger subtle sparkle particles
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#F2C8D1', '#E9DDF3', '#F8E9D2'],
      shapes: ['star', 'circle'],
    });

    setTimeout(() => {
      audioService.playChime();
      setCurrentWish(selected);
      setDrawnCount((prev) => prev + 1);
      setIsAnimating(false);
    }, 450);
  };

  const closeWishModal = () => {
    setCurrentWish(null);
  };

  return (
    <section id="wishing-jar-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF7F5] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#F2C8D1]/40 via-[#E9DDF3]/40 to-[#F9E4E8]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9DDF3]/70 border border-[#DCBFF0] text-xs font-semibold uppercase tracking-widest text-[#8D6878] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#BA4C70]" />
            <span>Cosmic Stardust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A303E] mb-3">
            {birthdayData.wishingJar.title}
          </h2>

          <p className="font-handwritten text-xl sm:text-2xl text-[#BA4C70] font-bold">
            "{birthdayData.wishingJar.subtitle}"
          </p>

          <p className="text-xs sm:text-sm text-[#8D6878] mt-2">
            {birthdayData.wishingJar.instructions}
          </p>
        </div>

        {/* The Illustrated Pastel Wishing Jar */}
        <div className="relative mx-auto max-w-xs sm:max-w-sm flex flex-col items-center select-none my-6">
          {/* Top Lid & Ribbon */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Ribbon Bow tied around jar neck */}
            <div className="absolute -top-4 z-30 notranslate" translate="no">
              <RibbonBow className="w-10 h-10 text-[#BA4C70] drop-shadow-sm" />
            </div>

            {/* Cork / Pastel wooden stopper */}
            <div className="w-24 h-6 rounded-t-md bg-gradient-to-r from-[#DFA9B8] via-[#F2C8D1] to-[#DFA9B8] border border-[#C98799] shadow-xs"></div>
            {/* Neck ring */}
            <div className="w-28 h-3 rounded-sm bg-[#FFFBFB]/80 border-x border-[#F2C8D1]"></div>
          </div>

          {/* Transparent Glass Body */}
          <div
            onClick={pickWish}
            className={`relative w-64 sm:w-72 h-80 rounded-b-[45px] rounded-t-[20px] bg-gradient-to-b from-white/60 via-[#F9E4E8]/40 to-[#F2C8D1]/50 backdrop-blur-md border-2 border-white/90 shadow-2xl p-4 flex flex-col items-center justify-start cursor-pointer transition-all duration-300 transform hover:scale-[1.03] ${isAnimating ? 'animate-wiggle' : ''
              }`}
          >
            {/* Glass Curvature Highlights */}
            <div className="absolute top-4 left-3 w-3 h-52 rounded-full bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 w-4 h-32 rounded-full bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>

            {/* Floating Origami Stars & Folded Notes inside Jar (Upper Glass Space, above the label) */}
            <div className="relative w-full pt-4 pb-2 flex flex-col items-center gap-3.5 notranslate select-none pointer-events-none" translate="no">
              {/* Row 1 - Floating Origami & Stars */}
              <div className="w-full flex items-center justify-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFF2F5] border border-[#F2C8D1] shadow-xs rotate-12 flex items-center justify-center animate-float">
                  <Heart className="w-4 h-4 text-[#BA4C70]" />
                </div>

                <div className="w-9 h-9 rounded-full bg-[#E9DDF3] border border-white shadow-xs -rotate-6 flex items-center justify-center animate-floatSlow">
                  <Star className="w-4 h-4 text-[#8D6878] fill-[#8D6878]" />
                </div>

                <div className="w-10 h-10 rounded-lg bg-[#FFF9F2] border border-[#F8E9D2] shadow-xs rotate-45 flex items-center justify-center animate-float">
                  <Sparkles className="w-4.5 h-4.5 text-[#BA4C70]" />
                </div>
              </div>

              {/* Row 2 - Floating Origami & Stars (Staggered) */}
              <div className="w-full flex items-center justify-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#F5EEFB] border border-[#DCBFF0] shadow-xs -rotate-12 flex items-center justify-center animate-floatSlow">
                  <Heart className="w-4 h-4 text-[#8D6878]" />
                </div>

                <div className="w-9 h-9 rounded-full bg-[#F2C8D1] border border-white shadow-xs rotate-6 flex items-center justify-center animate-float">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>

                <div className="w-10 h-10 rounded-lg bg-[#FFF2F5] border border-[#F2C8D1] shadow-xs -rotate-6 flex items-center justify-center animate-floatSlow">
                  <Sparkles className="w-4 h-4 text-[#BA4C70]" />
                </div>
              </div>

              {/* Little Stardust specks inside glass */}
              <div className="flex items-center justify-center gap-8 text-[11px] text-[#D89BAE]/70 select-none">
                <span className="animate-pulse">✦</span>
                <span className="animate-pulse delay-200">⋆</span>
                <span className="animate-pulse delay-500">✦</span>
              </div>
            </div>

            {/* Jar Center Label (Framed at the bottom base) */}
            <div className="absolute inset-x-6 bottom-6 py-2 px-3 rounded-xl bg-white/90 backdrop-blur-xs border border-[#F2C8D1] shadow-xs text-center pointer-events-none">
              <p className="font-serif italic text-xs font-bold text-[#8D6878] tracking-widest uppercase">
                Acla's Stardust Jar
              </p>
              <span className="text-[10px] text-[#BA4C70] font-sans font-medium">
                Tap to pick a wish ♡
              </span>
            </div>
          </div>

          {/* Interactive Button */}
          <div className="mt-8 flex flex-col items-center">
            <button
              onClick={pickWish}
              disabled={isAnimating}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#BA4C70] to-[#8D6878] text-white font-medium text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span className={isAnimating ? 'inline' : 'hidden'}>UNFOLDING A WISH...</span>
              <span className={!isAnimating ? 'inline' : 'hidden'}>PICK A WISH ✨</span>
              <Star className="w-4 h-4 fill-white" />
            </button>

            {drawnCount > 0 && (
              <span className="mt-3 text-xs text-[#8D6878]">
                Wishes drawn: <strong>{drawnCount}</strong>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Unfolded Note Modal Popup */}
      {currentWish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
          onClick={closeWishModal}
        >
          <div
            className="relative max-w-md w-full paper-texture rounded-2xl p-8 border-2 border-[#F2C8D1] shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Washi Tape (Cleanly visible sticking to top paper edge) */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 notranslate" translate="no">
              <div className="washi-tape-pink w-32 h-6 flex items-center justify-center shadow-xs">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#8D6878]">
                  WISH NOTE
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeWishModal}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FFFBFB] hover:bg-[#F9E4E8] text-[#5C3D4E] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
              aria-label="Close wish note"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="pt-2 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F9E4E8] text-[#BA4C70] mb-4">
                <Star className="w-6 h-6 fill-[#BA4C70]" />
              </div>

              <span className="block text-xs font-serif italic text-[#8D6878] uppercase tracking-widest mb-3">
                A Wish for Acla's 21st Year
              </span>

              <p className="font-handwritten text-2xl sm:text-3xl text-[#4A303E] font-bold leading-relaxed mb-6">
                <span>"{currentWish.note}"</span>
              </p>

              <p className="text-sm font-serif italic text-[#BA4C70] font-semibold mb-6">
                <span>{currentWish.sender}</span>
              </p>

              <div className="pt-4 border-t border-[#F2C8D1]/50 flex items-center justify-center gap-3">
                <button
                  onClick={pickWish}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F9E4E8] hover:bg-[#F2C8D1] text-[#BA4C70] text-xs font-semibold tracking-wide border border-[#DFA9B8] transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Ambil Doa Lainnya</span>
                </button>

                <button
                  onClick={closeWishModal}
                  className="px-5 py-2 rounded-full bg-[#5C3D4E] hover:bg-[#4A303E] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  Simpan Doa Ini ♡
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
