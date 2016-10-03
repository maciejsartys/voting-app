var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.jsx',
    'webpack-dev-server/client?http://0.0.0.0',
    'webpack/hot/only-dev-server',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot-loader/webpack', 'babel'],
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};