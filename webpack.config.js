module.exports = {
  context: __dirname + "/src",
  entry: {
    'index': './index.js'
  },

  output: {
    filename: "[name].js",
    path: process.cwd() + "/dist"
  },

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
