const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWbpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

console.log(path,'<<<<<<<<<<<<<<<<<<<');
module.exports = {
  entry:{
    app:'./src/index.js',
    print:'./src/print.js'
  },
  devServer:{
    contentBase:'./dist'
  },
  devtool: 'inline-source-map',
  plugins:[
    new ClearWbpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'Output Management'
    }),
    new ManifestPlugin(),
  ],
  output:{
    filename:'[name].bundle.js',
    path: path.resolve(__dirname,'dist'),
    publicPath:'/'
  },
};