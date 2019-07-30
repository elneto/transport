// webpack v4
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
module.exports = {
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		// publicPath: '../'
		publicPath: '/content/transport2020/'
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					fix: false
				}
			},
			{
				test: /\.(scss)$/,
				use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							// publicPath: '../'              
							publicPath: '/content/transport2020/'
						}
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS modules
					}, {
						loader: 'postcss-loader', // Run post css actions
						options: {
							plugins: function () { // post css plugins, can be exported to postcss.config.js
								return [
									require('precss'),
									require('autoprefixer'),
									require('cssnano')()
								];
							}
						}
					}, {
						loader: 'sass-loader' // compiles Sass to CSS
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images/',
						// publicPath: 'images/'
						publicPath: '/content/transport2020/images/'
					}
				}],
			},
			{
				test: /\.svg/,
				use: {
					loader: 'svg-url-loader',
					options: {}
				}
			},
			{
				test: /jquery-plugin/,
				loader: 'imports?jQuery=jquery,$=jquery,this=>window'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('dist', {}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].[chunkhash].css",
			chunkFilename: "[id].css"
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
			// minify: {
			//   collapseWhitespace: true,
			//   removeComments: true,
			//   removeRedundantAttributes: true,
			//   removeScriptTypeAttributes: true,
			//   removeStyleLinkTypeAttributes: true
			// }
		}),
		new CopyPlugin([{
			from: 'src/images/**/**',
			to: path.resolve(__dirname, 'dist')
		}]),
		// Make sure that the plugin is after any plugins that add images, example `CopyWebpackPlugin`
		new ImageminPlugin({
			bail: false, // Ignore errors on corrupted images
			cache: true,
			imageminOptions: {
				// Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

				// Lossless optimization with custom option
				// Feel free to experiment with options for better result for you
				plugins: [
					["gifsicle", {
						interlaced: true
					}],
					["jpegtran", {
						progressive: true
					}],
					["optipng", {
						optimizationLevel: 5
					}],
					[
						"svgo",
						{
							plugins: [{
								removeViewBox: false
							}]
						}
					]
				]
			}
		})
	]
};
