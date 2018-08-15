const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/'),
        publicPath: './dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images'
                    }
                }
            }
        ],
    }
}