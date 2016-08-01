var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});


module.exports = {
  context: __dirname + "/src",
  entry: {
    'index': './index.js'
  },

  output: {
    filename: "[name].js",
    path: process.cwd() + "/dist"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['express-hot-loader', 'babel-loader'],
        exclude: /node_modules/
       }
    ]
  }
};
