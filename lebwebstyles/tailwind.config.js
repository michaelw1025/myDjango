const colors = require('tailwindcss/colors')

module.exports = {
  future: {
      removeDeprecatedGapUtilities: false,
      purgeLayersByDefault: false,
  },
  purge: {
      enabled: false, //true for production build
      content: [
          'templates/*.html',
          'templates/**/*.html'
      ]
  },
  theme: {
      extend: {
        fontFamily: {
          'roboto': ['Roboto', 'sans-serif'],
        },
      },
      colors: {
        white: colors.white,
        black: colors.black,
        gray: colors.blueGray,
        red: colors.red,
        orange: colors.orange,
        yellow: colors.yellow,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        blue: colors.blue,
        purple: colors.purple,
        pink: colors.pink,
        rose: colors.rose,
      },
  },
  variants: {},
  plugins: [],
}