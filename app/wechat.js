/**
 * Created by hdumok on 2016/8/9.
 */

"use strict";

import koa from 'koa';
import koaBody from 'koa-body';

import wechatMiddlewares from '../wechat'
import lib from '../lib';

let app = koa();

// body parser
app.use(koaBody());

app.use(lib);

app.use(wechatMiddlewares);

app.listen(CONFIG.wechat.port, function (err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('==== wechat server started in %s mode, listening on %s ====', NODE_ENV, CONFIG.wechat.port);
});