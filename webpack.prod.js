const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/main.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' },
      { from: 'index.html', to: 'index.html' }
    ])
  ],
  mode: 'production',
  entry: ["babel-polyfill", './src/index.prod.js'],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
