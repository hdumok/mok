'use strict';

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import app from './app.vue'
import routes from './routes.js'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);

Vue.http.interceptors.push({
    request: function (request) {
        if (request.method === 'post' || request.method === 'put') {
            if (request.data) {
                var data = request.data;
                for (var key in data) {
                    if (typeof data[key] === 'undefined' || data[key] === null) {
                        delete data[key]
                    }
                }
            }
        }
        return request
    },

    response: function (response) {
        if (response.data.msg) {
            if (response.status >= 200 && response.status < 300) {
                window.Messenger().post({
                    hideAfter: 2,
                    type: 'success',
                    message: response.data.msg
                })
            } else {
                window.Messenger().post({
                    hideAfter: 2,
                    type: 'error',
                    message: response.data.msg
                })
                if (response.status === 401) {
                    window.location.hash = '#!/signin'
                }
            }
        }
        return response
    }
})

var router = new VueRouter({
    hashbang:true,
    transitionOnLoad: true,
    linkActiveClass: 'active'
});

//登录中间验证，页面需要登录而没有登录的情况直接跳转登录
/*router.beforeEach(function(transition){
    if (transition.to.auth) {
        if (localStorage.userId) {
            transition.next();
        } else {
            var redirect = encodeURIComponent(transition.to.path);
            transition.redirect('/relogin?redirect=' + redirect);
        }
    } else {
        transition.next();
    }
});*/

router.map(routes);
router.start(app,'#app');
