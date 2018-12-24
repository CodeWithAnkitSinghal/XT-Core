const path = require('path');

module.exports = {
  entry: './static/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};