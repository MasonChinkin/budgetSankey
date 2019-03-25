const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  module: {
    rules: [{
      test: /\.scss/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  devtool: 'source-map'
};