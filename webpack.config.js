var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var devFlagPlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
});


module.exports = {
	context: path.resolve(process.cwd(), "src"),
	entry: {
		"index": "./index.js"
	},

	output: {
		filename: "[name].js",
		path: path.resolve(process.cwd(), "dist"),
		publicPath: "/" 
	},

	resolve: {
		extensions: [".js", ".jsx"]
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		devFlagPlugin
	],
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["react-hot-loader", "babel-loader"],
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]" 
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ["react", "es2015"]
				}
			}
		]
	},
	devServer: {
		inline: true,
		port: 3000,
		hot: true
	}
};
