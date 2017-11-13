var path = require('path');
var webpack = require('webpack');
var devFlagPlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});


module.exports = {
	context: path.resolve(process.cwd(), 'src'),
	entry: {
		'index': './index.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), 'dist')
	},

	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},

	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader'],
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					query: {
						modules: true,
						sourceMap: true,
						importLoaders: 2,
						localIdentName: '[name]__[local]___[hash:base64:5]'
					}
				}, {
					loader: 'sass-loader'
				}]
			}
		]
	}
};
