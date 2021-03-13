var webpack = require("webpack");
const path = require('path');

module.exports = {
  entry:{
    indexbundle: './assets/index.js',
    fontawesome: './assets/fontawesome.js',
    charts: './assets/charts.js'
  }, 
  output: {
    filename: '[name].js',  // output bundle file name
    path: path.resolve(__dirname, './static'),  // path to our Django static directory
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
     })
  ]
};