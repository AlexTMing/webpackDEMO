const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./weboack.common.js');

module.exports = merge(common,{
  plugin:[
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production')
    })
  ]
})