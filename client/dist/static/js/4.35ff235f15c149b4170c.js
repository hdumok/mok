webpackJsonp([4,16],{17:function(A,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={data:function(){return{title:"注册"}},components:{}}},24:function(A,r,n){r=A.exports=n(1)(),r.push([A.id,'.login-bg[_v-26e23be6]{background:url("/static/img/bgs/blueish.jpg") no-repeat 50% fixed;background-size:100% 100%;position:fixed;top:0;width:100%;bottom:0}.login-wrapper[_v-26e23be6]{position:absolute;top:90px;left:0;right:0;text-align:center}.login-wrapper .logo[_v-26e23be6]{margin-bottom:45px;position:relative;left:-2px}.login-wrapper .box[_v-26e23be6]{margin:0 auto;padding:35px 0 30px;float:none;width:400px;box-shadow:0 0 6px 2px rgba(0,0,0,.1);border-radius:5px;background:hsla(0,0%,100%,.65)}.login-wrapper .box .content-wrap[_v-26e23be6]{width:82%;margin:0 auto}.login-wrapper .box h6[_v-26e23be6]{text-transform:uppercase;margin:0 0 30px;font-size:18px;font-weight:600}.login-wrapper .box input[type=password][_v-26e23be6],.login-wrapper .box input[type=text][_v-26e23be6]{font-size:15px;height:40px;margin-bottom:18px;border-color:#b2bfc7;padding-left:12px}.login-wrapper .box input[type=password][_v-26e23be6]:focus,.login-wrapper .box input[type=text][_v-26e23be6]:focus{border:1px solid #28a0e5;outline:none;-ms-box-shadow:inset 0 1px 2px #ddd,0 0 5px #28a0e5;-o-box-shadow:inset 0 1px 2px #ddd,0 0 5px #28a0e5;box-shadow:inset 0 1px 2px #ddd,0 0 5px #28a0e5}.login-wrapper .box input[type=password][_v-26e23be6]{margin-bottom:10px}.login-wrapper .box input[_v-26e23be6]:-moz-placeholder{color:#9ba8b6;font-size:15px;letter-spacing:0;font-style:italic}.login-wrapper .box input[_v-26e23be6]:-ms-input-placeholder{color:#9ba8b6;font-style:italic;letter-spacing:0;font-size:15px}.login-wrapper .box input[_v-26e23be6]::-webkit-input-placeholder{color:#9ba8b6;font-style:italic;letter-spacing:0;font-size:15px}.login-wrapper .box a.forgot[_v-26e23be6]{display:block;text-align:right;font-style:italic;text-decoration:underline;color:#3d88ba;font-size:13px;margin-bottom:6px}.login-wrapper .box .remember[_v-26e23be6]{display:block;overflow:hidden;margin-bottom:20px}.login-wrapper .box .remember input[type=checkbox][_v-26e23be6]{float:left;margin-right:8px}.login-wrapper .box .remember label[_v-26e23be6]{float:left;color:#4a576a;font-size:13px;font-weight:600}.login-wrapper .box .signup[_v-26e23be6]{text-transform:uppercase;font-size:13px;padding:7px 25px;border-radius:5px}.login-wrapper .already[_v-26e23be6]{margin:0 auto;float:none;text-align:center;font-size:15px;margin-top:30px}.login-wrapper .already p[_v-26e23be6]{display:inline-block;color:#aaa}.login-wrapper .already a[_v-26e23be6]{color:#aaa;margin-left:7px;border-bottom:1px solid;transition:all .1s linear;-moz-transition:all .1s linear;-webkit-transition:all .1s linear;-o-transition:all .1s linear}.login-wrapper .already a[_v-26e23be6]:hover{text-decoration:none;color:#000;border-bottom-color:#000}.bg-switch[_v-26e23be6]{position:absolute;background:hsla(0,0%,100%,.8);top:60px;border-radius:0 10px 10px 0;padding:10px 10px 0;z-index:999}.bg-switch .bgs .bg[_v-26e23be6]{text-align:center;margin-bottom:13px;text-decoration:none;display:block}.bg-switch .bgs .bg.active img[_v-26e23be6]{border-color:#000}.bg-switch .bgs .bg img[_v-26e23be6]{width:80px;height:60px;border:2px solid #9fcef1;cursor:pointer}@media (max-width:767px){.login-wrapper .box[_v-26e23be6]{width:350px}}@media (max-width:480px){.login-wrapper .box[_v-26e23be6]{width:90%}}',"",{version:3,sources:["/./src/pages/signup.vue.style"],names:[],mappings:"AAqCA,uBACA,kEAAA,AACA,0BAAA,AACA,eAAA,AACA,MAAA,AACA,WAAA,AACA,QAAA,CACA,AAEA,4BACA,kBAAA,AACA,SAAA,AACA,OAAA,AACA,QAAA,AACA,iBAAA,CACA,AACA,kCACA,mBAAA,AACA,kBAAA,AACA,SAAA,CACA,AACA,iCACA,cAAA,AACA,oBAAA,AACA,WAAA,AACA,YAAA,AACA,sCAAA,AACA,kBAAA,AACA,8BAAA,CACA,AACA,+CACA,UAAA,AACA,aAAA,CACA,AACA,oCACA,yBAAA,AACA,gBAAA,AACA,eAAA,AACA,eAAA,CACA,AACA,wGAEA,eAAA,AACA,YAAA,AACA,mBAAA,AACA,qBAAA,AACA,iBAAA,CACA,AAEA,oHAEA,yBAAA,AACA,aAAA,AAGA,oDAAA,AACA,mDAAA,AACA,+CAAA,CACA,AACA,sDACA,kBAAA,CACA,AACA,wDACA,cAAA,AACA,eAAA,AACA,iBAAA,AACA,iBAAA,CACA,AACA,6DACA,cAAA,AACA,kBAAA,AACA,iBAAA,AACA,cAAA,CACA,AACA,kEACA,cAAA,AACA,kBAAA,AACA,iBAAA,AACA,cAAA,CACA,AACA,0CACA,cAAA,AACA,iBAAA,AACA,kBAAA,AACA,0BAAA,AACA,cAAA,AACA,eAAA,AACA,iBAAA,CACA,AACA,2CACA,cAAA,AACA,gBAAA,AACA,kBAAA,CACA,AACA,gEACA,WAAA,AACA,gBAAA,CACA,AACA,iDACA,WAAA,AACA,cAAA,AACA,eAAA,AACA,eAAA,CACA,AACA,yCACA,yBAAA,AACA,eAAA,AACA,iBAAA,AACA,iBAAA,CACA,AACA,qCACA,cAAA,AACA,WAAA,AACA,kBAAA,AACA,eAAA,AACA,eAAA,CACA,AACA,uCACA,qBAAA,AACA,UAAA,CACA,AACA,uCACA,WAAA,AACA,gBAAA,AACA,wBAAA,AACA,0BAAA,AACA,+BAAA,AAEA,kCAAA,AAEA,4BAAA,CAEA,AACA,6CACA,qBAAA,AACA,WAAA,AACA,wBAAA,CACA,AAGA,wBACA,kBAAA,AACA,8BAAA,AACA,SAAA,AACA,4BAAA,AACA,oBAAA,AACA,WAAA,CACA,AACA,iCACA,kBAAA,AACA,mBAAA,AACA,qBAAA,AACA,aAAA,CACA,AACA,4CACA,iBAAA,CACA,AACA,qCACA,WAAA,AACA,YAAA,AACA,yBAAA,AACA,cAAA,CACA,AAGA,yBACA,iCACA,WAAA,CACA,CACA,AACA,yBACA,iCACA,SAAA,CACA,CACA",file:"signup.vue",sourcesContent:['<template>\r\n    <div class="login-bg"></div>\r\n    <div class="login-wrapper">\r\n        <a v-link="{path: \'/\'}">\r\n            <img class="logo" src="/static/img/logo-white.png">\r\n        </a>\r\n        <div class="box">\r\n            <div class="content-wrap">\r\n                <h6>注册</h6>\r\n                <input class="form-control" type="text" placeholder="E-mail address">\r\n                <input class="form-control" type="password" placeholder="Password">\r\n                <input class="form-control" type="password" placeholder="Confirm Password">\r\n                <div class="action">\r\n                    <a class="btn-glow primary signup" v-link="{path: \'/api/user/signup\'}">注册</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="already">\r\n            <p>已有账户?</p>\r\n            <a v-link="{path: \'/signin\'}" >登陆</a>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data () {\r\n            return {\r\n                title: \'注册\'\r\n            }\r\n        },\r\n        components: {}\r\n    }\r\n</script>\r\n\r\n<style scoped>\r\n    .login-bg {\r\n        background: url("/static/img/bgs/blueish.jpg") no-repeat center center fixed;\r\n        background-size: 100% 100%;\r\n        position: fixed;\r\n        top: 0;\r\n        width: 100%;\r\n        bottom: 0;\r\n    }\r\n\r\n    .login-wrapper {\r\n        position: absolute;\r\n        top: 90px;\r\n        left: 0;\r\n        right: 0;\r\n        text-align: center;\r\n    }\r\n    .login-wrapper .logo {\r\n        margin-bottom: 45px;\r\n        position: relative;\r\n        left: -2px;\r\n    }\r\n    .login-wrapper .box {\r\n        margin: 0 auto;\r\n        padding: 35px 0 30px;\r\n        float: none;\r\n        width: 400px;\r\n        box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);\r\n        border-radius: 5px;\r\n        background: rgba(255, 255, 255, 0.65);\r\n    }\r\n    .login-wrapper .box .content-wrap {\r\n        width: 82%;\r\n        margin: 0 auto;\r\n    }\r\n    .login-wrapper .box h6 {\r\n        text-transform: uppercase;\r\n        margin: 0 0 30px 0;\r\n        font-size: 18px;\r\n        font-weight: 600;\r\n    }\r\n    .login-wrapper .box input[type="text"],\r\n    .login-wrapper .box input[type="password"] {\r\n        font-size: 15px;\r\n        height: 40px;\r\n        margin-bottom: 18px;\r\n        border-color: #b2bfc7;\r\n        padding-left: 12px;\r\n    }\r\n\r\n    .login-wrapper .box input[type="text"]:focus,\r\n    .login-wrapper .box input[type="password"]:focus {\r\n        border: 1px solid #28a0e5;\r\n        outline: none;\r\n        -webkit-box-shadow: inset 0 1px 2px #ddd,0px 0 5px #28a0e5;\r\n        -moz-box-shadow: inset 0 1px 2px #ddd,0px 0 5px #28a0e5;\r\n        -ms-box-shadow: inset 0 1px 2px #ddd,0px 0 5px #28a0e5;\r\n        -o-box-shadow: inset 0 1px 2px #ddd,0px 0 5px #28a0e5;\r\n        box-shadow: inset 0 1px 2px #dddddd, 0px 0 5px #28a0e5;\r\n    }\r\n    .login-wrapper .box input[type="password"] {\r\n        margin-bottom: 10px;\r\n    }\r\n    .login-wrapper .box input:-moz-placeholder {\r\n        color: #9ba8b6;\r\n        font-size: 15px;\r\n        letter-spacing: 0px;\r\n        font-style: italic;\r\n    }\r\n    .login-wrapper .box input:-ms-input-placeholder {\r\n        color: #9ba8b6;\r\n        font-style: italic;\r\n        letter-spacing: 0px;\r\n        font-size: 15px;\r\n    }\r\n    .login-wrapper .box input::-webkit-input-placeholder {\r\n        color: #9ba8b6;\r\n        font-style: italic;\r\n        letter-spacing: 0px;\r\n        font-size: 15px;\r\n    }\r\n    .login-wrapper .box a.forgot {\r\n        display: block;\r\n        text-align: right;\r\n        font-style: italic;\r\n        text-decoration: underline;\r\n        color: #3d88ba;\r\n        font-size: 13px;\r\n        margin-bottom: 6px;\r\n    }\r\n    .login-wrapper .box .remember {\r\n        display: block;\r\n        overflow: hidden;\r\n        margin-bottom: 20px;\r\n    }\r\n    .login-wrapper .box .remember input[type="checkbox"] {\r\n        float: left;\r\n        margin-right: 8px;\r\n    }\r\n    .login-wrapper .box .remember label {\r\n        float: left;\r\n        color: #4a576a;\r\n        font-size: 13px;\r\n        font-weight: 600;\r\n    }\r\n    .login-wrapper .box .signup {\r\n        text-transform: uppercase;\r\n        font-size: 13px;\r\n        padding: 7px 25px;\r\n        border-radius: 5px;\r\n    }\r\n    .login-wrapper .already {\r\n        margin: 0 auto;\r\n        float: none;\r\n        text-align: center;\r\n        font-size: 15px;\r\n        margin-top: 30px;\r\n    }\r\n    .login-wrapper .already p {\r\n        display: inline-block;\r\n        color: #aaaaaa;\r\n    }\r\n    .login-wrapper .already a {\r\n        color: #aaaaaa;\r\n        margin-left: 7px;\r\n        border-bottom: 1px solid;\r\n        transition: all .1s linear;\r\n        -moz-transition: all .1s linear;\r\n        /* Firefox 4 */\r\n        -webkit-transition: all .1s linear;\r\n        /* Safari and Chrome */\r\n        -o-transition: all .1s linear;\r\n        /* Opera */\r\n    }\r\n    .login-wrapper .already a:hover {\r\n        text-decoration: none;\r\n        color: #000;\r\n        border-bottom-color: #000;\r\n    }\r\n\r\n    /* background switcher */\r\n    .bg-switch {\r\n        position: absolute;\r\n        background: rgba(255, 255, 255, 0.8);\r\n        top: 60px;\r\n        border-radius: 0px 10px 10px 0px;\r\n        padding: 10px 10px 0px 10px;\r\n        z-index: 999;\r\n    }\r\n    .bg-switch .bgs .bg {\r\n        text-align: center;\r\n        margin-bottom: 13px;\r\n        text-decoration: none;\r\n        display: block;\r\n    }\r\n    .bg-switch .bgs .bg.active img {\r\n        border-color: #000;\r\n    }\r\n    .bg-switch .bgs .bg img {\r\n        width: 80px;\r\n        height: 60px;\r\n        border: 2px solid #9fcef1;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /* responsive */\r\n    @media (max-width: 767px) {\r\n        .login-wrapper .box {\r\n            width: 350px;\r\n        }\r\n    }\r\n    @media (max-width: 480px) {\r\n        .login-wrapper .box {\r\n            width: 90%;\r\n        }\r\n    }\r\n</style>\r\n'],sourceRoot:"webpack://"}])},40:function(A,r,n){var e=n(24);"string"==typeof e&&(e=[[A.id,e,""]]);n(2)(e,{});e.locals&&(A.exports=e.locals)},58:function(A,r){A.exports=' <div class=login-bg _v-26e23be6=""></div> <div class=login-wrapper _v-26e23be6=""> <a v-link="{path: \'/\'}" _v-26e23be6=""> <img class=logo src=/static/img/logo-white.png _v-26e23be6=""> </a> <div class=box _v-26e23be6=""> <div class=content-wrap _v-26e23be6=""> <h6 _v-26e23be6="">注册</h6> <input class=form-control type=text placeholder="E-mail address" _v-26e23be6=""> <input class=form-control type=password placeholder=Password _v-26e23be6=""> <input class=form-control type=password placeholder="Confirm Password" _v-26e23be6=""> <div class=action _v-26e23be6=""> <a class="btn-glow primary signup" v-link="{path: \'/api/user/signup\'}" _v-26e23be6="">注册</a> </div> </div> </div> <div class=already _v-26e23be6=""> <p _v-26e23be6="">已有账户?</p> <a v-link="{path: \'/signin\'}" _v-26e23be6="">登陆</a> </div> </div> '},86:function(A,r,n){var e,o;n(40),e=n(17),o=n(58),A.exports=e||{},A.exports.__esModule&&(A.exports=A.exports["default"]),o&&(("function"==typeof A.exports?A.exports.options:A.exports).template=o)}});
//# sourceMappingURL=4.35ff235f15c149b4170c.js.map