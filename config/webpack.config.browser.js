const { merge } = require('webpack-merge')
const base = require('./webpack.config.base')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const outputFile = 'vue-page-transition'
const globalName = 'VuePageTransition'

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.browser.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  externals: {
    // Put external libraries like lodash here
    // With their global name
    // Example: 'lodash': '_'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ecma: 5,
          ie8: false,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true,
          keep_fnames: true,
          output: null,
          toplevel: false,
          nameCache: null,
        },
      })
    ],
  },
})