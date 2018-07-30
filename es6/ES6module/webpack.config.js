module.exports = {
	entry: './src/module.js',
	output: {
		path: __dirname,
		filename: './dist/bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}]
	}
}