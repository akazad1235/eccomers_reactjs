/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
});

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           light: '#A5D8FF',
//           DEFAULT: '#071c1f',
//           dark: '#1E3A8A',
//         },
//         secondary: {
//           light: '#FFE6E6',
//           DEFAULT: '#f8796c',
//           dark: '#B91C1C',
//         },
//       }
//     },
//   },
//   plugins: [],
// }