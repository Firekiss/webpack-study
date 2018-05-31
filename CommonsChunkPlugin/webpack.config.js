const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 主要用于清除dist目录下的文件,这样每次打包就不必手动清除了
const CleanWebpackPlugin = require("clean-webpack-plugin");
// 主要是为了生成打包后的js文件包含的依赖
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: path.join(__dirname, './src/index.js')
  },
  output: {
    path: __dirname + "/dist/",
    filename: "js/[name].[chunkhash].js"
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new BundleAnalyzerPlugin(),
  ]
};