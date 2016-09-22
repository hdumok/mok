/**
 * Created by hdumok on 2016/8/9.
 */

let wechat = {};

wechat.createMenu = function *() {

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

    const result = yield this.wechat.createMenu(menu);

    if (result.errcode == 0){
        this.debug("创建微信菜单成功");
        this.body="创建微信菜单成功";
    }
    else{
        this.error("创建微信菜单失败, errmsg: " + result.errmsg);
        this.status=500;
        this.body="创建微信菜单失败";
    }
}

export default wechat;
