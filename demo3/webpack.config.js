const path = require ('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
    app:'./src/index.js',
    another:'./src/another-module.js',
  },
  plugins:[
    new CleanWebPackPlugin(['dist']),
    new HtmlWebPackPlugin({
      title:'code splitting'
    }),
    new webpack.optimize.SplitChunksPlugin({
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: 'commons'
    })

  ],
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
}