console.log('starting main......');

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
Vue.use(require('./libs/vue-resource'));
var App = require('./app.vue');

var VueRouter = require('./libs/vue-router');
Vue.use(VueRouter);

var vm = new Vue({
  components: {
    app: App
  },
  created:function(){
  	console.log("starting......");
  },
  ready: function() {
      // GET request
      this.$http.get('/Exhibition/getTest', function (data, status, request) {
          // set data on vm
          console.log('data=======>'+data);
          this.$set('someData', data)

      }).error(function (data, status, request) {
          // handle error
      })
    }
});

var router = new VueRouter({
  hashbang:false,
});
//登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach(function(transition){
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
});
require('./routers')(router);
router.start(App,'#app');


$(document).ready(function() {
	handleSlimScroll();
	handleSidebarMenu();
});
var handleSidebarMenu = function() {
    "use strict";
    $(".sidebar .nav > .has-sub > a").click(function() {
        var e = $(this).next(".sub-menu");
        var t = ".sidebar .nav > li.has-sub > .sub-menu";
        $(t).not(e).slideUp(250);
        $(e).slideToggle(250)
    });
    $(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function() {
        var e = $(this).next(".sub-menu");
        $(e).slideToggle(250)
    })
};

var handleSlimScroll = function() {
    "use strict";
    $("[data-scrollbar=true]").each(function() {
        var e = $(this).attr("data-height");
        e = !e ? $(this).height() : e;
        $(this).slimScroll({
            height: e,
            alwaysVisible: true
        })
    })
};
