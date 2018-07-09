const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = {
  mode: 'production',
  entry: ["babel-polyfill", './src/index.prod.js'],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
