/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html 模版插件

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.css', '.json', '.less']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        // babel es6转 es5
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: path.resolve(__dirname, './src/**/*.js'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
