/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCFA',
          100: '#FFF7F5', // Cloud Cream
          200: '#FDF0EC',
        },
        blush: {
          50: '#FCF3F5',
          100: '#F9E4E8', // Blush Pink
          200: '#F5D3DB',
          300: '#F2C8D1', // Soft Rose
        },
        dusty: {
          300: '#EABECB',
          400: '#DFA9B8', // Dusty Pink
          500: '#C98799',
        },
        lavender: {
          100: '#F3EEF9',
          200: '#E9DDF3', // Lavender
          300: '#DCBFF0',
        },
        mauve: {
          300: '#B0889B',
          400: '#8D6878', // Mauve
          500: '#734E5F',
          600: '#5C3D4E',
          700: '#4A303E',
          900: '#321E29',
        },
        roseGold: '#D89BAE',
        champagne: '#F8E9D2',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        handwritten: ['"Caveat"', 'cursive'],
        script: ['"Sacramento"', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-16px) rotate(1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.9', transform: 'scaleY(1)' },
          '50%': { opacity: '0.6', transform: 'scaleY(0.85) scaleX(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
        flicker: 'flicker 0.4s ease-in-out infinite',
        shimmer: 'shimmer 3s infinite linear',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(141, 104, 120, 0.08)',
        'polaroid': '0 10px 25px -5px rgba(141, 104, 120, 0.15), 0 8px 10px -6px rgba(141, 104, 120, 0.1)',
        'envelope': '0 20px 40px -15px rgba(141, 104, 120, 0.25)',
        'glow': '0 0 25px rgba(242, 200, 209, 0.6)',
      }
    },
  },
  plugins: [],
}

