/**
 * Created by hdumok on 2016/8/5.
 */

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

const middlewares = robot.middleware(function *() {

	yield wechat.init;
	yield wechat.auto;
});

export default middlewares;
