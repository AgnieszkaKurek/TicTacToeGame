const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = {
  mode: 'none',
  entry: './src/index.dev.js',
  devtool: 'inline-source-map',
  watch: true
};
