const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' },
      { from: 'index.html', to: 'index.html' }
    ])
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/main.js'
  },
};
