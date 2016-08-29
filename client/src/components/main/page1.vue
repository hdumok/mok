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
            <h4 class="panel-title">页面已{{title}}</h4>
        </div>
        <div class="panel-body">           
            <v-grid :data = "gridContent" :columns = "gridHeader" ></v-grid>
        </div>
    </div>
  </div>
</template>

<script>
import VGrid from '../common/v-grid.vue'
export default {
  data () {
    return {
		title:'库存平台数据',
		gridContent: [{
	        col1: 'asdasdsad',
	        col2: 1,
	        col3: 1,
	        col4: 1
	    },
	    {
	        col1: 'sdfsdfdsfewrw',
	        col2: 2,
	        col3: 2,
	        col4: 2
	    },
	    {
	        col1: 'sdfsfsdfs',
	        col2: 3,
	        col3: 3,
	        col4: 3
	    }],
		gridHeader: [
			{field:'col1',title:'目标',width:100},
			{field:'col2',title:'日志',width:100},
			{field:'col3',title:'日期',width:100},
			{field:'col4',title:'状态',width:100}
		],
		AorB: false
    }
  },
  components: {
    VGrid
  },
  ready: function () {
    console.log('-----page1........');
  }
}
</script>