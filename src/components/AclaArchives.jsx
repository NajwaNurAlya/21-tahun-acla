import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Heart, Sparkles, MapPin, Calendar, Eye, EyeOff } from 'lucide-react';
import { birthdayData } from '../data/birthdayContent';
import { audioService } from '../services/AudioService';
import { RibbonBow, WashiTape, PaperClip, SparkleDoodle } from './ScrapbookDecor';

export const AclaArchives = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [unblurredIds, setUnblurredIds] = useState(new Set());

  const openLightbox = (photo, index) => {
    audioService.playPop();
    // Mark as unblurred when opened
    setUnblurredIds((prev) => new Set(prev).add(photo.id));
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIdx = (currentIndex + 1) % birthdayData.archives.length;
    const nextItem = birthdayData.archives[nextIdx];
    setCurrentIndex(nextIdx);
    setSelectedPhoto(nextItem);
    setUnblurredIds((prev) => new Set(prev).add(nextItem.id));
    audioService.playPop();
  };

  const prevPhoto = () => {
    const prevIdx = (currentIndex - 1 + birthdayData.archives.length) % birthdayData.archives.length;
    const prevItem = birthdayData.archives[prevIdx];
    setCurrentIndex(prevIdx);
    setSelectedPhoto(prevItem);
    setUnblurredIds((prev) => new Set(prev).add(prevItem.id));
    audioService.playPop();
  };

  const handleUnblurAll = () => {
    audioService.playChime();
    const allIds = new Set(birthdayData.archives.map((item) => item.id));
    setUnblurredIds(allIds);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, currentIndex]);

  return (
    <section id="archives-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF7F5] overflow-hidden">
      {/* Background Scrapbook Grid Overlay */}
      <div className="absolute inset-0 scrapbook-grid opacity-60 pointer-events-none"></div>

      {/* Decorative Stickers */}
      <div className="absolute top-12 left-8 opacity-40 pointer-events-none hidden md:block notranslate" translate="no">
        <SparkleDoodle className="w-8 h-8 text-[#BA4C70]" />
      </div>
      <div className="absolute bottom-16 right-12 opacity-50 pointer-events-none hidden md:block notranslate" translate="no">
        <RibbonBow className="w-12 h-12 text-[#DFA9B8]" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2C8D1]/40 border border-[#DFA9B8]/40 text-xs font-semibold uppercase tracking-widest text-[#8D6878] mb-3">
            <Camera className="w-3.5 h-3.5 text-[#BA4C70]" />
            <span>Memory Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A303E] mb-3">
            The Acla Archives
          </h2>

          <p className="font-handwritten text-xl sm:text-2xl text-[#BA4C70] font-bold">
            "A little scrapbook of moments, milestones, and your radiant smiles."
          </p>

          <p className="text-xs sm:text-sm text-[#8D6878] mt-2 max-w-md mx-auto">
            Semua foto dibuat misterius dan blur—klik foto polaroid untuk membuka memori aslinya secara jelas ✨
          </p>

          {/* Unblur Progress & Quick Reveal Action */}
          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-[#8D6878]">
            <span>
              Terbuka: <strong className="text-[#BA4C70]">{unblurredIds.size}</strong> dari {birthdayData.archives.length} foto
            </span>
            {unblurredIds.size < birthdayData.archives.length && (
              <button
                onClick={handleUnblurAll}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#BA4C70] hover:underline cursor-pointer"
              >
                <Sparkles className="w-3 h-3" />
                <span>Buka semua foto sekaligus</span>
              </button>
            )}
          </div>
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
          {birthdayData.archives.map((item, index) => {
            const isUnblurred = unblurredIds.has(item.id);

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item, index)}
                className={`group relative bg-white p-3.5 pb-5 rounded-sm shadow-polaroid hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-0 cursor-pointer ${item.rotation}`}
              >
                {/* Scrapbook Tape / Paperclip */}
                {index % 3 === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 notranslate" translate="no">
                    <WashiTape color="pink" />
                  </div>
                )}
                {index % 3 === 1 && (
                  <div className="absolute -top-3 right-4 z-20 notranslate" translate="no">
                    <WashiTape color="lavender" className="rotate-3" />
                  </div>
                )}
                {index % 3 === 2 && (
                  <div className="absolute -top-4 left-4 z-20 notranslate" translate="no">
                    <PaperClip className="w-6 h-10 text-[#BA4C70] drop-shadow-xs" />
                  </div>
                )}

                {/* Photo Frame in Polaroid Card - Edge-to-edge, zero side spaces! */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-[#F9E4E8]/40 mb-3">
                  <img
                    src={item.src}
                    alt={item.caption}
                    style={{ objectPosition: item.objectPosition || 'center 25%' }}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out ${isUnblurred ? 'blur-0 scale-100 group-hover:scale-105' : 'blur-md scale-110'
                      }`}
                    loading="lazy"
                  />

                  {/* Frosted Blur Overlay (When photo is still blurred) */}
                  {!isUnblurred && (
                    <div className="absolute inset-0 z-20 bg-[#FFF7F5]/35 backdrop-blur-xs flex flex-col items-center justify-center p-3 text-center transition-opacity duration-300 group-hover:bg-[#FFF7F5]/20">
                      <div className="w-10 h-10 rounded-full bg-white/95 shadow-sm border border-[#F2C8D1] flex items-center justify-center text-[#BA4C70] mb-2 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-5 h-5 animate-pulse" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-sans font-bold text-[#BA4C70] shadow-xs">
                        Klik untuk Buka Foto ✨
                      </span>
                    </div>
                  )}

                  {/* Floating Date Tag */}
                  <div className="absolute bottom-2 right-2 z-20 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-sans font-semibold text-[#8D6878] shadow-xs">
                    {item.date}
                  </div>
                </div>

                {/* Polaroid Bottom Caption (Handwritten feel) */}
                <div className="px-1 text-center">
                  <p className="font-handwritten text-lg text-[#5C3D4E] font-bold line-clamp-2 leading-tight">
                    <span>{item.caption}</span>
                  </p>
                  <span className="block mt-1 text-[11px] font-serif italic text-[#BA4C70]">
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Heartfelt Note for the Archives */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFFBFB] border border-[#F2C8D1]/70 text-xs text-[#8D6878] max-w-xl mx-auto shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#BA4C70] fill-[#BA4C70]" />
            <span>Setiap foto menyimpan chapter perjalanan kita: dari JHS era sampai Chapter 21 ♡</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Always 100% Clear and Sharp) */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#F2C8D1]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 text-[#5C3D4E] hover:bg-[#F9E4E8] flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#5C3D4E] flex items-center justify-center shadow-md transition-all active:scale-90 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#5C3D4E] flex items-center justify-center shadow-md transition-all active:scale-90 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-3/5 bg-gradient-to-b from-[#2E2028] via-[#24171E] to-[#1E1218] flex items-center justify-center p-3 sm:p-5 min-h-[340px] md:min-h-[480px] max-h-[75vh] overflow-hidden">
                {/* Ambient glowing backdrop */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src={selectedPhoto.src}
                    alt=""
                    className="w-full h-full object-cover blur-2xl scale-125 opacity-30"
                    aria-hidden="true"
                  />
                </div>

                {/* Centered, uncropped high-resolution photo */}
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  className="relative z-10 max-h-[70vh] max-w-full w-auto h-auto object-contain object-center shadow-2xl rounded-xs"
                />
              </div>

              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FFFBFB]">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#F9E4E8] text-xs font-semibold text-[#BA4C70] tracking-wider uppercase">
                      Memory #{currentIndex + 1}
                    </span>
                    <span className="text-xs text-[#8D6878]">
                      of {birthdayData.archives.length}
                    </span>
                  </div>

                  <p className="font-handwritten text-2xl sm:text-3xl text-[#4A303E] font-bold leading-snug mb-4">
                    <span>{selectedPhoto.caption}</span>
                  </p>

                  <div className="space-y-2 text-xs text-[#8D6878] border-t border-[#F2C8D1]/40 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#BA4C70]" />
                      <span>{selectedPhoto.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#BA4C70]" />
                      <span>{selectedPhoto.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2C8D1]/40 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#BA4C70] font-handwritten text-base">
                    <Heart className="w-4 h-4 fill-[#BA4C70]" />
                    <span>Acla's Chapter 21</span>
                  </div>

                  <span className="text-xs text-[#8D6878] font-sans">
                    Use ← / → keys
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
