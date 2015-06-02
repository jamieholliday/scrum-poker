'use strict';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var cssLoaders = ['css-loader'];
var jsLoaders = ['react-hot', 'babel'];
var scssLoaders = cssLoaders.slice(0);
scssLoaders.push('sass-loader?includePaths[]=' + path.resolve(__dirname, './styles'));

module.exports = {

  devtool: 'sourcemap',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './scripts/index'
  ],
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: jsLoaders, include: path.join(__dirname, 'scripts'), exclude: /node_modules/},
      { test: /\.css$/ ,loader: ExtractTextPlugin.extract('style-loader', cssLoaders.join('!')) },
      { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', scssLoaders.join('!')) }
    ]
  }
};
