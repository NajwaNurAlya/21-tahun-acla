/**
 * Audio Service for Acla's Little Universe
 * Provides ambient lofi music box synthesizer + delightful micro sound effects
 * Supports optional external custom MP3 file via HTML5 Audio
 */

class AudioService {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.customAudio = null;
    this.useCustomAudio = false;
    this.noteIndex = 0;
    this.listeners = new Set();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) => {
      try { fn(this.isPlaying); } catch (e) { console.error(e); }
    });
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft Music Box Melody Sequence (Dreamy, soft pastel lullaby in F Major / D Minor)
  melody = [
    { note: 349.23, dur: 0.6 }, // F4
    { note: 440.00, dur: 0.6 }, // A4
    { note: 523.25, dur: 0.9 }, // C5
    { note: 659.25, dur: 0.7 }, // E5
    { note: 587.33, dur: 0.8 }, // D5
    { note: 523.25, dur: 0.6 }, // C5
    { note: 440.00, dur: 0.8 }, // A4
    { note: 392.00, dur: 1.0 }, // G4
    { note: 349.23, dur: 0.6 }, // F4
    { note: 392.00, dur: 0.6 }, // G4
    { note: 440.00, dur: 0.8 }, // A4
    { note: 523.25, dur: 1.2 }, // C5
    { note: 587.33, dur: 0.6 }, // D5
    { note: 659.25, dur: 0.6 }, // E5
    { note: 698.46, dur: 1.0 }, // F5
    { note: 523.25, dur: 1.4 }, // C5
  ];

  startMusic(customTrackUrl = null) {
    if (this.isPlaying) return;

    if (customTrackUrl) {
      try {
        if (!this.customAudio) {
          this.customAudio = new Audio(customTrackUrl);
          this.customAudio.loop = true;
          this.customAudio.volume = 0.65;
          this.customAudio.onplay = () => {
            this.isPlaying = true;
            this.useCustomAudio = true;
            this.notify();
          };
          this.customAudio.onpause = () => {
            this.isPlaying = false;
            this.notify();
          };
        }
        this.customAudio.play().then(() => {
          this.isPlaying = true;
          this.useCustomAudio = true;
          this.notify();
        }).catch(err => {
          console.warn("Custom audio playback blocked, falling back to synth:", err);
          this.startSynth();
        });
        return;
      } catch (e) {
        this.startSynth();
        return;
      }
    }

    this.startSynth();
  }

  startSynth() {
    this.initContext();
    if (!this.ctx) return;
    this.isPlaying = true;
    this.useCustomAudio = false;
    this.noteIndex = 0;
    this.notify();
    this.scheduleNextNote();
  }

  scheduleNextNote() {
    if (!this.isPlaying || !this.ctx) return;

    const current = this.melody[this.noteIndex % this.melody.length];
    this.playMusicBoxTone(current.note, current.dur);

    // Occasionally add a soft bass accompaniment note
    if (this.noteIndex % 4 === 0) {
      this.playSoftBass(current.note / 2);
    }

    this.noteIndex++;
    const nextInterval = current.dur * 850;
    this.timer = setTimeout(() => this.scheduleNextNote(), nextInterval);
  }

  playMusicBoxTone(freq, duration = 0.7) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Dual oscillator for rich, warm music box bell tone
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, now); // Sweet bell harmonic

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1600, now);

    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.5);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.6);
    osc2.stop(now + duration + 0.6);
  }

  playSoftBass(freq) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.04, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 2.0);
  }

  stopMusic() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.customAudio) {
      this.customAudio.pause();
    }
    this.notify();
  }

  toggleMusic(customTrackUrl = null) {
    if (this.isPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic(customTrackUrl);
      return true;
    }
  }

  // --- Micro Sound Effects ---

  playChime() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.07);

      gain.gain.setValueAtTime(0.0001, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.06, now + i * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.85);
    });
  }

  playPop() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  playBlowCandle() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Breath / white noise whoosh
    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, now);
    filter.Q.setValueAtTime(2, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(now);
    noise.stop(now + 0.4);

    // Followed by a triumphal celebration sparkle chime!
    setTimeout(() => {
      this.playCelebrationChime();
    }, 400);
  }

  playCelebrationChime() {
    this.initContext();
    if (!this.ctx) return;
    const chords = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C major celebratory arpeggio
    const now = this.ctx.currentTime;
    chords.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0.001, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.09, now + idx * 0.1 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.1 + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 1.3);
    });
  }
}

export const audioService = new AudioService();

