const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')


module.exports = {
  entry: {
    /*'./src/index.js'*/
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
  	new HtmlWebpackPlugin({
  		title: 'Output Management'
  	})
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			use: [
  				'style-loader',
  				'css-loader'
  			]
  		},
  		{
  			test: /\.(png|svg|jpg|gif)$/,
  			use: [
  				'file-loader'
  			]
  		},
  		{
  			test: /\.(woff|woff2|eot|ttf|otf)$/,
  			use: [
  				'file-loader'
  			]
  		}
  	]
  }
};
