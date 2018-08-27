const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/js/page/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '热更新测试',
            filename: 'index.html',
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}