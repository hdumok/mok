/**
 * Created by hdumok on 2016/8/4.
 */

"use strict";

import koaResponseTime from 'koa-response-time';
import koaStaticServer from 'koa-static-server';
import koaValidate from 'koa-validate';
import koaCompress from 'koa-compress';
import koaSession from 'koa-session';
import koaBody from 'koa-body';
import koa from 'koa';

import middlewares from '../middlewares';
import controllers from '../controllers'
import lib from '../lib';

let app = koa();

// x-response-time
app.use(koaResponseTime());

// compress
app.use(koaCompress());

// serve static
app.use(koaStaticServer({rootDir: __dirname + '/client/static', rootPath: '/static'}));

// session
app.keys = ['mok'];
app.use(koaSession(app));

// body parser
app.use(koaBody());

// validater
koaValidate(app);

app.use(middlewares);

app.use(lib);

app.use(controllers);

app.listen(CONFIG.port, function (err) {
	if (err) {
		console.error(err);
		return;
	}

	console.log('==== server started in %s mode, listening on %s ====', NODE_ENV, CONFIG.port);
});