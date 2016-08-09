/**
 * Created by hdumok on 2016/8/9.
 */

import WechatAPI from 'co-wechat-api';

const appID = CONFIG.wechat.appID;
const appsecret = CONFIG.wechat.appsecret;

const api = new WechatAPI(appID, appsecret);

let initd = false;

export default function *() {

	if (!initd){

		yield* createMenu;

		initd = true;
	}
	else{
		this.debug("已经初始化过了")
	}
}

const createMenu = function *() {
	
	let menu = {
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
	var result = api.createMenu(menu);
	console.debug(result)
		
	console.debug("创建微信菜单成功")

	return;
}
