/**
 * =======================================================================
 * ACLA'S LITTLE UNIVERSE — CHAPTER 21
 * Central Configuration & Content Data File
 * =======================================================================
 * 
 * Birthday Star:
 * Name: Acla (Full Name: Nafisa Putri Acla)
 * Milestone: 21st Birthday (10 November 2026)
 * Prodi: Anastesi (Anesthesiology)
 * 
 * Tone of Voice:
 * Effortless, vibey Gen Z Indo-English mix (natural aku-kamu / u-i dynamics).
 * Deep, affectionate, witty, heartfelt, and aesthetic.
 * Full name "Nafisa Putri Acla" is featured in deep, milestone moments!
 */

export const birthdayData = {
  // Birthday Star Details
  birthdayPerson: {
    name: "Acla",
    fullName: "Nafisa Putri Acla",
    turningAge: 21,
    birthDate: "November 10, 2026",
    zodiac: "Scorpio ✨",
    tagline: "A Little World Made Just for You",
    themeTitle: "ACLA'S LITTLE UNIVERSE — CHAPTER 21",
  },

  // Audio & Music Settings
  audio: {
    title: "Hannah Montana",
    artist: "Christian Leave",
    customTrackUrl: "/audio/bgm.mp3",
    autoPlayPrompt: false,
  },

  // SECTION 01: The Secret Invitation
  invitation: {
    teaser: "A little something made just for you...",
    subTeaser: "The stars whispered that today is literally all about you ✨",
    greeting: "Hey, Acla! Ada surprise kecil made especially for you ♡",
    buttonText: "OPEN YOUR SURPRISE 💌",
    envelopeLabel: "For: Nafisa Putri Acla",
    stampText: "SPECIAL DELIVERY • 21",
    letter: {
      salutation: "Dearest Nafisa Putri Acla,",
      paragraph1: "Welcome to your very own little universe! Still can't believe how far we've come since our JHS era. Dari yang awalnya awkward strangers, tiba-tiba duduk sebangku di pojok belakang, and then boom—you became my absolute favorite person in the whole world. Lewatin masa-masa labil, seasrama, sampai bertahun-tahun LDR, you've always stayed my 911 emergency contact and safest comfort human.",
      paragraph2: "Today, you're officially stepping into Chapter 21! Sahabat terbaik aku yang hatinya super lembut, duta persahabatan tersayang, and genuinely the prettiest soul inside out. Website kecil ini aku bikin from scratch with so much love to celebrate your special milestone and honor every single version of you that bloomed so gracefully.",
      signoff: "Ready to explore your little world?",
      actionPrompt: "Tap below to unlock Chapter 21 ✨",
      buttonUnlock: "ENTER CHAPTER 21 ✨",
    }
  },

  // SECTION 02: Chapter 21 Unlocked Hero
  hero: {
    badge: "CHAPTER 21 UNLOCKED",
    mainHeadline: "HAPPY 21ST BIRTHDAY, ACLA!",
    supportingText: "Chapter 21: A new little universe of possibilities for Nafisa Putri Acla.",
    subtitle: "Celebrating 21 years of Nafisa Putri Acla: my forever 911, my comfort human, and entering your golden main character era ✨",
    dateTag: "10 November 2026",
    scrollHint: "Scroll down to explore your archives",
  },

  // SECTION 03: The Acla Archives (Scrapbook & Polaroid Gallery)
  // 8 Foto asli pilihan urut: 4 Versi Foto Acla + 4 Versi Foto Berdua!
  archives: [
    // 1. Versi Acla: Masa Bayi
    {
      id: 1,
      src: "/photos/photo1.jpg",
      caption: "The origin of our birthday star ✨ Dari bayi udah keliatan gemesnya and destined to be this lovable soul ♡",
      date: "The Beginning ✨",
      location: "Baby Acla Era",
      tapeColor: "pink",
      rotation: "-rotate-2",
      sticker: "sparkle",
      objectPosition: "center 20%",
    },
    // 2. Versi Acla: Childhood Hello Kitty
    {
      id: 2,
      src: "/photos/photo2.jpg",
      caption: "Little Acla in her Hello Kitty era! Senyum ompongnya bener-bener pure sunshine, no debate 🎀",
      date: "Little Girl Era 🎀",
      location: "Hello Kitty Mode",
      tapeColor: "lavender",
      rotation: "rotate-2",
      sticker: "heart",
      objectPosition: "center 20%",
    },
    // 3. Versi Acla: Solo Savor Bakery Cafe
    {
      id: 3,
      src: "/photos/photo3.jpg",
      caption: "Effortless, chic, and always pretty. Savoring cute cafe moments like the main character she is ☕",
      date: "Cafe Corner ☕",
      location: "Savor Bakery Cafe",
      tapeColor: "cream",
      rotation: "-rotate-1",
      sticker: "crown",
      objectPosition: "center 25%",
    },
    // 4. Versi Acla: Solo Gallery Pastel Clouds
    {
      id: 4,
      src: "/photos/photo4.jpg",
      caption: "Nafisa Putri Acla in her soft girl glow ✨ Radiant, graceful, and always effortless with her sweet smile.",
      date: "Radiant & Proud 🩺",
      location: "Under Pastel Skies",
      tapeColor: "pink",
      rotation: "rotate-3",
      sticker: "sparkle",
      objectPosition: "center 25%",
    },
    // 5. Versi Berdua: JHS Green Batik Uniform
    {
      id: 5,
      src: "/photos/photo5.jpg",
      caption: "Throwback to our JHS era! Kacamata hitam swag and iconic green batik—peak friendship core memory ✌️",
      date: "JHS Era ✌️",
      location: "JHS Memories",
      tapeColor: "lavender",
      rotation: "-rotate-2",
      sticker: "heart",
      objectPosition: "center 25%",
    },
    // 6. Versi Berdua: Night Hug Under Tree
    {
      id: 6,
      src: "/photos/photo6.jpg",
      caption: "That warm, unfiltered bestie hug. Ketawa lepas tengah malem and always being each other's comfort human ♡",
      date: "Warmest Hugs ♡",
      location: "Night Strolls",
      tapeColor: "cream",
      rotation: "rotate-2",
      sticker: "bow",
      objectPosition: "center center",
    },
    // 7. Versi Berdua: Photobooth Studio Red Curtains
    {
      id: 7,
      src: "/photos/photo7.jpg",
      caption: "Studio photobooth vibes. Through every single season and life chapter, you're forever my 911 safe space 💌",
      date: "Safe Space 💌",
      location: "Photobooth Studio",
      tapeColor: "pink",
      rotation: "-rotate-1",
      sticker: "sparkle",
      objectPosition: "center 30%",
    },
    // 8. Versi Berdua: City Street Night Silly Pose
    {
      id: 8,
      src: "/photos/photo8.jpg",
      caption: "Silly poses, city lights, and endless memories. From JHS era to Chapter 21, always gonna be by your side 🥂",
      date: "Chapter 21 Milestone 🥂",
      location: "City Lights & Chaos",
      tapeColor: "lavender",
      rotation: "rotate-1",
      sticker: "heart",
      objectPosition: "center 40%",
    },
  ],

  // SECTION 04: 21 Things About You (Gen Z Indo-English Mix, Aku-Kamu Tone, Deep & Heartfelt)
  thingsAboutYou: [
    {
      id: 1,
      number: "01",
      category: "A reminder of how amazing you are",
      title: "Literally My 911 Emergency Contact",
      message: "No matter how crazy or chaotic life gets, kamu tuh orang pertama yang selalu aku cari. My literal 911. Satu-satunya orang yang bikin aku bisa cerita apa aja without the slightest fear of being judged.",
      badge: "My 911 ♡",
      accent: "blush"
    },
    {
      id: 2,
      number: "02",
      category: "A little reason to smile",
      title: "Our Silent Call Ritual is Undefeated",
      message: "The way kita bisa video call or telponan berjam-jam diem-dieman tanpa canggung sama sekali. Just having your presence on the other side of the screen is already enough to make everything feel grounded and calm.",
      badge: "Comfort Hack ✨",
      accent: "lavender"
    },
    {
      id: 3,
      number: "03",
      category: "Something worth celebrating",
      title: "Smart, Dedicated & Slaying It",
      message: "Kuliah anastesi tuh jelas ga gampang, but look at you handling all those hectic weeks! Di tengah seabrek kegiatan dan kesibukan kamu, I'm honestly so in awe of how smart and hardworking you are. Super proud of you, Cla!",
      badge: "So Proud of U ✨",
      accent: "rose"
    },
    {
      id: 4,
      number: "04",
      category: "A reminder to be kind to yourself",
      title: "Please Stop Over-Blaming Yourself",
      message: "You have such a soft, empathetic heart that sometimes pas ada situasi yang harusnya kamu berhak marah, kamu malah ujungnya ngerasa bersalah sendiri. Please remember, Cla: you're allowed to set boundaries and protect your own peace.",
      badge: "Gentle Reminder ☁️",
      accent: "cream"
    },
    {
      id: 5,
      number: "05",
      category: "A reminder of how amazing you are",
      title: "You Deserve That Same Energy",
      message: "Kamu tuh selalu punya cara buat bikin orang lain ngerasa ditemenin and valued. But please know this: kamu juga sepantas itu buat didengerin, dirawat, dan diperjuangin by the people around you. You deserve all the love you pour out ♡",
      badge: "Precious Soul 🌸",
      accent: "blush"
    },
    {
      id: 6,
      number: "06",
      category: "Something worth celebrating",
      title: "Duta Persahabatan Tersayang",
      message: "Your energy is genuinely magnetic! Gatau kenapa, tapi caramu membawa diri selalu bikin orang ngerasa safe and welcomed. Temen di mana-mana because your kindness is truly pure and real, never made up.",
      badge: "Social Butterfly 🦋",
      accent: "lavender"
    },
    {
      id: 7,
      number: "07",
      category: "A little wish for your future",
      title: "Unshakable Peace of Mind",
      message: "My biggest wish for your 21st chapter: semoga hati dan pikiran kamu selalu adem. May the universe protect you from overthinking, clear away any heavy doubts, and give you the sweetest peace of mind you truly deserve.",
      badge: "Inner Peace 🕊️",
      accent: "rose"
    },
    {
      id: 8,
      number: "08",
      category: "A reminder of how amazing you are",
      title: "Your Forgiving & Loving Soul",
      message: "You have the kind of big, graceful heart that chooses understanding and forgiveness over holding grudges. Having a best friend with a soul as pure and forgiving as yours is genuinely my biggest blessing in this lifetime.",
      badge: "Huge Heart ♡",
      accent: "cream"
    },
    {
      id: 9,
      number: "09",
      category: "Something worth celebrating",
      title: "From Chaotic Teens to Chapter 21",
      message: "Dari zaman kita yang masih bocah labil di JHS era sampai sekarang udah tumbuh jadi sosok dewasa yang bijak, mandiri, dan anggun. Watching your personal growth throughout these years has been one of my favorite things ever.",
      badge: "Growing Gracefully 🌱",
      accent: "blush"
    },
    {
      id: 10,
      number: "10",
      category: "A reminder to be kind to yourself",
      title: "You Don't Have to Carry It Alone",
      message: "Kalau lagi ada hari di mana kamu ngerasa drained atau overwhelmed sama perkuliahan dan dunia luar, remember that you don't always have to be the strong one. Pintuku selalu kebuka lebar whenever you need a safe place to vent or cry.",
      badge: "Safe Haven 💌",
      accent: "lavender"
    },
    {
      id: 11,
      number: "11",
      category: "A little reason to smile",
      title: "That Contagious Laugh of Yours",
      message: "Tawa kamu tuh bener-bener mood booster tanpa tanding! Kalau kamu udah ketawa lepas, the whole room just instantly feels lighter and happier. Please never let anything in this world dim that radiant spark of yours.",
      badge: "Pure Sunshine ☀️",
      accent: "rose"
    },
    {
      id: 12,
      number: "12",
      category: "Something worth celebrating",
      title: "Officially 21: Nafisa Putri Acla",
      message: "Happy 21st milestone to the one and only Nafisa Putri Acla! Welcome to your golden twenties. May this new chapter bring bolder dreams, unforgettable core memories, soft days, and full main character energy ✨",
      badge: "Chapter 21 Era ✨",
      accent: "cream"
    },
    {
      id: 13,
      number: "13",
      category: "A little reason to smile",
      title: "When You're Quiet, I Know You're Happy",
      message: "Walau kita LDR and sometimes we don't text for days because of your busy routines, aku selalu tau kalau kamu lagi enjoying your days. Seeing you happy, busy, and thriving will always be my absolute peace.",
      badge: "Quiet Comfort ☕",
      accent: "blush"
    },
    {
      id: 14,
      number: "14",
      category: "A reminder of how amazing you are",
      title: "The Way You Truly See People",
      message: "Kamu punya kepekaan yang langka banget. The way you intuitively notice what people feel behind their smiles, how much you care without asking for anything in return—you are truly an angelic soul, Cla.",
      badge: "Deep Empathy 🌿",
      accent: "lavender"
    },
    {
      id: 15,
      number: "15",
      category: "A little wish for your future",
      title: "Distance Literally Means Nothing",
      message: "Beda kota dan kesibukan masing-masing ga pernah ngurangin the love we have for each other. Even when we haven't met in months, the second we talk it's like zero time has passed. That's how I know our friendship is forever.",
      badge: "LDR Besties ✈️",
      accent: "rose"
    },
    {
      id: 16,
      number: "16",
      category: "A reminder to be kind to yourself",
      title: "Trust Your Beautiful Pace",
      message: "Hidup ini bukan kompetisi siapa yang paling cepet, Cla. Your timeline is uniquely crafted for you. Every dream and good thing will bloom at the exact perfect season, so take your time and enjoy every step.",
      badge: "Divine Timing ⏳",
      accent: "cream"
    },
    {
      id: 17,
      number: "17",
      category: "A little reason to smile",
      title: "Hyped Over the Smallest Things",
      message: "The way you get excited over cute little things—from pretty skies, something cute, aesthetic treats, to random silly moments. That childlike wonder of yours is something so precious. Never lose that charm ya!",
      badge: "Little Joys 🍰",
      accent: "blush"
    },
    {
      id: 18,
      number: "18",
      category: "A reminder of how amazing you are",
      title: "Always in Each Other's Corner",
      message: "Ingat ga waktu kita saling nemenin nangis across the phone? Mau lagi di jalan atau di mana pun, we always show up for each other. Having that kind of unconditional loyalty is something I will never take for granted.",
      badge: "Comfort Human 🫂",
      accent: "lavender"
    },
    {
      id: 19,
      number: "19",
      category: "A little wish for your future",
      title: "Smooth Sailing for All Your Aspirations",
      message: "Whatever secret dreams you keep whispering to the stars, semoga Chapter 21 provides all the easiest paths for you. Kuliah yang lancar, every ambition unlocks smoothly, and happiness follows you everywhere.",
      badge: "Big Dreams 🌟",
      accent: "rose"
    },
    {
      id: 20,
      number: "20",
      category: "A reminder to be kind to yourself",
      title: "Take a Deep Breath & Give Credit",
      message: "In between hectic exam weeks and crazy routines, take a moment to look back and see how much you've accomplished. You survived all your toughest days gracefully, and you should be so proud of yourself.",
      badge: "Gentle Breath 🌸",
      accent: "cream"
    },
    {
      id: 21,
      number: "21",
      category: "Something worth celebrating",
      title: "Forever Irreplaceable — Nafisa Putri Acla",
      message: "Out of 8 billion souls on this planet, there's only one Nafisa Putri Acla. Thank you for existing, thank you for growing up with me, and thank you for being the best friend I could ever ask for. You are truly my person ♡",
      badge: "One in a Billion 👑",
      accent: "rose"
    },
  ],

  // SECTION 05: A Jar Full of Wishes (Toples Harapan Bintang)
  wishingJar: {
    title: "A Jar Full of Wishes",
    subtitle: "A pastel glass jar filled with secret wishes and cosmic blessings for Acla ✨",
    instructions: "Tap the jar to draw a folded wish note!",
    wishes: [
      {
        id: 1,
        note: "Semoga rutinitas kuliah always treats you kindly, dijauhin dari overthinking, and smoothly passing every exam & praktikum ✨",
        sender: "— Daily Cheerleader ✨",
        color: "bg-[#FFF2F5]"
      },
      {
        id: 2,
        note: "May your peace of mind be completely untouchable and your heart always guarded with soft love 🕊️",
        sender: "— Inner Peace 🕊️",
        color: "bg-[#F5EEFB]"
      },
      {
        id: 3,
        note: "Semoga all the genuine kindness and warmth that you pour into this world always finds its way back to you a million times over ♡",
        sender: "— Cosmic Karma ♡",
        color: "bg-[#FFF9F2]"
      },
      {
        id: 4,
        note: "May your 21st era be filled with spontaneous adventures, sweet matcha lattes, and zero bad vibes 🍵✨",
        sender: "— Good Vibes Only ✨",
        color: "bg-[#FFF2F5]"
      },
      {
        id: 5,
        note: "Gentle reminder buat kamu: please stop blaming yourself for things you can't control. You're already doing amazing, Cla! ☁️",
        sender: "— Be Kind to Yourself ☁️",
        color: "bg-[#F5EEFB]"
      },
      {
        id: 6,
        note: "May our random silent calls and late-night heart-to-hearts stay as our undefeated bestie hacks through every busy season ahead 📞♡",
        sender: "— Forever 911 📞",
        color: "bg-[#FFF9F2]"
      },
      {
        id: 7,
        note: "Semoga kamu selalu dikelilingi orang-orang yang treat you with the exact same dedication and loyalty that you give them 🌟",
        sender: "— Precious Soul 🌟",
        color: "bg-[#FFF2F5]"
      },
      {
        id: 8,
        note: "May your coffee dates be sweet, your pastries fluffy, and your contagious laugh always as bright as sunshine 🍰",
        sender: "— Sweet Tooth Fairy 🍰",
        color: "bg-[#F5EEFB]"
      },
      {
        id: 9,
        note: "Semoga persahabatan kita dari JHS era awet terus sampai kita nenek-nenek nanti ♡",
        sender: "— JHS Bestie ✨",
        color: "bg-[#FFF9F2]"
      },
      {
        id: 10,
        note: "Always remember: no matter how chaotic life gets, my line is forever open for you. You never have to feel alone in this world 💌",
        sender: "— Your Safe Space 💌",
        color: "bg-[#FFF2F5]"
      },
      {
        id: 11,
        note: "Here’s to softer days, glowing skin, bigger dreams, and thriving through your golden twenties, Nafisa Putri Acla! ✨",
        sender: "— Chapter 21 Star ✨",
        color: "bg-[#F5EEFB]"
      },
      {
        id: 12,
        note: "Semoga every single secret wish yang kamu bisikkan pas tiup lilin tadi gets granted in the most delightful plot twist ever 🎂♡",
        sender: "— The Universe Whisper 🎂",
        color: "bg-[#FFF9F2]"
      }
    ]
  },

  // SECTION 06: Make a Wish & Cake Celebration
  cakeCelebration: {
    title: "MAKE A WISH, ACLA! 🎂",
    subtitle: "21 candles for 21 years of your wonderful light.",
    instruction: "Close your eyes, make your most heartfelt wish, and blow out all 21 candles ✨",
    blowButtonText: "BLOW THE CANDLES 🎂",
    blownButtonText: "WISH MADE! ✨",
    reigniteText: "Light the candles again 🕯️",
    finalLetter: {
      headline: "Happy 21st Birthday, Nafisa Putri Acla!",
      messageLine1: "Dari bangku belakang di JHS era sampai sekarang udah lewatin LDR dan masa-masa kuliah kamu yang super keren—aku bener-bener bersyukur to have you by my side through literally every chapter.",
      messageLine2: "Makasih udah selalu jadi my 911, my comfort space, dan orang dengan hati paling tulus yang pernah aku kenal. Di Chapter 21 ini, please be kinder to yourself, remember that you are so worthy of love, and never ever feel alone. Keep shining bright, Cla!",
      signature: "Forever your bestie & biggest cheerleader, ♡",
      subSignature: "Happy 21st Birthday to Nafisa Putri Acla — an irreplaceable soul.",
      dateStamp: "November 10, 2026 • Chapter 21 of Nafisa Putri Acla"
    }
  }
};
