<template>
  <div id="content" class="content">
    <ol class="breadcrumb pull-right">
      <li><a href="javascript:;">Home</a></li>
      <li><a href="javascript:;">Page Options</a></li>
      <li class="active">Blank Page</li>
    </ol>
    <h1 class="page-header">Blank Page <small>header small text goes here...</small></h1>
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
            Panel Content Here {{title}}
            <v-grid></v-grid>
        </div>
    </div>
  </div>
</template>

<script>
import VGrid from '../common/v-grid.vue'
export default {
  data () {
    return {
      title:'步步高集团B2B事业部2'
    }
  },
  components: {
    VGrid
  },
  ready: function () {
    console.log('-----maincontent........');
  }
}
</script>