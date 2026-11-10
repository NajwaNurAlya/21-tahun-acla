import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Mail, ChevronDown } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { audioService } from '../services/AudioService';
import { RibbonBow, PostageStamp, SparkleDoodle } from './ScrapbookDecor';

export const SecretInvitation = ({ isUnlocked, onUnlock }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);
    audioService.playPop();
    audioService.playChime();

    // Trigger sweet pastel confetti & hearts burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F2C8D1', '#F9E4E8', '#E9DDF3', '#BA4C70', '#FFF7F5'],
      shapes: ['circle'],
      ticks: 200,
    });

    // Start background music seamlessly on first interaction
    audioService.startMusic(birthdayData.audio.customTrackUrl);

    // Letter slides out after flap opens
    setTimeout(() => {
      setShowLetter(true);
    }, 500);
  };

  const handleEnterUniverse = () => {
    onUnlock();
    audioService.playChime();
    const heroEl = document.getElementById('chapter-hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-b from-[#FFF7F5] via-[#F9E4E8]/40 to-[#FFF7F5]">
      {/* Dreamy Background Floating Pastels & Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full bg-[#F2C8D1]/30 blur-2xl animate-float"></div>
        <div className="absolute top-1/3 right-[8%] w-48 h-48 rounded-full bg-[#E9DDF3]/40 blur-3xl animate-floatSlow"></div>
        <div className="absolute bottom-16 left-[15%] w-40 h-40 rounded-full bg-[#F9E4E8]/50 blur-2xl animate-float"></div>
        
        {/* Cute decorative floating stamps & sparkles */}
        <div className="absolute top-20 right-[15%] opacity-40 animate-twinkle">
          <SparkleDoodle className="w-8 h-8 text-[#BA4C70]" />
        </div>
        <div className="absolute bottom-28 left-[8%] opacity-30 animate-twinkle delay-1000">
          <SparkleDoodle className="w-6 h-6 text-[#8D6878]" />
        </div>
        <div className="absolute top-1/2 left-[5%] opacity-20">
          <RibbonBow className="w-10 h-10 text-[#DFA9B8] animate-floatSlow" />
        </div>
      </div>

      <div className="relative max-w-xl w-full mx-auto text-center z-10">
        {/* Intro Teaser Headings */}
        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2C8D1]/40 border border-[#DFA9B8]/50 text-xs font-semibold tracking-widest uppercase text-[#8D6878] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#BA4C70]" />
            <span>Special Delivery</span>
          </div>

          <h2 className="text-xl md:text-2xl font-serif italic text-[#8D6878]">
            {birthdayData.invitation.teaser}
          </h2>

          <p className="font-handwritten text-2xl md:text-3xl text-[#BA4C70] font-bold tracking-wide">
            {birthdayData.invitation.greeting}
          </p>
        </div>

        {/* Envelope Container */}
        <div className="relative mx-auto max-w-md w-full perspective-1000">
          {/* Postmark and stamp placed on top corner */}
          <div className="absolute -top-6 -right-2 z-20 transform rotate-6 drop-shadow-sm pointer-events-none notranslate" translate="no">
            <PostageStamp label="NAFISA • 21" />
          </div>

          <div
            className={`relative w-full rounded-2xl bg-[#FFFBFB] border border-[#F2C8D1] envelope-shadow transition-all duration-700 p-6 md:p-8 ${
              isOpen ? 'pt-8' : 'hover:scale-[1.01]'
            }`}
          >
            {/* Top Washi Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 notranslate" translate="no">
              <div className="washi-tape-pink min-w-[150px] px-3.5 h-6 flex items-center justify-center">
                <span className="text-[9.5px] tracking-widest uppercase text-[#8D6878] font-bold whitespace-nowrap">
                  FOR NAFISA PUTRI ACLA
                </span>
              </div>
            </div>

            {/* 1. Envelope Sealed State (Hidden when opened, persistent in DOM) */}
            <div className={`py-8 flex flex-col items-center ${isOpen ? 'hidden' : 'block'}`}>
              <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#F9E4E8] animate-pulseGlow"></div>
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#F2C8D1] to-[#DFA9B8] border-2 border-white flex flex-col items-center justify-center shadow-md">
                  <Heart className="w-8 h-8 text-white fill-white animate-bounce" />
                  <span className="text-[9px] font-bold tracking-widest text-[#5C3D4E] uppercase mt-0.5 notranslate" translate="no">
                    21
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#8D6878] mb-6 max-w-xs font-sans">
                {birthdayData.invitation.subTeaser}
              </p>

              {/* Primary Button */}
              <button
                onClick={handleOpenEnvelope}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#BA4C70] to-[#C98799] text-white font-medium text-sm md:text-base tracking-wide shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>{birthdayData.invitation.buttonText}</span>
                <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
              </button>
            </div>

            {/* 2. Envelope Opened & Letter Reveal State */}
            <div
              className={`transition-all duration-700 transform ${
                isOpen ? (showLetter ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-6 block') : 'hidden'
              }`}
            >
              {/* Scrapbook Letter Sheet */}
              <div className="paper-texture rounded-xl p-6 md:p-8 text-left border border-[#F2C8D1]/80 shadow-inner relative overflow-hidden">
                {/* Subtle decorative heart watermark */}
                <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                  <Heart className="w-48 h-48 text-[#BA4C70]" />
                </div>

                <div className="flex items-center justify-between mb-4 border-b border-[#F2C8D1]/50 pb-3">
                  <span className="font-handwritten text-2xl text-[#BA4C70] font-bold">
                    {birthdayData.invitation.letter.salutation}
                  </span>
                  <span className="text-xs font-serif italic text-[#8D6878]">
                    Chapter 21 Milestone
                  </span>
                </div>

                <p className="text-[#5C3D4E] text-sm md:text-base leading-relaxed mb-4 font-sans">
                  {birthdayData.invitation.letter.paragraph1}
                </p>

                <p className="text-[#5C3D4E] text-sm md:text-base leading-relaxed mb-6 font-sans">
                  {birthdayData.invitation.letter.paragraph2}
                </p>

                <div className="border-t border-[#F2C8D1]/50 pt-4 flex flex-col items-center sm:items-start">
                  <p className="font-handwritten text-xl text-[#BA4C70] mb-4">
                    {birthdayData.invitation.letter.signoff}
                  </p>

                  <button
                    onClick={handleEnterUniverse}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#BA4C70] to-[#C98799] text-white text-sm font-semibold tracking-wider uppercase shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>{birthdayData.invitation.letter.buttonUnlock}</span>
                    <ChevronDown className="w-4 h-4 animate-bounce" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
