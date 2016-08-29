<template>
<div id="content" class="content">
  <h1 class="page-header">系统登录 <small>header small text goes here...</small></h1>
  
  <div class="panel panel-inverse">
      <div class="panel-heading">
          <div class="panel-heading-btn">
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-repeat"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
          </div>
          <h4 class="panel-title">Panel Title here</h4>
      </div>
      <div class="panel-body">
          <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal-dialog">登录</button>
      </div>
  </div>
</div>
<!-- #modal-dialog -->
<div class="modal fade" id="modal-dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
        <h4 class="modal-title">Modal Dialog</h4>
      </div>
      <div class="modal-body">
        Modal body content here...
      </div>
      <div class="modal-footer">
        <a href="javascript:;" class="btn btn-sm btn-white" data-dismiss="modal">Close</a>
        <a href="javascript:;" class="btn btn-sm btn-success">Action</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello from Component A!'
    }
  },
  ready: function () {
    $('#modal-dialog').modal('show');
  }
}
</script>
