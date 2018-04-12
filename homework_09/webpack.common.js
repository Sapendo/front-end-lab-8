const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'bin')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader"
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader"
						},
						{
							loader: "sass-loader"
						}
						]
				})
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['bin']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/app.html'
		}),
		new ExtractTextPlugin("style.css"),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
	]
};
