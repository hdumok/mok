module.exports = function(router){
    router.map({
        '/': {
            component:require('./components/login/user-login.vue')
        },
        '/register': {
            component:require('./components/login/user-register.vue')
        }
    })
}
