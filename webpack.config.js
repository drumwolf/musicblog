const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname , 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module : {
    rules : [
      {test : /\.(js)$/, use:'babel-loader'},
      {test : /\.css$/, use:['style-loader', 'css-loader']},
      {test : /\.(md)$/, use:'raw-loader'},
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  mode:'development',
  plugins : [
    new HtmlWebpackPlugin ({
        template : 'public/index.html'
    })
  ]
}
