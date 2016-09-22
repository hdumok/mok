<template>
    <header class="navbar navbar-inverse" role="banner">
        <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" id="menu-toggler">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html"><img src="/static/img/logo.png"></a>
        </div>
        <ul class="nav navbar-nav pull-right hidden-xs">
            <li class="notification-dropdown hidden-xs hidden-sm">
                <a href="#" class="trigger">
                    <i class="icon-envelope"></i>
                    <span class="count">8</span>
                </a>
                <div class="pop-dialog">
                    <div class="pointer right">
                        <div class="arrow"></div>
                        <div class="arrow_border"></div>
                    </div>
                    <div class="body">
                        <a href="#" class="close-icon"><i class="icon-remove-sign"></i></a>
                        <div class="notifications">
                            <h3>你有6条信息</h3>
                            <a href="#" class="item">
                                <i class="icon-signin"></i> 新用户注册
                                <span class="time"><i class="icon-time"></i> 13分钟前.</span>
                            </a>
                            <a href="#" class="item">
                                <i class="icon-signin"></i> 新用户注册
                                <span class="time"><i class="icon-time"></i> 18分钟前.</span>
                            </a>
                            <a href="#" class="item">
                                <i class="icon-envelope-alt"></i> 新消息来自Alejandra
                                <span class="time"><i class="icon-time"></i> 28分钟前.</span>
                            </a>
                            <a href="#" class="item">
                                <i class="icon-signin"></i> 新用户注册
                                <span class="time"><i class="icon-time"></i> 49分钟前.</span>
                            </a>
                            <a href="#" class="item">
                                <i class="icon-download-alt"></i> 新订单
                                <span class="time"><i class="icon-time"></i> 1天前.</span>
                            </a>
                            <div class="footer">
                                <a href="#" class="logout">查看所有消息</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="dropdown">
                <a href="javascript;" class="dropdown-toggle hidden-xs hidden-sm" data-toggle="dropdown">
                    你的账号
                    <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="personal-info.html">个人信息</a></li>
                    <li><a href="#">账号设置</a></li>
                    <li><a href="#">账单</a></li>
                </ul>
            </li>
        </ul>
    </header>
</template>


<script>
    export default {
        data (){
            return {};
        }
    }
</script>

<style scoped>
    .navbar-inverse {
        /* navbar settings and logout icons */
        /* notification menu with custom dropdowns */
        /* navbar popup dialog */
    }
    .navbar-inverse input.search {
        height: 27px;
        width: 220px;
        padding: 3px 6px;
        background: url("/static/img/lens.png") #0f1217 no-repeat 95%;
        border: 1px solid #0f1217;
        position: relative;
        border-radius: 4px;
        top: 9px;
        color: #000;
        font-size: 13px;
        margin-right: 40px;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear;
        transition: all .3s linear;
    }
    .navbar-inverse input.search:focus {
        background-color: #fff;
        border: 0;
    }
    .navbar-inverse .settings i {
        color: #9ba3ad;
        font-size: 21px;
    }
    .navbar-inverse .notification-dropdown {
        position: relative;
    }
    .navbar-inverse .notification-dropdown > a:hover,
    .navbar-inverse .notification-dropdown > a.active {
        background: #254261 !important;
        box-shadow: inset 1px 0px 1px 0px #3e5a79;
    }
    .navbar-inverse .notification-dropdown i {
        font-size: 17px;
        color: #9ba3ad;
    }
    .navbar-inverse .notification-dropdown .count {
        position: absolute;
        top: 1px;
        left: 58%;
        background: #35bac4;
        padding: 0px 5px;
        border-radius: 30px;
        color: #fff;
        line-height: 16px;
        z-index: 9999;
        text-align: center;
        font-size: 11px;
    }
    .navbar-inverse .pop-dialog {
        position: absolute;
        right: -10px;
        top: 55px;
        display: none;
        /* navbar popup dialog for notifications */
        /* navbar popup dialog for messages */
    }
    .navbar-inverse .pop-dialog.is-visible {
        display: block;
        -webkit-animation: reveal .2s ease-out;
        -moz-animation: reveal .2s ease-out;
        animation: reveal .2s ease-out;
    }
    .navbar-inverse .pop-dialog .body {
        box-shadow: 0px 1px 9px 1px #c2c2c2;
    }
    .navbar-inverse .pop-dialog .close-icon {
        float: right;
        text-decoration: none;
        z-index: 9999;
        position: relative;
    }
    .navbar-inverse .pop-dialog .footer {
        border-top: 1px solid #e6e8e9;
        background-color: #eff4f7;
        margin: 15px 0px -10px 0px;
        border-radius: 0px 0px 5px 5px;
        padding: 12px 20px;
        text-align: center;
    }
    .navbar-inverse .pop-dialog .footer a {
        font-weight: 600;
        color: #7d91a8;
    }
    .navbar-inverse .pop-dialog .notifications {
        width: 330px;
        margin: 10px -10px 0px -10px;
    }
    .navbar-inverse .pop-dialog .notifications h3 {
        font-size: 13px;
        color: #404951;
        font-weight: bold;
        padding-left: 20px;
        margin-top: 5px;
        margin-bottom: 15px;
    }
    .navbar-inverse .pop-dialog .notifications .item {
        display: block;
        padding: 10px 0px 8px 20px;
        border-top: 1px solid #e7e8ea;
        color: #363636;
        text-decoration: none;
        padding-left: 50px;
        position: relative;
        transition: all .25s linear;
        -moz-transition: all .25s linear;
        -webkit-transition: all .25s linear;
        -o-transition: all .25s linear;
    }
    .navbar-inverse .pop-dialog .notifications .item:hover {
        background: #f0f6ff;
    }
    .navbar-inverse .pop-dialog .notifications .item > i {
        color: #fc827b;
        position: absolute;
        left: 19px;
        font-size: 18px;
    }
    .navbar-inverse .pop-dialog .notifications .item > i.icon-user {
        left: 18px;
    }
    .navbar-inverse .pop-dialog .notifications .item .time {
        float: right;
        color: #82a3c1;
        font-style: italic;
        font-weight: 600;
        font-size: 11px;
        min-width: 60px;
        margin-right: 5px;
    }
    .navbar-inverse .pop-dialog .notifications .item .time i {
        font-size: 13px;
        color: #cfcfcf;
        margin-right: 1px;
    }
    .navbar-inverse .pop-dialog .messages {
        width: 325px;
        margin: 10px -10px 0px -10px;
    }
    .navbar-inverse .pop-dialog .messages .item {
        display: block;
        padding: 10px 20px 15px 20px;
        height: 80px;
        border-bottom: 1px solid #e7e8ea;
        color: #363636;
        text-decoration: none;
        position: relative;
        transition: all .25s linear;
        -moz-transition: all .25s linear;
        -webkit-transition: all .25s linear;
        -o-transition: all .25s linear;
    }
    .navbar-inverse .pop-dialog .messages .item.last {
        border-bottom: 0px;
    }
    .navbar-inverse .pop-dialog .messages .item:hover {
        background: #f0f6ff;
    }
    .navbar-inverse .pop-dialog .messages .item .display {
        float: left;
        border-radius: 50px;
        margin-right: 15px;
    }
    .navbar-inverse .pop-dialog .messages .item .name {
        font-size: 12px;
        color: #404951;
        font-weight: bold;
    }
    .navbar-inverse .pop-dialog .messages .item .msg {
        font-size: 11px;
        color: #636363;
        line-height: 13px;
        position: relative;
        top: 2px;
    }
    .navbar-inverse .pop-dialog .messages .item .time {
        position: absolute;
        right: 0px;
        bottom: 6px;
        color: #82a3c1;
        font-style: italic;
        font-weight: 600;
        font-size: 11px;
        min-width: 60px;
        margin-right: 5px;
    }
    .navbar-inverse .pop-dialog .messages .item .time i {
        font-size: 13px;
        color: #cfcfcf;
        margin-right: 1px;
    }
    .navbar-inverse .pop-dialog .messages .footer {
        margin-top: 6px;
    }

</style>