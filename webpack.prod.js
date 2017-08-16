var path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'prod.bundle.js',
    path: path.resolve(__dirname, 'js')
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}