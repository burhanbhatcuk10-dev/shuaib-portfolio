/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        cardDark: '#1e293b',
        accent: '#38bdf8',
      },
    },
  },
  plugins: [],
}