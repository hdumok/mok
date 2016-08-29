/**
 * Created by hdumok on 2016/8/5.
 */

import co from 'co';
import fs from 'fs';
import path from 'path';
import Wechat from 'co-wechat';

const token = CONFIG.wechat.token;
const robot = new Wechat(token);

const wechatRoot = path.join(ROOT, 'wechat');
const wechatFile = fs.readdirSync(wechatRoot);
const wechat = {};

for (var file of wechatFile) {
	if (file === 'index.js') continue;

	const out = require(path.join(wechatRoot, file));
	if(out.default)
		wechat[file.split('.')[0]] = out.default;
	else
		Object.assign(wechat, out);
}

co(function *() {
    yield wechat.init(function () {
        console.log("初始化微信成功")
    });
}).catch(e => {
    console.error("初始化微信失败")
    console.error(e)
})

const middlewares = robot.middleware(function *() {

	//消息分发


	//自动回复
	yield wechat.auto;
});

export default middlewares;
