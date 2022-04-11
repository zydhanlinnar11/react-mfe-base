const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
})
