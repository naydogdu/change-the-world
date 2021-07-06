const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
    },
    extend: {
      boxShadow: {
        '4xl': '0 -10px 50px -5px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
