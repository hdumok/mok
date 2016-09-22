<template>
    <div id="sidebar-nav">
        <ul id="dashboard-menu">
            <li class="active">
                <a v-link="{path: '/'}">
                    <i class="icon-home"></i>
                    <span>首页</span>
                </a>
            </li>
            <li>
                <a v-link="{path: '/wechat'}">
                    <i class="icon-comments"></i>
                    <span>微信</span>
                </a>
            </li>
            <li>
                <a class="dropdown-toggle" href="#">
                    <i class="icon-group"></i>
                    <span>用户</span>
                    <i class="icon-chevron-down"></i>
                </a>
                <ul class="submenu">
                    <li><a href="user-list.html">用户列表</a></li>
                    <li><a href="new-user.html">新用户</a></li>
                    <li><a href="user-profile.html">用户资料</a></li>
                </ul>
            </li>
            <li>
                <a class="dropdown-toggle" href="#">
                    <i class="icon-edit"></i>
                    <span>表单</span>
                    <i class="icon-chevron-down"></i>
                </a>
                <ul class="submenu">
                    <li><a href="form-showcase.html">表单应用</a></li>
                    <li><a href="form-wizard.html">表单验证</a></li>
                </ul>
            </li>
            <li>
                <a href="gallery.html">
                    <i class="icon-picture"></i>
                    <span>相册</span>
                </a>
            </li>
            <li>
                <a href="calendar.html">
                    <i class="icon-calendar-empty"></i>
                    <span>日历</span>
                </a>
            </li>
            <li>
                <a class="dropdown-toggle" href="tables.html">
                    <i class="icon-th-large"></i>
                    <span>表格</span>
                    <i class="icon-chevron-down"></i>
                </a>
                <ul class="submenu">
                    <li><a href="tables.html">常用表格</a></li>
                    <li><a href="datatables.html">数据表格</a></li>
                </ul>
            </li>
            <li>
                <a class="dropdown-toggle ui-elements" href="#">
                    <i class="icon-code-fork"></i>
                    <span>UI 组件</span>
                    <i class="icon-chevron-down"></i>
                </a>
                <ul class="submenu">
                    <li><a href="ui-elements.html">UI 组件</a></li>
                    <li><a href="icons.html">Icons图标</a></li>
                </ul>
            </li>
            <li>
                <a href="personal-info.html">
                    <i class="icon-cog"></i>
                    <span>我的信息</span>
                </a>
            </li>
            <li>
                <a class="dropdown-toggle" href="#">
                    <i class="icon-share-alt"></i>
                    <span>其他</span>
                    <i class="icon-chevron-down"></i>
                </a>
                <ul class="submenu">
                    <li><a href="code-editor.html">代码编辑器</a></li>
                    <li><a href="grids.html">网格</a></li>
                    <li><a href="signin.html">登录</a></li>
                    <li><a href="signup.html">注册</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data (){
            return {};
        }
    }
</script>

<style scoped>

    #sidebar-nav {
        position: absolute;
        width: 180px;
        float: left;
        margin: 0em;
        padding-top: 0em;
    }
    #sidebar-nav #dashboard-menu {
        list-style: none;
        padding-right: 15px;
        padding-left: 15px;
        margin-bottom: 0;
        margin-left: 20px;
        /* sidebar submenus */
    }
    #sidebar-nav #dashboard-menu > li > a {
        display: block;
        padding: 19px 14px 15px 14px;
        margin-left: -15px;
        margin-bottom: 5px;
        border-bottom: 1px solid #dae1e8;
        box-shadow: 0 2px 1px -1px #FFFFFF;
        color: #6e829b;
        outline: 0px;
        line-height: 21px;
    }
    #sidebar-nav #dashboard-menu > li {
        position: relative;
        /* font awesome icon */
    }
    #sidebar-nav #dashboard-menu > li .icon-group {
        font-size: 22px;
    }
    #sidebar-nav #dashboard-menu > li i {
        font-size: 23px;
        top: 17px;
    }
    #sidebar-nav #dashboard-menu > li:hover i {
        opacity: 1;
    }
    #sidebar-nav #dashboard-menu > li.active > a,
    #sidebar-nav #dashboard-menu > li > a:hover {
        color: #33455a;
        text-decoration: none;
    }
    #sidebar-nav #dashboard-menu > li.active a {
        font-weight: 600;
        text-shadow: 1px 1px 1px #fff;
    }
    #sidebar-nav #dashboard-menu > li.active i {
        opacity: 1;
    }
    #sidebar-nav #dashboard-menu .pointer {
        position: absolute;
        right: 9px;
        top: 20px;
    }
    #sidebar-nav #dashboard-menu .pointer .arrow,
    #sidebar-nav #dashboard-menu .pointer .arrow_border {
        border-color: transparent #fff transparent transparent;
        border-width: 11px;
        border-style: solid;
        font-size: 0;
        left: 50%;
        line-height: 0;
        margin: 0 auto;
        position: absolute;
        top: 0;
        width: 0;
        z-index: 1002;
        left: 0;
        margin-left: 45%;
    }
    #sidebar-nav #dashboard-menu .pointer .arrow_border {
        border-color: transparent #c0d2dd transparent transparent;
        border-width: 11px;
        margin-left: -1px;
        border-style: solid;
        z-index: 1001;
        top: 0px;
    }
    #sidebar-nav #dashboard-menu a span {
        margin-left: 35px;
        transition: color .1s linear;
        -moz-transition: color .1s linear;
        -webkit-transition: color .1s linear;
        -o-transition: color .1s linear;
    }
    #sidebar-nav #dashboard-menu a.ui-elements span {
        margin-left: 25px;
    }
    #sidebar-nav #dashboard-menu a i {
        position: absolute;
        left: 0;
        height: 24px;
        width: 24px;
        opacity: 0.7;
        transition: opacity .1s ease;
        -moz-transition: opacity .1s ease;
        -webkit-transition: opacity .1s ease;
        -o-transition: opacity .1s ease;
    }
    #sidebar-nav #dashboard-menu a i.icon-chevron-down {
        position: relative;
        float: right;
        top: 5px;
        font-size: 11px;
        color: #686868;
        width: initial;
        height: initial;
    }
    #sidebar-nav #dashboard-menu > li.active .dropdown-toggle {
        border-bottom: 0px;
        box-shadow: none;
    }
    #sidebar-nav #dashboard-menu ul.submenu {
        list-style-type: none;
        display: none;
        margin-top: 7px;
        margin-bottom: 15px;
        margin-right: 5px;
        margin-left: -15px;
        padding-left: 15px;
        border-bottom: 1px solid #dae1e8;
        box-shadow: 0 2px 1px -1px #FFFFFF;
        padding-bottom: 10px;
    }
    #sidebar-nav #dashboard-menu ul.submenu.active {
        display: block;
    }
    #sidebar-nav #dashboard-menu ul.submenu a {
        font-weight: normal;
        font-size: 13px;
        color: #4c535a;
        text-decoration: none;
        display: block;
        margin-bottom: 7px;
    }
    #sidebar-nav #dashboard-menu ul.submenu a:hover {
        text-decoration: underline;
    }
    #sidebar-nav #dashboard-menu ul.submenu a.active {
        font-weight: bold;
        text-shadow: none;
    }

</style>
