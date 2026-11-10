import React, { useState } from 'react';
import { NavbarMusic } from './components/NavbarMusic';
import { SecretInvitation } from './components/SecretInvitation';
import { ChapterHero } from './components/ChapterHero';
import { AclaArchives } from './components/AclaArchives';
import { ThingsAboutYou } from './components/ThingsAboutYou';
import { WishingJar } from './components/WishingJar';
import { MakeAWishCake } from './components/MakeAWishCake';
import { FooterScrapbook } from './components/FooterScrapbook';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF7F5] selection:bg-[#F2C8D1] selection:text-[#4A303E]">
      {/* Top Navigation & Ambient Music Controller */}
      <NavbarMusic isUnlocked={isUnlocked} />

      {/* SECTION 01 — THE SECRET INVITATION */}
      <SecretInvitation
        isUnlocked={isUnlocked}
        onUnlock={() => setIsUnlocked(true)}
      />

      {/* MAIN UNIVERSE SECTIONS (Available to explore) */}
      <main className={`transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-90'}`}>
        {/* SECTION 02 — CHAPTER 21 UNLOCKED HERO */}
        <ChapterHero />

        {/* SECTION 03 — THE ACLA ARCHIVES (SCRAPBOOK GALLERY) */}
        <AclaArchives />

        {/* SECTION 04 — 21 THINGS ABOUT YOU */}
        <ThingsAboutYou />

        {/* SECTION 05 — A JAR FULL OF WISHES */}
        <WishingJar />

        {/* SECTION 06 — MAKE A WISH! (21 CANDLES & FINALE) */}
        <MakeAWishCake />
      </main>

      {/* SCRAPBOOK FOOTER */}
      <FooterScrapbook />
    </div>
  );
}

