<template>
    <div class="login-bg"></div>
    <div class="login-wrapper">
        <a v-link="{path: '/'}">
            <img class="logo" src="/static/img/logo-white.png">
        </a>
        <div class="box">
            <div class="content-wrap">
                <h6>注册</h6>
                <input class="form-control" type="text" placeholder="E-mail address">
                <input class="form-control" type="password" placeholder="Password">
                <input class="form-control" type="password" placeholder="Confirm Password">
                <div class="action">
                    <a class="btn-glow primary signup" v-link="{path: '/api/user/signup'}">注册</a>
                </div>
            </div>
        </div>

        <div class="already">
            <p>已有账户?</p>
            <a v-link="{path: '/signin'}" >登陆</a>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: '注册'
            }
        },
        components: {}
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

    .login-wrapper .box input[type="text"]:focus,
    .login-wrapper .box input[type="password"]:focus {
        border: 1px solid #28a0e5;
        outline: none;
        -webkit-box-shadow: inset 0 1px 2px #ddd,0px 0 5px #28a0e5;
        -moz-box-shadow: inset 0 1px 2px #ddd,0px 0 5px #28a0e5;
        -ms-box-shadow: inset 0 1px 2px #ddd,0px 0 5px #28a0e5;
        -o-box-shadow: inset 0 1px 2px #ddd,0px 0 5px #28a0e5;
        box-shadow: inset 0 1px 2px #dddddd, 0px 0 5px #28a0e5;
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
    .login-wrapper .box .signup {
        text-transform: uppercase;
        font-size: 13px;
        padding: 7px 25px;
        border-radius: 5px;
    }
    .login-wrapper .already {
        margin: 0 auto;
        float: none;
        text-align: center;
        font-size: 15px;
        margin-top: 30px;
    }
    .login-wrapper .already p {
        display: inline-block;
        color: #aaaaaa;
    }
    .login-wrapper .already a {
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
    .login-wrapper .already a:hover {
        text-decoration: none;
        color: #000;
        border-bottom-color: #000;
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
