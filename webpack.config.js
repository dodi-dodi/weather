const path = require('path');

let APP_DIR = path.resolve(__dirname, 'src');
let BUILD_DIR = path.resolve(__dirname, 'dist');

let config = {
  entry: path.resolve(APP_DIR, 'index.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  watch: true,
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  }
};

module.exports = config;