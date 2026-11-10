import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Heart, Sparkles } from 'lucide-react';
import { audioService } from '../services/AudioService';
import { birthdayData } from '../data/birthdayContent';

export const NavbarMusic = ({ isUnlocked, onOpenSecret }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);

    // Keep play state synchronized across components
    const unsubscribe = audioService.subscribe((playing) => {
      setIsPlaying(playing);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleToggleMusic = () => {
    audioService.toggleMusic(birthdayData.audio.customTrackUrl);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Floating Glass Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 py-3 ${scrolled
            ? 'bg-[#FFF7F5]/85 backdrop-blur-md shadow-soft border-b border-[#F2C8D1]/40'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Universe Brand */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#F9E4E8] flex items-center justify-center text-[#BA4C70] shadow-xs">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
            </span>
            <div>
              <span className="font-serif italic font-bold text-base md:text-lg text-[#5C3D4E] tracking-tight">
                Acla's Little Universe
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-[#F2C8D1]/40 text-[#8D6878] rounded-full">
                Chapter 21
              </span>
            </div>
          </div>

          {/* Quick Nav Links (Visible when unlocked & on medium+ screens) */}
          {isUnlocked && (
            <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-semibold text-[#8D6878]">
              <button
                onClick={() => scrollToSection('chapter-hero')}
                className="hover:text-[#BA4C70] transition-colors"
              >
                Hero
              </button>
              <button
                onClick={() => scrollToSection('archives-section')}
                className="hover:text-[#BA4C70] transition-colors"
              >
                Archives
              </button>
              <button
                onClick={() => scrollToSection('things-section')}
                className="hover:text-[#BA4C70] transition-colors"
              >
                21 Things
              </button>
              <button
                onClick={() => scrollToSection('wishing-jar-section')}
                className="hover:text-[#BA4C70] transition-colors"
              >
                Wishes
              </button>
              <button
                onClick={() => scrollToSection('cake-section')}
                className="hover:text-[#BA4C70] transition-colors text-[#BA4C70] font-bold"
              >
                Make a Wish 🎂
              </button>
            </nav>
          )}

          {/* Sound & Music Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleMusic}
              title={isPlaying ? "Pause background music" : "Play sweet background music"}
              aria-label="Toggle background music"
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 shadow-sm border ${isPlaying
                  ? 'bg-[#F2C8D1] text-[#4A303E] border-[#DFA9B8] shadow-glow'
                  : 'bg-[#FFF7F5] text-[#8D6878] border-[#F2C8D1] hover:bg-[#F9E4E8]'
                }`}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#BA4C70] animate-pulse" />
                  <span className="hidden sm:inline font-semibold">Hannah Montana 🎵</span>
                  {/* Subtle animated sound wave bars */}
                  <span className="flex items-center gap-0.5 ml-0.5">
                    <span className="w-0.5 h-3 bg-[#BA4C70] rounded-full animate-pulse"></span>
                    <span className="w-0.5 h-4 bg-[#BA4C70] rounded-full animate-pulse delay-100"></span>
                    <span className="w-0.5 h-2 bg-[#BA4C70] rounded-full animate-pulse delay-200"></span>
                  </span>
                </>
              ) : (
                <>
                  <Music className="w-4 h-4 text-[#8D6878]" />
                  <span className="hidden sm:inline">Play Music 🎵</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Bottom Music Pill for Quick Mobile Accessibility */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <button
          onClick={handleToggleMusic}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border transition-transform active:scale-95 ${isPlaying
              ? 'bg-[#F2C8D1] border-[#BA4C70] text-[#BA4C70] shadow-glow'
              : 'bg-[#FFF7F5] border-[#F2C8D1] text-[#8D6878]'
            }`}
          aria-label="Music Toggle"
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 animate-pulse" />
          ) : (
            <Music className="w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
};

