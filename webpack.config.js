const webpack = require('webpack');
// const HtmlWebpackPlugin  = require('html-webpack-plugin');
const path = require('path');

const config = {
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./client/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					'file-loader'
				]
			},
			{ test: /\.(svg)(\?v=\d+\.\d+\.\d+)$/, exclude: /node_modules/, loader: "file-loader" },
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// new HtmlWebpackPlugin({
		// 	template: './src/index.html'
		// }),

		// new webpack.NamedModulesPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
	],

};

module.exports = config;
