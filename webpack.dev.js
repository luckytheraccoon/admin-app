var path = require('path');
module.exports = {
  module: {
      loaders: [
          {
              test: /\.scss$/,
              loaders: ['style-loader', 'css-loader', 'sass-loader']
          }
      ]
  },
  entry: {
    admin: [
        'webpack-dev-server/client?http://localhost:8080',
        './src/js/index',
    ]
  },
  output: {
    filename: 'js/bundle.js'
  }
}

    