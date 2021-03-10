const path = require('path');

module.exports = {
  entry: './assets/js/index.js',  // path to our input file
  output: {
    filename: 'main.js',  // output bundle file name
    path: path.resolve(__dirname, './static'),  // path to our Django static directory
  },
};