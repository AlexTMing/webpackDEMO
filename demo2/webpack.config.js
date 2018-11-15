const path = require ('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry:{
    app:'./src/index.js'
  },
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot: true
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      }
    ]
  },
  plugins:[
    new CleanWebPackPlugin(['dist']),
    new HtmlWebPackPlugin({
      title:'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'/'
  },
}