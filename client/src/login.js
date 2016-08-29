console.log('starting login.js....');

var bootcss = require('./libs/plugins/bootstrap-3.1.1/css/bootstrap.css');
var jquicss = require('./libs/plugins/jquery-ui-1.10.4/jquery-ui.css');
var fontcss = require('./libs/plugins/font-awesome-4.1.0/css/font-awesome.css');
var stylecss = require('./css/style.css');
var animatecss = require('./css/animate.css');
var stylerespcss = require('./css/style-responsive.css');


var jq=require('./libs/plugins/jquery-1.7.2/jquery-1.8.2.js');
var bootjs = require('./libs/plugins/bootstrap-3.1.1/js/bootstrap.min.js');
var slimscroll = require('./libs/plugins/slimscroll/jquery.slimscroll.js');

var Vue = require('vue');
var App = require('./login.vue');

var VueRouter = require('./libs/vue-router');
Vue.use(VueRouter);

var vm = new Vue({
  components: {
    app: App
  },
  created:function(){
  	console.log("starting......");
  }
});

var router = new VueRouter({
  hashbang:false,
});

require('./login-routers')(router);
router.start(App,'#app');


$(document).ready(function() {
	initEvent();
});

var initEvent = function() {
	$("#login").click( function() { alert('我被点了') });
};