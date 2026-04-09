/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F4D03F',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          lighter: '#1A1A1A',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
