/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',
        haiti: '#24123D',
        meteorite: '#3A1E73',
        'purple-heart': '#6332C2',
        'white-lilac': '#F2EEFA'
      },
      maxWidth: {
        '1440': '1440px'
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

