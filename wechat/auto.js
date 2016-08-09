/**
 * Created by hdumok on 2016/8/9.
 */

export default function *() {

    this.debug("收到消息:" + this.weixin);

    this.body = [
        {
            title: '自动回复百度搜索',
            description: '这是百度搜索',
            url: 'http://baidu.com/'
        }
    ];
}