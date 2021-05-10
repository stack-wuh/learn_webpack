const { WebPlugin } = require('web-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
      app: './index.jsx'
    },
    output: {
        filename: '[name].[contenthash:8].js'
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
    },
    plugins: [
      new CleanWebpackPlugin(),
      new WebPlugin({
        filename: 'web-plugin-template.html',
        template: './index.html',
      }),
      new WebPlugin({
        filename: 'page1.html',
        template: './index.html',
        requires: ['app']
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'async',
        minChunks: 1,
        cacheGroups: {
          vender: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vender',
            chunks: 'all'
          },
          default: {
            minChunks: 1,
            name: 'app',
            chunks: 'all'
          }
        }
      }
    }
}