<template>
    <div class="login-bg"></div>
    <div class="login-wrapper">
        <img class="logo" src="/static/img/logo-white.png">

        <div class="box">
            <div class="content-wrap">
                <h6>登录</h6>
                <input class="form-control" v-model="user.username" type="text" placeholder="用户名">
                <input class="form-control" v-model="user.password" type="password" placeholder="密码">
                <a href="#" class="forgot">忘记密码?</a>
                <div class="remember">
                    <input id="remember-me" type="checkbox">
                    <label for="remember-me">记住密码</label>
                </div>
                <button class="btn-glow primary login" v-on:click="signin">登录</button>
            </div>
        </div>

        <div class="no-account">
            <p>还没账号?</p>
            <a v-link="{path: '/signup'}">注册</a>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: '登录',
                user: {
                    username: '',
                    password: ''
                }
            }
        },
        components: {},
        methods: {
            signin: function () {
                this.$http.post('/api/user/signin', this.user).then(function() {
                    this.$route.router.go('/')
                })
            }
        }
    }
</script>

<style scoped>
    .login-bg {
        background: url("/static/img/bgs/blueish.jpg") no-repeat center center fixed;
        background-size: 100% 100%;
        position: fixed;
        top: 0;
        width: 100%;
        bottom: 0;
    }

    .login-wrapper {
        position: absolute;
        top: 90px;
        left: 0;
        right: 0;
        text-align: center;
    }
    .login-wrapper .logo {
        margin-bottom: 45px;
        position: relative;
        left: -2px;
    }
    .login-wrapper .box {
        margin: 0 auto;
        padding: 35px 0 30px;
        float: none;
        width: 400px;
        box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.65);
    }
    .login-wrapper .box .content-wrap {
        width: 82%;
        margin: 0 auto;
    }
    .login-wrapper .box h6 {
        text-transform: uppercase;
        margin: 0 0 30px 0;
        font-size: 18px;
        font-weight: 600;
    }
    .login-wrapper .box input[type="text"],
    .login-wrapper .box input[type="password"] {
        font-size: 15px;
        height: 40px;
        margin-bottom: 18px;
        border-color: #b2bfc7;
        padding-left: 12px;
    }
    .login-wrapper .box input[type="password"] {
        margin-bottom: 10px;
    }
    .login-wrapper .box input:-moz-placeholder {
        color: #9ba8b6;
        font-size: 15px;
        letter-spacing: 0px;
        font-style: italic;
    }
    .login-wrapper .box input:-ms-input-placeholder {
        color: #9ba8b6;
        font-style: italic;
        letter-spacing: 0px;
        font-size: 15px;
    }
    .login-wrapper .box input::-webkit-input-placeholder {
        color: #9ba8b6;
        font-style: italic;
        letter-spacing: 0px;
        font-size: 15px;
    }
    .login-wrapper .box a.forgot {
        display: block;
        text-align: right;
        font-style: italic;
        text-decoration: underline;
        color: #3d88ba;
        font-size: 13px;
        margin-bottom: 6px;
    }
    .login-wrapper .box .remember {
        display: block;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .login-wrapper .box .remember input[type="checkbox"] {
        float: left;
        margin-right: 8px;
    }
    .login-wrapper .box .remember label {
        float: left;
        color: #4a576a;
        font-size: 13px;
        font-weight: 600;
    }
    .login-wrapper .box .login {
        text-transform: uppercase;
        font-size: 13px;
        padding: 8px 30px;
    }
    .login-wrapper .no-account {
        margin: 0 auto;
        float: none;
        text-align: center;
        font-size: 14px;
        margin-top: 25px;
    }
    .login-wrapper .no-account p {
        display: inline-block;
        color: #aaaaaa;
    }
    .login-wrapper .no-account a {
        color: #aaaaaa;
        margin-left: 7px;
        border-bottom: 1px solid;
        transition: all .1s linear;
        -moz-transition: all .1s linear;
        /* Firefox 4 */
        -webkit-transition: all .1s linear;
        /* Safari and Chrome */
        -o-transition: all .1s linear;
        /* Opera */
    }
    .login-wrapper .no-account a:hover {
        text-decoration: none;
        color: #fff;
        border-bottom-color: #fff;
    }

    /* background switcher */
    .bg-switch {
        position: absolute;
        background: rgba(255, 255, 255, 0.8);
        top: 60px;
        border-radius: 0px 10px 10px 0px;
        padding: 10px 10px 0px 10px;
        z-index: 999;
    }
    .bg-switch .bgs .bg {
        text-align: center;
        margin-bottom: 13px;
        text-decoration: none;
        display: block;
    }
    .bg-switch .bgs .bg.active img {
        border-color: #000;
    }
    .bg-switch .bgs .bg img {
        width: 80px;
        height: 60px;
        border: 2px solid #9fcef1;
        cursor: pointer;
    }

    /* responsive */
    @media (max-width: 767px) {
        .login-wrapper .box {
            width: 350px;
        }
    }
    @media (max-width: 480px) {
        .login-wrapper .box {
            width: 90%;
        }
    }
</style>