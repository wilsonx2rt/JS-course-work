var path = require('path');

module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    filename: 'app.bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpg/,
        exclude: /(node_modules)/,
        loader: 'url-loader'
      },
    
    ]
  }
};
