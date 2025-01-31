/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Mono"', 'sans-serif'],
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 0deg, at 50% 50%, blue, purple, purple, blue)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-transparent-bg': {
          '-webkit-text-fill-color': 'transparent',
          '-webkit-background-clip': 'text',
        },
        '.border-animation': {
          animation: 'spin 3s linear infinite',
        },
      });
    }),
  ],
}

