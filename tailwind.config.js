/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#f6f2ef',
        'bg-dark': '#171717',
        'text-light':'#2d312a',
        'text-dark': '#a6a999',
        'leaves':'#a6a999'
      }
    },
  },
  plugins: [],
}
