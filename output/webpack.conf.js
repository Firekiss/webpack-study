const path = require('path')

module.exports = {
    entry: {
        'fuck': './index.js',
        'jeff': './main.js',
    },
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: '[name].[chunkhash:8].js',
    }
}