const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()
app.use('/api', proxy({
    target: 'http://www.example.org',
    changeOrigin: true
}));

app.listen(3000)