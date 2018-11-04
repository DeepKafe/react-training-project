const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },
    {
      test: /\.css$/,
      loader:'style!css!'
    }]
  },

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'app.js'
  },

  devServer: {
    contentBase: './build',
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ]
}
