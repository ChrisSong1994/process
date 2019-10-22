/* eslint-disable no-undef */
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'] // 从右向左解析
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    port: 8088,
    open: true,
    hot: true,
    overlay: true, // 浏览器页面上显示错误
    historyApiFallback: true,
    proxy: {
      //通过代理解决本地跨域
      // '/api': {
      //     target: 'http://localhost:4000', // 服务端
      //     changeOrigin: true,
      //     ws: true,
      //     pathRewrite: {
      //         '^/api': '/api'
      //     }
      // }
    }
  }
});
