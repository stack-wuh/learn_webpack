module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
	devServer: {
		port: 9000
	},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}