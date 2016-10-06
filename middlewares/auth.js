/**
 * Created by hdumok on 2016/8/5.
 */

'use strict'

export default function *(next) {
  if (!this.session.user) {
    if (NODE_ENV !== 'development') {
      this.status = 401
      this.body = {msg: '用户未登录'}
      return
    }

    this.session.user = 'mok'
  }

  yield next
}
