const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssConfig = require('./postcss.config')

const config = {
    entry: {
        first: './src/first.js',
        second: './src/second.js',
        vendor: ['jquery']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name][chunkhash:8].js'
    },
    module:{
        rules: [
            {
                // 在nodeJs中,可以使用require.resolve函数来查询某个模块文件的带有完整绝对路径的文件名
                test: require.resolve('jquery'),
                loader: 'expose-loader?$!expose-loader?jQuery'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => postcssConfig.plugins
                            }
                        }
                    ]
                })
            },
            {
                test: /\.jpeg$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'img/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['env',{
                                    targets: {
                                        browsers: ['> 1%', 'last 2 versions']
                                    }
                                }]
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js',
            minChunks: function(module, count) {
                console.log(`正在处理的文件是 ${module.resource}`, `引用次数 ${count}`)
                console.log(module.resource.indexOf(path.join(__dirname, '../../../node_modules')) === 0)
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(path.join(__dirname, '../../../node_modules')) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: '[name].js',
            chunks: ['vendor']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].js',
            chunks: ['first', 'second']
        }),
        new HtmlWebpackPlugin({
            title: '简单页面',
            filename: 'index.html',
            chunks: ['manifest', 'vendor', 'common', 'first'],
            inject: true,
            chunksSortMode: 'manual'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery',
            'window.$': 'jquery'
        }),
        new ExtractTextPlugin('[name].[chunkhash:8].css'),
    ]
}

module.exports = config;