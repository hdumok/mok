/**
 * Created by hdumok on 2016/8/4.
 */

'use strict'

import koaResponseTime from 'koa-response-time'
import koaStaticServer from 'koa-static-server'
import koaSession from 'koa-generic-session'
import koaValidate from 'koa-validate'
import koaCompress from 'koa-compress'
import koaRedis from 'koa-redis'
import koaBody from 'koa-body'
import koa from 'koa'

import middlewares from '../middlewares'
import controllers from '../controllers'
import lib from '../lib'

const app = koa()

// x-response-time
app.use(koaResponseTime())

// compress
app.use(koaCompress())

// serve static
app.use(koaStaticServer({rootDir: ROOT + '/client/dist', rootPath: '/'}))
app.use(koaStaticServer({rootDir: ROOT + '/client/dist/static', maxage: 30 * 24 * 60 * 60 * 1000, gzip: true, rootPath: '/static'}))

// session
app.keys = ['mok']
app.use(koaSession({
  prefix: 'mok:session:',
  store: koaRedis(CONFIG.redis)
}))

// body parser
app.use(koaBody())

// validater
koaValidate(app)

app.use(middlewares)

app.use(lib)

app.use(controllers)

app.listen(CONFIG.server.port, function (err) {
  if (err) {
    console.error(err)
    return
  }

  console.log('==== server started in %s mode, listening on %s ====', NODE_ENV, CONFIG.server.port)
})
