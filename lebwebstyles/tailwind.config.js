const colors = require('tailwindcss/colors')

module.exports = {
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
  purge: {
      enabled: false, //true for production build
      content: [
          '../**/templates/*.html',
          '../**/templates/**/*.html'
      ]
  },
  theme: {
      extend: {},
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
  variants: {},
  plugins: [],
}