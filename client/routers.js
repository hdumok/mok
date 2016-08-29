module.exports = function(router){
	router.map({
		'/':{
			name:'home',
			component: require('./views/home.vue')
		},
		'/inbox':{
			name:'inbox',
			component: function(reslove){
				return require(['./components/top-nav.vue'],reslove)
			}
		}
	});
}