/**
 * Created by hdumok on 2016/8/9.
 */

import _ from 'lodash';
import compose from 'koa-compose';
import WechatAPI from 'co-wechat-api';

const appID = CONFIG.wechat.appID;
const appsecret = CONFIG.wechat.appsecret;

const api = new WechatAPI(appID, appsecret);

let init = {};

init.createMenu = function *(next) {

	const menu = {
		"button": [
			{
				"type": "click",
				"name": "自动回复",
				"key": "V1001_TODAY_MUSIC"
			},
			{
				"name": "菜单",
				"sub_button": [
					{
						"type": "view",
						"name": "搜索",
						"url": "http://www.soso.com/"
					}
				]
			}
		]
	}

	const result = yield api.createMenu(menu);

	if (result.errcode == 0) 
		console.debug("创建微信菜单成功");
	else
        console.error("创建微信菜单失败, errmsg: " + result.errmsg);

    next();
}

export default compose(_.values(init));