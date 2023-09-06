/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    extend: {

      colors: {
        'primary': {
          500: '#00567e',
        },
        'secondary':{
          500:'#019bdd',
          600:'#04638c',
        },
        'darkPrimary':{
          500:'#20232d'
        },
        'darkSecondary':{
          500:'#1e222b'
        }

      },
    },
    screens: {
      'LaptopL': { 'max': '1440px' },

      'Laptop': { 'max': '1024px' },

      'Tablet': { 'max': '768px' },

      'MobileL': { 'max': '425px' },

      'MobileM': { 'max': '375px' },

      'MobileS': { 'max': '320px' },

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1446px',
      // => @media (min-width: 1446px) { ... }
      '3xl': '2000px'
      // => @media (min-width: 2000px) { ... }

    },

  },
  plugins: [],
}

