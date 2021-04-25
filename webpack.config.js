const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
/* 
let mode = process.env.NODE_ENV !== 'production' ? 'development' : 'production'
let target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web' */

let target = 'web'
let mode = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
  target = 'browserslist'
}

module.exports = {
  mode: mode,
  //this allows the use of react-router-dom

  entry: './src/index.js',
  devServer: {
    hot: true,
    contentBase: './dist',
    historyApiFallback: true,
  },

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

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: './',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: target,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],

  devtool: 'source-map',
}
