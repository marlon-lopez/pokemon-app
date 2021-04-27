const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

/**@type {import("webpack").Configuration} */

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '',
  },

  //loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        //check the extension of the file
        test: /\.scss|.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: '' } },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.png|jpg|gif$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
}
