/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#08111f',
        accent: '#d7a23d',
        'accent-dark': '#9a6b15',
        'gray-dark': '#111827',
      },
      fontFamily: {
        sans: ['"Trebuchet MS"', '"Segoe UI Variable Text"', '"Segoe UI"', 'sans-serif'],
        display: ['"Arial Black"', '"Trebuchet MS"', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
