/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A5D8FF',
          DEFAULT: '#071c1f',
          dark: '#1E3A8A',
        },
        secondary: {
          light: '#FFE6E6',
          DEFAULT: '#f8796c',
          dark: '#B91C1C',
        },
      }
    },
  },
  plugins: [],
}