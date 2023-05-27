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
        'white-lilac': '#C6ACFA',
        'green': '#04B200',
        'white-lilac-10': 'rgba(198, 172, 250, 0.09)',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'white-50': 'rgba(255, 255, 255, 0.5)',
        'white-70': 'rgba(255, 255, 255, 0.7)',
        'black-0': 'rgba(0, 0, 0, 0)',
        'haiti-90': 'rgba(23, 12, 39, 0.87)',
      },
      maxWidth: {
        '1440': '1440px'
      },
      width: {
        "mobile-modal": 'calc(100% - 40px)',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      fontSize: {
        hero: ['7rem', '7rem']
      },
    },
  },
  plugins: [],
}

