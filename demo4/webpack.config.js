const path = require ('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
    app:'./src/index.js',
    another:'./src/another-module.js'
  },
  plugins:[
    new CleanWebPackPlugin(['dist']),
    new HtmlWebPackPlugin({
      title:'code splitting'
    }),
  ],
  optimization:{
    splitChunks:{
      cacheGroups:{
        commons:{
          name:'commons',
          chunks:'initial',
          minChunks:2
        }
      }
    }
  },
  output:{
    filename:'[name].bundle.js',
   path:path.resolve(__dirname, 'dist')
  },
}