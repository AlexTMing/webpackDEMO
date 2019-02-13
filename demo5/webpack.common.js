const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWbpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

console.log(path,'<<<<<<<<<<<<<<<<<<<');
module.exports = {
  entry:{
    app:'./src/index.js',
  },
  devServer:{
    contentBase:'./dist',
    hot:true,
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins:[
    new ClearWbpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output:{
    filename:'[name].bundle.js',
    path: path.resolve(__dirname,'dist'),
    publicPath:'/'
  },
};