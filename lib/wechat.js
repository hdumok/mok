/**
 * Created by hdumok on 2016/8/5.
 */

import WechatAPI from 'co-wechat-api';

const appID = CONFIG.wechat.appID;
const appsecret = CONFIG.wechat.appsecret;

const wechat = new WechatAPI(appID, appsecret)

export default wechat;