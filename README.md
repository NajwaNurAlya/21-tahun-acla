# 🌸 ACLA'S LITTLE UNIVERSE — CHAPTER 21 ♡

> *"A Little World Made Just for You."*  
> An interactive digital scrapbook and birthday surprise experience celebrating **Acla's 21st Birthday** (November 10, 2026).

---

## ✨ Features & Storyline Walkthrough

1. **Section 01 — The Secret Invitation**
   - Soft pastel envelope with a wax seal, washi tape, and custom postmark stamp (`ACLA • CHAPTER 21`).
   - "A little something has been made just for you..."
   - Interactive button: **"OPEN YOUR SURPRISE"**
   - Smooth opening animation, confetti/sparkle burst, reveals a personal birthday letter with an invitation to unlock Chapter 21.

2. **Section 02 — Chapter 21 Unlocked (Hero)**
   - Bold, editorial typography: *"HAPPY 21ST BIRTHDAY, ACLA!"*
   - Subtitle: *"Chapter 21: A new little universe of possibilities."*
   - Large expressive centerpiece **21** adorned with ribbons and washi tape.
   - Milestone badges: *7,670 Days of Pure Light*, *184,000+ Hours of Joy*, *1 Irreplaceable Girl ♡*.
   - Interactive **"Toss Birthday Confetti ✨"** button and playful scroll indicator.

3. **Section 03 — The Acla Archives (Scrapbook & Polaroid Gallery)**
   - Aesthetic polaroids with randomized rotations, washi tapes (pink, lavender, cream), and paperclips.
   - Curated high-aesthetic default memories with handwritten captions and location tags.
   - Interactive lightbox with keyboard arrows (`←` / `→`) and escape key navigation.

4. **Section 04 — 21 Things About You**
   - Exactly **21 interactive cards** across 5 heartwarming categories:
     - *A little reason to smile*
     - *Something worth celebrating*
     - *A reminder of how amazing you are*
     - *A little wish for your future*
     - *A reminder to be kind to yourself*
   - Category filter pills + live discovery progress counter (*"Discovered: X of 21"*).
   - Smooth card reveal micro-interactions and celebration confetti upon revealing all 21!

5. **Section 05 — A Jar Full of Wishes**
   - Translucent pastel-pink glass jar with cork stopper, ribbon bow, floating origami stars, and folded notes.
   - Interactive **"PICK A WISH ✨"** button (or click jar directly) to randomly unfold a heartfelt wish from the stars.

6. **Section 06 — Make a Wish! (The 21-Candle Cake Celebration)**
   - Illustrated multi-tier birthday cake with **exactly 21 candles** (11 back row, 10 front row).
   - Flickering flame animations (`animate-flame`).
   - Click **"BLOW OUT THE CANDLES 🎂"**: triggers realistic breath whoosh sound, flames extinguish with rising smoke puffs, a grand soft-pastel confetti cannon, and reveals the warm celebratory letter:
     > *"Here's to 21, Acla!"*  
     > *"May this new chapter bring you beautiful surprises, happy little moments, new adventures, and everything your heart has been wishing for."*  
     > *"Keep growing, keep glowing, and never forget how special you are."*  
     > *"With lots of love, ♡"*
   - Can reignite candles to experience the moment again!

7. **Sound & Music System**
   - Built-in soothing lofi music box synthesizer (zero external dependencies, works offline and on all browsers).
   - Micro sound effects: paper rustle, pop, celebration chimes, and candle blow whoosh.
   - Floating music toggle in header & floating pill on mobile.
   - Easily swap in your own MP3 track via configuration.

---

## 🛠️ Quick Start & Running Locally

The project is built with **React + Vite + Tailwind CSS**.

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start local development server
npm run dev

# 3. Open in your browser:
http://localhost:5173
```

To create a production build:
```bash
npm run build
npm run preview
```

---

## 🎨 How to Customize (Everything is in One File!)

All text, memories, photos, 21 cards, wishing notes, and audio settings are centralized in:

📂 `src/data/birthdayContent.js`

### 1. Replacing Photos with Acla's Real Pictures
1. Place photo files into the `public/photos/` directory (e.g. `public/photos/acla1.jpg`).
2. In `src/data/birthdayContent.js`, update the `archives` array:
```javascript
archives: [
  {
    id: 1,
    src: "/photos/acla1.jpg", // path inside public folder
    caption: "That effortless, radiant smile that lights up every room.",
    date: "Spring 2026",
    location: "Golden Hour Glow",
    tapeColor: "pink",
    rotation: "-rotate-2",
  },
  // ...
]
```

### 2. Editing the 21 Things About You
In `src/data/birthdayContent.js`, find `thingsAboutYou`. You can freely modify the `title`, `message`, `category`, and `badge` of any of the 21 cards.

### 3. Adding Your Own Background Music
If you have a custom song (e.g. Acla's favorite song or acoustic track):
1. Place the MP3 file in `public/audio/birthday.mp3`.
2. In `src/data/birthdayContent.js`:
```javascript
audio: {
  title: "Acla's Favorite Song",
  artist: "Acoustic Melody",
  customTrackUrl: "/audio/birthday.mp3", // <-- Add path here
}
```
*Note: If left as `null`, the website automatically plays the built-in gentle lofi music box melody!*

---

## 📱 Responsiveness & Browser Compatibility
- Tested and styled for seamless responsiveness across mobile phones (iPhone/Android), tablets, laptops, and desktop displays.
- Touch-friendly tap interactions for mobile users with no hover traps.
- Smooth scrolling and zero horizontal scrollbar leaks.

💖 *Happy 21st Birthday, Acla!*

