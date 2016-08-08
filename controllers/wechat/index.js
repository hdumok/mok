/**
 * Created by hdumok on 2016/8/5.
 */

import crypto from 'crypto';

const token = CONFIG.wechat.token;

const controller = {}

controller.main = function *(next) {
	console.debug(this.request.body)

	this.body = "success";
}

controller.validation = function *(next) {
	const signature = this.query.signature;
	const timestamp = this.query.timestamp;
	const nonce = this.query.nonce;
	const echostr = this.query.echostr;

	const sha1 = crypto.createHash('sha1');
	const sha1Str = sha1.update([token, timestamp, nonce].sort().join('')).digest('hex');

	if (sha1Str == signature) {
		this.body = echostr;
		this.log('wechat validation success');
	} else {
		this.status = 500;
		this.log('wechat validation error');
	}
}

export default controller;