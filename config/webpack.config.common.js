const { merge } = require('webpack-merge')
const base = require('./webpack.config.base')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const outputFile = 'vue-page-transition'

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.common.js',
    libraryTarget: 'commonjs2',
  },
  //target: 'node',
  optimization: {
    minimize: true
  }
})
