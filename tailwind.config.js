/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
          'backgroundColor': '#27374D',
          'navColor': '#1A2F4B',
          'textColor': '#14FFEC',
      },
      boxShadow: {
        'custom-color': '0 0 35px #14FFEC',
      },
      animation: {
        colorchange: 'colorchange 5s infinite',
      },
      keyframes: {
        colorchange: {
          '0%': { 'border-color': 'orange' },
          '33%': { 'border-color': 'blue' },
          '66%': { 'border-color': 'yellow' },
          '100%': { 'border-color': 'orange' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.underline-thick': {
         textDecoration: 'underline',
         textDecorationThickness: '4px',
        },
        '.text-shadow': {
          textShadow: '0 0 20px #14FFEC',
        },
      })
    }
  ],
}

