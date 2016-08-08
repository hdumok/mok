var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.dev.conf')
var compiler = webpack(webpackConfig)

var app = express()
var port = config.dev.port
var proxyTable = config.dev.proxyTable

var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true,
		chunks: false
	}
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

var proxyMiddleware = require('http-proxy-middleware')
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

app.use(require('connect-history-api-fallback')())

app.use(devMiddleware)

app.use(hotMiddleware)
compiler.plugin('compilation', function (compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
		hotMiddleware.publish({ action: 'reload' })
		cb()
	})
})

app.use('/static', express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
