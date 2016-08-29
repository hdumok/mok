module.exports = function(router){
    router.map({
        '/': {
            component:require('./components/main/maincontent.vue')
        },
        '/page1': {
            component: require('./components/main/page1.vue')
            /*auth: true*/
        },
        '/relogin': {
            component:require('./components/main/relogin.vue')
        }
    })
}