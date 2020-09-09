const path = require('path')

module.exports = {
	// entry: ['./index.js', './index2.js'],
	entry: {
		bundle: ['./index.js', './index2.js'],
		index2: './index2.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, './dist')
	},
}