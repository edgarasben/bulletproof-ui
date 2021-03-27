const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      scale: {
        97: '.97',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
