/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tamil': ['"Noto Sans Tamil"', '"Tamil Sangam MN"', 'sans-serif'],
        'english': ['"Roboto"', '"Georgia"', '"Times New Roman"', 'serif'],
      },
      colors: {
        academic: {
          blue: '#1565C0',
          'blue-light': '#5E92F3',
          'blue-dark': '#0D47A1',
          gray: '#37474F',
          'gray-light': '#62727B',
          'gray-dark': '#263238',
          green: '#2E7D32',
          orange: '#F57C00',
        }
      },
      screens: {
        'xs': '475px',
      }
    },
  },
  plugins: [],
}
