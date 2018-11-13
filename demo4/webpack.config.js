const path = require ('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
    app:'./src/index.js'
  },
  plugins:[
    new CleanWebPackPlugin(['dist']),
    new HtmlWebPackPlugin({
      title:'code splitting'
    })
  ],
  output:{
    filename:'[name].bundle.js',
    chunkFilename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
}