const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

let mode = process.env.NODE_ENV !== 'production' ? 'development' : 'production'
let target = 'browserslist'

module.exports = {
  mode,
  //this allows the use of react-router-dom
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
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
        test: /\.png|svg|jpg|gif$/,
        type: 'asset/resource',
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
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
