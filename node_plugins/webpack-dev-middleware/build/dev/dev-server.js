const path = require('path')
const express = require('express')
const webpack = require('webpack')

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack.config.js')

const server = express(),
    DIST_DIR = path.join(__dirname, 'dist'),
    PORT = 9090,
    complier = webpack(webpackConfig)

server.use(webpackDevMiddleware(complier, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
}))

server.use(webpackHotMiddleware(complier))

server.get('*', (req, res, next) => {
    const filename = path.join(DIST_DIR, 'index.html');
    complier.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
            return (next(err))
        }

        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })
})

server.listen(PORT)