/**
 * Created by hdumok on 2016/8/9.
 */

export default function *() {

    this.debug("收到无法处理的消息:");
    this.debug(this.weixin);

    this.body = [
        {
            title: '自动回复'
        }
    ];
}