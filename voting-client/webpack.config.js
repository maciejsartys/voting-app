module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?https://0.0.0.0:8080',],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: 'node_modules',
      loader: 'babel'
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
  },
};