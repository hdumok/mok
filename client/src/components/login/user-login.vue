<template>
  <!-- begin #page-container -->
  <div id="page-container" class="fade in">
      <!-- begin login -->
        <div class="login bg-black animated fadeInDown">
            <!-- begin brand -->
            <div class="login-header">
                <div class="brand">
                    <span class="logo"></span> B2B库存管理系统
                    <small>{{title}}</small>
                </div>
                <div class="icon">
                    <i class="fa fa-sign-in"></i>
                </div>
            </div>
            <!-- end brand -->
            <div class="login-content">
                <form action="index.html" method="GET" class="margin-bottom-0">
                    <div class="form-group m-b-20">
                        <input type="text" class="form-control input-lg" placeholder="邮件地址" />
                    </div>
                    <div class="form-group m-b-20">
                        <input type="text" class="form-control input-lg" placeholder="密码" />
                    </div>
                    <label class="checkbox m-b-20">
                        <input type="checkbox" /> 记住账号
                        <a v-link="{path:'/register'}">
                            <span class="badge pull-right">10</span>
                            <i class="fa fa-inbox"></i> <span>page1</span>
                        </a>
                    </label>
                    <div class="login-buttons">
                        <button id="login" type="submit" class="btn btn-success btn-block btn-lg">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- end login -->
  </div>
  <!-- end page container -->
</template>
<script>

import VGrid from '../common/v-grid.vue'
export default {
  data () {
    return {
      title:'步步高集团B2B事业部1'
    }
  },
  components: {
    VGrid
  },
  ready: function () {
    console.log('-----logining........');
  }
}
</script>