import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Wind, RotateCcw } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { audioService } from '../services/AudioService';
import { RibbonBow } from './ScrapbookDecor';

export const MakeAWishCake = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [isBlowing, setIsBlowing] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  // Exactly 21 candles in 3 symmetrical tiers of 7 candles:
  // Tingkat 1 (Atas): 7 lilin
  // Tingkat 2 (Tengah): 7 lilin
  // Tingkat 3 (Bawah): 7 lilin
  // 7 + 7 + 7 = 21 lilin untuk Chapter 21!
  const tier1Candles = [0, 1, 2, 3, 4, 5, 6];
  const tier2Candles = [7, 8, 9, 10, 11, 12, 13];
  const tier3Candles = [14, 15, 16, 17, 18, 19, 20];

  const handleBlowCandles = () => {
    if (!candlesLit || isBlowing) return;
    setIsBlowing(true);

    // Audio effect: breath whoosh + celebration chimes
    audioService.playBlowCandle();

    setTimeout(() => {
      setCandlesLit(false);
      setIsBlowing(false);
      setShowCelebration(true);

      // Grand soft pastel confetti explosion
      confetti({
        particleCount: 130,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#F2C8D1', '#F9E4E8', '#E9DDF3', '#BA4C70', '#F8E9D2', '#FFF7F5'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 120,
          origin: { y: 0.7 },
          colors: ['#BA4C70', '#DFA9B8', '#DCBFF0'],
        });
      }, 350);
    }, 450);
  };

  const handleReignite = () => {
    audioService.playChime();
    setCandlesLit(true);
    setShowCelebration(false);
  };

  return (
    <section id="cake-section" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF7F5] via-[#F9E4E8]/50 to-[#FFF7F5] overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-[#F2C8D1]/40 to-transparent blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2C8D1]/50 border border-[#DFA9B8] text-xs font-semibold uppercase tracking-widest text-[#8D6878] mb-3">
            <Heart className="w-3.5 h-3.5 text-[#BA4C70] fill-[#BA4C70]" />
            <span>The Grand Finale</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[#4A303E] mb-3">
            {birthdayData.cakeCelebration.title}
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-[#BA4C70] font-bold">
            "{birthdayData.cakeCelebration.subtitle}"
          </p>

          <p className="text-xs sm:text-sm text-[#8D6878] mt-2 max-w-lg mx-auto">
            {birthdayData.cakeCelebration.instruction}
          </p>
        </div>

        {/* ============================================================== */}
        {/* SYMMETRICAL ILLUSTRATED BIRTHDAY CAKE WITH 3-TIER 21 CANDLES   */}
        {/* ============================================================== */}
        <div className="relative mx-auto w-full max-w-lg flex flex-col items-center justify-center select-none pt-8 pb-4">

          {/* CANDLES STAGE: 3 Tingkat Lilin Simetris (Semua Menyala!) */}
          <div className="relative flex flex-col items-center justify-end z-20 space-y-1">

            {/* TINGKAT 1 (Atas): 7 Lilin */}
            <div className="flex items-end justify-center gap-3 sm:gap-4 z-10">
              {tier1Candles.map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-6 flex items-center justify-center">
                    {candlesLit ? (
                      <div className="w-3 h-5 rounded-full bg-gradient-to-t from-[#FF9800] via-[#FFCA28] to-[#FFF9C4] animate-flame drop-shadow-[0_0_8px_rgba(255,183,77,0.9)]"></div>
                    ) : (
                      <div className="w-2 h-4 rounded-full bg-gray-400/50 animate-smoke"></div>
                    )}
                  </div>
                  <div className="w-0.5 h-1.5 bg-[#5C3D4E]/80"></div>
                  <div className="w-2.5 h-9 sm:h-10 rounded-t-sm shadow-xs bg-gradient-to-b from-[#F2C8D1] to-[#DFA9B8]"></div>
                </div>
              ))}
            </div>

            {/* TINGKAT 2 (Tengah): 7 Lilin */}
            <div className="flex items-end justify-center gap-3 sm:gap-4 z-20">
              {tier2Candles.map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-6 flex items-center justify-center">
                    {candlesLit ? (
                      <div className="w-3 h-5 rounded-full bg-gradient-to-t from-[#FF9800] via-[#FFD54F] to-[#FFFDE7] animate-flame drop-shadow-[0_0_8px_rgba(255,183,77,0.9)]"></div>
                    ) : (
                      <div className="w-2 h-4 rounded-full bg-gray-400/50 animate-smoke"></div>
                    )}
                  </div>
                  <div className="w-0.5 h-1.5 bg-[#5C3D4E]/80"></div>
                  <div className="w-2.5 h-9 sm:h-10 rounded-t-sm shadow-xs bg-gradient-to-b from-[#E9DDF3] to-[#DCBFF0]"></div>
                </div>
              ))}
            </div>

            {/* TINGKAT 3 (Bawah): 7 Lilin (Semua Api Menyala Terang!) */}
            <div className="flex items-end justify-center gap-3 sm:gap-4 z-30">
              {tier3Candles.map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-6 flex items-center justify-center">
                    {candlesLit ? (
                      <div className="w-3 h-5 rounded-full bg-gradient-to-t from-[#FF9800] via-[#FFE082] to-[#FFFDE7] animate-flame drop-shadow-[0_0_8px_rgba(255,183,77,0.9)]"></div>
                    ) : (
                      <div className="w-2 h-4 rounded-full bg-gray-400/50 animate-smoke"></div>
                    )}
                  </div>
                  <div className="w-0.5 h-1.5 bg-[#5C3D4E]/80"></div>
                  <div className="w-2.5 h-9 sm:h-10 rounded-t-sm shadow-xs bg-gradient-to-b from-[#BA4C70] to-[#C98799]"></div>
                </div>
              ))}
            </div>
          </div>

          {/* CAKE TIERS: Stacked along a single vertical center axis */}
          <div className="flex flex-col items-center w-full z-10 mt-0">
            {/* TIER 1: Top Frosting Layer (Width: 288px) */}
            <div className="relative w-64 sm:w-72 h-16 rounded-t-3xl bg-gradient-to-r from-[#FFFBFB] via-[#FFF2F5] to-[#FFFBFB] border-t-4 border-x-4 border-white shadow-sm flex items-center justify-center">
              {/* Symmetrical Cream Drips */}
              <div className="absolute -bottom-2 inset-x-0 flex justify-evenly pointer-events-none">
                <span className="w-4 h-4 rounded-full bg-[#FFF2F5] shadow-xs"></span>
                <span className="w-5 h-5 rounded-full bg-[#FFF2F5] shadow-xs"></span>
                <span className="w-4 h-4 rounded-full bg-[#FFF2F5] shadow-xs"></span>
                <span className="w-5 h-5 rounded-full bg-[#FFF2F5] shadow-xs"></span>
                <span className="w-4 h-4 rounded-full bg-[#FFF2F5] shadow-xs"></span>
              </div>
              <span className="font-serif italic text-xs tracking-widest text-[#BA4C70] font-bold">
                CHAPTER 21
              </span>
            </div>

            {/* TIER 2: Middle Cake Tier (Width: 350px) */}
            <div className="relative w-80 sm:w-88 h-20 bg-gradient-to-r from-[#F9E4E8] via-[#F2C8D1] to-[#F9E4E8] border-x-4 border-white flex items-center justify-center shadow-inner">
              {/* Perfectly Centered Name & Ribbon Bows */}
              <div className="flex items-center justify-center gap-2">
                <RibbonBow className="w-7 h-7 text-[#BA4C70]" />
                <span className="font-handwritten text-2xl text-[#4A303E] font-bold tracking-wide">
                  Acla
                </span>
                <RibbonBow className="w-7 h-7 text-[#BA4C70]" />
              </div>
            </div>

            {/* TIER 3: Bottom Cake Tier (Width: 420px) */}
            <div className="relative w-[340px] sm:w-[420px] h-20 rounded-b-2xl bg-gradient-to-r from-[#E9DDF3] via-[#F9E4E8] to-[#E9DDF3] border-4 border-white shadow-lg flex items-center justify-center px-4">
              <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
                {/* Left 3 Pearl Dots */}
                <div className="flex items-center gap-1 sm:gap-1.5 notranslate" translate="no">
                  <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs"></span>
                </div>

                {/* Center Milestone Text */}
                <span className="text-[11px] sm:text-xs font-serif font-bold text-[#8D6878] uppercase tracking-widest px-2 whitespace-nowrap">
                  Happy 21st Birthday
                </span>

                {/* Right 3 Pearl Dots */}
                <div className="flex items-center gap-1 sm:gap-1.5 notranslate" translate="no">
                  <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs"></span>
                </div>
              </div>
            </div>

            {/* CAKE STAND: Centered Plate & Pedestal Base */}
            <div className="relative w-[370px] sm:w-[460px] h-5 sm:h-6 rounded-full bg-gradient-to-r from-[#F2C8D1] via-white to-[#F2C8D1] shadow-xl border-2 border-white mt-1"></div>
            <div className="relative w-36 sm:w-44 h-4 bg-gradient-to-r from-[#DFA9B8] via-white to-[#DFA9B8] rounded-b-xl shadow-md border-b border-x border-[#F2C8D1]/60"></div>
          </div>

          {/* Action Buttons: Immune to Google Translate child deletion */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleBlowCandles}
              disabled={isBlowing}
              className={`group items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#BA4C70] via-[#C98799] to-[#8D6878] text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl hover:shadow-2xl hover:brightness-105 active:scale-95 transition-all cursor-pointer ${candlesLit ? 'inline-flex' : 'hidden'
                }`}
            >
              <Wind className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className={isBlowing ? 'inline' : 'hidden'}>MAKING A WISH...</span>
              <span className={!isBlowing ? 'inline' : 'hidden'}>{birthdayData.cakeCelebration.blowButtonText}</span>
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </button>

            <button
              onClick={handleReignite}
              className={`items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFFBFB] hover:bg-[#F9E4E8] text-[#8D6878] text-xs sm:text-sm font-semibold tracking-wide border border-[#F2C8D1] shadow-xs transition-colors cursor-pointer ${!candlesLit ? 'inline-flex' : 'hidden'
                }`}
            >
              <RotateCcw className="w-4 h-4 text-[#BA4C70]" />
              <span>{birthdayData.cakeCelebration.reigniteText}</span>
            </button>
          </div>
        </div>

        {/* Revealed Celebratory Final Letter: Persistent in DOM with hidden/block */}
        <div className={`mt-14 max-w-2xl mx-auto animate-scaleUp ${showCelebration ? 'block' : 'hidden'}`}>
          <div className="relative paper-texture rounded-2xl p-8 sm:p-12 border-2 border-[#F2C8D1] shadow-2xl text-center">
            {/* Top Washi Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 notranslate" translate="no">
              <div className="washi-tape-pink w-36 h-6 flex items-center justify-center">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#8D6878]">
                  CHAPTER 21 LETTER
                </span>
              </div>
            </div>

            {/* Heart Badge */}
            <div className="w-14 h-14 rounded-full bg-[#F9E4E8] border border-[#F2C8D1] flex items-center justify-center mx-auto mb-6 text-[#BA4C70] shadow-sm">
              <Heart className="w-7 h-7 fill-[#BA4C70] animate-pulse" />
            </div>

            {/* Closing Message Headline */}
            <h3 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#4A303E] tracking-tight mb-6">
              <span>"{birthdayData.cakeCelebration.finalLetter.headline}"</span>
            </h3>

            {/* Message Paragraphs */}
            <p className="text-base sm:text-lg text-[#5C3D4E] leading-relaxed mb-4 font-sans">
              <span>{birthdayData.cakeCelebration.finalLetter.messageLine1}</span>
            </p>

            <p className="text-base sm:text-lg text-[#5C3D4E] leading-relaxed mb-8 font-sans font-medium text-[#BA4C70]">
              <span>{birthdayData.cakeCelebration.finalLetter.messageLine2}</span>
            </p>

            {/* Handwritten Signature */}
            <div className="border-t border-[#F2C8D1]/60 pt-6 flex flex-col items-center">
              <span className="font-handwritten text-3xl sm:text-4xl text-[#BA4C70] font-bold">
                <span>{birthdayData.cakeCelebration.finalLetter.signature}</span>
              </span>

              <span className="text-xs font-serif italic text-[#8D6878] mt-2">
                <span>{birthdayData.cakeCelebration.finalLetter.subSignature}</span>
              </span>

              <span className="mt-4 px-3 py-1 rounded-full bg-[#F2C8D1]/40 text-[10px] uppercase tracking-widest text-[#8D6878] font-bold">
                <span>{birthdayData.cakeCelebration.finalLetter.dateStamp}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
