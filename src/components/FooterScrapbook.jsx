import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { RibbonBow, PostageStamp } from './ScrapbookDecor';

export const FooterScrapbook = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 bg-[#FFF7F5] border-t border-[#F2C8D1]/60 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Ribbon Bow */}
        <div className="notranslate" translate="no">
          <RibbonBow className="w-10 h-10 text-[#DFA9B8] mb-4" />
        </div>

        <h3 className="font-serif italic font-bold text-xl md:text-2xl text-[#5C3D4E] mb-2">
          {birthdayData.birthdayPerson.name}'s Little Universe
        </h3>

        <p className="font-handwritten text-xl text-[#BA4C70] font-bold mb-4">
          Chapter 21 • A World Made Just for You ♡
        </p>

        <p className="text-xs text-[#8D6878] max-w-sm mb-6">
          May everyday in Chapter 21 bring you soft peace, lots of good laughs, and reasons to smile. You deserve all the good things, Cla.
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#F9E4E8] text-[#8D6878] hover:text-[#BA4C70] border border-[#F2C8D1] text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs cursor-pointer mb-8"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top ↑</span>
        </button>

        {/* Stamp */}
        <div className="notranslate" translate="no">
          <PostageStamp label="ACLA • CHAPTER 21" className="rotate-2" />
        </div>

        <div className="mt-8 text-[11px] text-[#8D6878]/70 flex items-center gap-1.5">
          <span>Crafted with all my love & stardust</span>
          <Heart className="w-3 h-3 text-[#BA4C70] fill-[#BA4C70]" />
          <span>for dearest Acla</span>
        </div>
      </div>
    </footer>
  );
};
