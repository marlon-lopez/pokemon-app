const WebpackCopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  plugins: [
    new WebpackCopyPlugin({
      patterns: [{ from: path.resolve(__dirname, '../public/_redirects') }],
    }),
  ],
  devtool: 'source-map',

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
module.exports = merge(common, prodConfig)
