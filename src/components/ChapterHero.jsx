import React from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { audioService } from '../services/AudioService';
import { RibbonBow, LittleFlower, SparkleDoodle, CuteHeartSticker } from './ScrapbookDecor';

export const ChapterHero = () => {
  const handleConfettiBlast = () => {
    audioService.playChime();
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#F2C8D1', '#F9E4E8', '#E9DDF3', '#BA4C70', '#F8E9D2'],
    });
  };

  const scrollToArchives = () => {
    const el = document.getElementById('archives-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="chapter-hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-b from-[#FFF7F5] via-[#FFFBFB] to-[#FFF7F5]"
    >
      {/* Decorative Scrapbook Elements Floating in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft pastel aura blurs */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-[#F9E4E8]/60 to-[#E9DDF3]/50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 -left-20 w-72 h-72 bg-[#F2C8D1]/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#E9DDF3]/40 rounded-full blur-3xl"></div>

        {/* Floating Clouds */}
        <div className="absolute top-16 left-6 md:left-24 opacity-60 animate-floatSlow">
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xs border border-[#F2C8D1]/40 shadow-xs">
            <span className="text-xs font-handwritten text-[#BA4C70]">dream big, shine bright ✨</span>
            <Sparkles className="w-3 h-3 text-[#BA4C70]" />
          </div>
        </div>

        <div className="absolute bottom-32 right-6 md:right-28 opacity-70 animate-float">
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xs border border-[#E9DDF3] shadow-xs">
            <Heart className="w-3 h-3 text-[#BA4C70] fill-[#BA4C70]" />
            <span className="text-xs font-handwritten text-[#8D6878]">chapter 21 unlocked ♡</span>
          </div>
        </div>

        {/* Floating Ribbons, Bows & Flowers */}
        <div className="absolute top-28 right-[12%] animate-float notranslate" translate="no">
          <RibbonBow className="w-12 h-12 text-[#DFA9B8] drop-shadow-xs" />
        </div>
        <div className="absolute bottom-24 left-[10%] animate-floatSlow notranslate" translate="no">
          <LittleFlower className="w-10 h-10 text-[#F2C8D1] drop-shadow-xs" />
        </div>
        <div className="absolute top-1/2 left-[8%] animate-twinkle notranslate" translate="no">
          <SparkleDoodle className="w-6 h-6 text-[#BA4C70]" />
        </div>
        <div className="absolute top-2/3 right-[10%] animate-twinkle delay-700 notranslate" translate="no">
          <CuteHeartSticker className="w-7 h-7 text-[#DFA9B8]" />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 px-4">
        {/* Top Editorial Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F9E4E8] border border-[#F2C8D1] shadow-xs mb-6 animate-pulseGlow">
          <Sparkles className="w-3.5 h-3.5 text-[#BA4C70]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#8D6878]">
            {birthdayData.hero.badge}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#BA4C70]"></span>
          <span className="text-xs font-serif italic text-[#BA4C70]">
            {birthdayData.hero.dateTag}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight text-[#4A303E] leading-[1.1] mb-4">
          HAPPY 21<sup className="text-2xl sm:text-4xl font-light text-[#BA4C70]">ST</sup> BIRTHDAY,
          <br />
          <span className="font-serif italic font-normal text-[#BA4C70] bg-gradient-to-r from-[#BA4C70] via-[#C98799] to-[#8D6878] bg-clip-text text-transparent">
            {birthdayData.birthdayPerson.name.toUpperCase()}!
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="font-handwritten text-2xl sm:text-3xl md:text-4xl text-[#8D6878] font-bold max-w-2xl mx-auto mb-8">
          "{birthdayData.hero.supportingText}"
        </p>

        {/* Grand Expressive '21' Centerpiece */}
        <div className="relative inline-block my-4 select-none">
          {/* Glowing Aura Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F2C8D1]/50 via-[#E9DDF3]/50 to-[#F9E4E8]/50 blur-xl scale-125 animate-pulseGlow"></div>

          <div className="relative px-8 py-4 sm:px-12 sm:py-6 rounded-3xl bg-white/70 backdrop-blur-sm border border-[#F2C8D1]/70 shadow-polaroid">
            {/* Top washi tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 notranslate" translate="no">
              <div className="washi-tape-pink w-28 h-5 flex items-center justify-center">
                <span className="text-[9px] tracking-widest uppercase font-bold text-[#8D6878]">
                  CHAPTER XXI
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-6 notranslate" translate="no">
              <span className="font-serif text-7xl sm:text-9xl font-black text-[#5C3D4E] tracking-tighter drop-shadow-sm">
                2
              </span>

              {/* Decorative mini badge in between */}
              <div className="flex flex-col items-center">
                <RibbonBow className="w-8 h-8 sm:w-10 sm:h-10 text-[#BA4C70] animate-bounce" />
                <span className="font-handwritten text-base sm:text-lg text-[#BA4C70] font-bold whitespace-nowrap">
                  years of pure grace
                </span>
              </div>

              <span className="font-serif text-7xl sm:text-9xl font-black text-[#BA4C70] tracking-tighter drop-shadow-sm">
                1
              </span>
            </div>

            {/* Subtitle tag */}
            <p className="text-xs sm:text-sm text-[#8D6878] font-medium tracking-wide max-w-md mx-auto mt-2">
              {birthdayData.hero.subtitle}
            </p>
          </div>
        </div>

        {/* Milestone Little Stat Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-[#8D6878]">
          <div className="px-4 py-2 rounded-2xl bg-[#FFFBFB] border border-[#F2C8D1] shadow-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BA4C70]"></span>
            <span>7,670 Days of Pure Light ✨</span>
          </div>
          <div className="px-4 py-2 rounded-2xl bg-[#FFFBFB] border border-[#F2C8D1] shadow-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BA4C70]"></span>
            <span>184,000+ Hours of Good Vibes 🌸</span>
          </div>
          <div className="px-4 py-2 rounded-2xl bg-[#FFFBFB] border border-[#F2C8D1] shadow-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BA4C70]"></span>
            <span>1 Irreplaceable Bestie ♡</span>
          </div>
        </div>

        {/* Interactive Confetti Popping Button */}
        <div className="mt-8">
          <button
            onClick={handleConfettiBlast}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F9E4E8] hover:bg-[#F2C8D1] text-[#BA4C70] text-xs sm:text-sm font-semibold tracking-wide border border-[#DFA9B8] shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#BA4C70]" />
            <span>Toss Birthday Confetti ✨</span>
          </button>
        </div>

        {/* Playful Scroll Indicator */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center">
          <button
            onClick={scrollToArchives}
            className="group flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-[#8D6878] hover:text-[#BA4C70] transition-colors cursor-pointer"
          >
            <span className="font-handwritten text-lg capitalize font-bold text-[#8D6878] group-hover:text-[#BA4C70]">
              {birthdayData.hero.scrollHint}
            </span>
            <div className="w-8 h-8 rounded-full border border-[#DFA9B8] flex items-center justify-center group-hover:border-[#BA4C70] transition-colors">
              <ChevronDown className="w-4 h-4 animate-bounce text-[#BA4C70]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
