# Panduan Foto: The Acla Archives (Solo & Berdua)

Untuk memasukkan foto asli:
1. Taruh file foto di folder ini (`public/photos/`), misalnya:
   - `acla-solo-1.jpg`, `acla-solo-2.jpg`, dst. (Foto Acla sendiri)
   - `kita-berdua-1.jpg`, `kita-berdua-2.jpg`, dst. (Foto kalian berdua)

2. Buka file `src/data/birthdayContent.js`, lalu di bagian `archives`:
   Atur `src` dan `category`:
   - Gunakan `category: "solo"` untuk foto Acla sendiri
   - Gunakan `category: "duo"` untuk foto kalian berdua

Contoh:
```javascript
{
  id: 1,
  category: "solo", // atau "duo"
  badgeText: "Acla's Glow",
  src: "/photos/acla-solo-1.jpg",
  caption: "Senyum Acla yang selalu bikin hari jadi cerah.",
  date: "Spring 2026",
  location: "Tempat Favorit",
  tapeColor: "pink",
  rotation: "-rotate-2",
},
{
  id: 5,
  category: "duo",
  badgeText: "Favorite Duo",
  src: "/photos/kita-berdua-1.jpg",
  caption: "Ketawa bareng sampai sakit perut!",
  date: "Momen Seru",
  location: "Hangout Bareng",
  tapeColor: "lavender",
  rotation: "rotate-2",
}
```
