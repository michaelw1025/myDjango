const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './assets/js/index.js',
    jquery: './assets/js/load-jquery.js',
    charts: './assets/js/load-charts.js'
  },  
  output: {
    filename: '[name].js',  // output bundle file name
    path: path.resolve(__dirname, './static'),  // path to our Django static directory
  },
  plugins: [
    new copyWebpackPlugin({
      patterns: [
        {from: 'node_modules/@fortawesome/fontawesome-free/webfonts', to: 'webfonts'},
        {from: 'node_modules/@fortawesome/fontawesome-free/css/', to: 'css'},
      ],
    }),
  ],
};