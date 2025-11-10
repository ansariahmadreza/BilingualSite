/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // معادل sm (min-width: 640px)
        'max-sm': { max: '639px' },

        // معادل md (min-width: 768px)
        'max-md': { max: '767px' },

        // معادل lg (min-width: 1024px)
        'max-lg': { max: '1023px' },

        // معادل xl (min-width: 1280px)
        'max-xl': { max: '1279px' },

        // معادل 2xl (min-width: 1536px)
        'max-2xl': { max: '1535px' },
      },
      height: {
        "custom": "412px"
      }
    },

  },
  plugins: [
    require('tailwindcss-logical'),
  ],
};
