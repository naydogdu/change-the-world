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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
