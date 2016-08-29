<template>
  <div class="table-responsive">
        <table id="data-table" class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th v-for="key in columns" @click="sortBy(key)" :class="{active: sortKey == key}" >
                        {{key.title | capitalize}}
                        <span class="arrow"
                            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in data | filterBy filterKey | orderBy sortKey sortOrders[sortKey]">
                    <td v-for="key in columns">
                      {{entry[key.field]}}
                    </td>
                </tr>                
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        data:Array,
        columns:Array
    },
    data: function () {
        var sortOrders = {}
        /*this.columns.forEach(function (key) {
          sortOrders[key] = 1
        })*/
        return {
          sortKey: '',
          sortOrders: sortOrders
        }
    },
    ready: function () {
        console.log('-----v-grid........');
    },
    methods : {
        sortBy: function (key) {
          this.sortKey = key
          this.sortOrders[key] = this.sortOrders[key] * -1
    }
    }
}  
</script>
